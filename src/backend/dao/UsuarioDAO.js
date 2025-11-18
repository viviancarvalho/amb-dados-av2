import pool from '../../configDB.js';
import UsuarioModel from "../model/UsuarioModel.js";

class UsuarioDAO {

    static async inserirUsuario(usuario) {
        try {
            const sql = `INSERT INTO Usuario (login, senha, tipo) VALUES (?, ?, ?)`;
            const values = [usuario.getLogin(), usuario.getSenha(), usuario.getTipo()];

            const [rows] = await pool.query(sql, values);

            usuario.setUsuarioID(rows.insertId);

            return usuario;

        } catch (error) {
            console.error("Erro ao inserir usuário: ", error)
            throw error;
        }
    }

    static async listarTodosUsuarios() {
        try {
            const sql = `SELECT * FROM Usuario`;

            const [rows] = await pool.query(sql);

            if (rows.length == 0) {
                throw new Error("Nenhum usuário foi encontrado.");
            }

            return rows.map (row =>{
                const usuario = new UsuarioModel(row.login, row.senha, row.tipo);
                usuario.setUsuarioID(row.UsuarioID);

                return usuario;
            });
            
        } catch (error) {
            console.error("Erro ao listar usuários: ", error);
            throw error;
        }
    }

    static async atualizarUsuario(usuario) {
        try {
            const sql = `UPDATE Usuario SET login = ?, senha = ?, tipo = ? WHERE UsuarioID = ?`;
            const values = [usuario.getLogin(), usuario.getSenha(), usuario.getTipo(), usuario.getUsuarioID()];

            const [rows] = await pool.query(sql, values);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum usuário foi atualizado.");
            }

            return usuario;

        } catch (error) {
            console.error("Erro ao atualizar usuário: ", error);
            throw error;
        }
    }

    static async deletarUsuario(usuarioID) {
        try {
            const sql = `DELETE FROM Usuario WHERE UsuarioID = ?`;

            const [rows] = await pool.query(sql, [usuarioID]);

            if (rows.affectedRows == 0) {
                throw new Error("Nenhum usuário foi deletado.");
            }

            return true;

        } catch (error) {
            console.error("Erro ao deletar usuário: ", error);
            throw error;
        }
    }

    static async buscarUsuarioLoginSenha(login, senha) {
        try {
            const sql = `SELECT * FROM Usuario WHERE login = ? and senha = ?`;
            const values = [login, senha];

            const[rows] = await pool.query(sql, values);

            if (rows.length == 0) {
                throw new Error("Nenhum usuário foi encontrado.");
            }

            const row = rows[0];

            const usuario = new UsuarioModel(row.login, row.senha, row.tipo);
            usuario.setUsuarioID(row.UsuarioID);

            return usuario;
            
        } catch (error) {
            console.error("Erro ao buscar usuário.");
            throw error;
        }
    }
}

export default UsuarioDAO;