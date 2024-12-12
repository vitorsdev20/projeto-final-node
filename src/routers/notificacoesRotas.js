const { Router } = require("express")

const notificacaoController = require('../controllers/notificacaoController')

const router = Router();

const { validateNotificacoes, validateNotificacoesId} = require("../middlewares/validateNotificacoes")

router.post('/',validateNotificacoes, notificacaoController.create);

router.put('/:id', validateNotificacoesId, validateNotificacoes,  notificacaoController.update);

router.delete('/:id', validateNotificacoesId ,notificacaoController.delete);

router.get('/:id', notificacaoController.getOne);

router.get('/', notificacaoController.getAll);

module.exports = router