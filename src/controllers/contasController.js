const Contas = require('../models/Contas');
const contasService = require('../services/contasServices');

const contasController = {
        create: async (req, res) => {
            try {
                const { id_cliente, saldo } = req.body;
    
                // Validação simples para garantir que campos obrigatórios foram enviados
                if (!id_cliente || !saldo) {
                    return res.status(400).json({
                        msg: "Os campos 'email' e 'nome' são obrigatórios."
                    });
                }
    
                // Criação do cliente
                const conta = await Contas.create({
                    id_cliente,
                    saldo
                });
    
                // Resposta de sucesso
                return res.status(201).json({
                    msg: "Cliente criado com sucesso.",
                    conta
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
            const conta = await contasService.update(req.params.id, req.body);
            if(!conta){
                return res.status(400).json({
                    msg:"Cliente não encontrado"
                })
            }
            return res.status(200).json({
                msg:"Cliente atualizado com sucesso!",
                conta
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao tentar criar Cliente"
            });
        }
    },
    getAll: async (req, res) =>{
        try{
            const conta = await contasService.getAll();
            return res.status(200).json({
                msg: 'Todos os contas!',
                conta
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
            }
        },
    getOne: async (req, res) => {
            try{
                const conta = await contasService.getById(req.params.id);
                if (!conta){
                    return res.status(400).json({
                        msg: 'conta nao encontrada'
                    });
                }
                return res.status(200).json({
                    msg:'conta encontrada',
                    conta
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no servidor'
                });
            }
        },
    delete: async (req,res) => {
            try {
                const conta = await contasService.delete(req.params.id);
                if(!conta) {
                    return res.status(400).json({
                        msg: 'conta nao encontada'
                    })
                }
                return res.status(200).json({
                    msg: 'conta delete com sucesso!',
                    conta
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no Servidor'
                });
            }
        } 
    }
    
module.exports = contasController;