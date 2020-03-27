/**
 * tipos de parametros
 * query params: parametros nomeados enviados na rota após o sibolo de "?" (filtros, paginação)
 * Route Params : Parametros utilizados para identifcar recursos (ex: users/1 quando a rota for users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * banco SQLite
 * 
 * Driver: SELECT * FROM users
 * 
 * Query Builder: table('users').select('*').where() ( será essa a utilizada)
 * 
 * knexjs.org para baixar o kanex e o driver sqlite
 */
const express = require('express');
const cors =  require('cors')
const routes = require('./routes');
 
const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(3333);