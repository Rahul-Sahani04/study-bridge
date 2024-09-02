// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";


const navData = [
  {
    name: "Home",
    URL: "/",
    element: <Home />,
  },
  {
    name: "Login",
    URL: "/login",
    element: <Login />,
  },
  {
    name: "Services",
    URL: "/services",
    element: <Services />,
  },
  {
    name: "About",
    URL: "/about",
    element: <About />,
  },
  {
    name: "Reviews",
    URL: "/reviews",
    element: <div>Reviews Page</div>,
  },
];

function App() {

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {navData.map((nav, index) => (
          <Route key={index} path={nav.URL} element={nav.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
