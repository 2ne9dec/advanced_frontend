import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        firstname: 'Vadim',
        lastname: 'Astapenko',
        age: 33,
        currency: Currency.BYN,
        country: Country.Belarus,
        city: 'Zhlobin',
        username: '2ne9dec',
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        firstname: 'Vadim',
        lastname: 'Astapenko',
        age: 33,
        currency: Currency.BYN,
        country: Country.Belarus,
        city: 'Zhlobin',
        username: '2ne9dec',
      },
    },
  }),
];
