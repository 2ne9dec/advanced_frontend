import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';

import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsComments>;

const Template: StoryFn<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = { id: '1' };
Normal.decorators = [StoreDecorator({})];
