import type { loadPyodide } from 'pyodide';
import {
  CONNECTOR,
  DATETIME_PREFIX,
  DICT_PREFIX,
  DIVIDER,
  ENUM_PREFIX,
  LENGTH_PREFIX,
  LIST_PREFIX,
  PACKED_PREFIX,
  RGB_PREFIX,
  TUPLE_PREFIX
} from './constant';
import { core_funs, is_core_funs_ready } from './py_funs';

export const init_pyodide_bridge = async (pyodide: Awaited<ReturnType<typeof loadPyodide>>) => {
  if (!pyodide) {
    throw new Error();
  }

  if (is_core_funs_ready()) {
    return;
  }

  await pyodide.loadPackage('python-pptx', {
    errorCallback: console.error,
    messageCallback: console.log
  });
  pyodide.runPython(`

from pptx import Presentation as presentation_fun
from pptx.presentation import Presentation
from pptx.chart.data import ChartData
from pptx.enum import action as pptx_enum_action, chart as pptx_enum_chart, dml as pptx_enum_dml
from pptx.enum import lang as pptx_enum_lang, shapes as pptx_enum_shapes, text as pptx_enum_text
from pptx.util import Length
from pptx.dml.color import RGBColor
from functools import reduce, partial
from collections.abc import Iterator, Generator
from io import BytesIO
from datetime import datetime
import uuid, enum, json, re
from typing import Any

_store: dict[str, dict[str, object]] = {}
_enum_modules = [pptx_enum_action, pptx_enum_chart, pptx_enum_dml, pptx_enum_lang, pptx_enum_shapes, pptx_enum_text]
_gen_id = lambda: uuid.uuid4().hex

DIVIDER, CONNECTOR = "${DIVIDER}", "${CONNECTOR}"
PACKED_PREFIX, ENUM_PREFIX, LENGTH_PREFIX, DATETIME_PREFIX = "${PACKED_PREFIX}", "${ENUM_PREFIX}", "${LENGTH_PREFIX}", "${DATETIME_PREFIX}"
LIST_PREFIX, TUPLE_PREFIX, DICT_PREFIX, RGB_PREFIX = "${LIST_PREFIX}", "${TUPLE_PREFIX}", "${DICT_PREFIX}", "${RGB_PREFIX}"

def _parse_packed_id(p: str):
    if p.startswith(PACKED_PREFIX): p = p[len(PACKED_PREFIX):]
    s, o, *rest = p.split(DIVIDER, 2)
    if not o: raise ValueError("Invalid packed_id")
    return s, o, rest[0] if rest else None

def _resolve_path(obj, path: str):
    return reduce(lambda o, k: o[int(k)] if k.isdigit() else getattr(o, k), path.split(CONNECTOR), obj)

def _get(scope: str, obj_id: str, path=None):
    try: obj = _store[scope][obj_id]
    except KeyError: raise ValueError(f"Object not found: scope={scope}, obj_id={obj_id}")
    return _resolve_path(obj, path) if path else obj

def _call(packed_id: str, *args):
    scope, obj_id, path = _parse_packed_id(packed_id)
    if not path: raise ValueError("Missing method path")
    fn = _get(scope, obj_id, path)
    if not callable(fn): raise TypeError(f"{path} is not callable")
    return fn(*(_deserialize_value(a) for a in args)), scope

def _deser_enum(v): 
    cls, name, raw = v[len(ENUM_PREFIX):].split(CONNECTOR)
    for mod in _enum_modules:
        if hasattr(mod, cls): return getattr(mod, cls)(int(raw))
    raise ValueError(f"Invalid enum: {v}")

def _deser_len(v): return Length(int(v[len(LENGTH_PREFIX):]))
def _deser_dt(v): return datetime.fromisoformat(v[len(DATETIME_PREFIX):])
def _deser_rgb(v): return RGBColor(*map(int, v[len(RGB_PREFIX):].split(CONNECTOR)))
def _deser_container(val: str, prefix: str):
    raw_json = val[len(prefix):]  # skip prefix + ':'
    data = json.loads(raw_json)
    conv = _deserialize_value
    if prefix == LIST_PREFIX: return [conv(i) for i in data]
    if prefix == TUPLE_PREFIX: return tuple(conv(i) for i in data)
    if prefix == DICT_PREFIX: return {k: conv(v) for k, v in data.items()}
    raise ValueError(f"Unknown container prefix: {prefix}")

def _deserialize_packed(v):
    if isinstance(v, str) and DIVIDER in v:
        s, o, p = _parse_packed_id(v)
        return _get(s, o, p)
    if isinstance(v, list) and all(isinstance(i, str) and DIVIDER in i for i in v):
        return [_deserialize_packed(i) for i in v]
    return v

_DESER_MAP = {
    ENUM_PREFIX: _deser_enum,
    LENGTH_PREFIX: _deser_len,
    DATETIME_PREFIX: _deser_dt,
    RGB_PREFIX: _deser_rgb,
    LIST_PREFIX: partial(_deser_container, prefix=LIST_PREFIX),
    TUPLE_PREFIX: partial(_deser_container, prefix=TUPLE_PREFIX),
    DICT_PREFIX: partial(_deser_container, prefix=DICT_PREFIX),
    PACKED_PREFIX: _deserialize_packed,
}
_PREFIX_RE = re.compile(r'^(' + '|'.join(map(re.escape, tuple(_DESER_MAP.keys()))) + r')')

def _deserialize_value(v):
    if isinstance(v, str):
        m = _PREFIX_RE.match(v)
        if m is not None:
            return _DESER_MAP.get(m.group(1))(v)
    if hasattr(v, "to_py"):
        mv = v.to_py()
        if isinstance(mv, memoryview):
            return BytesIO(mv.tobytes())
    return v

def _serialize_value(v):
    if isinstance(v, enum.Enum): return f"{ENUM_PREFIX}{v.__class__.__name__}{CONNECTOR}{v.name}{CONNECTOR}{v.value}"
    if isinstance(v, Length): return f"{LENGTH_PREFIX}{v.emu}"
    if isinstance(v, datetime): return f"{DATETIME_PREFIX}{v.isoformat()}"
    if isinstance(v, RGBColor): return f"{RGB_PREFIX}{v[0]}{CONNECTOR}{v[1]}{CONNECTOR}{v[2]}"
    if isinstance(v, list): return f"{LIST_PREFIX}{json.dumps([_serialize_value(i) for i in v])}"
    if isinstance(v, tuple): return f"{TUPLE_PREFIX}{json.dumps([_serialize_value(i) for i in v])}"
    if isinstance(v, dict): return f"{DICT_PREFIX}{json.dumps({k: _serialize_value(i) for k, i in v.items()})}"
    if isinstance(v, (Iterator, Generator)): return _serialize_value(list(v))
    return v

def create_presentation(uint8_proxy: Any | None = None):
    scope, obj_id = _gen_id(), _gen_id()
    io_bytes = BytesIO(uint8_proxy.to_py().tobytes()) if uint8_proxy else None
    _store.setdefault(scope, {})[obj_id] = presentation_fun(io_bytes)
    return f"{PACKED_PREFIX}{scope}{DIVIDER}{obj_id}"

def create_category_chart_data(packed_id: str, number_format: str | None = "General"):
    scope, _, _ = _parse_packed_id(packed_id)
    oid = _gen_id(); _store.setdefault(scope, {})[oid] = ChartData(number_format)
    return f"{PACKED_PREFIX}{scope}{DIVIDER}{oid}"

def end(packed_id: str): _store.pop(_parse_packed_id(packed_id)[0], None)

def save(packed_id: str) -> bytes:
    s, o, p = _parse_packed_id(packed_id)
    if p: raise ValueError("Cannot save with property path")
    prs = _get(s, o)
    if not isinstance(prs, Presentation): raise TypeError(f"Not a Presentation instance: {type(prs)}")
    buf = BytesIO(); prs.save(buf); buf.seek(0); return buf.getvalue()

def _get_attr(kind, pid):
    s, o, p = _parse_packed_id(pid)
    if not p: raise ValueError("Missing attribute path")
    val = _get(s, o, p)
    if kind == "len": return len(val)
    if kind == "instance": return _serialize_value((pid, type(val).__name__ if val is not None else None))
    if kind == "instances": 
        return _serialize_value((pid, [type(i).__name__ if i is not None else None for i in val]))
    return _serialize_value(val)

get_attr = partial(_get_attr, "value")
get_attr_len = partial(_get_attr, "len")
get_attr_returns_instance = partial(_get_attr, "instance")
get_attr_returns_instances = partial(_get_attr, "instances")

def _call_method(kind, pid, *args):
    r, scope = _call(pid, *args)
    if kind == "value": return _serialize_value(r)
    if kind == "instance":
        if r is None: return _serialize_value((None, None))
        oid = _gen_id(); _store[scope][oid] = r
        return _serialize_value((f"{PACKED_PREFIX}{scope}{DIVIDER}{oid}", type(r).__name__))
    if kind == "instances":
        if not hasattr(r, '__iter__') or isinstance(r, (str, bytes)): raise TypeError("Return value is not iterable")
        r = list(r)
        if not r: return _serialize_value((None, None))
        oid = _gen_id(); _store[scope][oid] = r
        return _serialize_value((f"{PACKED_PREFIX}{scope}{DIVIDER}{oid}", [type(i).__name__ if i is not None else None for i in r]))

call_method = partial(_call_method, "value")
call_method_returns_instance = partial(_call_method, "instance")
call_method_returns_instances = partial(_call_method, "instances")

def set_attr(pid: str, value):
    s, o, p = _parse_packed_id(pid)
    if not p: raise ValueError("Missing attribute path")
    *pp, last = p.split(CONNECTOR)
    parent = _get(s, o, CONNECTOR.join(pp)) if pp else _get(s, o)
    value = _deserialize_value(value)
    (parent.__setitem__ if last.isdigit() else setattr)(parent, int(last) if last.isdigit() else last, value)

`);

  // cache functions
  core_funs.create_presentation = pyodide.globals.get('create_presentation');
  core_funs.create_category_chart_data = pyodide.globals.get('create_category_chart_data');
  core_funs.end = pyodide.globals.get('end');
  core_funs.save = pyodide.globals.get('save');
  core_funs.get_attr = pyodide.globals.get('get_attr');
  core_funs.get_attr_len = pyodide.globals.get('get_attr_len');
  core_funs.get_attr_returns_instance = pyodide.globals.get('get_attr_returns_instance');
  core_funs.get_attr_returns_instances = pyodide.globals.get('get_attr_returns_instances');
  core_funs.set_attr = pyodide.globals.get('set_attr');
  core_funs.call_method = pyodide.globals.get('call_method');
  core_funs.call_method_returns_instance = pyodide.globals.get('call_method_returns_instance');
  core_funs.call_method_returns_instances = pyodide.globals.get('call_method_returns_instances');

  return;
};
