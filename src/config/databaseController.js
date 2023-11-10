const mysql = require('mysql2');
const { promisify } = require('util');
const { database } = require('./keys');
const { CONSTANTS } = require('../utils/utils');
const { error } = require('console');

const pool = mysql.createPool(database); //Se creen el pool de conexiones

//Iniciar la conexion de la base de datos
pool.getConnection((error, conexion)=>{
    if(error){
        switch(error.code){
            //Indica que la conexion con la base de datos esta perdida
            case CONSTANTS.PROTOCOLO_CONNECTION_LOST:
                console.error('DATABASE CONNECTION WAS CLOSED');
            break;
            case CONSTANTS.ER_CON_COUNT_ERROR:
            console.error('DATABASE HAS TO MANY CONNECTIONS');
            break;
            case CONSTANTS.ECONNREFUSED:
                console.error('DATABASE CONNECTION WAS REFUSED');
            break;
            case CONSTANTS.ER_ACCESS_DENIED_ERROR:
                console.error('ACCESS DENIED FOR USER');
            break;
            default:
                console.error('ERROR DE BASE DE DATOS NO ENCONTRADA');
            break;
        }
    }
    if(conexion){
        console.log('CONEXION ESTABLECIDA CON LA BASE DE DATOS');
        conexion.release();
    }
    return;
});

//configurando PROMISIY para permitir en cada consulta un async/await (promesas)
pool.query = promisify(pool.query);

module.exports = pool;