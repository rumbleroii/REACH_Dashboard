import React, { useEffect, useState } from "react";
import {
  Calendar,
  Card,
  CardHeader,
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  Text,
} from "@ui5/webcomponents-react";

import { Link } from "react-router-dom"; 
import axios from "axios";

import Analystics from "./Analystics";
import "./Home.css";

const Home = () => {
  const [data, setAllData] = useState([]);
  const [updatedData, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("All Events");
  const [emphasizedButton, setEmphasizedButton] = useState(null);

  // Fetch All Data
  useEffect(() => {
    axios.get("http://localhost:4000/all")
    .then((res) => {
      setAllData(res.data.data);
      setData(res.data.data);
    })
    .catch((err) => {
      setAllData([]);
      console.log(err);
      })
  }, [])

  const handleDateSelect = (event) => {
    setSelectedDate(event.detail.values[0]);
    setData(
      data.filter((item) => {
        if (emphasizedButton === null)
          return item.startDate === event.detail.values[0];
        else
          return (
            item.startDate === event.detail.values[0] &&
            item.eventType === emphasizedButton
          );
      })
    );
  };

  const handleAllEvent = () => {
    setData(data);
    setEmphasizedButton(null);
    setSelectedDate("All Events");
  };

  const handleButtonClick = (buttonName) => {
    setEmphasizedButton((prevButton) => {
      if (prevButton === buttonName && selectedDate === "All Events") {
        setData(data);
        return null;
      }
      if (prevButton === buttonName) {
        setData(data.filter((item) => item.startDate === selectedDate));
        return null;
      } else if (selectedDate === "All Events") {
        setData(data.filter((item) => item.eventType === buttonName));
        return buttonName;
      } else {
        setData(
          data.filter(
            (item) =>
              item.eventType === buttonName && item.startDate === selectedDate
          )
        );
        return buttonName;
      }
    });
  };

  // CSS
  const buttonStyle = {
    width: "170px",
    height: "46px",
    fontSize: "15px",
    marginLeft: "50px",
    marginRight: "50px",
    border: "1.5px solid",
    fontWeight: emphasizedButton === "Research" ? "bold" : "normal",
  };

  return (
    <>
      <Card style={{ height: "100px" }}>
        <FlexBox
          alignItems={FlexBoxAlignItems.Center}
          justifyContent={FlexBoxJustifyContent.Center}
          style={{ paddingTop: "25px" }}
        >
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
            design={
              emphasizedButton === "Experience" ? "Emphasized" : "Default"
            }
          >
            {<b>Experience</b>}
          </Button>
        </FlexBox>
      </Card>
      <FlexBox
        alignItems={FlexBoxAlignItems.Center}
        justifyContent={FlexBoxJustifyContent.Center}
        style={{
          height: "75vh",
          margin: "0 auto"
        }}
      >
        <FlexBox alignItems={FlexBoxAlignItems.Center} direction="Column">
          <Text style={{ fontSize: "20px", margin: "10px", color:'grey' }}> Event Calender </Text>
          <Calendar
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            onSelectedDatesChange={handleDateSelect}
            primaryCalendarType="Gregorian"
            hideWeekNumbers="true"
          >
          </Calendar>
        </FlexBox>

        <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center} style={{ width: "65%", marginLeft: "50px", display: "block" }}
        >
          <Link to="/create-event">
            <Button
              design="Emphasized"
              style={{ float: "right", marginBottom: "12px" }}
            >
              <b>Create Event</b>
            </Button>
          </Link>
          <Button onClick={handleAllEvent} style={{ marginBottom: "12px" }}>
            <b>All Events</b>
          </Button>
          <Card
            header={
              <CardHeader
                status={`${updatedData.length} events`}
                subtitleText={
                  emphasizedButton === null
                    ? "All Categories"
                    : emphasizedButton
                }
                titleText={selectedDate}
              />
            }
          >
            <Analystics tableData={{ data: updatedData }} />
          </Card>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Home;
