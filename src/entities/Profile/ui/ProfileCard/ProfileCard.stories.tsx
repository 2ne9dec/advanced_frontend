import { StoryFn, Meta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from '@/shared/assets/static/storybook.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstname: 'Vadim',
    lastname: 'Astapenko',
    age: 33,
    currency: Currency.BYN,
    country: Country.Belarus,
    city: 'Zhlobin',
    username: '2ne9dec',
    avatar,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};
