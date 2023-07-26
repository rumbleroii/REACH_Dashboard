import React from 'react';
import { Bar, ShellBar, ShellBarItem, StandardListItem, Text } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import editIcon from "@ui5/webcomponents-icons/dist/edit.js";

import { Link } from 'react-router-dom';

const Navigation = () => {
  const handleTextClick = () => {
    // Define the URL or path to the page you want to navigate to
    const targetPageUrl = '/Mou';
    window.location.href = targetPageUrl;
  };
    return (
      <Bar
        startContent={
          <>
            <img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>
            <Text style={{
              fontSize:"15px",
              fontWeight:"bold",
              color:"white"
            }}>REACH Dashboard</Text>
          </>
        }
        endContent= {
          <div style={{display: "flex", gap: "20px", marginRight:"20px"}}>
            <Link to='/'><Text style={{ fontWeight:"bold", color:"white" }}>Home</Text></Link>
            <Link to='/Mou'><Text style={{ fontWeight:"bold", color:"white" }}>Mou's</Text></Link>
          </div>
        }
        style={{
          height:"60px",
          backgroundColor: "#354a5f"

        }}
    >
      </Bar>
  );
}

export default Navigation;

    // <ShellBar
    //     logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
    //     primaryTitle="REACH Dashboard"
    //     children={<ShellBarItem><Text>DDD</Text></ShellBarItem>}
    //   >
    //   <span
    //     slot="profile"
    //     style={{ cursor: 'pointer', textDecoration: 'underline' }}
    //     onClick={handleTextClick}
    //   >
    //     Mou's
    //   </span>
    // </ShellBar>