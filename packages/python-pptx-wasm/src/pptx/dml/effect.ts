import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { BaseOxmlElement } from '../oxml/xmlchemy';

/**
 * Provides access to shadow effect on a shape.
 */
export class ShadowFormat extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * `true` if shape inherits shadow settings.
   * Read/write. An explicitly-defined shadow setting on a shape causes
   * this property to return `false`. A shape with no explicitly-defined
   * shadow setting inherits its shadow settings from the style hierarchy
   * (and so returns `true`).
   *
   * Assigning `true` causes any explicitly-defined shadow setting to be
   * removed and inheritance is restored. Note this has the side-effect of
   * removing **all** explicitly-defined effects, such as glow and
   * reflection, and restoring inheritance for all effects on the shape.
   * Assigning `false` causes the inheritance link to be broken and **no**
   * effects to appear on the shape.
   */
  set inherit(inherit: boolean) {
    const pid = append_packed_id(this.packed_id, 'inherit');
    py_funs.set_attr(pid, inherit);
  }
  get inherit() {
    const pid = append_packed_id(this.packed_id, 'inherit');
    return py_funs.get_attr(pid);
  }
}
