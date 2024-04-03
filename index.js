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
// const nombre="camilo"
function mostrarNombre() {
  let nombre = "osval";
  console.log(`🚀 ~ mostrarNombre ~ nombre:`, nombre);
}
// console.log(`🚀 nombre:`, nombre);
// mostrarNombre();
// console.log(`🚀 nombre:`, nombre);
// ----------------------------------------------------

// copias de objetos y Arrays

let nombre = "Chayane";
let nick = nombre;
nick = "Elmer";
// console.log(`🚀 ~ nick:`, nick);
// console.log(`🚀 ~ nombre:`, nombre);

const data = {
  nombre: "shakira",
  apellido: "Mebarak",
  hobbies: { hobbie1: "cantar" },
};
// const userData = data;
// userData.nombre = userData.nombre.toUpperCase();
// userData.edad = 47;
// console.log(`🚀 ~ data:`, data);
// console.log(`🚀 ~ userData:`, userData);

// copia a mano
// const handCopy = {
//   nombre: data.nombre,
//   apellido: data.apellido,
// };
// console.log(`🚀 ~ handCopy:`, handCopy)
// console.log(`🚀 ~ data:`, data);

// copia con spread operator
const spreadCopy = { ...data };
spreadCopy.apellido = spreadCopy.apellido.toUpperCase();
spreadCopy.hobbies = "cantar";
// console.log(`🚀 ~ data:`, data);
// console.log(`🚀 ~ spreadCopy:`, spreadCopy);

// sliceCopy
const arr = [1, 2, 3, 4];
// const arr2=arr
const arr2 = arr.slice();
arr2[0] = 5;
// console.log(`🚀 ~ arr2:`, arr2)
// console.log(`🚀 ~ arr:`, arr)

function slice(array) {
  const length = array.length;
  const newArray = [];
  for (let index = 0; index < length; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
const abc = ["a", "b", "c"];
const myArray = slice(abc);
myArray[0] = "x";
// console.log(`🚀 ~ myArray:`, myArray)
// console.log(`🚀 ~ abc:`, abc)

// ------------------
// deep copy
const user = [1, { name: "Juan" }, { date: new Date() }];
// const userSpread=[...user]
// userSpread[0]=2
// userSpread[1].name="JUAN"
// console.log(`🚀 ~ userSpread:`, userSpread)
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy[1].name = "Luis";
// console.log(`🚀 ~ jsonCopy:`, jsonCopy);
// console.log(`🚀 ~ user:`, user);

// structuredClone
const structuredCopy=structuredClone(user)
structuredCopy[1].name="MARIA"
console.log(`🚀 ~ structuredCopy:`, structuredCopy)
console.log(`🚀 ~ user:`, user);