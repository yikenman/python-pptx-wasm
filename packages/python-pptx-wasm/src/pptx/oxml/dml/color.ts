import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { MSO_THEME_COLOR } from '../../enum/dml';
import { BaseOxmlElement } from '../xmlchemy';

/**
 * Base class for <a:srgbClr> and <a:schemeClr> elements.
 */

export class _BaseColorElement extends BaseOxmlElement {
  get lumMod() {
    const pid = append_packed_id(this.packed_id, 'lumMod');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Percentage);
  }

  get_or_add_lumMod(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lumMod');
    return py_funs.call_method_returns_instance(pid, CT_Percentage, arguments, obj);
  }

  get lumOff() {
    const pid = append_packed_id(this.packed_id, 'lumOff');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Percentage);
  }

  get_or_add_lumOff(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lumOff');
    return py_funs.call_method_returns_instance(pid, CT_Percentage, arguments, obj);
  }

  /**
   * Return a newly added <a:lumMod> child element.
   */
  add_lumMod(value: number) {
    const pid = append_packed_id(this.packed_id, 'add_lumMod');
    return py_funs.call_method_returns_instance(pid, CT_Percentage, arguments, value);
  }

  /**
   * Return a newly added <a:lumOff> child element.
   */
  add_lumOff(value: number) {
    const pid = append_packed_id(this.packed_id, 'add_lumOff');
    return py_funs.call_method_returns_instance(pid, CT_Percentage, arguments, value);
  }

  /**
   * Return self after removing any <a:lumMod> and <a:lumOff> child
   * elements.
   */
  clear_lum() {
    const pid = append_packed_id(this.packed_id, 'clear_lum');
    py_funs.call_method(pid, arguments);
    return this;
  }
}

export const ColorChoiceFactory = (cls: string) => {
  const clsList = {
    CT_PresetColor: CT_PresetColor,
    CT_SchemeColor: CT_SchemeColor,
    CT_ScRgbColor: CT_ScRgbColor,
    CT_SRgbColor: CT_SRgbColor,
    CT_SystemColor: CT_SystemColor
  };

  return clsList[cls as keyof typeof clsList];
};

/**
 * Custom element class for `a:fgClr`, `a:bgClr` and perhaps others.
 */
export class CT_Color extends BaseOxmlElement {
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

/**
 * Custom element class for <a:hslClr> element.
 */
export class CT_HslColor extends _BaseColorElement {}

/**
 * Custom element class for <a:lumMod> and <a:lumOff> elements.
 */
export class CT_Percentage extends BaseOxmlElement {
  set val(val: number) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * Custom element class for <a:prstClr> element.
 */
export class CT_PresetColor extends _BaseColorElement {}

/**
 * Custom element class for <a:schemeClr> element.
 */
export class CT_SchemeColor extends _BaseColorElement {
  set val(val: MSO_THEME_COLOR) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(MSO_THEME_COLOR, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * Custom element class for <a:scrgbClr> element.
 */
export class CT_ScRgbColor extends _BaseColorElement {}

/**
 * Custom element class for <a:srgbClr> element.
 */
export class CT_SRgbColor extends _BaseColorElement {
  set val(val: string) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}

/**
 * Custom element class for <a:sysClr> element.
 */
export class CT_SystemColor extends _BaseColorElement {}
