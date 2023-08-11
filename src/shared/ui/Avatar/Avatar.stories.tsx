import { StoryFn, Meta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/static/storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarPrimary = Template.bind({});
AvatarPrimary.args = {
  size: 150,
  src: AvatarImg,
};

export const AvatarSmallSize = Template.bind({});
AvatarSmallSize.args = {
  size: 100,
  src: AvatarImg,
};
