import React from 'react';
import { Form, FormGroup, Link, Text, CheckBox, Select, Option, FormItem, Label, Input, TextArea } from '@ui5/webcomponents-react';

import './Form.css'; // Import your custom CSS if needed

const FormPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
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
    <FormItem label="Sole Form Item">
        <Input />
    </FormItem>
  <FormGroup titleText="Personal Data">
    <FormItem label="Name">
      <Input />
    </FormItem>
    <FormItem label={<Label>Address</Label>}>
      <Input />
    </FormItem>
    <FormItem label="Country">
      <Select>
        <Option>
          Germany
        </Option>
        <Option>
          France
        </Option>
        <Option>
          Italy
        </Option>
      </Select>
    </FormItem>
    <FormItem label={<Label style={{alignSelf: 'start', paddingTop: '0.25rem'}}>Additional Comment</Label>}>
      <TextArea
        placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
        rows={5}
      />
    </FormItem>
    <FormItem label="Home address">
      <CheckBox checked />
    </FormItem>
  </FormGroup>
  <FormGroup titleText="Company Data">
    <FormItem label="Company Name">
      <Input />
    </FormItem>
    <FormItem label="Company Address">
      <Input />
    </FormItem>
    <FormItem label="Company City">
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
    </FormItem>
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
