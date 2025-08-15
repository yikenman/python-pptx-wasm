import { PackedBase } from '../../bridge/packed_base';

/**
 * Provides access to the containing part for drawing elements that occur below a shape.
 *
 * Access to the part is required for example to add or drop a relationship. Provides
 * `self._parent` attribute to subclasses.
 */
export class Subshape extends PackedBase {
  /**
   * The package part containing this object.
   *
   * not implemented
   */
  get part() {
    console.log('not implemented.');
    return undefined;
  }
}
