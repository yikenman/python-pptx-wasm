import { append_packed_id, py_funs } from '../../../bridge';
import { CT_Chart } from '../chart/chart';
import { CT_Table } from '../table';
import { BaseOxmlElement } from '../xmlchemy';
import {
  BaseShapeElement,
  CT_ApplicationNonVisualDrawingProps,
  CT_NonVisualDrawingProps,
  CT_Transform2D
} from './shared';

/**
 * `a:graphic` element.
 * The container for the reference to or definition of the framed graphical object (table, chart, etc.).
 */
export class CT_GraphicalObject extends BaseOxmlElement {
  get graphicData() {
    const pid = append_packed_id(this.packed_id, 'graphicData');
    return py_funs.get_attr_returns_instance(pid, CT_GraphicalObjectData);
  }

  /**
   * The `c:chart` grandchild element, or `undefined` if not present.
   */
  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Chart);
  }
}

/**
 * `p:graphicData` element.
 * The direct container for a table, a chart, or another graphical object.
 */
export class CT_GraphicalObjectData extends BaseShapeElement {
  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Chart);
  }

  get_or_add_chart(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_chart');
    return py_funs.call_method_returns_instance(pid, CT_Chart, arguments, obj);
  }

  get tbl() {
    const pid = append_packed_id(this.packed_id, 'tbl');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Table);
  }

  get_or_add_tbl(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_tbl');
    return py_funs.call_method_returns_instance(pid, CT_Table, arguments, obj);
  }

  set uri(uri: string) {
    const pid = append_packed_id(this.packed_id, 'uri');
    py_funs.set_attr(pid, uri);
  }

  get uri() {
    const pid = append_packed_id(this.packed_id, 'uri');
    return py_funs.get_attr(pid);
  }

  /**
   * Optional `r:id` attribute value of `p:oleObj` descendent element.
   * Returns `undefined` when no OLE object is present or attribute is missing.
   */
  get blob_rId() {
    const pid = append_packed_id(this.packed_id, 'blob_rId');
    return py_funs.get_attr<string | undefined>(pid);
  }

  /**
   * Optional boolean indicating an embedded OLE object.
   * Returns `undefined` when no OLE object is present.
   */
  get is_embedded_ole_obj() {
    const pid = append_packed_id(this.packed_id, 'is_embedded_ole_obj');
    return py_funs.get_attr<boolean | undefined>(pid);
  }

  /**
   * Optional str value of "progId" attribute of `p:oleObj` descendent.
   * Returns `undefined` when no OLE object is present or attribute is missing.
   */
  get progId() {
    const pid = append_packed_id(this.packed_id, 'progId');
    return py_funs.get_attr<string | undefined>(pid);
  }

  /**
   * Optional value of "showAsIcon" attribute of `p:oleObj` descendent.
   * Returns `undefined` when no OLE object is present, false when attribute omitted.
   */
  get showAsIcon() {
    const pid = append_packed_id(this.packed_id, 'showAsIcon');
    return py_funs.get_attr<boolean | undefined>(pid);
  }
}

/**
 * `p:graphicFrame` element.
 * A container for a table, a chart, or another graphical object.
 */
export class CT_GraphicalObjectFrame extends BaseShapeElement {
  get nvGraphicFramePr() {
    const pid = append_packed_id(this.packed_id, 'nvGraphicFramePr');
    return py_funs.get_attr_returns_instance(pid, CT_GraphicalObjectFrameNonVisual);
  }

  get xfrm() {
    const pid = append_packed_id(this.packed_id, 'xfrm');
    return py_funs.get_attr_returns_instance(pid, CT_Transform2D);
  }

  get graphic() {
    const pid = append_packed_id(this.packed_id, 'graphic');
    return py_funs.get_attr_returns_instance(pid, CT_GraphicalObject);
  }

  /**
   * The `c:chart` great-grandchild element, or `undefined` if not present.
   */
  get chart() {
    const pid = append_packed_id(this.packed_id, 'chart');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Chart);
  }

  /**
   * The `rId` attribute of the `c:chart` great-grandchild element.
   * Returns `undefined` if not present.
   */
  get chart_rId() {
    const pid = append_packed_id(this.packed_id, 'chart_rId');
    return py_funs.get_attr<string | undefined>(pid);
  }

  /**
   * Return the required `p:xfrm` child element.
   * Overrides version on BaseShapeElement.
   */
  get_or_add_xfrm() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xfrm');
    return py_funs.call_method_returns_instance(pid, CT_Transform2D, arguments);
  }

  /**
   * `a:graphicData` grandchild of this graphic-frame element.
   */
  get graphicData() {
    const pid = append_packed_id(this.packed_id, 'graphicData');
    return py_funs.get_attr_returns_instance(pid, CT_GraphicalObjectData);
  }

  /**
   * str value of `uri` attribute of `a:graphicData` grandchild.
   */
  get graphicData_uri() {
    const pid = append_packed_id(this.packed_id, 'graphicData_uri');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * `true` for graphicFrame containing an OLE object, `false` otherwise.
   */
  get has_oleobj() {
    const pid = append_packed_id(this.packed_id, 'has_oleobj');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * Optional boolean indicating an embedded OLE object.
   * Returns `undefined` when no OLE object is present.
   */
  get is_embedded_ole_obj() {
    const pid = append_packed_id(this.packed_id, 'is_embedded_ole_obj');
    return py_funs.get_attr<boolean | undefined>(pid);
  }
}

/**
 * `p:nvGraphicFramePr` element.
 *
 * This contains the non-visual properties of a graphic frame, such as name, id, etc.
 */
export class CT_GraphicalObjectFrameNonVisual extends BaseOxmlElement {
  get cNvPr() {
    const pid = append_packed_id(this.packed_id, 'cNvPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualDrawingProps);
  }

  get nvPr() {
    const pid = append_packed_id(this.packed_id, 'nvPr');
    return py_funs.get_attr_returns_instance(pid, CT_ApplicationNonVisualDrawingProps);
  }
}

/**
 * `p:oleObj` element, container for an OLE object (e.g. Excel file).
 *
 * An OLE object can be either linked or embedded (hence the name).
 */
export class CT_OleObject extends BaseOxmlElement {
  set progId(progId: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'progId');
    py_funs.set_attr(pid, progId);
  }

  get progId() {
    const pid = append_packed_id(this.packed_id, 'progId');
    return py_funs.get_attr(pid);
  }

  set rId(rId: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'rId');
    py_funs.set_attr(pid, rId);
  }

  get rId() {
    const pid = append_packed_id(this.packed_id, 'rId');
    return py_funs.get_attr(pid);
  }

  set showAsIcon(showAsIcon: boolean) {
    const pid = append_packed_id(this.packed_id, 'showAsIcon');
    py_funs.set_attr(pid, showAsIcon);
  }

  get showAsIcon() {
    const pid = append_packed_id(this.packed_id, 'showAsIcon');
    return py_funs.get_attr(pid);
  }

  /**
   * True when this OLE object is embedded, False when it is linked.
   */
  get is_embedded() {
    const pid = append_packed_id(this.packed_id, 'is_embedded');
    return py_funs.get_attr<boolean>(pid);
  }
}
