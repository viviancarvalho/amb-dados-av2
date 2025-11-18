import PedidoDAO from "../dao/PedidoDAO.js";
import PedidoDTO from "../dto/PedidoDTO.js";

class PedidoService {
    static async criarPedido(pedidoDTO) {
        if (!pedidoDTO.getClienteID()) {
            throw new Error("Id do cliente inválido.");
        }
        if (!pedidoDTO.getRestauranteID()) {
            throw new Error("Id do restaurante inválido.");
        }
        if (!pedidoDTO.getDataHora() || pedidoDTO.getDataHora() === null) {
            throw new Error("Data hora inválida.");
        }
        if (pedidoDTO.getValorTotal() === null) {
            throw new Error("Valor total inválido.");
        }
        if (!pedidoDTO.getStatus() !== "Em preparo" && !pedidoDTO.getStatus() !== "A caminho" && !pedidoDTO.getStatus() !== "Entregue") {
            throw new Error("Status inválido.");
        }

        const pedido = pedidoDTO.toModel();
        const salvo = PedidoDAO.inserirPedido(pedido);

        return PedidoDTO.toDTO(salvo);
    }

    static async listarTodosPedidos() {
        const lista = PedidoDAO.listarTodosPedidos();

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum pedido foi encontrado.");
        }

        return lista.map(p => PedidoDTO.toDTO(p));
    }

    static async listarPedidosPorClienteCpf(cpf) {
        if (!cpf || cpf.length !== 11) {
            throw new Error("Cpf inválido.");
        }

        const lista = PedidoDAO.listarPedidoPorClienteCpf(cpf);

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum pedido foi encontrado.");
        }

        return lista.map(p => PedidoDTO.toDTO(p));
    }

    static async atualizarPedidoDataHora(id, data_hora) {
        if (!id) {
            throw new Error("Id inválido.");
        }
        if (!data_hora || data_hora === null) {
            throw new Error("Data hora inválida.");
        }

        const atualizado = PedidoDAO.atualizarPedidoDataHora(id, data_hora);

        return PedidoDTO.toDTO(atualizado);
    }

    static async atualizarStatusPedido(id, status) {
        if (!id) {
            throw new Error("Id inválido.");
        }
        if (!status !== "Em preparo" && !status !== "A caminho" && !status !== "Entregue") {
            throw new Error("Status inválido.");
        }

        const atualizado = PedidoDAO.atualizarStatusPedido(id, status);

        return PedidoDTO.toDTO(atualizado);
    }

    static async deletarPedido(id) {

    }
}

export default PedidoService;