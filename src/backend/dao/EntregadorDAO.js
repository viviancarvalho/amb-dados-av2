import pool from '../../configDB.js';
import EntregadorModel from "../model/EntregadorModel.js";

class EntregadorDAO {
    
    static async inserirEntregador(entregador) {
        try {
            const sql = `INSERT INTO Entregador (nome, cpf, telefone, disponivel, veiculo, placa) VALUES (?, ?, ?, ?, ?, ?)`;
            const values = [entregador.getNome(), entregador.getCpf(), entregador.getTelefone(), entregador.getDisponivel(), entregador.getVeiculo(), entregador.getPlaca()];

            const [rows] = await pool.query(sql, values);

            entregador.setEntregadorID(rows.InsertId);

            return entregador;

        } catch (error) {
            console.error("Erro ao inserir entregador: ", error);
            throw error;
        }
    }

    static async listarTodosEntregadores() {
        try {
            const sql = `SELECT * FROM Entregador`;
            const [rows] = await pool.query(sql);

            return rows.map(row => {
                const entregador = new EntregadorModel(row.nome, row.cpf, row.telefone, row.disponivel, row.veiculo, row.placa);
                entregador.setEntregadorID(row.EntregadorID);

                return entregador;
            });

        } catch (error) {
            console.error("Erro ao listar entregadores: ", error);
            throw error;
        }
    }

    static async atualizarEntregador(entregador) {
        try {
            const sql = `UPDATE Entregador SET nome = ?, cpf = ?, telefone = ?, veiculo = ?, placa = ? WHERE EntregadorID = ?`;
            const values = [entregador.getNome(), entregador.getCpf(), entregador.getTelefone(), entregador.getVeiculo(), entregador.getPlaca(), entregador.getEntregadorID()];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum entregador foi atualizado.");
            }

            return entregador;

        } catch (error) {
            console.error("Erro ao atualizar entregador: ", error);
            throw error;
        }
    }

    static async atualizarDisponibilidade(id, disp) {
        try {
            const sql = `UPDATE Entregador SET disponivel = ? WHERE EntregadorID = ?`;
            const values = [disp, id];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum entregador foi atualizado.");
            }

        } catch (error) {
            console.error("Erro ao atualizar disponibilidade: ", error);
            throw error;
        }
    }

    static async deletarEntregador(id) {
        try {
            const sql = `DELETE FROM Entregador WHERE EntregadorID = ?`;
            const [rows] = await pool.query(sql, [id]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum entregador foi deletado.");
            }

            return true;

        } catch (error) {
            console.error("Erro ao excluir entregador: ", error);
            throw error;
        }
    }

    static async buscarEntregadorPorDisponibilidade(disponivel) {
        try {
            const sql = `SELECT * FROM Entregador WHERE disponivel = ?`;
            const [rows] = await pool.query(sql, [disponivel]);

            if (rows.length() == 0) {
                throw new Error("Nenhum entregador foi deletado.");
            }

            return rows.map(row => {
                const entregador = new EntregadorModel(row.nome, row.cpf, row.telefone, row.disponivel, row.veiculo, row.placa);
                entregador.setEntregadorID(row.EntregadorID);

                return entregador;
            });

        } catch (error) {
            console.error("Erro ao buscar entregador por status: ", error);
            throw error;
        }
    }

    static async buscarEntregadorPorCpf(cpf) {
        try {
            const sql = `SELECT * FROM Entregador WHERE cpf = ?`;
            const[rows] = await pool.query(sql, [cpf]);

            if (rows.length() == 0) {
                throw new Error("Nenhum entregador foi encontrado.");
            }

            const row = rows[0];

            const entregador = new EntregadorModel(row.nome, row.cpf, row.telefone, row.disponivel, row.veiculo, row.placa);
            entregador.setEntregadorID(row.EntregadorID);

            return entregador;
            
        } catch (error) {
            console.error("Erro ao buscar entregador por cpf: ", error);
            throw error;
        }
    }

    static async buscarEntregadorPorID(id) {
        try {
            const sql = `SELECT * FROM Entregador WHERE EntregadorID = ?`;
            const[rows] = await pool.query(sql, [id]);

            if (rows.length() == 0) {
                throw new Error("Nenhum entregador foi encontrado.");
            }

            const row = rows[0];

            const entregador = new EntregadorModel(row.nome, row.cpf, row.telefone, row.disponivel, row.veiculo, row.placa);
            entregador.setEntregadorID(row.EntregadorID);

            return entregador;
            
        } catch (error) {
            console.error("Erro ao buscar entregador por id: ", error);
            throw error;
        }
    }
}

export default EntregadorDAO;