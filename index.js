const express = require('express');
const produtoRoutes = require('./Routes/produtos.routes');

const app = express();
const hostname = '0.0.0.0';
const port = 3000;

app.use(express.json());
app.use('/produtos', produtoRoutes);

app.listen(port, hostname, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
