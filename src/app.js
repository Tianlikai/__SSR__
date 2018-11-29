import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import Hello from "./Hello";

const root = document.getElementById("root");

const render = Component =>
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );

render(Hello);

if (module.hot) {
  module.hot.accept("./Hello", () => {
    const nextApp = require("./Hello").default;
    render(nextApp);
  });
}
