import React from 'react'

import { 
    ShellBar, 
    StandardListItem, 
    Avatar, 
    Input, 
    Icon, 
    ShellBarItem 
} from "@ui5/webcomponents-react";

const Navigation = () => {
  return (
    <ShellBar
        logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
        menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item 3</StandardListItem></>}
        primaryTitle="REACH Dashboard"
        searchField={<Input icon={<Icon interactive name="search"/>} showClearIcon/>}
        >
    </ShellBar>
  )
}

export default Navigation