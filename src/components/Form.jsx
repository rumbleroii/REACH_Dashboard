import React, { useState } from 'react';

import { Form, FormGroup, CheckBox,Select,Option, FormItem,MultiComboBox,MultiComboBoxItem, Label, Input, TextArea, DatePicker,TimePicker,MessageBox,Button } from '@ui5/webcomponents-react';

import './Form.css'; // Import your custom CSS if needed

const FormPage = () => {
  const handleSubmit = () => {
    // Handle form submission here
    
    // Show a popup with the event created message
    MessageBox.success('Event created', {
      title: 'Success',
      onClose: () => {
        // Perform any additional actions after the popup is closed
      },
    });
  };


  const [isOnline, setIsOnline] = useState(false);

  const handleOnlineChange = (event) => {
    setIsOnline(event.target.checked);
  };

  return (
    <Form
      backgroundDesign="Transparent"
      columnsL={2} // Set the number of columns for the form groups
      columnsM={1}
      columnsS={1}
      columnsXL={3}
      labelSpanL={4}
      labelSpanM={2}
      labelSpanS={12}
      labelSpanXL={4}
      titleText={<h1>Add Event</h1>}
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
        <Option>
          Research
        </Option>
        <Option>
          Experience
        </Option>
        <Option>
          Learning
        </Option>
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
  <FormGroup titleText="Point Of Responsbility Data">
    <FormItem label="POR Name">
      <Input 
      placeholder='Enter POR name'/>
    </FormItem>
    <FormItem label="POR E-mail ID">
      <Input 
      placeholder='Enter email Id'/>
    </FormItem>
    
    
        <FormItem label="Insititutions">
          <MultiComboBox
  onChange={function ka(){}}
  onInput={function ka(){}}
  onOpenChange={function ka(){}}
  onSelectionChange={function ka(){}}
>
  <MultiComboBoxItem text="VJTI" />
  <MultiComboBoxItem text="Cummins" />
  <MultiComboBoxItem text="Amritha" />
  <MultiComboBoxItem text="XXX" />
  <MultiComboBoxItem text="YYY" />
</MultiComboBox>
        </FormItem>
</FormGroup>
  <FormItem>
    <div className="button-container">
        <Button onClick={handleSubmit}>Add Event</Button> {/* Add a submit button */}
        </div>
        </FormItem>
        
    </Form>
  );
};

export default FormPage;