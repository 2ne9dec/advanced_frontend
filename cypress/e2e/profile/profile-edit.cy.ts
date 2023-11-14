let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${profileId}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'user');
  });
  it('И редактирует его', () => {
    const newName = 'Vadim';
    const newLastname = 'Astapenko';
    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
