class ClienteModel {
    #clienteID;
    #nome;
    #cpf;
    #endereco;
    #telefone;

    constructor(nome, cpf, endereco, telefone) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    getClienteID() {
        return this.#clienteID;
    }
    setClienteID(id) {
        this.#clienteID = id;
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
    setNome(nome) {
        this.#nome = nome;
    }

    getEndereco() {
        return this.#endereco;
    }
    setEndereco(endereco) {
        this.#endereco = endereco;
    }

    getTelefone() {
        return this.#telefone;
    }
    setTelefone(telefone) {
        this.#telefone = telefone;
    }
}

export default ClienteModel;