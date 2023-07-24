import React from 'react';
import { ShellBar, ShellBarItem, StandardListItem } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import editIcon from "@ui5/webcomponents-icons/dist/edit.js";

import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <ShellBar
        logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
        primaryTitle="REACH Dashboard"
      >
      <ShellBarItem text="mou"/>
    </ShellBar>
  );
}

export default Navigation;