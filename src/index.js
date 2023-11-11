const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); //Necesario para utilizar el motor de pantillas handlebars

const path = require('path');

//Inicializaciones
const app = express();

require('dotenv').config()

//Ajuste del servidor
app.set('port', process.env.PORT || 4500);
app.set('views', path.join(__dirname,'views')); //configuracion de ruta donde se encuentran las vistas

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', // Configuracion de la ruta donde se encuentran las vistas
    layoutsDir: path.join(app.get('views'),'layouts'), // Configuracion de la ruta de los layouts
    
    exphbs: '.hbs'// Configura la extensión que tendran los archivos HandleBars
}));

app.set('view engine', '.hbs');// Configuracion para ejecutar el motor de plantillas

app.use(morgan('dev')); // Configurando el middleware morgan para visualizar que esta llegando al servidor

app.use(express.urlencoded({extended: false})); // Sirve para poder aceptar datos desde formularios


//Configuración de rutas
app.use(require('./routes')); //Automaticamente Nodo buscara el index del modulo
app.use('/estudiantes',require('./routes/estudiantes')); // Configuracion de ruta para estudiantes
// Archivos publicos (aca se coloca todo el código al cual el navegador puede acceder)
app.use(express.static(path.join(__dirname, 'public')));



//Iniciar el servidor 
app.listen(app.get('port'), () =>{
    console.log('Servidor inciado en el puerto : ', app.get('port'));
});