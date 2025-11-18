import EntregadorDAO from "../dao/EntregadorDAO.js";
import EntregadorDTO from "../dto/EntregadorDTO.js";

class EntregadorService {
    static async criarEntregador(entregadorDTO) {
        if (!entregadorDTO.getNome() || entregadorDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!entregadorDTO.getCpf() || entregadorDTO.getCpf().length !== 11) {
            throw new Error("Cpf inválido.");
        }
        if (!entregadorDTO.getPlaca() || entregadorDTO.getPlaca(),length !== 7) {
            throw new Error("Placa inválida.");
        }
        if (!entregadorDTO.getTelefone() || entregadorDTO.getTelefone().length > 20) {
            throw new Error("Telefone inválido.");
        }
        if (!restauranteDTO.getVeiculo() || restauranteDTO.getVeiculo().length > 50) {
            throw new Error("Veiculo inválido.");
        }

        const ent = entregadorDTO.toModel();
        const salvo = await EntregadorDAO.inserirEntregador(ent);

        return EntregadorDTO.toDTO(salvo);
    }

    static async listarTodosEntregadores() {
        const lista = await EntregadorDAO.listarTodosEntregadores();

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum entregador encontrado.");
        }

        return lista.map(e => EntregadorDTO.toDTO(e));
    }

    static async atualizarEntregador(entregadorDTO) {
        if (!entregadorDTO.getNome() || entregadorDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!entregadorDTO.getCpf() || entregadorDTO.getCpf().length != 11) {
            throw new Error("Cpf inválido.");
        }
        if (!entregadorDTO.getPlaca() || entregadorDTO.getPlaca(),length != 7) {
            throw new Error("Placa inválida.");
        }
        if (!entregadorDTO.getTelefone() || entregadorDTO.getTelefone().length > 20) {
            throw new Error("Telefone inválido.");
        }
        if (!restauranteDTO.getVeiculo() || restauranteDTO.getVeiculo().length > 50) {
            throw new Error("Veiculo inválido.");
        }

        const ent = entregadorDTO.toModel();
        const atualizado = await EntregadorDAO.atualizarEntregador(ent);

        return EntregadorDTO.toDTO(atualizado);
    }

    static async atualizarDisponibilidade(id, disp) {
        if (!id) {
            throw new Error("Id inválido.");
        }
        if (disp !== true && disp !== false) {
            throw new Error("Disponibilidade inválida.");
        }

        const atualizado = await EntregadorDAO.atualizarDisponibilidade(id, disp);

        return EntregadorDTO.toDTO(atualizado);
    }

    static async buscarPorDisponibilidade(disp) {
        if (disp !== true && disp !== false) {
            throw new Error("Disponibilidade inválida.");
        }

        const busca = await EntregadorDAO.buscarEntregadorPorDisponibilidade(disp);
        
        return EntregadorDTO.toDTO(busca);
    }

    static async buscarPorCpf(cpf) {
        if (!cpf || cpf.length !== 11) {
            throw new Error("Cpf inválido.");
        }

        const busca = await EntregadorDAO.buscarEntregadorPorCpf(cpf);

        return EntregadorDTO.toDTO(busca);
    }

    static async buscarPorID(id) {
        if (!id || id.length !== 11) {
            throw new Error("Id inválido.");
        }

        const busca = await EntregadorDAO.buscarEntregadorPorID(id);

        return EntregadorDTO.toDTO(busca);
    }

    static async deletarEntregador(id) {
        if (!id || id.length !== 11) {
            throw new Error("Id inválido.");
        }

        return await EntregadorDAO.deletarEntregador(id);
    }
}

export default EntregadorService;