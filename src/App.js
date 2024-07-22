import React from "react";
import Home from "./pages/home/Home"
import   {Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import "./style/dark.scss"
import Offre from "./pages/offre/Offre";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import Option from "./pages/option/Option";
import AddOption from "./pages/option/Add";
import TypeOffre from "./pages/TypeOffre/TypeOffre";
import Avantage from "./pages/avanatge/Avantage";
import Login from "./pages/Login"
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
      <Route path="/">
            <Route index element={<Home  />} />
            <Route path="offre" element={<Offre  />} />
            <Route path="option" element={<Option />}/>
            <Route path="addOption" element={<AddOption />} />
            <Route path="typeOffre" element={<TypeOffre />}/>
            <Route path="avanatge"  element={<Avantage />} />
            <Route path="login" element={<Login />} />
           
            
        </Route>
      </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
