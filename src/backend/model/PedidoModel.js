class PedidoModel {
    #pedidoID;
    #clienteID;
    #restauranteID;
    #entregadorID;
    #dataHora;
    #valorTotal;
    #status;

    constructor(clienteID, restauranteID, entregadorID) {
        this.#clienteID = clienteID;
        this.#restauranteID = restauranteID;
        this.#entregadorID = entregadorID;
        this.#dataHora = null;
        this.#valorTotal = 0;
        this.#status = "Em preparo";
    }

    getPedidoID() {
        return this.#pedidoID;
    }
    setPedidoID(value) {
        this.#pedidoID = value;
    }

    getClienteID() {
        return this.#clienteID;
    }
    setClienteID(value) {
        this.#clienteID = value;
    }

    getRestauranteID() {
        return this.#restauranteID;
    }
    setRestauranteID(value) {
        this.#restauranteID = value;
    }

    getEntregadorID() {
        return this.#entregadorID;
    }
    setEntregadorID(value) {
        this.#entregadorID = value;
    }

    getDataHora() {
        return this.#dataHora;
    }
    setDataHora(value) {
        this.#dataHora = value;
    }

    getValorTotal() {
        return this.#valorTotal;
    }
    setValorTotal(value) {
        this.#valorTotal = value;
    }

    getStatus() {
        return this.#status;
    }
    setStatus(status) {
        this.#status = status;
    }
}

export default PedidoModel;