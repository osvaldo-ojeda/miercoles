import { createServer } from "node:http";

const server = createServer((peticion, respuesta) => {
     console.log(`🚀 ~ server ~ peticion:`, peticion)
     // console.log(`🚀 ~ server ~ respuesta:`, respuesta)
     respuesta.end("<h1>que onda</h1>")

})
// console.log(`🚀 ~ server:`, server);

server.listen(8080, () => {
  console.log(`🚀 ~ server.listen ~ 8080:`, 8080);
});
