// Importa o módulo mysql2 com suporte a promises
import mysql from 'mysql2/promise';

// Cria um "pool" de conexões (é tipo uma fila de conexões abertas)
const pool = mysql.createPool({
  host: 'localhost',       // endereço do servidor MySQL
  user: 'root',            // seu usuário MySQL
  password: '570693',            // sua senha MySQL (se tiver)
  database: 'sistema_delivery' // o nome do banco que você criou
});

// Exporta o pool pra usar nos DAOs
export default pool;
