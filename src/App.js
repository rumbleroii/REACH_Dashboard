import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import Mou from "./components/Mou";
import EventDetails from "./components/EventDetails";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents-react/dist/Assets";

function App() {
  setTheme("sap_fiori");

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/create-event" element={<Form />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/mou" element={<Mou />} />
        <Route path="/edit/:eventId" element={<Form />} />
        <Route path="/event-details/:eventId" element={<EventDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
