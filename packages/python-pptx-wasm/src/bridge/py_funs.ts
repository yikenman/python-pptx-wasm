import { type PyBuffer } from 'pyodide/ffi';
import type { Type } from '../utils/types';

import { append_packed_id, PackedBase } from './packed_base';
import { deserialize_value, serialize_value } from './serializer';

const noop: (...rest: any) => any = () => {
  throw new Error('Function is not ready.');
};

export interface CoreFuncs {
  create_presentation: (pptx?: Uint8Array | undefined) => string;
  create_category_chart_data: (packed_id: string, number_format?: string) => string;
  end: (packed_id: string) => void;
  save: (packed_id: string) => PyBuffer;
  get_attr: (packed_id: string) => string | number | boolean | undefined;
  get_attr_len: (packed_id: string) => number;
  get_attr_returns_instance: (packed_id: string) => string;
  get_attr_returns_instances: (packed_id: string) => string;
  set_attr: (packed_id: string, value: any) => void;
  get_attr_returns_rgb: (packed_id: string) => string;
  set_attr_returns_rgb: (packed_id: string, rgb_tuple: [r: number, g: number, b: number]) => void;
  call_method: (packed_id: string, ...args: any[]) => any;
  call_method_returns_instance: (packed_id: string, ...args: any[]) => string;
  call_method_returns_instances: (packed_id: string, ...args: any[]) => string;
}

export const core_funs: CoreFuncs = {
  create_presentation: noop,
  create_category_chart_data: noop,
  end: noop,
  save: noop,
  get_attr: noop,
  get_attr_len: noop,
  get_attr_returns_instance: noop,
  get_attr_returns_instances: noop,
  set_attr: noop,
  get_attr_returns_rgb: noop,
  set_attr_returns_rgb: noop,
  call_method: noop,
  call_method_returns_instance: noop,
  call_method_returns_instances: noop
};

export const py_funs = {
  create_presentation: (pptx?: Uint8Array | undefined) => {
    const effectiveArgs = [serialize_value(pptx)].filter(Boolean);
    return core_funs.create_presentation(...(effectiveArgs as any[]));
  },
  create_category_chart_data: (packed_id: string, number_format?: string) => {
    const effectiveArgs = [number_format].filter(Boolean);
    return core_funs.create_category_chart_data(packed_id, ...effectiveArgs);
  },
  end: (packed_id: string) => {
    return core_funs.end(packed_id);
  },
  save: (packed_id: string, callback?: (buffer: Uint8Array) => void | Promise<void>) => {
    const val = core_funs.save(packed_id);

    const view = val.getBuffer('u8');
    val.destroy!();
    try {
      if (callback) {
        const uint8 = new Uint8Array(view.data.buffer, view.data.byteOffset, view.data.byteLength);
        return callback(uint8);
      } else {
        const uint8 = new Uint8Array(view.data.byteLength);
        uint8.set(new Uint8Array(view.data.buffer, view.data.byteOffset, view.data.byteLength));
        return uint8;
      }
    } finally {
      view.release();
    }
  },
  get_attr: <P>(packed_id: string): P => {
    const val = core_funs.get_attr(packed_id);
    return deserialize_value(val);
  },
  get_attr_len: (packed_id: string) => {
    return core_funs.get_attr_len(packed_id);
  },
  get_attr_returns_generator: <P>(packed_id: string): P[] => {
    const val = core_funs.get_attr(packed_id);
    return deserialize_value(val);
  },
  get_attr_returns_instance: <C extends PackedBase>(packed_id: string, cls: Type<C>): C => {
    const val = core_funs.get_attr_returns_instance(packed_id);
    const [pid, cls_name]: [pid: string, cls_name: string | undefined] = deserialize_value(val);

    return new cls(pid);
  },
  get_attr_returns_instance_or_undefined: <C extends PackedBase>(packed_id: string, cls: Type<C>): C | undefined => {
    const val = core_funs.get_attr_returns_instance(packed_id);
    const [pid, cls_name]: [pid: string, cls_name: string | undefined] = deserialize_value(val);
    if (!cls_name) {
      return undefined;
    }
    return new cls(pid);
  },
  get_attr_returns_instance_from_instance_factory: <T extends Type<PackedBase>>(
    packed_id: string,
    cls_factroy: (cls_name: string) => T
  ): InstanceType<T> => {
    const val = core_funs.get_attr_returns_instance(packed_id);
    const [pid, cls_name]: [pid: string, cls_name: string] = deserialize_value(val);
    return new (cls_factroy(cls_name!))(pid) as any;
  },
  get_attr_returns_instance_or_undefined_from_instance_factory: <T extends Type<PackedBase>>(
    packed_id: string,
    cls_factroy: (...args: any[]) => T
  ): InstanceType<T> | undefined => {
    const val = core_funs.get_attr_returns_instance(packed_id);
    const [pid, cls_name]: [pid: string, cls_name: string | undefined] = deserialize_value(val);
    if (!cls_name) {
      return undefined;
    }
    return new (cls_factroy(cls_name))(pid) as any;
  },
  get_attr_returns_instance_list: <C extends PackedBase>(packed_id: string, cls: Type<C>): C[] => {
    const val = core_funs.get_attr_returns_instances(packed_id);
    const [pid, cls_names]: [pid: string, cls_names: string[]] = deserialize_value(val);
    return cls_names.map((_, i) => {
      return new cls(append_packed_id(pid, i));
    });
  },
  get_attr_returns_instance_or_undefined_list: <C extends PackedBase>(
    packed_id: string,
    cls: Type<C>
  ): (C | undefined)[] => {
    const val = core_funs.get_attr_returns_instances(packed_id);
    const [pid, cls_names]: [pid: string, cls_names: (string | undefined)[]] = deserialize_value(val);
    return cls_names.map((cls_name, i) => {
      if (!cls_name) {
        return undefined;
      }
      return new cls(append_packed_id(pid, i));
    });
  },
  get_attr_returns_instance_list_from_instance_factory: <T extends Type<PackedBase>>(
    packed_id: string,
    cls_factroy: (...args: any[]) => T
  ): InstanceType<T>[] => {
    const val = core_funs.get_attr_returns_instances(packed_id);
    const [pid, cls_names]: [pid: string, cls_names: (string | undefined)[]] = deserialize_value(val);
    return cls_names.map((cls_name, i) => {
      return new (cls_factroy(cls_name))(append_packed_id(pid, i)) as any;
    });
  },
  get_attr_returns_instance_iterator: <C extends PackedBase>(packed_id: string, cls: Type<C>): C[] => {
    const val = core_funs.get_attr_returns_instances(packed_id);
    const [pid, cls_names]: [pid: string, cls_names: (string | undefined)[]] = deserialize_value(val);
    return cls_names.map((_, i) => {
      return new cls(append_packed_id(pid, i));
    });
  },
  set_attr: (packed_id: string, value: unknown): void => {
    return core_funs.set_attr(packed_id, serialize_value(value));
  },
  call_method: <P = undefined>(packed_id: string, _arguments: IArguments, ...args: any[]): P => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method(packed_id, ...effectiveArgs.map(serialize_value));

    return deserialize_value(val);
  },
  call_method_returns_instance: <C extends PackedBase>(
    packed_id: string,
    cls: Type<C>,
    _arguments: IArguments,
    ...args: any[]
  ): C => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instance(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_name]: [pid: string, cls_name: string] = deserialize_value(val);

    return new cls(pid);
  },
  call_method_returns_instance_or_undefined: <C extends PackedBase>(
    packed_id: string,
    cls: Type<C>,
    _arguments: IArguments,
    ...args: any[]
  ): C | undefined => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instance(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_name]: [pid: string | undefined, cls_name: string | undefined] = deserialize_value(val);

    if (!pid || !cls_name) {
      return undefined;
    }
    return new cls(pid);
  },
  call_method_returns_instance_from_instance_factory: <T extends Type<PackedBase>>(
    packed_id: string,
    cls_factroy: (...args: any[]) => T,
    _arguments: IArguments,
    ...args: any[]
  ): InstanceType<T> => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instance(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_name]: [pid: string, cls_name: string] = deserialize_value(val);

    return new (cls_factroy(cls_name))(pid) as any;
  },
  call_method_returns_instance_list: <C extends PackedBase>(
    packed_id: string,
    cls: Type<C>,
    _arguments: IArguments,
    ...args: any[]
  ): C[] => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instances(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_names]: [pid: string, cls_names: string[]] = deserialize_value(val);

    return cls_names.map((_, i) => {
      return new cls(append_packed_id(pid!, i));
    });
  },
  call_method_returns_instance_list_from_instance_factory: <T extends Type<PackedBase>>(
    packed_id: string,
    cls_factroy: (...args: any[]) => T,
    _arguments: IArguments,
    ...args: any[]
  ): InstanceType<T>[] => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instances(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_names]: [pid: string, cls_names: string[]] = deserialize_value(val);
    return cls_names.map((cls_name, i) => {
      return new (cls_factroy(cls_name))(append_packed_id(pid!, i)) as any;
    });
  },
  call_method_returns_instance_generator: <C extends PackedBase>(
    packed_id: string,
    cls: Type<C>,
    _arguments: IArguments,
    ...args: any[]
  ): C[] => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instances(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_names]: [pid: string, cls_names: string[]] = deserialize_value(val);
    return cls_names.map((_, i) => {
      return new cls(append_packed_id(pid!, i));
    });
  },
  call_method_returns_instance_generator_from_instance_factory: <T extends Type<PackedBase>>(
    packed_id: string,
    cls_factroy: (...args: any[]) => T,
    _arguments: IArguments,
    ...args: any[]
  ): InstanceType<T>[] => {
    const effectiveArgs = args.slice(0, _arguments.length);
    const val = core_funs.call_method_returns_instances(packed_id, ...effectiveArgs.map(serialize_value));
    const [pid, cls_names]: [pid: string, cls_names: string[]] = deserialize_value(val);
    return cls_names.map((cls_name, i) => {
      return new (cls_factroy(cls_name))(append_packed_id(pid!, i)) as any;
    });
  }
};

export const is_core_funs_ready = () => {
  return core_funs.create_presentation && core_funs.create_presentation !== noop;
};
