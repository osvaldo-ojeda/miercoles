function oneProperty(array, str) {
  //   const property = [];
  //   const obj = {};
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index][str];
  //     // console.log(`🚀 ~ oneProperty ~ element:`, element)
  //     obj[str] = element;
  //     property.push(obj);
  //     //     property.push({ [str]: element });
  //   }
  // --------------------
  //   const property = [];
  //   array.forEach((element) => property.push({ [str]: element[str] }));
  //   console.log(`🚀 ~ oneProperty ~ property:`, property);
  // ---------------------------
  //   const property = array.map((element) => {
  //     return {
  //       [str]: element[str],
  //     };
  //   });
  //   const property = array.map((element) => ({ [str]: element[str] }));
  //   console.log(`🚀 ~ oneProperty ~ property:`, property);
  // ---------------------------
  const property = array.reduce((acumulador, element) => {
    acumulador.push({ [str]: element[str] });
    return acumulador;
  },[]);
  console.log(`🚀 ~ oneProperty ~ property:`, property);
}

module.exports = oneProperty;
