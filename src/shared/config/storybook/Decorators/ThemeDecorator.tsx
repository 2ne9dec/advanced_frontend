/* eslint-disable 2ne9dec-plugin/layer-imports */
import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.setAttribute('data-theme', theme);

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
