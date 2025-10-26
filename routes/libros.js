/* En routes definimos las URL´S y las funciones que se llaman desde controller. */

/* Creo un mini servidor para los recursos */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/librosController');


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
