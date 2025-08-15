import { ENUM_NAME } from '../../bridge';

export enum XL_AXIS_CROSSES {
  /** The axis crossing point is set automatically, often at zero. */
  AUTOMATIC = -4105,
  /** The .crosses_at property specifies the axis crossing point. */
  CUSTOM = -4114,
  /** The axis crosses at the maximum value. */
  MAXIMUM = 2,
  /** The axis crosses at the minimum value. */
  MINIMUM = 4
}
// @ts-ignore
XL_AXIS_CROSSES[ENUM_NAME] = 'XL_AXIS_CROSSES';

export enum XL_CATEGORY_TYPE {
  /** The application controls the axis type. */
  AUTOMATIC_SCALE = -4105,
  /** Axis groups data by an arbitrary set of categories */
  CATEGORY_SCALE = 2,
  /** Axis groups data on a time scale of days, months, or years. */
  TIME_SCALE = 3
}
// @ts-ignore
XL_CATEGORY_TYPE[ENUM_NAME] = 'XL_CATEGORY_TYPE';

export enum XL_CHART_TYPE {
  /** 3D Area. */
  THREE_D_AREA = -4098,
  /** 3D Stacked Area. */
  THREE_D_AREA_STACKED = 78,
  /** 100% Stacked Area. */
  THREE_D_AREA_STACKED_100 = 79,
  /** 3D Clustered Bar. */
  THREE_D_BAR_CLUSTERED = 60,
  /** 3D Stacked Bar. */
  THREE_D_BAR_STACKED = 61,
  /** 3D 100% Stacked Bar. */
  THREE_D_BAR_STACKED_100 = 62,
  /** 3D Column. */
  THREE_D_COLUMN = -4100,
  /** 3D Clustered Column. */
  THREE_D_COLUMN_CLUSTERED = 54,
  /** 3D Stacked Column. */
  THREE_D_COLUMN_STACKED = 55,
  /** 3D 100% Stacked Column. */
  THREE_D_COLUMN_STACKED_100 = 56,
  /** 3D Line. */
  THREE_D_LINE = -4101,
  /** 3D Pie. */
  THREE_D_PIE = -4102,
  /** Exploded 3D Pie. */
  THREE_D_PIE_EXPLODED = 70,
  /** Area */
  AREA = 1,
  /** Stacked Area. */
  AREA_STACKED = 76,
  /** 100% Stacked Area. */
  AREA_STACKED_100 = 77,
  /** Clustered Bar. */
  BAR_CLUSTERED = 57,
  /** Bar of Pie. */
  BAR_OF_PIE = 71,
  /** Stacked Bar. */
  BAR_STACKED = 58,
  /** 100% Stacked Bar. */
  BAR_STACKED_100 = 59,
  /** Bubble. */
  BUBBLE = 15,
  /** Bubble with 3D effects. */
  BUBBLE_THREE_D_EFFECT = 87,
  /** Clustered Column. */
  COLUMN_CLUSTERED = 51,
  /** Stacked Column. */
  COLUMN_STACKED = 52,
  /** 100% Stacked Column. */
  COLUMN_STACKED_100 = 53,
  /** Clustered Cone Bar. */
  CONE_BAR_CLUSTERED = 102,
  /** Stacked Cone Bar. */
  CONE_BAR_STACKED = 103,
  /** 100% Stacked Cone Bar. */
  CONE_BAR_STACKED_100 = 104,
  /** 3D Cone Column. */
  CONE_COL = 105,
  /** Clustered Cone Column. */
  CONE_COL_CLUSTERED = 99,
  /** Stacked Cone Column. */
  CONE_COL_STACKED = 100,
  /** 100% Stacked Cone Column. */
  CONE_COL_STACKED_100 = 101,
  /** Clustered Cylinder Bar. */
  CYLINDER_BAR_CLUSTERED = 95,
  /** Stacked Cylinder Bar. */
  CYLINDER_BAR_STACKED = 96,
  /** 100% Stacked Cylinder Bar. */
  CYLINDER_BAR_STACKED_100 = 97,
  /** 3D Cylinder Column. */
  CYLINDER_COL = 98,
  /** Clustered Cone Column. */
  CYLINDER_COL_CLUSTERED = 92,
  /** Stacked Cone Column. */
  CYLINDER_COL_STACKED = 93,
  /** 100% Stacked Cylinder Column. */
  CYLINDER_COL_STACKED_100 = 94,
  /** Doughnut. */
  DOUGHNUT = -4120,
  /** Exploded Doughnut. */
  DOUGHNUT_EXPLODED = 80,
  /** Line. */
  LINE = 4,
  /** Line with Markers. */
  LINE_MARKERS = 65,
  /** Stacked Line with Markers. */
  LINE_MARKERS_STACKED = 66,
  /** 100% Stacked Line with Markers. */
  LINE_MARKERS_STACKED_100 = 67,
  /** Stacked Line. */
  LINE_STACKED = 63,
  /** 100% Stacked Line. */
  LINE_STACKED_100 = 64,
  /** Pie. */
  PIE = 5,
  /** Exploded Pie. */
  PIE_EXPLODED = 69,
  /** Pie of Pie. */
  PIE_OF_PIE = 68,
  /** Clustered Pyramid Bar. */
  PYRAMID_BAR_CLUSTERED = 109,
  /** Stacked Pyramid Bar. */
  PYRAMID_BAR_STACKED = 110,
  /** 100% Stacked Pyramid Bar. */
  PYRAMID_BAR_STACKED_100 = 111,
  /** 3D Pyramid Column. */
  PYRAMID_COL = 112,
  /** Clustered Pyramid Column. */
  PYRAMID_COL_CLUSTERED = 106,
  /** Stacked Pyramid Column. */
  PYRAMID_COL_STACKED = 107,
  /** 100% Stacked Pyramid Column. */
  PYRAMID_COL_STACKED_100 = 108,
  /** Radar. */
  RADAR = -4151,
  /** Filled Radar. */
  RADAR_FILLED = 82,
  /** Radar with Data Markers. */
  RADAR_MARKERS = 81,
  /** High-Low-Close. */
  STOCK_HLC = 88,
  /** Open-High-Low-Close. */
  STOCK_OHLC = 89,
  /** Volume-High-Low-Close. */
  STOCK_VHLC = 90,
  /** Volume-Open-High-Low-Close. */
  STOCK_VOHLC = 91,
  /** 3D Surface. */
  SURFACE = 83,
  /** Surface (Top View). */
  SURFACE_TOP_VIEW = 85,
  /** Surface (Top View wireframe). */
  SURFACE_TOP_VIEW_WIREFRAME = 86,
  /** 3D Surface (wireframe). */
  SURFACE_WIREFRAME = 84,
  /** Scatter. */
  XY_SCATTER = -4169,
  /** Scatter with Lines. */
  XY_SCATTER_LINES = 74,
  /** Scatter with Lines and No Data Markers. */
  XY_SCATTER_LINES_NO_MARKERS = 75,
  /** Scatter with Smoothed Lines. */
  XY_SCATTER_SMOOTH = 72,
  /** Scatter with Smoothed Lines and No Data Markers. */
  XY_SCATTER_SMOOTH_NO_MARKERS = 73
}
// @ts-ignore
XL_CHART_TYPE[ENUM_NAME] = 'XL_CHART_TYPE';

export enum XL_DATA_LABEL_POSITION {
  /** The data label is positioned above the data point. */
  ABOVE = 0,
  /** The data label is positioned below the data point. */
  BELOW = 1,
  /** Word sets the position of the data label. */
  BEST_FIT = 5,
  /** The data label is centered on the data point or inside a bar or a pie slice. */
  CENTER = -4108,
  /** The data label is positioned inside the data point at the bottom edge. */
  INSIDE_BASE = 4,
  /** The data label is positioned inside the data point at the top edge. */
  INSIDE_END = 3,
  /** The data label is positioned to the left of the data point. */
  LEFT = -4131,
  /** Data labels are in multiple positions (read-only). */
  MIXED = 6,
  /** The data label is positioned outside the data point at the top edge. */
  OUTSIDE_END = 2,
  /** The data label is positioned to the right of the data point. */
  RIGHT = -4152
}
// @ts-ignore
XL_DATA_LABEL_POSITION[ENUM_NAME] = 'XL_DATA_LABEL_POSITION';

export const XL_LABEL_POSITION = XL_DATA_LABEL_POSITION;
export type XL_LABEL_POSITION = XL_DATA_LABEL_POSITION;

export enum XL_LEGEND_POSITION {
  /** Below the chart. */
  BOTTOM = -4107,
  /** In the upper-right corner of the chart border. */
  CORNER = 2,
  /** A custom position (read-only). */
  CUSTOM = -4161,
  /** Left of the chart. */
  LEFT = -4131,
  /** Right of the chart. */
  RIGHT = -4152,
  /** Above the chart. */
  TOP = -4160
}
// @ts-ignore
XL_LEGEND_POSITION[ENUM_NAME] = 'XL_LEGEND_POSITION';

export enum XL_MARKER_STYLE {
  /** Automatic markers */
  AUTOMATIC = -4105,
  /** Circular markers */
  CIRCLE = 8,
  /** Long bar markers */
  DASH = -4115,
  /** Diamond-shaped markers */
  DIAMOND = 2,
  /** Short bar markers */
  DOT = -4118,
  /** No markers */
  NONE = -4142,
  /** Picture markers */
  PICTURE = -4147,
  /** Square markers with a plus sign */
  PLUS = 9,
  /** Square markers */
  SQUARE = 1,
  /** Square markers with an  asterisk */
  STAR = 5,
  /** Triangular markers */
  TRIANGLE = 3,
  /** Square markers with an X */
  X = -4168
}
// @ts-ignore
XL_MARKER_STYLE[ENUM_NAME] = 'XL_MARKER_STYLE';

export enum XL_TICK_MARK {
  /** Tick mark crosses the axis */
  CROSS = 4,

  /** Tick mark appears inside the axis */
  INSIDE = 2,

  /** No tick mark */
  NONE = -4142,

  /** Tick mark appears outside the axis */
  OUTSIDE = 3
}
// @ts-ignore
XL_TICK_MARK[ENUM_NAME] = 'XL_TICK_MARK';

export enum XL_TICK_LABEL_POSITION {
  /** Top or right side of the chart. */
  HIGH = -4127,
  /** Bottom or left side of the chart. */
  LOW = -4134,
  /** Next to axis (where axis is not at either side of the chart). */
  NEXT_TO_AXIS = 4,
  /** No tick labels. */
  NONE = -4142
}
// @ts-ignore
XL_TICK_LABEL_POSITION[ENUM_NAME] = 'XL_TICK_LABEL_POSITION';
