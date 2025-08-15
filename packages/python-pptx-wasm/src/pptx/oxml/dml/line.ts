import { append_packed_id, Enum, py_funs } from '../../../bridge';
import { MSO_LINE_DASH_STYLE } from '../../enum/dml';
import { BaseOxmlElement } from '../xmlchemy';

/**
 * `a:prstDash` custom element class
 */
export class CT_PresetLineDashProperties extends BaseOxmlElement {
  set val(val: MSO_LINE_DASH_STYLE | undefined) {
    const pid = append_packed_id(this.packed_id, 'val');
    py_funs.set_attr(pid, Enum(MSO_LINE_DASH_STYLE, val));
  }

  get val() {
    const pid = append_packed_id(this.packed_id, 'val');
    return py_funs.get_attr(pid);
  }
}
