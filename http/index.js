import { createServer } from "node:http";

const server = createServer((peticion, respuesta) => {
  console.log(`🚀 ~ server ~ peticion:`, peticion);
  // console.log(`🚀 ~ server ~ respuesta:`, respuesta)
  if (peticion.method === "GET" && peticion.url === "/hola") {
    respuesta.end("<h1>Hola</h1>");
  } else {
    respuesta.end("<h1>Que onda?</h1>");
  }
});
// console.log(`🚀 ~ server:`, server);

server.listen(8080, () => {
  console.log(`🚀 ~ server.listen ~ 8080:`, 8080);
});
