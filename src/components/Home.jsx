import React, { useState, useEffect } from "react";




import {

  Calendar, Card, CardHeader, List, StandardListItem, Icon, Button,Text

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
  return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh", width: "100%" }}>

     <div style={{ display: "flex", flexDirection: "row" }}>

  <Button style={{ flex: 2, width:"300px", flexBasis: 0, height: "45px", fontSize: "12px", marginRight: "45px",border: "2px solid", borderRadius: "4px" }} onClick={function ka() {}}>

    {<b>Research</b>}

  </Button>

  <Button style={{ flex: 2, flexBasis: 0, height: "45px", fontSize: "12px", marginRight: "45px",border: "2px solid", borderRadius: "4px" }} onClick={function ka() {}}>

    {<b>Experience</b>}

  </Button>

  <Button style={{ flex: 2, flexBasis: 0, height: "45px", fontSize: "12px",border: "2px solid", borderRadius: "4px" }} onClick={function ka() {}}>

    {<b>Learning</b>}

  </Button>

</div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

        <Calendar

          onSelectedDatesChange={handleDateSelect}

          primaryCalendarType="Gregorian"

        />

        <Card

          header={<CardHeader avatar={<Icon name="person-placeholder" />} subtitleText="Events" titleText={selectedDate} />}

          style={{ width: '400px', marginLeft: "100px" }}

        >

        </Card>

      </div>

    </div>

  )}




export default Home;