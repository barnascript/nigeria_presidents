import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/elements.css";
import "./styles/fonts.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CsvContext from "./context/CsvContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CsvContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CsvContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
