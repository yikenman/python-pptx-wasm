import { append_packed_id, PackedBase, py_funs } from '../bridge';
import { BaseOxmlElement } from './oxml/xmlchemy';

/**
 * Base class for lxml element proxy classes.
 *
 * An element proxy class is one whose primary responsibilities are fulfilled by manipulating the
 * attributes and child elements of an XML element. They are the most common type of class in
 * python-pptx other than custom element (oxml) classes.
 */
export abstract class ElementProxy extends PackedBase {
  abstract get _element(): BaseOxmlElement;

  /**
   * The lxml element proxied by this object.
   */
  get element() {
    return this._element;
  }
}

/**
 * Provides access to ancestor objects and part.
 *
 * An ancestor may occasionally be required to provide a service, such as add or drop a
 * relationship. Provides the `_parent` attribute to subclasses and the public
 * `parent` read-only property.
 */
export class ParentedElementProxy extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * The ancestor proxy object to this one.
   *
   * For example, the parent of a shape is generally the `SlideShapes` object that contains it.
   *
   * not implemented
   */
  get parent() {
    console.log('not implemented.');
    return undefined;
  }

  /**
   * The package part containing this object.
   *
   * not implemented
   */
  get part() {
    console.log('not implemented.');
    return undefined;
  }
}

/**
 * Provides common members for proxy-objects that wrap a part's root element, e.g. `p:sld`.
 */
export abstract class PartElementProxy extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * The package part containing this object.
   *
   * not implemented
   */
  get part() {
    console.log('not implemented.');
    return undefined;
  }
}
