import { append_packed_id, PackedBase, py_funs } from '../../bridge';
import { MutableArrayMixin, type Type } from '../../utils';
import { xChartsFactroy } from '../oxml/chart/chart';
import { CT_Lvl, CT_StrVal_NumVal_Composite } from '../oxml/chart/series';

/**
 * An array of {@link category.Category} objects, each representing a category
 * label on the chart. Provides properties for dealing with hierarchical
 * categories.
 */
export class Categories extends MutableArrayMixin<Category, Type<PackedBase>>(PackedBase) {
  get _xChart() {
    const pid = append_packed_id(this.packed_id, '_xChart');
    return py_funs.get_attr_returns_instance_from_instance_factory(pid, xChartsFactroy);
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, Category);
  }

  get length() {
    return py_funs.get_attr_len(this.packed_id);
  }

  /**
   * Returns an integer representing the number of hierarchical levels in
   * this category collection. Returns 1 for non-hierarchical categories
   * and 0 if no categories are present (generally meaning no series are
   * present).
   */
  get depth() {
    const pid = append_packed_id(this.packed_id, 'depth');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Returns an array of tuples, each containing the flattened hierarchy
   * of category labels for a leaf category. Each tuple is in parent →
   * child order, e.g. `('US', 'CA', 'San Francisco')`, with the leaf
   * category appearing last. If this categories collection is
   * non-hierarchical, each tuple will contain only a leaf category label.
   * If the plot has no series (and therefore no categories), an empty
   * array is returned.
   */
  get flattened_labels() {
    const pid = append_packed_id(this.packed_id, 'flattened_labels');
    return py_funs.get_attr<string[][]>(pid);
  }

  /**
   * Returns an array of {@link CategoryLevel} objects representing the
   * hierarchy of this category collection. The array is empty when the
   * category collection is not hierarchical, that is, contains only
   * leaf-level categories. The levels are ordered from the leaf level to
   * the root level; so the first level will contain the same categories
   * as this category collection.
   */
  get levels() {
    const pid = append_packed_id(this.packed_id, 'levels');
    return py_funs.get_attr_returns_instance_list(pid, CategoryLevel);
  }
}

/**
 * An extension of `string` that provides the category label as its string
 * value, and additional attributes representing other aspects of the
 * category.
 */
export class Category extends PackedBase {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_StrVal_NumVal_Composite);
  }

  get _pt() {
    return this._element;
  }

  /**
   * Returns an integer representing the index reference of this category.
   * For a leaf node, the index identifies the category. For a parent (or
   * other ancestor) category, the index specifies the first leaf category
   * that ancestor encloses.
   */
  get idx() {
    const pid = append_packed_id(this.packed_id, 'idx');
    return py_funs.get_attr<number>(pid);
  }

  /**
   * Returns the label of this category as a string.
   */
  get label() {
    const pid = append_packed_id(this.packed_id, 'label');
    return py_funs.get_attr<string>(pid);
  }
}

/**
 * An array of {@link category.Category} objects representing a single level in
 * a hierarchical category collection. This object is only used when the
 * categories are hierarchical, meaning they have more than one level and
 * higher level categories group those at lower levels.
 */
export class CategoryLevel extends MutableArrayMixin<Category, Type<PackedBase>>(PackedBase) {
  get _element() {
    const pid = append_packed_id(this.packed_id, '_element');
    return py_funs.get_attr_returns_instance(pid, CT_Lvl);
  }

  get _lvl() {
    return this._element;
  }

  getItem(index: number) {
    const pid = append_packed_id(this.packed_id, index);
    return py_funs.get_attr_returns_instance(pid, Category);
  }

  get length() {
    return py_funs.get_attr_len(this.packed_id);
  }
}
