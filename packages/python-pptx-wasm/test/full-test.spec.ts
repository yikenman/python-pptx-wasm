import fs from 'node:fs';
import { loadPyodide } from 'pyodide';
import { init, Presentation } from '../src';
import { Emu, Inches, Pt } from '../src/bridge';
import type { BarSeries, PieSeries } from '../src/pptx/chart/series';
import { XL_CHART_TYPE, XL_LEGEND_POSITION } from '../src/pptx/enum/chart';
import { MSO_AUTO_SHAPE_TYPE, MSO_SHAPE_TYPE } from '../src/pptx/enum/shapes';
import { MSO_VERTICAL_ANCHOR, PP_ALIGN } from '../src/pptx/enum/text';
import type { Shape } from '../src/pptx/shapes/autoshape';
import type { GraphicFrame } from '../src/pptx/shapes/graphfrm';
import type { Picture } from '../src/pptx/shapes/picture';

const testDist = `${__dirname}/output`;
const assetsDist = `${__dirname}/assets`;

describe('Full test', () => {
  beforeAll(async () => {
    fs.rmSync(testDist, { recursive: true, force: true });
    fs.mkdirSync(testDist, { recursive: true });

    const pyodide = await loadPyodide({
      lockFileURL: `${assetsDist}/pyodide-lock.json`
    });

    await init(pyodide);
  });

  it('should throw PythonError when failed', () => {
    const prs = Presentation();

    expect(() => {
      // @ts-ignore
      const slide = prs.slides.add_slide('invalid');
    }).toThrow(Error);

    prs.end();
  });

  describe('Slide', () => {
    it(`01. should be able to add slide layout`, () => {
      let prs = Presentation();

      const slide_default = prs.slides.add_slide(prs.slide_layouts[1]);
      const slide_blank = prs.slides.add_slide(prs.slide_layouts[6]);

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Slide-01.pptx`, buffer);
      });
      prs.end();

      prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Slide-01.pptx`)));

      expect(prs.slides.length).toBe(2);

      prs.end();
    });

    it('02. should be able to read slides in order', () => {
      let prs = Presentation();

      const slide1 = prs.slides.add_slide(prs.slide_layouts[0]);
      slide1.shapes.title!.text = 'Slide 1 Title';

      const slide2 = prs.slides.add_slide(prs.slide_layouts[1]);
      slide2.shapes.title!.text = 'Slide 2 Title';

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Slide-02.pptx`, buffer);
      });
      prs.end();

      prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Slide-02.pptx`)));

      expect(prs.slides.length).toBe(2);
      expect(prs.slides[0].shapes.title!.text).toBe('Slide 1 Title');
      expect(prs.slides[1].shapes.title!.text).toBe('Slide 2 Title');

      prs.end();
    });

    it('03. should be able to delete slide', () => {
      let prs = Presentation();

      const slide_default = prs.slides.add_slide(prs.slide_layouts[1]);
      const slide_blank = prs.slides.add_slide(prs.slide_layouts[6]);

      prs.slides._sldIdLst.remove(prs.slides._sldIdLst.sldId_lst[0]);

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Slide-03.pptx`, buffer);
      });
      prs.end();

      prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Slide-03.pptx`)));

      expect(prs.slides.length).toBe(1);

      prs.end();
    });
  });

  describe('Shape', () => {
    it('01. should be able to insert shapes in order', () => {
      let prs = Presentation();

      const slide = prs.slides.add_slide(prs.slide_layouts[6]);

      slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.RECTANGLE, Emu(914400), Emu(914400), Emu(1828800), Emu(914400));
      slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.OVAL, Emu(3657600), Emu(914400), Emu(1371600), Emu(1371600));
      slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.RIGHT_ARROW, Emu(914400), Emu(2743200), Emu(2743200), Emu(914400));

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Shape-01.pptx`, buffer);
      });
      prs.end();

      prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Shape-01.pptx`)));

      expect(prs.slides[0].shapes.length).toBe(3);

      const shapeTypes: number[] = [];
      for (let i = 0; i < prs.slides[0].shapes.length; i++) {
        const shape = prs.slides[0].shapes[i] as Shape;
        shapeTypes.push(shape.auto_shape_type);
      }

      expect(shapeTypes).toEqual([
        MSO_AUTO_SHAPE_TYPE.RECTANGLE,
        MSO_AUTO_SHAPE_TYPE.OVAL,
        MSO_AUTO_SHAPE_TYPE.RIGHT_ARROW
      ]);

      prs.end();
    });

    it('02. should be able to modify shapes', () => {
      let prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Shape-01.pptx`)));

      const slide1 = prs.slides[0];
      const shapes = slide1.shapes;
      const rect = shapes[0] as Shape;
      rect.fill.solid();
      rect.fill.fore_color.rgb = [255, 0, 0];
      rect.line.color.rgb = [0, 0, 0];
      rect.line.width = Pt(2);
      rect.text = 'Rectangle';

      const oval = shapes[1] as Shape;
      oval.fill.solid();
      oval.fill.fore_color.rgb = [0, 255, 0];
      oval.line.color.rgb = [0, 0, 0];
      oval.line.width = Pt(2);
      oval.text = 'Circle';

      const arrow = shapes[2] as Shape;
      arrow.fill.solid();
      arrow.fill.fore_color.rgb = [0, 0, 255];
      arrow.line.color.rgb = [0, 0, 0];
      arrow.line.width = Pt(2);
      arrow.left = Emu(1828800);
      arrow.top = Emu(3200000);
      arrow.width = Emu(3000000);
      arrow.height = Emu(1000000);
      arrow.text = 'Arrow';

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Shape-02.pptx`, buffer);
      });
      prs.end();

      prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Shape-02.pptx`)));

      expect(prs.slides[0].shapes.length).toBe(3);

      const shape1 = prs.slides[0].shapes[0] as Shape;
      expect(shape1.text).toBe('Rectangle');
      expect(shape1.fill.fore_color.rgb).toEqual([255, 0, 0]);
      expect(shape1.line.color.rgb).toEqual([0, 0, 0]);

      prs.end();
    });

    it('03. should be able to delete shapes', () => {
      let prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Shape-02.pptx`)));

      for (let i = 0; i < prs.slides[0].shapes.length; i++) {
        const shape = prs.slides[0].shapes[i] as Shape;
        if (shape.auto_shape_type === MSO_AUTO_SHAPE_TYPE.OVAL) {
          shape._element.getparent()?.remove(shape._element);
        }
      }

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Shape-03.pptx`, buffer);
      });
      prs.end();

      prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Shape-03.pptx`)));

      expect(prs.slides[0].shapes.length).toBe(2);

      const shapeTypes: number[] = [];
      for (let i = 0; i < prs.slides[0].shapes.length; i++) {
        const shape = prs.slides[0].shapes[i] as Shape;
        shapeTypes.push(shape.auto_shape_type);
      }

      expect(shapeTypes).toEqual([MSO_AUTO_SHAPE_TYPE.RECTANGLE, MSO_AUTO_SHAPE_TYPE.RIGHT_ARROW]);

      prs.end();
    });
  });

  describe('Text', () => {
    it('01. shoule be able to insert text', () => {
      let prs = Presentation();

      const slide = prs.slides.add_slide(prs.slide_layouts[6]);

      const textbox = slide.shapes.add_textbox(Emu(914400), Emu(914400), Emu(4000000), Emu(1000000));
      const text_frame = textbox.text_frame;
      text_frame.clear();
      text_frame.word_wrap = true;

      const p = text_frame.add_paragraph();
      p.alignment = PP_ALIGN.LEFT;
      p.space_before = Pt(6);
      p.space_after = Pt(6);

      const run = p.add_run();
      run.text = 'This is blod red text';
      run.font.bold = true;
      run.font.size = Pt(24);
      run.font.color.rgb = [255, 0, 0];

      const run2 = p.add_run();
      run2.text = ', and following blue normal text.';
      run2.font.bold = false;
      run2.font.size = Pt(20);
      run2.font.color.rgb = [0, 0, 255];

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Text-01.pptx`, buffer);
      });
      prs.end();
    });

    it('02. should be able to read text', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Text-01.pptx`)));

      expect(prs.slides[0].shapes.length).toBe(1);

      const text_frame = (prs.slides[0].shapes[0] as Shape).text_frame;
      const p = text_frame.paragraphs;

      expect(p.length).toBe(2);
      // empty p
      expect(p[0].runs.length).toBe(0);

      const runs = p[1].runs;

      expect(p[1].space_after).toEqual(Pt(6));
      expect(runs[0].text).toBe('This is blod red text');
      expect(runs[0].font.bold).toBe(true);
      expect(runs[0].font.size).toEqual(Pt(24));
      expect(runs[0].font.color.rgb).toEqual([255, 0, 0]);

      expect(runs[1].text).toBe(', and following blue normal text.');
      expect(runs[1].font.bold).toBe(false);
      expect(runs[1].font.size).toEqual(Pt(20));
      expect(runs[1].font.color.rgb).toEqual([0, 0, 255]);

      prs.end();
    });

    it('03. should be able to insert multiple paragraphs', () => {
      const prs = Presentation();
      const slide = prs.slides.add_slide(prs.slide_layouts[6]);

      const textbox = slide.shapes.add_textbox(Emu(914400), Emu(914400), Emu(5000000), Emu(3000000));
      const text_frame = textbox.text_frame;
      text_frame.clear();

      const paragraphs = [
        [
          { text: 'Paragraph 1, bold', bold: true, size: 20, color: [255, 0, 0] },
          { text: ', normal text', bold: false, size: 20, color: [0, 0, 0] }
        ],
        [{ text: 'Paragraph 2, all blue', bold: false, size: 24, color: [0, 0, 255] }],
        [
          { text: 'Paragraph 3: large font', bold: false, size: 32, color: [0, 128, 0] },
          { text: ' bold style', bold: true, size: 32, color: [128, 0, 128] }
        ]
      ];

      for (const paragraph of paragraphs) {
        const p = text_frame.add_paragraph();
        p.alignment = PP_ALIGN.LEFT;

        for (const run_data of paragraph) {
          const run = p.add_run();
          run.text = run_data['text'];
          run.font.bold = run_data['bold'];
          run.font.size = Pt(run_data['size']);
          run.font.color.rgb = run_data['color'] as [number, number, number];
        }
      }

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Text-03.pptx`, buffer);
      });
      prs.end();
    });

    it('04. should be able to read multiple paragraphs', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Text-03.pptx`)));
      const text_frame = (prs.slides[0].shapes[0] as Shape).text_frame;
      const p = text_frame.paragraphs;

      expect(p.length).toBe(4);
      // empty p
      expect(p[0].runs.length).toBe(0);
      expect(p[1].runs.length).toBe(2);
      expect(p[2].runs.length).toBe(1);
      expect(p[3].runs.length).toBe(2);

      expect(p[1].runs[1].text).toBe(', normal text');

      prs.end();
    });
  });

  describe('Table', () => {
    it('01. should be able to insert table', () => {
      const prs = Presentation();
      const slide = prs.slides.add_slide(prs.slide_layouts[6]);

      const rows = 3;
      const cols = 4;
      const colors = [
        [
          [255, 0, 0],
          [0, 255, 0]
        ],
        [
          [0, 0, 255],
          [255, 255, 0]
        ]
      ] as [number, number, number][][];

      const table_shape = slide.shapes.add_table(rows, cols, Emu(914400), Emu(914400), Emu(6000000), Emu(2000000));
      const table = table_shape.table;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = table.cell(r, c);
          cell.text = `R${r + 1}C${c + 1}`;
          const para = cell.text_frame.paragraphs[0];
          para.alignment = PP_ALIGN.CENTER;
          cell.text_frame.vertical_anchor = MSO_VERTICAL_ANCHOR.MIDDLE;

          const run = para.runs[0];
          run.font.size = Pt(14);
          run.font.bold = true;
          run.font.color.rgb = [0, 0, 128];

          const fill = cell.fill;
          if (colors?.[r]?.[c]) {
            fill.solid();
            fill.fore_color.rgb = colors?.[r]?.[c];
          }
        }
      }

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Table-01.pptx`, buffer);
      });
      prs.end();
    });

    it('02. should be able to iterate cells', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Table-01.pptx`)));
      const slide = prs.slides[0];

      for (const shape of slide.shapes) {
        if (!shape.has_table) {
          continue;
        }
        const table = (shape as GraphicFrame).table;

        table.rows.forEach((row, r) => {
          row.cells.forEach((cell, c) => {
            expect(cell.text_frame.text).toBe(`R${r + 1}C${c + 1}`);
          });
        });
      }

      prs.end();
    });

    it('03. should be able to merge cells', () => {
      const prs = Presentation();
      const slide = prs.slides.add_slide(prs.slide_layouts[5]);

      const x = Inches(1);
      const y = Inches(2);
      const cx = Inches(6);
      const cy = Inches(2);

      const table_shape = slide.shapes.add_table(3, 3, x, y, cx, cy).table;

      const merged_cell = table_shape.cell(0, 0);
      merged_cell.merge(table_shape.cell(1, 1));
      merged_cell.text = 'Merged Cell';

      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const cell = table_shape.cell(r, c);
          if (!(r <= 1 && c <= 1)) {
            cell.text = `R${r}C${c}`;
          }
        }
      }

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Table-03.pptx`, buffer);
      });
      prs.end();
    });

    it('04. should be able to read merged cells', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Table-03.pptx`)));
      const slide = prs.slides[0];
      const shape = slide.shapes[1];

      const table = (shape as GraphicFrame).table;

      expect(table.cell(0, 0).text_frame.text).toBe('Merged Cell');
      expect(table.cell(0, 1).text_frame.text).toBe('');
      expect(table.cell(1, 0).text_frame.text).toBe('');
      expect(table.cell(1, 1).text_frame.text).toBe('');

      prs.end();
    });
  });

  describe('Picture', () => {
    it('01. should be able to insert image', () => {
      const prs = Presentation();
      const slide = prs.slides.add_slide(prs.slide_layouts[5]);

      const x = Inches(1);
      const y = Inches(1);
      const cx = Inches(3);
      const cy = Inches(2);

      slide.shapes.add_picture(new Uint8Array(fs.readFileSync(`${assetsDist}/test-image.jpeg`)), x, y, cx, cy);

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Picture-01.pptx`, buffer);
      });
      prs.end();
    });

    it('02. should be able to read image', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Picture-01.pptx`)));
      const slide = prs.slides[0];
      const shape = slide.shapes[1];

      expect(shape.shape_type).toBe(MSO_SHAPE_TYPE.PICTURE);
      expect((shape as Picture).image.ext).toEqual('jpg');

      prs.end();
    });
  });

  describe('Chart', () => {
    it('01. should be able to insert charts', () => {
      const prs = Presentation();

      const slide_layout = prs.slide_layouts[5];
      const slide = prs.slides.add_slide(slide_layout);

      const chart_data = slide.shapes.create_category_chart_data();
      chart_data.categories = ['1st Season', '2nd Season', '3rd Season'];
      chart_data.add_series('Product A', [19.2, 21.4, 16.7]);
      chart_data.add_series('Product B', [22.3, 28.6, 15.2]);
      chart_data.add_series('Product C', [20.4, 26.3, 14.2]);

      // bar chart
      const chart_shape = slide.shapes.add_chart(
        XL_CHART_TYPE.COLUMN_CLUSTERED,
        Emu(2000000),
        Emu(500000),
        Emu(4000000),
        Emu(3000000),
        chart_data
      ).chart;

      chart_shape.has_title = true;
      chart_shape.chart_title.text_frame.text = 'Bar Chart Demo';

      chart_shape.has_legend = true;
      chart_shape.legend!.position = XL_LEGEND_POSITION.BOTTOM;
      chart_shape.legend!.include_in_layout = false;
      chart_shape.legend!.font.size = Pt(14);
      chart_shape.value_axis.tick_labels.font.size = Pt(10);
      chart_shape.category_axis.tick_labels.font.size = Pt(10);

      for (const series of chart_shape.series) {
        const data_labels = (series as BarSeries).data_labels;
        data_labels.font.size = Pt(10);
        data_labels.font.color.rgb = [0, 0, 0];
      }

      chart_shape.series[0].format.fill.solid();
      chart_shape.series[0].format.fill.fore_color.rgb = [255, 99, 132];

      chart_shape.series[1].format.fill.solid();
      chart_shape.series[1].format.fill.fore_color.rgb = [54, 162, 235];

      chart_shape.series[2].format.fill.solid();
      chart_shape.series[2].format.fill.fore_color.rgb = [255, 206, 86];

      // line chart
      const line_chart = slide.shapes.add_chart(
        XL_CHART_TYPE.LINE,
        Emu(2000000),
        Emu(3700000),
        Emu(4000000),
        Emu(3000000),
        chart_data
      ).chart;

      line_chart.has_title = true;
      line_chart.chart_title.text_frame.text = 'Line Chart Demo';

      line_chart.has_legend = true;
      line_chart.legend!.position = XL_LEGEND_POSITION.RIGHT;
      line_chart.legend!.include_in_layout = false;
      line_chart.legend!.font.size = Pt(14);
      line_chart.value_axis.tick_labels.font.size = Pt(10);
      line_chart.category_axis.tick_labels.font.size = Pt(10);

      for (const series of chart_shape.series) {
        series.format.line.width = Emu(30000);
      }

      // pie chart
      const pie_data = slide.shapes.create_category_chart_data();
      pie_data.categories = ['Apple', 'Banana', 'Cherry'];
      pie_data.add_series('Sold', [40, 35, 25]);

      const pie_chart = slide.shapes.add_chart(
        XL_CHART_TYPE.PIE,
        Emu(6500000),
        Emu(2000000),
        Emu(3000000),
        Emu(3000000),
        pie_data
      ).chart;

      pie_chart.has_title = true;
      pie_chart.chart_title.text_frame.text = 'Pie Chart Demo';

      pie_chart.has_legend = true;
      pie_chart.legend!.position = XL_LEGEND_POSITION.RIGHT;
      pie_chart.legend!.font.size = Pt(14);

      for (const series of pie_chart.series) {
        const labels = (series as PieSeries).data_labels;
        labels.show_percentage = true;
        labels.font.size = Pt(9);
      }

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Chart-01.pptx`, buffer);
      });
      prs.end();
    });

    it('02. should be able to modify charts', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Chart-01.pptx`)));
      const slide = prs.slides[0];

      const chart = (slide.shapes[1] as GraphicFrame).chart;

      const chart_data = chart.create_category_chart_data();
      chart_data.categories = ['1st Season', '2nd Season', '3rd Season'];
      chart_data.add_series('Product A', [30.2, 21.4, 16.7]);
      chart_data.add_series('Product B', [40.3, 35.6, 1.2]);
      chart_data.add_series('Product C', [50.4, 32.3, 5.2]);

      chart.replace_data(chart_data);

      chart.series.forEach((series, idx) => {
        const fill = series.format.fill;
        fill.solid();
        if (idx === 0) {
          fill.fore_color.rgb = [255, 99, 71];
        } else {
          fill.fore_color.rgb = [30, 144, 255];
        }

        const line = series.format.line;
        line.width = Pt(1.5);
        line.fill.solid();
        line.fill.fore_color.rgb = [0, 0, 0];
      });

      prs.save((buffer) => {
        fs.writeFileSync(`${testDist}/Chart-02.pptx`, buffer);
      });
      prs.end();
    });

    it('03. should be able to read chart data', () => {
      const prs = Presentation(new Uint8Array(fs.readFileSync(`${testDist}/Chart-02.pptx`)));
      const slide = prs.slides[0];

      const chart = (slide.shapes[1] as GraphicFrame).chart;

      const categories = chart.plots[0].categories.map((category) => {
        return category.label;
      });

      const data: { name: string; value: number[] }[] = [];
      for (const series of chart.series) {
        const name = (series as BarSeries).name;
        const value = (series as BarSeries).values;

        data.push({
          name,
          value
        });
      }

      expect(categories).toEqual(['1st Season', '2nd Season', '3rd Season']);
      expect(data).toEqual([
        { name: 'Product A', value: [30.2, 21.4, 16.7] },
        { name: 'Product B', value: [40.3, 35.6, 1.2] },
        { name: 'Product C', value: [50.4, 32.3, 5.2] }
      ]);

      prs.end();
    });
  });
});
