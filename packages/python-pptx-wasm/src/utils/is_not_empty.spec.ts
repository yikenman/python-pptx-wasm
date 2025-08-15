import { is_not_empty } from './is_not_empty';

describe('is_not_empty', () => {
  it('should return false for undefined', () => {
    expect(is_not_empty(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(is_not_empty(null)).toBe(false);
  });

  it('should return true for non-null and non-undefined values', () => {
    expect(is_not_empty(0)).toBe(true);
    expect(is_not_empty('')).toBe(true);
    expect(is_not_empty(false)).toBe(true);
    expect(is_not_empty([])).toBe(true);
    expect(is_not_empty({})).toBe(true);
  });

  it('should narrow type correctly', () => {
    function takesNonNullable(value: string) {
      return value.length;
    }

    const val: string | null = 'hello';

    if (is_not_empty(val)) {
      // 这里 TypeScript 能推断 val 是 string 而非 string | null
      expect(takesNonNullable(val)).toBe(5);
    }
  });
});
