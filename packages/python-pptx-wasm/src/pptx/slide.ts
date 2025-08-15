import { append_packed_id, py_funs } from '../bridge';
import { MutableArrayMixin, type Type } from '../utils';
import { FillFormat } from './dml/fill';
import { CT_SlideIdList, CT_SlideMasterIdList } from './oxml/presentation';
import { CT_CommonSlideData, CT_NotesSlide, CT_Slide, CT_SlideLayoutIdList, CT_SlideMaster } from './oxml/slide';
import { LayoutPlaceholder, NotesSlidePlaceholder } from './shapes/placeholder';
import {
  LayoutPlaceholders,
  LayoutShapes,
  MasterPlaceholders,
  MasterShapes,
  NotesSlidePlaceholders,
  NotesSlideShapes,
  SlidePlaceholders,
  SlideShapes
} from './shapes/shapetree';
import { ElementProxy, ParentedElementProxy, PartElementProxy } from './shared';
import { TextFrame } from './text/text';

/**
 * Base class for slide objects, including masters, layouts and notes.
 */
export class _BaseSlide extends PartElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Slide);
  }

  /**
   * `_Background` object providing slide background properties.
   *
   * This property returns a `_Background` object whether or not the
   * slide, master, or layout has an explicitly defined background.
   *
   * The same `_Background` object is returned on every call for the same
   * slide object.
   */
  get background() {
    const pid = append_packed_id(this.packed_id, 'background');
    return py_funs.get_attr_returns_instance(pid, _Background);
  }

  /**
   * String representing the internal name of this slide.
   *
   * Returns an empty string (`''`) if no name is assigned. Assigning an empty string or `undefined`
   * to this property causes any name to be removed.
   */
  set name(name: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'name');
    py_funs.set_attr(pid, name);
  }
  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }
}

/**
 * Base class for master objects such as `SlideMaster` and `NotesMaster`.
 *
 * Provides access to placeholders and regular shapes.
 */
export class _BaseMaster extends _BaseSlide {
  /**
   * `MasterPlaceholders` collection of placeholder shapes in this master.
   *
   * Sequence sorted in `idx` order.
   */
  get placeholders() {
    const pid = append_packed_id(this.packed_id, 'placeholders');
    return py_funs.get_attr_returns_instance(pid, MasterPlaceholders);
  }

  /**
   * Instance of `MasterShapes` containing sequence of shape objects
   * appearing on this slide.
   */
  get shapes() {
    const pid = append_packed_id(this.packed_id, 'shapes');
    return py_funs.get_attr_returns_instance(pid, MasterShapes);
  }
}

/**
 * Proxy for the notes master XML document.
 *
 * Provides access to shapes, the most commonly used of which are placeholders.
 */
export class NotesMaster extends _BaseMaster {}

/**
 * Notes slide object.
 *
 * Provides access to slide notes placeholder and other shapes on the notes handout page.
 */
export class NotesSlide extends _BaseSlide {
  // @ts-ignore
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_NotesSlide);
  }

  /**
   * Selectively add placeholder shape elements from `notes_master`.
   *
   * Selected placeholder shape elements from `notes_master` are added to the shapes
   * collection of this notes slide. Z-order of placeholders is preserved. Certain
   * placeholders (header, date, footer) are not cloned.
   */
  clone_master_placeholders(notes_master: NotesMaster) {
    const pid = append_packed_id(this.packed_id, 'clone_master_placeholders');
    return py_funs.call_method(pid, arguments, notes_master);
  }

  /**
   * The notes placeholder on this notes slide, the shape that contains the actual notes text.
   *
   * Returns `undefined` if no notes placeholder is present; while this is probably uncommon, it can
   * happen if the notes master does not have a body placeholder, or if the notes placeholder
   * has been deleted from the notes slide.
   */
  get notes_placeholder() {
    const pid = append_packed_id(this.packed_id, 'notes_placeholder');
    return py_funs.get_attr_returns_instance_or_undefined(pid, NotesSlidePlaceholder);
  }

  /**
   * The text frame of the notes placeholder on this notes slide.
   *
   * Returns `undefined` if there is no notes placeholder. This is a shortcut to accommodate the common case
   * of simply adding "notes" text to the notes "page".
   */
  get notes_text_frame() {
    const pid = append_packed_id(this.packed_id, 'notes_text_frame');
    return py_funs.get_attr_returns_instance_or_undefined(pid, TextFrame);
  }

  /**
   * Instance of `NotesSlidePlaceholders` for this notes-slide.
   *
   * Contains the sequence of placeholder shapes in this notes slide.
   */
  get placeholders() {
    const pid = append_packed_id(this.packed_id, 'placeholders');
    return py_funs.get_attr_returns_instance(pid, NotesSlidePlaceholders);
  }

  /**
   * Sequence of shape objects appearing on this notes slide.
   */
  get shapes() {
    const pid = append_packed_id(this.packed_id, 'shapes');
    return py_funs.get_attr_returns_instance(pid, NotesSlideShapes);
  }
}

/**
 * Slide object. Provides access to shapes and slide-level properties.
 */
export class Slide extends _BaseSlide {
  /**
   * `true` if this slide inherits the slide master background.
   *
   * Assigning `false` causes background inheritance from the master to be
   * interrupted; if there is no custom background for this slide,
   * a default background is added. If a custom background already exists
   * for this slide, assigning `false` has no effect.
   *
   * Assigning `true` causes any custom background for this slide to be
   * deleted and inheritance from the master restored.
   */
  get follow_master_background(): boolean {
    const pid = append_packed_id(this.packed_id, 'follow_master_background');
    return py_funs.get_attr(pid);
  }

  /**
   * `true` if this slide has a notes slide, `false` otherwise.
   *
   * A notes slide is created by `.notes_slide` when one doesn't exist; use this property
   * to test for a notes slide without the possible side effect of creating one.
   */
  get has_notes_slide(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_notes_slide');
    return py_funs.get_attr(pid);
  }

  /**
   * The `NotesSlide` instance for this slide.
   *
   * If the slide does not have a notes slide, one is created. The same single instance is
   * returned on each call.
   */
  get notes_slide() {
    const pid = append_packed_id(this.packed_id, 'notes_slide');
    return py_funs.get_attr_returns_instance(pid, NotesSlide);
  }

  /**
   * Sequence of placeholder shapes in this slide.
   */
  get placeholders() {
    const pid = append_packed_id(this.packed_id, 'placeholders');
    return py_funs.get_attr_returns_instance(pid, SlidePlaceholders);
  }

  /**
   * Sequence of shape objects appearing on this slide.
   */
  get shapes() {
    const pid = append_packed_id(this.packed_id, 'shapes');
    return py_funs.get_attr_returns_instance(pid, SlideShapes);
  }

  /**
   * Integer value that uniquely identifies this slide within this presentation.
   *
   * The slide id does not change if the position of this slide in the slide sequence is changed
   * by adding, rearranging, or deleting slides.
   */
  get slide_id() {
    const pid = append_packed_id(this.packed_id, 'slide_id');
    return py_funs.get_attr(pid);
  }

  /**
   * `SlideLayout` object this slide inherits appearance from.
   */
  get slide_layout() {
    const pid = append_packed_id(this.packed_id, 'slide_layout');
    return py_funs.get_attr_returns_instance(pid, SlideLayout);
  }
}

/**
 * Sequence of slides belonging to a presentation.
 *
 * Has list semantics for access to individual slides. Supports indexed access, len(), and iteration.
 */
export class Slides extends MutableArrayMixin<Slide, Type<ParentedElementProxy>>(ParentedElementProxy) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SlideIdList);
  }

  get _sldIdLst() {
    return this._element;
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, Slide);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Return a newly added slide that inherits layout from `slide_layout`.
   */
  add_slide(slide_layout: SlideLayout) {
    const pid = append_packed_id(this.packed_id, 'add_slide');
    return py_funs.call_method_returns_instance(pid, Slide, arguments, slide_layout);
  }

  /**
   * [get]
   * Return the slide identified by int `slide_id` in this presentation.
   */
  get(slide_id: number): Slide | undefined {
    const pid = append_packed_id(this.packed_id, 'get');
    return py_funs.call_method_returns_instance_or_undefined(pid, Slide, arguments, slide_id);
  }

  /**
   * Map `slide` to its zero-based position in this slide sequence.
   *
   * Raises `Error` on `slide` not present.
   */
  index(slide: Slide): number {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.call_method<number>(pid, arguments, slide);
  }
}

/**
 * Slide layout object.
 *
 * Provides access to placeholders, regular shapes, and slide layout-level properties.
 */
export class SlideLayout extends _BaseSlide {
  /**
   * Generate layout-placeholders on this slide-layout that should be cloned to a new slide.
   *
   * Used when creating a new slide from this slide-layout.
   */
  iter_cloneable_placeholders() {
    const pid = append_packed_id(this.packed_id, 'iter_cloneable_placeholders');
    return py_funs.get_attr_returns_instance_iterator(pid, LayoutPlaceholder);
  }

  /**
   * Sequence of placeholder shapes in this slide layout.
   *
   * Placeholders appear in `idx` order.
   */
  get placeholders() {
    const pid = append_packed_id(this.packed_id, 'placeholders');
    return py_funs.get_attr_returns_instance(pid, LayoutPlaceholders);
  }

  /**
   * Sequence of shapes appearing on this slide layout.
   */
  get shapes() {
    const pid = append_packed_id(this.packed_id, 'shapes');
    return py_funs.get_attr_returns_instance(pid, LayoutShapes);
  }

  /**
   * Slide master from which this slide-layout inherits properties.
   */
  get slide_master() {
    const pid = append_packed_id(this.packed_id, 'slide_master');
    return py_funs.get_attr_returns_instance(pid, SlideMaster);
  }

  /**
   * Tuple of slide objects based on this slide layout.
   */
  get used_by_slides() {
    const pid = append_packed_id(this.packed_id, 'used_by_slides');
    return py_funs.get_attr_returns_instance_list(pid, Slide);
  }
}

/**
 * Sequence of slide layouts belonging to a slide-master.
 *
 * Supports indexed access, len(), iteration, index() and remove().
 */
export class SlideLayouts extends MutableArrayMixin<SlideLayout, Type<ParentedElementProxy>>(ParentedElementProxy) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SlideLayoutIdList);
  }

  get _sldLayoutIdLst() {
    return this._element;
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, SlideLayout);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Return SlideLayout object having `name`, or `default` if not found.
   */
  get_by_name(name: string): SlideLayout | undefined {
    const pid = append_packed_id(this.packed_id, 'get_by_name');
    return py_funs.call_method(pid, arguments, name);
  }

  /**
   * Return zero-based index of `slide_layout` in this collection.
   *
   * Raises `Error` if `slide_layout` is not present in this collection.
   */
  index(slide_layout: SlideLayout) {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.call_method(pid, arguments, slide_layout);
  }

  /**
   * Remove `slide_layout` from the collection.
   *
   * Raises `Error` when `slide_layout` is in use; a slide layout which is the basis for one
   * or more slides cannot be removed.
   */
  remove(slide_layout: SlideLayout) {
    const pid = append_packed_id(this.packed_id, 'remove');
    return py_funs.call_method(pid, arguments, slide_layout);
  }
}

/**
 * Slide master object.
 *
 * Provides access to slide layouts. Access to placeholders, regular shapes, and slide master-level
 * properties is inherited from `_BaseMaster`.
 */
export class SlideMaster extends _BaseMaster {
  // @ts-ignore
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SlideMaster);
  }

  /**
   * `SlideLayouts` object providing access to this slide-master's layouts.
   */
  get slide_layouts() {
    const pid = append_packed_id(this.packed_id, 'slide_layouts');
    return py_funs.get_attr_returns_instance(pid, SlideLayouts);
  }
}

/**
 * Sequence of `SlideMaster` objects belonging to a presentation.
 *
 * Has list access semantics, supporting indexed access, len(), and iteration.
 */
export class SlideMasters extends MutableArrayMixin<SlideMaster, Type<ParentedElementProxy>>(ParentedElementProxy) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SlideMasterIdList);
  }

  get _sldMasterIdLst() {
    return this._element;
  }

  getItem(index: number): SlideMaster {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, SlideMaster);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

/**
 * Provides access to slide background properties.
 *
 * Note that the presence of this object does not by itself imply an
 * explicitly-defined background; a slide with an inherited background still
 * has a `_Background` object.
 */
export class _Background extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_CommonSlideData);
  }

  get _cSld() {
    return this._element;
  }

  /**
   * `FillFormat` instance for this background.
   *
   * This `FillFormat` object is used to interrogate or specify the fill
   * of the slide background.
   *
   * Note that accessing this property is potentially destructive. A slide
   * background can also be specified by a background style reference and
   * accessing this property will remove that reference, if present, and
   * replace it with NoFill. This is frequently the case for a slide
   * master background.
   *
   * This is also the case when there is no explicitly defined background
   * (background is inherited); merely accessing this property will cause
   * the background to be set to NoFill and the inheritance link will be
   * interrupted. This is frequently the case for a slide background.
   *
   * Of course, if you are accessing this property in order to set the
   * fill, then these changes are of no consequence, but the existing
   * background cannot be reliably interrogated using this property unless
   * you have already established it is an explicit fill.
   *
   * If the background is already a fill, then accessing this property
   * makes no changes to the current background.
   */
  get fill() {
    const pid = append_packed_id(this.packed_id, 'fill');
    return py_funs.get_attr_returns_instance(pid, FillFormat);
  }
}
