import React from 'react'

import { AnalyticalTable, ProgressIndicator, FlexBox, Button } from '@ui5/webcomponents-react';
const Analystics = (tableData) => {
  return (
    <AnalyticalTable
    columns={[
      {
        Header: 'Event Title',
        accessor: 'eventName',
      },
      {
        Header: 'Deadline',
        accessor: 'deadline'
      },
      {
        Header: 'Category',
        accessor: 'pillar'
      },
      {
        Header: 'Progress',
        accessor: 'progress',
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
    data={tableData.data}
    filterable
    rowHeight={44}
    withRowHighlight
    />
  )
}

export default Analystics