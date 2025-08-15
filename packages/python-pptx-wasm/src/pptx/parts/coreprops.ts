import { append_packed_id, py_funs } from '../../bridge';
import { XmlPart } from '../opc/package';

/**
 * Corresponds to part named `/docProps/core.xml`.
 * Contains the core document properties for this document package.
 */
export class CorePropertiesPart extends XmlPart {
  set author(author: string) {
    const pid = append_packed_id(this.packed_id, 'author');
    py_funs.set_attr(pid, author);
  }
  get author() {
    const pid = append_packed_id(this.packed_id, 'author');
    return py_funs.get_attr(pid);
  }
  set category(category: string) {
    const pid = append_packed_id(this.packed_id, 'category');
    py_funs.set_attr(pid, category);
  }
  get category() {
    const pid = append_packed_id(this.packed_id, 'category');
    return py_funs.get_attr(pid);
  }
  set comments(comments: string) {
    const pid = append_packed_id(this.packed_id, 'comments');
    py_funs.set_attr(pid, comments);
  }
  get comments() {
    const pid = append_packed_id(this.packed_id, 'comments');
    return py_funs.get_attr(pid);
  }
  set content_status(content_status: string) {
    const pid = append_packed_id(this.packed_id, 'content_status');
    py_funs.set_attr(pid, content_status);
  }
  get content_status() {
    const pid = append_packed_id(this.packed_id, 'content_status');
    return py_funs.get_attr(pid);
  }

  set created(created: Date) {
    const pid = append_packed_id(this.packed_id, 'created');
    py_funs.set_attr(pid, created);
  }
  get created() {
    const pid = append_packed_id(this.packed_id, 'created');
    return py_funs.get_attr(pid);
  }
  set identifier(identifier: string) {
    const pid = append_packed_id(this.packed_id, 'identifier');
    py_funs.set_attr(pid, identifier);
  }
  get identifier() {
    const pid = append_packed_id(this.packed_id, 'identifier');
    return py_funs.get_attr(pid);
  }
  set keywords(keywords: string) {
    const pid = append_packed_id(this.packed_id, 'keywords');
    py_funs.set_attr(pid, keywords);
  }
  get keywords() {
    const pid = append_packed_id(this.packed_id, 'keywords');
    return py_funs.get_attr(pid);
  }
  set language(language: string) {
    const pid = append_packed_id(this.packed_id, 'language');
    py_funs.set_attr(pid, language);
  }
  get language() {
    const pid = append_packed_id(this.packed_id, 'language');
    return py_funs.get_attr(pid);
  }
  set last_modified_by(last_modified_by: string) {
    const pid = append_packed_id(this.packed_id, 'last_modified_by');
    py_funs.set_attr(pid, last_modified_by);
  }
  get last_modified_by() {
    const pid = append_packed_id(this.packed_id, 'last_modified_by');
    return py_funs.get_attr(pid);
  }
  set last_printed(last_printed: Date) {
    const pid = append_packed_id(this.packed_id, 'last_printed');
    py_funs.set_attr(pid, last_printed);
  }
  get last_printed() {
    const pid = append_packed_id(this.packed_id, 'last_printed');
    return py_funs.get_attr(pid);
  }
  set modified(modified: Date) {
    const pid = append_packed_id(this.packed_id, 'modified');
    py_funs.set_attr(pid, modified);
  }
  get modified() {
    const pid = append_packed_id(this.packed_id, 'modified');
    return py_funs.get_attr(pid);
  }
  set revision(revision: number) {
    const pid = append_packed_id(this.packed_id, 'revision');
    py_funs.set_attr(pid, revision);
  }
  get revision() {
    const pid = append_packed_id(this.packed_id, 'revision');
    return py_funs.get_attr(pid);
  }
  set subject(subject: string) {
    const pid = append_packed_id(this.packed_id, 'subject');
    py_funs.set_attr(pid, subject);
  }
  get subject() {
    const pid = append_packed_id(this.packed_id, 'subject');
    return py_funs.get_attr(pid);
  }
  set title(title: string) {
    const pid = append_packed_id(this.packed_id, 'title');
    py_funs.set_attr(pid, title);
  }
  get title() {
    const pid = append_packed_id(this.packed_id, 'title');
    return py_funs.get_attr(pid);
  }
  set version(version: string) {
    const pid = append_packed_id(this.packed_id, 'version');
    py_funs.set_attr(pid, version);
  }
  get version() {
    const pid = append_packed_id(this.packed_id, 'version');
    return py_funs.get_attr(pid);
  }
}
