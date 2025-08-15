import { append_packed_id, py_funs } from '../../../bridge';
import { _Element } from '../lxml';
import { CT_ShapeProperties } from '../shapes/shared';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_DLbl, CT_DLbls } from './datalabel';
import { CT_Marker } from './marker';
import { CT_Boolean, CT_Boolean_Explicit, CT_Tx, CT_UnsignedInt } from './shared';

/**
 * ``<c:cat>`` custom element class used in category charts to specify
 * category labels and hierarchy.
 */
export class CT_AxDataSource extends BaseOxmlElement {
  get multiLvlStrRef() {
    const pid = append_packed_id(this.packed_id, 'multiLvlStrRef');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_multiLvlStrRef(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_multiLvlStrRef');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  /**
   * Return a list containing the `c:lvl` descendent elements in document
   * order. These will only be present when the required single child
   * is a `c:multiLvlStrRef` element. Returns an empty list when no
   * `c:lvl` descendent elements are present.
   */
  get lvls() {
    const pid = append_packed_id(this.packed_id, 'lvls');
    return py_funs.get_attr_returns_instance_list(pid, CT_Lvl);
  }
}

/**
 * ``<c:dPt>`` custom element class, containing visual properties for a data
 * point.
 */
export class CT_DPt extends BaseOxmlElement {
  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr_returns_instance(pid, CT_UnsignedInt);
  }

  get marker() {
    const pid = append_packed_id(this.packed_id, 'marker');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Marker);
  }

  get_or_add_marker(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_marker');
    return py_funs.call_method_returns_instance(pid, CT_Marker, arguments, obj);
  }

  get spPr() {
    const pid = append_packed_id(this.packed_id, 'spPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ShapeProperties);
  }

  get_or_add_spPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spPr');
    return py_funs.call_method_returns_instance(pid, CT_ShapeProperties, arguments, obj);
  }
}

/**
 * ``<c:lvl>`` custom element class used in multi-level categories to
 * specify a level of hierarchy.
 */
export class CT_Lvl extends BaseOxmlElement {
  get pt_lst() {
    const pid = append_packed_id(this.packed_id, 'pt_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_StrVal_NumVal_Composite);
  }
}

/**
 * ``<c:yVal>`` custom element class used in XY and bubble charts, and
 * perhaps others.
 */

export class CT_NumDataSource extends BaseOxmlElement {
  get numRef() {
    const pid = append_packed_id(this.packed_id, 'numRef');
    return py_funs.get_attr_returns_instance(pid, _Element);
  }

  /**
   * Return the value of `./c:numRef/c:numCache/c:ptCount/@val`,
   * specifying how many `c:pt` elements are in this numeric data cache.
   * Returns 0 if no `c:ptCount` element is present, as this is the least
   * disruptive way to degrade when no cached point data is available.
   * This situation is not expected, but is valid according to the schema.
   */
  get ptCount_val() {
    const pid = append_packed_id(this.packed_id, 'ptCount_val');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return the Y value for data point *idx* in this cache, or undefined if no
   * value is present for that data point.
   */
  pt_v(idx: number) {
    const pid = append_packed_id(this.packed_id, 'pt_v');
    return py_funs.call_method<number | undefined>(pid, arguments, idx);
  }
}

/**
 * ``<c:ser>`` custom element class. Note there are several different series
 * element types in the schema, such as ``CT_LineSer`` and ``CT_BarSer``,
 * but they all share the same tag name. This class acts as a composite and
 * depends on the caller not to do anything invalid for a series belonging
 * to a particular plot type.
 */
export class CT_SeriesComposite extends BaseOxmlElement {
  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr_returns_instance(pid, CT_UnsignedInt);
  }

  get order() {
    const pid = append_packed_id(this.packed_id, 'order');
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

  get invertIfNegative() {
    const pid = append_packed_id(this.packed_id, 'invertIfNegative');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_invertIfNegative(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_invertIfNegative');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get marker() {
    const pid = append_packed_id(this.packed_id, 'marker');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Marker);
  }

  get_or_add_marker(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_marker');
    return py_funs.call_method_returns_instance(pid, CT_Marker, arguments, obj);
  }

  get dPt_lst() {
    const pid = append_packed_id(this.packed_id, 'dPt_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_DPt);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }

  get cat() {
    const pid = append_packed_id(this.packed_id, 'cat');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_AxDataSource);
  }

  get_or_add_cat(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_cat');
    return py_funs.call_method_returns_instance(pid, CT_AxDataSource, arguments, obj);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumDataSource);
  }

  get_or_add_val(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_val');
    return py_funs.call_method_returns_instance(pid, CT_NumDataSource, arguments, obj);
  }

  get xVal() {
    const pid = append_packed_id(this.packed_id, 'xVal');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumDataSource);
  }

  get_or_add_xVal(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xVal');
    return py_funs.call_method_returns_instance(pid, CT_NumDataSource, arguments, obj);
  }

  get yVal() {
    const pid = append_packed_id(this.packed_id, 'yVal');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumDataSource);
  }

  get_or_add_yVal(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_yVal');
    return py_funs.call_method_returns_instance(pid, CT_NumDataSource, arguments, obj);
  }

  get smooth() {
    const pid = append_packed_id(this.packed_id, 'smooth');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_smooth(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_smooth');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get bubbleSize() {
    const pid = append_packed_id(this.packed_id, 'bubbleSize');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumDataSource);
  }

  get_or_add_bubbleSize(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bubbleSize');
    return py_funs.call_method_returns_instance(pid, CT_NumDataSource, arguments, obj);
  }

  /**
   * Return the number of bubble size values as reflected in the `val`
   * attribute of `./c:bubbleSize//c:ptCount`, or 0 if not present.
   */
  get bubbleSize_ptCount_val() {
    const pid = append_packed_id(this.packed_id, 'bubbleSize_ptCount_val');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return the number of categories as reflected in the `val` attribute
   * of `./c:cat//c:ptCount`, or 0 if not present.
   */
  get cat_ptCount_val() {
    const pid = append_packed_id(this.packed_id, 'cat_ptCount_val');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return the `c:dLbl` element representing the label for the data point
   * at offset *idx* in this series, or `undefined` if not present.
   */
  get_dLbl(idx: number) {
    const pid = append_packed_id(this.packed_id, 'get_dLbl');
    return py_funs.call_method_returns_instance_or_undefined(pid, CT_DLbl, arguments, idx);
  }

  /**
   * Return the `c:dLbl` element representing the label of the point at
   * offset *idx* in this series, newly created if not yet present.
   */
  get_or_add_dLbl(idx: number) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbl');
    return py_funs.call_method_returns_instance(pid, CT_DLbl, arguments, idx);
  }

  /**
   * Return the `c:dPt` child representing the visual properties of the
   * data point at index *idx*.
   */
  get_or_add_dPt_for_point(idx: number) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dPt_for_point');
    return py_funs.call_method_returns_instance(pid, CT_DPt, arguments, idx);
  }

  /**
   * Return the number of X values as reflected in the `val` attribute of
   * `./c:xVal//c:ptCount`, or 0 if not present.
   */
  get xVal_ptCount_val() {
    const pid = append_packed_id(this.packed_id, 'xVal_ptCount_val');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return the number of Y values as reflected in the `val` attribute of
   * `./c:yVal//c:ptCount`, or 0 if not present.
   */
  get yVal_ptCount_val() {
    const pid = append_packed_id(this.packed_id, 'yVal_ptCount_val');
    return py_funs.get_attr<number>(pid);
  }
}

/**
 * ``<c:pt>`` element, can be either CT_StrVal or CT_NumVal complex type.
 * Using this class for both, differentiating as needed.
 */
export class CT_StrVal_NumVal_Composite extends BaseOxmlElement {
  get v() {
    const pid = append_packed_id(this.packed_id, 'v');
    return py_funs.get_attr_returns_instance(pid, _Element);
  }

  set idx(idx: number) {
    const pid = append_packed_id(this.packed_id, 'idx');
    py_funs.set_attr(pid, idx);
  }

  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr(pid);
  }

  /**
   * The float value of the text in the required ``<c:v>`` child.
   */
  get value() {
    const pid = append_packed_id(this.packed_id, 'value');
    return py_funs.get_attr<number>(pid);
  }
}
