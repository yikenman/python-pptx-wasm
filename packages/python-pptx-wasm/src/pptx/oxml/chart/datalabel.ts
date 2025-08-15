import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { XL_DATA_LABEL_POSITION } from '../../enum/chart';
import { CT_ShapeProperties } from '../shapes/shared';
import { CT_TextBody, CT_TextCharacterProperties } from '../text';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_Boolean_Explicit, CT_NumFmt, CT_Tx, CT_UnsignedInt } from './shared';

/**
 * ``<c:dLbl>`` element specifying the properties of the data label for an
 * individual data point.
 */
export class CT_DLbl extends BaseOxmlElement {
  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr_returns_instance(pid, CT_UnsignedInt);
  }

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

  get txPr() {
    const pid = append_packed_id(this.packed_id, 'txPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  get_or_add_txPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_txPr');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments, obj);
  }

  get dLblPos() {
    const pid = append_packed_id(this.packed_id, 'dLblPos');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLblPos);
  }

  get_or_add_dLblPos(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLblPos');
    return py_funs.call_method_returns_instance(pid, CT_DLblPos, arguments, obj);
  }

  /**
   * Return the `c:rich` descendant representing the text frame of the
   * data label, newly created if not present. Any existing `c:strRef`
   * element is removed along with its contents.
   */
  get_or_add_rich() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_rich');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments);
  }

  /**
   * Return the `c:tx[c:rich]` subtree, newly created if not present.
   */
  get_or_add_tx_rich() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tx_rich');
    return py_funs.call_method_returns_instance(pid, CT_Tx, arguments);
  }

  /**
   * The integer value of the `val` attribute on the required `c:idx`
   * child.
   */
  get idx_val() {
    const pid = append_packed_id(this.packed_id, 'idx_val');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Remove any `c:tx[c:rich]` child, or do nothing if not present.
   */
  remove_tx_rich() {
    const pid = append_packed_id(this.packed_id, 'remove_tx_rich');
    return py_funs.call_method<undefined>(pid, arguments);
  }
}

/**
 * ``<c:dLblPos>`` element specifying the positioning of a data label with
 * respect to its data point.
 */

export class CT_DLblPos extends BaseOxmlElement {
  set val(val: XL_DATA_LABEL_POSITION) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(XL_DATA_LABEL_POSITION, val));
  }

  /**
   * Required attribute "val" of type XL_DATA_LABEL_POSITION
   */
  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr<XL_DATA_LABEL_POSITION>(pid);
  }
}

/**
 * `c:dLbls` element specifying properties for a set of data labels.
 */
export class CT_DLbls extends BaseOxmlElement {
  get dLbl_lst() {
    const pid = append_packed_id(this.packed_id, 'dLbl_lst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbl);
  }

  get numFmt() {
    const pid = append_packed_id(this.packed_id, 'numFmt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumFmt);
  }

  get_or_add_numFmt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_numFmt');
    return py_funs.call_method_returns_instance(pid, CT_NumFmt, arguments, obj);
  }

  get txPr() {
    const pid = append_packed_id(this.packed_id, 'txPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  get_or_add_txPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_txPr');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments, obj);
  }

  get dLblPos() {
    const pid = append_packed_id(this.packed_id, 'dLblPos');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLblPos);
  }

  get_or_add_dLblPos(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLblPos');
    return py_funs.call_method_returns_instance(pid, CT_DLblPos, arguments, obj);
  }

  get showLegendKey() {
    const pid = append_packed_id(this.packed_id, 'showLegendKey');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_showLegendKey(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_showLegendKey');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get showVal() {
    const pid = append_packed_id(this.packed_id, 'showVal');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_showVal(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_showVal');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get showCatName() {
    const pid = append_packed_id(this.packed_id, 'showCatName');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_showCatName(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_showCatName');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get showSerName() {
    const pid = append_packed_id(this.packed_id, 'showSerName');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_showSerName(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_showSerName');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get showPercent() {
    const pid = append_packed_id(this.packed_id, 'showPercent');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_showPercent(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_showPercent');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  /**
   * ``<a:defRPr>`` great-great-grandchild element, added with its
   * ancestors if not present.
   */
  get defRPr() {
    const pid = append_packed_id(this.packed_id, 'defRPr');
    return py_funs.get_attr_returns_instance(pid, CT_TextCharacterProperties);
  }

  /**
   * Return the `c:dLbl` child representing the label for the data point
   * at index *idx*.
   */
  get_dLbl_for_point(idx: number) {
    const pid = append_packed_id(this.packed_id, 'get_dLbl_for_point');
    return py_funs.call_method_returns_instance_or_undefined(pid, CT_DLbl, arguments, idx);
  }

  /**
   * Return the `c:dLbl` element representing the label of the point at
   * index *idx*.
   */
  get_or_add_dLbl_for_point(idx: number) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbl_for_point');
    return py_funs.call_method_returns_instance(pid, CT_DLbl, arguments, idx);
  }
}
