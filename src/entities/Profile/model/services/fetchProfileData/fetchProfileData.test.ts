import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/componentRender/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
  firstname: 'Vadim',
  lastname: 'Astapenko',
  age: 33,
  currency: Currency.BYN,
  country: Country.Belarus,
  city: 'Zhlobin',
  username: '2ne9dec',
};

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
  });

  test('error fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
