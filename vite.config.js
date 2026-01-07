import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        port: 3000,
        allowedHosts: ["unpersonifying-kenton-auriscopically.ngrok-free.dev"]
    },
    resolve: {
        alias: {
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@static": "/src/static",
            "@hooks": "/src/hooks",
            "@utils": "/src/utils",
        },
    },
    build: {
    target: "es2015",
    outDir: "www",
    emptyOutDir: true,
    polyfillModulePreload: false,
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "assets/app.js",
      },
    },
  },
})