import { append_packed_id, Enum, py_funs } from '../../bridge';
import { LineFormat } from '../dml/line';
import { MSO_AUTO_SHAPE_TYPE, MSO_SHAPE_TYPE, PP_MEDIA_TYPE } from '../enum/shapes';
import { CT_Picture } from '../oxml/shapes/pitcure';
import { CT_LineProperties } from '../oxml/shapes/shared';
import { Image } from '../parts/image';
import { ParentedElementProxy } from '../shared';
import { BaseShape } from './base';

/**
 * Base class for shapes based on a `p:pic` element.
 */
export class _BasePicture extends BaseShape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Picture);
  }

  get _pic() {
    return this._element;
  }

  /**
   * `float` representing relative portion cropped from shape bottom.
   *
   * Read/write. 1.0 represents 100%. For example, 25% is represented by 0.25. Negative values
   * are valid as are values greater than 1.0.
   */
  set crop_bottom(crop_bottom: number) {
    const pid = append_packed_id(this.packed_id, 'crop_bottom');
    py_funs.set_attr(pid, crop_bottom);
  }
  get crop_bottom() {
    const pid = append_packed_id(this.packed_id, 'crop_bottom');
    return py_funs.get_attr(pid);
  }

  /**
   * `float` representing relative portion cropped from left of shape.
   *
   * Read/write. 1.0 represents 100%. A negative value extends the side beyond the image
   * boundary.
   */
  set crop_left(crop_left: number) {
    const pid = append_packed_id(this.packed_id, 'crop_left');
    py_funs.set_attr(pid, crop_left);
  }
  get crop_left() {
    const pid = append_packed_id(this.packed_id, 'crop_left');
    return py_funs.get_attr(pid);
  }

  /**
   * `float` representing relative portion cropped from right of shape.
   *
   * Read/write. 1.0 represents 100%.
   */
  set crop_right(crop_right: number) {
    const pid = append_packed_id(this.packed_id, 'crop_right');
    py_funs.set_attr(pid, crop_right);
  }
  get crop_right() {
    const pid = append_packed_id(this.packed_id, 'crop_right');
    return py_funs.get_attr(pid);
  }

  /**
   * `float` representing relative portion cropped from shape top.
   *
   * Read/write. 1.0 represents 100%.
   */
  set crop_top(crop_top: number) {
    const pid = append_packed_id(this.packed_id, 'crop_top');
    py_funs.set_attr(pid, crop_top);
  }
  get crop_top() {
    const pid = append_packed_id(this.packed_id, 'crop_top');
    return py_funs.get_attr(pid);
  }

  /**
   * Return the `a:ln` element for this `p:pic`-based image.
   *
   * The `a:ln` element contains the line format properties XML.
   */
  get_or_add_ln() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_ln');
    return py_funs.call_method_returns_instance(pid, CT_LineProperties, arguments);
  }

  /**
   * Provides access to properties of the picture outline, such as its color and width.
   */
  get line() {
    const pid = append_packed_id(this.packed_id, 'line');
    return py_funs.get_attr_returns_instance(pid, LineFormat);
  }

  /**
   * The `a:ln` element for this `p:pic`.
   *
   * Contains the line format properties such as line color and width. `undefined` if no `a:ln`
   * element is present.
   */
  get ln() {
    const pid = append_packed_id(this.packed_id, 'ln');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LineProperties);
  }
}

/**
 * A movie shape, one that places a video on a slide.
 *
 * Like `Picture`, a movie shape is based on the `p:pic` element. A movie is composed of a video
 * and a *poster frame*, the placeholder image that represents the video before it is played.
 */
export class Movie extends _BasePicture {
  /**
   * The `_MediaFormat` object for this movie.
   *
   * The `_MediaFormat` object provides access to formatting properties for the movie.
   */
  get media_format() {
    const pid = append_packed_id(this.packed_id, 'media_format');
    return py_funs.get_attr_returns_instance(pid, _MediaFormat);
  }

  /**
   * Member of :ref:`PpMediaType` describing this shape.
   *
   * The return value is unconditionally `PP_MEDIA_TYPE.MOVIE` in this case.
   */
  get media_type() {
    const pid = append_packed_id(this.packed_id, 'media_type');
    return py_funs.get_attr<PP_MEDIA_TYPE>(pid);
  }

  /**
   * Return `Image` object containing poster frame for this movie.
   *
   * Returns `undefined` if this movie has no poster frame (uncommon).
   */
  get poster_frame() {
    const pid = append_packed_id(this.packed_id, 'poster_frame');
    return py_funs.get_attr_returns_instance_or_undefined(pid, Image);
  }

  /**
   * Return member of `MsoShapeType` describing this shape.
   *
   * The return value is unconditionally `MSO_SHAPE_TYPE.MEDIA` in this
   * case.
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }
}

/**
 * A picture shape, one that places an image on a slide.
 *
 * Based on the `p:pic` element.
 */
export class Picture extends _BasePicture {
  /**
   * Member of MSO_SHAPE indicating masking shape.
   *
   * A picture can be masked by any of the so-called "auto-shapes" available in PowerPoint,
   * such as an ellipse or triangle. When a picture is masked by a shape, the shape assumes the
   * same dimensions as the picture and the portion of the picture outside the shape boundaries
   * does not appear. Note the default value for a newly-inserted picture is
   * `MSO_AUTO_SHAPE_TYPE.RECTANGLE`, which performs no cropping because the extents of the
   * rectangle exactly correspond to the extents of the picture.
   *
   * The available shapes correspond to the members of :ref:`MsoAutoShapeType`.
   *
   * The return value can also be `undefined`, indicating the picture either has no geometry (not
   * expected) or has custom geometry, like a freeform shape. A picture with no geometry will
   * have no visible representation on the slide, although it can be selected. This is because
   * without geometry, there is no "inside-the-shape" for it to appear in.
   */
  set auto_shape_type(auto_shape_type: MSO_AUTO_SHAPE_TYPE) {
    const pid = append_packed_id(this.packed_id, 'auto_shape_type');
    py_funs.set_attr(pid, Enum(MSO_AUTO_SHAPE_TYPE, auto_shape_type));
  }
  get auto_shape_type() {
    const pid = append_packed_id(this.packed_id, 'auto_shape_type');
    return py_funs.get_attr<MSO_AUTO_SHAPE_TYPE>(pid);
  }

  /**
   * The `Image` object for this picture.
   *
   * Provides access to the properties and bytes of the image in this picture shape.
   */
  get image() {
    const pid = append_packed_id(this.packed_id, 'image');
    return py_funs.get_attr_returns_instance(pid, Image);
  }

  /**
   * Unconditionally `MSO_SHAPE_TYPE.PICTURE` in this case.
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }
}

/**
 * Provides access to formatting properties for a Media object.
 *
 * Media format properties are things like start point, volume, and
 * compression type.
 */
export class _MediaFormat extends ParentedElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Picture);
  }
}
