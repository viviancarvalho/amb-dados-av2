import EntregadorModel from "../model/EntregadorModel.js";

class EntregadorDTO {
    constructor() {
        this.EntregadorID = null;
        this.nome = null;
        this.cpf = null;
        this.telefone = null;
        this.veiculo = null;
        this.placa = null;
    }

    static toDTO(entregador) {
        const dto = new EntregadorDTO();

        dto.EntregadorID = entregador.getEntregadorID();
        dto.nome = entregador.getNome();
        dto.cpf = entregador.getCpf();
        dto.telefone = entregador.getTelefone();
        dto.veiculo = entregador.getVeiculo();
        dto.placa = entregador.getPlaca();

        return dto;
    }

    toModel() {
        const entregador = new EntregadorModel(this.nome, this.cpf, this.telefone, this.veiculo, this.placa);
        entregador.setEntregadorID(this.EntregadorID);

        return entregador;
    }

    getEntregadorID() {
        return this.EntregadorID;
    }
    setEntregadorID(value) {
        this.EntregadorID = value;
    }

    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }

    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }

    getTelefone() {
        return this.telefone;
    }
    setTelefone(value) {
        this.telefone = value;
    }

    getDisponivel() {
        return this.disponivel;
    }
    setDisponivel(value) {
        this.disponivel = value;
    }

    getVeiculo() {
        return this.veiculo;
    }
    setVeiculo(value) {
        this.veiculo = value;
    }

    getPlaca() {
        return this.placa;
    }
    setPlaca(value) {
        this.placa = value;
    }
}

export default EntregadorDTO;