import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const CurrencyPrimary = Template.bind({});
CurrencyPrimary.args = {
  items: [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
  ],
  direction: 'bottom',
  value: 'BYN',
  label: 'Choose currency',
  onChange: action('onChange'),
};

export const CountryPrimary = Template.bind({});
CountryPrimary.args = {
  items: [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
  ],
  direction: 'bottom',
  value: 'Belarus',
  label: 'Choose country',
  onChange: action('onChange'),
};
