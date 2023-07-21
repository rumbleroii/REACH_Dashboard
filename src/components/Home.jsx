import React, { useState, useEffect } from "react";

import {
  Calendar,
  Card,
  CardHeader,
  List,
  StandardListItem,
  Icon,
  Button,
  BorderDesign,
} from "@ui5/webcomponents-react";

import "./Home.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (event) => {
    console.log(event.detail);
    setSelectedDate(event.detail.values[0]);
  };

  useEffect(() => {
    const currentDate = new Date();
    setSelectedDate(currentDate.toDateString());
  }, []);

  const buttonStyle = {
    width: "170px", // Set the desired width of the buttons
    height: "46px",
    borderRadius:"10px"
  };

  const customTileStyle = {
    width: "auto", // Set the desired width of the tiles
    height: "auto", // Set the desired height of the tiles
    // Add any other custom styles as needed
  };
  

  // Date Object

  return (
    <div>
      <div className="button-container">
        <div className="buttons">
          <Button style={buttonStyle} onClick={function ka() {}}>Research</Button>
          <div style={{ height: "16px"}} /> {/* Gap between buttons */}
          <Button style={buttonStyle} onClick={function ka() {}}>Experience</Button>
          <div style={{ height: "16px" }} /> {/* Gap between buttons */}
          <Button style={buttonStyle} onClick={function ka() {}}>Learning</Button>
        </div>
      </div >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "100%",
        }}
      >
        <div>
          <Calendar
            style={customTileStyle}
            onSelectedDatesChange={handleDateSelect}
            primaryCalendarType="Gregorian"
          />
        </div>

        <Card
          header={
            <CardHeader
              avatar={<Icon name="person-placeholder" />}
              subtitleText="Events"
              titleText={selectedDate}
            />
          }
          style={{ width: "400px", marginLeft: "100px" }}
        >
          {/* <List>
            <StandardListItem description="Software Architect"> Richard Wilson</StandardListItem>
            <StandardListItem description="Visual Designer"> Elena Petrova </StandardListItem>
            <StandardListItem description="Quality Specialist"> John Miller </StandardListItem>
          </List> */}
        </Card>
      </div>
    </div>
  );
};

export default Home;
