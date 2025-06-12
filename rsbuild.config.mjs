import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/main.jsx", // Cambiado a "index" para generar index.html
    },
  },
  html: {
    template: "./src/index.html", // Ruta corregida
    filename: "index.html" // ¡Crucial para Vercel!
  },
  tools: {
    swc: {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
        },
        transform: {
          react: {
            runtime: "automatic",
            development: process.env.NODE_ENV === "development",
          },
        },
      },
      env: {
        targets: [
          "chrome >= 87",
          "edge >= 88",
          "firefox >= 78",
          "safari >= 14",
        ],
      },
    },
  },
});