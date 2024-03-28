// // tipos de datos

// // datos primitivos
// // string, number,bigint, boolean, undefined, symbol, null,
// // String
// let str = "camilo";
// console.log("🚀 ~ str: ", str);
// console.log(`🚀 ~ str:`, typeof str);

// // number
// let num = 2;
// let num2 = 2;
// console.log(`🚀 ~ num:`, num);
// console.log(`🚀 ~ num:`, num === num2);
// console.log(`🚀 ~ num:`, typeof num);
// // BigInt
// let bgInt = 100n;
// console.log(`🚀 ~ bgInt:`, bgInt);
// console.log(`🚀 ~ bgInt:`, typeof bgInt);

// // let bool
// let bl = true; //false
// console.log(`🚀 ~ bl:`, bl);
// console.log(`🚀 ~ bl:`, typeof bl);

// // symbol es unico en js
// let sy = Symbol(2);
// let syb = Symbol(2);
// console.log(`🚀 ~ syb:`, syb);
// console.log(`🚀 ~ syb:`, typeof syb);
// // console.log(`🚀 ~ syb:`, syb==sy)

// // undefined
// let und = undefined;
// console.log(`🚀 ~ und:`, und);
// console.log(`🚀 ~ und:`, typeof und);

// //null
// let nl = null;
// console.log(`🚀 ~ nl:`, nl);
// console.log(`🚀 ~ nl:`, typeof nl);

// // datos complejos
// // objetos literales
// const obj = {
//   nombre: "Osvaldito",
//   apellido: "Ojeda",
// };
// let lastName = "apellido";
// console.log(`🚀 ~ obj:`, obj);
// console.log(`🚀 ~ obj dotnotation:`, obj.nombre);
// console.log(`🚀 ~ obj bracketNotation:`, obj["apellido"]);
// obj[lastName] = "Ojedaaaaaa";
// console.log(`🚀 ~ obj bracketNotation:`, obj[lastName]);
// console.log(`🚀 ~ obj:`, obj);

// // obj=33
// // console.log(`🚀 ~ obj:`,obj);
// console.log(`🚀 ~ obj:`, typeof obj);

// // arrays
// const arr = [1, 2, "Hola", "Mundo", true];
// console.log(`🚀 ~ arr:`, arr);
// console.log(`🚀 ~ arr:`, arr[2]);
// console.log(`🚀 ~ arr:`, typeof arr);

// // new Date
// const newDate = new Date();
// console.log(`🚀 ~ newDate:`, newDate);
// console.log(`🚀 ~ newDate:`, typeof newDate);

// const date = Date();
// console.log(`🚀 ~ date:`, date);
// console.log(`🚀 ~ date:`, typeof date);

// funciones
// saludar()
function saludar(nombre, apellido) {
  console.log(`🚀 Hola`);
  return `hola ${nombre}  ${apellido}`;
}
// saludar()
// console.log(`🚀 ~ saludar ~ saludar:`, saludar());
// console.log(`🚀 ~ saludar ~ saludar:`, saludar);
// console.log(`🚀 ~ saludar ~ saludar:`, typeof saludar);
// let nombre = "Canela";
// let apellido = "ojeda";
// let saludo = saludar(nombre, apellido);
// console.log(`🚀 ~ saludo:`, saludo);

// function data(...params) {
//   console.log(params);
// }
// data("osval", "chayane", 33, () => console.log(hola));

// arrow functions
// suma(9,9)
const suma = (x, y) => {
  return x + y;
};
// console.log(`🚀 ~ suma:`, suma(3, 7));

// var nombre="pedlo"
const nombre="camilo"
function mostrarNombre() {
  let nombre = "osval";
  console.log(`🚀 ~ mostrarNombre ~ nombre:`, nombre)
}
console.log(`🚀 nombre:`, nombre);
mostrarNombre();
console.log(`🚀 nombre:`, nombre);

