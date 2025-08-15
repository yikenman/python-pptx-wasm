import { append_packed_id, Enum, type LengthType, List, py_funs, Tuple } from '../../../bridge';
import { MSO_AUTO_SHAPE_TYPE } from '../../enum/shapes';
import { _Element } from '../lxml';
import { CT_TextBody } from '../text';
import { BaseOxmlElement } from '../xmlchemy';
import {
  CT_ApplicationNonVisualDrawingProps,
  CT_LineProperties,
  CT_NonVisualDrawingProps,
  CT_ShapeProperties
} from './shared';

/**
 * `a:pt` custom element class.
 */
export class CT_AdjPoint2D extends BaseOxmlElement {
  set x(x: LengthType) {
    const pid = append_packed_id(this.packed_id, 'x');
    py_funs.set_attr(pid, x);
  }

  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr(pid);
  }

  set y(y: LengthType) {
    const pid = append_packed_id(this.packed_id, 'y');
    py_funs.set_attr(pid, y);
  }

  get y() {
    const pid = append_packed_id(this.packed_id, 'y');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:custGeom` custom element class.
 */
export class CT_CustomGeometry2D extends BaseOxmlElement {
  get_or_add_pathLst() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_pathLst');
    return py_funs.call_method_returns_instance(pid, CT_Path2DList, arguments);
  }

  get pathLst() {
    const pid = append_packed_id(this.packed_id, 'pathLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Path2DList);
  }
}

/**
 * `a:gd` custom element class.
 * 
 * Defines a "guide", corresponding to a yellow diamond-shaped handle on an autoshape.

 */
export class CT_GeomGuide extends BaseOxmlElement {
  set name(name: string) {
    const pid = append_packed_id(this.packed_id, 'name');
    py_funs.set_attr(pid, name);
  }

  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }

  set fmla(fmla: string) {
    const pid = append_packed_id(this.packed_id, 'fmla');
    py_funs.set_attr(pid, fmla);
  }

  get fmla() {
    const pid = append_packed_id(this.packed_id, 'fmla');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:avLst` custom element class.
 */
export class CT_GeomGuideList extends BaseOxmlElement {
  get gd_lst() {
    const pid = append_packed_id(this.packed_id, 'gd_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_GeomGuide);
  }
}

/**
 * `p:cNvSpPr` custom element class.
 */
export class CT_NonVisualDrawingShapeProps extends BaseOxmlElement {
  get spLocks() {
    const pid = append_packed_id(this.packed_id, 'spLocks');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_spLocks(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spLocks');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  set txBox(txBox: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'txBox');
    py_funs.set_attr(pid, txBox);
  }

  get txBox() {
    const pid = append_packed_id(this.packed_id, 'txBox');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:path` custom element class.
 */
export class CT_Path2D extends BaseOxmlElement {
  get close_lst() {
    const pid = append_packed_id(this.packed_id, 'close_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_Path2DClose);
  }

  get lnTo_lst() {
    const pid = append_packed_id(this.packed_id, 'lnTo_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_Path2DLineTo);
  }

  get moveTo_lst() {
    const pid = append_packed_id(this.packed_id, 'moveTo_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_Path2DMoveTo);
  }

  set w(w: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'w');
    py_funs.set_attr(pid, w);
  }

  get w() {
    const pid = append_packed_id(this.packed_id, 'w');
    return py_funs.get_attr(pid);
  }

  set h(h: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'h');
    py_funs.set_attr(pid, h);
  }

  get h() {
    const pid = append_packed_id(this.packed_id, 'h');
    return py_funs.get_attr(pid);
  }

  /**
   * Return a newly created `a:close` element.
   * The new `a:close` element is appended to this `a:path` element.
   */
  add_close() {
    const pid = append_packed_id(this.packed_id, 'add_close');
    return py_funs.call_method_returns_instance(pid, CT_Path2DClose, arguments);
  }

  /**
   * Return a newly created `a:lnTo` subtree with end point *(x, y)*.
   * The new `a:lnTo` element is appended to this `a:path` element.
   */

  add_lnTo(x: LengthType, y: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_lnTo');
    return py_funs.call_method_returns_instance(pid, CT_Path2DLineTo, arguments, x, y);
  }

  /**
   * Return a newly created `a:moveTo` subtree with point `(x, y)`.
   * The new `a:moveTo` element is appended to this `a:path` element.
   */
  add_moveTo(x: LengthType, y: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_lnTo');
    return py_funs.call_method_returns_instance(pid, CT_Path2DMoveTo, arguments, x, y);
  }
}

/**
 * `a:close` custom element class.
 */
export class CT_Path2DClose extends BaseOxmlElement {}

/**
 * `a:lnTo` custom element class.
 */
export class CT_Path2DLineTo extends BaseOxmlElement {
  get pt() {
    const pid = append_packed_id(this.packed_id, 'pt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_AdjPoint2D);
  }

  get_or_add_pt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'pt');
    return py_funs.call_method_returns_instance(pid, CT_AdjPoint2D, arguments, obj);
  }
}

/**
 * `a:pathLst` custom element class.
 */
export class CT_Path2DList extends BaseOxmlElement {
  get path_lst() {
    const pid = append_packed_id(this.packed_id, 'path_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_Path2D);
  }

  /**
   * Return a newly created `a:path` child element.
   */
  add_path(w: LengthType, l: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_path');
    return py_funs.call_method_returns_instance(pid, CT_Path2D, arguments, w, l);
  }
}

/**
 * `a:moveTo` custom element class.
 */
export class CT_Path2DMoveTo extends BaseOxmlElement {
  get pt() {
    const pid = append_packed_id(this.packed_id, 'pt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_AdjPoint2D);
  }

  get_or_add_pt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'pt');
    return py_funs.call_method_returns_instance(pid, CT_Path2D, arguments, obj);
  }
}

/**
 * `a:prstGeom` custom element class.
 */
export class CT_PresetGeometry2D extends BaseOxmlElement {
  get avLst() {
    const pid = append_packed_id(this.packed_id, 'avLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GeomGuideList);
  }

  get_or_add_avLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'avLst');
    return py_funs.call_method_returns_instance(pid, CT_GeomGuideList, arguments, obj);
  }

  set prst(prst: MSO_AUTO_SHAPE_TYPE) {
    const pid = append_packed_id(this.packed_id, 'prst');
    py_funs.set_attr(pid, Enum(MSO_AUTO_SHAPE_TYPE, prst));
  }

  get prst() {
    const pid = append_packed_id(this.packed_id, 'prst');
    return py_funs.get_attr(pid);
  }

  /**
   * Sequence of `a:gd` element children of `a:avLst`. Empty if none are present.
   */
  get gd_lst() {
    const pid = append_packed_id(this.packed_id, 'gd_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_GeomGuide);
  }

  /**
   * Replace any `a:gd` element children of `a:avLst` with ones forme from `guides`.
   */
  rewrite_guides(guides: [string, number][]) {
    const pid = append_packed_id(this.packed_id, 'rewrite_guides');
    return py_funs.call_method<undefined>(pid, arguments, List(guides.map((ele) => Tuple(ele))));
  }
}

/**
 * `p:sp` custom element class.
 */
export class CT_Shape extends BaseOxmlElement {
  get nvSpPr() {
    const pid = append_packed_id(this.packed_id, 'nvSpPr');
    return py_funs.get_attr_returns_instance(pid, CT_ShapeNonVisual);
  }

  get spPr() {
    const pid = append_packed_id(this.packed_id, 'spPr');
    return py_funs.get_attr_returns_instance(pid, CT_ShapeProperties);
  }

  get txBody() {
    const pid = append_packed_id(this.packed_id, 'txBody');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  get_or_add_txBody(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'txBody');
    return py_funs.call_method_returns_instance(pid, CT_TextBody, arguments, obj);
  }

  /**
   * Return a newly created `a:path` element with specified width and height.
   * Requires shape to be freeform (have custom geometry).
   */
  add_path(w: LengthType, l: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_path');
    return py_funs.call_method_returns_instance(pid, CT_Path2D, arguments, w, l);
  }

  /**
   * Return the `a:ln` grandchild element, newly added if not present.
   */
  get_or_add_ln() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_ln');
    return py_funs.call_method_returns_instance(pid, CT_LineProperties, arguments);
  }

  /**
   * True if this shape has custom geometry (is a freeform shape).
   */
  get has_custom_geometry() {
    const pid = append_packed_id(this.packed_id, 'has_custom_geometry');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * True if this shape is an auto shape (has prstGeom and not a textbox).
   */
  get is_autoshape() {
    const pid = append_packed_id(this.packed_id, 'is_autoshape');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * True if this shape is a text box (has txBox="1" attribute).
   */
  get is_textbox() {
    const pid = append_packed_id(this.packed_id, 'is_textbox');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * `a:ln` grand-child element or `undefined` if not present.
   */
  get ln() {
    const pid = append_packed_id(this.packed_id, 'ln');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LineProperties);
  }

  /**
   * Value of `prst` attribute of `a:prstGeom` or `undefined` if not present.
   */
  get prst() {
    const pid = append_packed_id(this.packed_id, 'prst');
    return py_funs.get_attr<MSO_AUTO_SHAPE_TYPE | undefined>(pid);
  }

  /**
   * Reference to `a:prstGeom` child element or `undefined` if not present.
   */
  get prstGeom() {
    const pid = append_packed_id(this.packed_id, 'prstGeom');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PresetGeometry2D);
  }
}

/**
 * `p:nvSpPr` custom element class.
 */
export class CT_ShapeNonVisual extends BaseOxmlElement {
  get cNvPr() {
    const pid = append_packed_id(this.packed_id, 'cNvPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualDrawingProps);
  }

  get cNvSpPr() {
    const pid = append_packed_id(this.packed_id, 'cNvSpPr');
    return py_funs.get_attr_returns_instance(pid, CT_NonVisualDrawingShapeProps);
  }

  get nvPr() {
    const pid = append_packed_id(this.packed_id, 'nvPr');
    return py_funs.get_attr_returns_instance(pid, CT_ApplicationNonVisualDrawingProps);
  }
}
