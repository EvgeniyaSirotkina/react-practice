import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const isLoading = false;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App isLoading={isLoading} />
  </StrictMode>,
  rootElement
);
