import { null_to_undefined_converter, undefined_to_null_converter } from './converter';

describe('null_to_undefined_converter', () => {
  it('should convert null to undefined', () => {
    expect(null_to_undefined_converter('key', null)).toBeUndefined();
  });

  it('should not convert non-null values', () => {
    expect(null_to_undefined_converter('key', 0)).toBe(0);
    expect(null_to_undefined_converter('key', '')).toBe('');
    expect(null_to_undefined_converter('key', false)).toBe(false);
    expect(null_to_undefined_converter('key', undefined)).toBe(undefined);
    expect(null_to_undefined_converter('key', {})).toEqual({});
  });
});

describe('undefined_to_null_converter', () => {
  it('should convert undefined to null', () => {
    expect(undefined_to_null_converter('key', undefined)).toBeNull();
  });

  it('should not convert non-undefined values', () => {
    expect(undefined_to_null_converter('key', null)).toBeNull(); // 注意这里null不变
    expect(undefined_to_null_converter('key', 0)).toBe(0);
    expect(undefined_to_null_converter('key', '')).toBe('');
    expect(undefined_to_null_converter('key', false)).toBe(false);
    expect(undefined_to_null_converter('key', {})).toEqual({});
  });
});
