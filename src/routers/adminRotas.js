const { Router } = require("express")

const adminController = require('../controllers/admController')

const router = Router();

const { validateAdmId, validateAdm } = require("../middlewares/validateAdm")

router.post('/',validateAdm, adminController.create);

router.put('/:id', validateAdm, adminController.update);

router.delete('/:id', validateAdmId,adminController.delete);

router.get('/:id', adminController.getOne);

router.get('/', adminController.getAll);

module.exports = router