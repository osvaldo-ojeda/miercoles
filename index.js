function uno() {
  return "uno";
}
function dos() {
  setTimeout(() => {
    console.log("dos");
    return 2;
  }, 0);
  return 2;
}

function tres(param) {
  return new Promise((resolve, reject) => {
    if (param === "tres") {
      resolve("soy tres");
    } else {
      reject("Error");
    }
  });
}

function cuatro() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}
function cinco() {
  return "cinco";
}

console.log(uno());
console.log(dos());

tres("4")
  .then((res) => console.log(res))
  .catch((er) => console.log(er))
  .finally(f=>console.log("final de la rpomesa 3"))

cuatro()
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(error=>console.log(error))
  .finally(()=>console.log("final de la promesa 5"))
console.log(cinco());
