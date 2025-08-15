// not use in public methods:
// _Fill
// _BlipFill
// _GradFill
// _GrpFill
// _NoFill
// _NoneFill
// _PattFill
// _SolidFill

import { append_packed_id, Enum, PackedBase, py_funs } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { MSO_FILL_TYPE, MSO_PATTERN_TYPE } from '../enum/dml';
import { CT_GradientStop, CT_GradientStopList } from '../oxml/dml/fill';
import { BaseOxmlElement } from '../oxml/xmlchemy';
import { ElementProxy } from '../shared';
import { ColorFormat } from './color';

/**
 * Provides access to the current fill properties.
 * Also provides methods to change the fill type.
 */
export class FillFormat extends PackedBase {
  get _xPr() {
    const pid = append_packed_id(this.packed_id, '_xPr');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * Return a `ColorFormat` object representing background color.
   * This property is only applicable to pattern fills and lines.
   */
  get back_color() {
    const pid = append_packed_id(this.packed_id, 'back_color');
    return py_funs.get_attr_returns_instance(pid, ColorFormat);
  }

  /**
   * Sets the fill type to noFill, i.e. transparent.
   */
  background() {
    const pid = append_packed_id(this.packed_id, 'background');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  /**
   * Return a `ColorFormat` instance representing the foreground color of
   * this fill.
   */
  get fore_color() {
    const pid = append_packed_id(this.packed_id, 'fore_color');
    return py_funs.get_attr_returns_instance(pid, ColorFormat);
  }

  /**
   * Sets the fill type to gradient.
   * If the fill is not already a gradient, a default gradient is added.
   * The default gradient corresponds to the default in the built-in
   * PowerPoint "White" template. This gradient is linear at angle
   * 90-degrees (upward), with two stops. The first stop is Accent-1 with
   * tint 100%, shade 100%, and satMod 130%. The second stop is Accent-1
   * with tint 50%, shade 100%, and satMod 350%.
   */
  gradient() {
    const pid = append_packed_id(this.packed_id, 'gradient');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  /**
   * Angle in float degrees of line of a linear gradient.
   * Read/Write. May be `undefined`, indicating the angle should be inherited
   * from the style hierarchy. An angle of 0.0 corresponds to
   * a left-to-right gradient. Increasing angles represent
   * counter-clockwise rotation of the line, for example 90.0 represents
   * a bottom-to-top gradient. Raises `TypeError` when the fill type is
   * not MSO_FILL_TYPE.GRADIENT. Raises `ValueError` for a non-linear
   * gradient (e.g. a radial gradient).
   */
  set gradient_angle(gradient_angle: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'gradient_angle');
    py_funs.set_attr(pid, gradient_angle);
  }
  get gradient_angle() {
    const pid = append_packed_id(this.packed_id, 'gradient_angle');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * `GradientStops` object providing access to stops of this gradient.
   * Raises `TypeError` when fill is not gradient (call `fill.gradient()`
   * first). Each stop represents a color between which the gradient
   * smoothly transitions.
   */
  get gradient_stops() {
    const pid = append_packed_id(this.packed_id, 'gradient_stops');
    return py_funs.get_attr_returns_instance(pid, _GradientStops);
  }

  /**
   * Return member of MsoPatternType indicating fill pattern.
   * Raises `TypeError` when fill is not patterned (call
   * `fill.patterned()` first). Returns `undefined` if no pattern has been set;
   * PowerPoint may display the default `PERCENT_5` pattern in this case.
   * Assigning `undefined` will remove any explicit pattern setting, although
   * relying on the default behavior is discouraged and may produce
   * rendering differences across client applications.
   */

  set pattern(pattern: MSO_PATTERN_TYPE | undefined) {
    const pid = append_packed_id(this.packed_id, 'pattern');
    py_funs.set_attr(pid, Enum(MSO_PATTERN_TYPE, pattern));
  }
  get pattern() {
    const pid = append_packed_id(this.packed_id, 'pattern');
    return py_funs.get_attr<MSO_PATTERN_TYPE | undefined>(pid);
  }

  /**
   * Selects the pattern fill type.
   * Note that calling this method does not by itself set a foreground or
   * background color of the pattern. Rather it enables subsequent
   * assignments to properties like fore_color to set the pattern and
   * colors.
   */
  patterned() {
    const pid = append_packed_id(this.packed_id, 'patterned');
    return py_funs.call_method(pid, arguments);
  }

  /**
   * Sets the fill type to solid, i.e. a solid color. Note that calling
   * this method does not set a color or by itself cause the shape to
   * appear with a solid color fill; rather it enables subsequent
   * assignments to properties like fore_color to set the color.
   */
  solid() {
    const pid = append_packed_id(this.packed_id, 'solid');
    return py_funs.call_method(pid, arguments);
  }

  /**
   * The type of this fill, e.g. `MSO_FILL_TYPE.SOLID`.
   */
  get type(): MSO_FILL_TYPE {
    const pid = append_packed_id(this.packed_id, 'type');
    return py_funs.get_attr(pid);
  }
}

/**
 * Collection of `GradientStop` objects defining gradient colors.
 *
 * A gradient must have a minimum of two stops, but can have as many more
 * than that as required to achieve the desired effect (three is perhaps
 * most common). Stops are sequenced in the order they are transitioned
 * through.
 */
class _GradientStops extends MutableArrayMixin<_GradientStop, Type<PackedBase>>(PackedBase) {
  get _gsLst() {
    const pid = append_packed_id(this.packed_id, '_gsLst');
    return py_funs.get_attr_returns_instance(pid, CT_GradientStopList);
  }

  getItem(index: number): _GradientStop {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, _GradientStop);
  }
  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

/**
 * A single gradient stop.
 * A gradient stop defines a color and a position.
 */
class _GradientStop extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GradientStop);
  }

  get _gs() {
    return this._element;
  }

  /**
   * Return `ColorFormat` object controlling stop color.
   */
  get color() {
    const pid = append_packed_id(this.packed_id, 'color');
    return py_funs.get_attr_returns_instance(pid, ColorFormat);
  }

  /**
   * Location of stop in gradient path as float between 0.0 and 1.0.
   * The value represents a percentage, where 0.0 (0%) represents the
   * start of the path and 1.0 (100%) represents the end of the path. For
   * a linear gradient, these would represent opposing extents of the
   * filled area.
   */
  set position(position: number) {
    const pid = append_packed_id(this.packed_id, 'position');
    py_funs.set_attr(pid, position);
  }
  get position() {
    const pid = append_packed_id(this.packed_id, 'position');
    return py_funs.get_attr(pid);
  }
}
