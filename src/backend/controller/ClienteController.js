import ClienteService from "../service/ClienteService.js";
import ClienteDTO from "../dto/ClienteDTO.js";

class ClienteController {
    static async criarCliente(req, res) {
        try {
            const dto = new ClienteDTO();

            dto.setNome(req.body.nome);
            dto.setCpf(req.body.cpf);
            dto.setEndereco(req.body.endereco);
            dto.setTelefone(req.body.telefone);

            const clienteCriado = await ClienteService.criarCliente(dto);

            res.status(201).json(clienteCriado);
            
        } catch (error) {
            res.status(400).json({erro : error.message});
        }
    }

    static async listarTodosClientes(req, res) {
        try {
            const lista = await ClienteService.listarClientes();
            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({erro : error.message});
        }
    }

    static async atualizarCliente(req, res) {
        try {
            const id = parseInt(req.params.id);

            const dto = new ClienteDTO();

            dto.setNome(req.body.nome);
            dto.setCpf(req.body.cpf);
            dto.setEndereco(req.body.endereco);
            dto.setTelefone(req.body.telefone);
            dto.setClienteID(id);

            const atualizado = await ClienteService.atualizarCliente(dto);

            res.status(200).json(atualizado);

        } catch (error) {
            res.status(400).json({erro : error.message});
        }
    }

    static async buscarClientePorCpf(req, res) {
        try {
            const cpf = req.params.cpf;
            const cliente = await ClienteService.buscarClientePorCpf(cpf);

            res.status(200).json(cliente);

        } catch (error) {
            res.status(400).json({erro : error.message});
        }
    }

    static async buscarClientePorId(req, res) {
        try {
            const id = parseInt(req.params.id);
            const cliente = await ClienteService.buscarClientePorId(id);

            res.status(200).json(cliente);

        } catch (error) {
            res.status(400).json({erro : error.message});
        }
    }

    static async deletarCliente(req, res) {
        try {
            const id = parseInt(req.params.id);
            
            ClienteService.deletarCliente(id);

            res.status(200).json({ mensagem : "Cliente deletado com sucesso."});

        } catch (error) {
            res.status(400).json({erro : error.message});
        }
    }
}

export default ClienteController;