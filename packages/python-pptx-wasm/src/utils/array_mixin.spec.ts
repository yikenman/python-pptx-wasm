import { MutableArrayMixin } from './array_mixin'; // 路径请改成你的文件路径

class Base {
  protected data: number[];

  constructor(data: number[]) {
    this.data = data;
  }
}

class MyArray extends MutableArrayMixin<number, typeof Base>(Base) {
  get length() {
    return this.data.length;
  }
  getItem(index: number): number {
    return this.data[index];
  }
  setItem(index: number, value: number): void {
    this.data[index] = value;
  }
}

class ReadonlyMyArray extends MutableArrayMixin<number, typeof Base>(Base) {
  get length() {
    return this.data.length;
  }
  getItem(index: number): number {
    return this.data[index];
  }
}

describe('MutableArrayMixin', () => {
  let arr: MyArray;
  let readonlyArr: ReadonlyMyArray;

  beforeEach(() => {
    arr = new MyArray([10, 20, 30]);
    readonlyArr = new ReadonlyMyArray([10, 20, 30]);
  });

  it('should support index access via proxy', () => {
    expect(arr[0]).toBe(10);
    expect(arr[1]).toBe(20);
    expect(arr[2]).toBe(30);
    expect(arr[3]).toBeUndefined();
  });

  it('should return correct length', () => {
    expect(arr.length).toBe(3);
  });

  it('should be iterable with for...of', () => {
    const values: number[] = [];
    for (const v of arr) {
      values.push(v);
    }
    expect(values).toEqual([10, 20, 30]);
  });

  it('should support forEach method', () => {
    const collected: number[] = [];
    arr.forEach((v, i) => collected.push(v + i));
    expect(collected).toEqual([10, 21, 32]);
  });

  it('should support map method', () => {
    const mapped = arr.map((v, i) => v + i);
    expect(mapped).toEqual([10, 21, 32]);
  });

  it('should support filter method', () => {
    const filtered = arr.filter((v) => v < 20);
    expect(filtered).toEqual([10]);
  });

  it('should support find method', () => {
    const finded = arr.find((v) => v < 20);
    expect(finded).toEqual(10);
  });

  it('should support some method', () => {
    const result = arr.some((v) => v < 20);
    expect(result).toEqual(true);
  });

  it('should support every method', () => {
    const result = arr.every((v) => v < 40);
    expect(result).toEqual(true);
  });

  it('should support setItem via index assignment', () => {
    arr[1] = 50;
    expect(arr[1]).toBe(50);
  });

  it('should allow to access property via its name', () => {
    expect(arr.name).toBeUndefined();
  });

  it('should not update other properties', () => {
    expect(() => {
      // @ts-ignore
      arr.length = 10;
    }).toThrow(Error);
  });

  it('should not update item out of range', () => {
    expect(() => {
      // @ts-ignore
      arr[10] = 50;
    }).toThrow(Error);
  });

  it('should not update item if setItem is not implemented', () => {
    expect(() => {
      // @ts-ignore
      readonlyArr[1] = 50;
    }).toThrow(Error);
  });

  it('should return true for valid array index', () => {
    expect('0' in arr).toBe(true);
    expect('2' in arr).toBe(true);
  });

  it('should return false for invalid array index', () => {
    expect('3' in arr).toBe(false);
    expect('-1' in arr).toBe(false);
  });

  it('should return true if property exists', () => {
    expect('length' in arr).toBe(true);
  });

  it('should block banned array mutation methods', () => {
    expect((arr as any).push).toBeUndefined();
    expect((arr as any).pop).toBeUndefined();
  });
});
