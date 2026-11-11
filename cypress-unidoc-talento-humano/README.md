# Pruebas funcionales – UniDoc (Nova) · Rol Talento Humano

Proyecto de pruebas automatizadas con Cypress del Trabajo Final de Calidad de Software II (Grupo N).

## Requisitos
- Node.js 18 o superior (LTS)
- Google Chrome
- Credenciales de prueba del rol Talento Humano (entregadas por el docente)

## Instalación
```bash
git clone https://github.com/USUARIO/cypress-unidoc-talento-humano.git
cd cypress-unidoc-talento-humano
npm install
```

Copie `cypress.env.example.json` como `cypress.env.json` y complete usuario, contraseña y rutas.
**`cypress.env.json` está en `.gitignore`: nunca lo suba al repositorio.**

## Ejecución
```bash
npx cypress open                    # modo interactivo
npx cypress run --browser chrome    # modo consola (genera videos y capturas)
```

## Estructura
```
cypress/
  e2e/
    01_autenticacion.cy.js     CP-TH-01 a CP-TH-04
    02_consulta_listado.cy.js  CP-TH-05 a CP-TH-07
    03_documentos.cy.js        CP-TH-08
    04_permisos.cy.js          CP-TH-11 y CP-TH-12
  support/
    commands.js                comando cy.login y selectores
    e2e.js
cypress.config.js              baseUrl de la aplicación
cypress.env.example.json       plantilla de variables (sin credenciales reales)
```

CP-TH-09 y CP-TH-10 se ejecutan manualmente porque modifican datos.

## Integrantes
- Lisbeth Moore Salinas · Astrid Martínez Guzmán · Manuel Villaquiran Salazar
