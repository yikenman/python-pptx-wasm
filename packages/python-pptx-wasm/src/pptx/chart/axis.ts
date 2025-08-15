import { append_packed_id, Enum, PackedBase, py_funs } from '../../bridge';
import { ChartFormat } from '../dml/chtfmt';
import { XL_AXIS_CROSSES, XL_CATEGORY_TYPE, XL_TICK_LABEL_POSITION, XL_TICK_MARK } from '../enum/chart';
import { CT_CatAx, CT_ValAx } from '../oxml/chart/axis';
import { CT_Title } from '../oxml/chart/shared';
import { ElementProxy } from '../shared';
import { Font, TextFrame } from '../text/text';

const XAxFactory = (cls: string) => {
  const clsList = {
    CT_CatAx: CT_CatAx,
    CT_ValAx: CT_ValAx
  };

  return clsList[cls as keyof typeof clsList];
};

/**
 * Base class for chart axis objects. All axis objects share these properties.
 */
export class _BaseAxis extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, XAxFactory);
  }

  get _xAx() {
    return this._element;
  }

  /**
   * An `AxisTitle` object providing access to title properties.
   *
   * Calling this property is destructive in the sense that it adds an
   * axis title element (`c:title`) to the axis XML if one is not already
   * present. Use :attr:`has_title` to test for presence of axis title
   * non-destructively.
   */
  get axis_title() {
    const pid = append_packed_id(this.packed_id, 'axis_title');
    return py_funs.get_attr_returns_instance(pid, AxisTitle);
  }

  /**
   * The `ChartFormat` object providing access to the shape formatting
   * properties of this axis, such as its line color and fill.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }

  /**
   * Read/write boolean value specifying whether this axis has gridlines
   * at its major tick mark locations. Assigning true to this property
   * causes major gridlines to be displayed. Assigning false causes them
   * to be removed.
   */
  set has_major_gridlines(has_major_gridlines: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_major_gridlines');
    py_funs.set_attr(pid, has_major_gridlines);
  }
  get has_major_gridlines() {
    const pid = append_packed_id(this.packed_id, 'has_major_gridlines');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write boolean value specifying whether this axis has gridlines
   * at its minor tick mark locations. Assigning true to this property
   * causes minor gridlines to be displayed. Assigning false causes them
   * to be removed.
   */
  set has_minor_gridlines(has_minor_gridlines: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_minor_gridlines');
    py_funs.set_attr(pid, has_minor_gridlines);
  }
  get has_minor_gridlines() {
    const pid = append_packed_id(this.packed_id, 'has_minor_gridlines');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write boolean specifying whether this axis has a title.
   * true if this axis has a title, false otherwise. Assigning true
   * causes an axis title to be added if not already present. Assigning
   * false causes any existing title to be deleted.
   */
  set has_title(has_title: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_title');
    py_funs.set_attr(pid, has_title);
  }
  get has_title() {
    const pid = append_packed_id(this.packed_id, 'has_title');
    return py_funs.get_attr(pid);
  }

  /**
   * The `MajorGridlines` object representing the major gridlines for
   * this axis.
   */
  get major_gridlines() {
    const pid = append_packed_id(this.packed_id, 'major_gridlines');
    return py_funs.get_attr_returns_instance(pid, MajorGridlines);
  }

  /**
   * Read/write {@link XlTickMark} value specifying the type of major tick
   * mark to display on this axis.
   */
  set major_tick_mark(major_tick_mark: XL_TICK_MARK) {
    const pid = append_packed_id(this.packed_id, 'major_tick_mark');
    py_funs.set_attr(pid, Enum(XL_TICK_MARK, major_tick_mark));
  }
  get major_tick_mark() {
    const pid = append_packed_id(this.packed_id, 'major_tick_mark');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write float value specifying the upper limit of the value range
   * for this axis, the number at the top or right of the vertical or
   * horizontal value scale, respectively. The value `undefined` indicates the
   * upper limit should be determined automatically based on the range of
   * data point values associated with the axis.
   */
  set maximum_scale(maximum_scale: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'maximum_scale');
    py_funs.set_attr(pid, maximum_scale);
  }
  get maximum_scale() {
    const pid = append_packed_id(this.packed_id, 'maximum_scale');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write float value specifying lower limit of value range, the
   * number at the bottom or left of the value scale. `undefined` if no minimum
   * scale has been set. The value `undefined` indicates the lower limit should
   * be determined automatically based on the range of data point values
   * associated with the axis.
   */
  set minimum_scale(minimum_scale: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'minimum_scale');
    py_funs.set_attr(pid, minimum_scale);
  }
  get minimum_scale() {
    const pid = append_packed_id(this.packed_id, 'minimum_scale');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write {@link XlTickMark} value specifying the type of minor tick
   * mark for this axis.
   */
  set minor_tick_mark(minor_tick_mark: XL_TICK_MARK) {
    const pid = append_packed_id(this.packed_id, 'minor_tick_mark');
    py_funs.set_attr(pid, Enum(XL_TICK_MARK, minor_tick_mark));
  }
  get minor_tick_mark() {
    const pid = append_packed_id(this.packed_id, 'minor_tick_mark');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write boolean value specifying whether to reverse plotting order for axis.
   *
   * For a category axis, this reverses the order in which the categories are
   * displayed. This may be desired, for example, on a (horizontal) bar chart where
   * by default the first category appears at the bottom. Since we read from
   * top-to-bottom, many viewers may find it most natural for the first category to
   * appear on top.
   *
   * For a value axis, it reverses the direction of increasing value from
   * bottom-to-top to top-to-bottom.
   */
  set reverse_order(reverse_order: boolean) {
    const pid = append_packed_id(this.packed_id, 'reverse_order');
    py_funs.set_attr(pid, reverse_order);
  }
  get reverse_order() {
    const pid = append_packed_id(this.packed_id, 'reverse_order');
    return py_funs.get_attr(pid);
  }

  /**
   * The {@link TickLabels} instance providing access to axis tick label
   * formatting properties. Tick labels are the numbers appearing on
   * a value axis or the category names appearing on a category axis.
   */
  get tick_labels() {
    const pid = append_packed_id(this.packed_id, 'tick_labels');
    return py_funs.get_attr_returns_instance(pid, TickLabels);
  }

  /**
   * Read/write {@link XlTickLabelPosition} value specifying where the tick
   * labels for this axis should appear.
   */
  set tick_label_position(tick_label_position: XL_TICK_LABEL_POSITION) {
    const pid = append_packed_id(this.packed_id, 'tick_label_position');
    py_funs.set_attr(pid, Enum(XL_TICK_LABEL_POSITION, tick_label_position));
  }
  get tick_label_position() {
    const pid = append_packed_id(this.packed_id, 'tick_label_position');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write. `true` if axis is visible, `false` otherwise.
   */
  set visible(visible: boolean) {
    const pid = append_packed_id(this.packed_id, 'visible');
    py_funs.set_attr(pid, visible);
  }
  get visible() {
    const pid = append_packed_id(this.packed_id, 'visible');
    return py_funs.get_attr(pid);
  }
}

/**
 * Provides properties for manipulating axis title.
 */
export class AxisTitle extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Title);
  }

  get _title() {
    return this._element;
  }

  /**
   * {@link ChartFormat} object providing access to shape formatting.
   *
   * Returns the {@link ChartFormat} object providing shape formatting properties
   * for this axis title, such as its line color and fill.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }

  /**
   * Read/write boolean specifying presence of a text frame.
   *
   * Returns `true` if this axis title has a text frame, and `false`
   * otherwise. Assigning `true` causes a text frame to be added if not
   * already present. Assigning `false` causes any existing text frame to
   * be removed along with any text contained in the text frame.
   */
  set has_text_frame(has_text_frame: boolean) {
    const pid = append_packed_id(this.packed_id, 'has_text_frame');
    py_funs.set_attr(pid, has_text_frame);
  }
  get has_text_frame() {
    const pid = append_packed_id(this.packed_id, 'has_text_frame');
    return py_funs.get_attr(pid);
  }

  /**
   * {@link TextFrame} instance for this axis title.
   *
   * Returns a {@link TextFrame} instance allowing read/write access to the text
   * of this axis title and its text formatting properties. Accessing this
   * property is destructive as it adds a new text frame if not already
   * present.
   */
  get text_frame() {
    const pid = append_packed_id(this.packed_id, 'text_frame');
    return py_funs.get_attr_returns_instance(pid, TextFrame);
  }
}

/**
 * A category axis of a chart.
 */
export class CategoryAxis extends _BaseAxis {
  /**
   * A member of {@link XlCategoryType} specifying the scale type of this
   * axis. Unconditionally `CATEGORY_SCALE` for a {@link CategoryAxis} object.
   */
  get category_type() {
    const pid = append_packed_id(this.packed_id, 'category_type');
    return py_funs.get_attr<XL_CATEGORY_TYPE>(pid);
  }
}

/**
 * A category axis with dates as its category labels.
 *
 * This axis-type has some special display behaviors such as making length of equal
 * periods equal and normalizing month start dates despite unequal month lengths.
 */
export class DateAxis extends _BaseAxis {
  /**
   * A member of {@link XlCategoryType} specifying the scale type of this
   * axis. Unconditionally `TIME_SCALE` for a {@link DateAxis} object.
   */
  get category_type() {
    const pid = append_packed_id(this.packed_id, 'category_type');
    return py_funs.get_attr<XL_CATEGORY_TYPE>(pid);
  }
}

/**
 * Provides access to the properties of the major gridlines appearing on an axis.
 */
export class MajorGridlines extends ElementProxy {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, XAxFactory);
  }

  get _xAx() {
    return this._element;
  }

  /**
   * The {@link ChartFormat} object providing access to the shape formatting
   * properties of this data point, such as line and fill.
   */
  get format() {
    const pid = append_packed_id(this.packed_id, 'format');
    return py_funs.get_attr_returns_instance(pid, ChartFormat);
  }
}

/**
 * A service class providing access to formatting of axis tick mark labels.
 */
export class TickLabels extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, XAxFactory);
  }

  /**
   * The {@link Font} object that provides access to the text properties for
   * these tick labels, such as bold, italic, etc.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Read/write string (e.g. "$#,##0.00") specifying the format for the
   * numbers on this axis. The syntax for these strings is the same as it
   * appears in the PowerPoint or Excel UI. Returns 'General' if no number
   * format has been set. Note that this format string has no effect on
   * rendered tick labels when {@link number_format_is_linked} is `true`.
   * Assigning a format string to this property automatically sets
   * {@link number_format_is_linked} to `false`.
   */
  set number_format(number_format: string) {
    const pid = append_packed_id(this.packed_id, 'number_format');
    py_funs.set_attr(pid, number_format);
  }
  get number_format() {
    const pid = append_packed_id(this.packed_id, 'number_format');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write boolean specifying whether number formatting should be
   * taken from the source spreadsheet rather than the value of
   * {@link number_format}.
   */
  set number_format_is_linked(number_format_is_linked: boolean) {
    const pid = append_packed_id(this.packed_id, 'number_format_is_linked');
    py_funs.set_attr(pid, number_format_is_linked);
  }
  get number_format_is_linked() {
    const pid = append_packed_id(this.packed_id, 'number_format_is_linked');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write integer value in range 0-1000 specifying the spacing between
   * the tick mark labels and the axis as a percentage of the default
   * value. 100 if no label offset setting is present.
   */
  set offset(offset: number) {
    const pid = append_packed_id(this.packed_id, 'offset');
    py_funs.set_attr(pid, offset);
  }
  get offset() {
    const pid = append_packed_id(this.packed_id, 'offset');
    return py_funs.get_attr(pid);
  }
}

/**
 * An axis having continuous (as opposed to discrete) values.
 *
 * The vertical axis is generally a value axis, however both axes of an XY-type chart
 * are value axes.
 */
export class ValueAxis extends _BaseAxis {
  /**
   * Member of {@link XlAxisCrosses} enumeration specifying the point on
   * this axis where the other axis crosses, such as auto/zero, minimum,
   * or maximum. Returns `XL_AXIS_CROSSES.CUSTOM` when a specific numeric
   * crossing point (e.g. 1.5) is defined.
   */
  set crosses(crosses: XL_AXIS_CROSSES) {
    const pid = append_packed_id(this.packed_id, 'crosses');
    py_funs.set_attr(pid, Enum(XL_AXIS_CROSSES, crosses));
  }
  get crosses() {
    const pid = append_packed_id(this.packed_id, 'crosses');
    return py_funs.get_attr(pid);
  }

  /**
   * Numeric value on this axis at which the perpendicular axis crosses.
   * Returns `undefined` if no crossing value is set.
   */
  set crosses_at(crosses_at: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'crosses_at');
    py_funs.set_attr(pid, crosses_at);
  }
  get crosses_at() {
    const pid = append_packed_id(this.packed_id, 'crosses_at');
    return py_funs.get_attr(pid);
  }

  /**
   * The float number of units between major tick marks on this value
   * axis. `undefined` corresponds to the 'Auto' setting in the UI, and
   * specifies the value should be calculated by PowerPoint based on the
   * underlying chart data.
   */
  set major_unit(major_unit: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'major_unit');
    py_funs.set_attr(pid, major_unit);
  }
  get major_unit() {
    const pid = append_packed_id(this.packed_id, 'major_unit');
    return py_funs.get_attr(pid);
  }

  /**
   * The float number of units between minor tick marks on this value
   * axis. `undefined` corresponds to the 'Auto' setting in the UI, and
   * specifies the value should be calculated by PowerPoint based on the
   * underlying chart data.
   */
  set minor_unit(minor_unit: number | undefined) {
    const pid = append_packed_id(this.packed_id, 'minor_unit');
    py_funs.set_attr(pid, minor_unit);
  }
  get minor_unit() {
    const pid = append_packed_id(this.packed_id, 'minor_unit');
    return py_funs.get_attr(pid);
  }
}
