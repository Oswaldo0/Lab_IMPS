const express = require('express');
const router = express.Router();
const estudiantesRepository = require('../repositories/EstudianteRepository');

router.get('/', async (request, response) =>{
    const lstEstudiantes = await estudiantesRepository.obtenerTodosLosEstudiantes();
    console.log('Listado : ', lstEstudiantes);

    response.send('Bienvenido a IMPS');
});

module.exports = router;