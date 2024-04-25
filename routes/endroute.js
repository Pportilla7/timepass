// endroute.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a Endroute</h1>
    <p>Estás en la página final</p>
  `);
});

module.exports = router;
