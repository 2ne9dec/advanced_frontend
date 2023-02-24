import { screen } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slices/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 33,
  city: 'Zhlobin',
  username: 'admin123',
  currency: Currency.BYN,
  country: Country.Belarus,
};

describe('features/EditableProfileCard', () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard id={'1'} />, {
      initialState: {
        profile: {
          readonly: true,
          data: profile,
          form: profile,
        },
        user: {
          authData: { id: '1', username: 'admin' },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });
  });

  test('Режим readonly должен переключиться', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('On cancellation the values must be reset to zero', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'firstname');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'lastname');
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('firstname');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('lastname');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
  });

  test('Validation of inputs', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('Validation was successful and a PUT request was sent to the server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'firstname');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    expect(mockPutReq).toHaveBeenCalled();
  });
});
