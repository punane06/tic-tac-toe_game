import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScoreContextProvider } from "./components/ScoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScoreContextProvider>
        <App />
      </ScoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
