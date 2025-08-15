import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { XL_LEGEND_POSITION } from '../../enum/chart';
import { CT_TextBody, CT_TextCharacterProperties } from '../text';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_Boolean_Explicit, CT_Layout } from './shared';

/**
 * ``<c:legend>`` custom element class
 */
export class CT_Legend extends BaseOxmlElement {
  get legendPos() {
    const pid = append_packed_id(this.packed_id, 'legendPos');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LegendPos);
  }

  get_or_add_legendPos(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_legendPos');
    return py_funs.call_method_returns_instance(pid, CT_LegendPos, arguments, obj);
  }

  get layout() {
    const pid = append_packed_id(this.packed_id, 'layout');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Layout);
  }

  get_or_add_layout(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_layout');
    return py_funs.call_method_returns_instance(pid, CT_Layout, arguments, obj);
  }

  get overlay() {
    const pid = append_packed_id(this.packed_id, 'overlay');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_overlay(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_overlay');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get txPr() {
    const pid = append_packed_id(this.packed_id, 'txPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  get_or_add_txPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_txPr');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments, obj);
  }

  /**
   * `./c:txPr/a:p/a:pPr/a:defRPr` great-great-grandchild element, added
   * with its ancestors if not present.
   */
  get defRPr() {
    const pid = append_packed_id(this.packed_id, 'defRPr');
    return py_funs.get_attr_returns_instance(pid, CT_TextCharacterProperties);
  }

  /**
   * The float value in ./c:layout/c:manualLayout/c:x when
   * ./c:layout/c:manualLayout/c:xMode@val == "factor". 0.0 if that
   * XPath expression has no match.
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
 * ``<c:legendPos>`` element specifying position of legend with respect to
 * chart as a member of ST_LegendPos.
 */
export class CT_LegendPos extends BaseOxmlElement {
  set val(val: XL_LEGEND_POSITION | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(XL_LEGEND_POSITION, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}
