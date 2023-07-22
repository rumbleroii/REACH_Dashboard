import React from 'react'

import { AnalyticalTable, Select, Option, ProgressIndicator } from '@ui5/webcomponents-react';
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
        Header: 'Pillar',
        accessor: 'pillar'
      },
      {
        Header: 'Progress',
        accessor: 'progress',
        Cell: (instance) => { 
            return <ProgressIndicator value={instance.cell.value}/> 
        }
      }
    ]}
    data={tableData.data}
    filterable
    rowHeight={44}
    withRowHighlight
    />
  )
}

export default Analystics