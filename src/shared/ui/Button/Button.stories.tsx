import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Button, ButtonForm, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeSM = Template.bind({});
OutlineSizeSM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.SM,
};

export const OutlineSizeMD = Template.bind({});
OutlineSizeMD.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.MD,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: ButtonForm.SQUARE,
};

export const SquareSM = Template.bind({});
SquareSM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: ButtonForm.SQUARE,
  size: ButtonSize.SM,
};

export const SquareMD = Template.bind({});
SquareMD.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: ButtonForm.SQUARE,
  size: ButtonSize.MD,
};