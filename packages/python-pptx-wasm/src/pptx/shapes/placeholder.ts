import { append_packed_id, Enum, PackedBase, py_funs } from '../../bridge';
import { type Type } from '../../utils';
import { CategoryChartData } from '../chart/data';
import { XL_CHART_TYPE } from '../enum/chart';
import { MSO_SHAPE_TYPE, PP_PLACEHOLDER } from '../enum/shapes';
import { Shape } from './autoshape';
import { GraphicFrame } from './graphfrm';
import { Picture } from './picture';

/**
 * Mixin class that provides inherited dimension behavior. Specifically,
 * left, top, width, and height report the value from the layout placeholder
 * where they would have otherwise reported `undefined`. This behavior is
 * distinctive to placeholders. :meth:`_base_placeholder` must be overridden
 * by all subclasses to provide lookup of the appropriate base placeholder
 * to inherit from.
 */
const _InheritsDimensionsMixin = <B extends Type>(Base: B) => {
  class Class extends Base {
    constructor(...rest: any[]) {
      super(...rest);
    }

    /**
     * The effective height of this placeholder shape; its directly-applied
     * height if it has one, otherwise the height of its parent layout
     * placeholder.
     */
    set height(height: number) {
      const pid = append_packed_id(this.packed_id, 'height');
      py_funs.set_attr(pid, height);
    }
    get height() {
      const pid = append_packed_id(this.packed_id, 'height');
      return py_funs.get_attr(pid);
    }

    /**
     * The effective left of this placeholder shape; its directly-applied
     * left if it has one, otherwise the left of its parent layout
     * placeholder.
     */
    set left(left: number) {
      const pid = append_packed_id(this.packed_id, 'left');
      py_funs.set_attr(pid, left);
    }
    get left() {
      const pid = append_packed_id(this.packed_id, 'left');
      return py_funs.get_attr(pid);
    }

    /**
     * Member of `MsoShapeType` specifying the type of this shape.
     * Unconditionally `MSO_SHAPE_TYPE.PLACEHOLDER` in this case.
     * Read-only.
     */
    get shape_type() {
      const pid = append_packed_id(this.packed_id, 'shape_type');
      return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
    }

    /**
     * The effective top of this placeholder shape; its directly-applied
     * top if it has one, otherwise the top of its parent layout
     * placeholder.
     */
    set top(top: number) {
      const pid = append_packed_id(this.packed_id, 'top');
      py_funs.set_attr(pid, top);
    }
    get top() {
      const pid = append_packed_id(this.packed_id, 'top');
      return py_funs.get_attr(pid);
    }

    /**
     * The effective width of this placeholder shape; its directly-applied
     * width if it has one, otherwise the width of its parent layout
     * placeholder.
     */
    set width(width: number) {
      const pid = append_packed_id(this.packed_id, 'width');
      py_funs.set_attr(pid, width);
    }
    get width() {
      const pid = append_packed_id(this.packed_id, 'width');
      return py_funs.get_attr(pid);
    }
  }

  return Class;
};

export const _InheritsDimensions = _InheritsDimensionsMixin(PackedBase);
export type _InheritsDimensions = typeof _InheritsDimensions;

/**
 * Base class for placeholders on slides.
 *
 * Provides common behaviors such as inherited dimensions.
 */
export class _BaseSlidePlaceholder extends _InheritsDimensionsMixin(Shape) {
  /**
   * Boolean indicating whether this shape is a placeholder.
   * Unconditionally `true` in this case.
   */
  get is_placeholder() {
    const pid = append_packed_id(this.packed_id, 'is_placeholder');
    return py_funs.get_attr<boolean>(pid);
  }

  /**
   * Member of `MsoShapeType` specifying the type of this shape.
   * Unconditionally `MSO_SHAPE_TYPE.PLACEHOLDER` in this case.
   * Read-only.
   */
  // @ts-ignore
  get shape_type() {
    const pid = append_packed_id(this.packed_id, 'shape_type');
    return py_funs.get_attr<MSO_SHAPE_TYPE>(pid);
  }
}

/**
 * NOTE: This class is deprecated and will be removed from a future release
 * along with the properties *idx*, *orient*, *ph_type*, and *sz*. The *idx*
 * property will be available via the .placeholder_format property. The
 * others will be accessed directly from the oxml layer as they are only
 * used for internal purposes.
 *
 * Base class for placeholder subclasses that differentiate the varying
 * behaviors of placeholders on a master, layout, and slide.
 */
export class BasePlaceholder extends Shape {
  /**
   * Integer placeholder 'idx' attribute, e.g. 0
   */
  get idx(): number {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr(pid);
  }

  /**
   * Placeholder orientation, e.g. ST_Direction.HORZ
   */
  get orient(): string {
    const pid = append_packed_id(this.packed_id, 'orient');
    return py_funs.get_attr(pid);
  }

  /**
   * Placeholder type, e.g. PP_PLACEHOLDER.CENTER_TITLE
   */
  get ph_type() {
    const pid = append_packed_id(this.packed_id, 'ph_type');
    return py_funs.get_attr<PP_PLACEHOLDER>(pid);
  }

  /**
   * Placeholder 'sz' attribute, e.g. ST_PlaceholderSize.FULL
   */
  get sz(): string {
    const pid = append_packed_id(this.packed_id, 'sz');
    return py_funs.get_attr(pid);
  }
}

/**
 * Placeholder shape on a slide layout.
 *
 * Provides differentiated behavior for slide layout placeholders, in particular, inheriting
 * shape properties from the master placeholder having the same type, when a matching one exists.
 */
export class LayoutPlaceholder extends _InheritsDimensionsMixin(Shape) {}

/**
 * Placeholder shape on a slide master.
 */
export class MasterPlaceholder extends BasePlaceholder {}

/**
 * Placeholder shape on a notes slide. Inherits shape properties from the
 * placeholder on the notes master that has the same type (e.g. 'body').
 */
export class NotesSlidePlaceholder extends _InheritsDimensionsMixin(Shape) {}

/**
 * Placeholder shape on a slide. Inherits shape properties from its
 * corresponding slide layout placeholder.
 */
export class SlidePlaceholder extends _BaseSlidePlaceholder {}

/**
 * Placeholder shape that can only accept a chart.
 */
export class ChartPlaceholder extends _BaseSlidePlaceholder {
  create_category_chart_data(number_format?: string) {
    const pid = py_funs.create_category_chart_data(this.packed_id, number_format);
    return new CategoryChartData(pid);
  }

  /**
   * Return a `PlaceholderGraphicFrame` object containing a new chart of
   * *chart_type* depicting *chart_data* and having the same position and
   * size as this placeholder. *chart_type* is one of the
   * `XlChartType` enumeration values. *chart_data* is a `ChartData`
   * object populated with the categories and series values for the chart.
   * Note that the new `Chart` object is not returned directly. The chart
   * object may be accessed using the
   * `PlaceholderGraphicFrame.chart` property of the returned
   * `PlaceholderGraphicFrame` object.
   */
  insert_chart(chart_type: XL_CHART_TYPE, chart_data: CategoryChartData) {
    const pid = append_packed_id(this.packed_id, 'insert_chart');
    return py_funs.call_method_returns_instance(
      pid,
      PlaceholderGraphicFrame,
      arguments,
      Enum(XL_CHART_TYPE, chart_type),
      chart_data
    );
  }
}

/**
 * Placeholder shape that can only accept a picture.
 */
export class PicturePlaceholder extends _BaseSlidePlaceholder {
  /**
   * Return a `PlaceholderPicture` object depicting the image in `image_file`.
   *
   * `image_file` may be either a path (string) or a file-like object. The image is
   * cropped to fill the entire space of the placeholder. A `PlaceholderPicture`
   * object has all the properties and methods of a `Picture` shape except that the
   * value of its `_BaseSlidePlaceholder.shape_type` property is
   * `MSO_SHAPE_TYPE.PLACEHOLDER` instead of `MSO_SHAPE_TYPE.PICTURE`.
   */
  insert_picture(image_file: Uint8Array) {
    const pid = append_packed_id(this.packed_id, 'insert_picture');
    return py_funs.call_method_returns_instance(pid, PlaceholderPicture, arguments, image_file);
  }
}

/**
 * Placeholder shape populated with a table, chart, or smart art.
 */
export class PlaceholderGraphicFrame extends GraphicFrame {
  /**
   * Boolean indicating whether this shape is a placeholder.
   * Unconditionally `true` in this case.
   */
  get is_placeholder(): boolean {
    const pid = append_packed_id(this.packed_id, 'is_placeholder');
    return py_funs.get_attr(pid);
  }
}

/**
 * Placeholder shape populated with a picture.
 */
export class PlaceholderPicture extends _InheritsDimensionsMixin(Picture) {}

/**
 * Placeholder shape that can only accept a table.
 */
export class TablePlaceholder extends _BaseSlidePlaceholder {
  /**
   * Return `PlaceholderGraphicFrame` object containing a `rows` by `cols` table.
   *
   * The position and width of the table are those of the placeholder and its height
   * is proportional to the number of rows. A `PlaceholderGraphicFrame` object has
   * all the properties and methods of a `GraphicFrame` shape except that the value
   * of its  `_BaseSlidePlaceholder.shape_type` property is unconditionally
   * `MSO_SHAPE_TYPE.PLACEHOLDER`. Note that the return value is not the new table
   * but rather *contains* the new table. The table can be accessed using the
   * `PlaceholderGraphicFrame.table` property of the returned
   * `PlaceholderGraphicFrame` object.
   */
  insert_table(rows: number, cols: number) {
    const pid = append_packed_id(this.packed_id, 'insert_table');
    return py_funs.call_method_returns_instance(pid, PlaceholderGraphicFrame, arguments, rows, cols);
  }
}
