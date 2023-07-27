import React from 'react';
import { Bar, ShellBar, ShellBarItem, StandardListItem, Text } from "@ui5/webcomponents-react";

import { Link } from 'react-router-dom';

const Navigation = () => {
    const handleLinkClick = () => {
    // Define the URL to redirect to when the link is clicked
    const targetURL = 'https://sap.sharepoint.com/sites/203550?xsdata=MDV8MDF8fGY1MTdhYWQzNzJmZDQwZjNiMjhmMDhkYjY4M2ExZjJlfDQyZjc2NzZjZjQ1NTQyM2M4MmY2ZGMyZDk5NzkxYWY3fDB8MHw2MzgyMTgzNzEwNDM2MDMwODd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPamhqTUdKaE5HTmlZVGhpWkRRM1pUTmlPRFJpTm1VeE4yWmxaakptWXpKaFFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOamcyTWpRd016QXpOelV4fDdiN2MzMTQ1ZWYyNTRhOWFiMjhmMDhkYjY4M2ExZjJlfDcxYzQ0MTcwNzA5ZjQ0NDM4ZmQ2YjhhMDFlYjM0OGY3&sdata=RkVldFF4cERHSXNEblRnbG1FQTAyY3ozallCbXFHeVE1VEZpb0YwOUpMST0%3D&ovuser=42f7676c-f455-423c-82f6-dc2d99791af7%2Cvishnu.priya.gandeti%40sap.com&OR=Teams-HL&CT=1690284193283&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA2MDQwMTE3NyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D'; // Replace with the actual URL

    // Open the URL in a new tab
    window.open(targetURL, '_blank');
  };
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
          <a href="https://sap.sharepoint.com/sites/203550?xsdata=MDV8MDF8fGY1MTdhYWQzNzJmZDQwZjNiMjhmMDhkYjY4M2ExZjJlfDQyZjc2NzZjZjQ1NTQyM2M4MmY2ZGMyZDk5NzkxYWY3fDB8MHw2MzgyMTgzNzEwNDM2MDMwODd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPamhqTUdKaE5HTmlZVGhpWkRRM1pUTmlPRFJpTm1VeE4yWmxaakptWXpKaFFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOamcyTWpRd016QXpOelV4fDdiN2MzMTQ1ZWYyNTRhOWFiMjhmMDhkYjY4M2ExZjJlfDcxYzQ0MTcwNzA5ZjQ0NDM4ZmQ2YjhhMDFlYjM0OGY3&sdata=RkVldFF4cERHSXNEblRnbG1FQTAyY3ozallCbXFHeVE1VEZpb0YwOUpMST0%3D&ovuser=42f7676c-f455-423c-82f6-dc2d99791af7%2Cvishnu.priya.gandeti%40sap.com&OR=Teams-HL&CT=1690284193283&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA2MDQwMTE3NyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }} onClick={handleLinkClick}>
          <Text style={{ margin: '0', color: '#fff', cursor: 'pointer' }}>{<b>About</b>}</Text>
        </a>
        </div>
      }
        
      style={{
        height:"50px",
        backgroundColor: "#354a5f"
      }}
    >
    </Bar>
  );
}

export default Navigation;
