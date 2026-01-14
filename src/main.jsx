import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "rsuite/dist/rsuite-no-reset.css";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <ToastContainer position="top-right" />
      <App />
    </Provider>
  </HelmetProvider>
);
