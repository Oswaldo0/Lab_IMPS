const express = require('express');

//Inicializaciones
const app = express();

require('dotenv').config()

//Ajuste del servidor
app.set('port', process.env.PORT || 4500);

//Configuración de rutas
app.use(require('./routes')); //Automaticamente Nodo buscara el index del modulo

//Iniciar el servidor 
app.listen(app.get('port'), () =>{
    console.log('Servidor inciado en el puerto : ', app.get('port'));
});