import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import { firebaseConfig, auth } from "./firebase/firebase.config.jsx";

import "./i18next.js";
import "./index.css";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextProvider firebase={firebaseConfig} auth={auth}>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
);
