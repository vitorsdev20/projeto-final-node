const Transacoes = require('../models/transacoes');
const transacoesService = require('../services/transacoesService');

const transacoesController = {
        create: async (req, res) => {
            try {
                const { ID_Conta, Tipo, Tipo_Transacao, Valor, Data_Transacao } = req.body;
    
                // Validação simples para garantir que campos obrigatórios foram enviados
            
    
                // Criação do cliente
                const transacao = await Transacoes.create({
                    ID_Conta, 
                    Tipo,
                    Tipo_Transacao, 
                    Valor, 
                    Data_Transacao
                });
    
                // Resposta de sucesso
                return res.status(201).json({
                    msg: "Cliente criado com sucesso.",
                    transacao
                });
            } catch (error) {
                // Log detalhado do erro para debug no servidor
                console.error("Erro ao criar transaçao:", error.message);
    
                // Retorno do erro para o cliente
                return res.status(500).json({
                    msg: "Erro ao tentar criar o transaçao.",
                    error: error.message, // Detalhamento opcional para depuração
                });
            }
        },
    
    
    update: async (req, res) => {
        try {
            const transacao = await transacoesService.update(req.params.id, req.body);
            if(!transacao){
                return res.status(400).json({
                    msg:"transaçao não encontrado"
                })
            }
            return res.status(200).json({
                msg:"transaçao atualizado com sucesso!",
                transacao
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao tentar criar transaçao"
            });
        }
    },
    getAll: async (req, res) =>{
        try{
            const transacao = await transacoesService.getAll();
            return res.status(200).json({
                msg: 'Todos os contas!',
                transacao
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
            }
        },
    getOne: async (req, res) => {
            try{
                const transacao = await transacoesService.getById(req.params.id);
                if (!transacao){
                    return res.status(400).json({
                        msg: 'conta nao encontrada'
                    });
                }
                return res.status(200).json({
                    msg:'conta encontrada',
                    transacao
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no servidor'
                });
            }
        },
    delete: async (req,res) => {
            try {
                const transacao = await transacoesService.delete(req.params.id);
                if(!transacao) {
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
    
module.exports = transacoesController;