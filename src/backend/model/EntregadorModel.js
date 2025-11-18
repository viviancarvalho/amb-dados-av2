class EntregadorModel {
    #entregadorID;
    #nome;
    #cpf;
    #telefone;
    #disponivel;
    #veiculo;
    #placa;
    
    constructor(nome, cpf, telefone, disponivel = true, veiculo, placa, ) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#telefone = telefone;
        this.#disponivel = disponivel;
        this.#veiculo = veiculo;
        this.#placa = placa;
    }

    getEntregadorID() {
        return this.#entregadorID;
    }
    setEntregadorID(value) {
        this.#entregadorID = value;
    }

    getCpf() {
        return this.#cpf;
    }
    setCpf(cpf) {
        this.#cpf = cpf;
    }

    getNome() {
        return this.#nome;
    }
    setNome(value) {
        this.#nome = value;
    }

    getTelefone() {
        return this.#telefone;
    }
    setTelefone(value) {
        this.#telefone = value;
    }

    getDisponivel() {
        return this.#disponivel;
    }
    setDisponivel(value) {
        this.#disponivel = value;
    }

    getVeiculo() {
        return this.#veiculo;
    }
    setVeiculo(value) {
        this.#veiculo = value;
    }

    getPlaca() {
        return this.#placa;
    }
    setPlaca(value) {
        this.#placa = value;
    }
}

export default EntregadorModel;