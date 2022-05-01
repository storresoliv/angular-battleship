# INTRODUCCION
En este proyecto se intentara realizar el desafio del juego de mesa Battleship e implementarlo en angular. El siguiente documento define los pasos a seguir para poder implementar un proyecto de software.

# AMBITO
- Esta aplicacion se realizara para el desafio Battleship.
- El proposito del aplicacion es re-crear el clasico juego de mesa Battleship.
- La aplicacion sera utilizada por jugadores que tengan un navegador web.

# ALCANCE
- La aplicacion sera para navegadores web.
- La aplicacion sera mono-jugador.
- La aplicacion permitira jugar al juego de mesa Battleship.
- La aplicacion permitira ingresar la cantidad de turnos por cada juego.
- La aplicacion permitira seleccionar entre facil, medio o dificil.
- El tablero sera una cuadricula de 10x10.
- Los barcos seran colocados aleatoriamente en todo el tablero.

# RESTRICCIONES
- Se trabajara en un sistema operativo linux de 64bits.
- Se utilizara el runtime de javascript NodeJS v14.18.0.
- Se utilizara el gestor de paquetes NPM v6.14.15.
- Se utilizara el framework Angular v13.2.0.
- Se utilizara javascript y typescript como lenguajes de programacion.
- Se utilizara el IDE Visual Studio Code.
- Se utilizaran las apis localStorage y sessionStorage para almacenar los datos.
- Se encriptaran los datos en base64 antes de ser guardados.

# REQUERIMIENTOS
- RF1: deben haber 10 barcos ocultos.
- RF2: los barcos deben estar ubicados aleatoriamente.
- RF3: los barcos pueden estar ubicados verticalmente.
- RF3: los barcos pueden estar ubicados horizontalmente.
- RF4: los barcos no pueden superponerse entre ellos.
- RF5: el tablero debe ser una cuadricula de 10x10, donde las filas deben llamarse A-J y las columnas 1-10.
- RF6: es necesario tener turnos para poder jugar.
- RF7: el juego termina cuando se acaban los turnos.
- RF8: el juego termina cuando todas las naves estan hundidas.
- RF9: debe permitir seleccionar el modo de juego 'facil' con turnos infinitos.
- RF10: debe permitir seleccionar el modo de juego 'medio' con 100 turnos.
- RF11: debe permitir seleccionar el modo de juego 'dificil' con 50 turnos.
- RF12: debe permitir ingresar la cantidad de turnos a jugar.
- RF13: debe haber 1 barco con 4 espacios de largo.
- RF14: debe haber 2 barco con 3 espacios de largo.
- RF15: debe haber 3 barco con 2 espacios de largo.
- RF16: debe haber 4 barco con 1 espacio de largo.
- RF17: se debe manejar enrutamiento para diferentes paginas.
- RF18: se debe tener una pagina para la configuracion del juego.
- RF19: se debe tener una pagina para el tablero de juego. 
- RF20: se debe tener una pagina para la lista de juegos terminos.
- RF21: un tiro sera efectivo solo en las celdas disponibles.
- RF22: debe haber una representacion visual para cuando el tiro falle.
- RF22: debe haber una representacion visual para cuando el tiro aterrice.
- RF22: debe haber una representacion visual para cuando el tiro hunda un barco.
- RF23: al terminar un juego se debe mostrar un mensaje con "Intentar de nuevo".
- RF24: si el jugador hace click en "Intentar de nuevo" debe comenzar un nuevo juego.

# META
Generar un proyecto con calidad el cual permita jugar al juego de mesa Battleship.

# OBJECTIVOS
- Analisis del problema.
- - Analisis del desafio.
- - Recopilacion de requerimientos basicos.
- Investigacion del problema.
- - Investigacion sobre el juego de mesa Battleship.
- - Investigacion para generar el modelo solucion.
- Analisis de la investigacion.
- Gestion de ingenieria.
- - Diseño e implementacion de este documento.
- - Diseñar los modulos del modelo solucion.
- - Diseñar la interfaz grafica de usuario.
- - Diseñar un modelo entidad-relacion.
- - Generar documento de diseño.
- - Diseñar plan de pruebas.
- - Implementar plan de pruebas.
- Generar modelo solucion.
- Implementar la aplicacion.