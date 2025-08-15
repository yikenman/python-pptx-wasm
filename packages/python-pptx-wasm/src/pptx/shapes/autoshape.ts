// not use in public methods:
// AutoShapeType

import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { type Type } from '../../utils';
import { MutableArrayMixin } from '../../utils/array_mixin';
import { FillFormat } from '../dml/fill';
import { LineFormat } from '../dml/line';
import { MSO_AUTO_SHAPE_TYPE, MSO_SHAPE_TYPE } from '../enum/shapes';
import { CT_PresetGeometry2D, CT_Shape } from '../oxml/shapes/autoshape';
import { CT_LineProperties } from '../oxml/shapes/shared';
import { TextFrame } from '../text/text';
import { BaseShape } from './base';

/**
 * An adjustment value for an autoshape.
 *
 * An adjustment value corresponds to the position of an adjustment handle on an auto shape.
 * Adjustment handles are the small yellow diamond-shaped handles that appear on certain auto
 * shapes and allow the outline of the shape to be adjusted. For example, a rounded rectangle has
 * an adjustment handle that allows the radius of its corner rounding to be adjusted.
 *
 * Values are `float` and generally range from 0.0 to 1.0, although the value can be negative or
 * greater than 1.0 in certain circumstances.
 */
export class Adjustment extends PackedBase {
  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr<string>(pid);
  }
  get def_val() {
    const pid = append_packed_id(this.packed_id, 'def_val');
    return py_funs.get_attr<number>(pid);
  }
  get actual() {
    const pid = append_packed_id(this.packed_id, 'actual');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * Read/write `float` representing normalized adjustment value for this adjustment.
   *
   * Actual values are a large-ish integer expressed in shape coordinates, nominally between 0
   * and 100,000. The effective value is normalized to a corresponding value nominally between
   * 0.0 and 1.0. Intuitively this represents the proportion of the width or height of the shape
   * at which the adjustment value is located from its starting point. For simple shapes such as
   * a rounded rectangle, this intuitive correspondence holds. For more complicated shapes and
   * at more extreme shape proportions (e.g. width is much greater than height), the value can
   * become negative or greater than 1.0.
   */
  set effective_value(effective_value: number) {
    const pid = append_packed_id(this.packed_id, 'effective_value');
    py_funs.set_attr(pid, effective_value);
  }
  get effective_value() {
    const pid = append_packed_id(this.packed_id, 'effective_value');
    return py_funs.get_attr(pid);
  }

  /**
   * Denormalized effective value.
   *
   * Expressed in shape coordinates, this is suitable for using in the XML.
   */
  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr<number>(pid);
  }
}

/**
 * Sequence of `Adjustment` instances for an auto shape.
 *
 * Each represents an available adjustment for a shape of its type. Supports `len()` and indexed
 * access, e.g. `shape.adjustments[1] = 0.15`.
 */
export class AdjustmentCollection extends MutableArrayMixin<number, Type<PackedBase>>(PackedBase) {
  get _prstGeom() {
    const pid = append_packed_id(this.packed_id, '_prstGeom');
    return py_funs.get_attr_returns_instance(pid, CT_PresetGeometry2D);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr<number>(pid);
  }

  setItem(index: number, value: number) {
    const pid = append_packed_id(this.packed_id, index);
    py_funs.set_attr(pid, value);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

/**
 * A shape that can appear on a slide.
 *
 * Corresponds to the `p:sp` element that can appear in any of the slide-type parts
 * (slide, slideLayout, slideMaster, notesPage, notesMaster, handoutMaster).
 */
export class Shape extends BaseShape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Shape);
  }

  get _sp() {
    return this._element;
  }

  /**
   * Read-only reference to `AdjustmentCollection` instance for this shape.
   */
  get adjustments() {
    const pid = append_packed_id(this.packed_id, 'adjustments');
    return py_funs.get_attr_returns_instance(pid, AdjustmentCollection);
  }

  /**
   * Enumeration value identifying the type of this auto shape.
   *
   * Like `MSO_SHAPE.ROUNDED_RECTANGLE`. Raises `ValueError` if this shape is not an auto shape.
   */
  get auto_shape_type() {
    const pid = append_packed_id(this.packed_id, 'auto_shape_type');
    return py_funs.get_attr<MSO_AUTO_SHAPE_TYPE>(pid);
  }

  /**
   * `FillFormat` instance for this shape.
   *
   * Provides access to fill properties such as fill color.
   */
  get fill() {
    const pid = append_packed_id(this.packed_id, 'fill');
    return py_funs.get_attr_returns_instance(pid, FillFormat);
  }

  /**
   * Return the `a:ln` element containing the line format properties XML for this shape.
   */
  get_or_add_ln() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_ln');
    return py_funs.get_attr_returns_instance(pid, CT_LineProperties);
  }

  /**
   * `true` if this shape can contain text. Always `true` for an AutoShape.
   */
  get has_text_frame(): boolean {
    const pid = append_packed_id(this.packed_id, 'fhas_text_frameill');
    return py_funs.get_attr(pid);
  }

  /**
   * `LineFormat` instance for this shape.
   *
   * Provides access to line properties such as line color.
   */
  get line() {
    const pid = append_packed_id(this.packed_id, 'line');
    return py_funs.get_attr_returns_instance(pid, LineFormat);
  }

  /**
   * The `a:ln` element containing the line format properties such as line color and width.
   *
   * `undefined` if no `a:ln` element is present.
   */
  get ln() {
    const pid = append_packed_id(this.packed_id, 'ln');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LineProperties);
  }

  /**
   * Unique integer identifying the type of this shape, like `MSO_SHAPE_TYPE.TEXT_BOX`.
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }

  /**
   * Read/write. Text in shape as a single string.
   *
   * The returned string will contain a newline character (`"\n"`) separating each paragraph
   * and a vertical-tab (`"\v"`) character for each line break (soft carriage return) in the
   * shape's text.
   *
   * Assignment to `text` replaces any text previously contained in the shape, along with any
   * paragraph or font formatting applied to it. A newline character (`"\n"`) in the assigned
   * text causes a new paragraph to be started. A vertical-tab (`"\v"`) character in the
   * assigned text causes a line-break (soft carriage-return) to be inserted. (The vertical-tab
   * character appears in clipboard text copied from PowerPoint as its str encoding of
   * line-breaks.)
   */
  set text(text: string) {
    const pid = append_packed_id(this.packed_id, 'text');
    py_funs.set_attr(pid, text);
  }
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr(pid);
  }

  /**
   * `TextFrame` instance for this shape.
   *
   * Contains the text of the shape and provides access to text formatting properties.
   */
  get text_frame() {
    const pid = append_packed_id(this.packed_id, 'text_frame');
    return py_funs.get_attr_returns_instance(pid, TextFrame);
  }
}
