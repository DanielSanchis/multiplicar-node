/* const argv = require('yargs')
    //lo que hacemos es mostrar la ayuda de los parametros que se puede utilizar
    //el primer comando es el parámetro que se puede usar, el segundo una descripción
    //, el tercero argumento es un objeto
    .command('listar', 'Imprime en consola la tabla de multiplicar.', {
        //parámetros o flags que se pueden introducir
        base: {
            demand: true //parametro obligatiorio
                ,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor por defecto
        }
    })
    .command('Crear', 'Crea el fichero de la tabla de multiplicar.', {
        //parámetros o flags que se pueden introducir
        base: {
            demand: true //parametro obligatiorio
                ,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor por defecto
        }
    })
    .help()
    .argv; */
const argv = require('./config/yargs').argv;
const colors = require('colors')
const mult = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        mult.listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        mult.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + `${ archivo }`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}


/*  */