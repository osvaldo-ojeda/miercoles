function sumarArray(array) {
     // const sum=array.reduce((acumulador, value, indiceArray, array)=>acumulador+value, 0)
     const sum=array.reduce((acumulador, value, indiceArray, array)=>acumulador+value)
     console.log(`🚀 ~ sumarArray ~ sum:`, sum)

}

module.exports=sumarArray; 