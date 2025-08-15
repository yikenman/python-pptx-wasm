import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { Chart } from '../chart/chart';
import { XmlPart } from '../opc/package';
import { CT_ChartSpace } from '../oxml/chart/chart';
import { EmbeddedXlsxPart } from './embeddedpackage';

/**
 * A chart part.
 * Corresponds to parts having partnames matching ppt/charts/chart[1-9][0-9]*.xml
 */
export class ChartPart extends XmlPart {
  get partname_template() {
    const pid = append_packed_id(this.packed_id, 'partname_template');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * `Chart` object representing the chart in this part.
   */

  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance(pid, Chart);
  }

  /**
   * The `ChartWorkbook` object providing access to the external chart
   * data in a linked or embedded Excel workbook.
   */
  get chart_workbook() {
    const pid = append_packed_id(this.packed_id, 'chart_workbook');
    return py_funs.get_attr_returns_instance(pid, ChartWorkbook);
  }
}

/**
 * Provides access to external chart data in a linked or embedded Excel workbook.
 */
export class ChartWorkbook extends PackedBase {
  get _chartSpace() {
    const pid = append_packed_id(this.packed_id, '_chartSpace');
    return py_funs.get_attr_returns_instance(pid, CT_ChartSpace);
  }

  get _chart_part() {
    const pid = append_packed_id(this.packed_id, '_chart_part');
    return py_funs.get_attr_returns_instance(pid, ChartPart);
  }

  /**
   * Replace the Excel spreadsheet in the related `EmbeddedXlsxPart` with
   * the Excel binary in `xlsx_blob`, adding a new `EmbeddedXlsxPart` if
   * there isn't one.
   */
  update_from_xlsx_blob(xlsx_blob: Uint8Array) {
    const pid = append_packed_id(this.packed_id, 'update_from_xlsx_blob');
    return py_funs.call_method<undefined>(pid, arguments, xlsx_blob);
  }

  /**
   * not implemented
   */
  // set xlsx_part(xlsx_part: EmbeddedXlsxPart) { }
  /**
   * Optional `EmbeddedXlsxPart` object containing data for this chart.
   * This related part has its rId at `c:chartSpace/c:externalData/@rId`. This value
   * is `undefined` if there is no `<c:externalData>` element.
   *
   * not implemented
   */
  get xlsx_part() {
    const pid = append_packed_id(this.packed_id, 'xlsx_part');
    return py_funs.call_method_returns_instance(pid, EmbeddedXlsxPart, arguments);
  }
}
