import express from 'express';
import EntregadorController from '../controller/EntregadorController.js';

const router = express.Router();

router.post('/', EntregadorController.criarEntregador);
router.get('/', EntregadorController.listarTodosEntregadores);
router.get('/disp/:disp', EntregadorController.buscarEntregadorPorDisponibilidade);
router.get('/cpf/:cpf',EntregadorController.buscarEntregadorPorCpf);
router.get('/:id', EntregadorController.buscarEntregadorPorId);
router.put('/:id', EntregadorController.atualizarEntregador);
router.put('/:id/:disp', EntregadorController.atualizarDisponibilidade);
router.delete('/:id', EntregadorController.deletarEntregador);

export default router;