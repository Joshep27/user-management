# User Management Api 

[![made-with-npm](https://img.shields.io/npm/v/npm.svg?logo=npm)](https://www.npmjs.com/) 
[![made-with-typescript](https://img.shields.io/npm/v/typescript.svg?logo=typescript)](https://www.typescriptlang.org/) 
[![made-with-express](https://img.shields.io/npm/v/express.svg?logo=express)](https://expressjs.com/)
[![made-with-mongodb](https://img.shields.io/npm/v/mongodb.svg?logo=mongodb)](https://www.mongodb.com/es)

Api desarrollada en Typescript con los frameworks Nodejs y Expressjs, que realiza consulta de documentos con una instancia de la base de datos noSQL MongoDb para poder validar si el usuario se ha registrado, iniciado sesión, cerrado sesión, mantiene una sesión; aparte del uso de paginación.


## ℹ️ Pre-requisitos

- [NodeJs](https://nodejs.org/es/download/)
- [ExpressJs](https://expressjs.com/)
- [MongoDb](https://www.mongodb.com/es)


## ⏯️ Ejecución de la App

1. Clonar el repositorio de Github. 

1. Instalar todas las dependencias necesarias. Cabe acotar que la con la ejecución del siguiente comando, se creará la carpeta. "node_modules":

    ```
    $ npm install
    ```

2. Crear un archivo ".env" tomando como ejemplo ".env.example" y añadir los valores de configuración de las variables de entorno.


3. Una vez instaladas las dependencias necesarias, se debe colocar el siguiente comando para ejecutar la aplicación:

    ```
    $ npm run start
    ```

## ⏯️ End-points

1. Sign-Up. [POST]
  - Se coloca en el "Body" del Request lo siguiente, sustituyendo "value" por lo deseado:
    ```
    {
        "email": "value",
        "password": "value"
    }
    ```
  - URL: http://localhost:3000/users/signup

2. Sign-In. [POST]
  - Se coloca en el "Body" del Request lo siguiente, sustituyendo "value" por lo deseado:
    ```
    {
        "email": "value",
        "password": "value"
    }
    ```
  - URL: http://localhost:3000/users/signin
  - Se debe guardar el token generado

3. Sign-out. [DELETE]
  - Se colocar en el header del Request lo siguiente, sustituyendo "token" por lo obtenido en Sign-In:
    ```
    x-access-token: token
    ```
  - URL: http://localhost:3000/users/logout

4.  Buscar al usuario logueado. [GET]
  - Se colocar en el header del Request lo siguiente, sustituyendo "token" por lo obtenido en Sign-In:
    ```
    x-access-token: token
    ```
  - URL: http://localhost:3000/users/me

5.  Paginación de todos los usuarios. [GET]
  - Se especificar en la URL los Query Parameters (limit, page), sustituyendo "value" por lo deseado:
    ```
    http://localhost:3000/users?limit=value&page=value
    ```
  - URL: http://localhost:3000/users




## Autor

- **Jose Flores - [Joshep27](https://github.com/Joshep27)**


## 🎁 Referencias y Librerías

- [dotenv](https://www.npmjs.com/package/dotenv)
- [expressjs](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [jsonwebtoken](https://jwt.io/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [typescript](https://www.typescriptlang.org/)
- [@types-express](https://www.npmjs.com/package/@types/express)
- [@types-cors](https://www.npmjs.com/package/@types/cors)
- [@types-jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken)
