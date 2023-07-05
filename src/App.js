// import { DatePicker, Space, version } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import NotFound from "./components/NotFound";
import Cart from "./screens/Cart";
import Detail from "./screens/Detail";
import Manage from "./screens/Manage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/home/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
