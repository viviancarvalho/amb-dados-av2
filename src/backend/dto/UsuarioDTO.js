import UsuarioModel from '../model/UsuarioModel.js';

class UsuarioDTO {
    constructor() {
        this.UsuarioID = null;
        this.login = null;
        this.senha = null;
        this.tipo = null;
    }

    static toDTO(usuario) {
        const dto = new UsuarioDTO();

        dto.UsuarioID = usuario.getUsuarioID();
        dto.login = usuario.getLogin();
        dto.senha = usuario.getSenha();
        dto.tipo = usuario.getTipo;

        return dto;
    }

    toModel() {
        const usuario = new UsuarioModel(this.login, this.senha, this.tipo);
        usuario.setUsuarioID(this.UsuarioID);

        return usuario;
    }

    getUsuarioID() {
        return this.UsuarioID;
    }
    setUsuarioID(value) {
        this.UsuarioID = value;
    }

    getLogin() {
        return this.login;
    }
    setLogin(value) {
        this.login = value;
    }

    getSenha() {
        return this.senha;
    }
    setSenha(value) {
        this.senha = value;
    }

    getTipo() {
        return this.tipo;
    }
    setTipo(value) {
        this.tipo = value;
    }
}

export default UsuarioDTO;