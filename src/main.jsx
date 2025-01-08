// src/index.js أو src/App.js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n"; // تأكد من استيراد ملف i18n الذي يحتوي على التهيئة

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
