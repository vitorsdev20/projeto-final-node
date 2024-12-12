
const validateContas = (req, res, next) => {
    const {id_cliente, saldo } = req.body;
    if (!id_cliente ||typeof id_cliente !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos '});
    }

    if (!saldo ||typeof saldo !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos '});
    }

    next();

}

const validateContasId = (req,res, next) => {
const { id } = req.params;

if (!id || typeof id !=='string') {
    return res.status(400).json({ msg: 'Parametro ID invalido' });
}

next();
}

module.exports = {validateContas, validateContasId}; 