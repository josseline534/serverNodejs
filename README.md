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

    ```javascript
    const router = express.Router()
    ```

Se utiliza para peticiones, metodos, cabeceras

**Usar ruta**

    ```javascript
    app.use(router)
    ```

**Accion por cada metodo**
```javascript
    router.get('/', (req, res){
        //codigo
    })
```

Primer parametro: /ruta 

Segundo párametro: función
* * *
## INSTALACION DE NODEMON
Sirve para no tener que estar levantando el servidor por cada cambio

**linea de comando:**
nodemon server
## Recibir informacion desde el cliente
#### Body
Instalar body parse.
Modulo de express que permite trabajar de manera sencilla con el body de la petición.

        npm install body-parser

**Dependencia de body**
    ```javascript
    const body = require('body-parser')
    ```

**Uso**
```javascript
    app.use(body)

    app.use(body.json())
```

Se debe colocar despues del punto el tipo de archivo a recibir

**Mostrar contenido**
```javascript
    console.log(req.body)
```

**Enviar respuesta**

Convertir segun el tipo
*   json
    * ```javascript
    res.send(`Mensajes ${JSON.stringify(req.body)}` )
    ```
* text
    * ```javascript
    res.send(`Mensajes ${req.body}` )
    ```
#### Query
```javascript
    req.query
```

**Envio**

http://localhost:3000/message?name=josseline&age=24
* * *
## LEER CABECERAS

req.headers

**Crear cabeceras:** 
```javascript
    res.header({
        "name-header" : "value"
    })
```
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
```javascript
        exports.nombre = (req, res, message, status) =>{
            res.status(status || 200).send({
                error:'', 
                body: message
            })
        }
```
    * Requerirlo en server.js

        const response = require('./network/response')
    * Llamar función

        response.success(req, res, 'Listar mensajes', 201)
* * *
## ARCHIVOS ESTÁTICOS
app.use('/app', express.static('public'))

Colocar los archivos estáticos en la carpeta public
* * *
## ERRORES
Enviar detalles de los errores y hacer console.log

    console.log(`[RESPONSE] ${details}`)
* * *
## RUTAS CONTROLADORES BASES DE DATOS
### RUTAS Y CAPAS
* Crear la siguiente ruta
    * components
        * messages
            * network.js
    * network
        * routes.js

**network.js** 

Requerir express, crear ruta express, iimportar response, llevar los metodos y exportar la ruta

**routes.js** 

Requerir express, 
requerir message de network.js (funcion) para que se pueda realizar o ejecutar la funcin segun la ruta, 
crear funcion y exportarla.
```javascript
        const routes = server =>{
            server.use('/ruta', (funcion))
        }
```

**server.js**

Requerir router de routes.js y enviarle por parametro app

* * *
## CONTROLADORES
* Ruta
    * components
        * message
            * controller.js
**controller.js** 
Archivo que se encarga de definir funciones para realizar las actividades del negocio.

Crear funcion
```javascript
    const addMessage = (user, message)=>{
        return new Promise((resolve, reject)=>{
            const fullMessage = {
                user ,
                message ,
                date : new Date()
            }
            console.log(fullMessage)
            if(!user || !message){
                console.log(`[CONTROLLER: ERROR] datos incompletos`)
                reject('Los datos enviados son incorrectos')
            }else{
                resolve(fullMessage)
            }
        })
    }
```

Utilizar promesas new Promise((resolve, reject)=>{})
* resolve (verdadero)
* reject (false)

Crear objeto segun la necesidad
```javascript
     const fullMessage = {
                user ,
                message ,
                date : new Date()
            }
```

new Date() para la fecha

Condiciones
```javascript
    if(!user || !message){
        console.log(`[CONTROLLER: ERROR] datos incompletos`)
        reject('Los datos enviados son incorrectos')
    }else{
        resolve(fullMessage)
    }
``` 
reject('Los datos enviados son incorrectos')
envia mensaje por falso

resolve(fullMessage)
envia mensaje por verdadero

**network.js**

Requerir controller.js

Metodo post
```javascript
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => {
            response.success(req, res, `Mensajes ${JSON.stringify(fullMessage)}`, 201)
        })
        .catch(e => {
            response.error(req, res, `Información invalida`, 400, 'Error en el controlador')
        })
```
controller.addMessage(req.body.user, req.body.message)
envia usuario y mensaje

Ejecutar promesa

* Si cumple y se resuelve

    .then(fullMessage => {
        response.success(req, res, `Mensajes ${JSON.stringify(fullMessage)}`, 201)
    })
* Si ocurre un error

    .catch(e => {
        response.error(req, res, `Información invalida`, 400, 'Error en el controlador')
    })
* * *
## ALMACENANDO INFORMACION
* carpeta message
    * store.js
Lógica de almacenamiento de información.

Crear un moc (Falsear una BD o servicio para validar)

Crear un arreglo 

    let listMessage = []

Crear funciones

Guardar los mensajes en el arreglo

    const addMessage = message =>{
        listMessage.push(message)
    }

Devolver el arreglo con los mensajes

    const getMessage = ()=>{
         return listMessage
    }

Exportar los modulos

    module.exports={
        add : addMessage,
        list : getMessage
    }

**controller.js**

Añadir los mensajes utilizando el metodo exportado add (addMessage)
    
    store.add(fullMessage)

Crear funcion para obtener los mensajes utilizando promesa donde envie o retorne la lista de mensajes
```javascript
    const getMessage = () =>{
        return new Promise ((resolve, reject) => {
            resolve(store.list())
        })
    }
```

Y exportar la funcion para utilizarla en el archivo network

**network.js**

Método **GET**

Ejecuta la promesa
```javascript
    controller.getMessage()
    .then(listMessage =>{
        response.success(req, res, `Mensajes ${JSON.stringify(listMessage)}`, 201)
    })
    .catch(e => {
        response.error(req, res, `Unexpected error`, 400, e)
    })
```
* * * 
## CREAR Y CONFIGURAR BD MONGODB
* Pasos
    * Ingresar a mongodb.com
    * Iniciar sesion
    * Realizar configuracion,
    seleccionar gratis
    * Crear un cluster
    * Collections
        * Crear Bd
            * Crear Collections
    * Conectar
        * Crear Usuario y Contraseña
        * Ingresar dirección ip propia
    * Metodo
        * 2do Aplication
            * Nodejs
            * Copiar cadena de conexión en el store.js
            * Modificar el password y el nombre de la bd
* * *
### UTILIZAR MONGOOSE
model.js

Importar librería
```javascript
    const mongoose = require('mongoose')
```
Requerir el esquema para poder defir las claves que va a contener
```javascript
    const Schema = mongoose.Schema
```
Realizar una instancia de schema para definir la estructura de la colleccion
```javascript
    const mySchema = new Schema ({
    user:String,
    message:{
        type:String,
        required:true
    },
    date: Date
})
```
Crear funcion para crear el modelo ('collection', schema) y exportarla
```javascript
    const model = mongoose.model('message', mySchema)
```
store.js

Importa librería de mongoose

Realizar coneccion usando promesa con el objeto global
```javascript
    db.connect(
        'cadena de conxion',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
```
useNewUrlParser: true,
useUnifiedTopology: true.
Sirven para no tener problemas con actualizaciones
* * *
## ALMACENAR E INSERTAR DATOS
store.js

Requerir model.js 

funcion addMessage

Crear una instancia de model y enviar el mensaje, usando .save() para guardarlo en la bd
mongo
```javascript
    const myMessage = new model (message)
    myMessage.save()
```
* * *
## LEER U OBTENER DATOS
store.js

Se hace uso de asincronia para esta petición (async y await)
```javascript
    const message = await model.find()
    return message
```
Refrescar la bd para ver los datos guardados
* * *
## ACTUALIZAR DATOS
store.js

crear funcion para actualizar y exportarla, debe ser asincrona  y filtrar por el id
```javascript
    const updateMessage = async (id, message) => {
        const foundMessage = await model.findOne({
            _id:id
        })
        foundMessage.message= message
        const newMessage = await foundMessage.save()
        return newMessage
    }
```
controller.js
Crear funcion de actualizar y usando promesas y asincronia para enviar los datos al store.
```javascript
    const updateMessage = (id, message) => {
        console.log(`SMS: ${message}`)
        return new Promise (async (resolve, reject) => {
            if (!id || !message)
                reject ('Datos incompletos')
            else{
                const result = await store.update(id, message)
                resolve(result)
            }
        })
    }
```
network.js

Crear una nueva ruta para la actualizacion,
enviar el id que se va a actualizar con el metodo path,
para enviar un parametro en la ruta colocar '/:id'.

Utilizar update del controller y pasarle los parametros necesarios y usar las promesas

* * *
## CONSULTAR DATOS
network.js

Metodo get
Crear una constante que guarde la informacion del filtro.
Y enviarlo al controller

controller.js

Recibir y enviar la informacion del filtro

store.js

Crear una variable para que guarde el nombre del usuario como objeto,
verificar si el filtro contiene iformacion o esta vacio, en caso de contener se envia 
el filtro en la variable.
```javascript
    if(filterUser != null){
            filter={
                user:filterUser
            }
        }
```
Y enviar la variable en el find del model
```javascript
    const message = await model.find(filter)
```

