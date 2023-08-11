import { StoryFn, Meta } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iusto vero ullam a aliquid ex vitae tenetur sunt earum inventore ab vel repellat placeat sed animi, fugiat similique reiciendis minus excepturi. Quae aut pariatur magni incidunt tempore tempora iusto ex.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iusto vero ullam a aliquid ex vitae tenetur sunt earum inventore ab vel repellat placeat sed animi, fugiat similique reiciendis minus excepturi. Quae aut pariatur magni incidunt tempore tempora iusto ex.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
