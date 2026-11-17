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

  // CP-TH-08: entra al módulo de Contrataciones desde el panel
  it('CP-TH-08 Acceso al módulo de Contrataciones desde el panel', () => {
    cy.visit('/convocatorias-app/talento-humano');
    cy.contains(/ir a contrataciones/i).should('be.visible').click();
    cy.url().should('include', 'contrataciones');
  });

  // Bloqueado: el módulo de Contrataciones está en desarrollo.
  // Quitar el .skip cuando el listado esté disponible.
  it.skip('CP-TH-08 (pendiente) La lista de contrataciones carga', () => {
    cy.intercept('GET', '*/contrataciones').as('contrataciones');
    cy.visit('/convocatorias-app/talento-humano');
    cy.contains(/ir a contrataciones/i).click();
    cy.wait('@contrataciones').its('response.statusCode').should('eq', 200);
  });
});