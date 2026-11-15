describe('RF-TH-03 Permisos del rol Talento Humano', () => {
  it('CP-TH-07 Entrar a Talento Humano sin iniciar sesión', () => {
    // Asegurar que no haya sesión abierta
    cy.clearCookies();

    cy.visit('/convocatorias-app/talento-humano');

    // Debe sacarlo de la sección de Talento Humano
    cy.location('pathname').should('not.include', '/talento-humano');
  });
});
