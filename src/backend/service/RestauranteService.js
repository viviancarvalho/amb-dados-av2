import RestauranteDAO from "../dao/RestauranteDAO.js";
import RestauranteDTO from "../dto/RestauranteDTO.js";

class RestauranteService {
    static async criarRestaurante(restauranteDTO) {
        if (!restauranteDTO.getNome() || restauranteDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!restauranteDTO.getTipoCozinha() || restauranteDTO.getTipoCozinha().length > 50) {
            throw new Error("Tipo de cozinha inválido.");
        }
        if (!restauranteDTO.getCnpj() || restauranteDTO.getCnpj().length !== 11) {
            throw new Error("Cnpj inválido.");
        }
        if (!restauranteDTO.getEndereco() || restauranteDTO.getEndereco().length > 200) {
            throw new Error("Endereço inválido.");
        }
        if (!restauranteDTO.getTelefone() || restauranteDTO.getTelefone().length > 20) {
            throw new Error("Telefone inválido.");
        }

        const rest = restauranteDTO.toModel();
        const salvo = RestauranteDAO.inserirRestaurante(rest);

        return RestauranteDTO.toDTO(salvo);
    }

    static async listarTodosRestaurantes() {
        const lista = RestauranteDAO.listarTodosRestaurantes();

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum restaurante encontrado.");
        }

        return lista.map(r => RestauranteDTO.toDTO(r));
    }

    static async atualizarRestaurante(restauranteDTO) {
        if (!restauranteDTO.getNome() || restauranteDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!restauranteDTO.getTipoCozinha() || restauranteDTO.getTipoCozinha().length > 50) {
            throw new Error("Tipo de cozinha inválido.");
        }
        if (!restauranteDTO.getCnpj() || restauranteDTO.getCnpj().length !== 11) {
            throw new Error("Cnpj inválido.");
        }
        if (!restauranteDTO.getEndereco() || restauranteDTO.getEndereco().length > 200) {
            throw new Error("Endereço inválido.");
        }
        if (!restauranteDTO.getTelefone() || restauranteDTO.getTelefone().length > 20) {
            throw new Error("Telefone inválido.");
        }

        const rest = restauranteDTO.toModel();
        const atualizado = RestauranteDAO.atualizarRestaurante(rest);

        return RestauranteDTO.toDTO(atualizado);
    }

    static async deletarRestaurante(id) {
        if (!id) {
            throw new Error("Id inválido.");
        }

        return RestauranteDAO.deletarRestaurante(id);
    }
}

export default RestauranteService;