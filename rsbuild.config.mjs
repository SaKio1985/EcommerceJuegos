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
  // SECCIÓN OUTPUT SIMPLIFICADA
  output: {
    publicPath: "/", // Esto es lo único que necesitas para las rutas
    distPath: {
      root: "dist",
    },
  },
  server: {
    publicDir: {
      name: "public",
      copyOnBuild: true,
    },
  },
  html: {
    template: "./src/index.html",
  },
  // HEMOS QUITADO TODA LA SECCIÓN "tools.rspack"
  // Dejaremos que Rsbuild use sus valores por defecto, que son seguros.
});