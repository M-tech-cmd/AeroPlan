import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: [/@syncfusion/],
  },
  optimizeDeps: {
    include: [
      "@syncfusion/ej2-base",
      "@syncfusion/ej2-react-navigations",
      "@syncfusion/ej2-navigations",
    ],
  },
});