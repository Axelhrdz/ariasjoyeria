const fs = require("fs");
const path = require("path");

const productosDir = path.resolve(__dirname, "assets/data/productos");
const outputFile = path.resolve(productosDir, "productos.json");

// Verifica que la carpeta existe
if (!fs.existsSync(productosDir)) {
  console.error("❌ No se encontró la carpeta de productos:", productosDir);
  process.exit(1);
}

// Lee los archivos .md en la carpeta
const archivos = fs.readdirSync(productosDir)
  .filter(file => file.endsWith(".md"))
  .map(file => `/assets/data/productos/${file}`); // Usa ruta relativa desde raíz

// Escribe el JSON
try {
  fs.writeFileSync(outputFile, JSON.stringify(archivos, null, 2));
  console.log("✅ productos.json generado con éxito:");
  console.log(archivos);
} catch (err) {
  console.error("❌ Error al escribir productos.json:", err);
  process.exit(1);
}
