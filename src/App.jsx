import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from './components/Home';
import Login from './components/Login';
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
