const { Router } = require('express');

const controlePredios = require('./controladores/predios');

const rotas = new Router();

rotas.route('/predios')
     .get(controlePredios.getPredios)
     .post(controlePredios.addPredio)
     .put(controlePredios.updatePredio)

rotas.route('/predios/:codigo')
     .get(controlePredios.getPredioPorCodigo)
     .delete(controlePredios.deletePredio)

module.exports = rotas;