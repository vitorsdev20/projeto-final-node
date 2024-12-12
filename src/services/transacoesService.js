const Transacoes = require("../models/transacoes")

const transacoesService = {
    create: async (transacao) => {
        try{
            return await Transacoes.create(transacao);
        }catch(error) {
            throw new Error('Ocorreu um erro ao criar as Transacoes ')
        }
    },
    update: async (id, transacoesToUpdate) => {
        try{
            const transacao = await Transacoes.findByPk(id);
            if(!transacao) {
                return null;
            }
            await transacao.update(transacoesToUpdate);
            await transacao.save();
            return transacao;

        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar as Transacoes ')
        }
    },
    getById: async (id) =>{
        try{
            const transacao = await Transacoes.findByPk(id);
            if (!transacao) {
                return null;
            }
            return transacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar a Transacoes ')
        }
    },
    getAll: async () =>{
        try {
            return await Transacoes.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todas as Transacoes')
        }
    },

    delete : async (id) => {
        try{
            const transacao = await Transacoes.findByPk(id);
            if(!transacao) {
                return null
            }
            await transacao.destroy()
            return transacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Transacoes ')
        }
    }
}
module.exports = transacoesService;