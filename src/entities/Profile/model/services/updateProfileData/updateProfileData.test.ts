import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/componentRender/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
  id: '1',
  firstname: 'Vadim',
  lastname: 'Astapenko',
  age: 33,
  currency: Currency.BYN,
  country: Country.Belarus,
  city: 'Zhlobin',
  username: '2ne9dec',
};

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
