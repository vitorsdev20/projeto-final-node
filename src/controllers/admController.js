const admService = require('../services/admServices');

const adminController = {
        create: async (req, res) => {
            try {
                const { nome, email ,idade ,senha } = req.body;
    
                // Validação simples para garantir que campos obrigatórios foram enviados
                if (!nome || !email || !idade || !senha ) {
                    return res.status(400).json({
                        msg: "Os campos 'email' e 'nome' são obrigatórios."
                    });
                }
    
                // Criação do cliente
                const admin = await admService.create({
                    nome,
                    email,
                    idade,
                    senha
                });
    
                // Resposta de sucesso
                return res.status(201).json({
                    msg: "Admin criado com sucesso.",
                    admin
                });
            } catch (error) {
                // Log detalhado do erro para debug no servidor
                console.error("Erro ao criar admin:", error.message);
    
                // Retorno do erro para o cliente
                return res.status(500).json({
                    msg: "Erro ao tentar criar o admin.",
                    error: error.message, // Detalhamento opcional para depuração
                });
            }
        },
    
    
    update: async (req, res) => {
        try {
            const admin = await admService.update(req.params.id, req.body);
            if(!admin){
                return res.status(400).json({
                    msg:"admin não encontrado"
                })
            }
            return res.status(200).json({
                msg:"admin atualizado com sucesso!",
                admin
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao tentar criar admin"
            });
        }
    },
    getAll: async (req, res) =>{
        try{
            const admins = await admService.getAll();
            return res.status(200).json({
                msg: 'Todos os admin!',
                admins
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
            }
        },
    getOne: async (req, res) => {
            try{
                const admin = await admService.getById(req.params.id);
                if (!admin){
                    return res.status(400).json({
                        msg: 'admin nao encontrado'
                    });
                }
                return res.status(200).json({
                    msg:'admin encontrado',
                    admin
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no servidor'
                });
            }
        },
    delete: async (req,res) => {
            try {
                const admin = await admService.delete(req.params.id);
                if(!admin) {
                    return res.status(400).json({
                        msg: 'admin nao encontado'
                    })
                }
                return res.status(200).json({
                    msg: 'admin delete com sucesso!',
                    admin
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no Servidor'
                });
            }
        } 
    }
    
module.exports = adminController;