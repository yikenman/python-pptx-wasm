import { append_packed_id, type LengthType, py_funs } from '../bridge';
import { CT_Presentation } from './oxml/presentation';
import { CorePropertiesPart } from './parts/coreprops';
import { PartElementProxy } from './shared';
import { NotesMaster, SlideLayouts, SlideMaster, SlideMasters, Slides } from './slide';

/**
 * PresentationML (PML) presentation.
 *
 * Not intended to be constructed directly. Use `pptx.Presentation` to open or
 * create a presentation.
 */
export class Presentation extends PartElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Presentation);
  }

  /**
   * `CoreProperties` instance for this presentation.
   *
   * Provides read/write access to the Dublin Core document properties for the presentation.
   */
  get core_properties() {
    const pid = append_packed_id(this.packed_id, 'core_properties');
    return py_funs.get_attr_returns_instance(pid, CorePropertiesPart);
  }

  /**
   * Instance of `NotesMaster` for this presentation.
   *
   * If the presentation does not have a notes master, one is created from a default template
   * and returned. The same single instance is returned on each call.
   */
  get notes_master() {
    const pid = append_packed_id(this.packed_id, 'notes_master');
    return py_funs.get_attr_returns_instance(pid, NotesMaster);
  }

  save(): Uint8Array;
  save(callback: (buffer: Uint8Array) => void | Promise<void>): void | Promise<void>;
  save(...rest: any[]) {
    return py_funs.save(this.packed_id, ...rest) as any;
  }

  end() {
    return py_funs.end(this.packed_id);
  }

  /**
   * Height of slides in this presentation, in English Metric Units (EMU).
   *
   * Returns `undefined` if no slide width is defined. Read/write.
   */
  set slide_height(slide_height: LengthType) {
    const pid = append_packed_id(this.packed_id, 'slide_height');
    py_funs.set_attr(pid, slide_height);
  }
  get slide_height() {
    const pid = append_packed_id(this.packed_id, 'slide_height');
    return py_funs.get_attr(pid);
  }

  /**
   * `SlideLayouts` collection belonging to the first `SlideMaster` of this presentation.
   *
   * A presentation can have more than one slide master and each master will have its own set
   * of layouts. This property is a convenience for the common case where the presentation has
   * only a single slide master.
   */
  get slide_layouts() {
    const pid = append_packed_id(this.packed_id, 'slide_layouts');
    return py_funs.get_attr_returns_instance(pid, SlideLayouts);
  }

  /**
   * First `SlideMaster` object belonging to this presentation. Typically,
   * presentations have only a single slide master. This property provides
   * simpler access in that common case.
   */
  get slide_master() {
    const pid = append_packed_id(this.packed_id, 'slide_master');
    return py_funs.get_attr_returns_instance(pid, SlideMaster);
  }

  /**
   * `SlideMasters` collection of slide-masters belonging to this presentation.
   */
  get slide_masters() {
    const pid = append_packed_id(this.packed_id, 'slide_masters');
    return py_funs.get_attr_returns_instance(pid, SlideMasters);
  }

  /**
   * Width of slides in this presentation, in English Metric Units (EMU).
   * Returns `undefined` if no slide width is defined. Read/write.
   */
  set slide_width(slide_width: LengthType) {
    const pid = append_packed_id(this.packed_id, 'slide_width');
    py_funs.set_attr(pid, slide_width);
  }
  get slide_width() {
    const pid = append_packed_id(this.packed_id, 'slide_width');
    return py_funs.get_attr(pid);
  }

  /**
   * `Slides` object containing the slides in this presentation.
   */
  get slides() {
    const pid = append_packed_id(this.packed_id, 'slides');
    return py_funs.get_attr_returns_instance(pid, Slides);
  }
}
