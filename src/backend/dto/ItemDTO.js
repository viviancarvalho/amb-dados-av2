import ItemModel from '../model/ItemModel.js';

class ItemDTO {
    constructor() {
        this.ItemID = null;
        this.RestauranteID = null;
        this.nome = null;
        this.descricao = null;
        this.preco = null;
    }

    static toDTO(item) {
        const dto = new ItemDTO();

        dto.ItemID = item.getItemID();
        dto.RestauranteID = item.getRestauranteID();
        dto.nome = item.getNome();
        dto.descricao = item.getDescricao();
        dto.preco = item.getPreco();

        return dto;
    }

    toModel() {
        const item = new ItemModel(this.RestauranteID, this.nome, this.descricao, this.preco);
        item.setItemID(this.ItemID);

        return item;
    }

    getItemID() {
        return this.ItemID;
    }
    setItemID(value) {
        this.ItemID = value;
    }

    getRestauranteID() {
        return this.restauranteID;
    }
    setRestauranteID(value) {
        this.restauranteID = value;
    }

    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }

    getDescricao() {
        return this.descricao;
    }
    setDescricao(value) {
        this.descricao = value;
    }

    getPreco() {
        return this.preco;
    }
    setPreco(value) {
        this.preco = value;
    }
}

export default ItemDTO;