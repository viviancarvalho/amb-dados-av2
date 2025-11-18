import RestauranteModel from '../model/RestauranteModel.js';

class RestauranteDTO {
    constructor() {
        this.RestauranteID = null;
        this.nome = null;
        this.tipoCozinha = null;
        this.telefone = null;
        this.enedereco = null;
        this.cnpj = null;
    }

    static toDTO(rest) {
        const dto = new RestauranteDTO();

        dto.RestauranteID = rest.getRestauranteID();
        dto.nome = rest.getNome();
        dto.tipoCozinha = rest.getTipoCozinha();
        dto.telefone = rest.getTelefone();
        dto.endereco = rest.getEndereco();
        dto.cnpj = rest.getCnpj();

        return dto
    }

    toModel() {
        const rest = new RestauranteModel(this.nome, this.tipoCozinha, this.telefone, this.endereco, this.cnpj);
        rest.setRestauranteID(this.RestauranteID);

        return rest;
    }

    getRestauranteID() {
        return this.RestauranteID
    }
    setRestauranteID(id) {
        this.RestauranteID = id;
    }

    getNome() {
        return this.nome
    }
    setNome(nome) {
        this.nome = nome;
    }

    getTipoCozinha() {
        return this.tipoCozinha;
    }
    setTipoCozinha(value) {
        this.tipoCozinha = value;
    }

    getTelefone() {
        return this.telefone;
    }
    setTelefone(value) {
        this.telefone = value;
    }

    getEndereco() {
        return this.endereco;
    }
    setEndereco(value) {
        this.endereco = value;
    }

    getCnpj() {
        return this.cnpj;
    }
    setCnpj(value) {
        this.cnpj = value;
    }
}

export default RestauranteDTO;