// console.log(require)
const { saludar, miArray } = require("./functions/saludar.js");
const numeroMaximo = require("./functions/numeroMaximo.js");
const sumarArray = require("./functions/sumarArray.js");
const abbrevName = require("./functions/abbrevName.js");

// console.log(`🚀 ~ miArray:`, miArray);
// console.log(`🚀 ~ saludar:`, saludar);
// saludar();
// ----------------------
// destructuring
let obj = { nombre: "osvaldin", apellido: "ramirez" };
// const nombre=obj.nombre;
// const apellido= obj.apellido
// const {nombre, apellido}=obj
// console.log(`🚀 ~ apellido:`, apellido)
// console.log(`🚀 ~ nombre:`, nombre)

// ------------------
numeroMaximo([10, 5, 20, 15]);
// ------------------
sumarArray([10, 5, 20, 15]);
// ------------------
abbrevName("chayane shakyra kuka");
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
