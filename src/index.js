import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import SimpleReactLightbox from "simple-react-lightbox";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
};
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
