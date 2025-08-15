import { ENUM_NAME } from './constant';
import {
  Centipoints,
  Cm,
  Dict,
  DictType,
  Emu,
  Enum,
  EnumType,
  Inches,
  Length,
  LengthType,
  List,
  ListType,
  Mm,
  Pt,
  RGBColor,
  RGBColorType,
  Tuple,
  TupleType
} from './helper_types';

describe('EnumType and Enum', () => {
  const dummyEnumType = { [ENUM_NAME]: 'MyEnum' };

  it('EnumType sets enum_name from enum_type', () => {
    const e = new EnumType(dummyEnumType, 1);
    expect(e.enum_name).toBe('MyEnum');
    expect(e.enum_value).toBe(1);
  });

  it('Enum returns undefined when enum_value is undefined', () => {
    expect(Enum(dummyEnumType, undefined)).toBeUndefined();
  });

  it('Enum returns EnumType instance otherwise', () => {
    const result = Enum(dummyEnumType, 2);
    expect(result).toBeInstanceOf(EnumType);
    expect(result.enum_value).toBe(2);
  });
});

describe('LengthType and length constructors', () => {
  it('LengthType getters return correct conversions', () => {
    const emu = 914400; // 1 inch in EMU
    const length = Length(emu);

    expect(length.emu).toBe(emu);
    expect(length.inches).toBeCloseTo(1);
    expect(length.cm).toBeCloseTo(2.54);
    expect(length.mm).toBeCloseTo(25.4);
    expect(length.pt).toBeCloseTo(72);
    expect(length.centipoints).toBe(Math.floor(emu / 127));
    expect(length.valueOf()).toBe(emu);
    expect(length.toString()).toBe(`${emu} EMU`);
  });

  it('Length constructors convert numbers correctly', () => {
    const valInches = 2;
    const inches = Inches(valInches);
    expect(inches).toBeInstanceOf(LengthType);
    expect(inches.inches).toBeCloseTo(valInches);

    const valCm = 3;
    const cm = Cm(valCm);
    expect(cm).toBeInstanceOf(LengthType);
    expect(cm.cm).toBeCloseTo(valCm);

    const valPt = 4;
    const pt = Pt(valPt);
    expect(pt).toBeInstanceOf(LengthType);
    expect(pt.pt).toBeCloseTo(valPt);

    const valCentipoints = 5;
    const centipoints = Centipoints(valCentipoints);
    expect(centipoints).toBeInstanceOf(LengthType);
    expect(centipoints.centipoints).toBeCloseTo(valCentipoints);

    const valEmu = 6;
    const emu = Emu(valEmu);
    expect(emu).toBeInstanceOf(LengthType);
    expect(emu.emu).toBeCloseTo(valEmu);

    const valMm = 7;
    const mm = Mm(valMm);
    expect(mm).toBeInstanceOf(LengthType);
    expect(mm.mm).toBeCloseTo(valMm);

    const valLength = 8;
    const length = Length(valLength);
    expect(length).toBeInstanceOf(LengthType);
    expect(length.emu).toBeCloseTo(valLength);
  });

  it('Length constructors return undefined for undefined input', () => {
    expect(Inches(undefined)).toBeUndefined();
    expect(Cm(undefined)).toBeUndefined();
    expect(Pt(undefined)).toBeUndefined();
    expect(Centipoints(undefined)).toBeUndefined();
    expect(Emu(undefined)).toBeUndefined();
    expect(Mm(undefined)).toBeUndefined();
    expect(Length(undefined)).toBeUndefined();
  });
});

describe('RGBColorType and RGBColor', () => {
  it('RGBColorType stores rgb tuple', () => {
    const rgb = [255, 128, 0] as [number, number, number];
    const color = new RGBColorType(rgb);
    expect(color.rgb).toEqual(rgb);
  });

  it('RGBColor returns undefined for undefined input', () => {
    expect(RGBColor(undefined)).toBeUndefined();
  });

  it('RGBColor returns RGBColorType instance otherwise', () => {
    const rgb = [1, 2, 3] as [number, number, number];
    const result = RGBColor(rgb);
    expect(result).toBeInstanceOf(RGBColorType);
    expect(result?.rgb).toEqual(rgb);
  });
});

describe('TupleType and Tuple', () => {
  it('TupleType stores tuple', () => {
    const tuple = [1, 'a', true];
    const t = new TupleType(tuple);
    expect(t.tuple).toEqual(tuple);
  });

  it('Tuple returns undefined for undefined', () => {
    expect(Tuple(undefined)).toBeUndefined();
  });

  it('Tuple returns TupleType instance otherwise', () => {
    const tuple = [1, 2, 3];
    const result = Tuple(tuple);
    expect(result).toBeInstanceOf(TupleType);
    expect(result?.tuple).toEqual(tuple);
  });
});

describe('ListType and List', () => {
  it('ListType stores list', () => {
    const list = [1, 2, 3];
    const l = new ListType(list);
    expect(l.list).toEqual(list);
  });

  it('List returns undefined for undefined', () => {
    expect(List(undefined)).toBeUndefined();
  });

  it('List returns ListType instance otherwise', () => {
    const list = ['a', 'b'];
    const result = List(list);
    expect(result).toBeInstanceOf(ListType);
    expect(result?.list).toEqual(list);
  });
});

describe('DictType and Dict', () => {
  it('DictType stores dict', () => {
    const dict = { foo: 'bar', baz: 42 };
    const d = new DictType(dict);
    expect(d.dict).toEqual(dict);
  });

  it('Dict returns undefined for undefined', () => {
    expect(Dict(undefined)).toBeUndefined();
  });

  it('Dict returns DictType instance otherwise', () => {
    const dict = { a: 1, b: 2 };
    const result = Dict(dict);
    expect(result).toBeInstanceOf(DictType);
    expect(result?.dict).toEqual(dict);
  });
});
