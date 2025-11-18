import UsuarioService from '../service/UsuarioService.js';
import UsuarioDTO from '../dto/UsuarioDTO.js';

class UsuarioController {
    static async criarUsuario(req, res) {
        try {
            const dto = new UsuarioDTO();

            dto.setLogin(req.body.login);
            dto.setSenha(req.body.senha);
            dto.setTipo(req.body.tipo);

            const usuario = await UsuarioService.criarUsuario(dto);

            res.status(201).json(usuario);

        } catch (error) {
            res.status(400).json({ erro : error.message})
        }
    }

    static async listarTodosUsuarios(req, res) {
        try {
            const lista = await UsuarioService.listarTodosUsuarios();
            res.status(201).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message})
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const id = parseInt(req.params.id);

            const dto = new UsuarioDTO();

            dto.setLogin(req.body.login);
            dto.setSenha(req.body.senha);
            dto.setTipo(req.body.tipo);
            dto.setUsuarioID(id);

            const atualizado = await UsuarioService.atualizarUsuario(dto);

            res.status(201).json(atualizado);

        } catch (error) {
            res.status(400).json({ erro : error.message})
        }
    }

    static async buscarUsuarioPorLoginSenha(req, res) {
        try {
            const login = req.body.login;
            const senha = req.body.senha;

            const usuario = await UsuarioService.buscarUsuarioPorLoginSenha(login, senha);

            res.status(201).json(usuario);
            
        } catch (error) {
            res.status(400).json({ erro : error.message})
        }
    }

    static async deletarUsuario(req, res) {
        try {
            const id = req.params.id;

            await UsuarioService.deletarUsuario(id);

            res.status(201).json({ message : "Usuário deletado com sucesso."});

        } catch (error) {
            res.status(400).json({ erro : error.message})
        }
    }
}

export default UsuarioController;