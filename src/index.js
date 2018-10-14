import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Redirect } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
