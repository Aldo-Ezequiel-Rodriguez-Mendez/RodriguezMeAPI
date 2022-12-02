const express = require('express');
const router  = express.Router();

const controlVideojuego = require('../controllers/control_videojuego'); 

/**
 * @swagger
 * /videojuego:
 *  get:
 *   description: Información de los objetos en la tabla.
 *   responses:
 *    200:
 *     description: Devuelve todos los videojuegos en la tabla.
*/
router.get('/videojuego', controlVideojuego.obtenerTodosVideojuegos);

/**
 * @swagger
 * /videojuego:
 *  post:
 *   description: Inserción de un objeto en la tabla.
 *   responses:
 *    200:
 *     description: Inserta un videojuego.
*/
router.post('/videojuego', controlVideojuego.subirImg, controlVideojuego.nuevoVideojuego);

/**
 * @swagger
 * /videojuego:
 *  delete:
 *   description: Eliminacion de los objetos en la tabla.
 *   responses:
 *    200:
 *     description: Elimina todos los videojuegos en la tabla.
*/
router.delete('/videojuego', controlVideojuego.borrarTodosVideojuegos);

/**
 * @swagger
 * /videojuego/{id}:
 *  get:
 *   parameters:
 *    - in: path
 *      name: id
 *      type: integer
 *      required: true
 *      description: id del videojuego a mostrar.
 *   description: Información de un objeto en la tabla.
 *   responses:
 *    200:
 *     description: Devuelve un videojuego en especifico de la tabla mediante su ID.
*/
router.get('/videojuego/:id', controlVideojuego.obtenerUnVideojuego);

/**
 * @swagger
 * /videojuego/{id}:
 *  post:
 *   parameters:
 *    - in: path
 *      name: id
 *      type: integer
 *      required: true
 *      description: id del videojuego a actualizar.
 *   description: Actualización de los objetos en la tabla.
 *   responses:
 *    200:
 *     description: Actualiza los comentarios de un videojuego.
*/
router.post('/videojuego/:id', controlVideojuego.nuevoComentario);

/**
 * @swagger
 * /videojuego/{id}:
 *  delete:
 *   parameters:
 *    - in: path
 *      name: id
 *      type: integer
 *      required: true
 *      description: id del videojuego a eliminar.
 *   description: Eliminacion de un objeto en la tabla.
 *   responses:
 *    200:
 *     description: Elimina un videojuego en especifico mediante su ID.
*/
router.delete('/videojuego/:id', controlVideojuego.borrarUnVideojuego);

module.exports = router;    // exportamos las rutas para usarlas en el servidor.js