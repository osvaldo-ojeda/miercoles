const { error } = require("node:console");
const fs = require("node:fs");

// const readAsync = () => {
//   return fs.promises.readFile("./package.jso", "utf-8");
// };

// readAsync()
//   .then((data) => console.log(JSON.parse(data)))
//   .catch((error) => console.log(error));

const readAsync = async () => {
  try {
    const data = await fs.promises.readFile("./package.json", "utf-8");
    console.log(`🚀 ~ readAsync ~ data:`, data);
    console.log("hola");
  } catch (error) {
    console.log(`🚀 ~ readAsync ~ r:`, error);
  }
};

const statAsync = async () => {
  try {
    const data = await fs.promises.stat("./package.json");
    console.log(`🚀 ~ readAsync ~ data:`, data);
  } catch (error) {
    console.log(`🚀 ~ statAsync ~ error:`, error);
  }
};

// readAsync();
//      .then((data) => console.log(JSON.parse(data)))
//      .catch((error) => console.log(error));
statAsync();
console.log("hola 3")
readAsync();
