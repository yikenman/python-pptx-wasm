import { append_packed_id, py_funs } from '../../../bridge';
import { BaseOxmlElement } from '../xmlchemy';
import {
  BaseShapeElement,
  CT_ApplicationNonVisualDrawingProps,
  CT_NonVisualDrawingProps,
  CT_ShapeProperties
} from './shared';

/**
 * A `a:stCxn` or `a:endCxn` element.
 *
 * Specifies a connection between an end-point of a connector and a shape connection point.
 */
export class CT_Connection extends BaseShapeElement {
  set id(id: number) {
    const pid = append_packed_id(this.packed_id, 'id');
    py_funs.set_attr(pid, id);
  }

  get id() {
    const pid = append_packed_id(this.packed_id, 'id');
    return py_funs.get_attr(pid);
  }

  set idx(idx: number) {
    const pid = append_packed_id(this.packed_id, 'idx');
    py_funs.set_attr(pid, idx);
  }

  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr(pid);
  }
}

/**
 * A line/connector shape `p:cxnSp` element
 */
export class CT_Connector extends BaseShapeElement {
  get nvCxnSpPr() {
    const pid = append_packed_id(this.packed_id, 'nvCxnSpPr');
    return py_funs.get_attr_returns_instance(pid, CT_ConnectorNonVisual);
  }

  get spPr() {
    const pid = append_packed_id(this.packed_id, 'spPr');
    return py_funs.get_attr_returns_instance(pid, CT_ShapeProperties);
  }
}

/**
 * `p:nvCxnSpPr` element, container for the non-visual properties of
 * a connector, such as name, id, etc.
 */
export class CT_ConnectorNonVisual extends BaseOxmlElement {
  get cNvPr() {
    const pid = append_packed_id(this.packed_id, 'cNvPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualDrawingProps);
  }

  get cNvCxnSpPr() {
    const pid = append_packed_id(this.packed_id, 'cNvCxnSpPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualConnectorProperties);
  }

  get nvPr() {
    const pid = append_packed_id(this.packed_id, 'nvPr');
    return py_funs.get_attr_returns_instance(pid, CT_ApplicationNonVisualDrawingProps);
  }
}

/**
 * `p:cNvCxnSpPr` element, container for the non-visual properties specific
 * to a connector shape, such as connections and connector locking.
 */
export class CT_NonVisualConnectorProperties extends BaseOxmlElement {
  get stCxn() {
    const pid = append_packed_id(this.packed_id, 'stCxn');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Connection);
  }

  get_or_add_stCxn(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'stCxn');
    return py_funs.call_method_returns_instance(pid, CT_Connection, arguments, obj);
  }

  get endCxn() {
    const pid = append_packed_id(this.packed_id, 'endCxn');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Connection);
  }

  get_or_add_endCxn(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'endCxn');
    return py_funs.call_method_returns_instance(pid, CT_Connection, arguments, obj);
  }
}
