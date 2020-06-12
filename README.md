# Creacion del servidor con Nodejs

## comando npm init

**llenar:**

    * package name: (servernodejs) 
    * version: (1.0.0)
    * description: chat con un servidor node js
    * entry point: (index.js) server.js
    * test command: 
    * git repository: (https://github.com/josseline534/serverNodejs.git) 
    * keywords: chat, server, nodejs
    * author: josseline sanchez
    * license: (ISC) 

**aceptar**

creacion del archivo json

* * *
## SERVER.JS

1. Instalar libreria express.
2. Realizar el require.
3. res enviar Hola, listen en el puerto 3000

* * *
## PETICIONES

**Utilizar ruta express**

    ```const router = express.Router()```

Se utiliza para peticiones, metodos, cabeceras

**Usar ruta**

    ```app.use(router)```

**Accion por cada metodo**
```
    router.get('/', (req, res){
        //codigo
    })
    ```

Primer parametro: /ruta 

Segundo párametro: función
* * *
## INSTALACION DE NODEMON
Sirve para no tener que estar levantando el servidor por cada cambio
**linea de comando: **
nodemon server

