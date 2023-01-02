import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" index element={<HomePage/>} />
        <Route path="/blog" element={<BlogPage  />} />
      </Routes>
    </div>
  );
}

export default App;
