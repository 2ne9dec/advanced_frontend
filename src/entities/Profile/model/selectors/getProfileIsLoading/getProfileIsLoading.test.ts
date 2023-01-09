import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from '../getProfileIsLoading/getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should return filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
