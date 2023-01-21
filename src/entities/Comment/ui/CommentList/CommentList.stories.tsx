import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'Hello',
      user: { id: '1', username: 'Vadim' },
    },
    {
      id: '2',
      text: 'Hi',
      user: { id: '2', username: 'Kirill' },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [
    {
      id: '1',
      text: 'Hello',
      user: { id: '1', username: 'Vadim' },
    },
    {
      id: '2',
      text: 'Hi',
      user: { id: '2', username: 'Kirill' },
    },
  ],
  isLoading: true,
};
