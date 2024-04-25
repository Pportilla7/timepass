// validarHora.js
const validarHora = (req, res, next) => {
  const hora=req.horaActual.split(':')[0]
  console.log(hora)
  if (hora >=18 && hora < 24) {
    next(); // Continuar si la hora es válida
  } else {
    // Mostrar mensaje de error si la hora no es válida
    res.status(403).send("Aún no son las 12 de la mañana");
  }
};

module.exports = validarHora;
