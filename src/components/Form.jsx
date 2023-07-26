import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import axios from "axios";

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
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

import "./Form.css";

const FormPage = ({addEvent}) => {
  const { eventId } = useParams();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    eventName: "",
    online: false,
    link: "",
    venue: "",
    eventType: "Research",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    status: "Success",
    progress: 0,
    eventDescription: "",
    porName: "",
    porEmail: "",
    institutions: [],
  });
  
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if(name === "eventType") value = event.detail.selectedOption.value;
    if(name === "status") value = event.detail.selectedOption.value;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleMultiComboBoxChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      institutions: event.detail.selectedItems.map((item) => item.text),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      
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
        status: formData.status,
        progress: 0,
        porName: formData.porName,
        porEmail: formData.porEmail,
        institutions: formData.institutions,
      };

      if(formData.id) {
        newEvent.id = formData.id;
      } 

      // Axios post
      axios.post("http://localhost:4000/create", newEvent)
      .then((res) => {
        console.log("POSTED");
      })
      .catch((err) => {
        console.log(err);
      })

      // Show success message
      setOpen(true);

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
        status: '',
        porName: '',
        porEmail: '',
        progress: 0,
        institutions: [],
      });

    } else {
      setFormErrors(errors);
    }
  };

  const handleOnlineChange = (event) => {
    const onlineValue = event.detail.selectedOption.value;
    if(onlineValue == "Online") {
      setOnline(0);
    }
    if(onlineValue == "Offline") {
      setOnline(1);
    }
    if(onlineValue == "Hybrid") {
      setOnline(2);
    }
    console.log(onlineValue);
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

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/${eventId}`);
        const eventData = response.data.data[0];
        setFormData({
          id: eventData.id,
          eventName: eventData.eventName,
          online: eventData.online,
          link: eventData.link,
          venue: eventData.venue,
          eventType: eventData.eventType,
          startDate: eventData.startDate,
          startTime: eventData.startTime,
          endDate: eventData.endDate,
          endTime: eventData.endTime,
          eventDescription: eventData.eventDescription,
          status: eventData.status,
          porName: eventData.porName,
          porEmail: eventData.porEmail,
          progress: eventData.progress,
          institutions: eventData.institutions || [], // In case institutions is null
        });
      } catch (error) {
        console.error("Error fetching event data:", error);
        // Handle error if needed
      }
    };

    // Fetch event details only if the location pathname contains 'edit'
    if (location.pathname.includes("edit")) {
      getEventDetails();
    }
  }, [eventId, location.pathname]);

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
          <FormItem label="Event Type">
            <Select
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
            >
              <Option value="Research">Research</Option>
              <Option value="Experience">Experience</Option>
              <Option value="Learning">Learning</Option>
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
          <FormItem label="Event Status">
            <Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <Option value="Success">On-time</Option>
              <Option value="Warning">Delayed</Option>
              <Option value="Error">Cancelled</Option>
              <Option value="Information">Completed</Option>
            </Select>
            {formErrors.eventType && (
              <div className="form-error">{formErrors.status}</div>
            )}
          </FormItem>
          <FormItem label="Event Type">
            <Select
              name="online"
              value={formData.eventType}
              onChange={handleOnlineChange}
            >
              <Option value="Online">Online</Option>
              <Option value="Offline">Offline</Option>
              <Option value="Hybrid">Hybrid</Option>
            </Select>
            {formErrors.eventType && (
              <div className="form-error">{formErrors.eventType}</div>
            )}
          </FormItem>
          {online === 0 ? (
              <FormItem label="Link">
                <Input
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  placeholder="Enter link"
                />
                {formErrors.eventName && (
                  <div className="form-error">{formErrors.eventName}</div>
                )}
              </FormItem>
          ) : (
            <div></div>
          )}

          {online === 1 ? (
              <FormItem label="Venue ">
                <Input
                  name="Venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  placeholder="Enter venue name"
                />
                {formErrors.eventName && (
                  <div className="form-error">{formErrors.eventName}</div>
                )}
              </FormItem>
          ) : (
            <div></div>
          )}

          {online === 2 ? (
              <>
                <FormItem label="Link">
                  <Input
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="Enter Link"
                  />
                  {formErrors.eventName && (
                    <div className="form-error">{formErrors.eventName}</div>
                  )}
                </FormItem>
                <FormItem label="Venue ">
                  <Input
                    name="Venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    placeholder="Enter venue name"
                  />
                  {formErrors.eventName && (
                    <div className="form-error">{formErrors.eventName}</div>
                  )}
                </FormItem>
              </>
          ) : (
            <div></div>
          )}
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
      <FlexBox alignItems={FlexBoxAlignItems.Center} justifyContent={FlexBoxJustifyContent.Center}>                        
        <Button style={{ width:"120px", margin:"30px"}} design="Emphasized" onClick={handleSubmit}>Submit</Button>
        {open && (<MessageBox
          onAfterOpen={function ka(){}}
          onBeforeClose={function ka(){}}
          onBeforeOpen={function ka(){}}
          onClose={function ka(){
            setOpen(false);
          }}
          open
          type="Submit"
        >
          Form Submitted!
        </MessageBox>)}
      </FlexBox>
    </div>
  );
};

export default FormPage;
