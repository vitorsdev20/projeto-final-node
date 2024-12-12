const Contas = require("../models/Contas")

const contasService = {
    create: async (conta) => {
        try{
            return await Contas.create(conta);
        }catch(error) {
            throw new Error('Ocorreu um erro ao criar as Contas ')
        }
    },
    update: async (id, contaToUpdate) => {
        try{
            const conta = await Contas.findByPk(id);
            if(!conta) {
                return null;
            }
            await conta.update(contaToUpdate);
            await conta.save();
            return conta;

        } catch (error) {
            throw new Error('Ocorreu um erro ao atualaizar os Contas ')
        }
    },
    getById: async (id) =>{
        try{
            const conta = await Contas.findByPk(id);
            if (!conta) {
                return null;
            }
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar a Contas ')
        }
    },
    getAll: async () =>{
        try {
            return await Contas.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todas as Contas')
        }
    },

    delete : async (id) => {
        try{
            const  conta = await Contas.findByPk(id);
            if(!conta) {
                return null
            }
            await conta.destroy()
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Contas ')
        }
    }
}
module.exports = contasService;