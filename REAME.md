## API TODOs
_Esta es una API  que se conecta a jsonplaceholder ```https://jsonplaceholder.typicode.com/ ```_ 
hace uso de la entidad ``` Todos ``` (tareas) podemos Crear, Editar, Eliminar, Listar uno, Listar todos

## Instalacion
Ejecute los siguientes comandos 

```
$ git clone https://github.com/JnGzn/API-TODOs.git
$ npm i
```

## Despliegue
Ejecute el siguiente comando
```
$ npm start
```

*Se ejecuta el servidor en ```http://localhost:3000/ ```

## EndPoints
* GET  ```http://localhost:3000/todos ``` obtiene listado todos
* GET  ```http://localhost:3000/todos?id=1 ``` obtiene un todo (se debe especificar el id a obtener)
* POST  ```http://localhost:3000/todo ``` guarda todo (se debe enviar en el cuerpo de la peticion)
* PUT  ```http://localhost:3000/todo ``` modifica todo (se debe enviar en el cuerpo de la peticion)
* Delete  ```http://localhost:3000/todo ``` elimina todo (se debe enviar en el cuerpo de la peticion)
## Pruebas unitarias

Ejecute el siguiente comando para iniciar las prubas con [Jest](https://jestjs.io/)
```
$ npm run test
```


