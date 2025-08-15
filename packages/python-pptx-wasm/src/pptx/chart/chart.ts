import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { ChartFormat } from '../dml/chtfmt';
import { XL_CHART_TYPE } from '../enum/chart';
import { CT_Chart, CT_ChartSpace, CT_PlotArea } from '../oxml/chart/chart';
import { CT_Title } from '../oxml/chart/shared';
import { ElementProxy, PartElementProxy } from '../shared';
import { Font, TextFrame } from '../text/text';
import { CategoryAxis, DateAxis, ValueAxis } from './axis';
import { CategoryChartData } from './data';
import { Legend } from './legend';
import { PlotFactory } from './plot';
import { SeriesCollection } from './series';

const _AxisFactroy = (cls: string) => {
  const clsList = {
    CategoryAxis: CategoryAxis,
    DateAxis: DateAxis,
    ValueAxis: ValueAxis
  } as const;

  return clsList[cls as keyof typeof clsList];
};

/**
 * A chart object.
 */
export class Chart extends PartElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_ChartSpace);
  }

  get _chartSpace() {
    return this._element;
  }

  /**
   * The category axis of this chart. In the case of an XY or Bubble
   * chart, this is the X axis. Raises `ValueError` if no category
   * axis is defined (as is the case for a pie chart, for example).
   */
  get category_axis() {
    const pid = append_packed_id(this.packed_id, 'category_axis');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _AxisFactroy);
  }

  /**
   * Read/write integer index of chart style used to format this chart.
   * Range is from 1 to 48. Value is `undefined` if no explicit style has been
   * assigned, in which case the default chart style is used. Assigning
   * `undefined` causes any explicit setting to be removed. The integer index
   * corresponds to the style's position in the chart style gallery in the
   * PowerPoint UI.
   */
  set chart_style(chart_style: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'chart_style');
    py_funs.set_attr(pid, chart_style);
  }
  get chart_style() {
    const pid = append_packed_id(this.packed_id, 'chart_style');
    return py_funs.get_attr(pid);
  }

  /**
   * A {@link ChartTitle} object providing access to title properties.
   *
   * Calling this property is destructive in the sense it adds a chart
   * title element (`c:title`) to the chart XML if one is not already
   * present. Use {@link has_title} to test for presence of a chart title
   * non-destructively.
   */
  get chart_title() {
    const pid = append_packed_id(this.packed_id, 'chart_title');
    return py_funs.get_attr_returns_instance(pid, ChartTitle);
  }

  /**
   * Member of {@link XlChartType} enumeration specifying type of this chart.
   *
   * If the chart has two plots, for example, a line plot overlaid on a bar plot,
   * the type reported is for the first (back-most) plot. Read-only.
   */
  get chart_type() {
    const pid = append_packed_id(this.packed_id, 'chart_type');
    return py_funs.get_attr<XL_CHART_TYPE>(pid);
  }

  /**
   * Font object controlling text format defaults for this chart.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Read/write boolean, `true` if the chart has a legend. Assigning
   * `true` causes a legend to be added to the chart if it doesn't already
   * have one. Assigning `false` removes any existing legend definition
   * along with any existing legend settings.
   */
  set has_legend(has_legend: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_legend');
    py_funs.set_attr(pid, has_legend);
  }
  get has_legend() {
    const pid = append_packed_id(this.packed_id, 'has_legend');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write boolean, specifying whether this chart has a title.
   *
   * Assigning `true` causes a title to be added if not already present.
   * Assigning `false` removes any existing title along with its text and
   * settings.
   */
  set has_title(has_title: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_title');
    py_funs.set_attr(pid, has_title);
  }
  get has_title() {
    const pid = append_packed_id(this.packed_id, 'has_title');
    return py_funs.get_attr(pid);
  }

  /**
   * A {@link Legend} object providing access to the properties of the legend
   * for this chart.
   */
  get legend() {
    const pid = append_packed_id(this.packed_id, 'legend');
    return py_funs.get_attr_returns_instance_or_undefined(pid, Legend);
  }

  /**
   * The array of plots in this chart. A plot, called a *chart group*
   * in the Microsoft API, is a distinct sequence of one or more series
   * depicted in a particular charting type. For example, a chart having
   * a series plotted as a line overlaid on three series plotted as
   * columns would have two plots; the first corresponding to the three
   * column series and the second to the line series. Plots are sequenced
   * in the order drawn, i.e. back-most to front-most. Supports *length*,
   * membership (e.g. `p in plots`), iteration, slicing, and indexed
   * access (e.g. `plot = plots[i]`).
   */
  get plots() {
    const pid = append_packed_id(this.packed_id, 'plots');
    return py_funs.get_attr_returns_instance(pid, _Plots);
  }

  /**
   * Create {@link CategoryChartData} for replacing chart data.
   */
  create_category_chart_data(number_format?: string) {
    const pid = py_funs.create_category_chart_data(this.packed_id, number_format);
    return new CategoryChartData(pid);
  }

  /**
   * Use the categories and series values in the {@link ChartData} object
   * *chart_data* to replace those in the XML and Excel worksheet for this
   * chart.
   */
  replace_data(chart_data: CategoryChartData) {
    const pid = append_packed_id(this.packed_id, 'replace_data');
    return py_funs.call_method<undefined>(pid, arguments, chart_data);
  }

  /**
   * A {@link SeriesCollection} object containing all the series in this
   * chart. When the chart has multiple plots, all the series for the
   * first plot appear before all those for the second, and so on. Series
   * within a plot have an explicit ordering and appear in that sequence.
   */
  get series() {
    const pid = append_packed_id(this.packed_id, 'series');
    return py_funs.get_attr_returns_instance(pid, SeriesCollection);
  }

  /**
   * The {@link ValueAxis} object providing access to properties of the value
   * axis of this chart. Raises `ValueError` if the chart has no value
   * axis.
   */
  get value_axis() {
    const pid = append_packed_id(this.packed_id, 'value_axis');
    return py_funs.get_attr_returns_instance(pid, ValueAxis);
  }
}

/**
 * Provides properties for manipulating a chart title.
 */
export class ChartTitle extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Title);
  }

  get _chartSpace() {
    return this._element;
  }

  /**
   * {@link ChartFormat} object providing access to line and fill formatting.
   *
   * Returns the {@link ChartFormat} object providing shape formatting properties
   * for this chart title, such as its line color and fill.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }

  /**
   * Read/write boolean specifying whether this title has a text frame.
   *
   * Returns `true` if this chart title has a text frame, and `false`
   * otherwise. Assigning `true` causes a text frame to be added if not
   * already present. Assigning `false` causes any existing text frame to
   * be removed along with its text and formatting.
   */
  set has_text_frame(has_text_frame: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_text_frame');
    py_funs.set_attr(pid, has_text_frame);
  }
  get has_text_frame() {
    const pid = append_packed_id(this.packed_id, 'has_text_frame');
    return py_funs.get_attr(pid);
  }

  /**
   * {@link TextFrame} instance for this chart title.
   *
   * Returns a {@link TextFrame} instance allowing read/write access to the text
   * of this chart title and its text formatting properties. Accessing this
   * property is destructive in the sense it adds a text frame if one is
   * not present. Use {@link has_text_frame} to test for the presence of
   * a text frame non-destructively.
   */
  get text_frame() {
    const pid = append_packed_id(this.packed_id, 'text_frame');
    return py_funs.get_attr_returns_instance(pid, TextFrame);
  }
}

/**
 * The array of plots in a chart, such as a bar plot or a line plot. Most
 * charts have only a single plot. The concept is necessary when two chart
 * types are displayed in a single set of axes, like a bar plot with
 * a superimposed line plot.
 */
export class _Plots extends MutableArrayMixin<InstanceType<ReturnType<typeof PlotFactory>>, Type<PackedBase>>(
  PackedBase
) {
  get _plotArea() {
    const pid = append_packed_id(this.packed_id, '_plotArea');
    return py_funs.get_attr_returns_instance(pid, CT_PlotArea);
  }

  get _chart() {
    const pid = append_packed_id(this.packed_id, '_chart');
    return py_funs.get_attr_returns_instance(pid, CT_Chart);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, PlotFactory);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}
