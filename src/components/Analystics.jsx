import React from 'react'

import { AnalyticalTable, ProgressIndicator, FlexBox, Button, Text, ObjectStatus } from '@ui5/webcomponents-react';

// Status
const statusObject = {
  "Success": "On-Time",
  "Warning": "Delayed",
  "Information": "Completed",
  "Error": "Cancelled",
}

const Analystics = (tableData) => {
  return (
    <AnalyticalTable
    columns={[
      {
        Header: 'Event Title',
        accessor: 'eventName',
        minWidth: 200
      },
      {
        Header: 'Deadline',
        accessor: 'deadline',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (instance) => {        
          return <ObjectStatus showDefaultIcon state={instance.cell.value}>{statusObject[instance.cell.value]}</ObjectStatus>
        }
      },
      {
        Header: 'Category',
        accessor: 'pillar',
      },
      {
        Header: 'Progress',
        accessor: 'progress',
        width:300,
        Cell: (instance) => { 
            return <ProgressIndicator value={instance.cell.value}/> 
        }
      },
      // {
      //   Header: "Edit",
      //   Cell: (instance) => {
      //       const { cell, row, webComponentsReactProperties } = instance;
      //       // disable buttons if overlay is active to prevent focus
      //       const isOverlay = webComponentsReactProperties.showOverlay;
      //       // console.log('This is your row data', row.original);
      //       return (
      //           <FlexBox>
      //               <Button icon="edit" disabled={isOverlay} />
      //           </FlexBox>
      //           );
      //       }
      //   }
    ]}
    scaleWidthMode='Smart'
    data={tableData.data}
    filterable
    rowHeight={44}
    withRowHighlight
    />
  )
}

export default Analystics