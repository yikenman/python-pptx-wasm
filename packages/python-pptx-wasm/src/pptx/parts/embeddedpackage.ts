// not used in public method
// EmbeddedDocxPart
// EmbeddedPptxPart

import { append_packed_id, py_funs } from '../../bridge';
import { Part } from '../opc/package';

/**
 * A distinct OPC package, e.g. an Excel file, embedded in this PPTX package.
 * Has a partname like: `ppt/embeddings/Microsoft_Excel_Sheet1.xlsx`.
 */
export class EmbeddedPackagePart extends Part {}

/**
 * An Excel file stored in a part.
 *
 * This part-type arises as the data source for a chart, but may also be the OLE-object
 * for an embedded object shape.
 */
export class EmbeddedXlsxPart extends EmbeddedPackagePart {
  get partname_template() {
    const pid = append_packed_id(this.packed_id, 'partname_template');
    return py_funs.get_attr<string>(pid);
  }

  get content_type() {
    const pid = append_packed_id(this.packed_id, 'content_type');
    return py_funs.get_attr<string>(pid);
  }
}
