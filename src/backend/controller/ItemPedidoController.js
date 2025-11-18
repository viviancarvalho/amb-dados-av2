import ItemPedidoService from "../service/ItemPedidoService.js";
import ItemPedidoDTO from "../dto/ItemPedidoDTO.js";

class ItemPedidoController {
    static async criarItemPedido(req, res) {
        try {
            const dto = new ItemPedidoDTO();

            dto.setItemID(req.body.ItemID);
            dto.setPedidoID(req.body.PedidoID);
            dto.setQuantidade(req.body.quantidade);
            dto.setPrecoUnitario(req.body.preco_unitario);

            const salvo = await ItemPedidoService.criarItemPedido(dto);

            res.status(200).json(salvo);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarItensDePedido(req, res) {
        try {
            const pedidoID = parseInt(req.params.pedidoID);

            const lista = await ItemPedidoService.listarItensDePedido(pedidoID);

            res.status(200).json(lista);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarItemPedido(req, res) {
        try {
            const id = parseInt(req.params.id);

            const dto = new ItemPedidoDTO();

            dto.setItemID(req.body.ItemID);
            dto.setPedidoID(req.body.PedidoID);
            dto.setQuantidade(req.body.quantidade);
            dto.setPrecoUnitario(req.body.preco_unitario);
            dto.setItemPedidoID(id);

            const atualizado = await ItemPedidoService.atualizarItemPedido(dto);

            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarQuantidade(req, res) {
        try {
            const id = parseInt(req.params.id);
            const qtd = parseInt(req.body.quantidade);

            const atualizado = await ItemPedidoService.atualizarQuantidade(id, qtd);

            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async deletarItemDePedido(req, res) {
        try {
            const id = parseInt(req.params.id);

            await ItemPedidoService.deletarItemDePedido(id);

            res.status(200).json({ message : "Item pedido deletado com sucesso."});
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }
}

export default ItemPedidoController;