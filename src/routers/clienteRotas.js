const { Router } = require("express")

const clientesController = require('../controllers/clienteController')

const router = Router();

const { validateClientes, validateClienteId } = require("../middlewares/validateClientes")

router.post('/',validateClientes, clientesController.create);

router.put('/:id', validateClientes,  clientesController.update);

router.delete('/:id', clientesController.delete);

router.get('/:id',clientesController.getOne);

router.get('/', clientesController.getAll);

module.exports = router