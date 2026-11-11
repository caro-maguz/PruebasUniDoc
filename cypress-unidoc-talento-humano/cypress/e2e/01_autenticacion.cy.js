import { SEL } from '../support/commands';

describe('RF-TH-01 Autenticación - rol Talento Humano', () => {
  it('CP-TH-01 Inicio de sesión con credenciales válidas', () => {
    cy.visit('/convocatorias-app/inicio-sesion');
    cy.get(SEL.usuario).first().type(Cypress.env('TH_USER'));
    cy.get(SEL.clave).first().type(Cypress.env('TH_PASS'), { log: false });
    cy.get(SEL.botonIngresar).first().click();
    cy.url().should('not.include', 'login'); // AJUSTAR
    cy.contains(/talento humano/i).should('be.visible'); // AJUSTAR: texto que confirme el rol
  });

  it('CP-TH-02 Inicio de sesión con contraseña incorrecta', () => {
    cy.visit('/convocatorias-app/inicio-sesion');
    cy.get(SEL.usuario).first().type(Cypress.env('TH_USER'));
    cy.get(SEL.clave).first().type('ClaveIncorrecta123');
    cy.get(SEL.botonIngresar).first().click();
    cy.get(SEL.mensajeError).should('be.visible');
    cy.url().should('include', '/convocatorias-app/inicio-sesion'); 
  });

  
  it('CP-TH-03 Inicio de sesión con campos vacíos', () => {
    // Ingresar al inicio de sesión
    cy.visit('/convocatorias-app/inicio-sesion');

    // Intentar ingresar sin completar los campos
    cy.get(SEL.botonIngresar).first().click();

    // Verificar mensaje de validación del correo
    cy.contains('Correo no valido').should('be.visible');

    // Verificar mensaje de validación de contraseña
    cy.contains('Contraseña muy corta').should('be.visible');

    // Verificar que permanezca en el inicio de sesión
    cy.url().should('include', '/convocatorias-app/inicio-sesion');
  });


  it('CP-TH-04 Cierre de sesión y acceso posterior a ruta protegida', () => {

    // Iniciar sesión
    cy.visit('/convocatorias-app/inicio-sesion');

    cy.get(SEL.usuario).first().type(Cypress.env('TH_USER'));
    cy.get(SEL.clave).first().type(Cypress.env('TH_PASS'), { log: false });
    cy.get(SEL.botonIngresar).first().click();

    // Confirmar inicio de sesión
    cy.contains(/talento humano/i).should('be.visible');

    // Acceder a la sección protegida
    cy.visit('/convocatorias-app/talento-humano');

    cy.url().should('include', '/talento-humano');

    // Cerrar sesión
    cy.get('button:has(svg.lucide-log-out)')
      .should('be.visible')
      .click();

    // Comprobar que salió de la sección protegida
    cy.location('pathname')
      .should('not.include', '/talento-humano');

    // Intentar acceder nuevamente a la ruta protegida
    cy.visit('/convocatorias-app/talento-humano');

    // Verificar que el sistema bloquee el acceso
    cy.location('pathname')
      .should('not.include', '/talento-humano');

  });

});
