import EntregadorDTO from '../dto/EntregadorDTO.js';
import EntregadorService from '../service/EntregadorService.js';

class EntregadorController {
    static async criarEntregador(req, res) {
        try {
            const dto = new EntregadorDTO();

            dto.setNome(req.body.nome);
            dto.setCpf(req.body.cpf);
            dto.setTelefone(req.body.telefone);
            dto.setVeiculo(req.body.Veiculo);
            dto.setPlaca(req.body.placa);

            const salvo = await EntregadorService.criarEntregador(dto);

            res.status(200).json(salvo);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarTodosEntregadores(req, res) {
        try {
            const lista = await EntregadorService.listarTodosEntregadores();
            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async buscarEntregadorPorDisponibilidade(req, res) {
        try {
            const disp = req.params.disp;

            const lista = await EntregadorService.buscarPorDisponibilidade(disp);

            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async buscarEntregadorPorCpf(req, res) {
        try {
            const cpf = req.params.cpf;

            const lista = await EntregadorService.buscarEntregadorPorCpf(cpf);

            res.status(200).json(lista);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async buscarEntregadorPorId(req, res) {
        try {
            const id = req.params.id;

            const lista = await EntregadorService.buscarEntregadorPorID(id);

            res.status(200).json(lista);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarEntregador(req, res) {
        try {
            const id = parseInt(req.params.id);

            const dto = new EntregadorDTO();

            dto.setNome(req.body.nome);
            dto.setCpf(req.body.cpf);
            dto.setTelefone(req.body.telefone);
            dto.setVeiculo(req.body.Veiculo);
            dto.setPlaca(req.body.placa);
            dto.setEntregadorID(id);

            const atualizado = await EntregadorService.atualizarEntregador(dto);

            res.status(200).json(atualizado);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarDisponibilidade(req, res) {
        try {
            const id = parseInt(req.params.id);
            const disponibilidade = req.params.disp;

            const lista = await EntregadorService.atualizarDisponibilidade(id, disponibilidade);

            res.status(200).json(lista);
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async deletarEntregador(req, res) {
        try {
            const id = parseInt(req.params.id);

            await EntregadorService.deletarEntregador(id);

            res.status(200).json({ mensagem : "Entregador deletado com sucesso."});

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }
}

export default EntregadorController;