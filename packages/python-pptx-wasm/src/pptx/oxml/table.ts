import { append_packed_id, Enum, type LengthType, PackedBase, py_funs } from '../../bridge';
import { MSO_VERTICAL_ANCHOR } from '../enum/text';
import {
  CT_BlipFillProperties,
  CT_GradientFillProperties,
  CT_GroupFillProperties,
  CT_NoFillProperties,
  CT_PatternFillProperties,
  CT_SolidColorFillProperties
} from './dml/fill';
import { FillPropertiesFactory } from './shapes/shared';
import { CT_TextBody } from './text';
import { BaseOxmlElement } from './xmlchemy';

/**
 * `a:tbl` custom element class representing a table.
 */
export class CT_Table extends BaseOxmlElement {
  get tblPr() {
    const pid = append_packed_id(this.packed_id, 'tblPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TableProperties);
  }

  get_or_add_tblPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tblPr');
    return py_funs.call_method_returns_instance(pid, CT_TableProperties, arguments, obj);
  }

  get tblGrid() {
    const pid = append_packed_id(this.packed_id, 'tblGrid');
    return py_funs.get_attr_returns_instance(pid, CT_TableGrid);
  }

  get tr_lst() {
    const pid = append_packed_id(this.packed_id, 'tr_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_TableRow);
  }

  /**
   * Add new table row with specified height.
   */
  add_tr(height: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_tr');
    return py_funs.call_method_returns_instance(pid, CT_TableRow, arguments, height);
  }

  /**
   * Get/set band column formatting flag.
   */
  set bandCol(bandCol: boolean) {
    const pid = append_packed_id(this.packed_id, 'bandCol');
    py_funs.set_attr(pid, bandCol);
  }
  get bandCol() {
    const pid = append_packed_id(this.packed_id, 'bandCol');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set band row formatting flag.
   */
  set bandRow(bandRow: boolean) {
    const pid = append_packed_id(this.packed_id, 'bandRow');
    py_funs.set_attr(pid, bandRow);
  }
  get bandRow() {
    const pid = append_packed_id(this.packed_id, 'bandRow');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set first column formatting flag.
   */
  set firstCol(firstCol: boolean) {
    const pid = append_packed_id(this.packed_id, 'firstCol');
    py_funs.set_attr(pid, firstCol);
  }
  get firstCol() {
    const pid = append_packed_id(this.packed_id, 'firstCol');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set first row formatting flag.
   */
  set firstRow(firstRow: boolean) {
    const pid = append_packed_id(this.packed_id, 'firstRow');
    py_funs.set_attr(pid, firstRow);
  }
  get firstRow() {
    const pid = append_packed_id(this.packed_id, 'firstRow');
    return py_funs.get_attr(pid);
  }

  /**
   * Generator for all table cells in left-right, top-bottom order.
   */
  iter_tcs() {
    const pid = append_packed_id(this.packed_id, 'iter_tcs');
    return py_funs.call_method_returns_instance_list(pid, CT_TableCell, arguments);
  }

  /**
   * Get/set last column formatting flag.
   */
  set lastCol(lastCol: boolean) {
    const pid = append_packed_id(this.packed_id, 'lastCol');
    py_funs.set_attr(pid, lastCol);
  }
  get lastCol() {
    const pid = append_packed_id(this.packed_id, 'lastCol');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set last row formatting flag.
   */
  set lastRow(lastRow: boolean) {
    const pid = append_packed_id(this.packed_id, 'lastRow');
    py_funs.set_attr(pid, lastRow);
  }
  get lastRow() {
    const pid = append_packed_id(this.packed_id, 'lastRow');
    return py_funs.get_attr(pid);
  }

  /**
   * Get cell at specified row and column indices.
   */
  tc(row_idx: number, col_idx: number) {
    const pid = append_packed_id(this.packed_id, 'tc');
    return py_funs.call_method_returns_instance(pid, CT_TableCell, arguments, row_idx, col_idx);
  }
}

/**
 * `a:tc` custom element class representing a table cell.
 */
export class CT_TableCell extends BaseOxmlElement {
  get txBody() {
    const pid = append_packed_id(this.packed_id, 'txBody');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  get_or_add_txBody(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_txBody');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments, obj);
  }

  get tcPr() {
    const pid = append_packed_id(this.packed_id, 'tcPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TableCellProperties);
  }

  get_or_add_tcPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tcPr');
    return py_funs.call_method_returns_instance(pid, CT_TableCellProperties, arguments, obj);
  }

  set gridSpan(gridSpan: number) {
    const pid = append_packed_id(this.packed_id, 'gridSpan');
    py_funs.set_attr(pid, gridSpan);
  }

  get gridSpan() {
    const pid = append_packed_id(this.packed_id, 'gridSpan');
    return py_funs.get_attr(pid);
  }

  set rowSpan(rowSpan: number) {
    const pid = append_packed_id(this.packed_id, 'rowSpan');
    py_funs.set_attr(pid, rowSpan);
  }

  get rowSpan() {
    const pid = append_packed_id(this.packed_id, 'rowSpan');
    return py_funs.get_attr(pid);
  }

  set hMerge(hMerge: boolean) {
    const pid = append_packed_id(this.packed_id, 'hMerge');
    py_funs.set_attr(pid, hMerge);
  }

  get hMerge() {
    const pid = append_packed_id(this.packed_id, 'hMerge');
    return py_funs.get_attr(pid);
  }

  set vMerge(vMerge: boolean) {
    const pid = append_packed_id(this.packed_id, 'vMerge');
    py_funs.set_attr(pid, vMerge);
  }

  get vMerge() {
    const pid = append_packed_id(this.packed_id, 'vMerge');
    return py_funs.get_attr(pid);
  }

  /**
   * Vertical alignment of text in cell (top/center/bottom).
   */
  set anchor(anchor: MSO_VERTICAL_ANCHOR | undefined) {
    const pid = append_packed_id(this.packed_id, 'anchor');
    py_funs.set_attr(pid, Enum(MSO_VERTICAL_ANCHOR, anchor));
  }
  get anchor() {
    const pid = append_packed_id(this.packed_id, 'anchor');
    return py_funs.get_attr(pid);
  }

  /**
   * Move paragraphs from spanned cell to this cell.
   */
  append_ps_from(spanned_tc: CT_TableCell) {
    const pid = append_packed_id(this.packed_id, 'append_ps_from');
    return py_funs.call_method<undefined>(pid, arguments, spanned_tc);
  }

  /**
   * Column index (0-based) of this cell in its row.
   */
  get col_idx() {
    const pid = append_packed_id(this.packed_id, 'col_idx');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * True if cell is top-left in merged cell range.
   */
  get is_merge_origin() {
    const pid = append_packed_id(this.packed_id, 'is_merge_origin');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * True if cell is merged (not the origin cell).
   */
  get is_spanned() {
    const pid = append_packed_id(this.packed_id, 'is_spanned');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * Get/set top margin in EMUs (default 45720/0.05in).
   */
  set marT(marT: LengthType) {
    const pid = append_packed_id(this.packed_id, 'marT');
    py_funs.set_attr(pid, marT);
  }
  get marT() {
    const pid = append_packed_id(this.packed_id, 'marT');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set right margin in EMUs (default 91440/0.10in).
   */
  set marR(marR: LengthType) {
    const pid = append_packed_id(this.packed_id, 'marR');
    py_funs.set_attr(pid, marR);
  }
  get marR() {
    const pid = append_packed_id(this.packed_id, 'marR');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set bottom margin in EMUs (default 45720/0.05in).
   */
  set marB(marB: LengthType) {
    const pid = append_packed_id(this.packed_id, 'marB');
    py_funs.set_attr(pid, marB);
  }
  get marB() {
    const pid = append_packed_id(this.packed_id, 'marB');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set left margin in EMUs (default 91440/0.10in).
   */
  set marL(marL: LengthType) {
    const pid = append_packed_id(this.packed_id, 'marL');
    py_funs.set_attr(pid, marL);
  }
  get marL() {
    const pid = append_packed_id(this.packed_id, 'marL');
    return py_funs.get_attr(pid);
  }

  /**
   * Row index (0-based) of this cell in table.
   */
  get row_idx() {
    const pid = append_packed_id(this.packed_id, 'row_idx');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Reference to containing table element.
   */
  get tbl() {
    const pid = append_packed_id(this.packed_id, 'tbl');
    return py_funs.get_attr_returns_instance(pid, CT_Table);
  }

  /**
   * All text content in cell (concatenated paragraphs).
   */
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * `a:tcPr` custom element class
 */
export class CT_TableCellProperties extends BaseOxmlElement {
  get eg_fillProperties() {
    const pid = append_packed_id(this.packed_id, 'eg_fillProperties');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, FillPropertiesFactory);
  }

  get noFill() {
    const pid = append_packed_id(this.packed_id, 'noFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_NoFillProperties);
  }

  get_or_change_to_noFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_noFill');
    return py_funs.call_method_returns_instance(pid, CT_NoFillProperties, arguments, obj);
  }

  get solidFill() {
    const pid = append_packed_id(this.packed_id, 'solidFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SolidColorFillProperties);
  }

  get_or_change_to_solidFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_solidFill');
    return py_funs.call_method_returns_instance(pid, CT_SolidColorFillProperties, arguments, obj);
  }

  get gradFill() {
    const pid = append_packed_id(this.packed_id, 'gradFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GradientFillProperties);
  }

  get_or_change_to_gradFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_gradFill');
    return py_funs.call_method_returns_instance(pid, CT_GradientFillProperties, arguments, obj);
  }

  get blipFill() {
    const pid = append_packed_id(this.packed_id, 'blipFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_BlipFillProperties);
  }

  get_or_change_to_blipFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_blipFill');
    return py_funs.call_method_returns_instance(pid, CT_BlipFillProperties, arguments, obj);
  }

  get pattFill() {
    const pid = append_packed_id(this.packed_id, 'pattFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PatternFillProperties);
  }

  get_or_change_to_pattFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_pattFill');
    return py_funs.call_method_returns_instance(pid, CT_PatternFillProperties, arguments, obj);
  }

  get grpFill() {
    const pid = append_packed_id(this.packed_id, 'grpFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GroupFillProperties);
  }

  get_or_change_to_grpFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_grpFill');
    return py_funs.call_method_returns_instance(pid, CT_GroupFillProperties, arguments, obj);
  }

  set anchor(anchor: MSO_VERTICAL_ANCHOR | undefined) {
    const pid = append_packed_id(this.packed_id, 'anchor');
    py_funs.set_attr(pid, Enum(MSO_VERTICAL_ANCHOR, anchor));
  }

  get anchor() {
    const pid = append_packed_id(this.packed_id, 'anchor');
    return py_funs.get_attr(pid);
  }

  set marL(marL: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'marL');
    py_funs.set_attr(pid, marL);
  }
  get marL() {
    const pid = append_packed_id(this.packed_id, 'marL');
    return py_funs.get_attr(pid);
  }

  set marR(marR: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'marR');
    py_funs.set_attr(pid, marR);
  }
  get marR() {
    const pid = append_packed_id(this.packed_id, 'marR');
    return py_funs.get_attr(pid);
  }

  set marT(marT: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'marT');
    py_funs.set_attr(pid, marT);
  }
  get marT() {
    const pid = append_packed_id(this.packed_id, 'marT');
    return py_funs.get_attr(pid);
  }

  set marB(marB: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'marB');
    py_funs.set_attr(pid, marB);
  }
  get marB() {
    const pid = append_packed_id(this.packed_id, 'marB');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:gridCol` custom element class.
 */
export class CT_TableCol extends BaseOxmlElement {
  set w(w: LengthType) {
    const pid = append_packed_id(this.packed_id, 'w');
    py_funs.set_attr(pid, w);
  }
  get w() {
    const pid = append_packed_id(this.packed_id, 'w');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:tblGrid` custom element class.
 */
export class CT_TableGrid extends BaseOxmlElement {
  get gridCol_lst() {
    const pid = append_packed_id(this.packed_id, 'gridCol_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_TableCol);
  }

  /**
   * A newly appended `a:gridCol` child element having its `w` attribute set to `width`.
   */
  add_gridCol(width: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_gridCol');
    return py_funs.call_method_returns_instance(pid, CT_TableCol, arguments, width);
  }
}

/**
 * `a:tblPr` custom element class.
 */
export class CT_TableProperties extends BaseOxmlElement {
  set bandRow(bandRow: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'bandRow');
    py_funs.set_attr(pid, bandRow);
  }

  get bandRow() {
    const pid = append_packed_id(this.packed_id, 'bandRow');
    return py_funs.get_attr(pid);
  }

  set bandCol(bandCol: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'bandCol');
    py_funs.set_attr(pid, bandCol);
  }

  get bandCol() {
    const pid = append_packed_id(this.packed_id, 'bandCol');
    return py_funs.get_attr(pid);
  }

  set firstRow(firstRow: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'firstRow');
    py_funs.set_attr(pid, firstRow);
  }

  get firstRow() {
    const pid = append_packed_id(this.packed_id, 'firstRow');
    return py_funs.get_attr(pid);
  }

  set firstCol(firstCol: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'firstCol');
    py_funs.set_attr(pid, firstCol);
  }

  get firstCol() {
    const pid = append_packed_id(this.packed_id, 'firstCol');
    return py_funs.get_attr(pid);
  }

  set lastRow(lastRow: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'lastRow');
    py_funs.set_attr(pid, lastRow);
  }

  get lastRow() {
    const pid = append_packed_id(this.packed_id, 'lastRow');
    return py_funs.get_attr(pid);
  }

  set lastCol(lastCol: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'lastCol');
    py_funs.set_attr(pid, lastCol);
  }

  get lastCol() {
    const pid = append_packed_id(this.packed_id, 'lastCol');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:tr` custom element class representing a table row.
 */
export class CT_TableRow extends BaseOxmlElement {
  get tc_lst() {
    const pid = append_packed_id(this.packed_id, 'tc_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_TableCell);
  }

  set h(h: LengthType) {
    const pid = append_packed_id(this.packed_id, 'h');
    py_funs.set_attr(pid, h);
  }

  get h() {
    const pid = append_packed_id(this.packed_id, 'h');
    return py_funs.get_attr(pid);
  }

  /**
   * Add new table cell to row and return it.
   */
  add_tc() {
    const pid = append_packed_id(this.packed_id, 'add_tc');
    return py_funs.call_method_returns_instance(pid, CT_TableCell, arguments);
  }

  /**
   * Index (0-based) of this row in its table.
   */
  get row_idx() {
    const pid = append_packed_id(this.packed_id, 'row_idx');
    return py_funs.get_attr<number>(pid);
  }
}

/**
 * Represents a 2D block of table cells (`a:tc` elements).
 * Assumes table structure remains unchanged during its lifetime.
 */
export class TcRange extends PackedBase {
  /**
   * True if range contains any merged cells.
   */
  get contains_merged_cell() {
    const pid = append_packed_id(this.packed_id, 'contains_merged_cell');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * (row_count, col_count) tuple describing range size.
   */
  get dimensions() {
    const pid = append_packed_id(this.packed_id, 'dimensions');
    return py_funs.get_attr<[number, number]>(pid);
  }

  /**
   * True if both constructor cells are in same table.
   */
  get in_same_table() {
    const pid = append_packed_id(this.packed_id, 'in_same_table');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * Generate all cells except those in leftmost column.
   */
  iter_except_left_col_tcs() {
    const pid = append_packed_id(this.packed_id, 'iter_except_left_col_tcs');
    return py_funs.call_method_returns_instance_generator(pid, CT_TableCell, arguments);
  }

  /**
   * Generate all cells except those in topmost row.
   */
  iter_except_top_row_tcs() {
    const pid = append_packed_id(this.packed_id, 'iter_except_top_row_tcs');
    return py_funs.call_method_returns_instance_generator(pid, CT_TableCell, arguments);
  }

  /**
   * Generate only cells in leftmost column.
   */
  iter_left_col_tcs() {
    const pid = append_packed_id(this.packed_id, 'iter_left_col_tcs');
    return py_funs.call_method_returns_instance_generator(pid, CT_TableCell, arguments);
  }

  /**
   * Generate all cells in range (left-right, top-bottom).
   */
  iter_tcs() {
    const pid = append_packed_id(this.packed_id, 'iter_tcs');
    return py_funs.call_method_returns_instance_generator(pid, CT_TableCell, arguments);
  }

  /**
   * Generate only cells in topmost row.
   */
  iter_top_row_tcs() {
    const pid = append_packed_id(this.packed_id, 'iter_top_row_tcs');
    return py_funs.call_method_returns_instance_generator(pid, CT_TableCell, arguments);
  }

  /**
   * Move all content to origin (top-left) cell.
   */
  move_content_to_origin() {
    const pid = append_packed_id(this.packed_id, 'move_content_to_origin');
    return py_funs.call_method<undefined>(pid, arguments);
  }
}
