import express from 'express';
import ClienteController from '../controller/ClienteController.js';

const router = express.Router();

//os : indicam uma variavel que vai ser guardada e pode ser usada
// nao pode so /:cpf pq a routa confunde com um id e nao sabe oq eh id ou cpf
//no criar cliente nao tem nada ´pq é um post e os dados vem do body da requisicao

router.post('/', ClienteController.criarCliente)
router.get('/', ClienteController.listarTodosClientes);
router.get('/:id', ClienteController.buscarClientePorId);
router.get('/cpf/:cpf', ClienteController.buscarClientePorCpf);
router.put('/:id', ClienteController.atualizarCliente);
router.delete('/:id', ClienteController.deletarCliente);

export default router;