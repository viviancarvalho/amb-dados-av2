import pool from '../../configDB.js';
import ItemModel from "../model/ItemModel.js";

class ItemDAO {
    static async inserirItem(item) {
        try {
            const sql = `INSERT INTO Item (RestauranteId, nome, descricao, preco) VALUES (?, ?, ?, ?)`;
            const values = [item.getRestauranteID(), item.getNome(), item.getDescricao(), item.getPreco()];

            const [rows] = await pool.query(sql, values);

            item.setItemID(rows.insertId);

            return item;

        } catch (error) {
            console.error("Erro ao inserir item:", error);
            throw error;
        }
    }

    static async listarTodosItens() {
        try {
            const sql = `SELECT * FROM Item`;
            const [rows] = await pool.query(sql);

            if (rows.length == 0) {
                throw new Error("Nenhum item foi encontrado.");
            }

            return rows.map(row => {
                const item = new ItemModel(row.RestauranteID, row.nome, row.descricao, row.preco);
                item.setItemID(row.ItemID);

                return item;
            });

        } catch (error) {
            console.error("Erro ao listar itens:", error);
            throw error;
        }
    }

    static async listarItensPorRestaurante(restauranteID) {
        try {
            const sql = `SELECT * FROM Item WHERE RestauranteID = ?`;
            const [rows] = await pool.query(sql, [restauranteID]);

            if (rows.length == 0) {
                throw new Error("Nenhum item foi encontrado.");
            }

            return rows.map(row => {
                const item = new ItemModel(row.RestauranteID, row.nome, row.descricao, row.preco);
                item.setItemID(row.ItemID);

                return item;
            });

        } catch (error) {
            console.error("Erro ao listar itens:", error);
            throw error;
        }
    }

    static async atualizarItem(item) {
        try {
            const sql = `UPDATE Item SET nome = ?, descricao = ?, preco = ? WHERE ItemID = ?`;
            const values = [item.getNome(), item.getDescricao(), item.getPreco(), item.getItemID()];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum item foi atualizado.");
            }

            return item;

        } catch (error) {
            console.error("Erro ao atualizar item:", error);
            throw error;
        }
    }

    static async deletarItem(id) {
        try {
            const sql = `DELETE FROM Item WHERE ItemID = ?`;
            const [rows] = await pool.query(sql, [id]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum item foi deletado.");
            }

            return true;
            
        } catch (error) {
            console.error("Erro ao deletar item:", error);
            throw error;
        }
    }
}

export default ItemDAO;