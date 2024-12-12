const Clientes = require('../models/clientes');
const clienteService = require('../services/Clientesservice');

const clientesController = {
        create: async (req, res) => {
            try {
                const { nome, email } = req.body;
    
                // Validação simples para garantir que campos obrigatórios foram enviados
                if (! nome || !email) {
                    return res.status(400).json({
                        msg: "Os campos 'email' e 'nome' são obrigatórios."
                    });
                }
    
                // Criação do cliente
                const cliente = await Clientes.create({
                    nome,
                    email
                });
    
                // Resposta de sucesso
                return res.status(201).json({
                    msg: "Cliente criado com sucesso.",
                    cliente
                });
            } catch (error) {
                // Log detalhado do erro para debug no servidor
                console.error("Erro ao criar cliente:", error.message);
    
                // Retorno do erro para o cliente
                return res.status(500).json({
                    msg: "Erro ao tentar criar o cliente.",
                    error: error.message, // Detalhamento opcional para depuração
                });
            }
        },
    
    
    update: async (req, res) => {
        try {
            const cliente = await clienteService.update(req.params.id, req.body);
            if(!cliente){
                return res.status(400).json({
                    msg:"Cliente não encontrado"
                })
            }
            return res.status(200).json({
                msg:"Cliente atualizado com sucesso!",
                cliente
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao tentar criar Cliente"
            });
        }
    },
    getAll: async (req, res) =>{
        try{
            const clientes = await clienteService.getAll();
            return res.status(200).json({
                msg: 'Todos os Clientes!',
                clientes
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
            }
        },
    getOne: async (req, res) => {
            try{
                const cliente = await clienteService.getById(req.params.id);
                if (!cliente){
                    return res.status(400).json({
                        msg: 'Cliente nao encontrado'
                    });
                }
                return res.status(200).json({
                    msg:'Cliente encontrado',
                    cliente
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no servidor'
                });
            }
        },
    delete: async (req,res) => {
            try {
                const cliente = await clienteService.delete(req.params.id);
                if(!cliente) {
                    return res.status(400).json({
                        msg: 'Cliente nao encontado'
                    })
                }
                return res.status(200).json({
                    msg: 'Cliente delete com sucesso!',
                    conta
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no Servidor'
                });
            }
        } 
    }
    
module.exports = clientesController;