// Selectores centralizados. AJUSTAR con el Selector Playground de Cypress.
export const SEL = {
  usuario: '#email', // 
  clave: '#password', // 
  botonIngresar: 'button[type="submit"]', 
  mensajeError: '.alert, .error, [role="alert"], .invalid-feedback',
  buscador: 'input[type="search"], input[placeholder*="Buscar"]',
  filasTabla: 'table tbody tr',

  contenedorAreas: '.bg-white.rounded-2xl',
  tarjetaArea: '.bg-white.rounded-xl',
};


// Escribe el correo y la contraseña guardados en cypress.env.json.
// Si se le pasa otra clave, escribe esa (para probar una clave incorrecta).
Cypress.Commands.add('escribirDatos', (otraClave) => {
  cy.env(['TH_USER', 'TH_PASS']).then(({ TH_USER, TH_PASS }) => {
    if (!TH_USER || !TH_PASS) throw new Error('Faltan TH_USER / TH_PASS en cypress.env.json');
    cy.get(SEL.usuario).first().type(TH_USER);
    cy.get(SEL.clave).first().type(otraClave || TH_PASS, { log: false });
  });
});

// Inicia sesión una vez y la reutiliza en las demás pruebas.
Cypress.Commands.add('login', () => {
  cy.session('talento-humano', () => {
    cy.visit('/convocatorias-app/inicio-sesion');
    cy.escribirDatos();
    cy.get(SEL.botonIngresar).first().click();
    cy.url().should('not.include', 'inicio-sesion');
  });
});
