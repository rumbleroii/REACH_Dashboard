import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Text,
  Icon,
  Button,
  Calendar,
  ShellBar,
  Avatar,
  StandardListItem,
  Input,
  ShellBarItem,
  List,
} from "@ui5/webcomponents-react";

import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

export function MyApp() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setToggleCharts("barChart");
    } else {
      setToggleCharts("lineChart");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", marginTop: "16px" }}>
  {/* Research buttons */}
  <div style={{ display: "flex", flexDirection: "column",marginRight: "20px",marginTop:"150px",marginLeft:" 8px" }}>
    <Button onClick={function ka() {}}>Research</Button>
    <div style={{ height: "16px" }} /> {/* Gap between buttons */}
    <Button onClick={function ka() {}}>Experience</Button>
    <div style={{ height: "16px" }} /> {/* Gap between buttons */}
    <Button onClick={function ka() {}}>Learning</Button>
  </div>

      <div style={{ display: "flex", alignItems: "flex-start", height: "100%", marginTop: "10px " }}>
        <Calendar
          onSelectedDatesChange={function ka() {}}
          primaryCalendarType="Gregorian"
        />
        {/*1st card*/}
        <Card
  header={<CardHeader avatar={<Icon name="person-placeholder" />} status="3 of 5" subtitleText="Direct Reports" titleText="TeamSpace"/>}
  style={{
    width: '300px'
  }}
>
  <List>
    <StandardListItem description="Software Architec">
      Richard Wilson
    </StandardListItem>
    <StandardListItem description="Visual Designer">
      Elena Petrova
    </StandardListItem>
    <StandardListItem description="Quality Specialist">
      John Miller
    </StandardListItem>
  </List>
</Card>
        <Card
    header={
      <CardHeader
        titleText="Card"
        interactive
        onClick={handleHeaderClick}
        avatar={
          <Icon
            name={toggleCharts === "lineChart" ? lineChartIcon : barChartIcon}
          />
        }
      />
    }
    style={{ width: "300px", marginLeft: "16px" }}
  >
    {/* Card content */}
    <Text style={spacing.sapUiContentPadding}>
      This is the content area of the Card
    </Text>
    {toggleCharts === "lineChart" ? (
      <LineChart
        dimensions={[{ accessor: "month" }]}
        measures={[{ accessor: "data", label: "Stock Price" }]}
        dataset={dataset}
      />
    ) : (
      <BarChart
        dimensions={[{ accessor: "month" }]}
        measures={[{ accessor: "data", label: "Stock Price" }]}
        dataset={dataset}
      />
    )}
      </Card>
      </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0e639c", // Footer ShellBar background color
          padding: "8px",
          borderTop: "1px solid #ddd",
        }}
      >
        <Text style={{ margin: "0", color: "#fff" }}>Research Engagement And Collaboration Hub</Text>
      </div>

      <style>
        {`
          .shellbar-item-mous {
            display: flex;
            align-items: center;
            margin-left: 16px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

