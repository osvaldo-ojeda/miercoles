function abbrevName(str) {
  const iniciales = str
    .split(" ")
    .map((value) => value[0])
    .join(".")
    .toUpperCase();

  console.log(`🚀 ~ abbrevName ~ iniciales:`, iniciales);
}

module.exports = abbrevName;
