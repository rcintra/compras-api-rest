const express = require('express');
const bodyParser = require('body-parser');
const routesController = require('./api/index');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/compras').post(routesController.addCompra);
app.route('/compras').get(routesController.getAll);
app.route('/email').post(routesController.getByEmail);
app.route('/delete').post(routesController.deleteCompra);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});