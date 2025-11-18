import ItemPedidoModel from '../model/ItemPedidoModel.js';

class ItemPedidoDTO {
    constructor() {
        this.ItemPedidoID = null;
        this.ItemID = null;
        this.PedidoID = null;
        this.quantidade = null;
        this.precoUnitario = null;
    }

    static toDTO(ip) {
        const dto = new ItemPedidoDTO();

        dto.ItemPedidoID = ip.getItemPedidoID();
        dto.ItemID = ip.getItemID();
        dto.PedidoID = ip.getPedidoID();
        dto.quantidade = ip.getQuantidade();
        dto.precoUnitario = ip.getPrecoUnitario();

        return dto;
    }

    toModel() {
        const ip = new ItemPedidoModel(this.ItemID, this.PedidoID, this.quantidade, this.precoUnitario);
        ip.setItemPedidoID(this.ItemPedidoID);

        return ip;
    }

    getItemPedidoID() {
        return this.ItemPedidoID;
    }
    setItemPedidoID(value) {
        this.ItemPedidoID = value;
    }

    getItemID() {
        return this.ItemID;
    }
    setItemID(value) {
        this.ItemID = value;
    }

    getPedidoID() {
        return this.PedidoID;
    }
    setPedidoID(value) {
        this.PedidoID = value;
    }

    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(value) {
        this.quantidade = value;
    }

    getPrecoUnitario() {
        return this.precoUnitario;
    }
    setPrecoUnitario(value) {
        this.precoUnitario = value;
    }
}

export default ItemPedidoDTO;