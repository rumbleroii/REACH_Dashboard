import React, { useState, useEffect } from "react";
import {
  Calendar,
  Card,
  CardHeader,
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";

import Analystics from "./Analystics";

import "./Home.css";
import data from './data.json';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [emphasizedButton, setEmphasizedButton] = useState(null);
  const [updatedData, setData] = useState(data);

  useEffect(() => {
    const currentDate = new Date();
    setSelectedDate(currentDate.toDateString());
  }, []);

  const handleDateSelect = (event) => {
    setSelectedDate(event.detail.values[0]);
    setData(data.filter((item) => {
      return item.startDate == event.detail.values[0] && item.pillar == emphasizedButton;
    }))
  };

  const handleButtonClick = (buttonName) => {
    setData(data.filter((item) => {
      return item.pillar == buttonName && item.startDate == selectedDate;
    }))
    setEmphasizedButton((prevButton) =>
      prevButton === buttonName ? null : buttonName
    );
  };

  const buttonStyle = {
    width: "170px",
    height: "46px",
    fontSize: "15px",
    marginLeft:"50px",
    marginRight:"50px",
    border: "1.5px solid", 
    fontWeight: emphasizedButton === "Research" ? "bold" : "normal",
  };

  return (
    <>
      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center} style={{paddingTop:"7vh"}}>
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
        
      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center} style={{ height: "70vh"}}>
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Calendar onSelectedDatesChange={handleDateSelect} primaryCalendarType="Gregorian"/>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center}  style={{ width: "60%", paddingLeft:"50px" }}>
          <Card header={<CardHeader status={`${updatedData.length} dataset`} subtitleText="Events for the day" titleText={selectedDate}/>}>
            <Analystics data={updatedData} />
          </Card>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Home;

