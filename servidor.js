const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8000; 

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ nombre: 'Jesus David Valencia Ramirez', mensaje: 'pro talento colombia cohorte 18😍' }));
});

server.listen(port, host, () => {
  console.log(chalk.green(`Servidor en funcionamiento en http://${host}:${port}`));
});
