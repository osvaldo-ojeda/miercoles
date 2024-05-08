import express from "express";
import moment from "moment";
import url from "url";
import path from "path";
// console.log(`🚀 ~ url:`, url)
const app = express();
let count = 0;

// app.use("/archivo", express.static("public"));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`🚀 ~ import.meta.url:`, import.meta.url);
console.log(`🚀 ~ __filename:`, __filename);
console.log(`🚀 ~ __dirname:`, __dirname);
app.get("/:archivo", (req, res) => {
//   console.log(`🚀 ~ app.get ~ req:`, req)
  const {archivo}= req.params
  res.sendFile(path.join(__dirname, "public", `${archivo}.html`));
});

app.get("/ok", (peticion, respuesta) => {
  respuesta.send("<h1>get ok</h1>");
});
app.post("/ok", (peticion, respuesta) => {
  respuesta.send("<h1>post ok</h1>");
});

app.post("/", (req, res) => {
  res.send("post");
});
app.get("/fecha", (req, res) => {
  //   const date = new Date();
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  res.send({ date });
});
app.get("/count", (req, res) => {
  count++;
  res.send({ count });
});

app.listen(8080, () => {
  console.log("servidor ok");
});
