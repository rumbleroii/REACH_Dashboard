import React, { useState, useEffect } from "react";
import {
  Calendar,
  Card,
  CardHeader,
  Icon,
  Button,
} from "@ui5/webcomponents-react";
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
    width: "170px", // Set the desired width of the buttons
    height: "46px",
    borderRadius: "10px",
    border: "2px solid",
    fontSize: "15px",
    fontWeight: emphasizedButton === "Research" ? "bold" : "normal",
  };

  const handleButtonClick = (buttonName) => {
    setEmphasizedButton((prevButton) =>
      prevButton === buttonName ? null : buttonName
    );
  };

  return (
    <div>
      <div className="button-container">
        <div className="buttons">
          <Button
            style={buttonStyle}
            onClick={() => handleButtonClick("Research")}
            design={emphasizedButton === "Research" ? "Emphasized" : "Default"}
          >
            Research
          </Button>
          <div style={{ height: "16px" }} /> {/* Gap between buttons */}
          <Button
            style={buttonStyle}
            onClick={() => handleButtonClick("Experience")}
            design={
              emphasizedButton === "Experience" ? "Emphasized" : "Default"
            }
          >
            Experience
          </Button>
          <div style={{ height: "16px" }} /> {/* Gap between buttons */}
          <Button
            style={buttonStyle}
            onClick={() => handleButtonClick("Learning")}
            design={emphasizedButton === "Learning" ? "Emphasized" : "Default"}
          >
            Learning
          </Button>
        </div>
      </div>
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
