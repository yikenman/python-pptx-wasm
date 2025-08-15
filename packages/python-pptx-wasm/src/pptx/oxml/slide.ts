import { append_packed_id, py_funs } from '../../bridge';
import {
  CT_BlipFillProperties,
  CT_GradientFillProperties,
  CT_GroupFillProperties,
  CT_NoFillProperties,
  CT_PatternFillProperties,
  CT_SolidColorFillProperties
} from './dml/fill';
import { _Element, _XPathObject } from './lxml';
import { CT_GroupShape } from './shapes/groupshape';
import { FillPropertiesFactory } from './shapes/shared';
import { BaseOxmlElement } from './xmlchemy';

/**
 * Base class for the six slide types, providing common methods.
 */
export class _BaseSlideElement extends BaseOxmlElement {
  get cSld(): any {
    return undefined;
  }

  /**
   * Return required `p:cSld/p:spTree` grandchild.
   */
  get spTree() {
    const pid = append_packed_id(this.packed_id, 'spTree');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShape);
  }
}

/**
 * `p:bg` element.
 */
export class CT_Background extends BaseOxmlElement {
  get bgPr() {
    const pid = append_packed_id(this.packed_id, 'bgPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_BackgroundProperties);
  }

  get_or_add_bgPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bgPr');
    return py_funs.call_method_returns_instance(pid, CT_BackgroundProperties, arguments, obj);
  }

  get bgRef() {
    const pid = append_packed_id(this.packed_id, 'bgRef');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_bgRef(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bgRef');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  /**
   * Return a new `p:bgPr` element with noFill properties.
   */
  add_noFill_bgPr() {
    const pid = append_packed_id(this.packed_id, 'add_noFill_bgPr');
    return py_funs.call_method_returns_instance(pid, CT_BackgroundProperties, arguments);
  }
}

/**
 * `p:bgPr` element.
 */
export class CT_BackgroundProperties extends BaseOxmlElement {
  get eg_fillProperties() {
    const pid = append_packed_id(this.packed_id, 'eg_fillProperties');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, FillPropertiesFactory);
  }

  get noFill() {
    const pid = append_packed_id(this.packed_id, 'noFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NoFillProperties);
  }

  get_or_change_to_noFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_noFill');
    return py_funs.call_method_returns_instance(pid, CT_NoFillProperties, arguments, obj);
  }

  get solidFill() {
    const pid = append_packed_id(this.packed_id, 'solidFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SolidColorFillProperties);
  }

  get_or_change_to_solidFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_solidFill');
    return py_funs.call_method_returns_instance(pid, CT_SolidColorFillProperties, arguments, obj);
  }

  get gradFill() {
    const pid = append_packed_id(this.packed_id, 'gradFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GradientFillProperties);
  }

  get_or_change_to_gradFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_gradFill');
    return py_funs.call_method_returns_instance(pid, CT_GradientFillProperties, arguments, obj);
  }

  get blipFill() {
    const pid = append_packed_id(this.packed_id, 'blipFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_BlipFillProperties);
  }

  get_or_change_to_blipFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_blipFill');
    return py_funs.call_method_returns_instance(pid, CT_BlipFillProperties, arguments, obj);
  }

  get pattFill() {
    const pid = append_packed_id(this.packed_id, 'pattFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PatternFillProperties);
  }

  get_or_change_to_pattFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_pattFill');
    return py_funs.call_method_returns_instance(pid, CT_PatternFillProperties, arguments, obj);
  }

  get grpFill() {
    const pid = append_packed_id(this.packed_id, 'grpFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GroupFillProperties);
  }

  get_or_change_to_grpFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_grpFill');
    return py_funs.call_method_returns_instance(pid, CT_GroupFillProperties, arguments, obj);
  }
}

/**
 * `p:cSld` element.
 */
export class CT_CommonSlideData extends BaseOxmlElement {
  get bg() {
    const pid = append_packed_id(this.packed_id, 'bg');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Background);
  }

  get_or_add_bg(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bg');
    return py_funs.call_method_returns_instance(pid, CT_Background, arguments, obj);
  }

  get spTree() {
    const pid = append_packed_id(this.packed_id, 'spTree');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShape);
  }

  set name(name: string) {
    const pid = append_packed_id(this.packed_id, 'name');
    py_funs.set_attr(pid, name);
  }

  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }

  /**
   * If no such grandchild is present, any existing `p:bg` child is first removed and a new
   * default `p:bg` with noFill settings is added.
   */
  get_or_add_bgPr() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bgPr');
    return py_funs.call_method_returns_instance(pid, CT_BackgroundProperties, arguments);
  }
}

/**
 * `p:notesMaster` element, root of a notes master part.
 */
export class CT_NotesMaster extends _BaseSlideElement {
  get cSld() {
    const pid = append_packed_id(this.packed_id, 'cSld');
    return py_funs.get_attr_returns_instance(pid, CT_CommonSlideData);
  }
}

/**
 * `p:notes` element, root of a notes slide part.
 */
export class CT_NotesSlide extends _BaseSlideElement {
  get cSld() {
    const pid = append_packed_id(this.packed_id, 'cSld');
    return py_funs.get_attr_returns_instance(pid, CT_CommonSlideData);
  }
}

/**
 * `p:sld` element, root element of a slide part (XML document).
 */
export class CT_Slide extends _BaseSlideElement {
  get cSld() {
    const pid = append_packed_id(this.packed_id, 'cSld');
    return py_funs.get_attr_returns_instance(pid, CT_CommonSlideData);
  }

  get clrMapOvr() {
    const pid = append_packed_id(this.packed_id, 'clrMapOvr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_clrMapOvr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_clrMapOvr');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get timing() {
    const pid = append_packed_id(this.packed_id, 'timing');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SlideTiming);
  }

  get_or_add_timing(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_timing');
    return py_funs.call_method_returns_instance(pid, CT_SlideTiming, arguments, obj);
  }

  /**
   * Return `p:bg` grandchild or undefined if not present.
   */
  get bg() {
    const pid = append_packed_id(this.packed_id, 'bg');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Background);
  }

  /**
   * Return parent element for new `p:video` child element.
   * Handles timing element creation/removal as needed.
   */
  get_or_add_childTnLst() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_childTnLst');
    return py_funs.call_method_returns_instance(pid, _XPathObject, arguments);
  }
}

/**
 * `p:sldLayout` element, root of a slide layout part.
 */
export class CT_SlideLayout extends _BaseSlideElement {
  get cSld() {
    const pid = append_packed_id(this.packed_id, 'cSld');
    return py_funs.get_attr_returns_instance(pid, CT_CommonSlideData);
  }
}

/**
 * `p:sldLayoutIdLst` element, child of `p:sldMaster`.
 *
 * Contains references to the slide layouts that inherit from the slide master.
 */
export class CT_SlideLayoutIdList extends BaseOxmlElement {
  get sldLayoutId_lst() {
    const pid = append_packed_id(this.packed_id, 'sldLayoutId_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SlideLayoutIdListEntry);
  }
}

/**
 * `p:sldLayoutId` element, child of `p:sldLayoutIdLst`.
 *
 * Contains a reference to a slide layout.
 */
export class CT_SlideLayoutIdListEntry extends BaseOxmlElement {
  set rId(rId: string) {
    const pid = append_packed_id(this.packed_id, 'rId');
    py_funs.set_attr(pid, rId);
  }

  get rId() {
    const pid = append_packed_id(this.packed_id, 'rId');
    return py_funs.get_attr(pid);
  }
}

/**
 * `p:sldMaster` element, root of a slide master part.
 */
export class CT_SlideMaster extends _BaseSlideElement {
  get cSld() {
    const pid = append_packed_id(this.packed_id, 'cSld');
    return py_funs.get_attr_returns_instance(pid, CT_CommonSlideData);
  }

  get sldLayoutIdLst() {
    const pid = append_packed_id(this.packed_id, 'sldLayoutIdLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SlideLayoutIdList);
  }

  get_or_add_sldLayoutIdLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_sldLayoutIdLst');
    return py_funs.call_method_returns_instance(pid, CT_SlideLayoutIdList, arguments, obj);
  }
}

/**
 * `p:timing` element, specifying animations and timed behaviors.
 */
export class CT_SlideTiming extends BaseOxmlElement {
  get tnLst() {
    const pid = append_packed_id(this.packed_id, 'tnLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_tnLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tnLst');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }
}

/**
 * `p:tnLst` or `p:childTnList` element for timing nodes.
 */
export class CT_TimeNodeList extends BaseOxmlElement {
  /**
   * Add a new `p:video` child element for movie with specified shape ID.
   * Includes timing and media node configuration.
   */
  add_video(shape_id: number) {
    const pid = append_packed_id(this.packed_id, 'add_video');
    return py_funs.call_method<undefined>(pid, arguments, shape_id);
  }
}

/**
 * `p:video` element, specifying video media details.
 */
export class CT_TLMediaNodeVideo extends BaseOxmlElement {
  get cMediaNode() {
    const pid = append_packed_id(this.packed_id, 'cMediaNode');
    return py_funs.get_attr_returns_instance(pid, _Element);
  }
}
