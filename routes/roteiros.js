const express = require('express');
const router = express.Router();

const controller = require("../controllers/RoteirosController")

//Rota lista todos os roteiros cadastrados no banco de dados
router.get('', controller.getAll)
//Rota inclui novos roteiros com a estrutura do Schema
router.post ('', controller.add)
//Rota mostra dados conforme o id
router.get('/:id', controller.getById)
//Rota atualiza dados conforme o id
router.patch('/:id', controller.update)
//Rota deteta dados conforme o id
router.delete('/:id', controller.remove)


module.exports = router
