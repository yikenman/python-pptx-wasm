import { append_packed_id, Enum, type LengthType, py_funs } from '../../bridge';
import { MSO_LANGUAGE_ID } from '../enum/lang';
import { MSO_AUTO_SIZE, MSO_TEXT_UNDERLINE_TYPE, MSO_VERTICAL_ANCHOR, PP_PARAGRAPH_ALIGNMENT } from '../enum/text';
import { CT_Hyperlink } from './action';
import {
  CT_BlipFillProperties,
  CT_GradientFillProperties,
  CT_GroupFillProperties,
  CT_NoFillProperties,
  CT_PatternFillProperties,
  CT_SolidColorFillProperties
} from './dml/fill';
import { FillPropertiesFactory } from './shapes/shared';
import { BaseOxmlElement } from './xmlchemy';

/**
 * `a:r` custom element class representing a text run.
 */
export class CT_RegularTextRun extends BaseOxmlElement {
  get rPr() {
    const pid = append_packed_id(this.packed_id, 'rPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextCharacterProperties);
  }

  get_or_add_rPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_rPr');
    return py_funs.call_method_returns_instance(pid, CT_TextCharacterProperties, arguments, obj);
  }

  get t() {
    const pid = append_packed_id(this.packed_id, 't');
    return py_funs.get_attr_returns_instance(pid, BaseOxmlElement);
  }

  /**
   * Get/set the text content of this run.
   * Handles control character escaping automatically.
   */
  set text(text: string) {
    const pid = append_packed_id(this.packed_id, 'text');
    py_funs.set_attr(pid, text);
  }
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr(pid);
  }
}

/**
 * `p:txBody` custom element class for text content containers.
 * Also used for `c:txPr` in charts and other elements.
 */
export class CT_TextBody extends BaseOxmlElement {
  get bodyPr() {
    const pid = append_packed_id(this.packed_id, 'bodyPr');
    return py_funs.get_attr_returns_instance(pid, CT_TextBodyProperties);
  }

  get p_lst() {
    const pid = append_packed_id(this.packed_id, 'p_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_TextParagraph);
  }

  add_p(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'add_p');
    return py_funs.call_method_returns_instance(pid, CT_TextParagraph, arguments, obj);
  }

  /**
   * Remove all paragraph children while preserving other elements.
   */
  clear_content() {
    const pid = append_packed_id(this.packed_id, 'clear_content');
    return py_funs.call_method<undefined>(pid, arguments);
  }

  /**
   * Default text character properties for first paragraph.
   */
  get defRPr() {
    const pid = append_packed_id(this.packed_id, 'defRPr');
    return py_funs.get_attr_returns_instance(pid, CT_TextCharacterProperties);
  }

  /**
   * True if contains only a single empty paragraph.
   */
  get is_empty() {
    const pid = append_packed_id(this.packed_id, 'is_empty');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * Ensure at least one empty paragraph exists (spec compliance).
   */
  unclear_content() {
    const pid = append_packed_id(this.packed_id, 'unclear_content');
    return py_funs.call_method<undefined>(pid, arguments);
  }
}

const TextAutoFitFactory = (cls: string) => {
  const clsList = {
    BaseOxmlElement: BaseOxmlElement,
    CT_TextNormalAutofit: CT_TextNormalAutofit
  } as const;

  return clsList[cls as keyof typeof clsList];
};

/**
 * `a:bodyPr` custom element class for text body properties.
 */
export class CT_TextBodyProperties extends BaseOxmlElement {
  get eg_textAutoFit() {
    const pid = append_packed_id(this.packed_id, 'eg_textAutoFit');
    return py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(pid, TextAutoFitFactory);
  }

  get noAutofit() {
    const pid = append_packed_id(this.packed_id, 'noAutofit');
    return py_funs.get_attr_returns_instance_or_undefined(pid, BaseOxmlElement);
  }

  get_or_change_to_noAutofit(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_noAutofit');
    return py_funs.call_method_returns_instance(pid, BaseOxmlElement, arguments, obj);
  }

  get normAutofit() {
    const pid = append_packed_id(this.packed_id, 'normAutofit');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextNormalAutofit);
  }

  get_or_change_to_normAutofit(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_normAutofit');
    return py_funs.call_method_returns_instance(pid, CT_TextNormalAutofit, arguments, obj);
  }

  get spAutoFit() {
    const pid = append_packed_id(this.packed_id, 'spAutoFit');
    return py_funs.get_attr_returns_instance_or_undefined(pid, BaseOxmlElement);
  }

  get_or_change_to_spAutoFit(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_change_to_spAutoFit');
    return py_funs.call_method_returns_instance(pid, BaseOxmlElement, arguments, obj);
  }

  set lIns(lIns: LengthType) {
    const pid = append_packed_id(this.packed_id, 'lIns');
    py_funs.set_attr(pid, lIns);
  }

  get lIns() {
    const pid = append_packed_id(this.packed_id, 'lIns');
    return py_funs.get_attr(pid);
  }

  set tIns(tIns: LengthType) {
    const pid = append_packed_id(this.packed_id, 'tIns');
    py_funs.set_attr(pid, tIns);
  }

  get tIns() {
    const pid = append_packed_id(this.packed_id, 'tIns');
    return py_funs.get_attr(pid);
  }

  set rIns(rIns: LengthType) {
    const pid = append_packed_id(this.packed_id, 'rIns');
    py_funs.set_attr(pid, rIns);
  }

  get rIns() {
    const pid = append_packed_id(this.packed_id, 'rIns');
    return py_funs.get_attr(pid);
  }

  set bIns(bIns: LengthType) {
    const pid = append_packed_id(this.packed_id, 'bIns');
    py_funs.set_attr(pid, bIns);
  }

  get bIns() {
    const pid = append_packed_id(this.packed_id, 'bIns');
    return py_funs.get_attr(pid);
  }

  /**
   * The autofit setting for the text frame, a member of the `MSO_AUTO_SIZE` enumeration.
   */
  set anchor(anchor: MSO_VERTICAL_ANCHOR | undefined) {
    const pid = append_packed_id(this.packed_id, 'anchor');
    py_funs.set_attr(pid, Enum(MSO_VERTICAL_ANCHOR, anchor));
  }
  get anchor() {
    const pid = append_packed_id(this.packed_id, 'anchor');
    return py_funs.get_attr(pid);
  }

  set wrap(wrap: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'wrap');
    py_funs.set_attr(pid, wrap);
  }

  get wrap() {
    const pid = append_packed_id(this.packed_id, 'wrap');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set text autofit behavior using MSO_AUTO_SIZE enum values:
   * - NONE: No autofit (a:noAutofit)
   * - TEXT_TO_FIT_SHAPE: Normal autofit (a:normAutofit)
   * - SHAPE_TO_FIT_TEXT: Shape autofit (a:spAutoFit)
   * - null: No setting specified
   */
  set autofit(autofit: MSO_AUTO_SIZE | undefined) {
    const pid = append_packed_id(this.packed_id, 'autofit');
    py_funs.set_attr(pid, Enum(MSO_AUTO_SIZE, autofit));
  }

  get autofit() {
    const pid = append_packed_id(this.packed_id, 'autofit');
    return py_funs.get_attr(pid);
  }
}

/**
 * Custom element class for `a:rPr`, `a:defRPr`, and `a:endParaRPr`.
 * 'rPr' is short for 'run properties', and it corresponds to the `Font` proxy class.
 */
export class CT_TextCharacterProperties extends BaseOxmlElement {
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

  get latin() {
    const pid = append_packed_id(this.packed_id, 'latin');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextFont);
  }

  get_or_add_latin(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_latin');
    return py_funs.call_method_returns_instance(pid, CT_TextFont, arguments, obj);
  }

  get hlinkClick() {
    const pid = append_packed_id(this.packed_id, 'hlinkClick');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_Hyperlink);
  }

  get_or_add_hlinkClick(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_hlinkClick');
    return py_funs.call_method_returns_instance(pid, CT_Hyperlink, arguments, obj);
  }

  set lang(lang: MSO_LANGUAGE_ID | undefined) {
    const pid = append_packed_id(this.packed_id, 'lang');
    py_funs.set_attr(pid, Enum(MSO_LANGUAGE_ID, lang));
  }

  get lang() {
    const pid = append_packed_id(this.packed_id, 'lang');
    return py_funs.get_attr(pid);
  }

  set sz(sz: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'sz');
    py_funs.set_attr(pid, sz);
  }

  get sz() {
    const pid = append_packed_id(this.packed_id, 'sz');
    return py_funs.get_attr(pid);
  }

  set b(b: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'b');
    py_funs.set_attr(pid, b);
  }

  get b() {
    const pid = append_packed_id(this.packed_id, 'b');
    return py_funs.get_attr(pid);
  }

  set i(i: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'i');
    py_funs.set_attr(pid, i);
  }

  get i() {
    const pid = append_packed_id(this.packed_id, 'i');
    return py_funs.get_attr(pid);
  }

  set u(u: MSO_TEXT_UNDERLINE_TYPE | undefined) {
    const pid = append_packed_id(this.packed_id, 'u');
    py_funs.set_attr(pid, Enum(MSO_TEXT_UNDERLINE_TYPE, u));
  }

  get u() {
    const pid = append_packed_id(this.packed_id, 'u');
    return py_funs.get_attr(pid);
  }

  /**
   * Add an `a:hlinkClick` child element with r:id attribute set to `rId`.
   */
  add_hlinkClick(rId: string) {
    const pid = append_packed_id(this.packed_id, 'add_hlinkClick');
    return py_funs.call_method_returns_instance(pid, CT_Hyperlink, arguments, rId);
  }
}

/**
 * `a:fld` field element, for either a slide number or date field.
 */
export class CT_TextField extends BaseOxmlElement {
  get rPr() {
    const pid = append_packed_id(this.packed_id, 'rPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextCharacterProperties);
  }

  get_or_add_rPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_rPr');
    return py_funs.call_method_returns_instance(pid, CT_TextCharacterProperties, arguments, obj);
  }

  get t() {
    const pid = append_packed_id(this.packed_id, 't');
    return py_funs.get_attr_returns_instance_or_undefined(pid, BaseOxmlElement);
  }

  get_or_add_t(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_t');
    return py_funs.call_method_returns_instance(pid, BaseOxmlElement, arguments, obj);
  }

  /**
   * The text of the `a:t` child element.
   */
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * Custom element class for `a:latin`, `a:ea`, `a:cs`, and `a:sym`.
 *
 * These occur as child elements of CT_TextCharacterProperties, e.g. `a:rPr`.
 */
export class CT_TextFont extends BaseOxmlElement {
  set typeface(typeface: string) {
    const pid = append_packed_id(this.packed_id, 'typeface');
    py_funs.set_attr(pid, typeface);
  }

  get typeface() {
    const pid = append_packed_id(this.packed_id, 'typeface');
    return py_funs.get_attr(pid);
  }
}

/**
 * `a:br` line break element
 */
export class CT_TextLineBreak extends BaseOxmlElement {
  get rPr() {
    const pid = append_packed_id(this.packed_id, 'rPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextCharacterProperties);
  }

  get_or_add_rPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_rPr');
    return py_funs.call_method_returns_instance(pid, CT_TextCharacterProperties, arguments, obj);
  }

  /**
   * Unconditionally a single vertical-tab character.
   *
   * A line break element can contain no text other than the implicit line feed it
   * represents.
   */
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * `a:normAutofit` element specifying fit text to shape font reduction, etc.
 */
export class CT_TextNormalAutofit extends BaseOxmlElement {
  set fontScale(fontScale: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'fontScale');
    py_funs.set_attr(pid, fontScale);
  }

  get fontScale() {
    const pid = append_packed_id(this.packed_id, 'fontScale');
    return py_funs.get_attr(pid);
  }
}

const ContentChildrenFactory = (cls: string) => {
  const clsList = {
    CT_RegularTextRun: CT_RegularTextRun,
    CT_TextLineBreak: CT_TextLineBreak,
    CT_TextField: CT_TextField
  } as const;

  return clsList[cls as keyof typeof clsList];
};

/**
 * `a:p` custom element class
 */
export class CT_TextParagraph extends BaseOxmlElement {
  get pPr() {
    const pid = append_packed_id(this.packed_id, 'pPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextParagraphProperties);
  }

  get_or_add_pPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_pPr');
    return py_funs.call_method_returns_instance(pid, CT_TextParagraphProperties, arguments, obj);
  }

  get r_lst() {
    const pid = append_packed_id(this.packed_id, 'r_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_RegularTextRun);
  }

  get br_lst() {
    const pid = append_packed_id(this.packed_id, 'br_lst');
    return py_funs.get_attr_returns_instance_list(pid, CT_TextLineBreak);
  }

  get endParaRPr() {
    const pid = append_packed_id(this.packed_id, 'endParaRPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextCharacterProperties);
  }

  get_or_add_endParaRPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_endParaRPr');
    return py_funs.call_method_returns_instance(pid, CT_TextCharacterProperties, arguments, obj);
  }

  /**
   * Return a newly appended `a:br` element.
   */
  add_br() {
    const pid = append_packed_id(this.packed_id, 'add_br');
    return py_funs.call_method_returns_instance(pid, CT_TextLineBreak, arguments);
  }

  /**
   * Return a newly appended `a:r` element.
   */
  add_r(text?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_r');
    return py_funs.call_method_returns_instance(pid, CT_RegularTextRun, arguments, text);
  }

  /**
   * Append `a:r` and `a:br` elements to `p` based on `text`.
   *
   * Any `\n` or `\v` (vertical-tab) characters in `text` delimit `a:r` (run) elements and
   * themselves are translated to `a:br` (line-break) elements. The vertical-tab character
   * appears in clipboard text from PowerPoint at "soft" line-breaks (new-line, but not new
   * paragraph).
   */
  append_text(text: string) {
    const pid = append_packed_id(this.packed_id, 'append_text');
    return py_funs.call_method<undefined>(pid, arguments, text);
  }

  /**
   * Sequence containing text-container child elements of this `a:p` element.
   *
   * These include `a:r`, `a:br`, and `a:fld`.
   */
  get content_children() {
    const pid = append_packed_id(this.packed_id, 'content_children');
    return py_funs.call_method_returns_instance_list_from_instance_factory(pid, ContentChildrenFactory, arguments);
  }

  /**
   * str text contained in this paragraph.
   */
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * `a:pPr` custom element class.
 */
export class CT_TextParagraphProperties extends BaseOxmlElement {
  get lnSpc() {
    const pid = append_packed_id(this.packed_id, 'lnSpc');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextSpacing);
  }

  get_or_add_lnSpc(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lnSpc');
    return py_funs.call_method_returns_instance(pid, CT_TextSpacing, arguments, obj);
  }

  get spcBef() {
    const pid = append_packed_id(this.packed_id, 'spcBef');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextSpacing);
  }

  get_or_add_spcBef(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spcBef');
    return py_funs.call_method_returns_instance(pid, CT_TextSpacing, arguments, obj);
  }

  get spcAft() {
    const pid = append_packed_id(this.packed_id, 'spcAft');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextSpacing);
  }

  get_or_add_spcAft(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spcAft');
    return py_funs.call_method_returns_instance(pid, CT_TextSpacing, arguments, obj);
  }

  get defRPr() {
    const pid = append_packed_id(this.packed_id, 'defRPr');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextCharacterProperties);
  }

  get_or_add_defRPr(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_defRPr');
    return py_funs.call_method_returns_instance(pid, CT_TextCharacterProperties, arguments, obj);
  }

  set lvl(lvl: number) {
    const pid = append_packed_id(this.packed_id, 'lvl');
    py_funs.set_attr(pid, lvl);
  }

  get lvl() {
    const pid = append_packed_id(this.packed_id, 'lvl');
    return py_funs.get_attr(pid);
  }

  set algn(algn: PP_PARAGRAPH_ALIGNMENT | undefined) {
    const pid = append_packed_id(this.packed_id, 'algn');
    py_funs.set_attr(pid, Enum(PP_PARAGRAPH_ALIGNMENT, algn));
  }

  get algn() {
    const pid = append_packed_id(this.packed_id, 'algn');
    return py_funs.get_attr(pid);
  }

  /**
   * The spacing between baselines of successive lines in this paragraph.
   *
   * A float value indicates a number of lines. A `Length` value indicates a fixed spacing.
   * Value is contained in `./a:lnSpc/a:spcPts/@val` or `./a:lnSpc/a:spcPct/@val`. Value is
   * `None` if no element is present.
   */
  set line_spacing(line_spacing: LengthType | number | undefined) {
    const pid = append_packed_id(this.packed_id, 'line_spacing');
    py_funs.set_attr(pid, line_spacing);
  }
  get line_spacing() {
    const pid = append_packed_id(this.packed_id, 'line_spacing');
    return py_funs.get_attr(pid);
  }

  /**
   * The EMU equivalent of the centipoints value in `./a:spcAft/a:spcPts/@val`.
   */
  set space_after(space_after: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'space_after');
    py_funs.set_attr(pid, space_after);
  }
  get space_after() {
    const pid = append_packed_id(this.packed_id, 'space_after');
    return py_funs.get_attr(pid);
  }

  /**
   * The EMU equivalent of the centipoints value in `./a:spcBef/a:spcPts/@val`.
   */
  set space_before(space_before: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'space_before');
    py_funs.set_attr(pid, space_before);
  }
  get space_before() {
    const pid = append_packed_id(this.packed_id, 'space_before');
    return py_funs.get_attr(pid);
  }
}

/**
 * Used for `a:lnSpc`, `a:spcBef`, and `a:spcAft` elements.
 */
export class CT_TextSpacing extends BaseOxmlElement {
  get spcPct() {
    const pid = append_packed_id(this.packed_id, 'spcPct');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextSpacingPercent);
  }

  get_or_add_spcPct(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spcPct');
    return py_funs.call_method_returns_instance(pid, CT_TextSpacingPercent, arguments, obj);
  }

  get spcPts() {
    const pid = append_packed_id(this.packed_id, 'spcPts');
    return py_funs.get_attr_returns_instance_or_undefined(pid, CT_TextSpacingPoint);
  }

  get_or_add_spcPts(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_spcPts');
    return py_funs.call_method_returns_instance(pid, CT_TextSpacingPoint, arguments, obj);
  }

  /**
   * Set spacing to `value` lines, e.g. 1.75 lines.
   *
   * A ./a:spcPts child is removed if present.
   */
  set_spcPct(value: number) {
    const pid = append_packed_id(this.packed_id, 'set_spcPct');
    return py_funs.call_method<undefined>(pid, arguments, value);
  }

  /**
   * Set spacing to `value` points. A ./a:spcPct child is removed if present.
   */
  set_spcPts(value: LengthType) {
    const pid = append_packed_id(this.packed_id, 'set_spcPts');
    return py_funs.call_method<undefined>(pid, arguments, value);
  }
}

/**
 * `a:spcPct` element, specifying spacing in thousandths of a percent in its `val` attribute.
 */
export class CT_TextSpacingPercent extends BaseOxmlElement {
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
 * `a:spcPts` element, specifying spacing in centipoints in its `val` attribute.
 */
export class CT_TextSpacingPoint extends BaseOxmlElement {
  set val(val: LengthType) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, val);
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}
