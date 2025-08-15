import { append_packed_id, Enum, type LengthType, PackedBase, py_funs } from '../../bridge';
import { ColorFormat } from '../dml/color';
import { FillFormat } from '../dml/fill';
import { MSO_LANGUAGE_ID } from '../enum/lang';
import {
  MSO_AUTO_SIZE,
  type MSO_TEXT_UNDERLINE_TYPE,
  MSO_UNDERLINE,
  MSO_VERTICAL_ANCHOR,
  PP_PARAGRAPH_ALIGNMENT
} from '../enum/text';
import { CT_RegularTextRun, CT_TextBody, CT_TextCharacterProperties, CT_TextParagraph } from '../oxml/text';
import { Subshape } from '../shapes/subshape';

/**
 * The part of a shape that contains its text.
 *
 * Not all shapes have a text frame. Corresponds to the `p:txBody` element that can
 * appear as a child element of `p:sp`. Not intended to be constructed directly.
 */
export class TextFrame extends Subshape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_TextBody);
  }

  get _txBody() {
    return this._element;
  }

  /**
   * Return new `_Paragraph` instance appended to the sequence of
   * paragraphs contained in this text frame.
   */
  add_paragraph() {
    const pid = append_packed_id(this.packed_id, 'add_paragraph');
    return py_funs.call_method_returns_instance(pid, _Paragraph, arguments);
  }

  /**
   * Resizing strategy used to fit text within this shape.
   *
   * Determines the type of automatic resizing used to fit the text of this shape within its
   * bounding box when the text would otherwise extend beyond the shape boundaries. May be
   * `undefined`, `MSO_AUTO_SIZE.NONE`, `MSO_AUTO_SIZE.SHAPE_TO_FIT_TEXT`, or
   * `MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE`.
   */
  set auto_size(auto_size: MSO_AUTO_SIZE) {
    const pid = append_packed_id(this.packed_id, 'auto_size');
    py_funs.set_attr(pid, Enum(MSO_AUTO_SIZE, auto_size));
  }
  get auto_size() {
    const pid = append_packed_id(this.packed_id, 'auto_size');
    return py_funs.get_attr<MSO_AUTO_SIZE>(pid);
  }

  /**
   * Remove all paragraphs except one empty one.
   */
  clear() {
    const pid = append_packed_id(this.packed_id, 'clear');
    return py_funs.call_method(pid, arguments);
  }

  /**
   * Fit text-frame text entirely within bounds of its shape.
   *
   * Make the text in this text frame fit entirely within the bounds of its shape by setting
   * word wrap on and applying the "best-fit" font size to all the text it contains.
   *
   * `TextFrame.auto_size` is set to `MSO_AUTO_SIZE.NONE`. The font size will not
   * be set larger than `max_size` points. If the path to a matching TrueType font is provided
   * as `font_file`, that font file will be used for the font metrics. If `font_file` is `undefined`,
   * best efforts are made to locate a font file with matching `font_family`, `bold`, and
   * `italic` installed on the current system (usually succeeds if the font is installed).
   */
  fit_text(
    font_family: string = 'Calibri',
    max_size: number = 18,
    bold: boolean = false,
    italic: boolean = false,
    font_file?: string | undefined
  ) {
    const pid = append_packed_id(this.packed_id, 'fit_text');
    return py_funs.call_method(pid, arguments, font_family, max_size, bold, italic, font_file);
  }

  /**
   * `Length` value representing the inset of text from the bottom text frame border.
   *
   * `pptx.util.Inches` provides a convenient way of setting the value, e.g.
   * `text_frame.margin_bottom = Inches(0.05)`.
   */
  set margin_bottom(margin_bottom: LengthType) {
    const pid = append_packed_id(this.packed_id, 'margin_bottom');
    py_funs.set_attr(pid, margin_bottom);
  }
  get margin_bottom() {
    const pid = append_packed_id(this.packed_id, 'margin_bottom');
    return py_funs.get_attr(pid);
  }

  /**
   * Inset of text from left text frame border as `Length` value.
   */
  set margin_left(margin_left: LengthType) {
    const pid = append_packed_id(this.packed_id, 'margin_left');
    py_funs.set_attr(pid, margin_left);
  }
  get margin_left() {
    const pid = append_packed_id(this.packed_id, 'margin_left');
    return py_funs.get_attr(pid);
  }

  /**
   * Inset of text from right text frame border as `Length` value.
   */
  set margin_right(margin_right: LengthType) {
    const pid = append_packed_id(this.packed_id, 'margin_right');
    py_funs.set_attr(pid, margin_right);
  }
  get margin_right() {
    const pid = append_packed_id(this.packed_id, 'margin_right');
    return py_funs.get_attr(pid);
  }

  /**
   * Inset of text from top text frame border as `Length` value.
   */
  set margin_top(margin_top: LengthType) {
    const pid = append_packed_id(this.packed_id, 'margin_top');
    py_funs.set_attr(pid, margin_top);
  }
  get margin_top() {
    const pid = append_packed_id(this.packed_id, 'margin_top');
    return py_funs.get_attr(pid);
  }

  /**
   * Sequence of paragraphs in this text frame.
   *
   * A text frame always contains at least one paragraph.
   */
  get paragraphs() {
    const pid = append_packed_id(this.packed_id, 'paragraphs');
    return py_funs.get_attr_returns_instance_list(pid, _Paragraph);
  }

  /**
   * All text in this text-frame as a single string.
   *
   * Read/write. The return value contains all text in this text-frame. A line-feed character
   * (`"\n"`) separates the text for each paragraph. A vertical-tab character (`"\v"`) appears
   * for each line break (aka. soft carriage-return) encountered.
   *
   * The vertical-tab character is how PowerPoint represents a soft carriage return in clipboard
   * text, which is why that encoding was chosen.
   *
   * Assignment replaces all text in the text frame. A new paragraph is added for each line-feed
   * character (`"\n"`) encountered. A line-break (soft carriage-return) is inserted for each
   * vertical-tab character (`"\v"`) encountered.
   *
   * Any control character other than newline, tab, or vertical-tab are escaped as plain-text
   * like "_x001B_" (for ESC (ASCII 32) in this example).
   */
  set text(text: string) {
    const pid = append_packed_id(this.packed_id, 'text');
    py_funs.set_attr(pid, text);
  }
  get text() {
    const pid = append_packed_id(this.packed_id, 'text');
    return py_funs.get_attr(pid);
  }

  /**
   * Represents the vertical alignment of text in this text frame.
   *
   * `undefined` indicates the effective value should be inherited from this object's style hierarchy.
   */
  set vertical_anchor(vertical_anchor: MSO_VERTICAL_ANCHOR) {
    const pid = append_packed_id(this.packed_id, 'vertical_anchor');
    py_funs.set_attr(pid, Enum(MSO_VERTICAL_ANCHOR, vertical_anchor));
  }
  get vertical_anchor() {
    const pid = append_packed_id(this.packed_id, 'vertical_anchor');
    return py_funs.get_attr(pid);
  }

  /**
   * `true` when lines of text in this shape are wrapped to fit within the shape's width.
   *
   * Read-write. Valid values are `true`, `false`, or `undefined`. `true` and `false` turn word wrap on and
   * off, respectively. Assigning `undefined` to word wrap causes any word wrap setting to be removed
   * from the text frame, causing it to inherit this setting from its style hierarchy.
   */
  set word_wrap(word_wrap: boolean) {
    const pid = append_packed_id(this.packed_id, 'word_wrap');
    py_funs.set_attr(pid, word_wrap);
  }
  get word_wrap() {
    const pid = append_packed_id(this.packed_id, 'word_wrap');
    return py_funs.get_attr(pid);
  }
}

/**
 * Character properties object, providing font size, font name, bold, italic, etc.
 *
 * Corresponds to `a:rPr` child element of a run. Also appears as `a:defRPr` and
 * `a:endParaRPr` in paragraph and `a:defRPr` in list style elements.
 */
export class Font extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_TextCharacterProperties);
  }

  get _rPr() {
    return this._element;
  }

  /**
   * Get or set boolean bold value of `Font`, e.g. `paragraph.font.bold = true`.
   *
   * If set to `undefined`, the bold setting is cleared and is inherited from an enclosing shape's
   * setting, or a setting in a style or master. Returns `undefined` if no bold attribute is present,
   * meaning the effective bold value is inherited from a master or the theme.
   */
  set bold(bold: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'bold');
    py_funs.set_attr(pid, bold);
  }
  get bold() {
    const pid = append_packed_id(this.packed_id, 'bold');
    return py_funs.get_attr(pid);
  }

  /**
   * The `ColorFormat` instance that provides access to the color settings for this font.
   */
  get color() {
    const pid = append_packed_id(this.packed_id, 'color');
    return py_funs.get_attr_returns_instance(pid, ColorFormat);
  }

  /**
   * `FillFormat` instance for this font.
   *
   * Provides access to fill properties such as fill color.
   */
  get fill() {
    const pid = append_packed_id(this.packed_id, 'fill');
    return py_funs.get_attr_returns_instance(pid, FillFormat);
  }

  /**
   * Get or set boolean italic value of `Font` instance.
   *
   * Has the same behaviors as bold with respect to `undefined` values.
   */
  set italic(italic: boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'italic');
    py_funs.set_attr(pid, italic);
  }
  get italic() {
    const pid = append_packed_id(this.packed_id, 'italic');
    return py_funs.get_attr(pid);
  }

  /**
   * Get or set the language id of this `Font` instance.
   *
   * The language id is a member of the :ref:`MsoLanguageId` enumeration. Assigning `undefined`
   * removes any language setting, the same behavior as assigning `MSO_LANGUAGE_ID.NONE`.
   */
  set language_id(language_id: MSO_LANGUAGE_ID | undefined) {
    const pid = append_packed_id(this.packed_id, 'language_id');
    py_funs.set_attr(pid, Enum(MSO_LANGUAGE_ID, language_id));
  }
  get language_id() {
    const pid = append_packed_id(this.packed_id, 'language_id');
    return py_funs.get_attr(pid);
  }

  /**
   * Get or set the typeface name for this `Font` instance.
   *
   * Causes the text it controls to appear in the named font, if a matching font is found.
   * Returns `undefined` if the typeface is currently inherited from the theme. Setting it to `undefined`
   * removes any override of the theme typeface.
   */
  set name(name: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'name');
    py_funs.set_attr(pid, name);
  }
  get name() {
    const pid = append_packed_id(this.packed_id, 'name');
    return py_funs.get_attr(pid);
  }

  /**
   * Indicates the font height in English Metric Units (EMU).
   *
   * Read/write. `undefined` indicates the font size should be inherited from its style hierarchy,
   * such as a placeholder or document defaults (usually 18pt). `Length` is a subclass of `int`
   * having properties for convenient conversion into points or other length units.
   */
  set size(size: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'size');
    py_funs.set_attr(pid, size);
  }
  get size() {
    const pid = append_packed_id(this.packed_id, 'size');
    return py_funs.get_attr(pid);
  }

  /**
   * Indicates the underline setting for this font.
   *
   * Value is `true`, `false`, `undefined`, or a member of the :ref:`MsoTextUnderlineType`
   * enumeration. `undefined` is the default and indicates the underline setting should be inherited
   * from the style hierarchy, such as from a placeholder. `true` indicates single underline.
   * `false` indicates no underline. Other settings such as double and wavy underlining are
   * indicated with members of the :ref:`MsoTextUnderlineType` enumeration.
   */
  set underline(underline: MSO_UNDERLINE | boolean | undefined) {
    const pid = append_packed_id(this.packed_id, 'underline');
    if (typeof underline === 'boolean') {
      py_funs.set_attr(pid, underline);
    } else {
      py_funs.set_attr(pid, Enum(MSO_UNDERLINE, underline));
    }
  }
  get underline() {
    const pid = append_packed_id(this.packed_id, 'underline');
    return py_funs.get_attr<boolean | MSO_TEXT_UNDERLINE_TYPE>(pid);
  }
}

/**
 * Text run hyperlink object.
 *
 * Corresponds to `a:hlinkClick` child element of the run's properties element (`a:rPr`).
 */
export class _Hyperlink extends Subshape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_TextCharacterProperties);
  }

  get _rPr() {
    return this._element;
  }

  /**
   * The URL of the hyperlink.
   *
   * Read/write. URL can be on http, https, mailto, or file scheme; others may work.
   * Returns `undefined` if no hyperlink is set.
   */
  set address(address: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'address');
    py_funs.set_attr(pid, address);
  }
  get address() {
    const pid = append_packed_id(this.packed_id, 'address');
    return py_funs.get_attr(pid);
  }
}

/**
 * Paragraph object. Not intended to be constructed directly.
 */
export class _Paragraph extends Subshape {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_TextParagraph);
  }

  get _p() {
    return this._element;
  }

  /**
   * Add line break at end of this paragraph.
   */
  add_line_break(): undefined {
    const pid = append_packed_id(this.packed_id, 'add_line_break');
    return py_funs.call_method(pid, arguments);
  }

  /**
   * Return a new run appended to the runs in this paragraph.
   */
  add_run() {
    const pid = append_packed_id(this.packed_id, 'add_run');
    return py_funs.call_method_returns_instance(pid, _Run, arguments);
  }

  /**
   * Horizontal alignment of this paragraph.
   *
   * The value `undefined` indicates the paragraph should 'inherit' its effective value from its
   * style hierarchy. Assigning `undefined` removes any explicit setting, causing its inherited
   * value to be used.
   */
  set alignment(alignment: PP_PARAGRAPH_ALIGNMENT | undefined) {
    const pid = append_packed_id(this.packed_id, 'alignment');
    py_funs.set_attr(pid, Enum(PP_PARAGRAPH_ALIGNMENT, alignment));
  }
  get alignment() {
    const pid = append_packed_id(this.packed_id, 'alignment');
    return py_funs.get_attr(pid);
  }

  /**
   * Remove all content from this paragraph.
   *
   * Paragraph properties are preserved. Content includes runs, line breaks, and fields.
   */
  clear() {
    const pid = append_packed_id(this.packed_id, 'clear');
    py_funs.call_method(pid, arguments);
    return this;
  }

  /**
   * `Font` object containing default character properties for the runs in this paragraph.
   *
   * These character properties override default properties inherited from parent objects such
   * as the text frame the paragraph is contained in and they may be overridden by character
   * properties set at the run level.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Indentation level of this paragraph.
   *
   * Read-write. Integer in range 0..8 inclusive. 0 represents a top-level paragraph and is the
   * default value. Indentation level is most commonly encountered in a bulleted list, as is
   * found on a word bullet slide.
   */
  set level(level: number) {
    const pid = append_packed_id(this.packed_id, 'level');
    py_funs.set_attr(pid, level);
  }
  get level() {
    const pid = append_packed_id(this.packed_id, 'level');
    return py_funs.get_attr(pid);
  }

  /**
   * The space between baselines in successive lines of this paragraph.
   *
   * A value of `undefined` indicates no explicit value is assigned and its effective value is
   * inherited from the paragraph's style hierarchy. A numeric value, e.g. `2` or `1.5`,
   * indicates spacing is applied in multiples of line heights. A `Length` value such as
   * `Pt(12)` indicates spacing is a fixed height. The `Pt` value class is a convenient way to
   * apply line spacing in units of points.
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
   * Sequence of runs in this paragraph.
   */
  get runs() {
    const pid = append_packed_id(this.packed_id, 'runs');
    return py_funs.get_attr_returns_instance_list(pid, _Run);
  }

  /**
   * The spacing to appear between this paragraph and the subsequent paragraph.
   *
   * A value of `undefined` indicates no explicit value is assigned and its effective value is
   * inherited from the paragraph's style hierarchy. `Length` objects provide convenience
   * properties, such as `.pt` and `.inches`, that allow easy conversion to various length
   * units.
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
   * The spacing to appear between this paragraph and the prior paragraph.
   *
   * A value of `undefined` indicates no explicit value is assigned and its effective value is
   * inherited from the paragraph's style hierarchy. `Length` objects provide convenience
   * properties, such as `.pt` and `.cm`, that allow easy conversion to various length units.
   */
  set space_before(space_before: LengthType | undefined) {
    const pid = append_packed_id(this.packed_id, 'space_before');
    py_funs.set_attr(pid, space_before);
  }
  get space_before() {
    const pid = append_packed_id(this.packed_id, 'space_before');
    return py_funs.get_attr(pid);
  }

  /**
   * Text of paragraph as a single string.
   *
   * Read/write. This value is formed by concatenating the text in each run and field making up
   * the paragraph, adding a vertical-tab character (`"\\v"`) for each line-break element
   * (`<a:br>`, soft carriage-return) encountered.
   *
   * While the encoding of line-breaks as a vertical tab might be surprising at first, doing so
   * is consistent with PowerPoint's clipboard copy behavior and allows a line-break to be
   * distinguished from a paragraph boundary within the str return value.
   *
   * Assignment causes all content in the paragraph to be replaced. Each vertical-tab character
   * (`"\\v"`) in the assigned str is translated to a line-break, as is each line-feed
   * character (`"\\n"`). Contrast behavior of line-feed character in `TextFrame.text` setter.
   * If line-feed characters are intended to produce new paragraphs, use `TextFrame.text`
   * instead. Any other control characters in the assigned string are escaped as a hex
   * representation like "_x001B_" (for ESC (ASCII 27) in this example).
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
 * Text run object. Corresponds to `a:r` child element in a paragraph.
 */
export class _Run extends Subshape {
  get _r() {
    const pid = append_packed_id(this.packed_id, '_r');
    return py_funs.get_attr_returns_instance(pid, CT_RegularTextRun);
  }

  /**
   * `Font` instance containing run-level character properties for the text in this run.
   *
   * Character properties can be and perhaps most often are inherited from parent objects such
   * as the paragraph and slide layout the run is contained in. Only those specifically
   * overridden at the run level are contained in the font object.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Proxy for any `a:hlinkClick` element under the run properties element.
   *
   * Created on demand, the hyperlink object is available whether an `a:hlinkClick` element is
   * present or not, and creates or deletes that element as appropriate in response to actions
   * on its methods and attributes.
   */
  get hyperlink() {
    const pid = append_packed_id(this.packed_id, 'hyperlink');
    return py_funs.get_attr_returns_instance(pid, _Hyperlink);
  }

  /**
   * Read/write. A unicode string containing the text in this run.
   *
   * Assignment replaces all text in the run. The assigned value can be a 7-bit ASCII
   * string, a UTF-8 encoded 8-bit string, or unicode. String values are converted to
   * unicode assuming UTF-8 encoding.
   *
   * Any other control characters in the assigned string other than tab or newline
   * are escaped as a hex representation. For example, ESC (ASCII 27) is escaped as
   * "_x001B_". Contrast the behavior of `TextFrame.text` and `_Paragraph.text` with
   * respect to line-feed and vertical-tab characters.
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
