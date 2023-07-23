import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";

import { MyApp } from "./MyApp";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Form from "./components/Form";

import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-react/dist/Assets';


function App() {
  setTheme("sap_fiori");

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/create-event" element={<Form/>}></Route>
        <Route path="/myapp" element={<MyApp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
