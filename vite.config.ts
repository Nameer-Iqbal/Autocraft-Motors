import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Avoid OneDrive/AV locks on default .vite cache by using a custom cache dir
  cacheDir: "node_modules/.vite-cache",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          react: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-dropdown-menu",
          ],
        },
        // Better file naming for cache busting
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    // Enable sourcemaps for production debugging (optional)
    sourcemap: false,
    // Optimize chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: "esbuild",
    // Improve build performance
    target: "esnext",
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@radix-ui/react-dialog",
      "@radix-ui/react-select",
    ],
    // Exclude problematic dependencies
    exclude: [],
  },
}));
