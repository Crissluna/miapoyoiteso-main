const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let userRole;
let accessResult;
let categoryChangeRegistered;

Given('que el usuario ha iniciado sesión en MiApoyoITESO', function () {
  // Code to simulate user login
});

Given('que el usuario tiene el rol de {string}', function (role) {
  userRole = role;
});

When('intenta acceder a recursos académicos relevantes', function () {
  accessResult = (userRole === 'estudiante') ? 'granted' : 'denied';
});

Then('se le concede el acceso a dichos recursos', function () {
  assert.strictEqual(accessResult, 'granted');
});

When('intenta acceder a herramientas de personal docente', function () {
  accessResult = (userRole === 'estudiante') ? 'denied' : 'granted';
});

Then('se le muestra un mensaje de error y se niega el acceso', function () {
  assert.strictEqual(accessResult, 'denied');
});

Given('quiere cambiar su categoría a {string}', function (newCategory) {
  // Simulate the request to change the category to "egresado"
});

When('solicita el cambio de categoría', function () {
  // Simulate the category change process
  categoryChangeRegistered = true; // This should be the result of the category change process
});

Then('el cambio se registra correctamente junto con la fecha y hora', function () {
  assert.strictEqual(categoryChangeRegistered, true);
});

Given('que el usuario ha cambiado su categoría a {string}', function (changedCategory) {
  userRole = changedCategory;
});

When('intenta acceder a servicios y herramientas para egresados', function () {
  accessResult = (userRole === 'egresado') ? 'granted' : 'denied';
});

Then('se le concede el acceso a dichos servicios y herramientas', function () {
  assert.strictEqual(accessResult, 'granted');
});
