import { CONNECTOR, DIVIDER } from './constant';
import { append_packed_id, PackedBase, pack, unpack } from './packed_base';

describe('PackedBase', () => {
  it('should store packed_id correctly', () => {
    const instance = new PackedBase('scope|obj|path');
    expect(instance.packed_id).toBe('scope|obj|path');
  });
});

describe('pack', () => {
  it('should join scope, obj, and path with DIVIDER', () => {
    const packed = pack({ scope: 's', obj: 'o', path: 'p' });
    expect(packed).toBe(['s', 'o', 'p'].join(DIVIDER));
  });

  it('should omit undefined or empty path', () => {
    const packed = pack({ scope: 's', obj: 'o' });
    expect(packed).toBe(['s', 'o'].join(DIVIDER));
  });

  it('should omit empty strings in path', () => {
    const packed = pack({ scope: 's', obj: 'o', path: undefined });
    expect(packed).toBe(['s', 'o'].join(DIVIDER));
  });
});

describe('unpack', () => {
  it('should split packed_id into scope, obj, and path', () => {
    const packedId = ['scope', 'obj', 'path'].join(DIVIDER);
    const unpacked = unpack(packedId);
    expect(unpacked).toEqual({ scope: 'scope', obj: 'obj', path: 'path' });
  });

  it('should split packed_id with only scope and obj', () => {
    const packedId = ['scope', 'obj'].join(DIVIDER);
    const unpacked = unpack(packedId);
    expect(unpacked).toEqual({ scope: 'scope', obj: 'obj', path: undefined });
  });

  it('should throw error if scope or obj missing', () => {
    expect(() => unpack('onlyscope')).toThrow('Invalid packed ID');
    expect(() => unpack('')).toThrow('Invalid packed ID');
  });
});

describe('append_packed_id', () => {
  it('should append sub_paths to existing path separated by CONNECTOR', () => {
    const packedId = ['scope', 'obj', 'existing'].join(DIVIDER);
    const appended = append_packed_id(packedId, 'sub1', 'sub2');
    expect(appended).toBe(['scope', 'obj', ['existing', 'sub1', 'sub2'].join(CONNECTOR)].join(DIVIDER));
  });

  it('should append sub_paths when no original path exists', () => {
    const packedId = ['scope', 'obj'].join(DIVIDER);
    const appended = append_packed_id(packedId, 'sub1');
    expect(appended).toBe(['scope', 'obj', 'sub1'].join(DIVIDER));
  });

  it('should ignore empty sub_paths', () => {
    const packedId = ['scope', 'obj', 'path'].join(DIVIDER);
    // @ts-ignore
    const appended = append_packed_id(packedId, '', undefined, 'sub2');
    expect(appended).toBe(['scope', 'obj', ['path', '', 'sub2'].join(CONNECTOR)].join(DIVIDER));
  });
});
