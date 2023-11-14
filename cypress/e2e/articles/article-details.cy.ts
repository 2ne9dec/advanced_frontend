let currentArticle = '';

describe('Пользователь заходит на страницу статьи', () => {
  // Create article -> test all -> remove article
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticle = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticle);
  });
  it('И видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('И видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('И ставит оценку', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
