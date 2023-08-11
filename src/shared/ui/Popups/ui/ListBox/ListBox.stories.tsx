// eslint-disable-next-line 2ne9dec-plugin/layer-imports
import { Currency } from '@/entities/Currency';
import { action } from '@storybook/addon-actions';
import { StoryFn, Meta } from '@storybook/react';

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
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

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
