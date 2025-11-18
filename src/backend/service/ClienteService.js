import ClienteDAO from "../dao/ClienteDAO.js";
import ClienteDTO from "../dto/ClienteDTO.js";

class ClienteService {
    static async criarCliente(clienteDTO) {
        if (!clienteDTO.getNome() || clienteDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!clienteDTO.getCpf() || clienteDTO.getCpf().length !== 11) {
            throw new Error("Cpf inválido.");
        }
        if (!clienteDTO.getEndereco() || clienteDTO.getEndereco().length > 100) {
            throw new Error("Endereço inválido.");
        }

        const cliente = clienteDTO.toModel();

        const salvo = await ClienteDAO.inserirCliente(cliente);

        return ClienteDTO.toDTO(salvo);
    }

    static async listarClientes() {
        const lista = await ClienteDAO.listarTodosClientes();

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum cliente encontrado.");
        }

        return lista.map(c => ClienteDTO.toDTO(c));
    }

    static async buscarPorCpf(cpf) {
        if (!cpf || cpf.length < 11) {
            throw new Error("Cpf do cliente inválido.");
        }

        const cliente = await ClienteDAO.buscarClientePorCpf(cpf);

        return ClienteDTO.toDTO(cliente);
    }

    static async buscarPorId(id) {
        if (!id) {
            throw new Error("Id do cliente inválido.");
        }

        return await ClienteDAO.buscarClientePorID(id);
    }

    static async atualizarCliente(clienteDTO) {
        if (!clienteDTO.getClienteID()) {
            throw new Error("ID inválido.");
        }
        if (!clienteDTO.getNome() || clienteDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!clienteDTO.getCpf() || clienteDTO.getCpf().length !== 11) {
            throw new Error("Cpf inválido.");
        }
        if (!clienteDTO.getEndereco() || clienteDTO.getEndereco().length > 100) {
            throw new Error("Endereço inválido.");
        }

        const cliente = clienteDTO.toModel();
        const atualizado = await ClienteDAO.atualizarCliente(cliente);

        return ClienteDTO.toDTO(atualizado);
    }

    static async deletarCliente(id) {
        if (!id) {
            throw new Error("Id do cliente inválido.");
        }

        return await ClienteDAO.deletarCliente(id);
    }
}

export default ClienteService;