import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { MSO_PATTERN_TYPE } from '../../enum/dml';
import { CT_Path2D } from '../shapes/autoshape';
import { BaseOxmlElement } from '../xmlchemy';
import {
  ColorChoiceFactory,
  CT_Color,
  CT_HslColor,
  CT_PresetColor,
  CT_SchemeColor,
  CT_ScRgbColor,
  CT_SRgbColor,
  CT_SystemColor
} from './color';

/**
 * <a:blip> element
 */
export class CT_Blip extends BaseOxmlElement {
  set rEmbed(rEmbed: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'rEmbed');
    py_funs.set_attr(pid, rEmbed);
  }

  get rEmbed() {
    const pid = append_packed_id(this.packed_id, 'rEmbed');
    return py_funs.get_attr(pid);
  }
}

/**
 * Custom element class for <a:blipFill> element.
 */
export class CT_BlipFillProperties extends BaseOxmlElement {
  get blip() {
    const pid = append_packed_id(this.packed_id, 'blip');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Blip);
  }

  get_or_add_blip(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_blip');
    return py_funs.call_method_returns_instance(pid, CT_Blip, arguments, obj);
  }

  get srcRect() {
    const pid = append_packed_id(this.packed_id, 'srcRect');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_RelativeRect);
  }

  get_or_add_srcRect(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_srcRect');
    return py_funs.call_method_returns_instance(pid, CT_RelativeRect, arguments, obj);
  }

  /**
   * Set `a:srcRect` child to crop according to *cropping* values.
   */
  crop(cropping: number) {
    const pid = append_packed_id(this.packed_id, 'crop');
    return py_funs.call_method<undefined>(pid, arguments, cropping);
  }
}

/**
 * `a:gradFill` custom element class.
 */
export class CT_GradientFillProperties extends BaseOxmlElement {
  get gsLst() {
    const pid = append_packed_id(this.packed_id, 'gsLst');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_GradientStopList);
  }

  get_or_add_gsLst(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_gsLst');
    return py_funs.call_method_returns_instance(pid, CT_GradientStopList, arguments, obj);
  }

  get lin() {
    const pid = append_packed_id(this.packed_id, 'lin');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_LinearShadeProperties);
  }

  get_or_add_lin(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lin');
    return py_funs.call_method_returns_instance(pid, CT_LinearShadeProperties, arguments, obj);
  }

  get path() {
    const pid = append_packed_id(this.packed_id, 'path');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Path2D);
  }

  get_or_add_path(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_path');
    return py_funs.call_method_returns_instance(pid, CT_Path2D, arguments, obj);
  }
}

/**
 * `a:gs` custom element class.
 */
export class CT_GradientStop extends BaseOxmlElement {
  get eg_colorChoice() {
    const pid = append_packed_id(this.packed_id, 'eg_colorChoice');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, ColorChoiceFactory);
  }

  get scrgbClr() {
    const pid = append_packed_id(this.packed_id, 'scrgbClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ScRgbColor);
  }

  get_or_change_to_scrgbClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_scrgbClr');
    return py_funs.call_method_returns_instance(pid, CT_ScRgbColor, arguments, obj);
  }

  get srgbClr() {
    const pid = append_packed_id(this.packed_id, 'srgbClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SRgbColor);
  }

  get_or_change_to_srgbClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_srgbClr');
    return py_funs.call_method_returns_instance(pid, CT_SRgbColor, arguments, obj);
  }

  get hslClr() {
    const pid = append_packed_id(this.packed_id, 'hslClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_HslColor);
  }

  get_or_change_to_hslClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_hslClr');
    return py_funs.call_method_returns_instance(pid, CT_HslColor, arguments, obj);
  }

  get sysClr() {
    const pid = append_packed_id(this.packed_id, 'sysClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SystemColor);
  }

  get_or_change_to_sysClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_sysClr');
    return py_funs.call_method_returns_instance(pid, CT_SystemColor, arguments, obj);
  }

  get schemeClr() {
    const pid = append_packed_id(this.packed_id, 'schemeClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SchemeColor);
  }

  get_or_change_to_schemeClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_schemeClr');
    return py_funs.call_method_returns_instance(pid, CT_SchemeColor, arguments, obj);
  }

  get prstClr() {
    const pid = append_packed_id(this.packed_id, 'prstClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PresetColor);
  }

  get_or_change_to_prstClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_prstClr');
    return py_funs.call_method_returns_instance(pid, CT_PresetColor, arguments, obj);
  }

  set pos(pos: number) {
    const pid = append_packed_id(this.packed_id, 'pos');
    py_funs.set_attr(pid, pos);
  }

  get pos() {
    const pid = append_packed_id(this.packed_id, 'pos');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:gsLst` custom element class.
 */
export class CT_GradientStopList extends BaseOxmlElement {
  get gs_lst() {
    const pid = append_packed_id(this.packed_id, 'gs_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_GradientStop);
  }

  add_gs(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'add_gs');
    return py_funs.call_method_returns_instance(pid, CT_GradientStop, arguments, obj);
  }
}

/**
 * `a:grpFill` custom element class
 */
export class CT_GroupFillProperties extends BaseOxmlElement {}

/**
 * `a:lin` custom element class
 */
export class CT_LinearShadeProperties extends BaseOxmlElement {
  set ang(ang: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'ang');
    py_funs.set_attr(pid, ang);
  }

  get ang() {
    const pid = append_packed_id(this.packed_id, 'ang');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:noFill` custom element class
 */
export class CT_NoFillProperties extends BaseOxmlElement {}

/**
 * `a:pattFill` custom element class
 */
export class CT_PatternFillProperties extends BaseOxmlElement {
  get fgClr() {
    const pid = append_packed_id(this.packed_id, 'fgClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Color);
  }

  get_or_add_fgClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_fgClr');
    return py_funs.call_method_returns_instance(pid, CT_Color, arguments, obj);
  }

  get bgClr() {
    const pid = append_packed_id(this.packed_id, 'bgClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Color);
  }

  get_or_add_bgClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_bgClr');
    return py_funs.call_method_returns_instance(pid, CT_Color, arguments, obj);
  }

  set prst(prst: MSO_PATTERN_TYPE | undefined) {
    const pid = append_packed_id(this.packed_id, 'prst');
    py_funs.set_attr(pid, Enum(MSO_PATTERN_TYPE, prst));
  }

  get prst() {
    const pid = append_packed_id(this.packed_id, 'prst');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:srcRect` element and perhaps others.
 */
export class CT_RelativeRect extends BaseOxmlElement {
  set l(l: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'l');
    py_funs.set_attr(pid, l);
  }

  get l() {
    const pid = append_packed_id(this.packed_id, 'l');
    return py_funs.get_attr(pid);
  }

  set t(t: number | undefined) {
    const pid = append_packed_id(this.packed_id, 't');
    py_funs.set_attr(pid, t);
  }

  get t() {
    const pid = append_packed_id(this.packed_id, 't');
    return py_funs.get_attr(pid);
  }

  set r(r: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'r');
    py_funs.set_attr(pid, r);
  }

  get r() {
    const pid = append_packed_id(this.packed_id, 'r');
    return py_funs.get_attr(pid);
  }

  set b(b: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'b');
    py_funs.set_attr(pid, b);
  }

  get b() {
    const pid = append_packed_id(this.packed_id, 'b');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:solidFill` custom element class.
 */
export class CT_SolidColorFillProperties extends BaseOxmlElement {
  get eg_colorChoice() {
    const pid = append_packed_id(this.packed_id, 'eg_colorChoice');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, ColorChoiceFactory);
  }

  get scrgbClr() {
    const pid = append_packed_id(this.packed_id, 'scrgbClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_ScRgbColor);
  }

  get_or_change_to_scrgbClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_scrgbClr');
    return py_funs.call_method_returns_instance(pid, CT_ScRgbColor, arguments, obj);
  }

  get srgbClr() {
    const pid = append_packed_id(this.packed_id, 'srgbClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SRgbColor);
  }

  get_or_change_to_srgbClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_srgbClr');
    return py_funs.call_method_returns_instance(pid, CT_SRgbColor, arguments, obj);
  }

  get hslClr() {
    const pid = append_packed_id(this.packed_id, 'hslClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_HslColor);
  }

  get_or_change_to_hslClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_hslClr');
    return py_funs.call_method_returns_instance(pid, CT_HslColor, arguments, obj);
  }

  get sysClr() {
    const pid = append_packed_id(this.packed_id, 'sysClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SystemColor);
  }

  get_or_change_to_sysClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_sysClr');
    return py_funs.call_method_returns_instance(pid, CT_SystemColor, arguments, obj);
  }

  get schemeClr() {
    const pid = append_packed_id(this.packed_id, 'schemeClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_SchemeColor);
  }

  get_or_change_to_schemeClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_schemeClr');
    return py_funs.call_method_returns_instance(pid, CT_SchemeColor, arguments, obj);
  }

  get prstClr() {
    const pid = append_packed_id(this.packed_id, 'prstClr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_PresetColor);
  }

  get_or_change_to_prstClr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_prstClr');
    return py_funs.call_method_returns_instance(pid, CT_PresetColor, arguments, obj);
  }
}
