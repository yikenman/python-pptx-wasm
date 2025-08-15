# python-pptx-wasm

[![NPM Version](https://img.shields.io/npm/v/python-pptx-wasm)
](https://www.npmjs.com/package/python-pptx-wasm)
![NPM License](https://img.shields.io/npm/l/python-pptx-wasm)
[![codecov](https://codecov.io/gh/yikenman/python-pptx-wasm/graph/badge.svg?token=43EG2T8LKS)](https://codecov.io/gh/yikenman/python-pptx-wasm)

A WASM JavaScript library for manipulating PowerPoint presentations via [`python-pptx`](https://python-pptx.readthedocs.io/en/latest/) and [`Pyodide`](https://pyodide.org/en/stable/).

---

## Features

- ✅ Read/write `.pptx` presentations with the full python-pptx API  
- ✅ WebAssembly-powered via Pyodide  
- ✅ Works in browser and Node.js  
- ✅ Intelligent type inference

## Install

1. Install dependencies:

```bash
$ npm install --save python-pptx-wasm pyodide
```

2. Download the latest recipes (packages.tar.gz) from [`python-pptx-recipe`](https://github.com/yikenman/python-pptx-recipe/releases), and extract them into a fixed location, e.g.: `project_root/assets/recipes`

## Usage

```ts
import fs from 'node:fs';
import { loadPyodide } from 'pyodide';
import { init, Presentation } from 'python-pptx-wasm';

const main = async () => {
  const pyodide = await loadPyodide({
    // Assuming recipes are extracted into `project_root/assets/recipes`
    lockFileURL: `project_root/assets/recipes/pyodide-lock.json`
  });

  await init(pyodide);

  const prs = Presentation();
  const slide1 = prs.slides.add_slide(prs.slide_layouts[0]);
  slide1.shapes.title!.text = 'Slide 1 Title';

  
  prs.save((buffer) => {
    // handle file buffer here
    fs.writeFileSync(`output_file.pptx`, buffer);
  });

  prs.end()
}

main()
```

## Use with Bundler

If you are using a bundler in a web environment (e.g., Vite):

1. Download and extract [`recipes`](https://github.com/yikenman/python-pptx-recipe/releases) into public/recipes.

2. Install `Vite` plugin and update `vite.config.ts`:

```bash
$ npm install vite-plugin-static-copy @types/node --dev
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PYODIDE_EXCLUDE = [
  "!**/*.{md,html}",
  "!**/*.d.ts",
  "!**/*.whl",
  "!**/node_modules",
];

export function viteStaticCopyPyodide() {
  const pyodideDir = dirname(fileURLToPath(import.meta.resolve("pyodide")));
  return viteStaticCopy({
    targets: [
      {
        src: [join(pyodideDir, "*")].concat(PYODIDE_EXCLUDE),
        dest: "assets",
      },
    ],
  });
}

export default defineConfig({
  plugins: [viteStaticCopyPyodide()],
  optimizeDeps: { exclude: ["pyodide"] }
});
```

3. Inside the codes:

```ts
import { loadPyodide } from 'pyodide';
import { init, Presentation } from 'python-pptx-wasm';

const main = async () => {
  const baseURL = window.location.origin + import.meta.env.BASE_URL

  // full url is required by pyodide
  const pyodide = await loadPyodide({
    indexURL: `${baseURL}assets`,
    // Assuming recipes are extracted into `public/recipes`
    lockFileURL: `${baseURL}recipes/pyodide-lock.json`
  });

  await init(pyodide);

  const prs = Presentation();
  const slide1 = prs.slides.add_slide(prs.slide_layouts[0]);
  slide1.shapes.title!.text = 'Slide 1 Title';

  // save file in browser
  prs.save((buffer) => {
    // buffer will be a Unit8array
    // @ts-ignore
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" });
    const a = document.createElement("a");
    a.href = url;
    a.download = 'output_file.pptx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  prs.end()
}

main()
```

## Technical Details

1. Differences from `python-pptx`

    `python-pptx-wasm` reimplements all core classes and method signatures of python-pptx in JavaScript, and calls the actual Python code via a `Pyodide` bridge.

    Note: The `part` components from python-pptx are not implemented.

2. The `end()` method

    Since `python-pptx` runs inside `Pyodide`, memory is not released automatically. 

    When using `python-pptx-wasm`, you must manually call `end()` to free it:

    ```ts
    import { Presentation } from 'python-pptx-wasm';

    // Assuming already initialized
    const prs = Presentation();

    // ...
    // Perform operations on prs

    // Release memory
    prs.end()
    ```

3. File handling

    Unlike `python-pptx`, you cannot pass a file path directly.

    In `python-pptx-wasm`, all files are handled and passed as `Uint8Array` buffers:

    ```ts
    import fs from 'node:fs';
    import { Presentation } from 'python-pptx-wasm';

    // Assuming already initialized
    // Read a file as Uint8Array
    const prs = Presentation(new Uint8Array(fs.readFileSync(`existed_file.pptx`)));

    prs.end()
    ```

4. Length units

    `python-pptx-wasm` reimplements the length unit helpers from `python-pptx`:

    - Length
    - Centipoints
    - Cm
    - Emu
    - Inches
    - Mm
    - Pt

    Example:

    ```ts
    import { Presentation, Emu } from 'python-pptx-wasm';
    import { MSO_AUTO_SHAPE_TYPE } from 'python-pptx-wasm/pptx/enum';

    // Assuming already initialized
    const prs = Presentation();

    // Create a new slide
    const slide = prs.slides.add_slide(prs.slide_layouts[6]);

    // Add a shape using Emu for size/position
    slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.RECTANGLE, Emu(914400), Emu(914400), Emu(1828800), Emu(914400));

    prs.end()
    ```

## License

MIT License