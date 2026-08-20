const http = require('http');
const hostname = '0.0.0.0'; 
const port = 3000;

http.createServer((req, res) => res.end('Ok')).listen(port, hostname, () => {
    console.log(`Servidor rodando na porta ${port}`);
});