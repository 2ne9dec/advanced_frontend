import { addDecorator } from '@storybook/react';
import { StyleDecorator, RouterDecorator, SuspenseDecorator } from '../../src/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
      { name: 'dark', class: ['app',Theme.DARK], color: '#000000' },
      { name: 'orange', class: ['app',Theme.ORANGE], color: '#ffb005' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
