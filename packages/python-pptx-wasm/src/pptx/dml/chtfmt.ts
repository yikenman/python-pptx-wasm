import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { FillFormat } from './fill';
import { LineFormat } from './line';

/**
 * The `ChartFormat` object provides access to visual shape properties for
 * chart elements like `Axis`, `Series`, and `MajorGridlines`. It has two
 * properties, `fill` and `line`, which return a `FillFormat`
 * and `LineFormat` object respectively. The `ChartFormat` object is
 * provided by the `format` property on the target axis, series, etc.
 */
export class ChartFormat extends PackedBase {
  /**
   * `FillFormat` instance for this object, providing access to fill
   * properties such as fill color.
   */
  get fill() {
    const pid = append_packed_id(this.packed_id, 'fill');
    return py_funs.get_attr_returns_instance(pid, FillFormat);
  }

  /**
   * The `LineFormat` object providing access to the visual properties of
   * this object, such as line color and line style.
   */
  get line() {
    const pid = append_packed_id(this.packed_id, 'line');
    return py_funs.get_attr_returns_instance(pid, LineFormat);
  }
}
