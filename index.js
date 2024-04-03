// console.log(require)
const { saludar, miArray } = require("./functions/saludar.js");
console.log(`🚀 ~ miArray:`, miArray);
console.log(`🚀 ~ saludar:`, saludar);
saludar();
// ----------------------
// destructuring
let obj = { nombre: "osvaldin", apellido: "ramirez" };
// const nombre=obj.nombre;
// const apellido= obj.apellido
const {nombre, apellido}=obj
console.log(`🚀 ~ apellido:`, apellido)
console.log(`🚀 ~ nombre:`, nombre)

