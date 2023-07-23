import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"; // Import useHistory hook
import { useHistory } from "react-router-dom"; // Step 1: Import useHistory
import data from './data.json';
import {
  Form,
  FormGroup,
  CheckBox,
  Select,
  Option,
  FormItem,
  MultiComboBox,
  MultiComboBoxItem,
  Label,
  Input,
  TextArea,
  DatePicker,
  TimePicker,
  MessageBox,
  Button,
} from "@ui5/webcomponents-react";
import "./Form.css"; // Import your custom CSS if needed

const FormPage = ({addEvent}) => {
  const Navigate = useNavigate(); // Initialize useHistory hook
  const [formData, setFormData] = useState({
    eventName: "",
    online: false,
    link: "",
    venue: "",
    eventType: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    eventDescription: "",
    porName: "",
    porEmail: "",
    institutions: [],
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleMultiComboBoxChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      institutions: event.detail.selectedItems.map((item) => item.text),
    }));
  };

  // ...
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Create an object with the form data
      const newEvent = {
        eventName: formData.eventName,
        online: formData.online,
        link: formData.link,
        venue: formData.venue,
        eventType: formData.eventType,
        startDate: formData.startDate,
        startTime: formData.startTime,
        endDate: formData.endDate,
        endTime: formData.endTime,
        eventDescription: formData.eventDescription,
        porName: formData.porName,
        porEmail: formData.porEmail,
        institutions: formData.institutions,
      };

      // Add the new event to the data array
      data.push(newEvent);

      // Show success message
      alert('Event created');

      // Clear the form data
      setFormData({
        eventName: '',
        online: false,
        link: '',
        venue: '',
        eventType: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        eventDescription: '',
        porName: '',
        porEmail: '',
        institutions: [],
      });

      // Navigate back to the home page
      Navigate('/');
    } else {
      setFormErrors(errors);
    }
  };



  // ...

  const handleOnlineChange = (event) => {
    const onlineValue = event.target.checked;
    setFormData((prevFormData) => ({
      ...prevFormData,
      online: onlineValue,
      link: onlineValue ? prevFormData.link : "", // Set link if online, otherwise clear it
      venue: onlineValue ? "" : prevFormData.venue, // Set venue if not online, otherwise clear it
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.eventName) {
      errors.eventName = "*required";
    }
    if (formData.online && !formData.link) {
      errors.link = "*required for online events";
    }
    if (!formData.online && !formData.venue) {
      errors.venue = "*required for in-person events";
    }
    // if (!formData.eventType) {
    //   errors.eventType = '*required';
    // }
    if (!formData.startDate) {
      errors.startDate = "*required";
    }
    // if (!formData.startTime) {
    //   errors.startTime = '*required';
    // }
    if (!formData.endDate) {
      errors.endDate = "*required";
    }
    // if (!formData.endTime) {
    //   errors.endTime = '*required';
    // }
    if (!formData.porName) {
      errors.porName = "*required";
    }
    if (!formData.porEmail) {
      errors.porEmail = "* required";
    }
    return errors;
  };

  return (
    <div style={{ margin: "30px", marginBottom: "40px" }}>
      <Form
        backgroundDesign="Transparent"
        columnsL={2}
        columnsM={1}
        columnsS={1}
        columnsXL={3}
        labelSpanL={4}
        labelSpanM={2}
        labelSpanS={12}
        labelSpanXL={4}
        titleText={
          <h1>
            <b>Add Event</b>
          </h1>
        }
      >
        <FormGroup titleText="Event Data">
          <FormItem label="Event Name">
            <Input
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              placeholder="Enter event name"
            />
            {formErrors.eventName && (
              <div className="form-error">{formErrors.eventName}</div>
            )}
          </FormItem>
          <FormItem label="Online">
            <CheckBox
              name="online"
              checked={formData.online}
              onChange={handleOnlineChange}
            />
          </FormItem>
          {formData.online ? (
            <FormItem label="Link">
              <Input
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="Enter the Link"
              />
              {formErrors.link && (
                <div className="form-error">{formErrors.link}</div>
              )}
            </FormItem>
          ) : (
            <FormItem
              label={
                <Label>
                  Venue <i></i>
                </Label>
              }
            >
              <Input
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                placeholder="Enter the Venue"
              />
              {formErrors.venue && (
                <div className="form-error">{formErrors.venue}</div>
              )}
            </FormItem>
          )}

          <FormItem label="Event Type">
            <Select
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
            >
              <Option>Research</Option>
              <Option>Experience</Option>
              <Option>Learning</Option>
            </Select>
            {formErrors.eventType && (
              <div className="form-error">{formErrors.eventType}</div>
            )}
          </FormItem>
          <FormItem label="Start Date">
            <DatePicker
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              placeholder="Select start date"
            />
            {formErrors.startDate && (
              <div className="form-error">{formErrors.startDate}</div>
            )}
          </FormItem>
          <FormItem label="Start Time">
            <TimePicker
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              placeholder="Select start time"
            />
            {formErrors.startTime && (
              <div className="form-error">{formErrors.startTime}</div>
            )}
          </FormItem>

          <FormItem label="End Date">
            <DatePicker
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              placeholder="Select end date"
            />
            {formErrors.endDate && (
              <div className="form-error">{formErrors.endDate}</div>
            )}
          </FormItem>
          <FormItem label="End Time">
            <TimePicker
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              placeholder="Select end time"
            />
            {formErrors.endTime && (
              <div className="form-error">{formErrors.endTime}</div>
            )}
          </FormItem>

          <FormItem
            label={
              <Label style={{ alignSelf: "start", paddingTop: "0.25rem" }}>
                Event Description
              </Label>
            }
          >
            <TextArea
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleInputChange}
              placeholder="Briefly tell us about your Event"
              rows={5}
            />
          </FormItem>
        </FormGroup>

        <FormGroup titleText="Point Of Responsibility Data">
          <FormItem label="POR Name">
            <Input
              name="porName"
              value={formData.porName}
              onChange={handleInputChange}
              placeholder="Enter POR name"
            />
            {formErrors.porName && (
              <div className="form-error">{formErrors.porName}</div>
            )}
          </FormItem>
          <FormItem label="POR E-mail ID">
            <Input
              name="porEmail"
              value={formData.porEmail}
              onChange={handleInputChange}
              placeholder="Enter email Id"
            />
            {formErrors.porEmail && (
              <div className="form-error">{formErrors.porEmail}</div>
            )}
          </FormItem>
          <FormItem label="Institutions">
            <MultiComboBox
              name="institutions"
              selectedItems={formData.institutions.map((item) => ({
                text: item,
              }))}
              onChange={handleMultiComboBoxChange}
              placeholder="Select the Universities you want"
            >
              <MultiComboBoxItem text="VJTI" />
              <MultiComboBoxItem text="Cummins" />
              <MultiComboBoxItem text="Amritha" />
              <MultiComboBoxItem text="XXX" />
              <MultiComboBoxItem text="YYY" />
            </MultiComboBox>
          </FormItem>
        </FormGroup>
      </Form>
      <div className="button-container">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default FormPage;
