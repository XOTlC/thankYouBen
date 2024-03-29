import { createRoot } from "react-dom/client";
import App from "./App";
import "./fetch";

createRoot(document.getElementById("app") as HTMLElement).render(<App />);