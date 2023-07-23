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

import { Link } from "react-router-dom"; // Step 1: Import Link

import Analystics from "./Analystics";

import "./Home.css";
import data from './data.json';
import { sapUiLargeMarginBottom } from "@ui5/webcomponents-react-base/dist/styling/spacing";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("All Events");
  const [emphasizedButton, setEmphasizedButton] = useState(null);
  const [updatedData, setData] = useState(data);

  // useEffect(() => {
  //   const currentDate = new Date().toDateString();
  //   const dateObj = currentDate.split(' ');
    
  //   const modifiedDate = dateObj[2] + " " + dateObj[1] + ", " + dateObj[3];
  //   console.log(modifiedDate);
  //   setSelectedDate(modifiedDate);
  // }, []);


  const handleDateSelect = (event) => {
    setSelectedDate(event.detail.values[0]);
    setData(data.filter((item) => {
      if(emphasizedButton === null) return item.startDate === event.detail.values[0];
      else return item.startDate === event.detail.values[0] && item.pillar === emphasizedButton;
    }))
  };

  const handleButtonClick = (buttonName) => {
    setEmphasizedButton((prevButton) => {
      if(prevButton === buttonName) {
        setData(data.filter((item) => item.startDate === selectedDate ))
        return null;
      } else {
        setData(data.filter((item) => item.pillar === buttonName && item.startDate === selectedDate ))
        return buttonName;
      }
    });
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
    <Card style={{

    height: '100px',
    
    
  }}>
      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center} style={{paddingTop:'25px'}}>
            <Button
              style={buttonStyle}
              onClick={() =>  handleButtonClick("Research")}
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
      </Card>
        
      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center} style={{ height: "70vh", marginBottom:"80px", marginTop:"35px"}}>
        
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Calendar style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} onSelectedDatesChange={handleDateSelect} primaryCalendarType="Gregorian"/>
        </FlexBox>
        
        <FlexBox alignItems={FlexBoxAlignItems.Center}  style={{ width: "60%", paddingLeft:"50px", display:"block" }}>
        <Link to="/create-event">
            <Button design="Emphasized" style={{marginLeft:"85%", marginBottom:"12px"}}>
              <b>Create Event</b>
            </Button>
          </Link>
          <Card  header={<CardHeader status={`${updatedData.length} events`} subtitleText="Events for the day" titleText={selectedDate}/>}>
            <Analystics data={updatedData} />
          </Card>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Home;

