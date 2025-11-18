import RestauranteDTO from '../dto/RestauranteDTO.js';
import RestauranteService from '../service/RestauranteService.js';

class RestauranteController {
    static async criarRestaurante(req, res) {
        try {
            const dto = new RestauranteDTO();

            dto.setNome(req.body.nome);
            dto.setTipoCozinha(req.body.tipo_cozinha);
            dto.setTelefone(req.body.telefone);
            dto.setEndereco(req.body.endereco);
            dto.setCnpj(req.body.cnpj);

            const salvo = await RestauranteService.criarRestaurante(dto);

            res.status(201).json(salvo);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarTodosRestaurantes(req, res) {
        try {
            const lista = await RestauranteService.listarTodosRestaurantes();
            res.status(201).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarRestaurante(req, res) {
        try {
            const id = parseInt(req.params.id);

            const dto = new RestauranteDTO();

            dto.setNome(req.body.nome);
            dto.setTipoCozinha(req.body.tipo_cozinha);
            dto.setTelefone(req.body.telefone);
            dto.setEndereco(req.body.endereco);
            dto.setCnpj(req.body.cnpj);
            dto.setRestauranteID(id);

            const atualizado = await RestauranteService.atualizarRestaurante(dto);

            res.status(201).json(atualizado);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async deletarRestaurante(req, res) {
        try {
            const id = parseInt(req.params.id);
            
            await RestauranteService.deletarRestaurante(id);

            res.status(201).json({ message : "Restaurante deletado com sucesso."});
            
        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }
}

export default RestauranteController;