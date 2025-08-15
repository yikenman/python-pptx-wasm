import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { XL_MARKER_STYLE } from '../../enum/chart';
import { CT_ShapeProperties } from '../shapes/shared';
import { BaseOxmlElement } from '../xmlchemy';

/**
 * `c:marker` custom element class, containing visual properties for a data
 * point marker on line-type charts.
 */

export class CT_Marker extends BaseOxmlElement {
  get symbol() {
    const pid = append_packed_id(this.packed_id, 'symbol');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_MarkerStyle);
  }

  get_or_add_symbol(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_symbol');
    return py_funs.call_method_returns_instance(pid, CT_MarkerStyle, arguments, obj);
  }

  get size() {
    const pid = append_packed_id(this.packed_id, 'size');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_MarkerSize);
  }

  get_or_add_size(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_size');
    return py_funs.call_method_returns_instance(pid, CT_MarkerSize, arguments, obj);
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
   * Return the value of `./c:size/@val`, specifying the size of this
   * marker in points. Returns `undefined` if no `c:size` element is present or
   * its val attribute is not present.
   */
  get size_val() {
    const pid = append_packed_id(this.packed_id, 'size_val');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * Return the value of `./c:symbol/@val`, specifying the shape of this
   * marker. Returns `undefined` if no `c:symbol` element is present.
   */
  get symbol_val() {
    const pid = append_packed_id(this.packed_id, 'symbol_val');
    return py_funs.get_attr<number | undefined>(pid);
  }
}

/**
 * `c:size` custom element class, specifying the size (in points) of a data
 * point marker for a line, XY, or radar chart.
 */
export class CT_MarkerSize extends BaseOxmlElement {
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
 * `c:symbol` custom element class, specifying the shape of a data point
 * marker for a line, XY, or radar chart.
 */
export class CT_MarkerStyle extends BaseOxmlElement {
  set val(val: XL_MARKER_STYLE) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(XL_MARKER_STYLE, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr<XL_MARKER_STYLE>(pid);
  }
}
