import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/app.scss';

export const RouteDecorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
};
