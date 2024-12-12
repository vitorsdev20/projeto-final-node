const { Router } = require("express")

const contasController = require('../controllers/contasController')

const router = Router();

const { validateContas, validateContasId } = require("../middlewares/validateContas")

router.post('/',validateContas, contasController.create);

router.put('/:id', validateContas,  contasController.update);

router.delete('/:id', contasController.delete);

router.get('/:id',contasController.getOne);

router.get('/', contasController.getAll);

module.exports = router