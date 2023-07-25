import React from 'react';

import { Link } from 'react-router-dom';
import { AnalyticalTable, ProgressIndicator, ObjectStatus,FlexBox,Button } from '@ui5/webcomponents-react';

// Status
const statusObject = {
  "Success": "On-Time",
  "Warning": "Delayed",
  "Information": "Completed",
  "Error": "Cancelled",
};

const Analystics = ({ tableData }) => {
  return (
    <AnalyticalTable
      columns={[
        {
          Header: 'Event Title',
          accessor: 'eventName',
          minWidth: 200,
          Cell: (instance) => (
            <Link to={`/event-details/${instance.row.original.id}`}> 
              {instance.cell.value}
            </Link>
          ),
        },
        {
          Header: 'Start Date',
          accessor: 'startDate',
        },
        {
          Header: 'End Date',
          accessor: 'endDate',
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: (instance) => {
            return (
              <ObjectStatus showDefaultIcon state={instance.cell.value}>
                {statusObject[instance.cell.value]}
              </ObjectStatus>
            );
          },
        },
        {
          Header: 'Category',
          accessor: 'eventType',
        },
        {
          Header: 'Progress',
          accessor: 'progress',
          width: 300,
          Cell: (instance) => {
            return <ProgressIndicator value={instance.cell.value} />;
          },
        },
      ]}
      scaleWidthMode='Smart'
      data={tableData.data}
      filterable
      rowHeight={44}
      withRowHighlight
    />
  );
};

export default Analystics;
