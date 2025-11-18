import pool from '../../configDB.js';
import PedidoModel from "../model/PedidoModel.js";

class PedidoDAO {

    static async inserirPedido(pedido) {
        try {
            const sql = `INSERT INTO Pedido (ClienteID, RestauranteID, EntregadorID) VALUES (?, ?, ?)`;
            const values = [pedido.getClienteID(), pedido.getRestauranteID(), pedido.getEntregadorID()];

            const [rows] = await pool.query(sql, values);

            pedido.setPedidoID(rows.insertId);

            return pedido;

        } catch (error) {
            console.error("Erro ao inserir Pedido:", error);
            throw error;
        }
    }

    static async listarTodosPedidos() {
        try {
            const sql = `SELECT * FROM Pedido`;
            const [rows] = await pool.query(sql);

            if (rows.length == 0) {
                throw new Error("Nenhum pedido foi encontrado.");
            }

            return rows.map(row => {
                const pedido = new PedidoModel(row.ClienteID, row.RestauranteID, row.EntregadorID);

                pedido.setValorTotal(row.valor_total);
                pedido.setStatus(row.status);
                pedido.setPedidoID(row.PedidoID);

                return pedido;
            });

        } catch (error) {
            console.error("Erro ao listar pedidos:", error);
            throw error;
        }
    }

    static async listarPedidoPorClienteCpf(cpf) {
        try {
            const sql = `SELECT * FROM Pedido p JOIN Cliente c ON p.ClienteID = c.ClienteID WHERE c.cpf = ?`;
            const [rows] = await pool.query(sql, [cpf]);

            if (rows.length == 0) {
                throw new Error("Nenhum pedido foi encontrado para esse cliente.");
            }

            return rows.map(row => {
                const pedido = new PedidoModel(row.ClienteID, row.RestauranteID, row.EntregadorID);
                
                pedido.setStatus(row.status);
                pedido.setValorTotal(row.valor_total);
                pedido.setPedidoID(row.PedidoID);

                return pedido;
            });

        } catch (error) {
            console.error("Erro ao listar pedidos por cliente:", error);
            throw error;
        }
    }

    static async atualizarPedidoDataHora(id, data_hora) {
        try {
            const sql = `UPDATE Pedido SET data_hora = ? WHERE PedidoID = ?`;
            const values = [data_hora, id];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum pedido foi atualizado.");
            }

            return pedido;

        } catch (error) {
            console.error("Erro ao atualizar pedido:", error);
            throw error;
        }
    }

    static async atualizarStatusPedido(id, status) {
        try {
            const sql = `UPDATE Pedido SET status = ? WHERE PedidoID = ?`;
            const values = [status, id];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum pedido foi atualizado.");
            }

        } catch (error) {
            console.error("Erro ao atualizar status do pedido:", error);
            throw error;
        }
    }

    static async deletarPedido(id) {
        try {
            const sql = `DELETE FROM Pedido WHERE PedidoID = ?`;
            const [rows] = await pool.query(sql, [id]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum pedido foi deletado.");
            }

            return true;
            
        } catch (error) {
            console.error("Erro ao deletar pedido:", error);
            throw error;
        }
    }
}

export default PedidoDAO;