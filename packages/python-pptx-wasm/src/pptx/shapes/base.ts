import { append_packed_id, type LengthType, PackedBase, py_funs } from '../../bridge';
import { ActionSetting } from '../action';
import { ShadowFormat } from '../dml/effect';
import { MSO_SHAPE_TYPE, PP_PLACEHOLDER_TYPE } from '../enum/shapes';
import { ShapeElementFactroy } from '../oxml/shapes/groupshape';
import { CT_Placeholder } from '../oxml/shapes/shared';
import { ElementProxy } from '../shared';

/**
 * Base class for shape objects.
 *
 * Subclasses include `Shape`, `Picture`, and `GraphicFrame`.
 */
export class BaseShape extends PackedBase {
  /**
   * `ActionSetting` instance providing access to click behaviors.
   *
   * Click behaviors are hyperlink-like behaviors including jumping to a hyperlink (web page)
   * or to another slide in the presentation. The click action is that defined on the overall
   * shape, not a run of text within the shape. An `ActionSetting` object is always returned,
   * even when no click behavior is defined on the shape.
   */

  get click_action() {
    const pid = append_packed_id(this.packed_id, 'click_action');
    return py_funs.get_attr_returns_instance(pid, ActionSetting);
  }

  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, ShapeElementFactroy);
  }

  /**
   * not implemented
   */
  get _parent() {
    console.log('not implemented.');
    return undefined;
  }

  /**
   * `true` if this shape is a graphic frame containing a chart object.
   *
   * `false` otherwise. When `true`, the chart object can be accessed using the `.chart`
   * property.
   */
  get has_chart(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_chart');
    return py_funs.get_attr(pid);
  }

  /**
   * `true` if this shape is a graphic frame containing a table object.
   *
   * `false` otherwise. When `true`, the table object can be accessed using the `.table`
   * property.
   */

  get has_table(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_table');
    return py_funs.get_attr(pid);
  }

  /**
   * `true` if this shape can contain text.
   */
  get has_text_frame(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_text_frame');
    return py_funs.get_attr(pid);
  }

  /**
   * Integer distance between top and bottom extents of shape in EMUs.
   */
  set height(height: LengthType) {
    const pid = append_packed_id(this.packed_id, 'height');
    py_funs.set_attr(pid, height);
  }
  get height() {
    const pid = append_packed_id(this.packed_id, 'height');
    return py_funs.get_attr(pid);
  }

  /**
   * `true` if this shape is a placeholder.
   *
   * A shape is a placeholder if it has a <p:ph> element.
   */
  get is_placeholder(): boolean {
    const pid = append_packed_id(this.packed_id, 'is_placeholder');
    return py_funs.get_attr(pid);
  }

  /**
   * Integer distance of the left edge of this shape from the left edge of the slide.
   *
   * Read/write. Expressed in English Metric Units (EMU)
   */
  set left(left: LengthType) {
    const pid = append_packed_id(this.packed_id, 'left');
    py_funs.set_attr(pid, left);
  }
  get left() {
    const pid = append_packed_id(this.packed_id, 'left');
    return py_funs.get_attr(pid);
  }

  /**
   * Name of this shape, e.g. 'Picture 7'.
   */
  set name(name: string) {
    const pid = append_packed_id(this.packed_id, 'name');
    py_funs.set_attr(pid, name);
  }
  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }

  /**
   * The package part containing this shape.
   *
   * A `BaseSlidePart` subclass in this case. Access to a slide part should only be required if
   * you are extending the behavior of `pp` API objects.
   *
   * not implemented
   */
  get part() {
    console.log('not implemented.');
    return undefined;
  }

  /**
   * Provides access to placeholder-specific properties such as placeholder type.
   *
   * Raises `ValueError` on access if the shape is not a placeholder.
   */
  get placeholder_format() {
    const pid = append_packed_id(this.packed_id, 'placeholder_format');
    return py_funs.get_attr_returns_instance(pid, _PlaceholderFormat);
  }

  /**
   * Degrees of clockwise rotation.
   *
   * Read/write float. Negative values can be assigned to indicate counter-clockwise rotation,
   * e.g. assigning -45.0 will change setting to 315.0.
   */
  set rotation(rotation: number) {
    const pid = append_packed_id(this.packed_id, 'rotation');
    py_funs.set_attr(pid, rotation);
  }
  get rotation() {
    const pid = append_packed_id(this.packed_id, 'rotation');
    return py_funs.get_attr(pid);
  }

  /**
   * `ShadowFormat` object providing access to shadow for this shape.
   *
   * A `ShadowFormat` object is always returned, even when no shadow is
   * explicitly defined on this shape (i.e. it inherits its shadow
   * behavior).
   */
  get shadow() {
    const pid = append_packed_id(this.packed_id, 'shadow');
    return py_funs.get_attr_returns_instance(pid, ShadowFormat);
  }

  /**
   * Read-only positive integer identifying this shape.
   *
   * The id of a shape is unique among all shapes on a slide.
   */
  get shape_id(): number {
    const pid = append_packed_id(this.packed_id, 'shape_id');
    return py_funs.get_attr(pid);
  }

  /**
   * A member of MSO_SHAPE_TYPE classifying this shape by type.
   *
   * Like `MSO_SHAPE_TYPE.CHART`. Must be implemented by subclasses.
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }

  /**
   * Distance from the top edge of the slide to the top edge of this shape.
   *
   * Read/write. Expressed in English Metric Units (EMU)
   */
  set top(top: LengthType) {
    const pid = append_packed_id(this.packed_id, 'top');
    py_funs.set_attr(pid, top);
  }
  get top() {
    const pid = append_packed_id(this.packed_id, 'top');
    return py_funs.get_attr(pid);
  }

  /**
   * Distance between left and right extents of this shape.
   *
   * Read/write. Expressed in English Metric Units (EMU).
   */
  set width(width: LengthType) {
    const pid = append_packed_id(this.packed_id, 'width');
    py_funs.set_attr(pid, width);
  }
  get width() {
    const pid = append_packed_id(this.packed_id, 'width');
    return py_funs.get_attr(pid);
  }
}

/**
 * Provides properties specific to placeholders, such as the placeholder type.
 *
 * Accessed via the `.placeholder_format` property of a placeholder shape.
 */
export class _PlaceholderFormat extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Placeholder);
  }

  get _ph() {
    return this._element;
  }

  /**
   * The `p:ph` element proxied by this object.
   */
  get element(): any {
    return this._ph;
  }

  /**
   * Integer placeholder 'idx' attribute.
   */
  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr(pid);
  }

  /**
   * Placeholder type.
   *
   * A member of the PpPlaceholderType enumeration, e.g. PP_PLACEHOLDER.CHART
   */
  get type() {
    const pid = append_packed_id(this.packed_id, 'type');
    return py_funs.get_attr<PP_PLACEHOLDER_TYPE>(pid);
  }
}
