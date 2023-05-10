import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

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
