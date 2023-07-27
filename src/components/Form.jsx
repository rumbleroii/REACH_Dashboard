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
  Text
} from "@ui5/webcomponents-react";

import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "./Form.css";

const FormPage = ({ addEvent }) => {
  const { eventId } = useParams();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [checkpoints, setCheckpoints] = useState([]);
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
    checkpoint: [],
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if (name === "eventType") value = event.detail.selectedOption.value;
    if (name === "status") value = event.detail.selectedOption.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleMultiComboBoxChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      institutions: event.detail.items.map((item) => item.text),
    }));
  };

  const handleAddCheckpoint = () => {
    setCheckpoints([...checkpoints, { title: "", status: "", date: "" }]);
  };

  const handleRemoveCheckpoint = (index) => {
    const newCheckpoints = [...checkpoints];
    newCheckpoints.splice(index, 1);
    setCheckpoints(newCheckpoints);
  };

  const handleCheckpointChange = (index, field, value) => {
    const newCheckpoints = [...checkpoints];
    newCheckpoints[index][field] = value;
    setCheckpoints(newCheckpoints);
  };

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
        progress: formData.progress,
        porName: formData.porName,
        porEmail: formData.porEmail,
        institutions: formData.institutions,
        checkpoint: checkpoints,
      };

      if (formData.id) {
        newEvent.id = formData.id;
      }

      // Axios post
      axios
        .post("http://localhost:4000/create", newEvent)
        .then((res) => {
          console.log("POSTED");
        })

        .catch((err) => {
          console.log(err);
        });

      // Show success message
      setOpen(true);
      // Clear the form data
      setFormData({
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
        status: "",
        porName: "",
        porEmail: "",
        progress: 0,
        institutions: [],
        checkpoint: [],
      });
    } else {
      setFormErrors(errors);
    }
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
          checkpoint: eventData.checkpoint,
        });

        setCheckpoints(eventData.checkpoint);
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

  // CSS
  return (
    <div style={{ margin: "30px", marginBottom: "40px" }}>
        
      <Form
        backgroundDesign="Transparent"
        columnsL={1}
        columnsM={1}
        columnsS={1}
        columnsXL={2}
        labelSpanL={2}
        labelSpanM={2}
        labelSpanS={1}
        labelSpanXL={2}
        titleText={
          <h1>
            <b>Add Event</b>
          </h1>
        }
      >
        <FormGroup titleText="Event Data">
          <FormItem label="Event Name">
            <Input
              //style={{ margin: "5px" }}
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

          <FormItem label="Link">
            <Input
              style={{ margin: "5px" }}
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="Enter the Link"
            />
            {formErrors.link && (
              <div className="form-error">{formErrors.link}</div>
            )}
          </FormItem>

          <FormItem label="Venue">
            <Input
              style={{ margin: "5px" }}
              name="venue"
              disabled={formData.online}
              value={formData.venue}
              onChange={handleInputChange}
              placeholder="Enter the Venue"
            />
            {formErrors.venue && (
              <div className="form-error">{formErrors.venue}</div>
            )}
          </FormItem>

          <FormItem label="Event Category">
            <Select
              style={{ margin: "5px" }}
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
              style={{ margin: "5px" }}
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
              style={{ margin: "5px" }}
              name="startTime"
              value={formData.startTime}
              onChange={(event) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  startTime: event.target.value,
                }));
              }}
              placeholder="Select start time"
            />

            {formErrors.startTime && (
              <div className="form-error">{formErrors.startTime}</div>
            )}
          </FormItem>

          <FormItem label="End Date">
            <DatePicker
              style={{ margin: "5px" }}
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
              style={{ margin: "5px" }}
              name="endTime"
              value={formData.endTime}
              onChange={(event) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  endTime: event.target.value,
                }));
              }}
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
              style={{ margin: "5px" }}
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleInputChange}
              placeholder="Briefly tell us about your Event"
              rows={5}
            />
          </FormItem>

          <FormItem label="Event Status">
            <Select
              style={{ margin: "5px" }}
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
        </FormGroup>
              
        <FormGroup titleText="Point Of Responsibility Data">
          <FormItem label="Name">
            <Input
              style={{ margin: "5px" }}
              name="porName"
              value={formData.porName}
              onChange={handleInputChange}
              placeholder="Enter POR name"
            />

            {formErrors.porName && (
              <div className="form-error">{formErrors.porName}</div>
            )}
          </FormItem>

          <FormItem label="E-mail ID">
            <Input
              style={{ margin: "5px" }}
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
              style={{ margin: "5px" }}
              name="institutions"
              selectedItems={formData.institutions.map((item) => ({
                text: item,
              }))}
              onSelectionChange={handleMultiComboBoxChange}
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

        {/* <FormGroup titleText="Checkpoint Data">
          {checkpoints.map((checkpoint, index) => (
            <>
              <FormItem label="Checkpoint Title">
                <Input
                  type="text"
                  value={checkpoint.title}
                  onChange={(e) =>
                    handleCheckpointChange(index, "title", e.target.value)
                  }
                  placeholder="Checkpoint Title"
                />
              </FormItem>
              <FormItem label="Checkpoint Status">
                <CheckBox
                  name="status"
                  checked={checkpoint.status}
                  onChange={(e) =>
                    handleCheckpointChange(index, "status", e.target.checked)
                  }
                />
              </FormItem>
              <FormItem label="Checkpoint End Date">
                <DatePicker
                  style={{ margin: "5px" }}
                  name="endDate"
                  value={checkpoint.date}
                  onChange={(e) =>
                    handleCheckpointChange(index, "date", e.target.value)
                  }
                  placeholder="Select end date"
                />
              </FormItem>
              <FormItem>
                <Button onClick={() => handleRemoveCheckpoint(index)}>
                  Remove
                </Button>
              </FormItem>
            </>
          ))}
          <FormItem>
            <Button
              style={{
                width: "200px",
                margin: "30px",
                display: "inline-block",
              }}
              design="Emphasized"
              onClick={handleAddCheckpoint}
            >
              Add Checkpoint
            </Button>
          </FormItem>
        </FormGroup> */}
      </Form>
      <hr></hr>
      <div style={{ marginTop:"50px"}}>
        <Text style={{fontWeight:"bold", marginBottom:"20px"}}>Checkpoint Data</Text>
        <div>
          {checkpoints.map((checkpoint, index) => (
            <FlexBox style={{
              gap:"40px"
            }}alignItems={FlexBoxAlignItems.Center}>
                <Text>{index}.</Text>
                <Input
                  type="text"
                  style={{width:"500px"}}
                  value={checkpoint.title}
                  onChange={(e) =>
                    handleCheckpointChange(index, "title", e.target.value)
                  }
                  placeholder="Checkpoint Title"
                />
                            
                <DatePicker
                  style={{ margin: "5px" }}
                  name="endDate"
                  value={checkpoint.date}
                  onChange={(e) =>
                    handleCheckpointChange(index, "date", e.target.value)
                  }
                  placeholder="Select end date"
                />
                <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Text>Completed</Text>
                <CheckBox
                  name="status"
                  checked={checkpoint.status}
                  onChange={(e) =>
                    handleCheckpointChange(index, "status", e.target.checked)
                  }
                />  
                </FlexBox>  
    
                <Button onClick={() => handleRemoveCheckpoint(index)}>
                  Remove
                </Button>
            </FlexBox>
            
          ))}
          
          <Button
            style={{
              width: "200px",
              marginTop:"20px"
            }}
            design="Emphasized"
            onClick={handleAddCheckpoint}
          >
            Add Checkpoint
          </Button>
        </div>
      </div>
      <Button
          style={{ width: "120px", float:"right", margin:"50px", border:"red", backgroundColor:"red"}}
          design="Emphasized"
          onClick={handleSubmit}
        >
          Submit
      </Button>
      <FlexBox
        alignItems={FlexBoxAlignItems.Center}
        justifyContent={FlexBoxJustifyContent.Center}
      >

        {open && (
          <MessageBox
            onAfterOpen={function ka() {}}
            onBeforeClose={function ka() {}}
            onBeforeOpen={function ka() {}}
            onClose={function ka() {
              setOpen(false);
            }}
            open
            type="Submit"
          >
            Form Submitted!
          </MessageBox>
        )}
      </FlexBox>
    </div>
  );
};

export default FormPage;
