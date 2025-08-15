import { init_pyodide_bridge } from './bridge';
import { append_packed_id, PackedBase } from './packed_base';
import { core_funs, is_core_funs_ready, py_funs } from './py_funs';
import { deserialize_value, serialize_value } from './serializer';

jest.mock('./serializer', () => {
  const actual = jest.requireActual('./serializer');

  return {
    ...actual,
    deserialize_value: jest.fn(),
    serialize_value: jest.fn()
  };
});

jest.mock('./packed_base', () => {
  const actual = jest.requireActual('./packed_base');

  return {
    ...actual,
    append_packed_id: jest.fn(actual.append_packed_id)
  };
});

describe('py_funs', () => {
  it('should throw error before initialized', () => {
    expect(() => {
      const args = [new Uint8Array([1, 2])];
      py_funs.create_presentation(...args);
    }).toThrow(Error);
  });

  it('should not throw error after initialized', async () => {
    const pyodideMock = {
      loadPackage: jest.fn(),
      runPython: jest.fn(),
      globals: {
        get: jest.fn(() => jest.fn())
      }
    };

    // @ts-ignore
    await init_pyodide_bridge(pyodideMock);

    expect(() => {
      const args = [new Uint8Array([1, 2])];
      py_funs.create_presentation(...args);
    }).not.toThrow(Error);
  });
});

describe('py_funs', () => {
  beforeEach(() => {
    (Object.keys(core_funs) as (keyof typeof core_funs)[]).forEach((key) => {
      (core_funs[key] as any) = jest.fn();
    });

    jest.mocked(serialize_value).mockImplementation((val) => val);
    jest.mocked(deserialize_value).mockImplementation((val) => val);
  });

  it('should call create_presentation correctly', () => {
    jest.mocked(core_funs.create_presentation).mockReturnValue('ok');

    const args = [new Uint8Array([1, 2])];
    py_funs.create_presentation(...args);

    args.map((item) => {
      expect(serialize_value).toHaveBeenCalledWith(item);
    });
    expect(core_funs.create_presentation).toHaveBeenCalledWith(
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
  });

  it('should call create_category_chart_data correctly', () => {
    jest.mocked(core_funs.create_category_chart_data).mockReturnValue('chart');

    const args = ['pid', 'fmt'];
    // @ts-ignore
    py_funs.create_category_chart_data(...args);

    expect(core_funs.create_category_chart_data).toHaveBeenCalledWith(...args);
  });

  it('should call end correctly', () => {
    py_funs.end('pid');

    expect(core_funs.end).toHaveBeenCalledWith('pid');
  });

  it('should call callback with original buffer if save with callback', () => {
    const release = jest.fn();
    const destroy = jest.fn();
    const fakeView = {
      data: new Uint8Array([1, 2, 3]),
      release
    };
    jest.mocked(core_funs.save).mockReturnValue({
      // @ts-ignore
      getBuffer: () => fakeView,
      destroy
    });
    const cb = jest.fn();

    const args = ['pid', cb];
    // @ts-ignore
    py_funs.save(...args);

    expect(core_funs.save).toHaveBeenCalledWith(args[0]);
    expect(destroy).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledWith(expect.any(Uint8Array));
    expect(release).toHaveBeenCalled();
  });

  it('should return a copied buffer if save without callback', () => {
    const release = jest.fn();
    const destroy = jest.fn();
    const buf = new Uint8Array([9, 8, 7]);
    const fakeView = {
      data: buf,
      release
    };
    jest.mocked(core_funs.save).mockReturnValue({
      // @ts-ignore
      getBuffer: () => fakeView,
      destroy
    });

    const args = ['pid'];
    // @ts-ignore
    py_funs.save(...args);

    const result = py_funs.save('pid');
    expect(core_funs.save).toHaveBeenCalledWith(args[0]);
    expect(result === buf).toBeFalsy();
    expect(release).toHaveBeenCalled();
  });

  it('should call get_attr correctly', () => {
    jest.mocked(core_funs.get_attr).mockReturnValue('val');

    const args = ['pid'];
    // @ts-ignore
    py_funs.get_attr(...args);

    expect(core_funs.get_attr).toHaveBeenCalledWith(...args);
    expect(deserialize_value).toHaveBeenCalledWith(jest.mocked(core_funs.get_attr).mock.results[0].value);
  });

  it('should call get_attr_len correctly', () => {
    jest.mocked(core_funs.get_attr_len).mockReturnValue(5);

    const args = ['pid'];
    // @ts-ignore
    py_funs.get_attr_len(...args);

    expect(core_funs.get_attr_len).toHaveBeenCalledWith(...args);
  });

  it('should call get_attr_returns_generator correctly', () => {
    jest.mocked(core_funs.get_attr).mockReturnValue('[1,2]');

    const args = ['pid'];
    // @ts-ignore
    py_funs.get_attr_returns_generator(...args);

    expect(core_funs.get_attr).toHaveBeenCalledWith(...args);
    expect(deserialize_value).toHaveBeenCalledWith(jest.mocked(core_funs.get_attr).mock.results[0].value);
  });

  it('should call get_attr_returns_instance correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.get_attr_returns_instance).mockReturnValue('["id","Cls"]');

    const args = ['pid', Dummy];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance(...args);

    expect(core_funs.get_attr_returns_instance).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instance).mock.results[0].value
    );
    expect(res).toBeInstanceOf(Dummy);
  });

  it('should call get_attr_returns_instance_or_undefined correctly and return instance', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.get_attr_returns_instance).mockReturnValue('["id","Cls"]');
    jest.mocked(deserialize_value).mockReturnValue(['id', 'Cls']);

    const args = ['pid', Dummy];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_or_undefined(...args);

    expect(core_funs.get_attr_returns_instance).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instance).mock.results[0].value
    );
    expect(res).toBeInstanceOf(Dummy);
  });

  it('should call get_attr_returns_instance_or_undefined correctly and return undefined', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.get_attr_returns_instance).mockReturnValue('["id",null]');
    jest.mocked(deserialize_value).mockReturnValue(['id', null]);

    const args = ['pid', Dummy];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_or_undefined(...args);

    expect(core_funs.get_attr_returns_instance).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instance).mock.results[0].value
    );
    expect(res).toBeUndefined();
  });

  it('should call get_attr_returns_instance_from_instance_factory correctly', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.get_attr_returns_instance).mockReturnValue('["id","Cls"]');
    jest.mocked(deserialize_value).mockReturnValue(['id', 'Cls']);

    const args = ['pid', factory];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_from_instance_factory(...args);

    expect(core_funs.get_attr_returns_instance).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instance).mock.results[0].value
    );
    expect(factory).toHaveBeenCalledWith(jest.mocked(deserialize_value).mock.results[0].value[1]);
    expect(res).toBeInstanceOf(Dummy);
  });

  it('should call get_attr_returns_instance_or_undefined_from_instance_factory correctly and return instance', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.get_attr_returns_instance).mockReturnValue('["id","Cls"]');
    jest.mocked(deserialize_value).mockReturnValue(['id', 'Cls']);

    const args = ['pid', factory];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(...args);

    expect(core_funs.get_attr_returns_instance).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instance).mock.results[0].value
    );
    expect(factory).not.toHaveBeenCalledWith();
    expect(res).toBeInstanceOf(Dummy);
  });

  it('should call get_attr_returns_instance_or_undefined_from_instance_factory correctly and return undefined', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.get_attr_returns_instance).mockReturnValue('["id","Cls"]');
    jest.mocked(deserialize_value).mockReturnValue(['id', null]);

    const args = ['pid', factory];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_or_undefined_from_instance_factory(...args);

    expect(core_funs.get_attr_returns_instance).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instance).mock.results[0].value
    );
    expect(factory).not.toHaveBeenCalledWith();
    expect(res).toBeUndefined();
  });

  it('should call get_attr_returns_instance_list correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.get_attr_returns_instances).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['id', ['Cls1', 'Cls2']]);
    jest.mocked(append_packed_id).mockImplementation((ele) => ele);

    const args = ['pid', Dummy];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_list(...args);

    expect(core_funs.get_attr_returns_instances).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instances).mock.results[0].value
    );
    expect(append_packed_id).toHaveBeenCalledTimes(2);
    expect(res.length).toBe(2);
    res.forEach((ele) => expect(ele).toBeInstanceOf(Dummy));
  });

  it('should call get_attr_returns_instance_or_undefined_list correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.get_attr_returns_instances).mockReturnValue('["pid",["Cls1",null]]');
    jest.mocked(deserialize_value).mockReturnValue(['id', ['Cls1', null]]);
    jest.mocked(append_packed_id).mockImplementation((ele) => ele);

    const args = ['pid', Dummy];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_or_undefined_list(...args);

    expect(core_funs.get_attr_returns_instances).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instances).mock.results[0].value
    );
    expect(append_packed_id).toHaveBeenCalledTimes(1);
    expect(res.length).toBe(2);
    expect(res[0]).toBeInstanceOf(Dummy);
    expect(res[1]).toBeUndefined();
  });

  it('should call get_attr_returns_instance_list_from_instance_factory correctly', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.get_attr_returns_instances).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['id', ['Cls1', 'Cls2']]);
    jest.mocked(append_packed_id).mockImplementation((ele) => ele);

    const args = ['pid', factory];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_list_from_instance_factory(...args);

    expect(core_funs.get_attr_returns_instances).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instances).mock.results[0].value
    );
    expect(append_packed_id).toHaveBeenCalledTimes(2);
    expect(res.length).toBe(2);
    res.forEach((ele) => expect(ele).toBeInstanceOf(Dummy));
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it('should call get_attr_returns_instance_iterator correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.get_attr_returns_instances).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['id', ['Cls1', 'Cls2']]);
    jest.mocked(append_packed_id).mockImplementation((ele) => ele);

    const args = ['pid', Dummy];
    // @ts-ignore
    const res = py_funs.get_attr_returns_instance_iterator(...args);

    expect(core_funs.get_attr_returns_instances).toHaveBeenCalledWith(args[0]);
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.get_attr_returns_instances).mock.results[0].value
    );
    expect(append_packed_id).toHaveBeenCalledTimes(2);
    expect(res.length).toBe(2);
    res.forEach((ele) => expect(ele).toBeInstanceOf(Dummy));
  });

  it('set_attr', () => {
    const args = ['pid', 'val'];
    // @ts-ignore
    py_funs.set_attr(...args);

    expect(serialize_value).toHaveBeenCalledWith(args[1]);
    expect(core_funs.set_attr).toHaveBeenCalledWith(args[0], jest.mocked(serialize_value).mock.results[0].value);
  });

  it('should call call_method correctly', () => {
    jest.mocked(core_funs.call_method).mockReturnValue('ok');

    const args = [1, 2];
    // @ts-ignore
    const res = py_funs.call_method('pid', { length: 2 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(jest.mocked(core_funs.call_method).mock.results[0].value);
    expect(res).toBe('ok');
  });

  it('should call call_method_returns_instance correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.call_method_returns_instance).mockReturnValue('["pid","Cls"]');

    const args = [];
    // @ts-ignore
    const res = py_funs.call_method_returns_instance('pid', Dummy, { length: 0 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instance).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instance).mock.results[0].value
    );
    expect(res).toBeInstanceOf(Dummy);
  });

  it('should call call_method_returns_instance_or_undefined correctly and return instance', () => {
    class Dummy extends PackedBase {}
    // @ts-ignore
    jest.mocked(core_funs.call_method_returns_instance).mockReturnValue('["pid", "Cls"]');
    jest.mocked(deserialize_value).mockReturnValue(['pid', 'Cls']);

    const args = [];
    // @ts-ignore
    const res = py_funs.call_method_returns_instance_or_undefined('pid', Dummy, { length: 0 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instance).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instance).mock.results[0].value
    );
    expect(res).toBeInstanceOf(Dummy);
  });

  it('should call call_method_returns_instance_or_undefined correctly and return undefined', () => {
    class Dummy extends PackedBase {}
    // @ts-ignore
    jest.mocked(core_funs.call_method_returns_instance).mockReturnValue('[null, null]');
    jest.mocked(deserialize_value).mockReturnValue(['pid', null]);

    const args = [];
    // @ts-ignore
    const res = py_funs.call_method_returns_instance_or_undefined('pid', Dummy, { length: 0 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instance).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instance).mock.results[0].value
    );
    expect(res).toBeUndefined();
  });

  it('should call call_method_returns_instance_from_instance_factory correctly', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.call_method_returns_instance).mockReturnValue('["pid","Cls"]');
    jest.mocked(deserialize_value).mockReturnValue(['id', 'Cls']);

    const args = [];
    // @ts-ignore
    py_funs.call_method_returns_instance_from_instance_factory('pid', factory, { length: 0 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instance).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instance).mock.results[0].value
    );
    expect(factory).toHaveBeenCalled();
  });

  it('should call call_method_returns_instance_list correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.call_method_returns_instances).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['pid', ['Cls1', 'Cls2']]);

    const args = [];
    // @ts-ignore
    const res = py_funs.call_method_returns_instance_list('pid', Dummy, { length: 0 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instances).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instances).mock.results[0].value
    );
    expect(res.length).toBe(2);
    res.forEach((ele) => expect(ele).toBeInstanceOf(Dummy));
  });

  it('should call call_method_returns_instance_list_from_instance_factory correctly', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.call_method_returns_instance).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['pid', ['Cls', 'Cls2']]);

    const args = [];
    // @ts-ignore
    py_funs.call_method_returns_instance_list_from_instance_factory('pid', factory, { length: 0 });

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instances).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instances).mock.results[0].value
    );
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it('should call call_method_returns_instance_generator correctly', () => {
    class Dummy extends PackedBase {}
    jest.mocked(core_funs.call_method_returns_instances).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['pid', ['Cls1', 'Cls2']]);

    const args = [];
    // @ts-ignore
    const res = py_funs.call_method_returns_instance_generator('pid', Dummy, { length: 0 }, ...args);

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instances).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instances).mock.results[0].value
    );
    expect(res.length).toBe(2);
    res.forEach((ele) => expect(ele).toBeInstanceOf(Dummy));
  });

  it('call_method_returns_instance_generator_from_instance_factory', () => {
    class Dummy extends PackedBase {}
    const factory = jest.fn().mockReturnValue(Dummy);
    jest.mocked(core_funs.call_method_returns_instance).mockReturnValue('["pid",["Cls1","Cls2"]]');
    jest.mocked(deserialize_value).mockReturnValue(['pid', ['Cls', 'Cls2']]);

    const args = [];
    // @ts-ignore
    py_funs.call_method_returns_instance_generator_from_instance_factory('pid', factory, { length: 0 });

    expect(serialize_value).toHaveBeenCalledTimes(args.length);
    expect(core_funs.call_method_returns_instances).toHaveBeenCalledWith(
      'pid',
      ...jest.mocked(serialize_value).mock.results.map((ele) => ele.value)
    );
    expect(deserialize_value).toHaveBeenCalledWith(
      jest.mocked(core_funs.call_method_returns_instances).mock.results[0].value
    );
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it('is_core_funs_ready', () => {
    (core_funs.create_presentation as jest.Mock).mockReturnValue('ok');
    expect(is_core_funs_ready()).toBeTruthy();
  });
});
