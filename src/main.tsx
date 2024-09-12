import { createRoot } from "react-dom/client";
import { Providers } from "@/components/providers";
import { App } from "@/app";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>,
);
