# PLAN DE DESPLIEGUE
Este documeto especifica los pasos a seguir para un correcto despliegue de la aplicacion.

# DESPLIEGUE
Para desplegar se debe crear una rama `release-version` a partir de `main`, luego fusiar `develop` en `release-version`, posteriormente se cambia la version del proyecto y se genera el `tag` para la version especifica. Luego de crear el `tag` se debe hacer un Pull Request desde `release-version` hacia `main`.

# INTEGRACION CONTINUA - DESPLIEGUE CONTINUO (CI/CD)
Se generaran workflows de github para controlar la integracion y despliegue automatizado. [Mas informacion](./../.github/workflows/blank.yml)



