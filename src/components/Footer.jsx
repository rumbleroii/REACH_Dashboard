import React from 'react'

import { Text } from "@ui5/webcomponents-react";

// CSS
const footerStyle = {
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0e639c",
  padding: "8px",
  borderTop: "1px solid #ddd"
}


const Footer = () => {
  return (
    <div style={footerStyle}>
      <Text style={{ margin: '0', color: '#fff', cursor: 'pointer' }}>Research Engagement And Collaboration Hub</Text>
    </div>
  )
}

export default Footer