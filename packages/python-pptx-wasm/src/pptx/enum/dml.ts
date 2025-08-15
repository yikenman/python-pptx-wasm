import { ENUM_NAME } from '../../bridge';

export enum MSO_COLOR_TYPE {
  RGB = 1,
  SCHEME = 2,
  HSL = 101,
  PRESET = 102,
  SCRGB = 103,
  SYSTEM = 104
}
// @ts-ignore
MSO_COLOR_TYPE[ENUM_NAME] = 'MSO_COLOR_TYPE';

// Specifies the type of bitmap used for the fill of a shape.
// Alias: MSO_FILL
// MS API Name: MsoFillType
// http://msdn.microsoft.com/EN-US/library/office/ff861408.aspx

export enum MSO_FILL_TYPE {
  /**
   * The shape is transparent, such that whatever is behind the shape shows through.
   * Often this is the slide background, but if a visible shape is behind, that will show through.
   */
  BACKGROUND = 5,

  /** Shape is filled with a gradient */
  GRADIENT = 3,

  /** Shape is part of a group and should inherit the fill properties of the group. */
  GROUP = 101,

  /** Shape is filled with a pattern */
  PATTERNED = 2,

  /** Shape is filled with a bitmapped image */
  PICTURE = 6,

  /** Shape is filled with a solid color */
  SOLID = 1,

  /** Shape is filled with a texture */
  TEXTURED = 4
}
// @ts-ignore
MSO_COLOR_TYPE[ENUM_NAME] = 'MSO_COLOR_TYPE';

export const MSO_FILL = MSO_FILL_TYPE;
export type MSO_FILL = MSO_FILL_TYPE;

/**
 * Specifies the dash style for a line.
 *
 * Alias: `MSO_LINE`
 *
 * MS API name: `MsoLineDashStyle`
 *
 * https://learn.microsoft.com/en-us/office/vba/api/Office.MsoLineDashStyle
 */
export enum MSO_LINE_DASH_STYLE {
  /** Line consists of dashes only. */
  DASH = 4,

  /** Line is a dash-dot pattern. */
  DASH_DOT = 5,

  /** Line is a dash-dot-dot pattern. */
  DASH_DOT_DOT = 6,

  /** Line consists of long dashes. */
  LONG_DASH = 7,

  /** Line is a long dash-dot pattern. */
  LONG_DASH_DOT = 8,

  /** Line is made up of round dots. */
  ROUND_DOT = 3,

  /** Line is solid. */
  SOLID = 1,

  /** Line is made up of square dots. */
  SQUARE_DOT = 2,

  /** Return value only, indicating more than one dash style applies. */
  DASH_STYLE_MIXED = -2
}
// @ts-ignore
MSO_LINE_DASH_STYLE[ENUM_NAME] = 'MSO_LINE_DASH_STYLE';

export const MSO_LINE = MSO_LINE_DASH_STYLE;
export type MSO_LINE = MSO_LINE_DASH_STYLE;

// Specifies the fill pattern used in a shape.
// Alias: MSO_PATTERN
// https://learn.microsoft.com/en-us/office/vba/api/Office.MsoPatternType

export enum MSO_PATTERN_TYPE {
  /** Cross */
  CROSS = 51,

  /** Dark Downward Diagonal */
  DARK_DOWNWARD_DIAGONAL = 15,

  /** Dark Horizontal */
  DARK_HORIZONTAL = 13,

  /** Dark Upward Diagonal */
  DARK_UPWARD_DIAGONAL = 16,

  /** Dark Vertical */
  DARK_VERTICAL = 14,

  /** Dashed Downward Diagonal */
  DASHED_DOWNWARD_DIAGONAL = 28,

  /** Dashed Horizontal */
  DASHED_HORIZONTAL = 32,

  /** Dashed Upward Diagonal */
  DASHED_UPWARD_DIAGONAL = 27,

  /** Dashed Vertical */
  DASHED_VERTICAL = 31,

  /** Diagonal Brick */
  DIAGONAL_BRICK = 40,

  /** Diagonal Cross */
  DIAGONAL_CROSS = 54,

  /** Pattern Divot */
  DIVOT = 46,

  /** Dotted Diamond */
  DOTTED_DIAMOND = 24,

  /** Dotted Grid */
  DOTTED_GRID = 45,

  /** Downward Diagonal */
  DOWNWARD_DIAGONAL = 52,

  /** Horizontal */
  HORIZONTAL = 49,

  /** Horizontal Brick */
  HORIZONTAL_BRICK = 35,

  /** Large Checker Board */
  LARGE_CHECKER_BOARD = 36,

  /** Large Confetti */
  LARGE_CONFETTI = 33,

  /** Large Grid */
  LARGE_GRID = 34,

  /** Light Downward Diagonal */
  LIGHT_DOWNWARD_DIAGONAL = 21,

  /** Light Horizontal */
  LIGHT_HORIZONTAL = 19,

  /** Light Upward Diagonal */
  LIGHT_UPWARD_DIAGONAL = 22,

  /** Light Vertical */
  LIGHT_VERTICAL = 20,

  /** Narrow Horizontal */
  NARROW_HORIZONTAL = 30,

  /** Narrow Vertical */
  NARROW_VERTICAL = 29,

  /** Outlined Diamond */
  OUTLINED_DIAMOND = 41,

  /** 10% of the foreground color. */
  PERCENT_10 = 2,

  /** 20% of the foreground color. */
  PERCENT_20 = 3,

  /** 25% of the foreground color. */
  PERCENT_25 = 4,

  /** 30% of the foreground color. */
  PERCENT_30 = 5,

  /** 40% of the foreground color. */
  ERCENT_40 = 6,

  /** 5% of the foreground color. */
  PERCENT_5 = 1,

  /** 50% of the foreground color. */
  PERCENT_50 = 7,

  /** 60% of the foreground color. */
  PERCENT_60 = 8,

  /** 70% of the foreground color. */
  PERCENT_70 = 9,

  /** 75% of the foreground color. */
  PERCENT_75 = 10,

  /** 80% of the foreground color. */
  PERCENT_80 = 11,

  /** 90% of the foreground color. */
  PERCENT_90 = 12,

  /** Plaid */
  PLAID = 42,

  /** Shingle */
  SHINGLE = 47,

  /** Small Checker Board */
  SMALL_CHECKER_BOARD = 17,

  /** Small Confetti */
  SMALL_CONFETTI = 37,

  /** Small Grid */
  SMALL_GRID = 23,

  /** Solid Diamond */
  SOLID_DIAMOND = 39,

  /** Sphere */
  SPHERE = 43,

  /** Trellis */
  TRELLIS = 18,

  /** Upward Diagonal */
  UPWARD_DIAGONAL = 53,

  /** Vertical */
  VERTICAL = 50,

  /** Wave */
  WAVE = 48,

  /** Weave */
  WEAVE = 44,

  /** Wide Downward Diagonal */
  WIDE_DOWNWARD_DIAGONAL = 25,

  /** Wide Upward Diagonal */
  WIDE_UPWARD_DIAGONAL = 26,

  /** Zig Zag */
  ZIG_ZAG = 38,

  /** Mixed pattern (read-only). */
  MIXED = -2
}
// @ts-ignore
MSO_PATTERN_TYPE[ENUM_NAME] = 'MSO_PATTERN_TYPE';

export const MSO_PATTERN = MSO_PATTERN_TYPE;
export type MSO_PATTERN = MSO_PATTERN_TYPE;

export enum MSO_THEME_COLOR_INDEX {
  /**
   * Indicates the color is not a theme color.
   */
  NOT_THEME_COLOR = 0,
  /**
   * Specifies the Accent 1 theme color.
   */
  ACCENT_1 = 5,
  /**
   * Specifies the Accent 2 theme color.
   */
  ACCENT_2 = 6,
  /**
   * Specifies the Accent 3 theme color.
   */
  ACCENT_3 = 7,
  /**
   * Specifies the Accent 4 theme color.
   */
  ACCENT_4 = 8,
  /**
   * Specifies the Accent 5 theme color.
   */
  ACCENT_5 = 9,
  /**
   * Specifies the Accent 6 theme color.
   */
  ACCENT_6 = 10,
  /**
   * Specifies the Background 1 theme color.
   */
  BACKGROUND_1 = 14,
  /**
   * Specifies the Background 2 theme color.
   */
  BACKGROUND_2 = 16,
  /**
   * Specifies the Dark 1 theme color.
   */
  DARK_1 = 1,
  /**
   * Specifies the Dark 2 theme color.
   */
  DARK_2 = 3,
  /**
   * Specifies the theme color for a clicked hyperlink.
   */
  FOLLOWED_HYPERLINK = 12,
  /**
   * Specifies the theme color for a hyperlink.
   */
  HYPERLINK = 11,
  /**
   * Specifies the Light 1 theme color.
   */
  LIGHT_1 = 2,
  /**
   * Specifies the Light 2 theme color.
   */
  LIGHT_2 = 4,
  /**
   * Specifies the Text 1 theme color.
   */
  TEXT_1 = 13,
  /**
   * Specifies the Text 2 theme color.
   */
  TEXT_2 = 15,
  /**
   * Indicates multiple theme colors are used, such as in a group shape (read-only).
   */
  MIXED = -2
}
// @ts-ignore
MSO_THEME_COLOR_INDEX[ENUM_NAME] = 'MSO_THEME_COLOR_INDEX';

export const MSO_THEME_COLOR = MSO_THEME_COLOR_INDEX;
export type MSO_THEME_COLOR = MSO_THEME_COLOR_INDEX;
