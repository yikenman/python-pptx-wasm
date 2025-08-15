import { append_packed_id, Enum, type LengthType, PackedBase, py_funs } from '../bridge';
import { MutableArrayMixin, type Type } from '../utils';
import { FillFormat } from './dml/fill';
import { MSO_VERTICAL_ANCHOR } from './enum/text';
import { CT_Table, CT_TableCell, CT_TableCol, CT_TableRow } from './oxml/table';
import { GraphicFrame } from './shapes/graphfrm';
import { Subshape } from './shapes/subshape';
import { TextFrame } from './text/text';

/**
 * A DrawingML table object.
 *
 * Not intended to be constructed directly, use
 * `Slide.shapes.add_table` to add a table to a slide.
 */
export class Table extends PackedBase {
  get _tbl() {
    const pid = append_packed_id(this.packed_id, '_tbl');
    return py_funs.get_attr_returns_instance(pid, CT_Table);
  }

  get _graphic_frame() {
    const pid = append_packed_id(this.packed_id, '_graphic_frame');
    return py_funs.get_attr_returns_instance(pid, GraphicFrame);
  }

  /**
   * Return cell at `row_idx`, `col_idx`.
   *
   * Return value is an instance of `_Cell`. `row_idx` and `col_idx` are zero-based, e.g.
   * cell(0, 0) is the top, left cell in the table.
   */
  cell(row_idx: number, col_idx: number) {
    const pid = append_packed_id(this.packed_id, 'cell');
    return py_funs.call_method_returns_instance(pid, _Cell, arguments, row_idx, col_idx);
  }

  /**
   * `_ColumnCollection` instance for this table.
   *
   * Provides access to `_Column` objects representing the table's columns. `_Column` objects
   * are accessed using list notation, e.g. `col = tbl.columns[0]`.
   */
  get columns() {
    const pid = append_packed_id(this.packed_id, 'columns');
    return py_funs.get_attr_returns_instance(pid, _ColumnCollection);
  }

  /**
   * When `true`, indicates first column should have distinct formatting.
   *
   * Read/write. Distinct formatting is used, for example, when the first column contains row
   * headings (is a side-heading column).
   */
  set first_col(first_col: boolean) {
    const pid = append_packed_id(this.packed_id, 'first_col');
    py_funs.set_attr(pid, first_col);
  }
  get first_col() {
    const pid = append_packed_id(this.packed_id, 'first_col');
    return py_funs.get_attr(pid);
  }

  /**
   * When `true`, indicates first row should have distinct formatting.
   *
   * Read/write. Distinct formatting is used, for example, when the first row contains column
   * headings.
   */
  set first_row(first_row: boolean) {
    const pid = append_packed_id(this.packed_id, 'first_row');
    py_funs.set_attr(pid, first_row);
  }
  get first_row() {
    const pid = append_packed_id(this.packed_id, 'first_row');
    return py_funs.get_attr(pid);
  }

  /**
   * When `true`, indicates rows should have alternating shading.
   *
   * Read/write. Used to allow rows to be traversed more easily without losing track of which
   * row is being read.
   */
  set horz_banding(horz_banding: boolean) {
    const pid = append_packed_id(this.packed_id, 'horz_banding');
    py_funs.set_attr(pid, horz_banding);
  }
  get horz_banding() {
    const pid = append_packed_id(this.packed_id, 'horz_banding');
    return py_funs.get_attr(pid);
  }

  /**
   * Generate _Cell object for each cell in this table.
   *
   * Each grid cell is generated in left-to-right, top-to-bottom order.
   */
  iter_cells() {
    const pid = append_packed_id(this.packed_id, 'iter_cells');
    return py_funs.get_attr_returns_instance_iterator(pid, _Cell);
  }

  /**
   * When `true`, indicates the rightmost column should have distinct formatting.
   *
   * Read/write. Used, for example, when a row totals column appears at the far right of the
   * table.
   */
  set last_col(last_col: boolean) {
    const pid = append_packed_id(this.packed_id, 'last_col');
    py_funs.set_attr(pid, last_col);
  }
  get last_col() {
    const pid = append_packed_id(this.packed_id, 'last_col');
    return py_funs.get_attr(pid);
  }

  /**
   * When `true`, indicates the bottom row should have distinct formatting.
   *
   * Read/write. Used, for example, when a totals row appears as the bottom row.
   */
  set last_row(last_row: boolean) {
    const pid = append_packed_id(this.packed_id, 'last_row');
    py_funs.set_attr(pid, last_row);
  }
  get last_row() {
    const pid = append_packed_id(this.packed_id, 'last_row');
    return py_funs.get_attr(pid);
  }

  /**
   * Called by a row when its height changes.
   *
   * Triggers the graphic frame to recalculate its total height (as the sum of the row
   * heights).
   */
  notify_height_changed() {
    const pid = append_packed_id(this.packed_id, 'notify_height_changed');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  /**
   * Called by a column when its width changes.
   *
   * Triggers the graphic frame to recalculate its total width (as the sum of the column
   * widths).
   */
  notify_width_changed() {
    const pid = append_packed_id(this.packed_id, 'notify_width_changed');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  /**
   * `_RowCollection` instance for this table.
   *
   * Provides access to `_Row` objects representing the table's rows. `_Row` objects are
   * accessed using list notation, e.g. `col = tbl.rows[0]`.
   */
  get rows() {
    const pid = append_packed_id(this.packed_id, 'rows');
    return py_funs.get_attr_returns_instance(pid, _RowCollection);
  }

  /**
   * When `true`, indicates columns should have alternating shading.
   *
   * Read/write. Used to allow columns to be traversed more easily without losing track of
   * which column is being read.
   */
  set vert_banding(vert_banding: boolean) {
    const pid = append_packed_id(this.packed_id, 'vert_banding');
    py_funs.set_attr(pid, vert_banding);
  }
  get vert_banding() {
    const pid = append_packed_id(this.packed_id, 'vert_banding');
    return py_funs.get_attr(pid);
  }
}

/**
 * Table cell
 */
export class _Cell extends Subshape {
  get _tc() {
    const pid = append_packed_id(this.packed_id, '_tc');
    return py_funs.get_attr_returns_instance(pid, CT_TableCell);
  }

  /**
   * `FillFormat` instance for this cell.
   *
   * Provides access to fill properties such as foreground color.
   */
  get fill() {
    const pid = append_packed_id(this.packed_id, 'fill');
    return py_funs.get_attr_returns_instance(pid, FillFormat);
  }

  /**
   * `true` if this cell is the top-left grid cell in a merged cell.
   */
  get is_merge_origin(): boolean {
    const pid = append_packed_id(this.packed_id, 'is_merge_origin');
    return py_funs.get_attr(pid);
  }

  /**
   * `true` if this cell is spanned by a merge-origin cell.
   *
   * A merge-origin cell "spans" the other grid cells in its merge range, consuming their area
   * and "shadowing" the spanned grid cells.
   *
   * Note this value is `false` for a merge-origin cell. A merge-origin cell spans other grid
   * cells, but is not itself a spanned cell.
   */
  get is_spanned(): boolean {
    const pid = append_packed_id(this.packed_id, 'is_merge_origin');
    return py_funs.get_attr(pid);
  }

  /**
   * Left margin of cells.
   *
   * Read/write. If assigned `undefined`, the default value is used, 0.1 inches for left and right
   * margins and 0.05 inches for top and bottom.
   */
  set margin_left(margin_left: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'margin_left');
    py_funs.set_attr(pid, margin_left);
  }
  get margin_left() {
    const pid = append_packed_id(this.packed_id, 'margin_left');
    return py_funs.get_attr(pid);
  }

  /**
   * Right margin of cell.
   */
  set margin_right(margin_right: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'margin_right');
    py_funs.set_attr(pid, margin_right);
  }
  get margin_right() {
    const pid = append_packed_id(this.packed_id, 'margin_right');
    return py_funs.get_attr(pid);
  }

  /**
   * Top margin of cell.
   */
  set margin_top(margin_top: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'margin_top');
    py_funs.set_attr(pid, margin_top);
  }
  get margin_top() {
    const pid = append_packed_id(this.packed_id, 'margin_top');
    return py_funs.get_attr(pid);
  }

  /**
   * Bottom margin of cell.
   */
  set margin_bottom(margin_bottom: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'margin_bottom');
    py_funs.set_attr(pid, margin_bottom);
  }
  get margin_bottom() {
    const pid = append_packed_id(this.packed_id, 'margin_bottom');
    return py_funs.get_attr(pid);
  }

  /**
   * Create merged cell from this cell to `other_cell`.
   *
   * This cell and `other_cell` specify opposite corners of the merged cell range. Either
   * diagonal of the cell region may be specified in either order, e.g. self=bottom-right,
   * other_cell=top-left, etc.
   *
   * Raises `Error` if the specified range already contains merged cells anywhere within
   * its extents or if `other_cell` is not in the same table as `self`.
   */
  merge(other_cell: _Cell) {
    const pid = append_packed_id(this.packed_id, 'merge');
    return py_funs.call_method(pid, arguments, other_cell);
  }

  /**
   * Integer count of rows spanned by this cell.
   *
   * The value of this property may be misleading (often 1) on cells where `.is_merge_origin`
   * is not `true`, since only a merge-origin cell contains complete span information. This
   * property is only intended for use on cells known to be a merge origin by testing
   * `.is_merge_origin`.
   */
  get span_height(): number {
    const pid = append_packed_id(this.packed_id, 'span_height');
    return py_funs.get_attr(pid);
  }

  /**
   * Integer count of columns spanned by this cell.
   *
   * The value of this property may be misleading (often 1) on cells where `.is_merge_origin`
   * is not `true`, since only a merge-origin cell contains complete span information. This
   * property is only intended for use on cells known to be a merge origin by testing
   * `.is_merge_origin`.
   */
  get span_width(): number {
    const pid = append_packed_id(this.packed_id, 'span_width');
    return py_funs.get_attr(pid);
  }

  /**
   * Remove merge from this (merge-origin) cell.
   *
   * The merged cell represented by this object will be "unmerged", yielding a separate
   * unmerged cell for each grid cell previously spanned by this merge.
   *
   * Raises `Error` when this cell is not a merge-origin cell. Test with
   * `.is_merge_origin` before calling.
   */
  split() {
    const pid = append_packed_id(this.packed_id, 'split');
    return py_funs.call_method(pid, arguments);
  }

  /**
   * Textual content of cell as a single string.
   *
   * The returned string will contain a newline character (`"\n"`) separating each paragraph
   * and a vertical-tab (`"\v"`) character for each line break (soft carriage return) in the
   * cell's text.
   *
   * Assignment to `text` replaces all text currently contained in the cell. A newline
   * character (`"\n"`) in the assigned text causes a new paragraph to be started. A
   * vertical-tab (`"\v"`) character in the assigned text causes a line-break (soft
   * carriage-return) to be inserted. (The vertical-tab character appears in clipboard text
   * copied from PowerPoint as its encoding of line-breaks.)
   */
  set text(text: string) {
    const pid = append_packed_id(this.packed_id, 'text');
    py_funs.set_attr(pid, text);
  }
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr(pid);
  }

  /**
   * `TextFrame` containing the text that appears in the cell.
   */
  get text_frame() {
    const pid = append_packed_id(this.packed_id, 'text_frame');
    return py_funs.get_attr_returns_instance(pid, TextFrame);
  }

  /**
   * Vertical alignment of this cell.
   *
   * This value is a member of the :ref:`MsoVerticalAnchor` enumeration or `undefined`. A value of
   * `undefined` indicates the cell has no explicitly applied vertical anchor setting and its
   * effective value is inherited from its style-hierarchy ancestors.
   *
   * Assigning `undefined` to this property causes any explicitly applied vertical anchor setting to
   * be cleared and inheritance of its effective value to be restored.
   */
  set vertical_anchor(vertical_anchor: MSO_VERTICAL_ANCHOR) {
    const pid = append_packed_id(this.packed_id, 'vertical_anchor');
    py_funs.set_attr(pid, Enum(MSO_VERTICAL_ANCHOR, vertical_anchor));
  }
  get vertical_anchor() {
    const pid = append_packed_id(this.packed_id, 'vertical_anchor');
    return py_funs.get_attr(pid);
  }
}

/**
 * Table column
 */
export class _Column extends Subshape {
  get _gridCol() {
    const pid = append_packed_id(this.packed_id, '_gridCol');
    return py_funs.get_attr_returns_instance(pid, CT_TableCol);
  }

  /**
   * Width of column in EMU.
   */
  set width(width: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'width');
    py_funs.set_attr(pid, width);
  }
  get width() {
    const pid = append_packed_id(this.packed_id, 'width');
    return py_funs.get_attr(pid);
  }
}

/**
 * Table row
 */
export class _Row extends Subshape {
  get _tr() {
    const pid = append_packed_id(this.packed_id, '_tr');
    return py_funs.get_attr_returns_instance(pid, CT_TableRow);
  }

  /**
   * Read-only reference to collection of cells in row.
   *
   * An individual cell is referenced using list notation, e.g. `cell = row.cells[0]`.
   */
  get cells() {
    const pid = append_packed_id(this.packed_id, 'cells');
    return py_funs.get_attr_returns_instance(pid, _CellCollection);
  }

  /**
   * Height of row in EMU.
   */
  set height(height: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'height');
    py_funs.set_attr(pid, height);
  }
  get height() {
    const pid = append_packed_id(this.packed_id, 'height');
    return py_funs.get_attr(pid);
  }
}

/**
 * Horizontal sequence of row cells
 */
export class _CellCollection extends MutableArrayMixin<_Cell, Type<Subshape>>(Subshape) {
  get _tr() {
    const pid = append_packed_id(this.packed_id, '_tr');
    return py_funs.get_attr_returns_instance(pid, CT_TableRow);
  }

  getItem(index: number): _Cell {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, _Cell);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

/**
 * Sequence of table columns.
 */
export class _ColumnCollection extends MutableArrayMixin<_Column, Type<Subshape>>(Subshape) {
  get _tbl() {
    const pid = append_packed_id(this.packed_id, '_tbl');
    return py_funs.get_attr_returns_instance(pid, CT_Table);
  }

  getItem(index: number): _Column {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, _Column);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Called by a column when its width changes. Pass along to parent.
   */
  notify_width_changed() {
    const pid = append_packed_id(this.packed_id, 'notify_width_changed');
    return py_funs.call_method<undefined>(pid, arguments);
  }
}

/**
 * Sequence of table rows
 */
export class _RowCollection extends MutableArrayMixin<_Row, Type<Subshape>>(Subshape) {
  get _tbl() {
    const pid = append_packed_id(this.packed_id, '_tbl');
    return py_funs.get_attr_returns_instance(pid, CT_Table);
  }

  getItem(index: number): _Row {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, _Row);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Called by a row when its height changes. Pass along to parent.
   */
  notify_height_changed() {
    const pid = append_packed_id(this.packed_id, 'notify_height_changed');
    return py_funs.call_method<undefined>(pid, arguments);
  }
}
