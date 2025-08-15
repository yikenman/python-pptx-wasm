import { append_packed_id, py_funs } from '../../bridge';
import { Chart } from '../chart/chart';
import { ShadowFormat } from '../dml/effect';
import { MSO_SHAPE_TYPE } from '../enum/shapes';
import { CT_GraphicalObjectData, CT_GraphicalObjectFrame } from '../oxml/shapes/graphfrm';
import { ChartPart } from '../parts/chart';
import { ParentedElementProxy } from '../shared';
import { Table } from '../table';
import { BaseShape } from './base';

/**
 * Container shape for table, chart, smart art, and media objects.
 *
 * Corresponds to a `p:graphicFrame` element in the shape tree.
 */
export class GraphicFrame extends BaseShape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GraphicalObjectFrame);
  }

  get _graphicFrame() {
    return this._element;
  }

  /**
   * The Chart object containing the chart in this graphic frame.
   *
   * Raises Error if this graphic frame does not contain a chart.
   */
  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance(pid, Chart);
  }

  /**
   * The ChartPart object containing the chart in this graphic frame.
   */
  get chart_part() {
    const pid = append_packed_id(this.packed_id, 'chart_part');
    return py_funs.get_attr_returns_instance(pid, ChartPart);
  }

  /**
   * true if this graphic frame contains a chart object. false otherwise.
   *
   * When true, the chart object can be accessed using the .chart property.
   */

  get has_chart(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_chart');
    return py_funs.get_attr(pid);
  }

  /**
   * true if this graphic frame contains a table object, false otherwise.
   *
   * When true, the table object can be accessed using the .table property.
   */
  get has_table(): boolean {
    const pid = append_packed_id(this.packed_id, 'has_table');
    return py_funs.get_attr(pid);
  }

  /**
   * _OleFormat object for this graphic-frame shape.
   *
   * Raises Error on a GraphicFrame instance that does not contain an OLE object.
   *
   * An shape that contains an OLE object will have .shape_type of either
   * EMBEDDED_OLE_OBJECT or LINKED_OLE_OBJECT.
   */
  get ole_format() {
    const pid = append_packed_id(this.packed_id, 'ole_format');
    return py_funs.get_attr_returns_instance(pid, _OleFormat);
  }

  /**
   * Unconditionally raises Error.
   *
   * Access to the shadow effect for graphic-frame objects is content-specific (i.e. different
   * for charts, tables, etc.) and has not yet been implemented.
   */
  get shadow() {
    const pid = append_packed_id(this.packed_id, 'shadow');
    return py_funs.get_attr_returns_instance(pid, ShadowFormat);
  }

  /**
   * Optional member of MSO_SHAPE_TYPE identifying the type of this shape.
   *
   * Possible values are MSO_SHAPE_TYPE.CHART, MSO_SHAPE_TYPE.TABLE,
   * MSO_SHAPE_TYPE.EMBEDDED_OLE_OBJECT, MSO_SHAPE_TYPE.LINKED_OLE_OBJECT.
   *
   * This value is null when none of these four types apply, for example when the shape
   * contains SmartArt.
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }

  /**
   * The Table object contained in this graphic frame.
   *
   * Raises Error if this graphic frame does not contain a table.
   */
  get table() {
    const pid = append_packed_id(this.packed_id, 'table');
    return py_funs.get_attr_returns_instance(pid, Table);
  }
}

/**
 * Provides attributes on an embedded OLE object.
 */
export class _OleFormat extends ParentedElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GraphicalObjectData);
  }

  get _graphicData() {
    return this._element;
  }

  /**
   * Optional bytes of OLE object, suitable for loading or saving as a file.
   *
   * This value is undefined if the embedded object does not represent a "file".
   */
  get blob() {
    const pid = append_packed_id(this.packed_id, 'blob');
    return py_funs.get_attr<Uint8Array | undefined>(pid);
  }

  /**
   * String "progId" attribute of this embedded OLE object.
   *
   * The progId is a string like "Excel.Sheet.12" that identifies the "file-type" of the embedded
   * object, or perhaps more precisely, the application (aka. "server" in OLE parlance) to be
   * used to open this object.
   */
  get prog_id() {
    const pid = append_packed_id(this.packed_id, 'prog_id');
    return py_funs.get_attr<string | undefined>(pid);
  }

  /**
   * Boolean indicating when OLE object should appear as an icon (rather than preview).
   */
  get show_as_icon() {
    const pid = append_packed_id(this.packed_id, 'show_as_icon');
    return py_funs.get_attr<boolean | undefined>(pid);
  }
}
