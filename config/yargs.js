const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Muestra la lista de tareas por hacer o terminadas', {
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv,
}