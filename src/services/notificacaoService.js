const Notificacao = require("../models/notificacao")

const notificacaoService = {
    create: async (conta) => {
        try{
            return await Notificacao.create(notificacao);
        }catch(error) {
            throw new Error('Ocorreu um erro ao criar as Notificação ')
        }
    },
    update: async (id, notificacaoToUpdate) => {
        try{
            const notificacao = await Notificacao.findByPk(id);
            if(!notificacao) {
                return null;
            }
            await notificacao.update(notificacaoToUpdate);
            await notificacao.save();
            return notificacao;

        } catch (error) {
            throw new Error('Ocorreu um erro ao atualaizar as Notificação  ')
        }
    },
    getById: async (id) =>{
        try{
            const notificacao = await Notificacao.findByPk(id);
            if (!notificacao) {
                return null;
            }
            return notificacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar as notificação ')
        }
    },
    getAll: async () =>{
        try {
            return await Notificacao.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todas as notificação')
        }
    },

    delete : async (id) => {
        try{
            const  notificacao = await Notificacao.findByPk(id);
            if(!notificacao) {
                return null
            }
            await notificacao.destroy()
            return notificacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Notificaçõo ')
        }
    }
}
module.exports = notificacaoService;