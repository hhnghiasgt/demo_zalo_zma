import react from "@vitejs/plugin-react"

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@static": "/src/static",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
    },
  },
}
