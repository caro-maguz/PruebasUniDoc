describe('RF-TH-02 Consulta de convocatorias y postulaciones', () => {
  beforeEach(() => {
    cy.login();
  });

  it('CP-TH-05 Ver el listado de convocatorias', () => {
    // Interceptar usando una ruta más flexible para asegurar que capture la petición GET
    cy.intercept('GET', '**/talentoHumano/**').as('convocatorias');

    cy.visit('/convocatorias-app/talento-humano/convocatorias');

    // Esperar a que la petición responda con código 200
    cy.wait('@convocatorias', { timeout: 10000 }).its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/talento-humano/convocatorias');
  });

  it('CP-TH-06 Ver el listado de postulaciones', () => {
    // Interceptar de forma general o apuntando al endpoint de postulaciones
    cy.intercept('GET', '**/talentoHumano/**').as('postulaciones');

    cy.visit('/convocatorias-app/talento-humano/postulaciones');

    // Esperar a que la petición responda con código 200
    cy.wait('@postulaciones', { timeout: 10000 }).its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/talento-humano/postulaciones');
  });

  // CP-TH-08: solo verifica que el botón del panel abre el módulo.
  it('CP-TH-08 El botón Ir a contrataciones abre el módulo', () => {
    cy.visit('/convocatorias-app/talento-humano');
    cy.contains(/ir a contrataciones/i).should('be.visible').click();
    cy.url().should('include', 'contrataciones');
  });
});