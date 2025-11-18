import PedidoDTO from '../dto/PedidoDTO.js';
import PedidoService from '../service/PedidoService.js';

class PedidoController {

    static async criarPedido(req, res) {
        try {
            const dto = new PedidoDTO();

            dto.setClienteID(req.body.ClienteID);
            dto.setRestauranteID(req.body.RestauranteID);
            dto.setEntregadorID(req.body.EntregadorID);
            dto.setDataHora(req.body.data_hora);
            dto.setStatus(req.body.status);

            const salvo = await PedidoService.criarPedido(dto);

            res.status(200).json(salvo);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarTodosPedidos(req, res) {
        try {
            const lista = await PedidoService.listarTodosPedidos();
            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarPedidosPorClienteCpf(req, res) {
        try {
            const cpf = req.params.cpf;

            const lista = await PedidoService.listarPedidosPorClienteCpf(cpf);

            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarPedidoDataHora(req, res) {
        try {
            const id = req.params.id;
            const dataHora = req.body.dataHora;

            const atualizado = await PedidoService.atualizarPedidoDataHora(id, dataHora);

            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarPedidoStatus(req, res) {
        try {
            const id = req.params.id;
            const status = req.body.status;

            const atualizado = await PedidoService.atualizarStatusPedido(id, status);

            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async deletarPedido(req, res) {
        try {
            const id = parseInt(req.params.id);
            
            await PedidoService.deletarPedido(id);

            res.status(200).json({ message : "Pedido excluído com sucesso."})

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }
}

export default PedidoController;