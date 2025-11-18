import ItemDTO from '../dto/ItemDTO.js';
import ItemService from '../service/ItemService.js';

class ItemController {
    static async criarItem(req, res) {
        try {
            const dto = new ItemDTO();

            dto.setRestauranteID(req.body.RestauranteID);
            dto.setNome(req.body.nome);
            dto.setDescricao(req.body.descricao);
            dto.setPreco(req.body.preco);

            const salvo = await ItemService.criarItem(dto);

            res.status(200).json(salvo);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarTodosItens(req, res) {
        try {
            const lista = await ItemService.listarTodosItens();
            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async listarItensPorRestaurante(req, res) {
        try {
            const id = parseInt(req.params.RestauranteID);

            const lista = await ItemService.listarItensPorRestaurante(id);

            res.status(200).json(lista);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async atualizarItem(req, res) {
        try {
            const id = parseInt(req.params.id);

            const dto = new ItemDTO();

            dto.setRestauranteID(req.body.RestauranteID);
            dto.setNome(req.body.nome);
            dto.setDescricao(req.body.descricao);
            dto.setPreco(req.body.preco);
            dto.setItemID(id);

            const atualizado = await ItemService.atualizarItem(dto);

            res.status(200).json(atualizado);

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }

    static async deletarItem(req, res) {
        try {
            const id = parseInt(req.params.id);

            await ItemService.deletarItem(id);

            res.status(200).json({ message : "Item deletado com sucesso."});

        } catch (error) {
            res.status(400).json({ erro : error.message});
        }
    }
}

export default ItemController;