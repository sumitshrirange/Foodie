import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Menu from "./components/Menu.jsx";
import GetApp from "./components/GetApp.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/Store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="menu" element={<Menu />} />
      <Route path="getapp" element={<GetApp />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
