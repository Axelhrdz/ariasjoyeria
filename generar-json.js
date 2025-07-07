const fs = require("fs");
const path = require("path");

const productosDir = path.join(__dirname, "assets", "data", "productos");
const outputFile = path.join(productosDir, "productos.json");

// Leer todos los archivos .md en la carpeta
const archivos = fs.readdirSync(productosDir)
  .filter(file => file.endsWith(".md"))
  .map(file => `assets/data/productos/${file}`);

// Guardar como JSON
fs.writeFileSync(outputFile, JSON.stringify(archivos, null, 2));

console.log("✅ productos.json generado con éxito:");
console.log(archivos);
