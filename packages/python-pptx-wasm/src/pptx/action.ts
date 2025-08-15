import { append_packed_id, py_funs } from '../bridge';
import { PP_ACTION_TYPE } from './enum/action';
import { CT_NonVisualDrawingProps } from './oxml/shapes/shared';
import { CT_TextCharacterProperties } from './oxml/text';
import { Subshape } from './shapes/subshape';
import { Slide } from './slide';

const xPrFactory = (cls: string) => {
  const clsList = {
    CT_NonVisualDrawingProps: CT_NonVisualDrawingProps,
    CT_TextCharacterProperties: CT_TextCharacterProperties
  } as const;

  return clsList[cls as keyof typeof clsList];
};

/**
 * Properties specifying how a shape or run reacts to mouse actions.
 */
export class ActionSetting extends Subshape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, xPrFactory);
  }

  /**
   * Member of :ref:`PpActionType` enumeration, such as `PP_ACTION.HYPERLINK`.
   *
   * The returned member indicates the type of action that will result when the
   * specified shape or text is clicked or the mouse pointer is positioned over the
   * shape during a slide show.
   *
   * If there is no click-action or the click-action value is not recognized (is not
   * one of the official `MsoPpAction` values) then `PP_ACTION.NONE` is returned.
   */
  get action(): PP_ACTION_TYPE {
    const pid = append_packed_id(this.packed_id, 'action');
    return py_funs.get_attr<PP_ACTION_TYPE>(pid);
  }

  /**
   * A `Hyperlink` object representing the hyperlink action defined on
   * this click or hover mouse event. A `Hyperlink` object is always
   * returned, even if no hyperlink or other click action is defined.
   */
  get hyperlink() {
    const pid = append_packed_id(this.packed_id, 'hyperlink');
    return py_funs.get_attr_returns_instance(pid, Hyperlink);
  }

  /**
   * A reference to the slide in this presentation that is the target of
   * the slide jump action in this shape. Slide jump actions include
   * `PP_ACTION.FIRST_SLIDE`, `LAST_SLIDE`, `NEXT_SLIDE`,
   * `PREVIOUS_SLIDE`, and `NAMED_SLIDE`. Returns `undefined` for all other
   * actions. In particular, the `LAST_SLIDE_VIEWED` action and the `PLAY`
   * (start other presentation) actions are not supported.
   *
   * A slide object may be assigned to this property, which makes the
   * shape an "internal hyperlink" to the assigned slide:
   *
   * ```javascript
   * let [slide, target_slide] = [prs.slides[0], prs.slides[1]];
   * let shape = slide.shapes[0];
   * shape.target_slide = target_slide;
   * ```
   *
   * Assigning `undefined` removes any slide jump action. Note that this is
   * accomplished by removing any action present (such as a hyperlink),
   * without first checking that it is a slide jump action.
   */
  set target_slide(target_slide: Slide) {
    const pid = append_packed_id(this.packed_id, 'target_slide');
    py_funs.set_attr(pid, target_slide);
  }
  get target_slide() {
    const pid = append_packed_id(this.packed_id, 'target_slide');
    return py_funs.get_attr_returns_instance(pid, Slide);
  }
}

/**
 * Represents a hyperlink action on a shape or text run.
 */
export class Hyperlink extends Subshape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, xPrFactory);
  }

  /**
   * Read/write. The URL of the hyperlink.
   *
   * URL can be on http, https, mailto, or file scheme; others may work. Returns `undefined` if no
   * hyperlink is defined, including when another action such as `RUN_MACRO` is defined on the
   * object. Assigning `undefined` removes any action defined on the object, whether it is a hyperlink
   * action or not.
   */
  set address(address: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'address');
    py_funs.set_attr(pid, address);
  }
  get address() {
    const pid = append_packed_id(this.packed_id, 'address');
    return py_funs.get_attr(pid);
  }
}
