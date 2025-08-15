import { append_packed_id, Enum, type LengthType, PackedBase, py_funs } from '../../bridge';
import { MSO_LINE_DASH_STYLE } from '../enum/dml';
import { BaseOxmlElement } from '../oxml/xmlchemy';
import { ColorFormat } from './color';
import { FillFormat } from './fill';

/**
 * Provides access to line properties such as color, style, and width.
 * A LineFormat object is typically accessed via the `.line` property of
 * a shape such as `Shape` or `Picture`.
 */
export class LineFormat extends PackedBase {
  get _parent() {
    const pid = append_packed_id(this.packed_id, '_parent');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * The `ColorFormat` instance that provides access to the color settings
   * for this line. Essentially a shortcut for `line.fill.fore_color`.
   * As a side-effect, accessing this property causes the line fill type
   * to be set to `MSO_FILL.SOLID`. If this sounds risky for your use
   * case, use `line.fill.type` to non-destructively discover the
   * existing fill type.
   */
  get color() {
    const pid = append_packed_id(this.packed_id, 'color');
    return py_funs.get_attr_returns_instance(pid, ColorFormat);
  }

  /**
   * Return value indicating line style.
   * Returns a member of MsoLineDashStyle indicating line style, or
   * `undefined` if no explicit value has been set. When no explicit value has
   * been set, the line dash style is inherited from the style hierarchy.
   * Assigning `undefined` removes any existing explicitly-defined dash style.
   */
  set dash_style(dash_style: MSO_LINE_DASH_STYLE | undefined) {
    const pid = append_packed_id(this.packed_id, 'dash_style');
    py_funs.set_attr(pid, Enum(MSO_LINE_DASH_STYLE, dash_style));
  }
  get dash_style() {
    const pid = append_packed_id(this.packed_id, 'dash_style');
    return py_funs.get_attr<MSO_LINE_DASH_STYLE | undefined>(pid);
  }

  /**
   * `FillFormat` instance for this line, providing access to fill
   * properties such as foreground color.
   */
  get fill() {
    const pid = append_packed_id(this.packed_id, 'fill');
    return py_funs.get_attr_returns_instance(pid, FillFormat);
  }

  /**
   * The width of the line expressed as an integer number of English
   * Metric Units (EMU). The returned value is an instance of `Length`,
   * a value class having properties such as `.inches`, `.cm`, and `.pt`
   * for converting the value into convenient units.
   */
  set width(width: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'width');
    py_funs.set_attr(pid, width);
  }
  get width() {
    const pid = append_packed_id(this.packed_id, 'width');
    return py_funs.get_attr(pid);
  }
}
