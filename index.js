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
async function cinco() {
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const respuesta = await data.json();
    console.log(respuesta);
    //     return respuesta
  } catch (error) {
    console.log(error);
  } finally {
    console.log("final de la promesa 5");
  }
}
function seis() {
  return "seis";
}

console.log(uno());
console.log(dos());

tres("4")
  .then((res) => console.log(res))
  .catch((er) => console.log(er))
  .finally(() => console.log("final de la rpomesa 3"));

cuatro()
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error))
  .finally(() => console.log("final de la promesa 4"));
cinco();
console.log(seis());
