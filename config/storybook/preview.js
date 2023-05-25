import { addDecorator } from '@storybook/react';
import { StyleDecorator, ThemeDecorator, RouterDecorator, SuspenseDecorator } from '../../src/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
