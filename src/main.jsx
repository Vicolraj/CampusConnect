import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppProviders from "./contexts/AppProviders.jsx"; // Correct path and component name
import "./index.css"; // Assuming you have a CSS file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);