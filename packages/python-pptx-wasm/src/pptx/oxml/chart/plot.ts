import { append_packed_id, py_funs } from '../../../bridge';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_DLbls } from './datalabel';
import { CT_AxDataSource, CT_SeriesComposite, CT_StrVal_NumVal_Composite } from './series';
import { CT_Boolean } from './shared';

/**
 * Base class for barChart, lineChart, and other plot elements.
 */
export class BaseChartElement extends BaseOxmlElement {
  /**
   * Return the `c:cat` element of the first series in this xChart, or
   * `undefined` if not present.
   */
  get cat() {
    const pid = append_packed_id(this.packed_id, 'cat');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_AxDataSource);
  }

  /**
   * Return the value of the `c:ptCount` descendent of this xChart
   * element. Its parent can be one of three element types. This value
   * represents the true number of (leaf) categories, although they might
   * not all have a corresponding `c:pt` sibling; a category with no label
   * does not get a `c:pt` element. Returns 0 if there is no `c:ptCount`
   * descendent.
   */
  get cat_pt_count() {
    const pid = append_packed_id(this.packed_id, 'cat_pt_count');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return a sequence representing the `c:pt` elements under the `c:cat`
   * element of the first series in this xChart element. A category having
   * no value will have no corresponding `c:pt` element; `undefined` will
   * appear in that position in such cases. Items appear in `idx` order.
   * Only those in the first ``<c:lvl>`` element are included in the case
   * of multi-level categories.
   */
  get cat_pts() {
    const pid = append_packed_id(this.packed_id, 'cat_pts');
    return py_funs.get_attr_returns_instance_or_undefined_list(pid, CT_StrVal_NumVal_Composite);
  }

  /**
   * Return the value of the ``./c:grouping{val=?}`` attribute, taking
   * defaults into account when items are not present.
   */
  get grouping_val() {
    const pid = append_packed_id(this.packed_id, 'grouping_val');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * Generate each ``<c:ser>`` child element in this xChart in
   * c:order/@val sequence (not document or c:idx order).
   */
  iter_sers() {
    const pid = append_packed_id(this.packed_id, 'iter_sers');
    return py_funs.call_method_returns_instance_generator(pid, CT_SeriesComposite, arguments);
  }

  /**
   * Sequence of ``<c:ser>`` child elements in this xChart in c:order/@val
   * sequence (not document or c:idx order).
   */
  get sers() {
    const pid = append_packed_id(this.packed_id, 'sers');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }
}

/**
 * ``<c:area3DChart>`` element.
 */
export class CT_Area3DChart extends BaseChartElement {
  get grouping() {
    const pid = append_packed_id(this.packed_id, 'grouping');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Grouping);
  }

  get_or_add_grouping(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_grouping');
    return py_funs.call_method_returns_instance(pid, CT_Grouping, arguments, obj);
  }
}

/**
 * ``<c:areaChart>`` element.
 */
export class CT_AreaChart extends BaseChartElement {
  get grouping() {
    const pid = append_packed_id(this.packed_id, 'grouping');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Grouping);
  }

  get_or_add_grouping(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_grouping');
    return py_funs.call_method_returns_instance(pid, CT_Grouping, arguments, obj);
  }

  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }
}

/**
 * ``<c:barChart>`` element.
 */
export class CT_BarChart extends BaseOxmlElement {
  get barDir() {
    const pid = append_packed_id(this.packed_id, 'barDir');
    return py_funs.get_attr_returns_instance(pid, CT_BarDir);
  }

  get grouping() {
    const pid = append_packed_id(this.packed_id, 'grouping');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Grouping);
  }

  get_or_add_grouping(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_grouping');
    return py_funs.call_method_returns_instance(pid, CT_Grouping, arguments, obj);
  }

  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }

  get gapWidth() {
    const pid = append_packed_id(this.packed_id, 'gapWidth');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GapAmount);
  }

  get_or_add_gapWidth(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_gapWidth');
    return py_funs.call_method_returns_instance(pid, CT_GapAmount, arguments, obj);
  }

  get overlap() {
    const pid = append_packed_id(this.packed_id, 'overlap');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Overlap);
  }

  get_or_add_overlap(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_overlap');
    return py_funs.call_method_returns_instance(pid, CT_Overlap, arguments, obj);
  }

  /**
   * Return the value of the ``./c:grouping{val=?}`` attribute, taking
   * defaults into account when items are not present.
   */
  get grouping_val() {
    const pid = append_packed_id(this.packed_id, 'grouping_val');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * ``<c:barDir>`` child of a barChart element, specifying the orientation of
 * the bars, 'bar' if they are horizontal and 'col' if they are vertical.
 */
export class CT_BarDir extends BaseOxmlElement {
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
 * ``<c:bubbleChart>`` custom element class
 */
export class CT_BubbleChart extends BaseChartElement {
  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }

  get bubble3D() {
    const pid = append_packed_id(this.packed_id, 'bubble3D');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_bubble3D(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bubble3D');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get bubbleScale() {
    const pid = append_packed_id(this.packed_id, 'bubbleScale');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_BubbleScale);
  }

  get_or_add_bubbleScale(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bubbleScale');
    return py_funs.call_method_returns_instance(pid, CT_BubbleScale, arguments, obj);
  }
}

/**
 * ``<c:bubbleScale>`` custom element class
 */
export class CT_BubbleScale extends BaseChartElement {
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
 * ``<c:doughnutChart>`` element.
 */
export class CT_DoughnutChart extends BaseChartElement {
  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }
}

/**
 * ``<c:gapWidth>`` child of ``<c:barChart>`` element, also used for other
 * purposes like error bars.
 */
export class CT_GapAmount extends BaseOxmlElement {
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
 * ``<c:grouping>`` child of an xChart element, specifying a value like
 * 'clustered' or 'stacked'. Also used for variants with the same tag name
 * like CT_BarGrouping.
 */
export class CT_Grouping extends BaseOxmlElement {
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
 * ``<c:lineChart>`` custom element class
 */
export class CT_LineChart extends BaseChartElement {
  get grouping() {
    const pid = append_packed_id(this.packed_id, 'grouping');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Grouping);
  }

  get_or_add_grouping(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_grouping');
    return py_funs.call_method_returns_instance(pid, CT_Grouping, arguments, obj);
  }

  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }
}

/**
 * ``<c:overlap>`` element specifying bar overlap as an integer percentage
 * of bar width, in range -100 to 100.
 */
export class CT_Overlap extends BaseOxmlElement {
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
 * ``<c:pieChart>`` custom element class
 */
export class CT_PieChart extends BaseChartElement {
  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }
}

/**
 * ``<c:radarChart>`` custom element class
 */
export class CT_RadarChart extends BaseChartElement {
  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  get dLbls() {
    const pid = append_packed_id(this.packed_id, 'dLbls');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_DLbls);
  }

  get_or_add_dLbls(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_dLbls');
    return py_funs.call_method_returns_instance(pid, CT_DLbls, arguments, obj);
  }
}

/**
 * ``<c:scatterChart>`` custom element class
 */
export class CT_ScatterChart extends BaseChartElement {
  get varyColors() {
    const pid = append_packed_id(this.packed_id, 'varyColors');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_varyColors(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_varyColors');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get ser_lst() {
    const pid = append_packed_id(this.packed_id, 'ser_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }
}
