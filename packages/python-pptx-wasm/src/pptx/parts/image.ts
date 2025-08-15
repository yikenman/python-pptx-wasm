// not used in public method
// ImagePart

import { py_funs } from '../../bridge';
import { append_packed_id, PackedBase } from '../../bridge/packed_base';

/**
 * Immutable value object representing an image such as a JPEG, PNG, or GIF.
 */
export class Image extends PackedBase {
  /**
   * The binary image bytestream of this image.
   */
  get blob() {
    const pid = append_packed_id(this.packed_id, 'blob');
    return py_funs.get_attr<Uint8Array>(pid);
  }

  /**
   * MIME-type of this image, e.g. `"image/jpeg"`.
   */
  get content_type() {
    const pid = append_packed_id(this.packed_id, 'content_type');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * A (horz_dpi, vert_dpi) 2-tuple specifying the dots-per-inch resolution of this image.
   * A default value of (72, 72) is used if the dpi is not specified in the image file.
   */
  get dpi() {
    const pid = append_packed_id(this.packed_id, 'dpi');
    return py_funs.get_attr<[number, number]>(pid);
  }

  /**
   * Canonical file extension for this image e.g. `'png'`.
   * The returned extension is all lowercase and is the canonical extension for the content type
   * of this image, regardless of what extension may have been used in its filename, if any.
   */
  get ext() {
    const pid = append_packed_id(this.packed_id, 'ext');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * Filename from path used to load this image, if loaded from the filesystem.
   * `undefined` if no filename was used in loading, such as when loaded from an in-memory stream.
   */
  get filename() {
    const pid = append_packed_id(this.packed_id, 'filename');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * SHA1 hash digest of the image blob.
   */
  get sha1() {
    const pid = append_packed_id(this.packed_id, 'sha1');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * A (width, height) 2-tuple specifying the dimensions of this image in pixels.
   */
  get size() {
    const pid = append_packed_id(this.packed_id, 'size');
    return py_funs.get_attr<[number, number]>(pid);
  }
}
