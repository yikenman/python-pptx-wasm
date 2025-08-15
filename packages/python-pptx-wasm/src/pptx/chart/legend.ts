import { append_packed_id, Enum, PackedBase, py_funs } from '../../bridge';
import { XL_LEGEND_POSITION } from '../enum/chart';
import { CT_Legend } from '../oxml/chart/legend';
import { Font } from '../text/text';

/**
 * Represents the legend in a chart. A chart can have at most one legend.
 */
export class Legend extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Legend);
  }

  /**
   * The `Font` object that provides access to the text properties for
   * this legend, such as bold, italic, etc.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Adjustment of the x position of the legend from its default.
   * Expressed as a float between -1.0 and 1.0 representing a fraction of
   * the chart width. Negative values move the legend left, positive
   * values move it to the right. `undefined` if no setting is specified.
   */
  set horz_offset(horz_offset: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'horz_offset');
    py_funs.set_attr(pid, horz_offset);
  }
  get horz_offset() {
    const pid = append_packed_id(this.packed_id, 'horz_offset');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * `true` if legend should be located inside plot area.
   *
   * Read/write boolean specifying whether legend should be placed inside
   * the plot area. In many cases this will cause it to be superimposed on
   * the chart itself. Assigning `undefined` to this property causes any
   * `c:overlay` element to be removed, which is interpreted the same as
   * `true`. This use case should rarely be required and assigning
   * a boolean value is recommended.
   */
  set include_in_layout(include_in_layout: boolean) {
    const pid = append_packed_id(this.packed_id, 'include_in_layout');
    py_funs.set_attr(pid, include_in_layout);
  }
  get include_in_layout() {
    const pid = append_packed_id(this.packed_id, 'include_in_layout');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write enumeration value specifying the
   * general region of the chart in which to place the legend.
   */
  set position(position: XL_LEGEND_POSITION) {
    const pid = append_packed_id(this.packed_id, 'position');
    py_funs.set_attr(pid, Enum(XL_LEGEND_POSITION, position));
  }
  get position() {
    const pid = append_packed_id(this.packed_id, 'position');
    return py_funs.get_attr<XL_LEGEND_POSITION>(pid);
  }
}
