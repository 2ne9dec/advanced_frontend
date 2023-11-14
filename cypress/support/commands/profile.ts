export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '3',
      firstname: 'user',
      lastname: 'user',
      age: 21,
      currency: 'BYN',
      country: 'Belarus',
      city: 'Zhlobin',
      username: '',
      avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
