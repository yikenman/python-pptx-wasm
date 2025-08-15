import { append_packed_id, Emu, type LengthType, List, PackedBase, py_funs, Tuple } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { type CT_Path2D, CT_Path2DClose, CT_Path2DLineTo, CT_Path2DMoveTo } from '../oxml/shapes/autoshape';
import { _BaseGroupShapes, BaseShapeFactory } from './shapetree';

/**
 * Allows a freeform shape to be specified and created.
 *
 * The initial pen position is provided on construction. From there, drawing proceeds using
 * successive calls to draw line segments. The freeform shape may be closed by calling the
 * close() method.
 *
 * A shape may have more than one contour, in which case overlapping areas are "subtracted". A
 * contour is a sequence of line segments beginning with a "move-to" operation. A move-to
 * operation is automatically inserted in each new freeform; additional move-to ops can be
 * inserted with the .move_to() method.
 */
export class FreeformBuilder extends MutableArrayMixin<
  InstanceType<ReturnType<typeof DrawingOperation>>,
  Type<PackedBase>
>(PackedBase) {
  get _shapes() {
    const pid = append_packed_id(this.packed_id, '_shapes');
    return py_funs.get_attr_returns_instance(pid, _BaseGroupShapes);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, DrawingOperation);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Add a straight line segment to each point in vertices.
   *
   * vertices must be an iterable of (x, y) pairs (2-tuples). Each x and y value is rounded
   * to the nearest integer before use. The optional close parameter determines whether the
   * resulting contour is closed or left open.
   *
   * Returns this FreeformBuilder object so it can be used in chained calls.
   */
  add_line_segments(vertices: [number, number][], close: boolean = false) {
    const pid = append_packed_id(this.packed_id, 'add_line_segments');
    py_funs.call_method(pid, arguments, List(vertices.map((ele) => Tuple(ele))), close);
    return this;
  }

  /**
   * Return new freeform shape positioned relative to specified offset.
   *
   * origin_x and origin_y locate the origin of the local coordinate system in slide
   * coordinates (EMU), perhaps most conveniently by use of a Length object.
   *
   * Note that this method may be called more than once to add multiple shapes of the same
   * geometry in different locations on the slide.
   */
  convert_to_shape(origin_x = Emu(0), origin_y = Emu(0)) {
    const pid = append_packed_id(this.packed_id, 'convert_to_shape');
    return py_funs.call_method_returns_instance_from_instance_factory(
      pid,
      BaseShapeFactory,
      arguments,
      origin_x,
      origin_y
    );
  }

  /**
   * Move pen to (x, y) (local coordinates) without drawing line.
   *
   * Returns this FreeformBuilder object so it can be used in chained calls.
   */
  move_to(x: number, y: number) {
    const pid = append_packed_id(this.packed_id, 'move_to');
    py_funs.call_method(pid, arguments, x, y);
    return this;
  }

  /**
   * Return x distance of shape origin from local coordinate origin.
   *
   * The returned integer represents the leftmost extent of the freeform shape, in local
   * coordinates. Note that the bounding box of the shape need not start at the local origin.
   */
  get shape_offset_x() {
    const pid = append_packed_id(this.packed_id, 'shape_offset_x');
    return py_funs.get_attr<LengthType>(pid);
  }

  /**
   * Return y distance of shape origin from local coordinate origin.
   *
   * The returned integer represents the topmost extent of the freeform shape, in local
   * coordinates. Note that the bounding box of the shape need not start at the local origin.
   */
  get shape_offset_y() {
    const pid = append_packed_id(this.packed_id, 'shape_offset_y');
    return py_funs.get_attr<LengthType>(pid);
  }
}

/**
 * Base class for freeform drawing operations.
 *
 * A drawing operation has at least one location (x, y) in local coordinates.
 */
class _BaseDrawingOperation extends PackedBase {
  /**
   * Add the XML element(s) implementing this operation to path.
   *
   * Must be implemented by each subclass.
   */

  apply_operation_to(path: CT_Path2D): any {
    const pid = append_packed_id(this.packed_id, 'apply_operation_to');
    return py_funs.call_method(pid, arguments);
  }

  /**
   * Return the horizontal (x) target location of this operation.
   *
   * The returned value is an integer in local coordinates.
   */
  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr<LengthType>(pid);
  }

  /**
   * Return the vertical (y) target location of this operation.
   *
   * The returned value is an integer in local coordinates.
   */
  get y() {
    const pid = append_packed_id(this.packed_id, 'y');
    return py_funs.get_attr<LengthType>(pid);
  }
}

/**
 * Specifies adding a `<a:close/>` element to the current contour.
 */
export class _Close extends PackedBase {
  /**
   * Add `a:close` element to `path`.
   */
  apply_operation_to(path: CT_Path2D) {
    const pid = append_packed_id(this.packed_id, 'apply_operation_to');
    py_funs.call_method_returns_instance(pid, CT_Path2DClose, arguments, path);
  }
}

/**
 * Specifies a straight line segment ending at the specified point.
 */
export class _LineSegment extends _BaseDrawingOperation {
  /**
   * Add `a:lnTo` element to `path` for this line segment.
   *
   * Returns the `a:lnTo` element newly added to the path.
   */
  apply_operation_to(path: CT_Path2D) {
    const pid = append_packed_id(this.packed_id, 'apply_operation_to');
    py_funs.call_method_returns_instance(pid, CT_Path2DLineTo, arguments, path);
  }
}

/**
 * Specifies a new pen position.
 */
export class _MoveTo extends _BaseDrawingOperation {
  /**
   * Add `a:moveTo` element to path for this line segment.
   */
  apply_operation_to(path: CT_Path2D) {
    const pid = append_packed_id(this.packed_id, 'apply_operation_to');
    py_funs.call_method_returns_instance(pid, CT_Path2DMoveTo, arguments, path);
  }
}

const DrawingOperation = (cls: string) => {
  const clsList = {
    _Close: _Close,
    _LineSegment: _LineSegment,
    _MoveTo: _MoveTo
  } as const;

  return clsList[cls as keyof typeof clsList];
};
