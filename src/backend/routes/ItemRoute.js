import express from 'express';
import ItemController from '../controller/ItemController.js';

const router = express.Router();

router.post('/', ItemController.criarItem);
router.get('/', ItemController.listarTodosItens);
router.get('/:id/rest', ItemController.listarItensPorRestaurante);
router.put('/:id', ItemController.atualizarItem);
router.delete('/:id', ItemController.deletarItem);

export default router;