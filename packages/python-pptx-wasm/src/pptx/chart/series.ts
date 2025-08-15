import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { ChartFormat } from '../dml/chtfmt';
import { CT_SeriesComposite } from '../oxml/chart/series';
import { BaseOxmlElement } from '../oxml/xmlchemy';
import { DataLabels } from './datalabel';
import { Marker } from './marker';
import { BubblePoints, CategoryPoints, XyPoints } from './point';

/**
 * Base class for `BarSeries` and other series classes.
 */
export class _BaseSeries extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SeriesComposite);
  }

  get _ser() {
    return this._element;
  }

  /**
   * The `ChartFormat` instance for this series, providing access to shape
   * properties such as fill and line.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }

  /**
   * The zero-based integer index of this series as reported in its
   * `c:ser/c:idx` element.
   */
  get index(): number {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.get_attr(pid);
  }

  /**
   * The string label given to this series, appears as the title of the
   * column for this series in the Excel worksheet. It also appears as the
   * label for this series in the legend.
   */
  get name(): string {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }
}

/**
 * Base class for `BarSeries` and other category chart series classes.
 */
export class _BaseCategorySeries extends _BaseSeries {
  /**
   * `DataLabels` object controlling data labels for this series.
   */
  get data_labels() {
    const pid = append_packed_id(this.packed_id, 'data_labels');
    return py_funs.get_attr_returns_instance(pid, DataLabels);
  }

  /**
   * The `CategoryPoints` object providing access to individual data
   * points in this series.
   */
  get points() {
    const pid = append_packed_id(this.packed_id, 'points');
    return py_funs.get_attr_returns_instance(pid, CategoryPoints);
  }

  /**
   * Read-only. An array containing the float values for this series, in
   * the order they appear on the chart.
   */
  get values(): [number] {
    const pid = append_packed_id(this.packed_id, 'values');
    return py_funs.get_attr(pid);
  }
}

/**
 * Mixin class providing `.marker` property for line-type chart series. The
 * line-type charts are Line, XY, and Radar.
 */
const _MarkerMixin = <T, B extends Type>(Base: B) => {
  class Class extends Base {
    /**
     * The `Marker` instance for this series, providing access to data point
     * marker properties such as fill and line. Setting these properties
     * determines the appearance of markers for all points in this series
     * that are not overridden by settings at the point level.
     */
    get marker() {
      const pid = append_packed_id(this.packed_id, 'marker');
      return py_funs.get_attr_returns_instance(pid, Marker);
    }
  }

  return Class;
};

/**
 * A data point series belonging to an area plot.
 */
export class AreaSeries extends _BaseCategorySeries {}

/**
 * A data point series belonging to a bar plot.
 */
export class BarSeries extends _BaseCategorySeries {
  /**
   * `true` if a point having a value less than zero should appear with a
   * fill different than those with a positive value. `false` if the fill
   * should be the same regardless of the bar's value. When `true`, a bar
   * with a solid fill appears with white fill; in a bar with gradient
   * fill, the direction of the gradient is reversed, e.g. dark -> light
   * instead of light -> dark. The term "invert" here should be understood
   * to mean "invert the *direction* of the *fill gradient*".
   */
  set invert_if_negative(invert_if_negative: boolean) {
    const pid = append_packed_id(this.packed_id, 'invert_if_negative');
    py_funs.set_attr(pid, invert_if_negative);
  }
  get invert_if_negative() {
    const pid = append_packed_id(this.packed_id, 'invert_if_negative');
    return py_funs.get_attr(pid);
  }
}

/**
 * A data point series belonging to a line plot.
 */
export class LineSeries extends _MarkerMixin(_BaseCategorySeries) {
  /**
   * Read/write boolean specifying whether to use curve smoothing to
   * form the line connecting the data points in this series into
   * a continuous curve. If `false`, a series of straight line segments
   * are used to connect the points.
   */
  set smooth(smooth: boolean) {
    const pid = append_packed_id(this.packed_id, 'smooth');
    py_funs.set_attr(pid, smooth);
  }
  get smooth() {
    const pid = append_packed_id(this.packed_id, 'smooth');
    return py_funs.get_attr(pid);
  }
}

/**
 * A data point series belonging to a pie plot.
 */
export class PieSeries extends _BaseCategorySeries {}

/**
 * A data point series belonging to a radar plot.
 */
export class RadarSeries extends _MarkerMixin(_BaseCategorySeries) {}

/**
 * A data point series belonging to an XY (scatter) plot.
 */
export class XySeries extends _MarkerMixin(_BaseSeries) {
  /**
   * Generate each float Y value in this series, in the order they appear
   * on the chart. A value of `undefined` represents a missing Y value
   * (corresponding to a blank Excel cell).
   */
  iter_values() {
    const pid = append_packed_id(this.packed_id, 'iter_values');
    return py_funs.call_method<number[]>(pid, arguments);
  }

  /**
   * The `XyPoints` object providing access to individual data points in
   * this series.
   */
  get points() {
    const pid = append_packed_id(this.packed_id, 'points');
    return py_funs.get_attr_returns_instance(pid, XyPoints);
  }

  /**
   * Read-only. An array containing the float values for this series, in
   * the order they appear on the chart.
   */
  get values() {
    const pid = append_packed_id(this.packed_id, 'values');
    return py_funs.get_attr<number[]>(pid);
  }
}

/**
 * A data point series belonging to a bubble plot.
 */
export class BubbleSeries extends XySeries {
  /**
   * The `BubblePoints` object providing access to individual data point
   * objects used to discover and adjust the formatting and data labels of
   * a data point.
   */
  get points() {
    const pid = append_packed_id(this.packed_id, 'points');
    return py_funs.get_attr_returns_instance(pid, BubblePoints);
  }
}

/**
 * A sequence of |Series| objects.
 */
export class SeriesCollection extends MutableArrayMixin<
  InstanceType<ReturnType<typeof _SeriesFactory>>,
  Type<PackedBase>
>(PackedBase) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _SeriesFactory);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

const _SeriesFactory = (cls: string) => {
  const clsList = {
    AreaSeries: AreaSeries,
    BarSeries: BarSeries,
    BubbleSeries: BubbleSeries,
    PieSeries: PieSeries,
    LineSeries: LineSeries,
    RadarSeries: RadarSeries,
    XySeries: XySeries
  };

  return clsList[cls as keyof typeof clsList];
};
