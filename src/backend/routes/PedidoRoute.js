import express from 'express';
import PedidoController from '../controller/PedidoController.js';

const router = express.Router();

router.post('/', PedidoController.criarPedido);
router.get('/', PedidoController.listarTodosPedidos);
router.get('/cpf/:cpf', PedidoController.listarPedidosPorClienteCpf);
router.put('/:id/dataHora', PedidoController.atualizarPedidoDataHora);
router.put('/:id/status', PedidoController.atualizarPedidoStatus);
router.delete('/:id', PedidoController.deletarPedido);

export default router;