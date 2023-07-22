import React, { useState, useEffect, startTransition } from "react";
import {
  Calendar,
  Card,
  CardHeader,
  Icon,
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";

import "./Home.css";
import Analystics from "./Analystics";

import data from './data.json';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [emphasizedButton, setEmphasizedButton] = useState(null);
  const [updatedData, setData] = useState(data);

  const handleDateSelect = (event) => {
    setSelectedDate(event.detail.values[0]);
    setData(data.filter((item) => {
      return item.startDate == event.detail.values[0];
    }))
  };

  useEffect(() => {
    const currentDate = new Date();
    setSelectedDate(currentDate.toDateString());
  }, []);

  const buttonStyle = {
    width: "170px",
    height: "46px",
    fontSize: "15px",
    marginLeft:"50px",
    marginRight:"50px",
    border: "1.5px solid", 
    fontWeight: emphasizedButton === "Research" ? "bold" : "normal",
    
  };

  const handleButtonClick = (buttonName) => {
    setEmphasizedButton((prevButton) =>
      prevButton === buttonName ? null : buttonName
    );
  };

  return (
    <>
      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center} style={{padding:"4vh"}}>
            <Button
              style={buttonStyle}
              onClick={() => handleButtonClick("Research")}
              design={emphasizedButton === "Research" ? "Emphasized" : "Default"}
            >
              {<b>Research</b>}
            </Button>
            <Button
              style={buttonStyle}
              onClick={() => handleButtonClick("Learning")}
              design={emphasizedButton === "Learning" ? "Emphasized" : "Default"}
            >
              {<b>Learning</b>}
            </Button>
            <Button
              style={buttonStyle}
              onClick={() => handleButtonClick("Experience")}
              design={emphasizedButton === "Experience" ? "Emphasized" : "Default"}
            >
              {<b>Experience</b>}
            </Button>
      </FlexBox>
        
      <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ height: "70vh" }}>
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Calendar onSelectedDatesChange={handleDateSelect} primaryCalendarType="Gregorian"/>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center}  style={{ width: "100%"}}>
          <Card header={<CardHeader status={`${data.length} dataset`} subtitleText="Events for the day" titleText={selectedDate}/>}>
            <Analystics data={updatedData} />
          </Card>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Home;

