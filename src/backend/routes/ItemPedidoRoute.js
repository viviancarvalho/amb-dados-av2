import express from 'express';
import ItemPedidoController from '../controller/ItemPedidoController.js';

const router = express.Router();

router.post('/', ItemPedidoController.criarItemPedido);
router.get('/:id/pedido', ItemPedidoController.listarItensDePedido);
router.put('/:id', ItemPedidoController.atualizarItemPedido);
router.put('/:id', ItemPedidoController.atualizarQuantidade);
router.delete('/:id', ItemPedidoController.deletarItemDePedido);

export default router;