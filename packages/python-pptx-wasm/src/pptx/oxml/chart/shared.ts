import { append_packed_id, py_funs } from '../../../bridge';
import { _Element } from '../lxml';
import { CT_ShapeProperties } from '../shapes/shared';
import { BaseOxmlElement } from '../xmlchemy';

/**
 * Common complex type used for elements having a True/False value.
 */
export class CT_Boolean extends BaseOxmlElement {
  set val(val: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * Always spells out the `val` attribute, e.g. `val=1`.
 *
 * At least one boolean element is improperly interpreted by one or more
 * versions of PowerPoint. The `c:overlay` element is interpreted as `false`
 * when no `val` attribute is present, contrary to the behavior described in
 * the schema. A remedy for this is to interpret a missing `val` attribute
 * as `true` (consistent with the spec), but always write the attribute
 * whenever there is occasion for changing the element.
 */
export class CT_Boolean_Explicit extends BaseOxmlElement {
  set val(val: boolean) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * Used for floating point values.
 */
export class CT_Double extends BaseOxmlElement {
  set val(val: number) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * ``<c:layout>`` custom element class
 */
export class CT_Layout extends BaseOxmlElement {
  get manualLayout() {
    const pid = append_packed_id(this.packed_id, 'manualLayout');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ManualLayout);
  }

  get_or_add_manualLayout(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_manualLayout');
    return py_funs.call_method_returns_instance(pid, CT_ManualLayout, arguments, obj);
  }

  /**
   * The float value in ./c:manualLayout/c:x when
   * c:layout/c:manualLayout/c:xMode@val == "factor". 0.0 if that XPath
   * expression finds no match.
   */
  set horz_offset(horz_offset: number) {
    const pid = append_packed_id(this.packed_id, 'horz_offset');
    py_funs.set_attr(pid, horz_offset);
  }
  get horz_offset() {
    const pid = append_packed_id(this.packed_id, 'horz_offset');
    return py_funs.get_attr(pid);
  }
}

/**
 * Used for ``<c:xMode>``, ``<c:yMode>``, ``<c:wMode>``, and ``<c:hMode>``
 * child elements of CT_ManualLayout.
 */
export class CT_LayoutMode extends BaseOxmlElement {
  set val(val: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * ``<c:manualLayout>`` custom element class
 */
export class CT_ManualLayout extends BaseOxmlElement {
  get xMode() {
    const pid = append_packed_id(this.packed_id, 'xMode');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LayoutMode);
  }

  get_or_add_xMode(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xMode');
    return py_funs.call_method_returns_instance(pid, CT_LayoutMode, arguments, obj);
  }

  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Double);
  }

  get_or_add_x(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_x');
    return py_funs.call_method_returns_instance(pid, CT_Double, arguments, obj);
  }

  /**
   * horz_offset
   * The float value in ./c:x@val when ./c:xMode@val == "factor". 0.0 when
   * ./c:x is not present or ./c:xMode@val != "factor".
   */
  set horz_offset(horz_offset: number) {
    const pid = append_packed_id(this.packed_id, 'horz_offset');
    py_funs.set_attr(pid, horz_offset);
  }
  get horz_offset() {
    const pid = append_packed_id(this.packed_id, 'horz_offset');
    return py_funs.get_attr(pid);
  }
}

/**
 * ``<c:numFmt>`` element specifying the formatting for number labels on a
 * tick mark or data point.
 */
export class CT_NumFmt extends BaseOxmlElement {
  set formatCode(formatCode: string) {
    const pid = append_packed_id(this.packed_id, 'formatCode');
    py_funs.set_attr(pid, formatCode);
  }

  get formatCode() {
    const pid = append_packed_id(this.packed_id, 'formatCode');
    return py_funs.get_attr(pid);
  }

  set sourceLinked(sourceLinked: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'sourceLinked');
    py_funs.set_attr(pid, sourceLinked);
  }

  get sourceLinked() {
    const pid = append_packed_id(this.packed_id, 'sourceLinked');
    return py_funs.get_attr(pid);
  }
}

/**
 * `c:title` custom element class.
 */

export class CT_Title extends BaseOxmlElement {
  get tx() {
    const pid = append_packed_id(this.packed_id, 'tx');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Tx);
  }

  get_or_add_tx(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tx');
    return py_funs.call_method_returns_instance(pid, CT_Tx, arguments, obj);
  }

  get spPr() {
    const pid = append_packed_id(this.packed_id, 'spPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ShapeProperties);
  }

  get_or_add_spPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spPr');
    return py_funs.call_method_returns_instance(pid, CT_ShapeProperties, arguments, obj);
  }

  /**
   * Return `c:tx/c:rich`, newly created if not present.
   *
   * Return the `c:rich` grandchild at `c:tx/c:rich`. Both the `c:tx` and
   * `c:rich` elements are created if not already present. Any
   * `c:tx/c:strRef` element is removed. (Such an element would contain
   * a cell reference for the axis title text in the chart's Excel
   * worksheet.)
   */
  get_or_add_tx_rich() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tx_rich');
    return py_funs.call_method_returns_instance(pid, CT_Tx, arguments);
  }

  /**
   * Return `c:tx/c:rich` or `undefined` if not present.
   */
  get tx_rich() {
    const pid = append_packed_id(this.packed_id, 'tx_rich');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Tx);
  }
}

/**
 * ``<c:tx>`` element containing the text for a label on a data point or
 * other chart item.
 */
export class CT_Tx extends BaseOxmlElement {
  get strRef() {
    const pid = append_packed_id(this.packed_id, 'strRef');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_strRef(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_strRef');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get rich() {
    const pid = append_packed_id(this.packed_id, 'rich');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_rich(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_rich');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }
}

/**
 * ``<c:idx>`` element and others.
 */
export class CT_UnsignedInt extends BaseOxmlElement {
  set val(val: number) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}
