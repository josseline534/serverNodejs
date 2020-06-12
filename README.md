# Creacion del servidor con Nodejs

## comando npm init
* **llenar opciones:**
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
    router.get('/', (req, res){
        //codigo
    })

Primer parametro: /ruta 

Segundo párametro: función
* * *
## INSTALACION DE NODEMON
Sirve para no tener que estar levantando el servidor por cada cambio
**linea de comando: **
nodemon server
## Recibir informacion desde el cliente
#### Body
Instalar body parse.
Modulo de express que permite trabajar de manera sencilla con el body de la petición.

        npm install body-parser

**Dependencia de body**
    
    const body = require('body-parser')

**Uso**

    app.use(body)

    app.use(body.json())

Se debe colocar despues del punto el tipo de archivo a recibir

**Mostrar contenido**

    console.log(req.body)

**Enviar respuesta**

Convertir segun el tipo
*   json
    * res.send(`Mensajes ${JSON.stringify(req.body)}` )
* text
    * res.send(`Mensajes ${req.body}` )
#### Query
req.query

**Envio**

http://localhost:3000/message?name=josseline&age=24
* * *
## LEER CABECERAS

req.headers

**Crear cabeceras:** 
    res.header({
        "name-header" : "value"
    })
* * *
## TIPOS DE RESPUESTA CON ESTADO
res.status(#estado)
#### vacia
res.status(#estado).send()
#### objeto
res.status(#estado).send({error:'', body:'Creador correctamente'})
#### array
res.status(#estado).send([{error:'', body:'Creador correctamente'}])
* * *
## RESPUESTA COHERENTES
* Pasos
    * Crear modulo para respuesta 
        * Carpeta: network
        * Archivo: response.js
    * Exportar funciones de **response.js**
        * Codigo

        exports.nombre = (req, res, message, status) =>{
            res.status(status || 200).send({
                error:'', 
                body: message
            })
        }
    * Requerirlo en server.js

        const response = require('./network/response')
    * Llamar función

        response.success(req, res, 'Listar mensajes', 201)
* * *
## ARCHIVOS ESTÁTICOS
app.use('/app', express.static('public'))

Colocar los archivos estáticos en la carpeta public
