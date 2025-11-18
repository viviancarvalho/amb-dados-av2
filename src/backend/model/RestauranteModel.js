class RestauranteModel {
    #restauranteID;
    #nome;
    #tipoCozinha;
    #telefone;
    #endereco;
    #cnpj;

    constructor(nome, tipoCozinha, telefone, endereco, cnpj) {
        this.#nome = nome;
        this.#tipoCozinha = tipoCozinha;
        this.#telefone = telefone;
        this.#endereco = endereco;
        this.#cnpj = cnpj;
    }

    getRestauranteID() {
        return this.#restauranteID
    }
    setRestauranteID(id) {
        this.#restauranteID = id;
    }

    getNome() {
        return this.#nome
    }
    setNome(nome) {
        this.#nome = nome;
    }

    getTipoCozinha() {
        return this.#tipoCozinha;
    }
    setTipoCozinha(value) {
        this.#tipoCozinha = value;
    }

    getTelefone() {
        return this.#telefone;
    }
    setTelefone(value) {
        this.#telefone = value;
    }

    getEndereco() {
        return this.#endereco;
    }
    setEndereco(value) {
        this.#endereco = value;
    }

    getCnpj() {
        return this.#cnpj;
    }
    setCnpj(value) {
        this.#cnpj = value;
    }
}