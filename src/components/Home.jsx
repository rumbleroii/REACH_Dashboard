import React, { useState, useEffect } from "react";
import {
  Calendar,
  Card,
  CardHeader,
  Icon,
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Text
} from "@ui5/webcomponents-react";

import { RadialChart } from "@ui5/webcomponents-react-charts";
import "./Home.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [emphasizedButton, setEmphasizedButton] = useState(null);

  const handleDateSelect = (event) => {
    setSelectedDate(event.detail.values[0]);
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
      
     <FlexBox alignItems={FlexBoxAlignItems.Center}>
      <div style={{ position: 'relative' }}>
        <h3 style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>CII Index</h3>
        
        <RadialChart
          value={50}
          displayValue="50%"
          style={{
            width: '270px',
            height: '270px',
            marginRight:'50px'
          }}
          chartConfig={{
            innerRadius: '50%',
            outerRadius: '70%',
            margin: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }}
        />
      </div>
          <FlexBox alignItems={FlexBoxAlignItems.Center}>
            <div style={{ position: 'relative', top: '-6px' }}> {/* Adjust the 'top' value to move the calendar higher */}
        <Calendar
          onSelectedDatesChange={handleDateSelect}
          primaryCalendarType="Gregorian"
        />
      </div>
          </FlexBox>

          <FlexBox alignItems={FlexBoxAlignItems.Center}>
            <Card
              header={<CardHeader subtitleText="Events" titleText={selectedDate} />}
              style={{ width: '350px',marginLeft:'40px'}}
            >
            </Card>
          </FlexBox>
        </FlexBox>
    </>
  );
};

export default Home;
