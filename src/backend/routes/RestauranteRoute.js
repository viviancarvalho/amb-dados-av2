import express from 'express';
import RestauranteController from '../controller/RestauranteController.js';

const router = express.Router();

router.post('/', RestauranteController.criarRestaurante);
router.get('/', RestauranteController.listarTodosRestaurantes);
router.put('/:id', RestauranteController.atualizarRestaurante);
router.delete('/:id', RestauranteController.deletarRestaurante);

export default router;