import ItemPedidoDAO from "../dao/ItemPedidoDAO.js";
import ItemPedidoDTO from "../dto/ItemPedidoDTO.js";

class ItemPedidoService {
    static async criarItemPedido(ipDTO) {
        if (!ipDTO.getItemID()) {
            throw new Error("Id do item inválido.");
        }
        if (!ipDTO.getPedidoID()) {
            throw new Error("Id do pedido inválido.");
        }
        if (ipDTO.getPrecoUnitario() === undefined || ipDTO.getPrecoUnitario() === null || isNaN(ipDTO.getPrecoUnitario()) || ipDTO.getPrecoUnitario() < 0) {
            throw new Error("Preço inválido.");
        }
        if (!ipDTO.getQuantidade()) {
            throw new Error("Quantidade inválida.");
        }

        const ip = ipDTO.toModel();
        const salvo = ItemPedidoDAO.inserirItemPedido(ip);

        return ItemPedidoDTO.toDTO(salvo);
    }

    static async listarItensDePedido(pedidoID) {
        if (!pedidoID) {
            throw new Error("Id do pedido inválido.");
        }

        const lista = ItemPedidoDAO.listarItensDeUmPedido(pedidoID);

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum item foi encontrado para esse pedido.");
        }

        return lista.map(i => ItemPedidoDTO.toDTO(i));
    }

    static async atualizarQuantidade(ipID, qtd) {
        if (!ipID) {
            throw new Error("Id do item pedido inválido.");
        }
        if (!qtd) {
            throw new Error("Quantidade inválida.");
        }

        const ip = ItemPedidoDAO.atualizarQuantidade(ipID, qtd);

        return ItemPedidoDTO.toDTO(ip);
    }

    static async deletarItemDePedido(ipID) {
        if (!ipID) {
            throw new Error("Id do item pedido inválido.");
        }

        return ItemPedidoDAO.deletarItemDePedido(ipID);
    }
}

export default ItemPedidoService;