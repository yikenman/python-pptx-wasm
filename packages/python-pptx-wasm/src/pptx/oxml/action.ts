import { append_packed_id, py_funs } from '../../bridge';
import { BaseOxmlElement } from './xmlchemy';

/**
 * Custom element class for <a:hlinkClick> elements.
 */
export class CT_Hyperlink extends BaseOxmlElement {
  set rId(rId: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'rId');
    py_funs.set_attr(pid, rId);
  }

  get rId() {
    const pid = append_packed_id(this.packed_id, 'rId');
    return py_funs.get_attr(pid);
  }

  set action(action: string | undefined) {
    const pid = append_packed_id(this.packed_id, 'action');
    py_funs.set_attr(pid, action);
  }

  get action() {
    const pid = append_packed_id(this.packed_id, 'action');
    return py_funs.get_attr(pid);
  }

  /**
   * Query portion of the `ppaction://` URL as dictionary.
   * Returns empty object if URL contains no query string or no action attribute.
   */
  get action_fields() {
    const pid = append_packed_id(this.packed_id, 'action_fields');
    return py_funs.call_method<Record<string, string>>(pid, arguments);
  }

  /**
   * The host portion of the `ppaction://` URL in the action attribute.
   * Returns undefined if no action attribute is present.
   */
  get action_verb() {
    const pid = append_packed_id(this.packed_id, 'action_verb');
    return py_funs.call_method<string | undefined>(pid, arguments);
  }
}
