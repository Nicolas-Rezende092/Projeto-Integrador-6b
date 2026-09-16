const express = require('express');
const router = express.Router();

const controller = require('../Controllers/produto.controller');

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);

module.exports = router;
