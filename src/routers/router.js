const { Router } = require ('express');
const clienteRotas = require("./clienteRotas")
const adminRotas = require("./adminRotas")
const contasRotas = require("./contasRotas")
const transacoesRotas = require("./transacoesRotas")
const notificacao = require("./notificacoesRotas")

const router = Router();

router.use('/clientes', clienteRotas);

router.use('/admin',adminRotas)

router.use('/conta',contasRotas)

router.use('/transacoes',transacoesRotas)

router.use('/notificacao',notificacao)

module.exports = router;