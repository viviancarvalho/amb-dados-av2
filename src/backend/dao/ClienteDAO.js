import pool from '../../configDB.js';
import ClienteModel from '../model/ClienteModel.js';

class ClienteDAO {

    static async inserirCliente(cliente) {
        try {
            const sql = `INSERT INTO Cliente (nome, cpf, endereco, telefone) VALUES (?, ?, ?, ?)`;
            const values = [cliente.getNome(), cliente.getCpf(), cliente.getEndereco(), cliente.getTelefone()];

            const [rows] = await pool.query(sql, values);

            cliente.setClienteID(rows.insertId);
            
            return cliente;

        } catch (error) {
            console.error("Erro ao inserir cliente: ", error);
            throw error;
        }
    }

    static async listarTodosClientes() {
        try {
            const sql = `SELECT * FROM Cliente`;
            const [rows] = await pool.query(sql);

            if (rows.length == 0) {
                throw new Error("Nenhum cliente foi encontrado.");
            }

            return rows.map(row => {
                const cliente = new ClienteModel(row.ClienteID, row.cpf, row.nome, row.endereco, row.telefone);
                cliente.setClienteID(row.ClienteID);

                return cliente;
            });
            
        } catch (error) {
            console.error("Erro ao listar clientes: ", error);
            throw error;
        }
    }

    static async atualizarCliente(cliente) {
        try {
            const sql = `UPDATE Cliente SET nome = ?, cpf = ?, endereco = ?, telefone = ? WHERE ClienteID = ?`;
            const values = [cliente.getNome(), cliente.getCpf(), cliente.getEndereco(), cliente.getTelefone(), cliente.getClienteID()];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum cliente foi atualizado");
            }

            return cliente;

        } catch (error) {
            console.error("Erro ao atualizar cliente: ", error);
            throw error;
        }
    }

    static async deletarCliente(clienteID) {
        try {
            const sql = `DELETE FROM Cliente WHERE ClienteID = ?`;
            const [rows] = await pool.query(sql, [clienteID]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum cliente foi deletado.");
            }

            return true;

        } catch (error) {
            console.error("Erro ao deletar cliente: ", error);
            throw error;
        }
    }

    static async buscarClientePorID(id) {
        try {
            const sql = `SELECT * FROM Cliente WHERE ClienteID = ?`;
            const [rows] = await pool.query(sql, [id]);

            if (rows.length == 0) {
                throw new Error("Nenhum cliente foi encontrado.");
            }

            const row = rows[0];
            
            const cliente = new ClienteModel(row.nome, row.cpf, row.endereco, row.telefone);
            cliente.setClienteID(row.ClienteID);

            return cliente;

        } catch (error) {
            console.error("Erro ao buscar cliente: ", error);
            throw error;
        }
    }

    static async buscarClientePorCpf(cpf) {
        try {
            const sql = `SELECT * FROM Cliente WHERE cpf = ?`;
            const [rows] = await pool.quer(sql, [cpf]);

            if (rows.length == 0) {
                throw new Error("Nenhum cliente foi encontrado.");
            }

            const row = rows[0];

            const cliente = new ClienteModel(row.nome, row.cpf, row.endereco, row.telefone);
            cliente.setClienteID(row.ClienteID);

            return cliente;

        } catch (error) {
            console.error("Erro ao buscar cliente: ", error);
            throw error;
        }
    }
}

export default ClienteDAO;