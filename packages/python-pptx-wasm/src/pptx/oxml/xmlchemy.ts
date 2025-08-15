// not use in public methods:
// AttributeType
// OxmlElement
// serialize_for_reading
// XmlString
// MetaOxmlElement

import { append_packed_id, py_funs } from '../../bridge';
import { _Element, _XPathObject, ElementBase } from './lxml';

/**
 * Base class for all custom element classes with common XML behaviors.
 */
export class BaseOxmlElement extends ElementBase {
  /**
   * Returns first child element matching any of the provided tag names.
   */
  first_child_found_in(...tagnames: string[]) {
    const pid = append_packed_id(this.packed_id, 'first_child_found_in');
    return py_funs.call_method_returns_instance_or_undefined(pid, ElementBase, arguments, ...tagnames);
  }

  /**
   * Inserts element before first occurrence of any specified tag name.
   */
  insert_element_before(elm: ElementBase, ...tagnames: string[]) {
    const pid = append_packed_id(this.packed_id, 'insert_element_before');
    return py_funs.call_method_returns_instance(pid, ElementBase, arguments, elm, ...tagnames);
  }

  /**
   * Removes all child elements matching any of the specified tag names.
   */
  remove_all(...tagnames: string[]) {
    const pid = append_packed_id(this.packed_id, 'remove_all');
    return py_funs.call_method<undefined>(pid, arguments, ...tagnames);
  }

  /**
   * Returns pretty-printed XML string of the element (no declaration).
   */
  get xml() {
    const pid = append_packed_id(this.packed_id, 'xml');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * xpath(xpath_str)
   * Executes XPath query with standard Open XML namespace mapping.
   *
   * _XPathObject is not implemented
   */
  xpath() {
    const pid = append_packed_id(this.packed_id, 'xpath');
    return py_funs.get_attr_returns_instance(pid, _XPathObject);
  }
}
