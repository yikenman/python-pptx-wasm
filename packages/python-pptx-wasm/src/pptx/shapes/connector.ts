import { append_packed_id, type LengthType, py_funs } from '../../bridge';
import { LineFormat } from '../dml/line';
import { MSO_SHAPE_TYPE } from '../enum/shapes';
import { CT_LineProperties } from '../oxml/shapes/shared';
import { BaseShape } from './base';
import type { SlideShapeFactory } from './shapetree';

/**
 * Connector (line) shape.
 *
 * A connector is a linear shape having end-points that can be connected to
 * other objects (but not to other connectors). A connector can be straight,
 * have elbows, or can be curved.
 */
export class Connector extends BaseShape {
  /**
   * **EXPERIMENTAL** - The current implementation only works properly
   * with rectangular shapes, such as pictures and rectangles. Use with
   * other shape types may cause unexpected visual alignment of the
   * connected end-point and could lead to a load error if cxn_pt_idx
   * exceeds the connection point count available on the connected shape.
   * That said, a quick test should reveal what to expect when using this
   * method with other shape types.
   *
   * Connect the beginning of this connector to shape at the connection
   * point specified by cxn_pt_idx. Each shape has zero or more
   * connection points and they are identified by index, starting with 0.
   * Generally, the first connection point of a shape is at the top center
   * of its bounding box and numbering proceeds counter-clockwise from
   * there. However this is only a convention and may vary, especially
   * with non built-in shapes.
   */
  begin_connect(shape: InstanceType<ReturnType<typeof SlideShapeFactory>>, cxn_pt_idx: string) {
    const pid = append_packed_id(this.packed_id, 'begin_connect');
    return py_funs.call_method(pid, arguments, shape, cxn_pt_idx);
  }

  /**
   * Return the X-position of the begin point of this connector, in
   * English Metric Units (as a Length object).
   */
  set begin_x(begin_x: LengthType) {
    const pid = append_packed_id(this.packed_id, 'begin_x');
    py_funs.set_attr(pid, begin_x);
  }
  get begin_x() {
    const pid = append_packed_id(this.packed_id, 'begin_x');
    return py_funs.get_attr(pid);
  }

  /**
   * Return the Y-position of the begin point of this connector, in
   * English Metric Units (as a Length object).
   */
  set begin_y(begin_y: LengthType) {
    const pid = append_packed_id(this.packed_id, 'begin_y');
    py_funs.set_attr(pid, begin_y);
  }
  get begin_y() {
    const pid = append_packed_id(this.packed_id, 'begin_y');
    return py_funs.get_attr(pid);
  }

  /**
   * **EXPERIMENTAL** - The current implementation only works properly
   * with rectangular shapes, such as pictures and rectangles. Use with
   * other shape types may cause unexpected visual alignment of the
   * connected end-point and could lead to a load error if cxn_pt_idx
   * exceeds the connection point count available on the connected shape.
   * That said, a quick test should reveal what to expect when using this
   * method with other shape types.
   *
   * Connect the ending of this connector to shape at the connection
   * point specified by cxn_pt_idx.
   */
  end_connect(shape: InstanceType<ReturnType<typeof SlideShapeFactory>>, cxn_pt_idx: string) {
    const pid = append_packed_id(this.packed_id, 'end_connect');
    return py_funs.call_method(pid, arguments, shape, cxn_pt_idx);
  }

  /**
   * Return the X-position of the end point of this connector, in English
   * Metric Units (as a Length object).
   */
  set end_x(end_x: LengthType) {
    const pid = append_packed_id(this.packed_id, 'end_x');
    py_funs.set_attr(pid, end_x);
  }
  get end_x() {
    const pid = append_packed_id(this.packed_id, 'end_x');
    return py_funs.get_attr(pid);
  }

  /**
   * Return the Y-position of the end point of this connector, in English
   * Metric Units (as a Length object).
   */
  set end_y(end_y: LengthType) {
    const pid = append_packed_id(this.packed_id, 'end_y');
    py_funs.set_attr(pid, end_y);
  }
  get end_y() {
    const pid = append_packed_id(this.packed_id, 'end_y');
    return py_funs.get_attr(pid);
  }

  /**
   * Helper method required by LineFormat.
   */
  get_or_add_ln() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_ln');
    return py_funs.call_method_returns_instance(pid, CT_LineProperties, arguments);
  }

  /**
   * LineFormat instance for this connector.
   *
   * Provides access to line properties such as line color, width, and
   * line style.
   */
  get line() {
    const pid = append_packed_id(this.packed_id, 'line');
    return py_funs.get_attr_returns_instance(pid, LineFormat);
  }

  /**
   * Helper method required by LineFormat.
   *
   * The <a:ln> element containing the line format properties such as
   * line color and width. undefined if no <a:ln> element is present.
   */
  get ln() {
    const pid = append_packed_id(this.packed_id, 'ln');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LineProperties);
  }

  /**
   * Member of MSO_SHAPE_TYPE identifying the type of this shape.
   *
   * Unconditionally MSO_SHAPE_TYPE.LINE for a Connector object.
   */
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }
}
