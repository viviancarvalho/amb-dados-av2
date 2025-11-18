import ItemDAO from "../dao/ItemDAO.js";
import ItemDTO from "../dto/ItemDTO.js";

class ItemService {
    static async criarItem(itemDTO) {
        if (!itemDTO.getRestauranteID()) {
            throw new Error("Id do restaurante inválido.");
        }
        if (!itemDTO.getNome() || itemDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!itemDTO.getDescricao() || itemDTO.getDescricao().length > 50) {
            throw new Error("Descrição inválida.");
        }
        if (itemDTO.getPreco() === undefined || itemDTO.getPreco() === null || isNaN(itemDTO.getPreco()) || itemDTO.getPreco() < 0) {
            throw new Error("Preço inválido.");
        }

        const item = itemDTO.toModel();
        const salvo = ItemDAO.inserirItem(item);

        return ItemDTO.toDTO(salvo);
    }

    static async listarTodosItens() {
        const lista = ItemDAO.listarTodosItens();

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum item foi encontrado.");
        }

        return lista.map(l => ItemDTO.toDTO(l));
    }

    static async listarItensPorRestaurante(restauranteID) {
        if (!restauranteID) {
            throw new Error("Id do restaurante inválido.");
        }

        const lista = ItemDAO.listarItensPorRestaurante(restauranteID);

        if (!lista || lista.length === 0) {
            throw new Error("Nenhum item foi encontrado.");
        }

        return lista.map(l => ItemDTO.toDTO(l));
    }

    static async atualizarItem(itemDTO) {
        if (!itemDTO.getNome() || itemDTO.getNome().length > 50) {
            throw new Error("Nome inválido.");
        }
        if (!itemDTO.getDescricao() || itemDTO.getDescricao().length > 50) {
            throw new Error("Descrição inválida.");
        }
        if (itemDTO.getPreco() === undefined || itemDTO.getPreco() === null || isNaN(itemDTO.getPreco()) || itemDTO.getPreco() < 0) {
            throw new Error("Preço inválido.");
        }

        const item = itemDTO.toModel()
        const atualizado = ItemDAO.atualizarItem(item);

        return ItemDTO.toDTO(atualizado);
    }

    static async deletarItem(id) {
        if (!id) {
            throw new Error("Id inválido.");
        }

        return ItemDAO.deletarItem(id);
    }
}

export default ItemService;