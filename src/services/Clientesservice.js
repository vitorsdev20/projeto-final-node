const Clientes = require("../models/clientes")

const clienteService = {
    create: async (cliente) => {
        try{
            return await Clientes.create(cliente);
        }catch(error) {
            throw new Error('Ocorreu um erro ao criar o cliente ')
        }
    },
    update: async (id, clienteToUpdate) => {
        try{
            const cliente = await Clientes.findByPk(id);
            if(!cliente) {
                return null;
            }
            await cliente.update(clienteToUpdate);
            await cliente.save();
            return cliente;

        } catch (error) {
            throw new Error('Ocorreu um erro ao atualaizar os clientes ')
        }
    },
    getById: async (id) =>{
        try{
            const cliente = await Clientes.findByPk(id);
            if (!cliente) {
                return null;
            }
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar o cliente ')
        }
    },
    getAll: async () =>{
        try {
            return await Clientes.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos cliente')
        }
    },

    delete : async (id) => {
        try{
            const  cliente = await Clientes.findByPk(id);
            if(!cliente) {
                return null
            }
            await cliente.destroy()
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o cliente ')
        }
    }
}
module.exports = clienteService;