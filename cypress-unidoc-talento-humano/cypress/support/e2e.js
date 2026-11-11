import './commands';

// Evita que errores de JavaScript propios de la aplicación detengan las pruebas.
// Si ocurre uno, queda registrado en Cypress (puede reportarse como defecto).
Cypress.on('uncaught:exception', () => false);
