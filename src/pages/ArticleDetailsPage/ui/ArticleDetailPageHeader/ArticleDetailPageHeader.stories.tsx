import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook';
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';

export default {
  title: 'pages/ArticlesDetailsPage/ArticleDetailPageHeader',
  component: ArticleDetailPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailPageHeader>;

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => <ArticleDetailPageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];