const Admin = require("../models/administradores")

const admService = {
    create: async (adm) => {
        try{
            return await Admin.create(adm);
        }catch(error) {
            throw new Error('Ocorreu um erro ao criarr adm')
        }
    },
    update: async (id, admToUpdate) => {
        try{
            const adm = await Admin.findByPk(id);
            if(!adm) {
                return null;
            }
            await adm.update(admToUpdate);
            await adm.save();
            return adm;

        } catch (error) {
            throw new Error('Ocorreu um erro ao atualaizar o adm ')
        }
    },
    getById: async (id) =>{
        try{
            const adm = await Admin.findByPk(id);
            if (!adm) {
                return null;
            }
            return adm;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar o adm ')
        }
    },
    getAll: async () =>{
        try {
            return await Admin.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos Adm')
        }
    },

    delete : async (id) => {
        try{
            const  adm = await Admin.findByPk(id);
            if(!adm) {
                return null
            }
            await adm.destroy()
            return adm;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o Adm ')
        }
    }
}
module.exports = admService;