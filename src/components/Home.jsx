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
  List,
  StandardListItem,
  ProgressIndicator,
  AnalyticalTable,
  Select,
  Option
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
        
        <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ height: "70vh" }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              <Calendar
                onSelectedDatesChange={handleDateSelect}
                primaryCalendarType="Gregorian"
              />
            </FlexBox>

            <FlexBox alignItems={FlexBoxAlignItems.Center}  style={{ width: "100"}}>
              <Card
                header={<CardHeader status="2 of 5" subtitleText="Events for the day" titleText={selectedDate}/>}
                style={{
                  width: '100%'
                }}
              >
                <AnalyticalTable
                  columns={[
                    {
                      Header: 'Name',
                      accessor: 'name',
                      headerTooltip: 'Full Name'
                    },
                    {
                      Header: 'Age',
                      accessor: 'age',
                      className: 'superCustomClass',
                      disableFilters: false,
                      disableGroupBy: true,
                      disableSortBy: false,
                      hAlign: 'End'
                    },
                    {
                      Header: 'Friend Name',
                      accessor: 'friend.name'
                    },
                    {
                      accessor: 'friend.age',
                      hAlign: 'End',
                      Header: () => <span>Friend Age</span>,
                      filter: (rows, accessor, filterValue) => {
                        if (filterValue === 'all') {
                          return rows;
                        }
                        if (filterValue === 'true') {
                          return rows.filter((row) => row.values[accessor] >= 21);
                        }
                        return rows.filter((row) => row.values[accessor] < 21);
                      },
                      Filter: ({ column, popoverRef }) => {
                        const handleChange = (event) => {
                          // set filter
                          column.setFilter(event.detail.selectedOption.getAttribute('value'));
                          // close popover
                          popoverRef.current.close();
                        };
                        return (
                          <Select
                            onChange={handleChange}
                            style={{ width: '100%' }}
                            value={column.filterValue ? column.filterValue : 'all'}
                          >
                            <Option value="all">Show All</Option>
                            <Option value="true">Can Drink</Option>
                            <Option value="false">Can't Drink</Option>
                          </Select>
                        );
                      }
                    }
                  ]}
                  data={[
                    {
                      age: 80,
                      friend: {
                        age: 68,
                        name: 'Carver Vance'
                      },
                      name: 'Allen Best',
                      status: 'Success'
                    },
                    {
                      age: 31,
                      friend: {
                        age: 70,
                        name: 'Strickland Gallegos'
                      },
                      name: 'Combs Fleming',
                      status: 'None'
                    },
                    {
                      age: 31,
                      friend: {
                        age: 70,
                        name: 'Strickland Gallegos'
                      },
                      name: 'Combs Fleming',
                      status: 'None'
                    },
                    {
                      age: 31,
                      friend: {
                        age: 70,
                        name: 'Strickland Gallegos'
                      },
                      name: 'Combs Fleming',
                      status: 'None'
                    },
                    {
                      age: 31,
                      friend: {
                        age: 70,
                        name: 'Strickland Gallegos'
                      },
                      name: 'Combs Fleming',
                      status: 'None'
                    },
                    {
                      age: 31,
                      friend: {
                        age: 70,
                        name: 'Strickland Gallegos'
                      },
                      name: 'Combs Fleming',
                      status: 'None'
                    }
                    // shortened for readability
                  ]}
                  filterable
                  rowHeight={44}
                  withRowHighlight
                  />
              </Card>
            </FlexBox>
        </FlexBox>
    </>
  );
};

export default Home;

