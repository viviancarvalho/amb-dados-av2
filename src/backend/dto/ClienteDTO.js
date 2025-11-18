import ClienteModel from '../model/ClienteModel.js';

class ClienteDTO {
    constructor () {
        this.ClienteID = null;
        this.nome = null;
        this.cpf = null;
        this.endereco = null;
        this.telefone = null;
    }

    //model para dto
    static toDTO(cliente) {
        const dto = new ClienteDTO();

        dto.ClienteID = cliente.getClienteID();
        dto.nome = cliente.getNome();
        dto.cpf = cliente.getCpf();
        dto.endereco = cliente.getEndereco();
        dto.telefone = cliente.getTelefone();

        return dto;
    }

    toModel() {
        const cliente = new ClienteModel(this.nome, this.cpf, this.endereco, this.telefone);
        cliente.setClienteID(this.ClienteID);

        return cliente;
    }

    getClienteID() {
        return this.ClienteID;
    }
    setClienteID(id) {
        this.ClienteID = id;
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
    setNome(nome) {
        this.nome = nome;
    }

    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }

    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
}

export default ClienteDTO;