const fs = require("fs");
const colors = require('colors')
const crearFile = async (base, lista = false) => {
    try {
        let salida = "";
        for (let index = 1; index <= 10; index++) {
            salida += `${base} x ${index}=${base * index}\n`;
        }
        if (lista) {
            console.log("================".rainbow);
            console.log("====TABLA DE MULTIPLICAR: ".rainbow, base);
            console.log("================");
            console.log(salida.bgBlue);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

const cliente = [
    {
        id: 1,
        name: "Robinson",
        apell: "Claveria",
    },
];

const buscarClient = async (id) => {
    try {
        const client = cliente.find((c) => c.id === id)?.name;
        return client;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearFile,
    buscarClient,
};
