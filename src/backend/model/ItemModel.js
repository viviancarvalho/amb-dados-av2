class ItemModel {
    #itemID;
    #restauranteID;
    #nome;
    #descricao;
    #preco;
    
    constructor(restauranteID, nome, descricao, preco) {
        this.#restauranteID = restauranteID;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#preco = preco;
    }

    getItemID() {
        return this.#itemID;
    }
    setItemID(value) {
        this.#itemID = value;
    }

    getRestauranteID() {
        return this.#restauranteID;
    }
    setRestauranteID(value) {
        this.#restauranteID = value;
    }

    getNome() {
        return this.#nome;
    }
    setNome(value) {
        this.#nome = value;
    }

    getDescricao() {
        return this.#descricao;
    }
    setDescricao(value) {
        this.#descricao = value;
    }

    getPreco() {
        return this.#preco;
    }
    setPreco(value) {
        this.#preco = value;
    }
}

export default ItemModel;