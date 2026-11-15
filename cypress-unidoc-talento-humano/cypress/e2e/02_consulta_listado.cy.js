describe('RF-TH-02 Consulta de convocatorias y postulaciones', () => {
  beforeEach(() => {
    cy.login();
  });

  it('CP-TH-05 Ver el listado de convocatorias', () => {
    // Esperar la respuesta de las convocatorias
    cy.intercept('GET', '**/talentoHumano/obtener-convocatorias*').as('convocatorias');

    cy.visit('/convocatorias-app/talento-humano/convocatorias');

    // La consulta debe responder bien
    cy.wait('@convocatorias').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/talento-humano/convocatorias');
  });

  it('CP-TH-06 Ver el listado de postulaciones', () => {
    // Esperar la respuesta de las postulaciones
    cy.intercept('GET', '**/talentoHumano/obtener-postulaciones*').as('postulaciones');

    cy.visit('/convocatorias-app/talento-humano/postulaciones');

    // La consulta debe responder bien
    cy.wait('@postulaciones').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/talento-humano/postulaciones');
  });
});
