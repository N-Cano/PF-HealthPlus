import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import { firebaseConfig, auth } from "./firebase/firebase.config.jsx";

import "./index.css";

// Traducción
import "./i18next.js";
import { Suspense } from "react";

//Darkmode
import { ThemeProvider } from "./contextAPI/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextProvider firebase={firebaseConfig} auth={auth}>
      <BrowserRouter>
        <Suspense>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
);
