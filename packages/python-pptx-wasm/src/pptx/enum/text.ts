import { ENUM_NAME } from '../../bridge';

export enum MSO_AUTO_SIZE {
  /** No automatic sizing of the shape or text will be done.

Text can freely extend beyond the horizontal and vertical edges of the shape bounding box. */
  NONE = 0,
  /** The shape height and possibly width are adjusted to fit the text.

Note this setting interacts with the TextFrame.word_wrap property setting. If word wrap is turned on, only the height of the shape will be adjusted; soft line breaks will be used to fit the text horizontally. */
  SHAPE_TO_FIT_TEXT = 1,
  /** The font size is reduced as necessary to fit the text within the shape. */
  TEXT_TO_FIT_SHAPE = 2,
  /** Return value only; indicates a combination of automatic sizing schemes are used. */
  MIXED = -2
}
// @ts-ignore
MSO_AUTO_SIZE[ENUM_NAME] = 'MSO_AUTO_SIZE';

export enum MSO_TEXT_UNDERLINE_TYPE {
  /** Specifies no underline. */
  NONE = 0,
  /** Specifies a dash underline. */
  DASH_HEAVY_LINE = 8,
  /** Specifies a dash line underline. */
  DASH_LINE = 7,
  /** Specifies a long heavy line underline. */
  DASH_LONG_HEAVY_LINE = 10,
  /** Specifies a dashed long line underline. */
  DASH_LONG_LINE = 9,
  /** Specifies a dot dash heavy line underline. */
  DOT_DASH_HEAVY_LINE = 12,
  /** Specifies a dot dash line underline. */
  DOT_DASH_LINE = 11,
  /** Specifies a dot dot dash heavy line underline. */
  DOT_DOT_DASH_HEAVY_LINE = 14,
  /** Specifies a dot dot dash line underline. */
  DOT_DOT_DASH_LINE = 13,
  /** Specifies a dotted heavy line underline. */
  DOTTED_HEAVY_LINE = 6,
  /** Specifies a dotted line underline. */
  DOTTED_LINE = 5,
  /** Specifies a double line underline. */
  DOUBLE_LINE = 3,
  /** Specifies a heavy line underline. */
  HEAVY_LINE = 4,
  /** Specifies a single line underline. */
  SINGLE_LINE = 2,
  /** Specifies a wavy double line underline. */
  WAVY_DOUBLE_LINE = 17,
  /** Specifies a wavy heavy line underline. */
  WAVY_HEAVY_LINE = 16,
  /** Specifies a wavy line underline. */
  WAVY_LINE = 15,
  /** Specifies underlining words. */
  WORDS = 1,
  /** Specifies a mix of underline types (read-only). */
  MIXED = -2
}
// @ts-ignore
MSO_TEXT_UNDERLINE_TYPE[ENUM_NAME] = 'MSO_TEXT_UNDERLINE_TYPE';

export const MSO_UNDERLINE = MSO_TEXT_UNDERLINE_TYPE;
export type MSO_UNDERLINE = MSO_TEXT_UNDERLINE_TYPE;

export enum MSO_VERTICAL_ANCHOR {
  /** Aligns text to top of text frame */
  TOP = 1,
  /** Centers text vertically */
  MIDDLE = 3,
  /** Aligns text to bottom of text frame */
  BOTTOM = 4,
  /** Return value only; indicates a combination of the other states. */
  MIXED = -2
}
// @ts-ignore
MSO_VERTICAL_ANCHOR[ENUM_NAME] = 'MSO_VERTICAL_ANCHOR';

export const MSO_ANCHOR = MSO_VERTICAL_ANCHOR;
export type MSO_ANCHOR = MSO_VERTICAL_ANCHOR;

export enum PP_PARAGRAPH_ALIGNMENT {
  /** Center align */
  CENTER = 2,
  /** Evenly distributes e.g. Japanese characters from left to right within a line */
  DISTRIBUTE = 5,
  /** Justified, i.e. each line both begins and ends at the margin.

Spacing between words is adjusted such that the line exactly fills the width of the paragraph. */
  JUSTIFY = 4,
  /** Justify using a small amount of space between words. */
  JUSTIFY_LOW = 7,
  /** Left aligned */
  LEFT = 1,
  /** Right aligned */
  RIGHT = 3,
  /** Thai distributed */
  THAI_DISTRIBUTE = 6,
  /** Multiple alignments are present in a set of paragraphs (read-only). */
  MIXED = -2
}
// @ts-ignore
PP_PARAGRAPH_ALIGNMENT[ENUM_NAME] = 'PP_PARAGRAPH_ALIGNMENT';

export const PP_ALIGN = PP_PARAGRAPH_ALIGNMENT;
export type PP_ALIGN = PP_PARAGRAPH_ALIGNMENT;
