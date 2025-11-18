class UsuarioModel {
    #usuarioID;
    #login;
    #senha;
    #tipo;
    
    constructor(login, senha, tipo) {
        this.#login = login;
        this.#senha = senha;
        this.#tipo = tipo;
    }

    getUsuarioID() {
        return this.#usuarioID;
    }
    setUsuarioID(value) {
        this.#usuarioID = value;
    }

    getLogin() {
        return this.#login;
    }
    setLogin(value) {
        this.#login = value;
    }

    getSenha() {
        return this.#senha;
    }
    setSenha(value) {
        this.#senha = value;
    }

    getTipo() {
        return this.#tipo;
    }
    setTipo(value) {
        this.#tipo = value;
    }
}

export default UsuarioModel;