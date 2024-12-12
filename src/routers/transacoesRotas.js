const { Router } = require("express")

const transacoesController = require('../controllers/transacoesController')

const router = Router();

const { validateTransacaoId, validateTransacao } = require("../middlewares/validateTransacao")

router.post('/',validateTransacao, transacoesController.create);

router.put('/:id', validateTransacao,  transacoesController.update);

router.delete('/:id', transacoesController.delete);

router.get('/:id', transacoesController.getOne);

router.get('/', transacoesController.getAll);

module.exports = router