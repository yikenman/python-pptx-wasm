import { append_packed_id, Enum, py_funs } from '../../bridge';
import { ChartFormat } from '../dml/chtfmt';
import { XL_MARKER_STYLE } from '../enum/chart';
import { BaseOxmlElement } from '../oxml/xmlchemy';
import { ElementProxy } from '../shared';

/**
 * Represents a data point marker, such as a diamond or circle, on
 * a line-type chart.
 */
export class Marker extends ElementProxy {
  // unknown element
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * The `ChartFormat` instance for this marker, providing access to shape
   * properties such as fill and line.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }

  /**
   * An integer between 2 and 72 inclusive indicating the size of this
   * marker in points. A value of `undefined` indicates no explicit value is
   * set and the size is inherited from a higher-level setting or the
   * PowerPoint default (which may be 9). Assigning `undefined` removes any
   * explicitly assigned size, causing this value to be inherited.
   */
  set size(size: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'size');
    py_funs.set_attr(pid, size);
  }
  get size() {
    const pid = append_packed_id(this.packed_id, 'size');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * A member of the enumeration indicating the shape
   * of this marker. Returns `undefined` if no explicit style has been set,
   * which corresponds to the "Automatic" option in the PowerPoint UI.
   */
  set style(style: XL_MARKER_STYLE | undefined) {
    const pid = append_packed_id(this.packed_id, 'style');
    py_funs.set_attr(pid, Enum(XL_MARKER_STYLE, style));
  }
  get style() {
    const pid = append_packed_id(this.packed_id, 'style');
    return py_funs.get_attr<XL_MARKER_STYLE | undefined>(pid);
  }
}
