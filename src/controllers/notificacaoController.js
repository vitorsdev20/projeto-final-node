const notificacaoService = require('../services/notificacaoService');
const Notificacao = require('../models/notificacao');

const notificacaoController = {
        create: async (req, res) => {
            try {
                const { id_cliente, mensagem ,data_notificacao  } = req.body;
                // Validação simples para garantir que campos obrigatórios foram enviados
                if (!id_cliente || !mensagem || !data_notificacao ) {
                    return res.status(400).json({
                        msg: "Os campos 'email' e 'nome' são obrigatórios."
                    });
                }
    
                // Criação do cliente
                const notificacao = await Notificacao.create({
                    id_cliente,
                    mensagem,
                    data_notificacao,
                });
    
                // Resposta de sucesso
                return res.status(201).json({
                    msg: "Admin criado com sucesso.",
                    notificacao
                });
            } catch (error) {
                // Log detalhado do erro para debug no servidor
                console.error("Erro ao criar notificacao:", error.message);
    
                // Retorno do erro para o cliente
                return res.status(500).json({
                    msg: "Erro ao tentar criar o notificacao.",
                    error: error.message, // Detalhamento opcional para depuração
                });
            }
        },
    
    
    update: async (req, res) => {
        try {
            const notificacao = await notificacaoService.update(req.params.id, req.body);
            if(!notificacao){
                return res.status(400).json({
                    msg:"notificacao não encontrado"
                })
            }
            return res.status(200).json({
                msg:"notificacao atualizado com sucesso!",
                notificacao
            })
        } catch (error) {
            return res.status(500).json({
                msg:"Erro ao tentar criar notificacao"
            });
        }
    },
    getAll: async (req, res) =>{
        try{
            const notificacaoes = await notificacaoService.getAll();
            return res.status(200).json({
                msg: 'Todos os admin!',
                notificacaoes
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
            }
        },
    getOne: async (req, res) => {
            try{
                const notificacao = await notificacaoService.getById(req.params.id);
                if (!notificacao){
                    return res.status(400).json({
                        msg: 'admin nao encontrado'
                    });
                }
                return res.status(200).json({
                    msg:'admin encontrado',
                    notificacao
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no servidor'
                });
            }
        },
    delete: async (req,res) => {
            try {
                const notificacao = await notificacaoService.delete(req.params.id);
                if(!notificacao) {
                    return res.status(400).json({
                        msg: 'notificacao nao encontado'
                    })
                }
                return res.status(200).json({
                    msg: 'notificacao delete com sucesso!',
                    notificacao
                });
            } catch (error) {
                return res.status(500).json({
                    msg: 'Ocorreu um erro no Servidor'
                });
            }
        } 
    }
    
module.exports = notificacaoController;