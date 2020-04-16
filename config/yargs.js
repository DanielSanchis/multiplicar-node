const opciones = {
    base: {
        demand: true //parametro obligatiorio
            ,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 //valor por defecto
    }

}

const argv = require('yargs')
    //lo que hacemos es mostrar la ayuda de los parametros que se puede utilizar
    //el primer comando es el parámetro que se puede usar, el segundo una descripción
    //, el tercero argumento es un objeto
    .command('listar', 'Imprime en consola la tabla de multiplicar.', opciones)
    .command('Crear', 'Crea el fichero de la tabla de multiplicar.', opciones)
    .help()
    .argv;

module.exports = {
    argv
}