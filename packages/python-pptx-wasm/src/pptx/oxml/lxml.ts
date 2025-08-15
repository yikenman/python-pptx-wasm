import { append_packed_id, Dict, List, PackedBase, py_funs, Tuple } from '../../bridge';

/**
 * not implemented
 */
export class _XPathObject extends PackedBase {}

export class _Attrib extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, _Element);
  }

  clear() {
    const pid = append_packed_id(this.packed_id, 'clear');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  get(key: string) {
    const pid = append_packed_id(this.packed_id, 'get');
    return py_funs.call_method<string | undefined>(pid, arguments, key);
  }

  has_key() {
    const pid = append_packed_id(this.packed_id, 'has_key');
    return py_funs.call_method<boolean>(pid, arguments);
  }

  items() {
    const pid = append_packed_id(this.packed_id, 'items');
    return py_funs.call_method<[string, string][]>(pid, arguments);
  }

  iteritems() {
    const pid = append_packed_id(this.packed_id, 'iteritems');
    return py_funs.call_method<string[]>(pid, arguments);
  }

  iterkeys() {
    const pid = append_packed_id(this.packed_id, 'iterkeys');
    return py_funs.call_method<string[]>(pid, arguments);
  }

  itervalues() {
    const pid = append_packed_id(this.packed_id, 'itervalues');
    return py_funs.call_method<string[]>(pid, arguments);
  }

  keys() {
    const pid = append_packed_id(this.packed_id, 'keys');
    return py_funs.call_method<string[]>(pid, arguments);
  }

  pop(key: string) {
    const pid = append_packed_id(this.packed_id, 'pop');
    return py_funs.call_method<string>(pid, arguments, key);
  }

  update(sequence_or_dict: Record<string, string> | [string, string][]) {
    const pid = append_packed_id(this.packed_id, 'update');
    return py_funs.call_method<undefined>(
      pid,
      arguments,
      Array.isArray(sequence_or_dict) ? List(sequence_or_dict.map((ele) => Tuple(ele))) : Dict(sequence_or_dict)
    );
  }

  values() {
    const pid = append_packed_id(this.packed_id, 'values');
    return py_funs.call_method<string[]>(pid, arguments);
  }
}

export class _Element extends PackedBase {
  addnext(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'addnext');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  addprevious(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'addprevious');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  append(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'append');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  get attrib() {
    const pid = append_packed_id(this.packed_id, 'attrib');
    return py_funs.get_attr_returns_instance(pid, _Attrib);
  }

  get base() {
    const pid = append_packed_id(this.packed_id, 'base');
    return py_funs.get_attr<string>(pid);
  }

  clear(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'clear');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  /**
   * not implemented
   */
  cssselect() {
    console.log('not implemented');
    return undefined;
  }

  extend(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'extend');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  find(path: string) {
    const pid = append_packed_id(this.packed_id, 'find');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, path);
  }

  findall(path: string, namespaces?: Record<string, string> | undefined) {
    const pid = append_packed_id(this.packed_id, 'findall');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, path, Dict(namespaces));
  }

  findtext(path: string, default_?: string | undefined, namespaces?: Record<string, string> | undefined) {
    const pid = append_packed_id(this.packed_id, 'findtext');
    return py_funs.call_method<string | undefined>(pid, arguments, path, default_, Dict(namespaces));
  }

  get(key: string) {
    const pid = append_packed_id(this.packed_id, 'get');
    return py_funs.call_method<string | undefined>(pid, arguments, key);
  }

  getnext() {
    const pid = append_packed_id(this.packed_id, 'getnext');
    return py_funs.call_method_returns_instance_or_undefined(pid, _Element, arguments);
  }

  getparent() {
    const pid = append_packed_id(this.packed_id, 'getparent');
    return py_funs.call_method_returns_instance_or_undefined(pid, _Element, arguments);
  }

  getprevious() {
    const pid = append_packed_id(this.packed_id, 'getprevious');
    return py_funs.call_method_returns_instance_or_undefined(pid, _Element, arguments);
  }

  /**
   * not implemented
   */
  getroottree() {
    console.log('not implemented');
    return undefined;
  }

  index(child: _Element, start?: number | undefined, end?: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.call_method<number>(pid, arguments, child, start, end);
  }

  insert(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'insert');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  items() {
    const pid = append_packed_id(this.packed_id, 'items');
    return py_funs.call_method<[string, string][]>(pid, arguments);
  }

  iter(tag?: string | undefined, ...tags: string[]) {
    const pid = append_packed_id(this.packed_id, 'iter');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, tag, ...tags);
  }

  iterancestors(tag: string | string[] | undefined) {
    const pid = append_packed_id(this.packed_id, 'iterancestors');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, Array.isArray(tag) ? List(tag) : tag);
  }

  iterchildren(tags: string, reversed: boolean = false) {
    const pid = append_packed_id(this.packed_id, 'iterchildren');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, tags, reversed);
  }

  iterdescendants(tag?: string | undefined, ...tags: string[]) {
    const pid = append_packed_id(this.packed_id, 'iterdescendants');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, tag, ...tags);
  }

  iterfind(path: string, namespaces?: Record<string, string> | undefined) {
    const pid = append_packed_id(this.packed_id, 'iterfind');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, path, Dict(namespaces));
  }

  itersiblings(tag?: string | undefined, ...tags: string[]) {
    const pid = append_packed_id(this.packed_id, 'itersiblings');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, tag, ...tags);
  }

  itertext(tags: string, with_tail: boolean = true) {
    const pid = append_packed_id(this.packed_id, 'itertext');
    return py_funs.call_method_returns_instance_list(pid, _Element, arguments, tags, with_tail);
  }

  keys() {
    const pid = append_packed_id(this.packed_id, 'keys');
    return py_funs.call_method<string[]>(pid, arguments);
  }

  /**
   * not implemented
   */
  makeelement() {
    console.log('not implemented');
    return undefined;
  }

  get nsmap() {
    const pid = append_packed_id(this.packed_id, 'nsmap');
    return py_funs.get_attr<Record<string, string>>(pid);
  }

  get prefix() {
    const pid = append_packed_id(this.packed_id, 'prefix');
    return py_funs.get_attr<string | undefined>(pid);
  }

  remove(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'remove');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  replace(element: _Element) {
    const pid = append_packed_id(this.packed_id, 'replace');
    return py_funs.call_method<undefined>(pid, arguments, element);
  }

  set(key: string, value: string) {
    const pid = append_packed_id(this.packed_id, 'set');
    return py_funs.call_method<undefined>(pid, arguments, key, value);
  }

  get sourceline() {
    const pid = append_packed_id(this.packed_id, 'sourceline');
    return py_funs.get_attr<number | undefined>(pid);
  }

  get tag() {
    const pid = append_packed_id(this.packed_id, 'tag');
    return py_funs.get_attr<string>(pid);
  }

  get tail() {
    const pid = append_packed_id(this.packed_id, 'tail');
    return py_funs.get_attr<string | undefined>(pid);
  }

  set text(text: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'text');
    py_funs.set_attr(pid, text);
  }
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr<string | undefined>(pid);
  }

  values() {
    const pid = append_packed_id(this.packed_id, 'values');
    return py_funs.get_attr<string[]>(pid);
  }

  xpath(path: string, namespaces?: Record<string, string> | undefined) {
    const pid = append_packed_id(this.packed_id, 'xpath');
    return py_funs.get_attr_returns_instance(pid, _XPathObject);
  }
}

export class ElementBase extends _Element {}
