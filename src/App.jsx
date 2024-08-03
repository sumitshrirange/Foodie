import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import CountContextProvider from "./context/CountContextProvider";

function App() {
  return (
    <>
      <CountContextProvider>
        <Header />
        <Outlet />
      </CountContextProvider>
    </>
  );
}

export default App;
