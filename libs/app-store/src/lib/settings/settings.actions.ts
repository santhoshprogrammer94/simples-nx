import { createAction, props } from '@ngrx/store';

import { Language } from './settings.reducer';

export const actionSettingsChangeLanguage = createAction('[Settings] Change Language', props<{ language: Language }>());

export const actionSettingsChangeTheme = createAction('[Settings] Change Theme', props<{ theme: string }>());
export const actionSettingsChangeAutoNightMode = createAction(
  '[Settings] Change Auto Night Mode',
  props<{ autoNightMode: boolean }>()
);

export const actionSettingsChangeStickyHeader = createAction(
  '[Settings] Change Sticky Header',
  props<{ stickyHeader: boolean }>()
);

export const actionSettingsChangeAnimationsPage = createAction(
  '[Settings] Change Animations Page',
  props<{ pageAnimations: boolean }>()
);

export const actionSettingsChangeAnimationsPageDisabled = createAction(
  '[Settings] Change Animations Page Disabled',
  props<{ pageAnimationsDisabled: boolean }>()
);

export const actionSettingsChangeAnimationsElements = createAction(
  '[Settings] Change Animations Elements',
  props<{ elementsAnimations: boolean }>()
);
export const actionSettingsChangeHour = createAction('[Settings] Change Hours', props<{ hour: number }>());

export const actionSettingsChangeSideNav = createAction('[Settings] Change SideNav', props<{ sideNav: boolean }>());

export const actionPushMenu = createAction('[Settings] Push Menu', props<{ menus: any }>());
