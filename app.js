const express = require('express');

const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

const indexRoute = require('./routes/index');
const endRoute = require('./routes/endroute');

const app = express();

app.use(horaMiddleware);

app.use('/', indexRoute);

app.use('/endroute', validarHora, endRoute);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
