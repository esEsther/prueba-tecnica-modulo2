### Fallo de seguridad:
- el jwt depende de una clave, esta clave no puede estar en el index ni en ningún otro sito visible para el navegador. hay que crear un archivo .env y referenciarlo. este archivo tiene que ser  nombrado en otro que se llama gitignore, para que no aparezca en el repositorio
- lo mismo con el puerto

- para poder utilizar esta variable hay que instalar la dependencia 'dotenv' 
- tenenemos que especificar qué variables están en el archivo .env (sin especificar) en el archivo .env.template para que otros que vayan a utilizar la aplicación las sepan y las declaren

- el token no expira

### División de responsabilidades.
- solo hay un archivo index.js con todas las responsabilidades. 
- creamos una carpeta 'routes' para los archivos de rutas. 
- creamos otra carpeta controllers para los controladores
- carpeta helpers para el archivo jwt que genera un token

### Fallos en el login:
- solo da una respuesta ok: true.  tiene que dar un estado y devolver el token con la información del usuario
- funciona igual si no intruduces usuario
- no hay un método de verificación de que el usuario exista, ni de que haya una contraseña ni coincida

