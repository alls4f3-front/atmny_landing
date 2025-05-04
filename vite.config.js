// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression"; // لضغط الملفات

export default defineConfig({
  plugins: [
    react(),
    compression(), // يفعّل Gzip تلقائيًا
  ],
  build: {
    target: "esnext", // تحسين أداء ES Modules
    minify: "terser", // تقليل حجم JS
    sourcemap: false, // تعطيل Sourcemap في الإنتاج
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // فصل مكتبات الطرف الثالث
          }
        },
      },
    },
    terserOptions: {
      compress: { drop_console: true }, // إزالة console.log
      output: { comments: false }, // إزالة التعليقات
    },
  },
  esbuild: {
    drop: ["console", "debugger"], // إزالة console.log و debugger في الإنتاج
  },
});
