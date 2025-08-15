import { append_packed_id, py_funs } from '../../../bridge';
import { CT_BlipFillProperties } from '../dml/fill';
import { BaseOxmlElement } from '../xmlchemy';
import {
  BaseShapeElement,
  CT_ApplicationNonVisualDrawingProps,
  CT_LineProperties,
  CT_NonVisualDrawingProps,
  CT_ShapeProperties
} from './shared';

/**
 * `p:pic` element.
 * Represents a picture shape (an image placement on a slide).
 */
export class CT_Picture extends BaseShapeElement {
  get nvPicPr() {
    const pid = append_packed_id(this.packed_id, 'nvPicPr');
    return py_funs.get_attr_returns_instance(pid, CT_PictureNonVisual);
  }

  get blipFill() {
    const pid = append_packed_id(this.packed_id, 'blipFill');
    return py_funs.get_attr_returns_instance(pid, CT_BlipFillProperties);
  }

  get spPr() {
    const pid = append_packed_id(this.packed_id, 'spPr');
    return py_funs.get_attr_returns_instance(pid, CT_ShapeProperties);
  }

  /**
   * Value of `p:blipFill/a:blip/@r:embed`.
   * Returns `undefined` if not present.
   */
  get blip_rId() {
    const pid = append_packed_id(this.packed_id, 'blip_rId');
    return py_funs.get_attr<string | undefined>(pid);
  }

  /**
   * Set cropping values in `p:blipFill/a:srcRect` to fit image proportionally.
   */
  crop_to_fit(image_size: number, view_size: number) {
    const pid = append_packed_id(this.packed_id, 'crop_to_fit');
    return py_funs.call_method<undefined>(pid, arguments, image_size, view_size);
  }

  /**
   * Return the `<a:ln>` grandchild element, newly added if not present.
   */
  get_or_add_ln() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_ln');
    return py_funs.call_method_returns_instance(pid, CT_LineProperties, arguments);
  }

  /**
   * `<a:ln>` grand-child element or `undefined` if not present.
   */
  get ln() {
    const pid = append_packed_id(this.packed_id, 'ln');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LineProperties);
  }

  /**
   * Value of `p:blipFill/a:srcRect/@b` or 0.0 if not present.
   */
  set srcRect_b(srcRect_b: number) {
    const pid = append_packed_id(this.packed_id, 'srcRect_b');
    py_funs.set_attr(pid, srcRect_b);
  }
  get srcRect_b() {
    const pid = append_packed_id(this.packed_id, 'srcRect_b');
    return py_funs.get_attr(pid);
  }

  /**
   * Value of `p:blipFill/a:srcRect/@l` or 0.0 if not present.
   */
  set srcRect_l(srcRect_l: number) {
    const pid = append_packed_id(this.packed_id, 'srcRect_l');
    py_funs.set_attr(pid, srcRect_l);
  }
  get srcRect_l() {
    const pid = append_packed_id(this.packed_id, 'srcRect_l');
    return py_funs.get_attr(pid);
  }

  /**
   * Value of `p:blipFill/a:srcRect/@r` or 0.0 if not present.
   */
  set srcRect_r(srcRect_r: number) {
    const pid = append_packed_id(this.packed_id, 'srcRect_r');
    py_funs.set_attr(pid, srcRect_r);
  }
  get srcRect_r() {
    const pid = append_packed_id(this.packed_id, 'srcRect_r');
    return py_funs.get_attr(pid);
  }

  /**
   * Value of `p:blipFill/a:srcRect/@t` or 0.0 if not present.
   */
  set srcRect_t(srcRect_t: number) {
    const pid = append_packed_id(this.packed_id, 'srcRect_t');
    py_funs.set_attr(pid, srcRect_t);
  }
  get srcRect_t() {
    const pid = append_packed_id(this.packed_id, 'srcRect_t');
    return py_funs.get_attr(pid);
  }
}

/**
 * ``<p:nvPicPr>`` element, containing non-visual properties for a picture
 * shape.
 */
export class CT_PictureNonVisual extends BaseOxmlElement {
  get cNvPr() {
    const pid = append_packed_id(this.packed_id, 'cNvPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualDrawingProps);
  }

  get nvPr() {
    const pid = append_packed_id(this.packed_id, 'nvPr');
    return py_funs.get_attr_returns_instance(pid, CT_ApplicationNonVisualDrawingProps);
  }
}
