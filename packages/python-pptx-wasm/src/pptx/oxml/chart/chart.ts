import { append_packed_id, py_funs } from '../../../bridge';
import { _Element, _XPathObject } from '../lxml';
import { CT_TextBody } from '../text';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_CatAx, CT_ValAx } from './axis';
import { CT_Legend } from './legend';
import {
  CT_Area3DChart,
  CT_AreaChart,
  CT_BarChart,
  CT_BarDir,
  CT_BubbleChart,
  CT_DoughnutChart,
  CT_LineChart,
  CT_PieChart,
  CT_RadarChart,
  CT_ScatterChart
} from './plot';
import { CT_SeriesComposite } from './series';
import { CT_Boolean, CT_Boolean_Explicit, CT_Title } from './shared';

/**
 * `c:chart` custom element class.
 */
export class CT_Chart extends BaseOxmlElement {
  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Title);
  }
  get_or_add_title(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_title');
    return py_funs.call_method_returns_instance(pid, CT_Title, arguments, obj);
  }

  get autoTitleDeleted() {
    const pid = append_packed_id(this.packed_id, 'autoTitleDeleted');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean_Explicit);
  }

  get_or_add_autoTitleDeleted(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_autoTitleDeleted');
    return py_funs.call_method_returns_instance(pid, CT_Boolean_Explicit, arguments, obj);
  }

  get plotArea() {
    const pid = append_packed_id(this.packed_id, 'plotArea');
    return py_funs.get_attr_returns_instance(pid, CT_PlotArea);
  }

  get legend() {
    const pid = append_packed_id(this.packed_id, 'legend');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Legend);
  }

  get_or_add_legend(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_legend');
    return py_funs.call_method_returns_instance(pid, CT_Legend, arguments, obj);
  }

  set rId(rId: string) {
    const pid = append_packed_id(this.packed_id, 'rId');
    py_funs.set_attr(pid, rId);
  }

  get rId() {
    const pid = append_packed_id(this.packed_id, 'rId');
    return py_funs.get_attr(pid);
  }

  /**
   * Add, remove, or leave alone the ``<c:legend>`` child element depending
   * on current state and *bool_value*. If *bool_value* is `true` and no
   * ``<c:legend>`` element is present, a new default element is added.
   * When `false`, any existing legend element is removed.
   */
  set has_legend(has_legend: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_legend');
    py_funs.set_attr(pid, has_legend);
  }
  get has_legend() {
    const pid = append_packed_id(this.packed_id, 'has_legend');
    return py_funs.get_attr(pid);
  }
}

/**
 * `c:chartSpace` root element of a chart part.
 */
export class CT_ChartSpace extends BaseOxmlElement {
  get date1904() {
    const pid = append_packed_id(this.packed_id, 'date1904');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_date1904(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_date1904');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  get style() {
    const pid = append_packed_id(this.packed_id, 'style');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Style);
  }

  get_or_add_style(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_style');
    return py_funs.call_method_returns_instance(pid, CT_Style, arguments, obj);
  }

  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Chart);
  }

  get txPr() {
    const pid = append_packed_id(this.packed_id, 'txPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  get_or_add_txPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'tget_or_add_txPrxPr');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments, obj);
  }

  get externalData() {
    const pid = append_packed_id(this.packed_id, 'externalData');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ExternalData);
  }

  get_or_add_externalData(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_externalData');
    return py_funs.call_method_returns_instance(pid, CT_ExternalData, arguments, obj);
  }

  /**
   * Return `true` if the `c:date1904` child element resolves truthy,
   * `false` otherwise. This value indicates whether date number values
   * are based on the 1900 or 1904 epoch.
   */
  get date_1904() {
    const pid = append_packed_id(this.packed_id, 'date1904');
    return py_funs.get_attr<boolean>(pid);
  }

  get dateAx_lst() {
    const pid = append_packed_id(this.packed_id, 'dateAx_lst');
    return py_funs.get_attr_returns_instance(pid, _XPathObject);
  }

  /**
   * Return the `c:title` grandchild, newly created if not present.
   */
  get_or_add_title() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_title');
    return py_funs.call_method_returns_instance(pid, CT_Title, arguments);
  }

  /**
   * Return the required `c:chartSpace/c:chart/c:plotArea` grandchild
   * element.
   */
  get plotArea() {
    const pid = append_packed_id(this.packed_id, 'plotArea');
    return py_funs.get_attr_returns_instance(pid, CT_PlotArea);
  }

  get valAx_lst() {
    const pid = append_packed_id(this.packed_id, 'valAx_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_ValAx);
  }

  /**
   * The string in the required ``r:id`` attribute of the
   * `<c:externalData>` child, or `undefined` if no externalData element is
   * present.
   */
  get xlsx_part_rId() {
    const pid = append_packed_id(this.packed_id, 'xlsx_part_rId');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * `<c:externalData>` element, defining link to embedded Excel package part
 * containing the chart data.
 */
export class CT_ExternalData extends BaseOxmlElement {
  get autoUpdate() {
    const pid = append_packed_id(this.packed_id, 'autoUpdate');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Boolean);
  }

  get_or_add_autoUpdate(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_autoUpdate');
    return py_funs.call_method_returns_instance(pid, CT_Boolean, arguments, obj);
  }

  set rId(rId: string) {
    const pid = append_packed_id(this.packed_id, 'rId');
    py_funs.set_attr(pid, rId);
  }

  get rId() {
    const pid = append_packed_id(this.packed_id, 'rId');
    return py_funs.get_attr(pid);
  }
}

export const xChartsFactroy = (cls: string) => {
  const clsList = {
    CT_Area3DChart: CT_Area3DChart,
    CT_AreaChart: CT_AreaChart,
    // c:bar3DChart
    CT_BarChart: CT_BarChart,
    CT_BarDir: CT_BarDir,
    CT_BubbleChart: CT_BubbleChart,
    CT_DoughnutChart: CT_DoughnutChart,
    // c:line3DChart
    CT_LineChart: CT_LineChart,
    // c:ofPieChart
    // c:pie3DChart
    CT_PieChart: CT_PieChart,
    CT_RadarChart: CT_RadarChart,
    CT_ScatterChart: CT_ScatterChart
    // c:stockChart
    // c:surface3DChart
    // c:surfaceChart
  } as const;

  return clsList[cls as keyof typeof clsList] ?? _Element;
};

/**
 * ``<c:plotArea>`` element.
 */
export class CT_PlotArea extends BaseOxmlElement {
  get catAx_lst() {
    const pid = append_packed_id(this.packed_id, 'catAx_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_CatAx);
  }

  get valAx_lst() {
    const pid = append_packed_id(this.packed_id, 'valAx_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_ValAx);
  }

  /**
   * Generate each of the `c:ser` elements in this chart, ordered first by
   * the document order of the containing xChart element, then by their
   * ordering within the xChart element (not necessarily document order).
   */
  iter_sers() {
    const pid = append_packed_id(this.packed_id, 'iter_sers');
    return py_funs.call_method_returns_instance_list(pid, CT_SeriesComposite, arguments);
  }

  /**
   * Generate each xChart child element in document.
   */
  iter_xCharts() {
    const pid = append_packed_id(this.packed_id, 'iter_xCharts');
    return py_funs.call_method_returns_instance_generator_from_instance_factory(pid, xChartsFactroy, arguments);
  }

  /**
   * Return the last `<c:ser>` element in the last xChart element, based
   * on series order (not necessarily the same element as document order).
   */
  get last_ser() {
    const pid = append_packed_id(this.packed_id, 'last_ser');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SeriesComposite);
  }

  /**
   * Return the next available `c:ser/c:idx` value within the scope of
   * this chart, the maximum idx value found on existing series,
   * incremented by one.
   */
  get next_idx() {
    const pid = append_packed_id(this.packed_id, 'next_idx');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return the next available `c:ser/c:order` value within the scope of
   * this chart, the maximum order value found on existing series,
   * incremented by one.
   */
  get next_order() {
    const pid = append_packed_id(this.packed_id, 'next_order');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Return a sequence containing all the `c:ser` elements in this chart,
   * ordered first by the document order of the containing xChart element,
   * then by their ordering within the xChart element (not necessarily
   * document order).
   */
  get sers() {
    const pid = append_packed_id(this.packed_id, 'sers');
    return py_funs.get_attr_returns_instance_list(pid, CT_SeriesComposite);
  }

  /**
   * Return a sequence containing all the `c:{x}Chart` elements in this
   * chart, in document order.
   */
  get xCharts() {
    const pid = append_packed_id(this.packed_id, 'xCharts');
    return py_funs.get_attr_returns_instance_list_from_instance_factory(pid, xChartsFactroy);
  }
}

/**
 * ``<c:style>`` element; defines the chart style.
 */
export class CT_Style extends BaseOxmlElement {
  set val(val: number) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}
