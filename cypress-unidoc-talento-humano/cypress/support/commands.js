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


// Inicia sesión con las credenciales de cypress.env.json (nunca escritas en el código).
Cypress.Commands.add('login', () => {
  const user = Cypress.env('TH_USER');
  const pass = Cypress.env('TH_PASS');
  if (!user || !pass) throw new Error('Faltan TH_USER / TH_PASS en cypress.env.json');

  cy.session([user], () => {
    cy.visit('/convocatorias-app/inicio-sesion');
    cy.get(SEL.usuario).first().type(user);
    cy.get(SEL.clave).first().type(pass, { log: false });
    cy.get(SEL.botonIngresar).first().click();
    cy.url().should('not.include', 'login'); // AJUSTAR si la URL de inicio es otra
  });
});
