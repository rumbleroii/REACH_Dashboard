import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { MyApp } from "./MyApp";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Form from "./components/Form";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents-react/dist/Assets";

import data from "./components/data.json"; // Import the initial events data

function App() {
  setTheme("sap_fiori");

  const [events, setEvents] = useState(data);

  // Function to add a new event to the state
  const addEvent = (eventData) => {
    setEvents([...events, eventData]);
  };

  return (
    <>
      <Navigation />
      <Routes>
      <Route path="/create-event" element={<Form addEvent={addEvent} />} />
        <Route path="/" element={<Home events={events} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
