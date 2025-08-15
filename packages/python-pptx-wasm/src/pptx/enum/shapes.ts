import { ENUM_NAME } from '../../bridge';

export enum MSO_AUTO_SHAPE_TYPE {
  /** Back or Previous button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_BACK_OR_PREVIOUS = 129,
  /** Beginning button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_BEGINNING = 131,
  /** Button with no default picture or text. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_CUSTOM = 125,
  /** Document button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_DOCUMENT = 134,
  /** End button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_END = 132,
  /** Forward or Next button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_FORWARD_OR_NEXT = 130,
  /** Help button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_HELP = 127,
  /** Home button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_HOME = 126,
  /** Information button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_INFORMATION = 128,
  /** Movie button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_MOVIE = 136,
  /** Return button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_RETURN = 133,
  /** Sound button. Supports mouse-click and mouse-over actions */
  ACTION_BUTTON_SOUND = 135,
  /** Arc */
  ARC = 25,
  /** Rounded Rectangular Callout */
  BALLOON = 137,
  /** Block arrow that follows a curved 90-degree angle */
  BENT_ARROW = 41,
  /** Block arrow that follows a sharp 90-degree angle. Points up by default */
  BENT_UP_ARROW = 44,
  /** Bevel */
  BEVEL = 15,
  /** Block arc */
  BLOCK_ARC = 20,
  /** Can */
  CAN = 13,
  /** Chart Plus */
  CHART_PLUS = 182,
  /** Chart Star */
  CHART_STAR = 181,
  /** Chart X */
  CHART_X = 180,
  /** Chevron */
  CHEVRON = 52,
  /** Geometric chord shape */
  CHORD = 161,
  /** Block arrow that follows a curved 180-degree angle */
  CIRCULAR_ARROW = 60,
  /** Cloud */
  CLOUD = 179,
  /** Cloud callout */
  CLOUD_CALLOUT = 108,
  /** Corner */
  CORNER = 162,
  /** Corner Tabs */
  CORNER_TABS = 169,
  /** Cross */
  CROSS = 11,
  /** Cube */
  CUBE = 14,
  /** Block arrow that curves down */
  CURVED_DOWN_ARROW = 48,
  /** Ribbon banner that curves down */
  CURVED_DOWN_RIBBON = 100,
  /** Block arrow that curves left */
  CURVED_LEFT_ARROW = 46,
  /** Block arrow that curves right */
  CURVED_RIGHT_ARROW = 45,
  /** Block arrow that curves up */
  CURVED_UP_ARROW = 47,
  /** Ribbon banner that curves up */
  CURVED_UP_RIBBON = 99,
  /** Decagon */
  DECAGON = 144,
  /** Diagonal Stripe */
  DIAGONAL_STRIPE = 141,
  /** Diamond */
  DIAMOND = 4,
  /** Dodecagon */
  DODECAGON = 146,
  /** Donut */
  DONUT = 18,
  /** Double brace */
  DOUBLE_BRACE = 27,
  /** Double bracket */
  DOUBLE_BRACKET = 26,
  /** Double wave */
  DOUBLE_WAVE = 104,
  /** Block arrow that points down */
  DOWN_ARROW = 36,
  /** Callout with arrow that points down */
  DOWN_ARROW_CALLOUT = 56,
  /** Ribbon banner with center area below ribbon ends */
  DOWN_RIBBON = 98,
  /** Explosion */
  EXPLOSION1 = 89,
  /** Explosion */
  EXPLOSION2 = 90,
  /** Alternate process flowchart symbol */
  FLOWCHART_ALTERNATE_PROCESS = 62,
  /** Card flowchart symbol */
  FLOWCHART_CARD = 75,
  /** Collate flowchart symbol */
  FLOWCHART_COLLATE = 79,
  /** Connector flowchart symbol */
  FLOWCHART_CONNECTOR = 73,
  /** Data flowchart symbol */
  FLOWCHART_DATA = 64,
  /** Decision flowchart symbol */
  FLOWCHART_DECISION = 63,
  /** Delay flowchart symbol */
  FLOWCHART_DELAY = 84,
  /** Direct access storage flowchart symbol */
  FLOWCHART_DIRECT_ACCESS_STORAGE = 87,
  /** Display flowchart symbol */
  FLOWCHART_DISPLAY = 88,
  /** Document flowchart symbol */
  FLOWCHART_DOCUMENT = 67,
  /** Extract flowchart symbol */
  FLOWCHART_EXTRACT = 81,
  /** Internal storage flowchart symbol */
  FLOWCHART_INTERNAL_STORAGE = 66,
  /** Magnetic disk flowchart symbol */
  FLOWCHART_MAGNETIC_DISK = 86,
  /** Manual input flowchart symbol */
  FLOWCHART_MANUAL_INPUT = 71,
  /** Manual operation flowchart symbol */
  FLOWCHART_MANUAL_OPERATION = 72,
  /** Merge flowchart symbol */
  FLOWCHART_MERGE = 82,
  /** Multi-document flowchart symbol */
  FLOWCHART_MULTIDOCUMENT = 68,
  /** Offline Storage */
  FLOWCHART_OFFLINE_STORAGE = 139,
  /** Off-page connector flowchart symbol */
  FLOWCHART_OFFPAGE_CONNECTOR = 74,
  /** "Or" flowchart symbol */
  FLOWCHART_OR = 78,
  /** Predefined process flowchart symbol */
  FLOWCHART_PREDEFINED_PROCESS = 65,
  /** Preparation flowchart symbol */
  FLOWCHART_PREPARATION = 70,
  /** Process flowchart symbol */
  FLOWCHART_PROCESS = 61,
  /** Punched tape flowchart symbol */
  FLOWCHART_PUNCHED_TAPE = 76,
  /** Sequential access storage flowchart symbol */
  FLOWCHART_SEQUENTIAL_ACCESS_STORAGE = 85,
  /** Sort flowchart symbol */
  FLOWCHART_SORT = 80,
  /** Stored data flowchart symbol */
  FLOWCHART_STORED_DATA = 83,
  /** Summing junction flowchart symbol */
  FLOWCHART_SUMMING_JUNCTION = 77,
  /** Terminator flowchart symbol */
  FLOWCHART_TERMINATOR = 69,
  /** Folded corner */
  FOLDED_CORNER = 16,
  /** Frame */
  FRAME = 158,
  /** Funnel */
  FUNNEL = 174,
  /** Gear 6 */
  GEAR_6 = 172,
  /** Gear 9 */
  GEAR_9 = 173,
  /** Half Frame */
  HALF_FRAME = 159,
  /** Heart */
  HEART = 21,
  /** Heptagon */
  HEPTAGON = 145,
  /** Hexagon */
  HEXAGON = 10,
  /** Horizontal scroll */
  HORIZONTAL_SCROLL = 102,
  /** Isosceles triangle */
  ISOSCELES_TRIANGLE = 7,
  /** Block arrow that points left */
  LEFT_ARROW = 34,
  /** Callout with arrow that points left */
  LEFT_ARROW_CALLOUT = 54,
  /** Left brace */
  LEFT_BRACE = 31,
  /** Left bracket */
  LEFT_BRACKET = 29,
  /** Left Circular Arrow */
  LEFT_CIRCULAR_ARROW = 176,
  /** Block arrow with arrowheads that point both left and right */
  LEFT_RIGHT_ARROW = 37,
  /** Callout with arrowheads that point both left and right */
  LEFT_RIGHT_ARROW_CALLOUT = 57,
  /** Left Right Circular Arrow */
  LEFT_RIGHT_CIRCULAR_ARROW = 177,
  /** Left Right Ribbon */
  LEFT_RIGHT_RIBBON = 140,
  /** Block arrow with arrowheads that point left, right, and up */
  LEFT_RIGHT_UP_ARROW = 40,
  /** Block arrow with arrowheads that point left and up */
  LEFT_UP_ARROW = 43,
  /** Lightning bolt */
  LIGHTNING_BOLT = 22,
  /** Callout with border and horizontal callout line */
  LINE_CALLOUT_1 = 109,
  /** Callout with vertical accent bar */
  LINE_CALLOUT_1_ACCENT_BAR = 113,
  /** Callout with border and vertical accent bar */
  LINE_CALLOUT_1_BORDER_AND_ACCENT_BAR = 121,
  /** Callout with horizontal line */
  LINE_CALLOUT_1_NO_BORDER = 117,
  /** Callout with diagonal straight line */
  LINE_CALLOUT_2 = 110,
  /** Callout with diagonal callout line and accent bar */
  LINE_CALLOUT_2_ACCENT_BAR = 114,
  /** Callout with border, diagonal straight line, and accent bar */
  LINE_CALLOUT_2_BORDER_AND_ACCENT_BAR = 122,
  /** Callout with no border and diagonal callout line */
  LINE_CALLOUT_2_NO_BORDER = 118,
  /** Callout with angled line */
  LINE_CALLOUT_3 = 111,
  /** Callout with angled callout line and accent bar */
  LINE_CALLOUT_3_ACCENT_BAR = 115,
  /** Callout with border, angled callout line, and accent bar */
  LINE_CALLOUT_3_BORDER_AND_ACCENT_BAR = 123,
  /** Callout with no border and angled callout line */
  LINE_CALLOUT_3_NO_BORDER = 119,
  /** Callout with callout line segments forming a U-shape. */
  LINE_CALLOUT_4 = 112,
  /** Callout with accent bar and callout line segments forming a U-shape. */
  LINE_CALLOUT_4_ACCENT_BAR = 116,
  /** Callout with border, accent bar, and callout line segments forming a U-shape. */
  LINE_CALLOUT_4_BORDER_AND_ACCENT_BAR = 124,
  /** Callout with no border and callout line segments forming a U-shape. */
  LINE_CALLOUT_4_NO_BORDER = 120,
  /** Straight Connector */
  LINE_INVERSE = 183,
  /** Division */
  MATH_DIVIDE = 166,
  /** Equal */
  MATH_EQUAL = 167,
  /** Minus */
  MATH_MINUS = 164,
  /** Multiply */
  MATH_MULTIPLY = 165,
  /** Not Equal */
  MATH_NOT_EQUAL = 168,
  /** Plus */
  MATH_PLUS = 163,
  /** Moon */
  MOON = 24,
  /** Non-isosceles Trapezoid */
  NON_ISOSCELES_TRAPEZOID = 143,
  /** Notched block arrow that points right */
  NOTCHED_RIGHT_ARROW = 50,
  /** 'No' Symbol */
  NO_SYMBOL = 19,
  /** Octagon */
  OCTAGON = 6,
  /** Oval */
  OVAL = 9,
  /** Oval-shaped callout */
  OVAL_CALLOUT = 107,
  /** Parallelogram */
  PARALLELOGRAM = 2,
  /** Pentagon */
  PENTAGON = 51,
  /** Pie */
  PIE = 142,
  /** Pie */
  PIE_WEDGE = 175,
  /** Plaque */
  PLAQUE = 28,
  /** Plaque Tabs */
  PLAQUE_TABS = 171,
  /** Block arrows that point up, down, left, and right */
  QUAD_ARROW = 39,
  /** Callout with arrows that point up, down, left, and right */
  QUAD_ARROW_CALLOUT = 59,
  /** Rectangle */
  RECTANGLE = 1,
  /** Rectangular callout */
  RECTANGULAR_CALLOUT = 105,
  /** Pentagon */
  REGULAR_PENTAGON = 12,
  /** Block arrow that points right */
  RIGHT_ARROW = 33,
  /** Callout with arrow that points right */
  RIGHT_ARROW_CALLOUT = 53,
  /** Right brace */
  RIGHT_BRACE = 32,
  /** Right bracket */
  RIGHT_BRACKET = 30,
  /** Right triangle */
  RIGHT_TRIANGLE = 8,
  /** Rounded rectangle */
  ROUNDED_RECTANGLE = 5,
  /** Rounded rectangle-shaped callout */
  ROUNDED_RECTANGULAR_CALLOUT = 106,
  /** Round Single Corner Rectangle */
  ROUND_1_RECTANGLE = 151,
  /** Round Diagonal Corner Rectangle */
  ROUND_2_DIAG_RECTANGLE = 153,
  /** Round Same Side Corner Rectangle */
  ROUND_2_SAME_RECTANGLE = 152,
  /** Smiley face */
  SMILEY_FACE = 17,
  /** Snip Single Corner Rectangle */
  SNIP_1_RECTANGLE = 155,
  /** Snip Diagonal Corner Rectangle */
  SNIP_2_DIAG_RECTANGLE = 157,
  /** Snip Same Side Corner Rectangle */
  SNIP_2_SAME_RECTANGLE = 156,
  /** Snip and Round Single Corner Rectangle */
  SNIP_ROUND_RECTANGLE = 154,
  /** Square Tabs */
  SQUARE_TABS = 170,
  /** 10-Point Star */
  STAR_10_POINT = 149,
  /** 12-Point Star */
  STAR_12_POINT = 150,
  /** 16-point star */
  STAR_16_POINT = 94,
  /** 24-point star */
  STAR_24_POINT = 95,
  /** 32-point star */
  STAR_32_POINT = 96,
  /** 4-point star */
  STAR_4_POINT = 91,
  /** 5-point star */
  STAR_5_POINT = 92,
  /** 6-Point Star */
  STAR_6_POINT = 147,
  /** 7-Point Star */
  STAR_7_POINT = 148,
  /** 8-point star */
  STAR_8_POINT = 93,
  /** Block arrow that points right with stripes at the tail */
  STRIPED_RIGHT_ARROW = 49,
  /** Sun */
  SUN = 23,
  /** Swoosh Arrow */
  SWOOSH_ARROW = 178,
  /** Teardrop */
  TEAR = 160,
  /** Trapezoid */
  TRAPEZOID = 3,
  /** Block arrow that points up */
  UP_ARROW = 35,
  /** Callout with arrow that points up */
  UP_ARROW_CALLOUT = 55,
  /** Block arrow that points up and down */
  UP_DOWN_ARROW = 38,
  /** Callout with arrows that point up and down */
  UP_DOWN_ARROW_CALLOUT = 58,
  /** Ribbon banner with center area above ribbon ends */
  UP_RIBBON = 97,
  /** Block arrow forming a U shape */
  U_TURN_ARROW = 42,
  /** Vertical scroll */
  VERTICAL_SCROLL = 101,
  /** Wave */
  WAVE = 103
}
// @ts-ignore
MSO_AUTO_SHAPE_TYPE[ENUM_NAME] = 'MSO_AUTO_SHAPE_TYPE';

export const MSO_SHAPE = MSO_AUTO_SHAPE_TYPE;
export type MSO_SHAPE = MSO_AUTO_SHAPE_TYPE;

export enum MSO_CONNECTOR_TYPE {
  /** Curved connector. */
  CURVE = 3,
  /** Elbow connector. */
  ELBOW = 2,
  /** Straight line connector. */
  STRAIGHT = 1,
  /** Return value only; indicates a combination of other states. */
  MIXED = -2
}
// @ts-ignore
MSO_CONNECTOR_TYPE[ENUM_NAME] = 'MSO_CONNECTOR_TYPE';

export const MSO_CONNECTOR = MSO_CONNECTOR_TYPE;
export type MSO_CONNECTOR = MSO_CONNECTOR_TYPE;

export enum MSO_SHAPE_TYPE {
  /** AutoShape */
  AUTO_SHAPE = 1,
  /** Callout shape */
  CALLOUT = 2,
  /** Drawing canvas */
  CANVAS = 20,
  /** Chart, e.g. pie chart, bar chart */
  CHART = 3,
  /** Comment */
  COMMENT = 4,
  /** Diagram */
  DIAGRAM = 21,
  /** Embedded OLE object */
  EMBEDDED_OLE_OBJECT = 7,
  /** Form control */
  FORM_CONTROL = 8,
  /** Freeform */
  FREEFORM = 5,
  /** Group shape */
  GROUP = 6,
  /** SmartArt graphic */
  IGX_GRAPHIC = 24,
  /** Ink */
  INK = 22,
  /** Ink Comment */
  INK_COMMENT = 23,
  /** Line */
  LINE = 9,
  /** Linked OLE object */
  LINKED_OLE_OBJECT = 10,
  /** Linked picture */
  LINKED_PICTURE = 11,
  /** Media */
  MEDIA = 16,
  /** OLE control object */
  OLE_CONTROL_OBJECT = 12,
  /** Picture */
  PICTURE = 13,
  /** Placeholder */
  PLACEHOLDER = 14,
  /** Script anchor */
  SCRIPT_ANCHOR = 18,
  /** Table */
  TABLE = 19,
  /** Text box */
  TEXT_BOX = 17,
  /** Text effect */
  TEXT_EFFECT = 15,
  /** Web video */
  WEB_VIDEO = 26,
  /** Multiple shape types (read-only). */
  MIXED = -2
}
// @ts-ignore
MSO_SHAPE_TYPE[ENUM_NAME] = 'MSO_SHAPE_TYPE';

export const MSO = MSO_SHAPE_TYPE;
export type MSO = MSO_SHAPE_TYPE;

export enum PP_MEDIA_TYPE {
  /** Video media such as MP4. */
  MOVIE = 3,
  /** Other media types */
  OTHER = 1,
  /** Return value only; indicates multiple media types, typically for a collection of shapes. May not be applicable in python-pptx. */
  MIXED = -2
}
// @ts-ignore
PP_MEDIA_TYPE[ENUM_NAME] = 'PP_MEDIA_TYPE';

export enum PP_PLACEHOLDER_TYPE {
  /** Clip art placeholder */
  BITMAP = 9,
  /** Body */
  BODY = 2,
  /** Center Title */
  CENTER_TITLE = 3,
  /** Chart */
  CHART = 8,
  /** Date */
  DATE = 16,
  /** Footer */
  FOOTER = 15,
  /** Header */
  HEADER = 14,
  /** Media Clip */
  MEDIA_CLIP = 10,
  /** Object */
  OBJECT = 7,
  /** SmartArt placeholder. Organization chart is a legacy name. */
  ORG_CHART = 11,
  /** Picture */
  PICTURE = 18,
  /** Slide Image */
  SLIDE_IMAGE = 101,
  /** Slide Number */
  SLIDE_NUMBER = 13,
  /** Subtitle */
  SUBTITLE = 4,
  /** Table */
  TABLE = 12,
  /** Title */
  TITLE = 1,
  /** Vertical Body (read-only). */
  VERTICAL_BODY = 6,
  /** Vertical Object (read-only). */
  VERTICAL_OBJECT = 17,
  /** Vertical Title (read-only). */
  VERTICAL_TITLE = 5,
  /** Return value only; multiple placeholders of differing types. */
  MIXED = -2
}
// @ts-ignore
PP_PLACEHOLDER_TYPE[ENUM_NAME] = 'PP_PLACEHOLDER_TYPE';

export const PP_PLACEHOLDER = PP_PLACEHOLDER_TYPE;
export type PP_PLACEHOLDER = PP_PLACEHOLDER_TYPE;
