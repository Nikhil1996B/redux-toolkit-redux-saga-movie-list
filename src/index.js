import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
window.store = store;
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
