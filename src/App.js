import React, { useState, useContext } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { LanguageContext } from "./store/LanguageContext";
function App() {
  const {  setLanguage } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
      <>
        <Navbar isOpen={isOpen} toggle={toggle} setLanguage={setLanguage}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </>
 
  );
}

export default App;
