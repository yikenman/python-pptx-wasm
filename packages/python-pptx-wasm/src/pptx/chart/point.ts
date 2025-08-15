import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { ChartFormat } from '../dml/chtfmt';
import { CT_SeriesComposite } from '../oxml/chart/series';
import { DataLabel } from './datalabel';
import { Marker } from './marker';

/**
 * Sequence providing access to the individual data points in a series.
 */
export class _BasePoints extends MutableArrayMixin<Point, Type<PackedBase>>(PackedBase) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SeriesComposite);
  }

  get _ser() {
    return this._element;
  }

  getItem(index: number): Point {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, Point);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

/**
 * Array providing access to the individual data points in
 * a `BubbleSeries` object.
 */
export class BubblePoints extends _BasePoints {}

/**
 * Array providing access to individual `Point` objects, each
 * representing the visual properties of a data point in the specified
 * category series.
 */
export class CategoryPoints extends _BasePoints {
  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

/**
 * Provides access to the properties of an individual data point in
 * a series, such as the visual properties of its marker and the text and
 * font of its data label.
 */
export class Point extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SeriesComposite);
  }

  get _ser() {
    return this._element;
  }

  /**
   * The `DataLabel` object representing the label on this data point.
   */
  get data_label() {
    const pid = append_packed_id(this.packed_id, 'data_label');
    return py_funs.get_attr_returns_instance(pid, DataLabel);
  }

  /**
   * The `ChartFormat` object providing access to the shape formatting
   * properties of this data point, such as line and fill.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }

  /**
   * The `Marker` instance for this point, providing access to the visual
   * properties of the data point marker, such as fill and line. Setting
   * these properties overrides any value set at the series level.
   */
  get marker() {
    const pid = append_packed_id(this.packed_id, 'marker');
    return py_funs.get_attr_returns_instance(pid, Marker);
  }
}

export class XyPoints extends _BasePoints {}
