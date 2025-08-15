// not use in public methods:
// _MoviePicElementCreator
// _OleObjectElementCreator

import { append_packed_id, Enum, type LengthType, List, py_funs, Tuple } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { Chart } from '../chart/chart';
import { CategoryChartData } from '../chart/data';
import { XL_CHART_TYPE } from '../enum/chart';
import { MSO_CONNECTOR_TYPE, MSO_SHAPE, PP_PLACEHOLDER, PP_PLACEHOLDER_TYPE } from '../enum/shapes';
import { CT_GroupShape } from '../oxml/shapes/groupshape';
import { ParentedElementProxy } from '../shared';
import { SlideLayout } from '../slide';
import { Shape } from './autoshape';
import { BaseShape } from './base';
import { Connector } from './connector';
import { FreeformBuilder } from './freeform';
import { GraphicFrame } from './graphfrm';
import { GroupShape } from './group';
import { Movie, Picture } from './picture';
import {
  ChartPlaceholder,
  LayoutPlaceholder,
  MasterPlaceholder,
  NotesSlidePlaceholder,
  PicturePlaceholder,
  PlaceholderGraphicFrame,
  PlaceholderPicture,
  SlidePlaceholder,
  TablePlaceholder
} from './placeholder';

type ShapeType = Movie | Picture | Connector | GroupShape | Shape | GraphicFrame | BaseShape;

/**
 * Base class for a shape collection appearing in a slide-type object.
 *
 * Subclasses include Slide, SlideLayout, and SlideMaster. Provides common methods.
 */
export class _BaseShapes extends MutableArrayMixin<ShapeType, Type<ParentedElementProxy>>(ParentedElementProxy) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShape);
  }

  get _spTree() {
    return this._element;
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, BaseShapeFactory);
  }

  /**
   * Add a new placeholder shape based on `placeholder`.
   */
  clone_placeholder(placeholder: LayoutPlaceholder) {
    const pid = append_packed_id(this.packed_id, 'clone_placeholder');
    return py_funs.call_method<undefined>(pid, arguments, placeholder);
  }

  /**
   * Return the base name for a placeholder of `ph_type` in this shape collection.
   *
   * There is some variance between slide types, for example a notes slide uses a different
   * name for the body placeholder, so this method can be overriden by subclasses.
   */
  ph_basename(ph_type: PP_PLACEHOLDER_TYPE): string {
    const pid = append_packed_id(this.packed_id, 'ph_basename');
    return py_funs.call_method(pid, arguments, Enum(PP_PLACEHOLDER_TYPE, ph_type));
  }

  /**
   * True if "turbo-add" mode is enabled. Read/Write.
   *
   * EXPERIMENTAL: This feature can radically improve performance when adding large numbers
   * (hundreds of shapes) to a slide. It works by caching the last shape ID used and
   * incrementing that value to assign the next shape id. This avoids repeatedly searching all
   * shape ids in the slide each time a new ID is required.
   *
   * Performance is not noticeably improved for a slide with a relatively small number of
   * shapes, but because the search time rises with the square of the shape count, this option
   * can be useful for optimizing generation of a slide composed of many shapes.
   *
   * Shape-id collisions can occur (causing a repair error on load) if more than one `Slide`
   * object is used to interact with the same slide in the presentation. Note that the `Slides`
   * collection creates a new `Slide` object each time a slide is accessed (e.g. `slide =
   * prs.slides[0]`, so you must be careful to limit use to a single `Slide` object.
   */
  set turbo_add_enabled(turbo_add_enabled: boolean) {
    const pid = append_packed_id(this.packed_id, 'turbo_add_enabled');
    py_funs.set_attr(pid, turbo_add_enabled);
  }
  get turbo_add_enabled(): boolean {
    const pid = append_packed_id(this.packed_id, 'turbo_add_enabled');
    return py_funs.get_attr(pid);
  }
}

/**
 * Base class for shape-trees that can add shapes.
 */
export class _BaseGroupShapes extends _BaseShapes {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShape);
  }

  get _grpSp() {
    return this._element;
  }

  create_category_chart_data(number_format?: string) {
    const pid = py_funs.create_category_chart_data(this.packed_id, number_format);
    return new CategoryChartData(pid);
  }

  /**
   * Add a new chart of `chart_type` to the slide.
   *
   * The chart is positioned at (`x`, `y`), has size (`cx`, `cy`), and depicts `chart_data`.
   * `chart_type` is one of the :ref:`XlChartType` enumeration values. `chart_data` is a
   * `ChartData` object populated with the categories and series values for the chart.
   *
   * Note that a `GraphicFrame` shape object is returned, not the `Chart` object contained in
   * that graphic frame shape. The chart object may be accessed using the :attr:`chart`
   * property of the returned `GraphicFrame` object.
   */
  add_chart(
    chart_type: XL_CHART_TYPE,
    x: LengthType,
    y: LengthType,
    cx: LengthType,
    cy: LengthType,
    chart_data: CategoryChartData
  ) {
    const pid = append_packed_id(this.packed_id, 'add_chart');
    return py_funs.call_method_returns_instance(
      pid,
      GraphicFrame,
      arguments,
      Enum(XL_CHART_TYPE, chart_type),
      x,
      y,
      cx,
      cy,
      chart_data
    );
  }

  /**
   * Add a newly created connector shape to the end of this shape tree.
   *
   * `connector_type` is a member of the :ref:`MsoConnectorType` enumeration and the end-point
   * values are specified as EMU values. The returned connector is of type `connector_type` and
   * has begin and end points as specified.
   */
  add_connector(
    connector_type: MSO_CONNECTOR_TYPE,
    begin_x: LengthType,
    begin_y: LengthType,
    end_x: LengthType,
    end_y: LengthType
  ) {
    const pid = append_packed_id(this.packed_id, 'add_connector');
    return py_funs.call_method_returns_instance(
      pid,
      Connector,
      arguments,
      Enum(MSO_CONNECTOR_TYPE, connector_type),
      begin_x,
      begin_y,
      end_x,
      end_y
    );
  }

  /**
   * Return a `GroupShape` object newly appended to this shape tree.
   *
   * The group shape is empty and must be populated with shapes using methods on its shape
   * tree, available on its `.shapes` property. The position and extents of the group shape are
   * determined by the shapes it contains; its position and extents are recalculated each time
   * a shape is added to it.
   */
  add_group_shape(shapes: BaseShape[]) {
    const pid = append_packed_id(this.packed_id, 'add_group_shape');
    return py_funs.call_method_returns_instance(pid, GroupShape, arguments, List(shapes));
  }

  /**
   * Return newly-created GraphicFrame shape embedding `object_file`.
   *
   * The returned graphic-frame shape contains `object_file` as an embedded OLE object. It is
   * displayed as an icon at `left`, `top` with size `width`, `height`. `width` and `height`
   * may be omitted when `prog_id` is a member of `PROG_ID`, in which case the default icon
   * size is used. This is advised for best appearance where applicable because it avoids an
   * icon with a "stretched" appearance.
   *
   * `object_file` may either be a str path to a file or file-like object (such as
   * `io.BytesIO`) containing the bytes of the object to be embedded (such as an Excel file).
   *
   * `prog_id` can be either a member of `pptx.enum.shapes.PROG_ID` or a str value like
   * `"Adobe.Exchange.7"` determined by inspecting the XML generated by PowerPoint for an
   * object of the desired type.
   *
   * `icon_file` may either be a str path to an image file or a file-like object containing the
   * image. The image provided will be displayed in lieu of the OLE object; double-clicking on
   * the image opens the object (subject to operating-system limitations). The image file can
   * be any supported image file. Those produced by PowerPoint itself are generally EMF and can
   * be harvested from a PPTX package that embeds such an object. PNG and JPG also work fine.
   *
   * `icon_width` and `icon_height` are `Length` values (e.g. Emu() or Inches()) that describe
   * the size of the icon image within the shape. These should be omitted unless a custom
   * `icon_file` is provided. The dimensions must be discovered by inspecting the XML.
   * Automatic resizing of the OLE-object shape can occur when the icon is double-clicked if
   * these values are not as set by PowerPoint. This behavior may only manifest in the Windows
   * version of PowerPoint.
   */
  add_ole_object(
    object_file: Uint8Array,
    prog_id: string,
    left: LengthType,
    top: LengthType,
    width?: LengthType | undefined,
    height?: LengthType | undefined,
    icon_file?: Uint8Array | undefined,
    icon_width?: LengthType | undefined,
    icon_height?: LengthType | undefined
  ) {
    const pid = append_packed_id(this.packed_id, 'add_ole_object');
    return py_funs.call_method_returns_instance(
      pid,
      GraphicFrame,
      arguments,
      object_file,
      prog_id,
      left,
      top,
      width,
      height,
      icon_file,
      icon_width,
      icon_height
    );
  }

  /**
   * Add picture shape displaying image in `image_file`.
   *
   * `image_file` can be either a path to a file (a string) or a file-like object. The picture
   * is positioned with its top-left corner at (`top`, `left`). If `width` and `height` are
   * both `undefined`, the native size of the image is used. If only one of `width` or `height` is
   * used, the unspecified dimension is calculated to preserve the aspect ratio of the image.
   * If both are specified, the picture is stretched to fit, without regard to its native
   * aspect ratio.
   */
  add_picture(
    image_file: Uint8Array,
    left: LengthType,
    top: LengthType,
    width?: LengthType | undefined,
    height?: LengthType | undefined
  ) {
    const pid = append_packed_id(this.packed_id, 'add_picture');
    return py_funs.call_method_returns_instance(pid, Picture, arguments, image_file, left, top, width, height);
  }

  /**
   * Return new `Shape` object appended to this shape tree.
   *
   * `autoshape_type_id` is a member of :ref:`MsoAutoShapeType` e.g. `MSO_SHAPE.RECTANGLE`
   * specifying the type of shape to be added. The remaining arguments specify the new shape's
   * position and size.
   */
  add_shape(autoshape_type_id: MSO_SHAPE, left: LengthType, top: LengthType, width: LengthType, height: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_shape');
    return py_funs.call_method_returns_instance(
      pid,
      Shape,
      arguments,
      Enum(MSO_SHAPE, autoshape_type_id),
      left,
      top,
      width,
      height
    );
  }

  /**
   * Return newly added text box shape appended to this shape tree.
   *
   * The text box is of the specified size, located at the specified position on the slide.
   */
  add_textbox(left: LengthType, top: LengthType, width: LengthType, height: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_textbox');
    return py_funs.call_method_returns_instance(pid, Shape, arguments, left, top, width, height);
  }

  /**
   * Return `FreeformBuilder` object to specify a freeform shape.
   *
   * The optional `start_x` and `start_y` arguments specify the starting pen position in local
   * coordinates. They will be rounded to the nearest integer before use and each default to
   * zero.
   *
   * The optional `scale` argument specifies the size of local coordinates proportional to
   * slide coordinates (EMU). If the vertical scale is different than the horizontal scale
   * (local coordinate units are "rectangular"), a pair of numeric values can be provided as
   * the `scale` argument, e.g. `scale=(1.0, 2.0)`. In this case the first number is
   * interpreted as the horizontal (X) scale and the second as the vertical (Y) scale.
   *
   * A convenient method for calculating scale is to divide a `Length` object by an equivalent
   * count of local coordinate units, e.g. `scale = Inches(1)/1000` for 1000 local units per
   * inch.
   */
  build_freeform(start_x: number = 0, start_y: number = 0, scale: [number, number] | number = 1.0) {
    const pid = append_packed_id(this.packed_id, 'build_freeform');
    return py_funs.call_method_returns_instance(
      pid,
      FreeformBuilder,
      arguments,
      start_x,
      start_y,
      Array.isArray(scale) ? Tuple(scale) : scale
    );
  }

  /**
   * Return the index of `shape` in this sequence.
   *
   * Raises `ValueError` if `shape` is not in the collection.
   */
  index(shape: BaseShape) {
    const pid = append_packed_id(this.packed_id, 'index');
    return py_funs.call_method<number>(pid, arguments, shape);
  }
}

/**
 * The sequence of child shapes belonging to a group shape.
 *
 * Note that this collection can itself contain a group shape, making this part of a recursive,
 * tree data structure (acyclic graph).
 */
export class GroupShapes extends _BaseGroupShapes {}

/**
 * Sequence of shapes appearing on a slide.
 *
 * The first shape in the sequence is the backmost in z-order and the last shape is topmost.
 * Supports indexed access, len(), index(), and iteration.
 */
export class SlideShapes extends _BaseGroupShapes {
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, SlideShapeFactory);
  }

  /**
   * Return newly added movie shape displaying video in `movie_file`.
   *
   * **EXPERIMENTAL.** This method has important limitations:
   *
   * * The size must be specified; no auto-scaling such as that provided by `add_picture`
   *   is performed.
   * * The MIME type of the video file should be specified, e.g. 'video/mp4'. The provided
   *   video file is not interrogated for its type. The MIME type `video/unknown` is used by
   *   default (and works fine in tests as of this writing).
   * * A poster frame image must be provided, it cannot be automatically extracted from the
   *   video file. If no poster frame is provided, the default "media loudspeaker" image will
   *   be used.
   *
   * Return a newly added movie shape to the slide, positioned at (`left`, `top`), having size
   * (`width`, `height`), and containing `movie_file`. Before the video is started,
   * `poster_frame_image` is displayed as a placeholder for the video.
   */
  add_movie(
    movie_file: Uint8Array,
    left: LengthType,
    top: LengthType,
    width: LengthType,
    height: LengthType,
    poster_frame_image?: Uint8Array | undefined,
    mime_type: string = 'video/unknown'
  ) {
    const pid = append_packed_id(this.packed_id, 'add_movie');
    return py_funs.call_method_returns_instance(
      pid,
      GraphicFrame,
      arguments,
      movie_file,
      left,
      top,
      width,
      height,
      poster_frame_image,
      mime_type
    );
  }

  /**
   * Add a `GraphicFrame` object containing a table.
   *
   * The table has the specified number of `rows` and `cols` and the specified position and
   * size. `width` is evenly distributed between the columns of the new table. Likewise,
   * `height` is evenly distributed between the rows. Note that the `.table` property on the
   * returned `GraphicFrame` shape must be used to access the enclosed `Table` object.
   */
  add_table(rows: number, cols: number, left: LengthType, top: LengthType, width: LengthType, height: LengthType) {
    const pid = append_packed_id(this.packed_id, 'add_table');
    return py_funs.call_method_returns_instance(pid, GraphicFrame, arguments, rows, cols, left, top, width, height);
  }

  /**
   * Add placeholder shapes based on those in `slide_layout`.
   *
   * Z-order of placeholders is preserved. Latent placeholders (date, slide number, and footer)
   * are not cloned.
   */
  clone_layout_placeholders(slide_layout: SlideLayout) {
    const pid = append_packed_id(this.packed_id, 'clone_layout_placeholders');
    return py_funs.call_method(pid, arguments, slide_layout);
  }

  /**
   * Sequence of placeholder shapes in this slide.
   */
  get placeholders() {
    const pid = append_packed_id(this.packed_id, 'placeholders');
    return py_funs.get_attr_returns_instance(pid, SlidePlaceholders);
  }

  /**
   * The title placeholder shape on the slide.
   *
   * `undefined` if the slide has no title placeholder.
   */
  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr_returns_instance_or_undefined(pid, Shape);
  }
}

/**
 * Sequence of shapes appearing on a slide layout.
 *
 * The first shape in the sequence is the backmost in z-order and the last shape is topmost.
 */
export class LayoutShapes extends _BaseShapes {
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _LayoutShapeFactory);
  }
}

/**
 * Sequence of shapes appearing on a slide master.
 *
 * The first shape in the sequence is the backmost in z-order and the last shape is topmost.
 */
export class MasterShapes extends _BaseShapes {
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _MasterShapeFactory);
  }
}

/**
 * Sequence of shapes appearing on a notes slide.
 *
 * The first shape in the sequence is the backmost in z-order and the last shape is topmost.
 */
export class NotesSlideShapes extends _BaseShapes {
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _NotesSlideShapeFactory);
  }

  /**
   * Return the base name for a placeholder of `ph_type` in this shape collection.
   *
   * A notes slide uses a different name for the body placeholder and has some unique
   * placeholder types, so this method overrides the default in the base class.
   */
  ph_basename(ph_type: PP_PLACEHOLDER): string {
    const pid = append_packed_id(this.packed_id, 'ph_basename');
    return py_funs.call_method(pid, arguments, Enum(PP_PLACEHOLDER, ph_type));
  }
}

/**
 * Base class for placeholder collections.
 *
 * Subclasses differentiate behaviors for a master, layout, and slide. By default, placeholder
 * shapes are constructed using `BaseShapeFactory`. Subclasses should override
 *  `_shape_factory` to use custom placeholder classes.
 */
export class BasePlaceholders extends _BaseShapes {}

/**
 * Sequence of `LayoutPlaceholder` instance for each placeholder shape on a slide layout.
 */
export class LayoutPlaceholders extends BasePlaceholders {
  get(idx: number): LayoutPlaceholder {
    const pid = append_packed_id(this.packed_id, 'get');
    return py_funs.call_method(pid, arguments, idx);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _LayoutShapeFactory);
  }
}

/**
 * Sequence of MasterPlaceholder representing the placeholder shapes on a slide master.
 */
export class MasterPlaceholders extends BasePlaceholders {
  get(ph_type: PP_PLACEHOLDER): LayoutPlaceholder {
    const pid = append_packed_id(this.packed_id, 'get');
    return py_funs.call_method(pid, arguments, Enum(PP_PLACEHOLDER, ph_type));
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _MasterShapeFactory);
  }
}

/**
 * Sequence of placeholder shapes on a notes slide.
 */
export class NotesSlidePlaceholders extends MasterPlaceholders {
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, _NotesSlideShapeFactory);
  }
}

/**
 * Collection of placeholder shapes on a slide.
 *
 * Supports iteration, :func:`len`, and dictionary-style lookup on the `idx` value of the
 * placeholders it contains.
 */
export class SlidePlaceholders extends MutableArrayMixin<
  ReturnType<typeof SlideShapeFactory>,
  Type<ParentedElementProxy>
>(ParentedElementProxy) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_GroupShape);
  }

  // @ts-ignore
  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, SlideShapeFactory);
  }

  get length(): number {
    return py_funs.get_attr_len(this.packed_id);
  }
}

export const BaseShapeFactory = (cls: string) => {
  const clsList = {
    Movie: Movie,
    Picture: Picture,
    Connector: Connector,
    GroupShape: GroupShape,
    Shape: Shape,
    GraphicFrame: GraphicFrame,
    BaseShape: BaseShape
  } as const;
  return clsList[cls as keyof typeof clsList];
};

const _MasterShapeFactory = (cls: string) => {
  const clsList = {
    MasterPlaceholder: MasterPlaceholder
  } as const;
  return (clsList[cls as keyof typeof clsList] || BaseShapeFactory(cls)) as
    | (typeof clsList)[keyof typeof clsList]
    | ReturnType<typeof BaseShapeFactory>;
};

const _LayoutShapeFactory = (cls: string) => {
  const clsList = {
    LayoutPlaceholder: LayoutPlaceholder
  } as const;
  return (clsList[cls as keyof typeof clsList] || BaseShapeFactory(cls)) as
    | (typeof clsList)[keyof typeof clsList]
    | ReturnType<typeof BaseShapeFactory>;
};

const _NotesSlideShapeFactory = (cls: string) => {
  const clsList = {
    NotesSlidePlaceholder: NotesSlidePlaceholder
  } as const;
  return (clsList[cls as keyof typeof clsList] || BaseShapeFactory(cls)) as
    | (typeof clsList)[keyof typeof clsList]
    | ReturnType<typeof BaseShapeFactory>;
};

const _SlidePlaceholderFactory = (cls: string) => {
  const clsList = {
    PicturePlaceholder: PicturePlaceholder,
    ChartPlaceholder: ChartPlaceholder,
    TablePlaceholder: TablePlaceholder,
    SlidePlaceholder: SlidePlaceholder,
    PlaceholderGraphicFrame: PlaceholderGraphicFrame,
    PlaceholderPicture: PlaceholderPicture
  } as const;
  return (clsList[cls as keyof typeof clsList] || BaseShapeFactory(cls)) as
    | (typeof clsList)[keyof typeof clsList]
    | ReturnType<typeof BaseShapeFactory>;
};

export const SlideShapeFactory = (cls: string) => {
  return _SlidePlaceholderFactory(cls) || BaseShapeFactory(cls);
};
