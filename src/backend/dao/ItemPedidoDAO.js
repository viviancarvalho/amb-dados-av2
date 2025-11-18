import pool from '../../configDB.js';
import ItemPedidoModel from '../model/ItemPedidoModel.js';

class ItemPedidoDAO {

    static async inserirItemPedido(ip) {
        try {
            const sql = `INSERT INTO ItemPedido (ItemID, PedidoID, quantidade, preco_unitario) VALUES (?, ?, ?, ?)`;
            const values = [ip.getItemID(), ip.getPedidoID(), ip.getQuantidade(), ip.getPrecoUnitario()];

            const[rows] = await pool.query(sql, values);

            ip.setItemPedidoID(rows.insertId);

            return ip;
            
        } catch (error) {
            console.error("Erro ao inserir Item Pedido: ", error);
            throw error;
        }
    }

    static async listarItensDeUmPedido(pedidoId) {
        try {
            const sql = `SELECT * FROM ItemPedido WHERE PedidoID = ?`;

            const [rows] = await pool.query(sql, [pedidoId]);

            if (rows.length == 0) {
                throw new Error("Nenhum item foi encontrado.");
            }

            return rows.map(row => {
                const ip = new ItemPedidoModel(row.ItemID, row.PedidoID, row.quantidade, row.preco_unitario);
                ip.setItemPedidoID(row.ItemPedidoID);

                return ip;
            });

        } catch (error) {
            console.error("Erro ao listar itens do pedido: ", error);
            throw error;
        }
    }

    static async atualizarItemPedido(itemPedidoDTO) {
        try {
            const sql = `UPDATE ItemPedido SET quantidade = ?, preco_unitario = ? WHERE ItemPedidoID = ?`;
            const values = [itemPedidoDTO.getQuantidade(), itemPedidoDTO.getPrecoUnitario(), itemPedidoDTO.getItemPedidoID()];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows === 0) {
                throw new Error("Nenhum item de pedido foi atualizado.");
            }

            return true;
        } catch (error) {
            console.error("Erro ao atualizar item do pedido:", error);
            throw error;
        }
    }

    static async atualizarQuantidade(id, qtd) {
        try {
            const sql = `UPDATE ItemPedido SET quantidade = ? WHERE ItemPedidoID = ?`;
            const values = [qtd, id];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhuma quantidade foi atualizada.");
            }

        } catch (error) {
            console.error("Erro ao atualizar quantidade: ", error);
            throw error;
        }
    }

    static async deletarItemDePedido(id) {
        try {
            const sql = `DELETE FROM ItemPedido WHERE ItemPedidoId = ?`;

            const [rows] = await pool.query(sql, [id]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhuma item foi deletado.");
            }

            return true;

        } catch (error) {
            console.error("");
            throw error;
        }
    }
}

export default ItemPedidoDAO;