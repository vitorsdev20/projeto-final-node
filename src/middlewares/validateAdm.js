
const validateAdm = (req, res, next) => {
    const {nome, email ,idade ,senha } = req.body;
    if (!nome ||typeof nome !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos '});
    }

    if (!email ||typeof email !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos '});
    }

    if (!(email.includes("@") && email.includes("."))) {
        return res.status(400).json({ msg: 'Campo email invalido'});
    }

    if (!idade ||typeof idade !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos '});
    }

    if (!senha ||typeof senha !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos '});
    }

    next();

}

const validateAdmId = (req,res, next) => {
const { id } = req.params;

if (!id || typeof id !=='string') {
    return res.status(400).json({ msg: 'Parametro ID invalido' });
}

next();
}

module.exports = {validateAdm, validateAdmId}; 