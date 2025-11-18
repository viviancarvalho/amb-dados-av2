import UsuarioDAO from "../dao/UsuarioDAO.js";
import UsuarioDTO from "../dto/UsuarioDTO.js";

class UsuarioService {
    static async criarUsuario(usuarioDTO) {
        if (usuarioDTO.getLogin() === undefined || usuarioDTO.getLogin() === null || usuarioDTO.getLogin().trim() === "" || usuarioDTO.getLogin().length > 10) {
            throw new Error("Login inválido.");
        }
        if (usuarioDTO.getSenha() === undefined || usuarioDTO.getSenha() === null || usuarioDTO.getSenha().trim() === "" || usuarioDTO.getSenha().length > 10) {
            throw new Error("Senha inválida.");
        }
        if (usuarioDTO.getTipo() !== "Cliente" && usuarioDTO.getTipo() !== "Restaurante" && usuarioDTO.getTipo() !== "Entregador" && usuarioDTO.getTipo() !== "Super") {
            throw new Error("Tipo do usuário inválido.");
        }

        const usuario = usuarioDTO.toModel();
        const salvo = UsuarioDAO.inserirUsuario(usuario);

        return UsuarioDTO.toDTO(salvo);
    }

    static async listarTodosUsuarios() {
        const lista = UsuarioDAO.listarTodosUsuarios();

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum usuário encontrado.");
        }

        return lista.map(l => UsuarioDTO.toDTO(l));
    }

    static async atualizarUsuario(usuarioDTO) {
        if (usuarioDTO.getLogin() === undefined || usuarioDTO.getLogin() === null || usuarioDTO.getLogin().trim() === "" || usuarioDTO.getLogin().length > 10) {
            throw new Error("Login inválido.");
        }
        if (usuarioDTO.getSenha() === undefined || usuarioDTO.getSenha() === null || usuarioDTO.getSenha().trim() === "" || usuarioDTO.getSenha().length > 10) {
            throw new Error("Senha inválida.");
        }
        if (usuarioDTO.getTipo() !== "Cliente" && usuarioDTO.getTipo() !== "Restaurante" && usuarioDTO.getTipo() !== "Entregador" && usuarioDTO.getTipo() !== "Super") {
            throw new Error("Tipo do usuário inválido.");
        }

        const atualizado = UsuarioDAO.atualizarUsuario(usuarioDTO);

        return UsuarioDTO.toDTO(atualizado);
    }

    static async buscarUsuarioPorLoginSenha(login, senha) {
        if (login === undefined || login === null || login.trim() === "" || login.length > 10) {
            throw new Error("Login inválido.");
        }
        if (senha === undefined || senha === null || senha.trim() === "" || senha.length > 10) {
            throw new Error("Senha inválida.");
        }

        const busca = UsuarioDAO.buscarUsuarioLoginSenha(login, senha);

        return UsuarioDTO.toDTO(busca);
    }

    static async deletarUsuario(id) {
        if (!id) {
            throw new Error("Id inválido.");
        }

        return UsuarioDAO.deletarUsuario(id);
    }
}

export default UsuarioService;