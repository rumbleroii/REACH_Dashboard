import React from 'react'

import { Text } from "@ui5/webcomponents-react";

const Footer = () => {
    const handleLinkClick = () => {
    // Define the URL to redirect to when the link is clicked
    const targetURL = 'https://sap.sharepoint.com/sites/203550?xsdata=MDV8MDF8fGY1MTdhYWQzNzJmZDQwZjNiMjhmMDhkYjY4M2ExZjJlfDQyZjc2NzZjZjQ1NTQyM2M4MmY2ZGMyZDk5NzkxYWY3fDB8MHw2MzgyMTgzNzEwNDM2MDMwODd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPamhqTUdKaE5HTmlZVGhpWkRRM1pUTmlPRFJpTm1VeE4yWmxaakptWXpKaFFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOamcyTWpRd016QXpOelV4fDdiN2MzMTQ1ZWYyNTRhOWFiMjhmMDhkYjY4M2ExZjJlfDcxYzQ0MTcwNzA5ZjQ0NDM4ZmQ2YjhhMDFlYjM0OGY3&sdata=RkVldFF4cERHSXNEblRnbG1FQTAyY3ozallCbXFHeVE1VEZpb0YwOUpMST0%3D&ovuser=42f7676c-f455-423c-82f6-dc2d99791af7%2Cvishnu.priya.gandeti%40sap.com&OR=Teams-HL&CT=1690284193283&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA2MDQwMTE3NyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D'; // Replace with the actual URL

    // Open the URL in a new tab
    window.open(targetURL, '_blank');
  };

  return (
    <>
        <div
            style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#0e639c",
            padding: "8px",
            borderTop: "1px solid #ddd",
            
            }}
        >
           <a href="https://sap.sharepoint.com/sites/203550?xsdata=MDV8MDF8fGY1MTdhYWQzNzJmZDQwZjNiMjhmMDhkYjY4M2ExZjJlfDQyZjc2NzZjZjQ1NTQyM2M4MmY2ZGMyZDk5NzkxYWY3fDB8MHw2MzgyMTgzNzEwNDM2MDMwODd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPamhqTUdKaE5HTmlZVGhpWkRRM1pUTmlPRFJpTm1VeE4yWmxaakptWXpKaFFIUm9jbVZoWkM1Mk1pOXRaWE56WVdkbGN5OHhOamcyTWpRd016QXpOelV4fDdiN2MzMTQ1ZWYyNTRhOWFiMjhmMDhkYjY4M2ExZjJlfDcxYzQ0MTcwNzA5ZjQ0NDM4ZmQ2YjhhMDFlYjM0OGY3&sdata=RkVldFF4cERHSXNEblRnbG1FQTAyY3ozallCbXFHeVE1VEZpb0YwOUpMST0%3D&ovuser=42f7676c-f455-423c-82f6-dc2d99791af7%2Cvishnu.priya.gandeti%40sap.com&OR=Teams-HL&CT=1690284193283&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA2MDQwMTE3NyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff' }} onClick={handleLinkClick}>
          <Text style={{ margin: '0', color: '#fff', cursor: 'pointer' }}>Research Engagement And Collaboration Hub</Text>
        </a>
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
    </>
  )
}

export default Footer