// import logo from './logo.svg';
import './App.css';
import Heading from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import React from "react";
import Aboutpage from './pages/Aboutpage/Aboutpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} exact />
          <Route path="/*" element={<Heading/>} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
