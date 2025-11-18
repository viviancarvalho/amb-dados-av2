class ItemPedidoModel {
    #itemPedidoID;
    #itemID;
    #pedidoID;
    #quantidade;
    #precoUnitario;
    
    constructor(itemID, pedidoID, quantidade, precoUnitario) {
        this.#itemID = itemID;
        this.#pedidoID = pedidoID;
        this.#quantidade = quantidade;
        this.#precoUnitario = precoUnitario;
    }

    getItemPedidoID() {
        return this.#itemPedidoID;
    }
    setItemPedidoID(value) {
        this.#itemPedidoID = value;
    }

    getItemID() {
        return this.#itemID;
    }
    setItemID(value) {
        this.#itemID = value;
    }

    getPedidoID() {
        return this.#pedidoID;
    }
    setPedidoID(value) {
        this.#pedidoID = value;
    }

    getQuantidade() {
        return this.#quantidade;
    }
    setQuantidade(value) {
        this.#quantidade = value;
    }

    getPrecoUnitario() {
        return this.#precoUnitario;
    }
    setPrecoUnitario(value) {
        this.#precoUnitario = value;
    }
}

export default ItemPedidoModel;