import React, { useState } from 'react';
import { Form, FormGroup, Link, Text, CheckBox, Select, Option, FormItem, Label, Input, TextArea, DatePicker,TimePicker } from '@ui5/webcomponents-react';

import './Form.css'; // Import your custom CSS if needed

const FormPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const [isOnline, setIsOnline] = useState(false);

  const handleOnlineChange = (event) => {
    setIsOnline(event.target.checked);
  };

  return (
    <Form
      columnsL={1}
      columnsM={1}
      columnsS={1}
      columnsXL={2}
      labelSpanL={4}
      labelSpanM={2}
      labelSpanS={12}
      labelSpanXL={4}
      titleText="Create Event"
    >
      <FormGroup titleText="Event Data">
        <FormItem label="Event Name">
          <Input placeholder="Enter event name" />
        </FormItem>
        <FormItem label="Online">
          <CheckBox checked={isOnline} onChange={handleOnlineChange} 
          />
        </FormItem>

        {isOnline ? (
          <FormItem label="Link">
            <Input placeholder="Enter the Link" />
          </FormItem>
        ) : (
          <FormItem label={<Label>Venue <i></i></Label>}>
            <Input placeholder="Enter the Venue" />
          </FormItem>
        )}

        <FormItem label="Event Type">
          <Select>
            <Option>Research</Option>
            <Option>Experience</Option>
            <Option>Learning</Option>
          </Select>
        </FormItem>
         <FormItem label="Start Date">
          <DatePicker placeholder="Select start date" />
        </FormItem>
        <FormItem label="Start Time">
          <TimePicker placeholder="Select start time" />
        </FormItem>

        <FormItem label="End Date">
          <DatePicker placeholder="Select end date" />
        </FormItem>
        <FormItem label="End Time">
          <TimePicker placeholder="Select end time" />
        </FormItem>

        <FormItem label={<Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>Event Description</Label>}>
          <TextArea placeholder="Briefly tell us about your Event" rows={5} />
        </FormItem>
   </FormGroup>
  <FormGroup titleText="Organiser Data">
    <FormItem label="Organiser Name">
      <Input />
    </FormItem>
    <FormItem label="Organiser E-mail ID">
      <Input />
    </FormItem>
    {/*<FormItem label="Company City">
      <Input />
    </FormItem>
    <FormItem label="Company Country">
      <Input />
    </FormItem>
    <FormItem label="Number of Employees">
      <Input
        disabled
        type="Number"
        value="5000"
      />
    </FormItem>
    <FormItem label="Member of Partner Network">
      <CheckBox checked />
</FormItem>*/}
</FormGroup>
  <FormGroup titleText="Marketing Data">
    <FormItem label="Email">
      <Input type="Email" />
    </FormItem>
    <FormItem label="Company Email">
      <Input type="Email" />
    </FormItem>
    <FormItem label="I want to receive the newsletter">
      <CheckBox />
</FormItem>
  </FormGroup>
    </Form>
  );
};

export default FormPage;