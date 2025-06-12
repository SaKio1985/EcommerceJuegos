import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/main.jsx",
    },
  },
  // SECCIÓN AÑADIDA: Configuración de salida crítica
  output: {
    publicPath: "/", // ¡Esto es esencial para Vercel!
    distPath: {
      root: "dist", // Asegura la estructura correcta
    },
    assetPrefix: "/static/", // Prefijo para assets
  },
  // SECCIÓN AÑADIDA: Manejo de assets estáticos
  server: {
    publicDir: {
      name: "public",
      copyOnBuild: true,
    },
  },
  html: {
    template: "./src/index.html",
    filename: "index.html",
    // SECCIÓN AÑADIDA: Inyección correcta de recursos
    inject: "body",
    templateParameters: {
      PUBLIC_PATH: "/",
    },
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
    // SECCIÓN AÑADIDA: Optimización de assets
    rspack: {
      output: {
        filename: "static/js/[name].[contenthash:8].js",
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
        assetModuleFilename: "static/media/[name].[hash][ext]",
      },
    },
  },
});