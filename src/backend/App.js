import express from 'express';
import ClienteRoute from './routes/ClienteRoute.js';
import UsuarioRoute from './routes/UsuarioRoute.js';
import RestauranteRoute from './routes/RestauranteRoute.js';
import EntregadorRoute from './routes/EntregadorRoute.js';
import ItemRoute from './routes/ItemRoute.js';
import PedidoRoute from './routes/PedidoRoute.js';
import ItemPedidoRoute from './routes/ItemPedidoRoute.js';

const app = express();

app.use(express.json());
app.use('/clientes', ClienteRoute);
app.use('/usuario', UsuarioRoute);
app.use('/restaurante', RestauranteRoute);
app.use('/entregador', EntregadorRoute);
app.use('/item', ItemRoute);
app.use('/pedido', PedidoRoute);
app.use('/item_pedido', ItemPedidoRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000.");
});

export default app;