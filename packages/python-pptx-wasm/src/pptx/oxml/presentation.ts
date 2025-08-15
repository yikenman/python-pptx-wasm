import { append_packed_id, type LengthType, py_funs } from '../../bridge';
import { BaseOxmlElement } from './xmlchemy';

/**
 * `p:presentation` element, root of the Presentation part stored as `/ppt/presentation.xml`.
 */
export class CT_Presentation extends BaseOxmlElement {
  get sldMasterIdLst() {
    const pid = append_packed_id(this.packed_id, 'sldMasterIdLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SlideMasterIdList);
  }

  get_or_add_sldMasterIdLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_sldMasterIdLst');
    return py_funs.call_method_returns_instance(pid, CT_SlideMasterIdList, arguments, obj);
  }

  get sldIdLst() {
    const pid = append_packed_id(this.packed_id, 'sldIdLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SlideIdList);
  }

  get_or_add_sldIdLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_sldIdLst');
    return py_funs.call_method_returns_instance(pid, CT_SlideIdList, arguments, obj);
  }

  get sldSz() {
    const pid = append_packed_id(this.packed_id, 'sldSz');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SlideSize);
  }

  get_or_add_sldSz(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'sldget_or_add_sldSzSz');
    return py_funs.call_method_returns_instance(pid, CT_SlideSize, arguments, obj);
  }
}

/**
 * `p:sldId` element.
 *
 * Direct child of `p:sldIdLst` that contains an `rId` reference to a slide in the presentation.
 */
export class CT_SlideId extends BaseOxmlElement {
  set id(id: number) {
    const pid = append_packed_id(this.packed_id, 'id');
    py_funs.set_attr(pid, id);
  }

  get id() {
    const pid = append_packed_id(this.packed_id, 'id');
    return py_funs.get_attr(pid);
  }

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
 * `p:sldIdLst` element, child of <p:presentation> containing slide references.
 */
export class CT_SlideIdList extends BaseOxmlElement {
  get sldId_lst() {
    const pid = append_packed_id(this.packed_id, 'sldId_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SlideId);
  }

  /**
   * Create and return a new `p:sldId` element with specified relationship ID.
   * Automatically assigns the next available slide ID.
   */
  add_sldId(rId: string) {
    const pid = append_packed_id(this.packed_id, 'add_sldId');
    return py_funs.call_method_returns_instance(pid, CT_SlideId, arguments, rId);
  }
}

/**
 * `p:sldMasterIdLst` element.
 *
 * Child of `p:presentation` containing references to the slide masters that belong to the
 * presentation.
 */
export class CT_SlideMasterIdList extends BaseOxmlElement {
  get sldMasterId_lst() {
    const pid = append_packed_id(this.packed_id, 'sldMasterId_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_SlideMasterIdListEntry);
  }
}

/**
 * ``<p:sldMasterId>`` element, child of ``<p:sldMasterIdLst>`` containing
 * a reference to a slide master.
 */
export class CT_SlideMasterIdListEntry extends BaseOxmlElement {
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
 * `p:sldSz` element.
 *
 * Direct child of <p:presentation> that contains the width and height of slides in the
 * presentation.
 */
export class CT_SlideSize extends BaseOxmlElement {
  set cx(cx: LengthType) {
    const pid = append_packed_id(this.packed_id, 'cx');
    py_funs.set_attr(pid, cx);
  }
  get cx() {
    const pid = append_packed_id(this.packed_id, 'cx');
    return py_funs.get_attr(pid);
  }

  set cy(cy: LengthType) {
    const pid = append_packed_id(this.packed_id, 'cy');
    py_funs.set_attr(pid, cy);
  }
  get cy() {
    const pid = append_packed_id(this.packed_id, 'cy');
    return py_funs.get_attr(pid);
  }
}
