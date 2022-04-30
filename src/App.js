import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import LogIn from "./components/LogIn/LogIn";
import SingUp from "./components/SingUp/SingUp";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import RequirAuth from "./components/RequirAuth/RequirAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequirAuth>
              <Inventory></Inventory>
            </RequirAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/singup" element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
