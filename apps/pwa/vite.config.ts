/// <reference types="vitest" />
import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({

   root: __dirname,
   
  cacheDir: "../../node_modules/.vite/apps/pwa",

  server: {
    port: 4200,
    host: "localhost",
  },
  preview: {
    port: 4200,
    host: "localhost",
  },

  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(["*.md"])],

  build: {
    outDir: "../../dist/apps/pwa",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    setupFiles: path.resolve(__dirname, "vitest.setup.mjs"),
    coverage: {
      reportsDirectory: "../../coverage/apps/pwa",
      provider: "v8" as const,
    },
  },
});
