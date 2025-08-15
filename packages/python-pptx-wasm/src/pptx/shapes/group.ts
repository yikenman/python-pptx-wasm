import { append_packed_id, py_funs } from '../../bridge';
import { ActionSetting } from '../action';
import { ShadowFormat } from '../dml/effect';
import { MSO_SHAPE_TYPE } from '../enum/shapes';
import { CT_GroupShape } from '../oxml/shapes/groupshape';
import { BaseShape } from './base';
import { GroupShapes } from './shapetree';

/**
 * A shape that acts as a container for other shapes.
 */
export class GroupShape extends BaseShape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShape);
  }

  get _grpSp() {
    return this._element;
  }

  /**
   * Unconditionally raises `TypeError`.
   *
   * A group shape cannot have a click action or hover action.
   */
  get click_action() {
    const pid = append_packed_id(this.packed_id, 'click_action');
    return py_funs.get_attr_returns_instance(pid, ActionSetting);
  }

  /**
   * Unconditionally `false`.
   *
   * A group shape does not have a textframe and cannot itself contain text. This does not
   * impact the ability of shapes contained by the group to each have their own text.
   */

  get has_text_frame(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_text_frame');
    return py_funs.get_attr(pid);
  }

  /**
   * `ShadowFormat` object representing shadow effect for this group.
   *
   * A `ShadowFormat` object is always returned, even when no shadow is explicitly defined on
   * this group shape (i.e. when the group inherits its shadow behavior).
   */
  get shadow() {
    const pid = append_packed_id(this.packed_id, 'shadow');
    return py_funs.get_attr_returns_instance(pid, ShadowFormat);
  }

  /**
   * Member of :ref:`MsoShapeType` identifying the type of this shape.
   *
   * Unconditionally `MSO_SHAPE_TYPE.GROUP` in this case
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }

  /**
   * `GroupShapes` object for this group.
   *
   * The `GroupShapes` object provides access to the group's member shapes and provides methods
   * for adding new ones.
   */
  get shapes() {
    const pid = append_packed_id(this.packed_id, 'shapes');
    return py_funs.get_attr_returns_instance(pid, GroupShapes);
  }
}
