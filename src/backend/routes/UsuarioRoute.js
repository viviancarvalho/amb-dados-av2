import express from 'express';
import UsuarioController from '../controller/UsuarioController.js';

const router = express.Router();

router.post('/', UsuarioController.criarUsuario);
router.post('/login', UsuarioController.buscarUsuarioPorLoginSenha);
router.get('/', UsuarioController.listarTodosUsuarios);
router.put('/', UsuarioController.atualizarUsuario);
router.delete('/:id', UsuarioController.deletarUsuario);

export default router;
