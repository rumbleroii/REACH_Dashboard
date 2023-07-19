import React, { useState, useEffect } from "react";

import {
  Calendar, Card, CardHeader, List, StandardListItem, Icon
} from "@ui5/webcomponents-react";

import './Home.css'

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

  // Date Object
  
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", alignItems: "center",  height: "90vh", width: "100%" }}>
        <div>
          <Calendar
            onSelectedDatesChange={handleDateSelect}
            primaryCalendarType="Gregorian"
          />
        </div>

        <Card
          header={<CardHeader avatar={<Icon name="person-placeholder" />} subtitleText="Events" titleText={selectedDate}/>}
          style={{ width: '400px', marginLeft: "100px" }}
        >
          {/* <List>
            <StandardListItem description="Software Architect"> Richard Wilson</StandardListItem>
            <StandardListItem description="Visual Designer"> Elena Petrova </StandardListItem>
            <StandardListItem description="Quality Specialist"> John Miller </StandardListItem>
          </List> */}
        </Card>
      </div>


    </div>
  )
}

export default Home