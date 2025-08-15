// not use in public methods:
// _default_pptx_path
// _is_pptx_package

import { py_funs } from '../bridge';
import { Presentation } from './presentation';

/**
 * Return a `Presentation` object loaded from `pptx`. If
 * `pptx` is missing or `undefined`, the built-in default presentation
 * "template" is loaded.
 */
export const Presentation_ = (pptx?: Uint8Array | undefined) => {
  const packed_id = py_funs.create_presentation(pptx);
  return new Presentation(packed_id);
};
