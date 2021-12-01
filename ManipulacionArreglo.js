// const heroe = {
//   nombre: "Robinson",
//   apeliido: "Claveria",
//   getNombre: function () {
//     return `${this.apeliido} ${this.nombre}`;
//   },
// };

// const { nombre, apeliido } = heroe;

// // desestructuracion
// function imprimeName({ nombre, apeliido }) {
//   console.log(nombre, apeliido);
// }

// imprimeName(heroe);

// //return implicito
// const saludar = () => "hola mundo";
// console.log(saludar());

// //una funcion que se manda como argumento a otra funcion
// const getUserId = (id, callback) => {
//   const user = {
//     id,
//     nombre: "Robinson",
//   };

//   setTimeout(() => {
//     callback(user);
//   }, 1500);
// };

// getUserId(10, (usuario) => {
//   console.log(usuario.id);
//   console.log(usuario.nombre);
// });

const salarios = [
  {
    id: 1,
    salario: 1000000,
  },
  {
    id: 2,
    salario: 2000000,
  },
];

// getSalary(id, (err, salario) => {
//   if (err) {
//     console.log("ERRORRR");
//     return console.log(err);
//   } else {
//     console.log("SALARIO EXISTE");
//     console.log(salario);
//   }
// });
const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = salarios.find((s) => s.id === id)?.salario;

    salary ? resolve(salary) : reject(`el id ${id} ingresado no existe`);
  });
};

var id = 1;

getSalary(id)
  .then((salary) => console.log(salary))
  .catch((err) => console.log(err));

// AWAIT ASYNC

const getInformacion = async () => {
  return "hola";
};

getInformacion()
    .then((msg) => console.log(msg));


