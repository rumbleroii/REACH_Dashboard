import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { MyApp } from "./MyApp";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import Mou from "./components/Mou";

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

  
  useEffect(() => {
    // Get the events data from localStorage when the application starts
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(data); // Fallback to the initial data from data.json
    }
  }, []);

  useEffect(() => {
    // Save the events data to localStorage whenever it changes
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/create-event" element={<Form/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/mou" element={<Mou/>}/>
        <Route path="/create-event" element={<Form addEvent={addEvent} />} />
        <Route path="/" element={<Home events={events} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
