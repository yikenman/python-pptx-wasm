import { append_packed_id, py_funs } from '../../bridge';
import { _Element } from './lxml';
import { BaseOxmlElement } from './xmlchemy';

/**
 * `cp:coreProperties` element, root of Core Properties part (/docProps/core.xml).
 * Implements Dublin Core document metadata elements.
 */

export class CT_CoreProperties extends BaseOxmlElement {
  get category() {
    const pid = append_packed_id(this.packed_id, 'category');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_category(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_category');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get contentStatus() {
    const pid = append_packed_id(this.packed_id, 'contentStatus');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_contentStatus(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_contentStatus');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get created() {
    const pid = append_packed_id(this.packed_id, 'created');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_created(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'creget_or_add_createdated');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get creator() {
    const pid = append_packed_id(this.packed_id, 'creator');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_creator(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_creator');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get description() {
    const pid = append_packed_id(this.packed_id, 'description');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_description(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_description');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get identifier() {
    const pid = append_packed_id(this.packed_id, 'identifier');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_identifier(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_identifier');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get keywords() {
    const pid = append_packed_id(this.packed_id, 'keywords');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_keywords(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_keywords');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get language() {
    const pid = append_packed_id(this.packed_id, 'language');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_language(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_language');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get lastModifiedBy() {
    const pid = append_packed_id(this.packed_id, 'lastModifiedBy');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_lastModifiedBy(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lastModifiedBy');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get lastPrinted() {
    const pid = append_packed_id(this.packed_id, 'lastPrinted');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_lastPrinted(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_lastPrinted');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get modified() {
    const pid = append_packed_id(this.packed_id, 'modified');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_modified(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_modified');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get revision() {
    const pid = append_packed_id(this.packed_id, 'revision');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_revision(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_revision');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get subject() {
    const pid = append_packed_id(this.packed_id, 'subject');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_subject(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_subject');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_title(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_title');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  get version() {
    const pid = append_packed_id(this.packed_id, 'version');
    return py_funs.get_attr_returns_instance_or_undefined(pid, _Element);
  }

  get_or_add_version(obj: BaseOxmlElement) {
    const pid = append_packed_id(this.packed_id, 'get_or_add_version');
    return py_funs.call_method_returns_instance(pid, _Element, arguments, obj);
  }

  /**
   * Get/set the author (creator) text content.
   */
  set author_text(author_text: string) {
    const pid = append_packed_id(this.packed_id, 'author_text');
    py_funs.set_attr(pid, author_text);
  }
  get author_text() {
    const pid = append_packed_id(this.packed_id, 'author_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the category text content.
   */
  set category_text(category_text: string) {
    const pid = append_packed_id(this.packed_id, 'category_text');
    py_funs.set_attr(pid, category_text);
  }
  get category_text() {
    const pid = append_packed_id(this.packed_id, 'category_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the comments (description) text content.
   */
  set comments_text(comments_text: string) {
    const pid = append_packed_id(this.packed_id, 'comments_text');
    py_funs.set_attr(pid, comments_text);
  }
  get comments_text() {
    const pid = append_packed_id(this.packed_id, 'comments_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the content status text content.
   */
  set contentStatus_text(contentStatus_text: string) {
    const pid = append_packed_id(this.packed_id, 'contentStatus_text');
    py_funs.set_attr(pid, contentStatus_text);
  }
  get contentStatus_text() {
    const pid = append_packed_id(this.packed_id, 'contentStatus_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the creation datetime.
   */
  set created_datetime(created_datetime: Date) {
    const pid = append_packed_id(this.packed_id, 'created_datetime');
    py_funs.set_attr(pid, created_datetime);
  }
  get created_datetime() {
    const pid = append_packed_id(this.packed_id, 'created_datetime');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the identifier text content.
   */
  set identifier_text(identifier_text: string) {
    const pid = append_packed_id(this.packed_id, 'identifier_text');
    py_funs.set_attr(pid, identifier_text);
  }
  get identifier_text() {
    const pid = append_packed_id(this.packed_id, 'identifier_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the keywords text content.
   */
  set keywords_text(keywords_text: string) {
    const pid = append_packed_id(this.packed_id, 'keywords_text');
    py_funs.set_attr(pid, keywords_text);
  }
  get keywords_text() {
    const pid = append_packed_id(this.packed_id, 'keywords_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the language text content.
   */
  set language_text(language_text: string) {
    const pid = append_packed_id(this.packed_id, 'language_text');
    py_funs.set_attr(pid, language_text);
  }
  get language_text() {
    const pid = append_packed_id(this.packed_id, 'language_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the last modified by text content.
   */
  set lastModifiedBy_text(lastModifiedBy_text: string) {
    const pid = append_packed_id(this.packed_id, 'lastModifiedBy_text');
    py_funs.set_attr(pid, lastModifiedBy_text);
  }
  get lastModifiedBy_text() {
    const pid = append_packed_id(this.packed_id, 'lastModifiedBy_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the last printed datetime.
   */
  set lastPrinted_datetime(lastPrinted_datetime: Date) {
    const pid = append_packed_id(this.packed_id, 'lastPrinted_datetime');
    py_funs.set_attr(pid, lastPrinted_datetime);
  }
  get lastPrinted_datetime() {
    const pid = append_packed_id(this.packed_id, 'lastPrinted_datetime');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the modification datetime.
   */
  set modified_datetime(modified_datetime: Date) {
    const pid = append_packed_id(this.packed_id, 'modified_datetime');
    py_funs.set_attr(pid, modified_datetime);
  }
  get modified_datetime() {
    const pid = append_packed_id(this.packed_id, 'modified_datetime');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the revision number (positive integer).
   */
  set revision_number(revision_number: number) {
    const pid = append_packed_id(this.packed_id, 'revision_number');
    py_funs.set_attr(pid, revision_number);
  }
  get revision_number() {
    const pid = append_packed_id(this.packed_id, 'revision_number');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the subject text content.
   */
  set subject_text(subject_text: string) {
    const pid = append_packed_id(this.packed_id, 'subject_text');
    py_funs.set_attr(pid, subject_text);
  }
  get subject_text() {
    const pid = append_packed_id(this.packed_id, 'subject_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the title text content.
   */
  set title_text(title_text: string) {
    const pid = append_packed_id(this.packed_id, 'title_text');
    py_funs.set_attr(pid, title_text);
  }
  get title_text() {
    const pid = append_packed_id(this.packed_id, 'title_text');
    return py_funs.get_attr(pid);
  }

  /**
   * Get/set the version text content.
   */
  set version_text(version_text: string) {
    const pid = append_packed_id(this.packed_id, 'version_text');
    py_funs.set_attr(pid, version_text);
  }
  get version_text() {
    const pid = append_packed_id(this.packed_id, 'version_text');
    return py_funs.get_attr(pid);
  }
}
