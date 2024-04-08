Feature: Acceso Limitado por Categorías para Mejorar la Seguridad y Experiencia del Usuario
  Como usuario de MiApoyoITESO, quiero que el acceso a las áreas de la aplicación esté limitado según mi categoría de usuario para mejorar la seguridad y mi experiencia de usuario.

  Background:
    Given que el usuario ha iniciado sesión en MiApoyoITESO

  Scenario: Acceso autorizado según la categoría del usuario
    Given que el usuario tiene el rol de "estudiante"
    When intenta acceder a recursos académicos relevantes
    Then se le concede el acceso a dichos recursos

  Scenario: Denegar acceso a contenido no autorizado
    Given que el usuario tiene el rol de "estudiante"
    When intenta acceder a herramientas de personal docente
    Then se le muestra un mensaje de error y se niega el acceso

  Scenario: Cambio de categoría de usuario
    Given que el usuario tiene el rol de "estudiante"
    And quiere cambiar su categoría a "egresado"
    When solicita el cambio de categoría
    Then el cambio se registra correctamente junto con la fecha y hora

  Scenario: Acceso después de cambiar la categoría de usuario
    Given que el usuario ha cambiado su categoría a "egresado"
    When intenta acceder a servicios y herramientas para egresados
    Then se le concede el acceso a dichos servicios y herramientas


