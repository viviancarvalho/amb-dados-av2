import app from './App.js';
import cors from 'cors';

// HABILITA O CORS
app.use(cors());

// INICIA O SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
