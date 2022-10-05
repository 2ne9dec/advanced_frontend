import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkDark = Template.bind({});
AppLinkDark.args = {
  children: 'Text',
  theme: AppLinkTheme.DARK,
};
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkLight = Template.bind({});
AppLinkLight.args = {
  children: 'Text',
  theme: AppLinkTheme.LIGHT,
};
