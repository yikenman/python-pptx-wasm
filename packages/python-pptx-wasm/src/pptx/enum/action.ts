import { ENUM_NAME } from '../../bridge';

/**
 * Specifies the type of a mouse action (click or hover action).
 *
 * Alias: `PP_ACTION`
 *
 * MS API name: `PpActionType`
 *
 * https://msdn.microsoft.com/EN-US/library/office/ff744895.aspx
 */
export enum PP_ACTION_TYPE {
  /** Slide show ends. */
  END_SHOW = 6,

  /** Returns to the first slide. */
  FIRST_SLIDE = 3,

  /** Hyperlink. */
  HYPERLINK = 7,

  /** Moves to the last slide. */
  LAST_SLIDE = 4,

  /** Moves to the last slide viewed. */
  LAST_SLIDE_VIEWED = 5,

  /** Moves to slide specified by slide number. */
  NAMED_SLIDE = 101,

  /** Runs the slideshow. */
  NAMED_SLIDE_SHOW = 10,

  /** Moves to the next slide. */
  NEXT_SLIDE = 1,

  /** No action is performed. */
  NONE = 0,

  /** Opens the specified file. */
  OPEN_FILE = 102,

  /** OLE Verb. */
  OLE_VERB = 11,

  /** Begins the slideshow. */
  PLAY = 12,

  /** Moves to the previous slide. */
  PREVIOUS_SLIDE = 2,

  /** Runs a macro. */
  RUN_MACRO = 8,

  /** Runs a program. */
  RUN_PROGRAM = 9
}
// @ts-ignore
PP_ACTION_TYPE[ENUM_NAME] = 'PP_ACTION_TYPE';

export const PP_ACTION = PP_ACTION_TYPE;
export type PP_ACTION = PP_ACTION_TYPE;
