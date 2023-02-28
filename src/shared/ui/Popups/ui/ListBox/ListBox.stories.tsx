import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 150 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopRight = Template.bind({});
TopRight.args = {
  items: [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
  ],
  direction: 'top right',
  value: 'BYN',
  label: 'Choose currency',
  onChange: action('onChange'),
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  items: [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
  ],
  direction: 'top left',
  value: 'BYN',
  label: 'Choose currency',
  onChange: action('onChange'),
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  items: [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
  ],
  direction: 'bottom right',
  value: 'BYN',
  label: 'Choose currency',
  onChange: action('onChange'),
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  items: [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
  ],
  direction: 'bottom left',
  value: 'BYN',
  label: 'Choose currency',
  onChange: action('onChange'),
};
