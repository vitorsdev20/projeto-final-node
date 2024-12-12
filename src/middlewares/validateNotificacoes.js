
const validateNotificacoes = (req, res, next) => {
    const {  mensagem, data_notificacao  } = req.body;

    if (!mensagem ||typeof mensagem !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos mensagem '});
    }

    if (!data_notificacao ||typeof data_notificacao !== 'string') {
        return res.status(400).json({ msg: 'Campos invalidos mensagem '});
    }
    next();

}

const  validateNotificacoesId= (req,res, next) => {
const { id_cliente } = req.params;

if (!id_cliente || typeof id_cliente !=='number') {
    return res.status(400).json({ msg: 'Parametro ID invalido' });
}

next();
}

module.exports = {validateNotificacoesId,validateNotificacoes}; 