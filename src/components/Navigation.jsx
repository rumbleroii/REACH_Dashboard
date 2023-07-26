import React from 'react';
import { Bar, ShellBar, ShellBarItem, StandardListItem, Text } from "@ui5/webcomponents-react";

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Bar
      startContent={
        <>
          <img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>
          <Text style={{
            fontSize:"18px",
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
