import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { XL_AXIS_CROSSES, XL_TICK_LABEL_POSITION, XL_TICK_MARK } from '../../enum/chart';
import { CT_ShapeProperties } from '../shapes/shared';
import { CT_TextBody, CT_TextCharacterProperties } from '../text';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_Boolean, CT_Double, CT_NumFmt, CT_Title, CT_UnsignedInt } from './shared';

/**
 * Base class for catAx, dateAx, valAx, and perhaps other axis elements.
 */
export class BaseAxisElement extends BaseOxmlElement {
  get defRPr() {
    const pid = append_packed_id(this.packed_id, 'defRPr');
    return py_funs.get_attr_returns_instance(pid, CT_TextCharacterProperties);
  }

  /**
   * ``<a:defRPr>`` great-great-grandchild element, added with its
   * ancestors if not present.
   */
  set orientation(orientation: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'orientation');
    py_funs.set_attr(pid, orientation);
  }
  get orientation() {
    const pid = append_packed_id(this.packed_id, 'orientation');
    return py_funs.get_attr(pid);
  }
}

/**
 * Used for `c:majorUnit` and `c:minorUnit` elements, and others.
 */
export class CT_AxisUnit extends BaseOxmlElement {
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
 * `c:catAx` element, defining a category axis.
 */
export class CT_CatAx extends BaseAxisElement {
  get scaling() {
    const pid = append_packed_id(this.packed_id, 'scaling');
    return py_funs.get_attr_returns_instance(pid, CT_Scaling);
  }

  get delete_() {
    const pid = append_packed_id(this.packed_id, 'delete_');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }
  get_or_add_delete_(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_delete_');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get majorGridlines() {
    const pid = append_packed_id(this.packed_id, 'majorGridlines');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ChartLines);
  }
  get_or_add_majorGridlines(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorGridlines');
    return py_funs.call_method_returns_instance(pid, CT_ChartLines, arguments, obj);
  }

  get minorGridlines() {
    const pid = append_packed_id(this.packed_id, 'minorGridlines');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ChartLines);
  }
  get_or_add_minorGridlines(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorGridlines');
    return py_funs.call_method_returns_instance(pid, CT_ChartLines, arguments, obj);
  }

  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Title);
  }
  get_or_add_title(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_title');
    return py_funs.call_method_returns_instance(pid, CT_Title, arguments, obj);
  }

  get numFmt() {
    const pid = append_packed_id(this.packed_id, 'numFmt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumFmt);
  }
  get_or_add_numFmt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_numFmt');
    return py_funs.call_method_returns_instance(pid, CT_NumFmt, arguments, obj);
  }

  get majorTickMark() {
    const pid = append_packed_id(this.packed_id, 'majorTickMark');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickMark);
  }
  get_or_add_majorTickMark(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorTickMark');
    return py_funs.call_method_returns_instance(pid, CT_TickMark, arguments, obj);
  }

  get minorTickMark() {
    const pid = append_packed_id(this.packed_id, 'minorTickMark');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickMark);
  }
  get_or_add_minorTickMark(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorTickMark');
    return py_funs.call_method_returns_instance(pid, CT_TickMark, arguments, obj);
  }

  get tickLblPos() {
    const pid = append_packed_id(this.packed_id, 'tickLblPos');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickLblPos);
  }
  get_or_add_tickLblPos(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tickLblPos');
    return py_funs.call_method_returns_instance(pid, CT_TickLblPos, arguments, obj);
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

  get crosses() {
    const pid = append_packed_id(this.packed_id, 'crosses');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Crosses);
  }
  get_or_add_crosses(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crosses');
    return py_funs.call_method_returns_instance(pid, CT_Crosses, arguments, obj);
  }

  get crossesAt() {
    const pid = append_packed_id(this.packed_id, 'crossesAt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Double);
  }
  get_or_add_crossesAt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crossesAt');
    return py_funs.call_method_returns_instance(pid, CT_Double, arguments, obj);
  }

  get lblOffset() {
    const pid = append_packed_id(this.packed_id, 'lblOffset');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LblOffset);
  }
  get_or_add_lblOffset(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lblOffset');
    return py_funs.call_method_returns_instance(pid, CT_LblOffset, arguments, obj);
  }
}

/**
 * Used for `c:majorGridlines` and `c:minorGridlines`.
 *
 * Specifies gridlines visual properties such as color and width.
 */
export class CT_ChartLines extends BaseOxmlElement {
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
 * `c:crosses` element, specifying where the other axis crosses this one.
 */
export class CT_Crosses extends BaseOxmlElement {
  set val(val: XL_AXIS_CROSSES) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(XL_AXIS_CROSSES, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr<XL_AXIS_CROSSES>(pid);
  }
}

/**
 * `c:dateAx` element, defining a date (category) axis.
 */
export class CT_DateAx extends BaseAxisElement {
  get scaling() {
    const pid = append_packed_id(this.packed_id, 'scaling');
    return py_funs.get_attr_returns_instance(pid, CT_Scaling);
  }

  get delete_() {
    const pid = append_packed_id(this.packed_id, 'delete_');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_delete_(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_delete_');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get majorGridlines() {
    const pid = append_packed_id(this.packed_id, 'majorGridlines');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ChartLines);
  }

  get_or_add_majorGridlines(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorGridlines');
    return py_funs.call_method_returns_instance(pid, CT_ChartLines, arguments, obj);
  }

  get minorGridlines() {
    const pid = append_packed_id(this.packed_id, 'minorGridlines');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ChartLines);
  }

  get_or_add_minorGridlines(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorGridlines');
    return py_funs.call_method_returns_instance(pid, CT_ChartLines, arguments, obj);
  }

  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Title);
  }

  get_or_add_title(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_title');
    return py_funs.call_method_returns_instance(pid, CT_Title, arguments, obj);
  }

  get numFmt() {
    const pid = append_packed_id(this.packed_id, 'numFmt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumFmt);
  }

  get_or_add_numFmt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_numFmt');
    return py_funs.call_method_returns_instance(pid, CT_NumFmt, arguments, obj);
  }

  get majorTickMark() {
    const pid = append_packed_id(this.packed_id, 'majorTickMark');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickMark);
  }

  get_or_add_majorTickMark(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorTickMark');
    return py_funs.call_method_returns_instance(pid, CT_TickMark, arguments, obj);
  }

  get minorTickMark() {
    const pid = append_packed_id(this.packed_id, 'minorTickMark');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickMark);
  }

  get_or_add_minorTickMark(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorTickMark');
    return py_funs.call_method_returns_instance(pid, CT_TickMark, arguments, obj);
  }

  get tickLblPos() {
    const pid = append_packed_id(this.packed_id, 'tickLblPos');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickLblPos);
  }
  get_or_add_tickLblPos(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tickLblPos');
    return py_funs.call_method_returns_instance(pid, CT_TickLblPos, arguments, obj);
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

  get crosses() {
    const pid = append_packed_id(this.packed_id, 'crosses');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Crosses);
  }
  get_or_add_crosses(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crosses');
    return py_funs.call_method_returns_instance(pid, CT_Crosses, arguments, obj);
  }

  get crossesAt() {
    const pid = append_packed_id(this.packed_id, 'crossesAt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Double);
  }
  get_or_add_crossesAt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crossesAt');
    return py_funs.call_method_returns_instance(pid, CT_Double, arguments, obj);
  }

  get lblOffset() {
    const pid = append_packed_id(this.packed_id, 'lblOffset');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LblOffset);
  }
  get_or_add_lblOffset(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lblOffset');
    return py_funs.call_method_returns_instance(pid, CT_LblOffset, arguments, obj);
  }
}

/**
 * `c:lblOffset` custom element class.
 */
export class CT_LblOffset extends BaseOxmlElement {
  set val(val: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * `c:xAx/c:scaling/c:orientation` element, defining category order.
 *
 * Used to reverse the order categories appear in on a bar chart so they start at the
 * top rather than the bottom. Because we read top-to-bottom, the default way looks odd
 * to many and perhaps most folks. Also applicable to value and date axes.
 */
export class CT_Orientation extends BaseOxmlElement {
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
 * `c:scaling` element.
 *
 * Defines axis scale characteristics such as maximum value, log vs. linear, etc.
 */
export class CT_Scaling extends BaseOxmlElement {
  get orientation() {
    const pid = append_packed_id(this.packed_id, 'orientation');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Orientation);
  }

  get_or_add_orientation(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_orientation');
    return py_funs.call_method_returns_instance(pid, CT_LblOffset, arguments, obj);
  }

  get max() {
    const pid = append_packed_id(this.packed_id, 'max');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Double);
  }

  get_or_add_max(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_max');
    return py_funs.call_method_returns_instance(pid, CT_Double, arguments, obj);
  }

  get min() {
    const pid = append_packed_id(this.packed_id, 'min');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Double);
  }

  get_or_add_min(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'mget_or_add_minin');
    return py_funs.call_method_returns_instance(pid, CT_Double, arguments, obj);
  }

  /**
   * The float value of the ``<c:max>`` child element, or `undefined` if no max
   * element is present.
   */
  set maximum(maximum: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'maximum');
    py_funs.set_attr(pid, maximum);
  }
  get maximum() {
    const pid = append_packed_id(this.packed_id, 'maximum');
    return py_funs.get_attr(pid);
  }

  /**
   * The float value of the ``<c:min>`` child element, or `undefined` if no min
   * element is present.
   */
  set minimum(minimum: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'minimum');
    py_funs.set_attr(pid, minimum);
  }
  get minimum() {
    const pid = append_packed_id(this.packed_id, 'minimum');
    return py_funs.get_attr(pid);
  }
}

/**
 * `c:tickLblPos` element.
 */
export class CT_TickLblPos extends BaseOxmlElement {
  set val(val: XL_TICK_LABEL_POSITION | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(XL_TICK_LABEL_POSITION, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr<XL_TICK_LABEL_POSITION>(pid);
  }
}

/**
 * Used for `c:minorTickMark` and `c:majorTickMark`.
 */
export class CT_TickMark extends BaseOxmlElement {
  set val(val: XL_TICK_MARK | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(XL_TICK_MARK, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr<XL_TICK_MARK>(pid);
  }
}

/**
 * `c:valAx` element, defining a value axis.
 */
export class CT_ValAx extends BaseAxisElement {
  get scaling() {
    const pid = append_packed_id(this.packed_id, 'scaling');
    return py_funs.get_attr_returns_instance(pid, CT_Scaling);
  }

  get delete_() {
    const pid = append_packed_id(this.packed_id, 'delete_');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_delete_(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_delete_');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get majorGridlines() {
    const pid = append_packed_id(this.packed_id, 'majorGridlines');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ChartLines);
  }

  get_or_add_majorGridlines(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorGridlines');
    return py_funs.call_method_returns_instance(pid, CT_ChartLines, arguments, obj);
  }

  get minorGridlines() {
    const pid = append_packed_id(this.packed_id, 'minorGridlines');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ChartLines);
  }

  get_or_add_minorGridlines(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorGridlines');
    return py_funs.call_method_returns_instance(pid, CT_ChartLines, arguments, obj);
  }

  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Title);
  }

  get_or_add_title(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_title');
    return py_funs.call_method_returns_instance(pid, CT_Title, arguments, obj);
  }

  get numFmt() {
    const pid = append_packed_id(this.packed_id, 'numFmt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NumFmt);
  }

  get_or_add_numFmt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_numFmt');
    return py_funs.call_method_returns_instance(pid, CT_NumFmt, arguments, obj);
  }

  get majorTickMark() {
    const pid = append_packed_id(this.packed_id, 'majorTickMark');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickMark);
  }

  get_or_add_majorTickMark(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorTickMark');
    return py_funs.call_method_returns_instance(pid, CT_TickMark, arguments, obj);
  }

  get minorTickMark() {
    const pid = append_packed_id(this.packed_id, 'minorTickMark');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickMark);
  }

  get_or_add_minorTickMark(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorTickMark');
    return py_funs.call_method_returns_instance(pid, CT_TickMark, arguments, obj);
  }

  get tickLblPos() {
    const pid = append_packed_id(this.packed_id, 'tickLblPos');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TickLblPos);
  }
  get_or_add_tickLblPos(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tickLblPos');
    return py_funs.call_method_returns_instance(pid, CT_TickLblPos, arguments, obj);
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

  get crossAx() {
    const pid = append_packed_id(this.packed_id, 'crossAx');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_UnsignedInt);
  }

  get_or_add_crossAx(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crossAx');
    return py_funs.call_method_returns_instance(pid, CT_UnsignedInt, arguments, obj);
  }

  get crosses() {
    const pid = append_packed_id(this.packed_id, 'crosses');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Crosses);
  }

  get_or_add_crosses(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crosses');
    return py_funs.call_method_returns_instance(pid, CT_Crosses, arguments, obj);
  }

  get crossesAt() {
    const pid = append_packed_id(this.packed_id, 'crossesAt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Double);
  }
  get_or_add_crossesAt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_crossesAt');
    return py_funs.call_method_returns_instance(pid, CT_Double, arguments, obj);
  }

  get majorUnit() {
    const pid = append_packed_id(this.packed_id, 'majorUnit');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_AxisUnit);
  }

  get_or_add_majorUnit(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_majorUnit');
    return py_funs.call_method_returns_instance(pid, CT_AxisUnit, arguments, obj);
  }

  get minorUnit() {
    const pid = append_packed_id(this.packed_id, 'minorUnit');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_AxisUnit);
  }

  get_or_add_minorUnit(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_minorUnit');
    return py_funs.call_method_returns_instance(pid, CT_AxisUnit, arguments, obj);
  }
}
