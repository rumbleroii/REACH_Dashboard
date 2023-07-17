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
      <ShellBar
        logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
        menuItems={
          <>
            <StandardListItem data-key="1">Menu Item 1</StandardListItem>
            <StandardListItem data-key="2">Menu Item 2</StandardListItem>
            <StandardListItem data-key="3">Menu Item 3</StandardListItem>
          </>
        }
        notificationsCount="10"
        onCoPilotClick={function ka() {}}
        onLogoClick={function ka() {}}
        onMenuItemClick={function ka() {}}
        onNotificationsClick={function ka() {}}
        onProfileClick={function ka() {}}
        primaryTitle="Menu"
        profile={<Avatar><img alt="" src="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png" /></Avatar>}
        searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
        secondaryTitle="REACH"
        showCoPilot
        showNotifications
        style={{ background: "#0e639c" }} // Header ShellBar background color
      >
        <ShellBarItem
          text="Mous"
          textVisible
          onClick={() => window.open("https://example.com", "_blank")}
          className="shellbar-item-mous"
        />
      </ShellBar>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        <Button onClick={function ka() {}}>Research</Button>
        <div style={{ width: "16px" }} /> {/* Gap between buttons */}
        <Button onClick={function ka() {}}>Experience</Button>
        <div style={{ width: "16px" }} /> {/* Gap between buttons */}
        <Button onClick={function ka() {}}>Learning</Button>
      </div>

      <div style={{ display: "flex", marginTop: "16px" }}>
        <Calendar
          onSelectedDatesChange={function ka() {}}
          primaryCalendarType="Gregorian"
        />
        <Card
          header={
            <CardHeader
              titleText="Card"
              interactive
              onClick={handleHeaderClick}
              avatar={
                <Icon
                  name={
                    toggleCharts === "lineChart"
                      ? lineChartIcon
                      : barChartIcon
                  }
                />
              }
            />
          }
          style={{ width: "300px", marginLeft: "16px" }}
        >
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
