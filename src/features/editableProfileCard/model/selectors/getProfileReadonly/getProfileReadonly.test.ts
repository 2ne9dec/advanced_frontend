import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from '../getProfileReadonly/getProfileReadonly';

describe('getProfileReadonly.test', () => {
  test('should return filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
