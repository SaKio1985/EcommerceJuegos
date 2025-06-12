// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/main.jsx",
    },
  },
  output: {
    publicPath: "/", 
    distPath: {
      root: "dist",
    },
    // assetPrefix: "/static/", // LÍNEA ELIMINADA: Esta era la causa del problema.
  },
  server: {
    publicDir: {
      name: "public",
      copyOnBuild: true,
    },
  },
  html: {
    template: "./src/index.html",
    filename: "index.html",
    inject: "body",
    templateParameters: {
      PUBLIC_PATH: "/",
    },
  },
  tools: {
    swc: {
      // ... (sin cambios aquí)
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
    rspack: {

      output: {
        filename: "static/js/[name].[contenthash:8].js",
        chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
        assetModuleFilename: "static/media/[name].[hash][ext]",
      },
    },
  },
});