
const validateTransacao = (req, res, next) => {
    const {ID_Conta, Tipo, Tipo_Transacao, Valor, Data_Transacao } = req.body;
    if (!ID_Conta ||typeof ID_Conta !== 'number') {
        return res.status(400).json({ msg: 'Campos invalidos id '});
    }

    if (!Tipo ||typeof Tipo !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos  tipo'});
    }

    if (!Tipo_Transacao ||typeof Tipo_Transacao !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos  transacao '});
    }

    if (!Valor ||typeof Valor !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos valor '});
    }
    if (!Data_Transacao ||typeof Data_Transacao !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos valor '});
    }


    next();

}

const validateTransacaoId = (req,res, next) => {
const { id } = req.params;

if (!id || typeof id !=='number') {
    return res.status(400).json({ msg: 'Parametro ID invalido' });
}

next();
}

module.exports = {validateTransacao, validateTransacaoId}; 