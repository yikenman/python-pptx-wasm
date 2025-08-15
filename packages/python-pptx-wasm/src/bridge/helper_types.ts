import { ENUM_NAME } from './constant';

export class EnumType {
  public enum_name: string;
  constructor(
    public enum_type: Record<string, any>,
    public enum_value: number
  ) {
    // @ts-ignore
    this.enum_name = enum_type[ENUM_NAME];
  }
}

export const Enum = <T extends number | undefined>(
  enum_type: Record<string, any>,
  enum_value: T
): T extends number ? EnumType : undefined => {
  if (enum_value === undefined) {
    return undefined as any;
  }
  return new EnumType(enum_type, enum_value) as any;
};

const EMUS_PER_INCH = 914400;
const EMUS_PER_CENTIPOINT = 127;
const EMUS_PER_CM = 360000;
const EMUS_PER_MM = 36000;
const EMUS_PER_PT = 12700;

/**
 * Base class for length classes Inches, Emu, Cm, Mm, and Pt.
 *
 * Provides properties for converting length values to convenient units.
 */
export class LengthType {
  _emu: number;

  constructor(_emu: number) {
    this._emu = _emu;
  }

  /**
   * Floating point length in inches.
   */
  get inches(): number {
    return this._emu / EMUS_PER_INCH;
  }

  /**
   * Integer length in hundredths of a point (1/7200 inch).
   *
   * Used internally because PowerPoint stores font size in centipoints.
   */
  get centipoints(): number {
    return Math.floor(this._emu / EMUS_PER_CENTIPOINT);
  }

  /**
   * Floating point length in centimeters.
   */
  get cm(): number {
    return this._emu / EMUS_PER_CM;
  }

  /**
   * Integer length in English Metric Units.
   */
  get emu(): number {
    return this._emu;
  }

  /**
   * Floating point length in millimeters.
   */
  get mm(): number {
    return this._emu / EMUS_PER_MM;
  }

  /**
   * Floating point length in points.
   */
  get pt(): number {
    return this._emu / EMUS_PER_PT;
  }

  valueOf() {
    return this.emu;
  }

  toString() {
    return `${this.emu} EMU`;
  }
}

function createLengthFn(factor: number) {
  return <T extends number | undefined>(val: T): T extends number ? LengthType : undefined => {
    if (val === undefined) {
      return undefined as any;
    }
    return new LengthType(Math.round(val * factor)) as any;
  };
}
/** Convenience constructor for length. */
export const Length = createLengthFn(1);
/** Convenience constructor for length in inches. */
export const Inches = createLengthFn(EMUS_PER_INCH);
/** Convenience constructor for length in hundredths of a point. */
export const Centipoints = createLengthFn(EMUS_PER_CENTIPOINT);
/** Convenience constructor for length in centimeters. */
export const Cm = createLengthFn(EMUS_PER_CM);
/** Convenience constructor for length in english metric units. */
export const Emu = createLengthFn(1);
/** Convenience constructor for length in millimeters. */
export const Mm = createLengthFn(EMUS_PER_MM);
/** Convenience constructor for length in points. */
export const Pt = createLengthFn(EMUS_PER_PT);

export class RGBColorType {
  constructor(public rgb: [r: number, g: number, b: number]) {}
}

export const RGBColor = <T extends [r: number, g: number, b: number] | undefined>(
  rgb: T
): T extends [r: number, g: number, b: number] ? RGBColorType : undefined => {
  if (rgb === undefined) {
    return undefined as any;
  }
  return new RGBColorType(rgb) as any;
};

export class TupleType<T extends any[] = any[]> {
  constructor(public tuple: T) {}
}

export const Tuple = <T extends any[] | undefined>(tuple: T): T extends any[] ? TupleType<T> : undefined => {
  if (tuple === undefined) {
    return undefined as any;
  }
  return new TupleType(tuple) as any;
};

export class ListType<T extends any[] = []> {
  constructor(public list: T) {}
}

export const List = <T extends any[] | undefined>(list: T): T extends any[] ? ListType<T> : undefined => {
  if (list === undefined) {
    return undefined as any;
  }
  return new ListType(list) as any;
};

export class DictType<T extends Record<string, any> = Record<string, any>> {
  constructor(public dict: T) {}
}

export const Dict = <T extends Record<string, any> | undefined>(
  dict: T
): T extends Record<string, any> ? DictType<T> : undefined => {
  if (dict === undefined) {
    return undefined as any;
  }
  return new DictType(dict) as any;
};
