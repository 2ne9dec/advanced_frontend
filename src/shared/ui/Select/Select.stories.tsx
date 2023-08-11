import { StoryFn, Meta } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значение',
  options: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт' },
    { value: '3', content: 'Третий пункт' },
    { value: '4', content: 'Четвертый пункт' },
  ],
};
