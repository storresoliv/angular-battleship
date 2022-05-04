# Battleship
Juego de mesa Battleship en Angular

## Instalacion

Ejecuta `npm run install` para instalar todas las dependencias del proyecto.

## Compilacion

Ejecuta `npm run build` para compilar el proyecto. El compilado genera los artefactos en el directorio `dist/`.

## Pruebas

Ejecuta `npm run test` para evaluar las pruebas unitarias utilizando el framework Karma.

## Despliegue

Para los despliegues leer documentacion de [despliegue](./../documentation/DEPLOY.md).

## Estrategia para ramas

La rama principal sera `main` y la rama para desarrollo sera `develop`. Cada nueva feature debera ser implementada en una rama `feature-name` donde el nombre de la rama lo define el contexto. Todas las ramas `feature` se deben crear a partir de `main` y luego que el desarrollo este finalizado se deben fusionar en `develop`.

## Nomenclatura para ramas

Para las ramas se utilizara la notacion `kebab case` y estan deben seguir un prefijo indicando el motivo por el cual se ha creado la nueva rama.

Prefijos:

- feature-name
- chore-name
- fix-name
- feat-name

## Nomenclatura para commits

Para los mensajes de commit se sigue el siguiente patron de prefijos:

- feat: commit message
- fix: commit message
- chore: commit message
