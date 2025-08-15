import { append_packed_id, Enum, type LengthType, py_funs } from '../../../bridge';
import { PP_PLACEHOLDER } from '../../enum/shapes';
import { CT_Hyperlink } from '../action';
import {
  CT_BlipFillProperties,
  CT_GradientFillProperties,
  CT_GroupFillProperties,
  CT_NoFillProperties,
  CT_PatternFillProperties,
  CT_SolidColorFillProperties
} from '../dml/fill';
import { CT_PresetLineDashProperties } from '../dml/line';
import { _Element } from '../lxml';
import { CT_TextBody } from '../text';
import { BaseOxmlElement } from '../xmlchemy';
import { CT_CustomGeometry2D, CT_PresetGeometry2D } from './autoshape';

/**
 * Provides common behavior for shape element classes like CT_Shape, CT_Picture, etc.
 */
export class BaseShapeElement extends BaseOxmlElement {
  /**
   * Width of the shape (extent along x-axis).
   */
  set cx(cx: LengthType) {
    const pid = append_packed_id(this.packed_id, 'cx');
    py_funs.set_attr(pid, cx);
  }
  get cx() {
    const pid = append_packed_id(this.packed_id, 'cx');
    return py_funs.get_attr(pid);
  }

  /**
   * Height of the shape (extent along y-axis).
   */
  set cy(cy: LengthType) {
    const pid = append_packed_id(this.packed_id, 'cy');
    py_funs.set_attr(pid, cy);
  }
  get cy() {
    const pid = append_packed_id(this.packed_id, 'cy');
    return py_funs.get_attr(pid);
  }

  /**
   * Boolean indicating if shape is flipped horizontally.
   */
  set flipH(flipH: boolean) {
    const pid = append_packed_id(this.packed_id, 'flipH');
    py_funs.set_attr(pid, flipH);
  }
  get flipH() {
    const pid = append_packed_id(this.packed_id, 'flipH');
    return py_funs.get_attr(pid);
  }

  /**
   * Boolean indicating if shape is flipped vertically.
   */
  set flipV(flipV: boolean) {
    const pid = append_packed_id(this.packed_id, 'flipV');
    py_funs.set_attr(pid, flipV);
  }
  get flipV() {
    const pid = append_packed_id(this.packed_id, 'flipV');
    return py_funs.get_attr(pid);
  }

  /**
   * Return the `a:xfrm` grandchild element, newly-added if not present.
   */
  get_or_add_xfrm() {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xfrm');
    return py_funs.call_method_returns_instance(pid, CT_Transform2D, arguments);
  }

  /**
   * True if this shape element has a `p:ph` descendant (is a placeholder).
   */
  get has_ph_elm() {
    const pid = append_packed_id(this.packed_id, 'has_ph_elm');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * The `p:ph` descendant element if present, otherwise undefined.
   */
  get ph() {
    const pid = append_packed_id(this.packed_id, 'ph');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Placeholder);
  }

  /**
   * Integer value of placeholder idx attribute.
   * Throws error if shape is not a placeholder.
   */
  get ph_idx() {
    const pid = append_packed_id(this.packed_id, 'ph_idx');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Placeholder orientation (e.g. 'vert').
   * Throws error if shape is not a placeholder.
   */
  get ph_orient() {
    const pid = append_packed_id(this.packed_id, 'ph_orient');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * Placeholder size (e.g. 'half').
   * Throws error if shape is not a placeholder.
   */
  get ph_sz() {
    const pid = append_packed_id(this.packed_id, 'ph_sz');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * Placeholder type (e.g. 'title').
   * Throws error if shape is not a placeholder.
   */
  get ph_type() {
    const pid = append_packed_id(this.packed_id, 'ph_sz');
    return py_funs.get_attr<PP_PLACEHOLDER>(pid);
  }

  /**
   * Float representing degrees shape is rotated clockwise.
   */
  set rot(rot: number) {
    const pid = append_packed_id(this.packed_id, 'rot');
    py_funs.set_attr(pid, rot);
  }
  get rot() {
    const pid = append_packed_id(this.packed_id, 'rot');
    return py_funs.get_attr(pid);
  }

  /**
   * Integer id of this shape.
   */
  get shape_id() {
    const pid = append_packed_id(this.packed_id, 'shape_id');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Name of this shape.
   */
  get shape_name() {
    const pid = append_packed_id(this.packed_id, 'shape_name');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * Child `p:txBody` element, undefined if not present.
   */
  get txBody() {
    const pid = append_packed_id(this.packed_id, 'txBody');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextBody);
  }

  /**
   * X-coordinate of shape position.
   */
  set x(x: LengthType) {
    const pid = append_packed_id(this.packed_id, 'x');
    py_funs.set_attr(pid, x);
  }
  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr(pid);
  }

  /**
   * The `a:xfrm` grandchild element or undefined if not found.
   */
  get xfrm() {
    const pid = append_packed_id(this.packed_id, 'xfrm');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Transform2D);
  }

  /**
   * Y-coordinate of shape position.
   */
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
 * `p:nvPr` element.
 */
export class CT_ApplicationNonVisualDrawingProps extends BaseOxmlElement {
  get ph() {
    const pid = append_packed_id(this.packed_id, 'ph');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Placeholder);
  }

  get_or_add_ph(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'ph');
    return py_funs.call_method_returns_instance(pid, CT_Placeholder, arguments, obj);
  }
}

export const LineFillPropertiesFactory = (cls: string) => {
  const clsList = {
    CT_NoFillProperties: CT_NoFillProperties,
    CT_SolidColorFillProperties: CT_SolidColorFillProperties,
    CT_GradientFillProperties: CT_GradientFillProperties,
    CT_PatternFillProperties: CT_PatternFillProperties
  };

  return clsList[cls as keyof typeof clsList];
};

/**
 * Custom element class for <a:ln> element
 */
export class CT_LineProperties extends BaseOxmlElement {
  get eg_lineFillProperties() {
    const pid = append_packed_id(this.packed_id, 'eg_lineFillProperties');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, LineFillPropertiesFactory);
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

  get pattFill() {
    const pid = append_packed_id(this.packed_id, 'pattFill');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PatternFillProperties);
  }

  get_or_change_to_pattFill(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_pattFill');
    return py_funs.call_method_returns_instance(pid, CT_PatternFillProperties, arguments, obj);
  }

  get prstDash() {
    const pid = append_packed_id(this.packed_id, 'prstDash');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PresetLineDashProperties);
  }

  get_or_add_prstDash(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'prstDash');
    return py_funs.call_method_returns_instance(pid, CT_PresetLineDashProperties, arguments, obj);
  }

  get custDash() {
    const pid = append_packed_id(this.packed_id, 'custDash');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_custDash(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'custDash');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  set w(w: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'w');
    py_funs.set_attr(pid, w);
  }

  get w() {
    const pid = append_packed_id(this.packed_id, 'w');
    return py_funs.get_attr(pid);
  }

  /**
   * Required to fulfill the interface used by dml.fill.
   */
  get eg_fillProperties() {
    const pid = append_packed_id(this.packed_id, 'eg_fillProperties');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, LineFillPropertiesFactory);
  }

  /**
   * Value of `val` attribute of `a:prstDash` child.
   * Returns `undefined` if not present.
   */
  set prstDash_val(prstDash_val: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'prstDash_val');
    py_funs.set_attr(pid, prstDash_val);
  }
  get prstDash_val() {
    const pid = append_packed_id(this.packed_id, 'prstDash_val');
    return py_funs.get_attr(pid);
  }
}

/**
 * `p:cNvPr` custom element class.
 */
export class CT_NonVisualDrawingProps extends BaseOxmlElement {
  get hlinkClick() {
    const pid = append_packed_id(this.packed_id, 'hlinkClick');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Hyperlink);
  }

  get_or_add_hlinkClick(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'hlinkClick');
    return py_funs.call_method_returns_instance(pid, CT_Hyperlink, arguments, obj);
  }

  get hlinkHover() {
    const pid = append_packed_id(this.packed_id, 'hlinkHover');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Hyperlink);
  }

  get_or_add_hlinkHover(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'hlinkHover');
    return py_funs.call_method_returns_instance(pid, CT_Hyperlink, arguments, obj);
  }

  set id(id: number) {
    const pid = append_packed_id(this.packed_id, 'id');
    py_funs.set_attr(pid, id);
  }

  get id() {
    const pid = append_packed_id(this.packed_id, 'id');
    return py_funs.get_attr(pid);
  }

  set name(name: string) {
    const pid = append_packed_id(this.packed_id, 'name');
    py_funs.set_attr(pid, name);
  }

  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }
}

/**
 * `p:ph` custom element class.
 */
export class CT_Placeholder extends BaseOxmlElement {
  set type(type: PP_PLACEHOLDER) {
    const pid = append_packed_id(this.packed_id, 'type');
    py_funs.set_attr(pid, Enum(PP_PLACEHOLDER, type));
  }

  get type() {
    const pid = append_packed_id(this.packed_id, 'type');
    return py_funs.get_attr(pid);
  }

  set orient(orient: string) {
    const pid = append_packed_id(this.packed_id, 'orient');
    py_funs.set_attr(pid, orient);
  }

  get orient() {
    const pid = append_packed_id(this.packed_id, 'orient');
    return py_funs.get_attr(pid);
  }

  set sz(sz: string) {
    const pid = append_packed_id(this.packed_id, 'sz');
    py_funs.set_attr(pid, sz);
  }

  get sz() {
    const pid = append_packed_id(this.packed_id, 'sz');
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
 * Custom element class for <a:off> element.
 */
export class CT_Point2D extends BaseOxmlElement {
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
 * Custom element class for <a:ext> element.
 */
export class CT_PositiveSize2D extends BaseOxmlElement {
  set cx(cx: LengthType) {
    const pid = append_packed_id(this.packed_id, 'cx');
    py_funs.set_attr(pid, cx);
  }

  get cx() {
    const pid = append_packed_id(this.packed_id, 'cx');
    return py_funs.get_attr(pid);
  }

  set cy(cy: LengthType) {
    const pid = append_packed_id(this.packed_id, 'cy');
    py_funs.set_attr(pid, cy);
  }

  get cy() {
    const pid = append_packed_id(this.packed_id, 'cy');
    return py_funs.get_attr(pid);
  }
}

export const FillPropertiesFactory = (cls: string) => {
  const clsList = {
    CT_NoFillProperties: CT_NoFillProperties,
    CT_SolidColorFillProperties: CT_SolidColorFillProperties,
    CT_GradientFillProperties: CT_GradientFillProperties,
    CT_BlipFillProperties: CT_BlipFillProperties,
    CT_PatternFillProperties: CT_PatternFillProperties,
    CT_GroupFillProperties: CT_GroupFillProperties
  };

  return clsList[cls as keyof typeof clsList];
};

/**
 * Custom element class for `p:spPr` element.
 * Shared by `p:sp`, `p:cxnSp`, and `p:pic` elements.
 */
export class CT_ShapeProperties extends BaseOxmlElement {
  get xfrm() {
    const pid = append_packed_id(this.packed_id, 'xfrm');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Transform2D);
  }

  get_or_add_xfrm(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_xfrm');
    return py_funs.call_method_returns_instance(pid, CT_Transform2D, arguments, obj);
  }

  get custGeom() {
    const pid = append_packed_id(this.packed_id, 'custGeom');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_CustomGeometry2D);
  }

  get_or_add_custGeom(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_custGeom');
    return py_funs.call_method_returns_instance(pid, CT_CustomGeometry2D, arguments, obj);
  }

  get prstGeom() {
    const pid = append_packed_id(this.packed_id, 'prstGeom');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PresetGeometry2D);
  }

  get_or_add_prstGeom(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_prstGeom');
    return py_funs.call_method_returns_instance(pid, CT_PresetGeometry2D, arguments, obj);
  }

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

  get ln() {
    const pid = append_packed_id(this.packed_id, 'ln');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LineProperties);
  }

  get_or_add_ln(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_ln');
    return py_funs.call_method_returns_instance(pid, CT_LineProperties, arguments, obj);
  }

  get effectLst() {
    const pid = append_packed_id(this.packed_id, 'effectLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  /**
   * Shape width as an instance of Emu, or undefined if not present.
   */
  get cx() {
    const pid = append_packed_id(this.packed_id, 'cx');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * Shape height as an instance of Emu, or undefined if not present.
   */
  get cy() {
    const pid = append_packed_id(this.packed_id, 'cy');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * Distance between left edge of slide and left edge of shape.
   * Returns 0 if not present.
   */
  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr<number | undefined>(pid);
  }

  /**
   * Offset of top of shape from top of slide, as Emu.
   * Returns undefined if not present.
   */
  get y() {
    const pid = append_packed_id(this.packed_id, 'y');
    return py_funs.get_attr<number | undefined>(pid);
  }
}

/**
 * `a:xfrm` custom element class.
 *
 * NOTE: this is a composite including CT_GroupTransform2D, which appears
 * with the `a:xfrm` tag in a group shape (including a slide `p:spTree`).
 */
export class CT_Transform2D extends BaseOxmlElement {
  get off() {
    const pid = append_packed_id(this.packed_id, 'off');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Point2D);
  }

  get_or_add_off(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_off');
    return py_funs.call_method_returns_instance(pid, CT_Point2D, arguments, obj);
  }

  get ext() {
    const pid = append_packed_id(this.packed_id, 'ext');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PositiveSize2D);
  }

  get_or_add_ext(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'ext');
    return py_funs.call_method_returns_instance(pid, CT_PositiveSize2D, arguments, obj);
  }

  get chOff() {
    const pid = append_packed_id(this.packed_id, 'chOff');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Point2D);
  }

  get_or_add_chOff(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_chOff');
    return py_funs.call_method_returns_instance(pid, CT_Point2D, arguments, obj);
  }

  get chExt() {
    const pid = append_packed_id(this.packed_id, 'chExt');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PositiveSize2D);
  }

  get_or_add_chExt(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_chExt');
    return py_funs.call_method_returns_instance(pid, CT_PositiveSize2D, arguments, obj);
  }

  set rot(rot: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'rot');
    py_funs.set_attr(pid, rot);
  }

  get rot() {
    const pid = append_packed_id(this.packed_id, 'rot');
    return py_funs.get_attr(pid);
  }

  set flipH(flipH: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'flipH');
    py_funs.set_attr(pid, flipH);
  }

  get flipH() {
    const pid = append_packed_id(this.packed_id, 'flipH');
    return py_funs.get_attr(pid);
  }

  set flipV(flipV: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'flipV');
    py_funs.set_attr(pid, flipV);
  }

  get flipV() {
    const pid = append_packed_id(this.packed_id, 'flipV');
    return py_funs.get_attr(pid);
  }

  set x(x: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'x');
    py_funs.set_attr(pid, x);
  }
  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr(pid);
  }

  set y(y: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'y');
    py_funs.set_attr(pid, y);
  }
  get y() {
    const pid = append_packed_id(this.packed_id, 'y');
    return py_funs.get_attr(pid);
  }

  set cx(cx: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'cx');
    py_funs.set_attr(pid, cx);
  }

  get cx() {
    const pid = append_packed_id(this.packed_id, 'cx');
    return py_funs.get_attr(pid);
  }

  set cy(cy: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'cy');
    py_funs.set_attr(pid, cy);
  }
  get cy() {
    const pid = append_packed_id(this.packed_id, 'cy');
    return py_funs.get_attr(pid);
  }
}
