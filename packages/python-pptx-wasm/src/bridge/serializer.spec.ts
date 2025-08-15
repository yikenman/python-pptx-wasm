import {
  CONNECTOR,
  DATETIME_PREFIX,
  DICT_PREFIX,
  ENUM_PREFIX,
  LENGTH_PREFIX,
  LIST_PREFIX,
  RGB_PREFIX,
  TUPLE_PREFIX
} from './constant';
import { DictType, EnumType, LengthType, ListType, RGBColorType, TupleType } from './helper_types';
import { PackedBase } from './packed_base';
import { deserialize_value, serialize_value } from './serializer';

describe('deserialize_value', () => {
  it('should deserialize enum string to number', () => {
    const val = ENUM_PREFIX + 'SomeEnum' + CONNECTOR + 'Name' + CONNECTOR + '42';
    expect(deserialize_value(val)).toBe(42);
  });

  it('should deserialize length string to LengthType', () => {
    const emuValue = 1234;
    const val = LENGTH_PREFIX + emuValue;
    const result = deserialize_value(val);
    expect(result).toBeInstanceOf(LengthType);
    expect(result.emu).toBe(emuValue);
  });

  it('should deserialize datetime string to Date', () => {
    const dateStr = new Date().toISOString();
    const val = DATETIME_PREFIX + dateStr;
    const result = deserialize_value(val);
    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe(dateStr);
  });

  it('should deserialize rgb string to number array', () => {
    const val = RGB_PREFIX + '255,128,0';
    const result = deserialize_value(val);
    expect(result).toEqual([255, 128, 0]);
  });

  it('should deserialize list string to array', () => {
    const rawList = [null, 1, '2', `${ENUM_PREFIX}E${CONNECTOR}N${CONNECTOR}3`];
    const val = LIST_PREFIX + JSON.stringify(rawList);
    const result = deserialize_value(val);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toBeUndefined();
    expect(result[1]).toBe(1);
    expect(result[2]).toBe('2');
    expect(result[3]).toBe(3); // enum string converted to number 3
  });

  it('should deserialize tuple string to array', () => {
    const rawTuple = [1, 2, 3];
    const val = TUPLE_PREFIX + JSON.stringify(rawTuple);
    const result = deserialize_value(val);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(rawTuple);
  });

  it('should deserialize dict string to object recursively', () => {
    const rawDict = { a: '1', b: `${ENUM_PREFIX}E${CONNECTOR}N${CONNECTOR}5` };
    const val = DICT_PREFIX + JSON.stringify(rawDict);
    const result = deserialize_value(val);
    expect(result).toHaveProperty('a', '1');
    expect(result).toHaveProperty('b', 5);
  });

  it('should pass through non-string values unchanged', () => {
    expect(deserialize_value(123)).toBe(123);
    expect(deserialize_value(true)).toBe(true);
    expect(deserialize_value(null)).toBeNull();
    expect(deserialize_value(undefined)).toBeUndefined();
  });

  it('should convert PyBuffer-like proxy to Uint8Array', () => {
    const mockBuffer = {
      data: { byteLength: 4, buffer: new ArrayBuffer(4), byteOffset: 0 },
      release: jest.fn()
    };
    const val = {
      getBuffer: jest.fn(() => mockBuffer),
      destroy: jest.fn()
    };
    const result = deserialize_value(val);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(val.getBuffer).toHaveBeenCalledWith('u8');
    expect(val.destroy).toHaveBeenCalled();
    expect(mockBuffer.release).toHaveBeenCalled();
  });
});

describe('serialize_value', () => {
  it('should serialize EnumType to string', () => {
    const enumType = { [Symbol('ENUM_NAME')]: 'MyEnum', 1: 'One' };
    const enumValue = 1;
    const enumInstance = new EnumType(enumType, enumValue);
    enumInstance.enum_name = 'MyEnum'; // mock enum_name for test

    const result = serialize_value(enumInstance);
    expect(result).toContain(ENUM_PREFIX);
    expect(typeof result).toBe('string');
  });

  it('should serialize LengthType to string', () => {
    const length = new LengthType(500);
    const result = serialize_value(length);
    expect(result).toBe(`${LENGTH_PREFIX}500`);
  });

  it('should serialize Date to datetime string', () => {
    const date = new Date('2023-01-01T00:00:00.000Z');
    const result = serialize_value(date);
    expect(result).toBe(`${DATETIME_PREFIX}2023-01-01T00:00:00.000Z`);
  });

  it('should serialize RGBColorType to rgb string', () => {
    const rgb = new RGBColorType([10, 20, 30]);
    const result = serialize_value(rgb);
    expect(result).toBe(`${RGB_PREFIX}10,20,30`);
  });

  it('should serialize ListType to list string', () => {
    const list = new ListType([new LengthType(10), new LengthType(20)]);
    const result = serialize_value(list);
    expect(result).toContain(LIST_PREFIX);
    expect(typeof result).toBe('string');
  });

  it('should serialize TupleType to tuple string', () => {
    const tuple = new TupleType([1, 2, 3]);
    const result = serialize_value(tuple);
    expect(result).toContain(TUPLE_PREFIX);
  });

  it('should serialize DictType to dict string', () => {
    const dict = new DictType({ a: 1, b: 2 });
    const result = serialize_value(dict);
    expect(result).toContain(DICT_PREFIX);
  });

  it('should return Uint8Array as is', () => {
    const arr = new Uint8Array([1, 2, 3]);
    expect(serialize_value(arr)).toBe(arr);
  });

  it('should serialize PackedBase to packed_id string', () => {
    class DummyPacked extends PackedBase {}
    const instance = new DummyPacked('packed_123');
    const result = serialize_value(instance);
    expect(result).toBe('packed_123');
  });

  it('should return undefined if packed_id is undefined when serializing PackedBase', () => {
    class DummyPacked extends PackedBase {}
    // @ts-ignore
    const instance = new DummyPacked(undefined);
    const result = serialize_value(instance);
    expect(result).toBeUndefined();
  });

  it('should return primitives as is', () => {
    expect(serialize_value(123)).toBe(123);
    expect(serialize_value('abc')).toBe('abc');
    expect(serialize_value(true)).toBe(true);
    expect(serialize_value(undefined)).toBeUndefined();
  });
});
