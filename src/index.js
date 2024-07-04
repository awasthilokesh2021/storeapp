import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Contextprovider from "./components/context/Contextprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contextprovider>
      <App />
    </Contextprovider>
  </React.StrictMode>
);
