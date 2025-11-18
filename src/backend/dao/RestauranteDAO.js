import pool from '../../configDB.js';
import RestauranteModel from "../model/RestauranteModel.js";

class RestauranteDAO {

    static async inserirRestaurante(rest) {
        try {
            const sql = `INSERT INTO Restaurante (nome, tipo_cozinha, telefone, endereco, cnpj) VALUES (?, ?, ?, ?, ?)`;
            const values = [rest.getNome(), rest.getTipoCozinha(), rest.getTelefone(), rest.getEndereco(), rest.getCnpj()];

            const [rows] = await pool.query(sql, values);

            rest.setRestauranteID(rows.insertId);

            return rest;
        } catch (error) {
            console.error("Erro ao inserir restaurante:", error);
            throw error;
        }
    }

    static async listarTodosRestaurantes() {
        try {
            const sql = `SELECT * FROM Restaurante`;
            const [rows] = await pool.query(sql);

            if (rows.length == 0) {
                throw new Error("Nenhum restaurante foi encontrado.");
            }

            return rows.map(row => {
                const rest = new RestauranteModel(row.nome, row.tipo_cozinha, row.telefone, row.endereco, row.cnpj);
                rest.setRestauranteID(row.RestauranteID);

                return rest;
            });

        } catch (error) {
            console.error("Erro ao listar restaurantes:", error);
            throw error;
        }
    }

    static async atualizarRestaurante(rest) {
        try {
            const sql = `UPDATE Restaurante SET nome = ?, tipo_cozinha = ?, telefone = ?, endereco = ?, cnpj = ? WHERE RestauranteID = ?`;
            const values = [rest.getNome(), rest.getTipoCozinha(), rest.getTelefone(), rest.getEndereco(), rest.getCnpj(), rest.getRestauranteID()];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum restaurante foi atualizado.");
            }

            return rest;
        } catch (error) {
            console.error("Erro ao atualizar restaurante:", error);
            throw error;
        }
    }

    static async deletarRestaurante(id) {
        try {
            const sql = `DELETE FROM Restaurante WHERE RestauranteID = ?`;
            const [rows] = await pool.query(sql, [id]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum restaurante foi deletado.");
            }

            return true;
        } catch (error) {
            console.error("Erro ao deletar restaurante:", error);
            throw error;
        }
    }

}

export default RestauranteDAO;