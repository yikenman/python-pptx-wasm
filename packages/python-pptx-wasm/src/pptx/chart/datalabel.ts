import { append_packed_id, Enum, PackedBase, py_funs } from '../../bridge';
import { XL_DATA_LABEL_POSITION } from '../enum/chart';
import { CT_DLbls } from '../oxml/chart/datalabel';
import { CT_SeriesComposite } from '../oxml/chart/series';
import { Font, TextFrame } from '../text/text';

/**
 * Provides access to properties of data labels for a plot or a series.
 *
 * This is not a collection and does not provide access to individual data
 * labels. Access to individual labels is via the `Point` object. The
 * properties this object provides control formatting of *all* the data
 * labels in its scope.
 */
export class DataLabels extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_DLbls);
  }

  /**
   * The `Font` object that provides access to the text properties for
   * these data labels, such as bold, italic, etc.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Read/write string specifying the format for the numbers on this set
   * of data labels. Returns 'General' if no number format has been set.
   * Note that this format string has no effect on rendered data labels
   * when `number_format_is_linked` is `true`. Assigning a format
   * string to this property automatically sets
   * `number_format_is_linked` to `false`.
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
   * `number_format`.
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
   * Read/write enumeration value specifying
   * the position of the data labels with respect to their data point, or
   * `undefined` if no position is specified. Assigning `undefined` causes
   * PowerPoint to choose the default position, which varies by chart
   * type.
   */
  set position(position: XL_DATA_LABEL_POSITION | undefined) {
    const pid = append_packed_id(this.packed_id, 'position');
    py_funs.set_attr(pid, Enum(XL_DATA_LABEL_POSITION, position));
  }
  get position() {
    const pid = append_packed_id(this.packed_id, 'position');
    return py_funs.get_attr<XL_DATA_LABEL_POSITION | undefined>(pid);
  }

  /**
   * Read/write. `true` when name of category should appear in label.
   */
  set show_category_name(show_category_name: boolean) {
    const pid = append_packed_id(this.packed_id, 'show_category_name');
    py_funs.set_attr(pid, show_category_name);
  }
  get show_category_name() {
    const pid = append_packed_id(this.packed_id, 'show_category_name');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write. `true` when data label displays legend-color swatch.
   */
  set show_legend_key(show_legend_key: boolean) {
    const pid = append_packed_id(this.packed_id, 'show_legend_key');
    py_funs.set_attr(pid, show_legend_key);
  }
  get show_legend_key() {
    const pid = append_packed_id(this.packed_id, 'show_legend_key');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write. `true` when data label displays percentage.
   *
   * This option is not operative on all chart types. Percentage appears
   * on polar charts such as pie and donut.
   */
  set show_percentage(show_percentage: boolean) {
    const pid = append_packed_id(this.packed_id, 'show_percentage');
    py_funs.set_attr(pid, show_percentage);
  }
  get show_percentage() {
    const pid = append_packed_id(this.packed_id, 'show_percentage');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write. `true` when data label displays series name.
   */
  set show_series_name(show_series_name: boolean) {
    const pid = append_packed_id(this.packed_id, 'show_series_name');
    py_funs.set_attr(pid, show_series_name);
  }
  get show_series_name() {
    const pid = append_packed_id(this.packed_id, 'show_series_name');
    return py_funs.get_attr(pid);
  }

  /**
   * Read/write. `true` when label displays numeric value of datapoint.
   */
  set show_value(show_value: boolean) {
    const pid = append_packed_id(this.packed_id, 'show_value');
    py_funs.set_attr(pid, show_value);
  }
  get show_value() {
    const pid = append_packed_id(this.packed_id, 'show_value');
    return py_funs.get_attr(pid);
  }
}

/**
 * The data label associated with an individual data point.
 */
export class DataLabel extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_SeriesComposite);
  }

  get _ser() {
    return this._element;
  }

  /**
   * The `Font` object providing text formatting for this data label.
   *
   * This font object is used to customize the appearance of automatically
   * inserted text, such as the data point value. The font applies to the
   * entire data label. More granular control of the appearance of custom
   * data label text is controlled by a font object on runs in the text
   * frame.
   */
  get font() {
    const pid = append_packed_id(this.packed_id, 'font');
    return py_funs.get_attr_returns_instance(pid, Font);
  }

  /**
   * Return `true` if this data label has a text frame (implying it has
   * custom data label text), and `false` otherwise. Assigning `true`
   * causes a text frame to be added if not already present. Assigning
   * `false` causes any existing text frame to be removed along with any
   * text contained in the text frame.
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
   * Read/write member specifying the position
   * of this data label with respect to its data point, or `undefined` if no
   * position is specified. Assigning `undefined` causes PowerPoint to choose
   * the default position, which varies by chart type.
   */
  set position(position: XL_DATA_LABEL_POSITION | undefined) {
    const pid = append_packed_id(this.packed_id, 'position');
    py_funs.set_attr(pid, Enum(XL_DATA_LABEL_POSITION, position));
  }
  get position() {
    const pid = append_packed_id(this.packed_id, 'position');
    return py_funs.get_attr<XL_DATA_LABEL_POSITION | undefined>(pid);
  }

  /**
   * `TextFrame` instance for this data label, containing the text of the
   * data label and providing access to its text formatting properties.
   */
  get text_frame() {
    const pid = append_packed_id(this.packed_id, 'text_frame');
    return py_funs.get_attr_returns_instance(pid, TextFrame);
  }
}
