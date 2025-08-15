// not use in public methods:
// PlotTypeInspector

import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { CT_Chart, xChartsFactroy } from '../oxml/chart/chart';
import { Categories } from './category';
import { Chart } from './chart';
import { DataLabels } from './datalabel';
import { SeriesCollection } from './series';

/**
 * A distinct plot that appears in the plot area of a chart. A chart may
 * have more than one plot, in which case they appear as superimposed
 * layers, such as a line plot appearing on top of a bar chart.
 */
export class _BasePlot extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, xChartsFactroy);
  }

  get _chart() {
    const pid = append_packed_id(this.packed_id, '_chart');
    return py_funs.get_attr_returns_instance(pid, CT_Chart);
  }

  /**
   * Returns a `category.Categories` array object containing
   * a `category.Category` object for each of the category labels
   * associated with this plot. The `category.Category` class derives from
   * `string`, so the returned value can be treated as a simple array of
   * strings for the common case where all you need is the labels in the
   * order they appear on the chart. `category.Categories` provides
   * additional properties for dealing with hierarchical categories when
   * required.
   */
  get categories() {
    const pid = append_packed_id(this.packed_id, 'categories');
    return py_funs.get_attr_returns_instance(pid, Categories);
  }

  /**
   * The `Chart` object containing this plot.
   */
  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance(pid, Chart);
  }

  /**
   * `DataLabels` instance providing properties and methods on the
   * collection of data labels associated with this plot.
   */
  get data_labels() {
    const pid = append_packed_id(this.packed_id, 'data_labels');
    return py_funs.get_attr_returns_instance(pid, DataLabels);
  }

  /**
   * Read/write boolean, `true` if the series has data labels. Assigning
   * `true` causes data labels to be added to the plot. Assigning `false`
   * removes any existing data labels.
   *
   * Add, remove, or leave alone the `<c:dLbls>` child element depending
   * on current state and assigned value. If value is `true` and no
   * `<c:dLbls>` element is present, a new default element is added with
   * default child elements and settings. When `false`, any existing dLbls
   * element is removed.
   */
  set has_data_labels(has_data_labels: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_data_labels');
    py_funs.set_attr(pid, has_data_labels);
  }
  get has_data_labels() {
    const pid = append_packed_id(this.packed_id, 'has_data_labels');
    return py_funs.get_attr(pid);
  }

  /**
   * An array of `Series` objects representing the series in this plot,
   * in the order they appear in the plot.
   */
  get series() {
    const pid = append_packed_id(this.packed_id, 'series');
    return py_funs.get_attr_returns_instance(pid, SeriesCollection);
  }

  /**
   * Read/write boolean value specifying whether to use a different color
   * for each of the points in this plot. Only effective when there is
   * a single series; PowerPoint automatically varies color by series when
   * more than one series is present.
   */
  set vary_by_categories(vary_by_categories: boolean) {
    const pid = append_packed_id(this.packed_id, 'vary_by_categories');
    py_funs.set_attr(pid, vary_by_categories);
  }
  get vary_by_categories() {
    const pid = append_packed_id(this.packed_id, 'vary_by_categories');
    return py_funs.get_attr(pid);
  }
}

/**
 * An area plot.
 */
export class AreaPlot extends _BasePlot {}

/**
 * A 3-dimensional area plot.
 */
export class Area3DPlot extends _BasePlot {}

/**
 * A bar chart-style plot.
 */
export class BarPlot extends _BasePlot {
  /**
   * Width of gap between bar(s) of each category, as an integer
   * percentage of the bar width. The default value for a new bar chart is
   * 150, representing 150% or 1.5 times the width of a single bar.
   */
  set gap_width(gap_width: number) {
    const pid = append_packed_id(this.packed_id, 'gap_width');
    py_funs.set_attr(pid, gap_width);
  }
  get gap_width() {
    const pid = append_packed_id(this.packed_id, 'gap_width');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write int value in range -100..100 specifying a percentage of
   * the bar width by which to overlap adjacent bars in a multi-series bar
   * chart. Default is 0. A setting of -100 creates a gap of a full bar
   * width and a setting of 100 causes all the bars in a category to be
   * superimposed. A stacked bar plot has overlap of 100 by default.
   *
   * Set the value of the `<c:overlap>` child element to int_value,
   * or remove the overlap element if int_value is 0.
   */
  set overlap(overlap: number) {
    const pid = append_packed_id(this.packed_id, 'overlap');
    py_funs.set_attr(pid, overlap);
  }
  get overlap() {
    const pid = append_packed_id(this.packed_id, 'overlap');
    return py_funs.get_attr(pid);
  }
}

/**
 * A bubble chart plot.
 */
export class BubblePlot extends _BasePlot {
  /**
   * An integer between 0 and 300 inclusive indicating the percentage of
   * the default size at which bubbles should be displayed. Assigning
   * `undefined` produces the same behavior as assigning `100`.
   */
  set bubble_scale(bubble_scale: number) {
    const pid = append_packed_id(this.packed_id, 'bubble_scale');
    py_funs.set_attr(pid, bubble_scale);
  }
  get bubble_scale() {
    const pid = append_packed_id(this.packed_id, 'bubble_scale');
    return py_funs.get_attr(pid);
  }
}

/**
 * An doughnut plot.
 */
export class DoughnutPlot extends _BasePlot {}
/**
 * A line chart-style plot.
 */
export class LinePlot extends _BasePlot {}
/**
 * A pie chart-style plot.
 */
export class PiePlot extends _BasePlot {}
/**
 * A radar-style plot.
 */
export class RadarPlot extends _BasePlot {}
/**
 * An XY (scatter) plot.
 */
export class XyPlot extends _BasePlot {}

export const PlotFactory = (cls: string) => {
  const clsList = {
    AreaPlot: AreaPlot,
    Area3DPlot: Area3DPlot,
    BarPlot: BarPlot,
    BubblePlot: BubblePlot,
    DoughnutPlot: DoughnutPlot,
    LinePlot: LinePlot,
    PiePlot: PiePlot,
    RadarPlot: RadarPlot,
    XyPlot: XyPlot
  };

  return clsList[cls as keyof typeof clsList];
};
