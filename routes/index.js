// index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido</h1>
    <p>Hora actual: ${req.horaActual}</p>
    <form action="/endroute" method="GET">
      <button type="submit">Ir a Endroute</button>
    </form>
  `);
});

module.exports = router;
