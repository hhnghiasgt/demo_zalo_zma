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
        dedupe: ["zmp-core", "zmp-framework", "zmp-react", "react", "react-dom"],
    },
    build: {
        outDir: "www",
        emptyOutDir: true,
        polyfillModulePreload: false,
        rollupOptions: {
            output: {
                entryFileNames: "assets/app.js",
                chunkFileNames: "assets/chunk.js",
                assetFileNames: "assets/app.[ext]"
            }
        }
    },
})