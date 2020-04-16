const fs = require('fs');
const colors = require('colors')

let crearArchivo = (base, limite = 10) => {
    let texto = "";
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(base + ' No es un número');
        } else {
            for (let i = 1; i <= limite; i++) {
                texto += `${base} x ${i} = ${base * i}\n`;
            }
            fs.writeFile(`tablas/tabla-${base}-al_limite${limite}.txt`, texto, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}-al_limite${limite}.txt`);
                }
            });
        }
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('==========='.green);
    console.log(`tabla del ${base}`.green);
    console.log('==========='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}