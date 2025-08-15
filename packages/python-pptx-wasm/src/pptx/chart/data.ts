import { append_packed_id, Enum, List, PackedBase, py_funs, Tuple } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { XL_CHART_TYPE } from '../enum/chart';

/**
 * Base class providing common members for chart data objects.
 *
 * A chart data object serves as a proxy for the chart data table that will be written to an
 * Excel worksheet; operating as an array of series as well as providing access to chart-level
 * attributes. A chart data object is used as a parameter in {@link shapes.add_chart} and
 * {@link Chart.replace_data}. The data structure varies between major chart categories such as
 * category charts and XY charts.
 */
const _BaseChartData = <S extends PackedBase>(Series: Type<S>) => {
  class Class extends MutableArrayMixin<S, Type<PackedBase>>(PackedBase) {
    getItem(index: number) {
      const pid = append_packed_id(this.packed_id, index);
      return py_funs.get_attr_returns_instance(pid, Series);
    }
    get length(): number {
      return py_funs.get_attr_len(this.packed_id);
    }

    append(series: S) {
      const pid = append_packed_id(this.packed_id, 'append');
      return py_funs.call_method(pid, arguments, series);
    }

    /**
     * The total integer number of data points appearing in the series of
     * this chart that are prior to *series* in this array.
     */
    data_point_offset(series: S) {
      const pid = append_packed_id(this.packed_id, 'data_point_offset');
      return py_funs.call_method<number>(pid, arguments, series);
    }

    /**
     * The formatting template string, e.g. '#,##0.0', that determines how
     * X and Y values are formatted in this chart and in the Excel
     * spreadsheet. A number format specified on a series will override this
     * value for that series. Likewise, a distinct number format can be
     * specified for a particular data point within a series.
     */
    get number_format() {
      const pid = append_packed_id(this.packed_id, 'number_format');
      return py_funs.get_attr<string>(pid);
    }

    /**
     * Return the integer index of *series* in this sequence.
     */
    series_index(series: S) {
      const pid = append_packed_id(this.packed_id, 'series_index');
      return py_funs.call_method<number>(pid, arguments, series);
    }

    /**
     * Returns the Excel worksheet reference to the cell containing the name
     * for *series*.
     */
    series_name_ref(series: S) {
      const pid = append_packed_id(this.packed_id, 'series_name_ref');
      return py_funs.call_method<string>(pid, arguments, series);
    }

    /**
     * The Excel worksheet reference to the X values for *series* (not
     * including the column label).
     */
    x_values_ref(series: S) {
      const pid = append_packed_id(this.packed_id, 'x_values_ref');
      return py_funs.call_method<string>(pid, arguments, series);
    }

    /**
     * Returns a blob containing an Excel workbook file populated with the
     * contents of this chart data object.
     */
    get xlsx_blob() {
      const pid = append_packed_id(this.packed_id, 'xlsx_blob');
      return py_funs.get_attr<Uint8Array>(pid);
    }

    /**
     * Returns a blob containing the XML for a chart of *chart_type*
     * containing the series in this chart data object, as bytes suitable
     * for writing directly to a file.
     */
    xml_bytes(chart_type: XL_CHART_TYPE) {
      const pid = append_packed_id(this.packed_id, 'xml_bytes');
      return py_funs.call_method<Uint8Array>(pid, arguments, Enum(XL_CHART_TYPE, chart_type));
    }

    /**
     * The Excel worksheet reference to the Y values for *series* (not
     * including the column label).
     */
    y_values_ref(series: S) {
      const pid = append_packed_id(this.packed_id, 'y_values_ref');
      return py_funs.call_method<string>(pid, arguments, series);
    }
  }

  return Class;
};

/**
 * Base class providing common members for series data objects. A series
 * data object serves as proxy for a series data column in the Excel
 * worksheet. It operates as an array of data points, as well as providing
 * access to series-level attributes like the series label.
 */
const _BaseSeriesData = <P extends PackedBase>(Point: Type<P>) => {
  class Class extends MutableArrayMixin<P, Type<PackedBase>>(PackedBase) {
    getItem(index: number) {
      const pid = append_packed_id(this.packed_id, index);
      return py_funs.get_attr_returns_instance(pid, Point);
    }
    get length(): number {
      return py_funs.get_attr_len(this.packed_id);
    }

    append(data_point: P) {
      const pid = append_packed_id(this.packed_id, 'append');
      return py_funs.call_method(pid, arguments, data_point);
    }

    /**
     * The integer count of data points that appear in all chart series
     * prior to this one.
     */
    get data_point_offset() {
      const pid = append_packed_id(this.packed_id, 'data_point_offset');
      return py_funs.get_attr<number>(pid);
    }

    /**
     * Zero-based integer indicating the sequence position of this series in
     * its chart. For example, the second of three series would return `1`.
     */
    get index() {
      const pid = append_packed_id(this.packed_id, 'index');
      return py_funs.get_attr<number>(pid);
    }

    /**
     * The name of this series, e.g. 'Series 1'. This name is used as the
     * column heading for the y-values of this series and may also appear in
     * the chart legend and perhaps other chart locations.
     */
    get name() {
      const pid = append_packed_id(this.packed_id, 'name');
      return py_funs.get_attr<string>(pid);
    }

    /**
     * The Excel worksheet reference to the cell containing the name for
     * this series.
     */
    get name_ref() {
      const pid = append_packed_id(this.packed_id, 'name_ref');
      return py_funs.get_attr(pid);
    }

    /**
     * The formatting template string that determines how a number in this
     * series is formatted, both in the chart and in the Excel spreadsheet;
     * for example '#,##0.0'. If not specified for this series, it is
     * inherited from the parent chart data object.
     */
    get number_format() {
      const pid = append_packed_id(this.packed_id, 'number_format');
      return py_funs.get_attr<string>(pid);
    }

    /**
     * An array containing the X value of each datapoint in this series,
     * in data point order.
     */
    get x_values() {
      const pid = append_packed_id(this.packed_id, 'x_values');
      return py_funs.get_attr<number[]>(pid);
    }

    /**
     * The Excel worksheet reference to the X values for this chart (not
     * including the column heading).
     */
    get x_values_ref() {
      const pid = append_packed_id(this.packed_id, 'x_values_ref');
      return py_funs.get_attr<string>(pid);
    }

    /**
     * An array containing the Y value of each datapoint in this series,
     * in data point order.
     */
    get y_values() {
      const pid = append_packed_id(this.packed_id, 'y_values');
      return py_funs.get_attr<number[]>(pid);
    }

    /**
     * The Excel worksheet reference to the Y values for this chart (not
     * including the column heading).
     */
    get y_values_ref() {
      const pid = append_packed_id(this.packed_id, 'y_values_ref');
      return py_funs.get_attr<string>(pid);
    }
  }

  return Class;
};

/**
 * Base class providing common members for data point objects.
 */
export class _BaseDataPoint extends PackedBase {
  /**
   * The formatting template string that determines how the value of this
   * data point is formatted, both in the chart and in the Excel
   * spreadsheet; for example '#,##0.0'. If not specified for this data
   * point, it is inherited from the parent series data object.
   */
  get number_format() {
    const pid = append_packed_id(this.packed_id, 'number_format');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * A data point in a category chart series. Provides access to the value of
 * the datapoint and the number format with which it should appear in the
 * Excel file.
 */
export class CategoryDataPoint extends _BaseDataPoint {
  /**
   * The (Y) value for this category data point.
   */
  get value() {
    const pid = append_packed_id(this.packed_id, 'value');
    return py_funs.get_attr<number>(pid);
  }
}

/**
 * A data point in an XY chart series. Provides access to the x and y values
 * of the datapoint.
 */
export class XyDataPoint extends _BaseDataPoint {
  /**
   * The X value for this XY data point.
   */
  get x() {
    const pid = append_packed_id(this.packed_id, 'x');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * The Y value for this XY data point.
   */
  get y() {
    const pid = append_packed_id(this.packed_id, 'y');
    return py_funs.get_attr<number>(pid);
  }
}

/**
 * A data point in a bubble chart series. Provides access to the x, y, and
 * size values of the datapoint.
 */
export class BubbleDataPoint extends XyDataPoint {
  /**
   * The value representing the size of the bubble for this data point.
   */
  get bubble_size() {
    const pid = append_packed_id(this.packed_id, 'bubble_size');
    return py_funs.get_attr<number>(pid);
  }
}

/**
 * The data specific to a particular category chart series. It provides
 * access to the series label, the series data points, and an optional
 * number format to be applied to each data point not having a specified
 * number format.
 */
export class CategorySeriesData extends _BaseSeriesData<CategoryDataPoint>(CategoryDataPoint) {
  /**
   * Return a CategoryDataPoint object newly created with value `value`,
   * an optional `number_format`, and appended to this array.
   */
  add_data_point(value: number, number_format?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_data_point');
    return py_funs.call_method_returns_instance(pid, CategoryDataPoint, arguments, value, number_format);
  }

  /**
   * The `data.Categories` object that provides access to the category
   * objects for this series.
   */
  get categories() {
    const pid = append_packed_id(this.packed_id, 'categories');
    return py_funs.get_attr_returns_instance(pid, Categories);
  }

  /**
   * The Excel worksheet reference to the categories for this chart (not
   * including the column heading).
   */
  get categories_ref() {
    const pid = append_packed_id(this.packed_id, 'categories_ref');
    return py_funs.get_attr<string>(pid);
  }

  /**
   * An array containing the (Y) value of each datapoint in this series,
   * in data point order.
   */
  get values() {
    const pid = append_packed_id(this.packed_id, 'values');
    return py_funs.get_attr<number[]>(pid);
  }

  /**
   * The Excel worksheet reference to the (Y) values for this series (not
   * including the column heading).
   */
  get values_ref() {
    const pid = append_packed_id(this.packed_id, 'values_ref');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * The data specific to a particular XY chart series. It provides access to
 * the series label, the series data points, and an optional number format
 * to be applied to each data point not having a specified number format.
 *
 * The array of data points in an XY series is significant; lines are
 * plotted following the sequence of points, even if that causes a line
 * segment to "travel backward" (implying a multi-valued function). The data
 * points are not automatically sorted into increasing order by X value.
 */
export class XySeriesData extends _BaseSeriesData<XyDataPoint>(XyDataPoint) {
  /**
   * Return an XyDataPoint object newly created with values `x` and `y`,
   * and appended to this array.
   */
  add_data_point(value: number, number_format?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_data_point');
    return py_funs.call_method_returns_instance(pid, XyDataPoint, arguments, value, number_format);
  }
}

/**
 * The data specific to a particular Bubble chart series. It provides access
 * to the series label, the series data points, and an optional number
 * format to be applied to each data point not having a specified number
 * format.
 *
 * The array of data points in a bubble chart series is maintained
 * throughout the chart building process because a data point has no unique
 * identifier and can only be retrieved by index.
 */
export class BubbleSeriesData extends _BaseSeriesData<BubbleDataPoint>(BubbleDataPoint) {
  /**
   * Append a new BubbleDataPoint object having the values `x`, `y`, and
   * `size`. The optional `number_format` is used to format the Y value.
   * If not provided, the number format is inherited from the series data.
   */
  add_data_point(x: number, y: number, size: number, number_format?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_data_point');
    return py_funs.call_method_returns_instance(pid, BubbleDataPoint, arguments, x, y, size, number_format);
  }

  /**
   * An array containing the bubble size for each datapoint in this
   * series, in data point order.
   */
  get bubble_sizes() {
    const pid = append_packed_id(this.packed_id, 'bubble_sizes');
    return py_funs.get_attr<number[]>(pid);
  }

  /**
   * The Excel worksheet reference for the range containing the bubble
   * sizes for this series.
   */
  get bubble_sizes_ref() {
    const pid = append_packed_id(this.packed_id, 'bubble_sizes_ref');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * A specialized ChartData object suitable for use with an XY (aka. scatter)
 * chart. Unlike ChartData, it has no category sequence. Rather, each data
 * point of each series specifies both an X and a Y value.
 */
export class XyChartData extends _BaseChartData<XySeriesData>(XySeriesData) {
  /**
   * Return an `XySeriesData` object newly created and added at the end of
   * this array, identified by `name` and values formatted with
   * `number_format`.
   */
  add_series(name: string, number_format?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_series');
    return py_funs.call_method_returns_instance(pid, XySeriesData, arguments, name, number_format);
  }
}

/**
 * A specialized ChartData object suitable for use with a bubble chart.
 * A bubble chart is essentially an XY chart where the markers are scaled to
 * provide a third quantitative dimension to the exhibit.
 */
export class BubbleChartData extends _BaseChartData<BubbleSeriesData>(BubbleSeriesData) {
  /**
   * Return a `BubbleSeriesData` object newly created and added at the end
   * of this array, and having series named `name` and values formatted
   * with `number_format`.
   */
  add_series(name: string, number_format?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_series');
    return py_funs.call_method_returns_instance(pid, BubbleSeriesData, arguments, name, number_format);
  }
  /**
   * The Excel worksheet reference for the range containing the bubble
   * sizes for `series`.
   */
  bubble_sizes_ref(series: BubbleSeriesData) {
    const pid = append_packed_id(this.packed_id, 'bubble_sizes_ref');
    return py_funs.call_method<string>(pid, arguments, series);
  }
}

/**
 * Accumulates data specifying the categories and series values for a chart
 * and acts as a proxy for the chart data table that will be written to an
 * Excel worksheet. Used as a parameter in `shapes.add_chart` and
 * `Chart.replace_data`.
 *
 * This object is suitable for use with category charts, i.e. all those
 * having a discrete set of label values (categories) as the range of their
 * independent variable (X-axis) values. Unlike the ChartData types for
 * charts supporting a continuous range of independent variable values (such
 * as XyChartData), CategoryChartData has a single collection of category
 * (X) values and each data point in its series specifies only the Y value.
 * The corresponding X value is inferred by its position in the sequence.
 */
export class CategoryChartData extends _BaseChartData<CategorySeriesData>(CategorySeriesData) {
  /**
   * Return a newly created `data.Category` object having `label` and
   * appended to the end of the category collection for this chart.
   * `label` can be a string, a number, a datetime.date, or
   * datetime.datetime object. All category labels in a chart must be the
   * same type. All category labels in a chart having multi-level
   * categories must be strings.
   */
  add_category(label: string | number | Date) {
    const pid = append_packed_id(this.packed_id, 'add_category');
    return py_funs.call_method_returns_instance(pid, Category, arguments, label);
  }

  /**
   * Add a series to this data set entitled `name` and having the data
   * points specified by `values`, an array of numeric values.
   * `number_format` specifies how the series values will be displayed,
   * and may be a string, e.g. '#,##0' corresponding to an Excel number
   * format.
   */
  add_series(name: string, values: number[] = [], number_format?: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'add_series');
    return py_funs.call_method_returns_instance(pid, CategorySeriesData, arguments, name, Tuple(values), number_format);
  }

  /**
   * `data.Categories` object providing access to category-object hierarchy.
   *
   * Assigning an array of category labels (strings, numbers, or dates) replaces
   * the `data.Categories` object with a new one containing a category for each label
   * in the sequence.
   *
   * Creating a chart from chart data having date categories will cause the chart to
   * have a `DateAxis` for its category axis.
   */
  set categories(categories: (string | number | Date)[]) {
    const pid = append_packed_id(this.packed_id, 'categories');
    py_funs.set_attr(pid, Tuple(categories));
  }
  get categories(): Categories {
    const pid = append_packed_id(this.packed_id, 'categories');
    return py_funs.get_attr_returns_instance(pid, Categories);
  }

  /**
   * The Excel worksheet reference to the categories for this chart (not
   * including the column heading).
   */
  get categories_ref() {
    const pid = append_packed_id(this.packed_id, 'categories_ref');
    return py_funs.call_method<string>(pid, arguments);
  }

  /**
   * The Excel worksheet reference to the values for `series` (not
   * including the column heading).
   */
  values_ref(series: CategorySeriesData) {
    const pid = append_packed_id(this.packed_id, 'values_ref');
    return py_funs.call_method<string>(pid, arguments, series);
  }
}

/**
 * An array of `data.Category` objects, also having certain hierarchical
 * graph behaviors for support of multi-level (nested) categories.
 */
export class Categories extends MutableArrayMixin<Category, Type<PackedBase>>(PackedBase) {
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, Category);
  }

  get length() {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Return a newly created `data.Category` object having `label` and
   * appended to the end of this category array. `label` can be
   * a string, a number, a datetime.date, or datetime.datetime object. All
   * category labels in a chart must be the same type. All category labels
   * in a chart having multi-level categories must be strings.
   *
   * Creating a chart from chart data having date categories will cause
   * the chart to have a `DateAxis` for its category axis.
   */
  add_category(label: string | number | Date) {
    const pid = append_packed_id(this.packed_id, 'add_category');
    return py_funs.call_method<undefined>(pid, arguments, label);
  }

  /**
   * Return `true` if the first category in this collection has a date
   * label (as opposed to str or numeric). A date label is one of type
   * datetime.date or datetime.datetime. Returns `false` otherwise,
   * including when this category collection is empty. It also returns
   * false when this category collection is hierarchical, because
   * hierarchical categories can only be written as string labels.
   */
  get are_dates() {
    const pid = append_packed_id(this.packed_id, 'are_dates');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * Return `true` if the first category in this collection has a numeric
   * label (as opposed to a string label), including if that value is
   * a datetime.date or datetime.datetime object (as those are converted
   * to integers for storage in Excel). Returns `false` otherwise,
   * including when this category collection is empty. It also returns
   * false when this category collection is hierarchical, because
   * hierarchical categories can only be written as string labels.
   */
  get are_numeric() {
    const pid = append_packed_id(this.packed_id, 'are_numeric');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * The number of hierarchy levels in this category graph. Returns 0 if
   * it contains no categories.
   */
  get depth() {
    const pid = append_packed_id(this.packed_id, 'depth');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * The offset of `category` in the overall array of leaf categories.
   * A non-leaf category gets the index of its first sub-category.
   */
  index(category: Category) {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.call_method<number>(pid, arguments, category);
  }

  /**
   * The number of leaf-level categories in this hierarchy. The return
   * value is the same as that of `length` only when the hierarchy is
   * single level.
   */
  get leaf_count() {
    const pid = append_packed_id(this.packed_id, 'leaf_count');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * An array of [idx, label] pairs representing the category
   * hierarchy from the bottom up. The first level contains all leaf
   * categories, and each subsequent is the next level up.
   */
  get levels() {
    const pid = append_packed_id(this.packed_id, 'levels');
    return py_funs.get_attr_returns_generator<[idx: number, label: string][][]>(pid);
  }

  /**
   * Read/write. Return a string representing the number format used in
   * Excel to format these category values, e.g. '0.0' or 'mm/dd/yyyy'.
   * This string is only relevant when the categories are numeric or date
   * type, although it returns 'General' without error when the categories
   * are string labels. Assigning `undefined` causes the default number format
   * to be used, based on the type of the category labels.
   */
  set number_format(number_format: string) {
    const pid = append_packed_id(this.packed_id, 'number_format');
    py_funs.set_attr(pid, number_format);
  }
  get number_format() {
    const pid = append_packed_id(this.packed_id, 'number_format');
    return py_funs.get_attr(pid);
  }
}

/**
 * A chart category, primarily having a label to be displayed on the
 * category axis, but also able to be configured in a hierarchy for support
 * of multi-level category charts.
 */
export class Category extends PackedBase {
  /**
   * Return a newly created `data.Category` object having `label` and
   * appended to the end of the sub-category array for this category.
   */
  add_sub_category(label: number | string | Date) {
    const pid = append_packed_id(this.packed_id, 'add_sub_category');
    return py_funs.call_method_returns_instance(pid, Category, arguments, label);
  }

  /**
   * The number of hierarchy levels rooted at this category node. Returns
   * 1 if this category has no sub-categories.
   */
  get depth() {
    const pid = append_packed_id(this.packed_id, 'depth');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * The offset of this category in the overall array of leaf
   * categories. A non-leaf category gets the index of its first
   * sub-category.
   */
  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * The offset of `sub_category` in the overall array of leaf
   * categories.
   */
  index(sub_category: Category) {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.call_method<number>(pid, arguments, sub_category);
  }

  /**
   * The number of leaf category nodes under this category. Returns
   * 1 if this category has no sub-categories.
   */
  get leaf_count() {
    const pid = append_packed_id(this.packed_id, 'leaf_count');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * The value that appears on the axis for this category. The label can
   * be a string, a number, or a datetime.date or datetime.datetime
   * object.
   */
  get label() {
    const pid = append_packed_id(this.packed_id, 'label');
    return py_funs.get_attr<number | string | Date>(pid);
  }

  /**
   * The string representation of the numeric (or date) label of this
   * category, suitable for use in the XML `c:pt` element for this
   * category. The optional `date_1904` parameter specifies the epoch used
   * for calculating Excel date numbers.
   */
  numeric_str_val(date_1904: boolean = false) {
    const pid = append_packed_id(this.packed_id, 'numeric_str_val');
    return py_funs.call_method<string>(pid, arguments, date_1904);
  }

  /**
   * The array of child categories for this category.
   */
  get sub_categories() {
    const pid = append_packed_id(this.packed_id, 'sub_categories');
    return py_funs.get_attr_returns_instance_list(pid, Category);
  }
}

/**
 * `ChartData` is simply an alias for `CategoryChartData` and may be removed
 * in a future release. All new development should use `CategoryChartData`
 * for creating or replacing the data in chart types other than XY and
 * Bubble.
 */
export const ChartData = CategoryChartData;
export type ChartData = CategoryChartData;
