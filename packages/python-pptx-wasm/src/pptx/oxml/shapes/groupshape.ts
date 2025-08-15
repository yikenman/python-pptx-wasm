import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { MSO_CONNECTOR_TYPE, PP_PLACEHOLDER } from '../../enum/shapes';
import { _Element } from '../lxml';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_Shape } from './autoshape';
import { CT_Connector } from './connector';
import { CT_GraphicalObjectFrame } from './graphfrm';
import { CT_Picture } from './pitcure';
import { BaseShapeElement, CT_NonVisualDrawingProps, CT_Point2D, CT_PositiveSize2D, CT_Transform2D } from './shared';

export const ShapeElementFactroy = (cls: string) => {
  const clsList = {
    CT_Connector: CT_Connector,
    CT_GraphicalObjectFrame: CT_GraphicalObjectFrame,
    CT_GroupShape: CT_GroupShape,
    CT_Picture: CT_Picture,
    CT_Shape: CT_Shape
  } as const;

  return clsList[cls as keyof typeof clsList];
};

/**
 * Used for shape tree (`p:spTree`) as well as the group shape (`p:grpSp`) elements.
 */
export class CT_GroupShape extends BaseShapeElement {
  get nvGrpSpPr() {
    const pid = append_packed_id(this.packed_id, 'nvGrpSpPr');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShapeNonVisual);
  }

  get grpSpPr() {
    const pid = append_packed_id(this.packed_id, 'grpSpPr');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShapeProperties);
  }

  /**
   * Return new `p:sp` appended to the group/shapetree with specified attributes.
   */
  add_autoshape(id_: number, name: string, prst: string, x: number, y: number, cx: number, cy: number) {
    const pid = append_packed_id(this.packed_id, 'add_autoshape');
    return py_funs.call_method_returns_instance(pid, CT_Shape, arguments, id_, name, prst, x, y, cx, cy);
  }

  /**
   * Return new `p:cxnSp` appended to the group/shapetree with the specified attributes.
   */
  add_cxnSp(
    id_: number,
    name: string,
    type_member: MSO_CONNECTOR_TYPE,
    x: number,
    y: number,
    cx: number,
    cy: number,
    flipH: boolean,
    flipV: boolean
  ) {
    const pid = append_packed_id(this.packed_id, 'add_cxnSp');
    return py_funs.call_method_returns_instance(
      pid,
      CT_Connector,
      arguments,
      id_,
      name,
      Enum(MSO_CONNECTOR_TYPE, type_member),
      x,
      y,
      cx,
      cy,
      flipH,
      flipV
    );
  }

  /**
   * Append a new freeform `p:sp` with specified position and size.
   */
  add_freeform_sp(x: number, y: number, cx: number, cy: number) {
    const pid = append_packed_id(this.packed_id, 'add_freeform_sp');
    return py_funs.call_method_returns_instance(pid, CT_Shape, arguments, x, y, cx, cy);
  }

  /**
   * Return `p:grpSp` element newly appended to this shape tree.
   */
  add_grpSp() {
    const pid = append_packed_id(this.packed_id, 'add_grpSp');
    return py_funs.call_method_returns_instance(pid, CT_GroupShape, arguments);
  }

  /**
   * Append a `p:pic` shape to the group/shapetree with specified properties.
   */
  add_pic(id_: number, name: string, desc: string, rId: string, x: number, y: number, cx: number, cy: number) {
    const pid = append_packed_id(this.packed_id, 'add_pic');
    return py_funs.call_method_returns_instance(pid, CT_Picture, arguments, id_, name, desc, rId, x, y, cx, cy);
  }

  /**
   * Append a newly-created placeholder `p:sp` shape with specified properties.
   */
  add_placeholder(id_: number, name: string, ph_type: PP_PLACEHOLDER, orient: string, sz: string, idx: number) {
    const pid = append_packed_id(this.packed_id, 'add_placeholder');
    return py_funs.call_method_returns_instance(
      pid,
      CT_Shape,
      arguments,
      id_,
      name,
      Enum(PP_PLACEHOLDER, ph_type),
      orient,
      sz,
      idx
    );
  }

  /**
   * Append a `p:graphicFrame` shape containing a table as specified.
   */
  add_table(id_: number, name: string, rows: number, cols: number, x: number, y: number, cx: number, cy: number) {
    const pid = append_packed_id(this.packed_id, 'add_table');
    return py_funs.call_method_returns_instance(
      pid,
      CT_GraphicalObjectFrame,
      arguments,
      id_,
      name,
      rows,
      cols,
      x,
      y,
      cx,
      cy
    );
  }

  /**
   * Append a newly-created textbox `p:sp` shape with specified position and size.
   */
  add_textbox(id_: number, name: string, x: number, y: number, cx: number, cy: number) {
    const pid = append_packed_id(this.packed_id, 'add_textbox');
    return py_funs.call_method_returns_instance(pid, CT_Shape, arguments, id_, name, x, y, cx, cy);
  }

  /**
   * Descendent `p:grpSpPr/a:xfrm/a:chExt` element.
   */
  get chExt() {
    const pid = append_packed_id(this.packed_id, 'chExt');
    return py_funs.get_attr_returns_instance(pid, CT_PositiveSize2D);
  }

  /**
   * Descendent `p:grpSpPr/a:xfrm/a:chOff` element.
   */
  get chOff() {
    const pid = append_packed_id(this.packed_id, 'chOff');
    return py_funs.get_attr_returns_instance(pid, CT_Point2D);
  }

  /**
   * Return the `a:xfrm` grandchild element, newly-added if not present.
   */
  get_or_add_xfrm() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xfrm');
    return py_funs.call_method_returns_instance(pid, CT_Transform2D, arguments);
  }

  /**
   * Generate each placeholder shape child element in document order.
   */
  iter_ph_elms() {
    const pid = append_packed_id(this.packed_id, 'iter_ph_elms');
    return py_funs.call_method_returns_instance_list_from_instance_factory(pid, ShapeElementFactroy, arguments);
  }

  /**
   * Generate each child of this `p:spTree` element that corresponds to a shape.
   */
  iter_shape_elms() {
    const pid = append_packed_id(this.packed_id, 'iter_shape_elms');
    return py_funs.call_method_returns_instance_list_from_instance_factory(pid, ShapeElementFactroy, arguments);
  }

  /**
   * Maximum int value assigned as @id in this slide.
   */
  get max_shape_id() {
    const pid = append_packed_id(this.packed_id, 'max_shape_id');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Adjust x, y, cx, and cy to incorporate all contained shapes.
   */
  recalculate_extents() {
    const pid = append_packed_id(this.packed_id, 'recalculate_extents');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  /**
   * The `a:xfrm` grandchild element or `undefined` if not found.
   */
  get xfrm() {
    const pid = append_packed_id(this.packed_id, 'xfrm');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Transform2D);
  }
}

/**
 * `p:nvGrpSpPr` element.
 */
export class CT_GroupShapeNonVisual extends BaseShapeElement {
  get cNvPr() {
    const pid = append_packed_id(this.packed_id, 'cNvPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualDrawingProps);
  }
}

/**
 * p:grpSpPr element
 */
export class CT_GroupShapeProperties extends BaseOxmlElement {
  get xfrm() {
    const pid = append_packed_id(this.packed_id, 'xfrm');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Transform2D);
  }

  get_or_add_xfrm(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xfrm');
    return py_funs.call_method_returns_instance(pid, CT_Transform2D, arguments, obj);
  }

  get effectLst() {
    const pid = append_packed_id(this.packed_id, 'effectLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_effectLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'effectLst');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }
}
