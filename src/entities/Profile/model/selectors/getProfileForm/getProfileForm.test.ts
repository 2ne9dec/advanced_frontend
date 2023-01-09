import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from '../getProfileForm/getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form', () => {
    const data = {
      firstname: 'Vadim',
      lastname: 'Astapenko',
      age: 33,
      currency: Currency.BYN,
      country: Country.Belarus,
      city: 'Zhlobin',
      username: '2ne9dec',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
