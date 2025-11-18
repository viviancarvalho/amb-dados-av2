import PedidoModel from '../model/PedidoModel.js';

class PedidoDTO {
    constrcutor() {
        this.PedidoID = null;
        this.ClienteID = null;
        this.RestauranteID = null;
        this.EntregadorID = null;
        this.dataHora = null;
        this.valorTotal = null;
        this.status = null;
    }

    static toDTO(pedido) {
        const dto = new PedidoDTO();

        dto.PedidoID = pedido.getPedidoID();
        dto.ClienteID = pedido.getClienteID();
        dto.RestauranteID = pedido.getRestauranteID();
        dto.EntregadorID = pedido.getEntregadorID();
        dto.dataHora = pedido.getDataHora();
        dto.valorTotal = pedido.getValorTotal();
        dto.status = pedido.getStatus();

        return dto;
    }

    toModel() {
        const pedido = new PedidoModel(this.ClienteID, this.RestauranteID, this.EntregadorID, this.dataHora, this.valorTotal, this.status);
        pedido.setPedidoID(this.PedidoID);

        return pedido;
    }

    getPedidoID() {
        return this.PedidoID;
    }
    setPedidoID(value) {
        this.PedidoID = value;
    }

    getClienteID() {
        return this.ClienteID;
    }
    setClienteID(value) {
        this.ClienteID = value;
    }

    getRestauranteID() {
        return this.RestauranteID;
    }
    setRestauranteID(value) {
        this.RestauranteID = value;
    }

    getEntregadorID() {
        return this.EntregadorID;
    }
    setEntregadorID(value) {
        this.EntregadorID = value;
    }

    getDataHora() {
        return this.dataHora;
    }
    setDataHora(value) {
        this.dataHora = value;
    }

    getValorTotal() {
        return this.valorTotal;
    }
    setValorTotal(value) {
        this.valorTotal = value;
    }

    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}

export default PedidoDTO;