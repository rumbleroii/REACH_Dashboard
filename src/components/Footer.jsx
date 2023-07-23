import React from 'react'

import { Text } from "@ui5/webcomponents-react";

const Footer = () => {
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
    </>
  )
}

export default Footer