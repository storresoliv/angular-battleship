# PLAN DE DESPLIEGUE
Este documeto especifica los pasos a seguir para un correcto despliegue de la aplicacion.

# ESTRATEGIA PARA RAMAS
La rama principal sera `main` y la rama para desarrollo sera `develop`. Cada nueva feature debera ser implementada en una rama `feature-name` donde el nombre de la rama lo define el contexto. Todas las ramas `feature` se deben crear a partir de `main` y luego que el desarrollo este finalizado se deben fusionar en `develop`.

# NOMENCLATURA DE RAMAS
Para las ramas se utilizara la notacion `kebab case` y estan deben seguir un prefijo indicando el motivo por el cual se ha creado la nueva rama.

Prefijos:
- feature-name
- chore-name
- fix-name
- feat-name

# DESPLIEGUE
Para desplegar se debe crear una rama `release-version` a partir de `main`, luego fusiar `develop` en `release-version`, posteriormente se cambia la version del proyecto y se genera el `tag` para la version especifica. Luego de crear el `tag` se debe hacer un Pull Request desde `release-version` hacia `main`.

# INTEGRACION CONTINUA - DESPLIEGUE CONTINUO (CI/CD)
Se generaran workflows de github para controlar la integracion y despliegue automatizado. [Mas informacion](./../.github/workflows/blank.yml)



