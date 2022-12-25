import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Description Text',
  theme: TextTheme.ERROR,
};

export const Light = Template.bind({});
Light.args = {
  title: 'Title',
  text: 'Description Text',
};

export const Onlytitle = Template.bind({});
Onlytitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description Text',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title',
  text: 'Description Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlytitleDark = Template.bind({});
OnlytitleDark.args = {
  title: 'Title',
};
OnlytitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];