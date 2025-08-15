import { init_pyodide_bridge } from './bridge';
import { core_funs, is_core_funs_ready } from './py_funs';

describe('init_pyodide_bridge', () => {
  let pyodideMock: any;

  beforeEach(() => {
    for (const key of Object.keys(core_funs)) {
      core_funs[key] = undefined;
    }
  });

  it('should throw if pyodide is falsy', async () => {
    await expect(init_pyodide_bridge(null as any)).rejects.toThrow();
    await expect(init_pyodide_bridge(undefined as any)).rejects.toThrow();
  });

  it('should return early if core functions are ready', async () => {
    jest.spyOn(require('./py_funs'), 'is_core_funs_ready').mockReturnValue(true);

    pyodideMock = {
      loadPackage: jest.fn(),
      runPython: jest.fn(),
      globals: {
        get: jest.fn()
      }
    };

    await init_pyodide_bridge(pyodideMock);

    expect(pyodideMock.loadPackage).not.toHaveBeenCalled();
    expect(pyodideMock.runPython).not.toHaveBeenCalled();
  });

  it('should load package, run python, and cache core functions', async () => {
    jest.spyOn(require('./py_funs'), 'is_core_funs_ready').mockReturnValue(false);

    const globalsGetMock = jest
      .fn()
      .mockReturnValueOnce('create_presentation')
      .mockReturnValueOnce('create_category_chart_data')
      .mockReturnValueOnce('end')
      .mockReturnValueOnce('save')
      .mockReturnValueOnce('get_attr')
      .mockReturnValueOnce('get_attr_len')
      .mockReturnValueOnce('get_attr_returns_instance')
      .mockReturnValueOnce('get_attr_returns_instances')
      .mockReturnValueOnce('set_attr')
      .mockReturnValueOnce('call_method')
      .mockReturnValueOnce('call_method_returns_instance')
      .mockReturnValueOnce('call_method_returns_instances');

    pyodideMock = {
      loadPackage: jest.fn().mockResolvedValue(undefined),
      runPython: jest.fn(),
      globals: {
        get: globalsGetMock
      }
    };

    await init_pyodide_bridge(pyodideMock);

    expect(pyodideMock.loadPackage).toHaveBeenCalledWith('python-pptx', {
      errorCallback: expect.any(Function),
      messageCallback: expect.any(Function)
    });
    expect(pyodideMock.runPython).toHaveBeenCalled();

    expect(core_funs.create_presentation).toBe('create_presentation');
    expect(core_funs.create_category_chart_data).toBe('create_category_chart_data');
    expect(core_funs.end).toBe('end');
    expect(core_funs.save).toBe('save');
    expect(core_funs.get_attr).toBe('get_attr');
    expect(core_funs.get_attr_len).toBe('get_attr_len');
    expect(core_funs.get_attr_returns_instance).toBe('get_attr_returns_instance');
    expect(core_funs.get_attr_returns_instances).toBe('get_attr_returns_instances');
    expect(core_funs.set_attr).toBe('set_attr');
    expect(core_funs.call_method).toBe('call_method');
    expect(core_funs.call_method_returns_instance).toBe('call_method_returns_instance');
    expect(core_funs.call_method_returns_instances).toBe('call_method_returns_instances');
  });
});
