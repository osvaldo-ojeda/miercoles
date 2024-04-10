function processStudents(array) {
  //   const filtrado = array.filter((element) => element.curso === "Primero");
  //   //   console.log(`🚀 ~ processStudents ~ filtrado:`, filtrado);
  //   const trans = filtrado.map((element) => element.nombre);
  //   console.log(`🚀 ~ processStudents ~ trans:`, trans);
  //   const orden = trans.sort();
  //   console.log(`🚀 ~ processStudents ~ orden:`, orden);
  const process = array
    .filter((element) => element.curso === "Primero")
    .map((element) => element.nombre)
    .sort();
  console.log(`🚀 ~ processStudents ~ process:`, process);
}

module.exports = processStudents;
