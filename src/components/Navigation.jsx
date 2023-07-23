import React from 'react';
import { ShellBar } from "@ui5/webcomponents-react";

const Navigation = () => {
  const handleTextClick = () => {
    // Define the URL or path to the page you want to navigate to
    const targetPageUrl = '/Mou';
    window.location.href = targetPageUrl;
  };

  return (
    <ShellBar
      logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
      primaryTitle="REACH Dashboard"
    >
      <span
        slot="profile"
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        onClick={handleTextClick}
      >
        Mou's
      </span>
    </ShellBar>
  );
}

export default Navigation;