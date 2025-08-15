import { null_to_undefined_converter, undefined_to_null_converter } from '../utils';
import {
  CONNECTOR,
  DATETIME_PREFIX,
  DICT_PREFIX,
  ENUM_PREFIX,
  LENGTH_PREFIX,
  LIST_PREFIX,
  RGB_PREFIX,
  TUPLE_PREFIX
} from './constant';
import { DictType, EnumType, Length, LengthType, ListType, RGBColorType, TupleType } from './helper_types';
import { PackedBase } from './packed_base';

/**
 * Deserialize data produced by Python's serialize_value function.
 *
 * This does NOT handle instance conversions.
 *
 * Supported conversions:
 *
 * - Python str -> JS string
 * - Python int/float -> JS number
 * - Python bool -> JS boolean
 * - Python None -> JS undefined
 * - Enum strings -> corresponding number values
 * - Length strings -> LengthType instances
 * - Datetime strings -> JS Date objects
 * - RGB strings -> number arrays [r, g, b]
 * - List, Tuple strings -> JS arrays
 * - DictType strings -> JS objects
 * - PyBuffer (pyproxy) -> Uint8Array
 * - Packed strings are NOT processed here
 */
export function deserialize_value(val: any): any {
  if (typeof val === 'string') {
    if (val.startsWith(ENUM_PREFIX)) {
      return Number(val.slice(ENUM_PREFIX.length).split(CONNECTOR).at(-1)!);
    }

    if (val.startsWith(LENGTH_PREFIX)) {
      return Length(Number(val.slice(LENGTH_PREFIX.length)));
    }

    if (val.startsWith(DATETIME_PREFIX)) {
      return new Date(val.slice(DATETIME_PREFIX.length));
    }

    if (val.startsWith(RGB_PREFIX)) {
      return val.slice(RGB_PREFIX.length).split(CONNECTOR).map(Number);
    }

    if (val.startsWith(LIST_PREFIX)) {
      const raw = JSON.parse(val.slice(LIST_PREFIX.length), null_to_undefined_converter);
      return raw.map(deserialize_value);
    }

    if (val.startsWith(TUPLE_PREFIX)) {
      const raw = JSON.parse(val.slice(TUPLE_PREFIX.length), null_to_undefined_converter);
      return raw.map(deserialize_value);
    }

    if (val.startsWith(DICT_PREFIX)) {
      const raw = JSON.parse(val.slice(DICT_PREFIX.length), null_to_undefined_converter);
      const result: Record<string, any> = {};
      for (const [k, v] of Object.entries(raw)) {
        result[k] = deserialize_value(v);
      }
      return result;
    }
  }

  // ✅ 检测 PyBuffer / memoryview Proxy
  if (val?.getBuffer && typeof val.getBuffer === 'function') {
    const view = val.getBuffer('u8');
    val.destroy!();
    try {
      const uint8 = new Uint8Array(view.data.byteLength);
      uint8.set(new Uint8Array(view.data.buffer, view.data.byteOffset, view.data.byteLength));
      return uint8;
    } finally {
      view.release();
    }
  }

  return val;
}

/**
 * Serialize data to be passed to Python's _deserialize_value for processing.
 *
 * Supported conversions:
 *
 * - string -> Python str
 * - number -> Python int/float
 * - boolean -> Python bool
 * - undefined -> Python None
 * - EnumType -> enum string
 * - LengthType -> length string
 * - Date -> datetime string
 * - RGB -> rgb string
 * - ListType -> list string
 * - TupleType -> tuple string
 * - DictType -> dict string
 * - Uint8Array -> Uint8Array (jsproxy)
 * - PackedBase -> packed string
 */
export function serialize_value(val: any): string | number | boolean | Uint8Array | undefined {
  if (val instanceof EnumType) {
    return `${ENUM_PREFIX}${[val.enum_name, val.enum_type[val.enum_value], val.enum_value].join(CONNECTOR)}`;
  }

  if (val instanceof LengthType) {
    return `${LENGTH_PREFIX}${val.emu}`;
  }

  if (val instanceof Date) {
    return `${DATETIME_PREFIX}${val.toISOString()}`;
  }

  if (val instanceof RGBColorType) {
    return `${RGB_PREFIX}${val.rgb.join(CONNECTOR)}`;
  }

  if (val instanceof ListType) {
    const serialized: unknown[] = val.list.map((item: any) => serialize_value(item));
    return `${LIST_PREFIX}${JSON.stringify(serialized, undefined_to_null_converter)}`;
  }

  if (val instanceof TupleType) {
    const serialized: unknown[] = val.tuple.map((item: any) => serialize_value(item));
    return `${TUPLE_PREFIX}${JSON.stringify(serialized, undefined_to_null_converter)}`;
  }

  if (val instanceof DictType) {
    const serialized: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(val.dict)) {
      serialized[k] = serialize_value(v);
    }
    return `${DICT_PREFIX}${JSON.stringify(serialized, undefined_to_null_converter)}`;
  }

  if (Object.prototype.toString.call(val) === '[object Uint8Array]') {
    return val;
  }

  if (val instanceof PackedBase) {
    if (val.packed_id === undefined) {
      return undefined;
    }
    return val.packed_id;
  }

  return val;
}
