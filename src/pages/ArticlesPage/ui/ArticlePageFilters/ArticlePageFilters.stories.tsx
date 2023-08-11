import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
  title: 'pages/ArticlesPage/ArticlePageFilters',
  component: ArticlePageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePageFilters>;

const Template: StoryFn<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
