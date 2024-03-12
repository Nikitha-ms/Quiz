import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Quiz from "./pages/Quiz";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import './App.css';
function App() {
  const authContext = useContext(AuthContext);
  const { user } = authContext || {};
  return (
    <div className="main-container">
      
        <Routes>
          <Route
            path="/"
            element={user ? <Quiz /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="/" /> : <Auth />}
          />
        </Routes>
    
    </div>
  );
}

export default App;
