// not use in public methods:
// _Color
// _HslColor
// _NoneColor
// _PrstColor
// _SchemeColor
// _ScRgbColor
// _SRgbColor
// _SysColor
// RGBColor

import { append_packed_id, Enum, PackedBase, py_funs, RGBColor } from '../../bridge';
import { MSO_COLOR_TYPE, MSO_THEME_COLOR } from '../enum/dml';
import { BaseOxmlElement } from '../oxml/xmlchemy';

/**
 * Provides access to color settings such as RGB color, theme color, and
 * luminance adjustments.
 */
export class ColorFormat extends PackedBase {
  get _xFill() {
    const pid = append_packed_id(this.packed_id, '_xFill');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * Read/write float value between -1.0 and 1.0 indicating the brightness
   * adjustment for this color, e.g. -0.25 is 25% darker and 0.4 is 40%
   * lighter. 0 means no brightness adjustment.
   */
  set brightness(brightness: number) {
    const pid = append_packed_id(this.packed_id, 'brightness');
    py_funs.set_attr(pid, brightness);
  }
  get brightness() {
    const pid = append_packed_id(this.packed_id, 'brightness');
    return py_funs.get_attr(pid);
  }

  /**
   * `RGBColor` value of this color, or undefined if no RGB color is explicitly
   * defined for this font. Setting this value to an `RGBColor` instance
   * causes its type to change to MSO_COLOR_TYPE.RGB. If the color was a
   * theme color with a brightness adjustment, the brightness adjustment
   * is removed when changing it to an RGB color.
   */

  set rgb(rgb: [r: number, g: number, b: number]) {
    const pid = append_packed_id(this.packed_id, 'rgb');
    py_funs.set_attr(pid, RGBColor(rgb));
  }
  get rgb() {
    const pid = append_packed_id(this.packed_id, 'rgb');
    return py_funs.get_attr<[r: number, g: number, b: number]>(pid);
  }

  /**
   * Theme color value of this color.
   * Value is a member of MsoThemeColorIndex, e.g.
   * `MSO_THEME_COLOR.ACCENT_1`. Raises AttributeError on access if the
   * color is not type `MSO_COLOR_TYPE.SCHEME`. Assigning a member of
   * MsoThemeColorIndex causes the color's type to change to
   * `MSO_COLOR_TYPE.SCHEME`.
   */
  set theme_color(theme_color: MSO_THEME_COLOR) {
    const pid = append_packed_id(this.packed_id, 'theme_color');
    py_funs.set_attr(pid, Enum(MSO_THEME_COLOR, theme_color));
  }
  get theme_color() {
    const pid = append_packed_id(this.packed_id, 'theme_color');
    return py_funs.get_attr<MSO_THEME_COLOR>(pid);
  }

  /**
   * Read-only. A value from MsoColorType, either RGB or SCHEME,
   * corresponding to the way this color is defined, or undefined if no color
   * is defined at the level of this font.
   */
  get type() {
    const pid = append_packed_id(this.packed_id, 'type');
    return py_funs.get_attr<MSO_COLOR_TYPE>(pid);
  }
}
