import { is_not_empty } from '../utils';
import { CONNECTOR, DIVIDER } from './constant';

export class PackedBase {
  /**
   * unique id
   */
  readonly packed_id: string;

  constructor(packed_id: string) {
    this.packed_id = packed_id;
  }
}

type PackedId = {
  scope: string;
  obj: string;
  path?: string;
};

export const pack = ({ scope, obj, path }: PackedId): string => {
  return [scope, obj, path].filter(is_not_empty).join(DIVIDER);
};

export const unpack = (packed_id: string): PackedId => {
  const [scope, obj, path] = packed_id.split(DIVIDER, 3);
  if (!scope || !obj) throw new Error('Invalid packed ID');
  return { scope, obj, path };
};

export const append_packed_id = (packed_id: string, ...sub_paths: (string | number)[]): string => {
  const { scope, obj, path } = unpack(packed_id);
  const combined_path = [path, ...sub_paths].filter(is_not_empty).join(CONNECTOR);
  return pack({ scope, obj, path: combined_path });
};
