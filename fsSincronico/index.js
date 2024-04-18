const {
  readFileSync,
  writeFileSync,
  appendFileSync,
  statSync,
} = require("node:fs");

// const algo = require("../package.json");
// console.log(`🚀 ~ algo:`, algo)
// console.log(`🚀 ~ fs:`, readFileSync)

function read(param) {
  try {
    const data = readFileSync(`./${param}`, "utf-8");
    console.log(`🚀 ~ read ~ data:`, data);
  } catch (error) {
    console.log(`🚀 ~ read ~ error:`, error);
  }
}

function write(file, text) {
  try {
    const data = writeFileSync(`./${file}`, text);
    console.log(`🚀 ~ write ~ data:`, data);
  } catch (error) {
    console.log(`🚀 ~ write ~ error:`, error);
  }
}

function appen(path, text) {
  try {
    const data = appendFileSync(`./${path}`, `\n${text}`);
    console.log(`🚀 ~ appen ~ data:`, data);
  } catch (error) {
    console.log(`🚀 ~ appen ~ error:`, error);
  }
}

// read("README.md");
// // write("README.md", "hola mundo")
//  appen("README.md", "hola chayane")
// read("README.md");

function stat(param) {
  try {
    const stats = statSync(param);
    console.log(`🚀 ~ stat ~ stats:`, stats);
  } catch (error) {
    console.log(`🚀 ~ stat ~ error:`, error);
  }
}

stat("./package.json");
