import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import { AlertProvider } from "./hooks/AlertProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>
);
