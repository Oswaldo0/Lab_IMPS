const pool = require('../config/databaseController');

module.exports = {
    //Consulta para obtener todos los estudiantes
    obtenerTodosLosEstudiantes: async() =>{
        try{
            const result = await pool.query('SELECT * FROM estudiantes');
            return result;
        }
        catch(error){
            console.error('OCURRIO UN PROBLEMA AL CONSULTAR LA LISTA ESTUDIANTES : ',   error);
        }
    },
    // Eliminar un estudiante
eliminarEstudiante: async(idestudiante) => {
    try{
    const result = await pool.query('DELETE FROM estudiantes WHERE idestudiante = ?', [idestudiante]);
    return result.affectedRows > 0;
    }catch(error){
    console.error('Erro al eliminar el registro', error);
    }
    },
    //Agregar estudiante
    agregarNuevoEstudiante: async(idestudiante) =>{
        try{
            const result =await pool.query('INSERT INTO estudiantes (idestudiante, nombre, apellido, email, idcarrera, usuario) value(?,?,?,?,?,?)', [idestudiante,nombre,apellido,email,idcarrera,carrera]);
            return result.affectedRows>0;

        }catch(error){
            console.error('OCURRIO UN ERROR AL CREAR UN NUEVO ESTUDIANTE');
        }
    },
    //Actualizar estudiante
    actualizarEstudiante : async(idestudiante, nombre, apellido, email, idecarrera,carrera)=>{
        try{
            const result = await pool.query('UPDATE estudiantes SET idestudiantes=?, nombre=?, apellido=?, apellido=?, idcarrera=?, carrera=? WHERE=idestudiante', [idestudiante, nombre,apellido,email,idecarrera,carrera]);
            return result.affectedRows>0;
        }catch(error){
            console.error('No se pudo actualizar el registro')
        }
    }

    
}