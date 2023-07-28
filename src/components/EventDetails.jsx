import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, Grid, Timeline, TimelineItem } from "@ui5/webcomponents-react";

// icons
import "@ui5/webcomponents-icons/dist/calendar";
import "@ui5/webcomponents-icons/dist/in-progress";

import {
  ProgressIndicator,
  Button,
  MessageBox,
  Text,
  ObjectStatus,
} from "@ui5/webcomponents-react";

import axios from "axios";

//CSS 
import "./EventDetails.css";

const statusObject = {
  Success: "On-Time",
  Warning: "Delayed",
  Information: "Completed",
  Error: "Cancelled",
};

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getEventData = async () => {
      try {
        await axios.get(`https://reach-backend.onrender.com/${eventId}`)
          .then((res) => {
            setEvent(res.data.data[0]);
            setLoading(false);
            setError(null);
          })

          .catch((err) => {
            setError(err);
          });
      } catch (error) {
        console.error("Error fetching event data:", error);
        setLoading(false);
        setError("Event not found");
      }
    };

    getEventData();
  }, [eventId]);

  if (loading) {
    return (
    <Text
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
        margin: "20px",
      }}
    >
      Loading...
    </Text>
  )
  }

  if (error) {
    return (
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          margin: "20px",
        }}
      >
        {error}
      </Text>
    );
  }

  if (!event) {
    return (
      <>
        <MessageBox
          onAfterOpen={function ka() {}}
          onBeforeClose={function ka() {}}
          onBeforeOpen={function ka() {}}
          onClose={function ka() {
            setEvent("Event Not Found");
            navigate('/');
          }}
          open
          type="Submit"
        >
          Event Deleted!
        </MessageBox>
      </>
    );
  }

  if (event === "Event Not Found") {
    return (
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          margin: "20px",
        }}
      >
        Event Deleted
      </Text>
    );
  }

  const handleEdit = () => {
    const editPath = `/edit/${eventId}`;
    navigate(editPath);
  };

  const handleSubmit = async () => {
    await axios.get(`https://reach-backend.onrender.com/delete/${eventId}`)
      .then((res) => {
        console.log("POSTED");
      })
      .catch((res) => {
        console.log(res);
      });

    setEvent(null);
  };

  return (
    <div style={{ margin:"40px" }}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="event-details-error">{error}</div>
      ) : !event ? (
        <div>Event not found</div>
      ) : (
        <Grid>
          <div data-layout-span="XL5 L5 M5 S12">
            <div style={{ marginBottom:"30px" }}>
              <Text style={{
                fontSize: "25px",
                fontWeight:"bold",
                margin:"5px"
              }}>Event Details</Text>
              <hr style={{
                marginBottom:"15px",
              }}></hr>

              <div className="event-details-field">
                <Text className="event-details-label">Event Title:</Text>
                <Text className="event-details-value">{event.eventName}</Text>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">Category:</Text>
                <Text className="event-details-value">{event.eventType}</Text>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">Start Date:</Text>
                <Text className="event-details-value">{event.startDate}</Text>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">End Date:</Text>
                <Text className="event-details-value">{event.endDate}</Text>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">Start Time:</Text>
                <Text className="event-details-value">{event.startTime}</Text>
              </div>
            
              <div className="event-details-field">
                <Text className="event-details-label">End Time:</Text>
                <Text className="event-details-value">{event.endTime}</Text>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">Online:</Text>
                <Text className="event-details-value">{event.online ? "True" : "False"}</Text>
              </div>

              {event.link ? (
                <div className="event-details-field">
                  <Text className="event-details-label">Link:</Text>
                  <Text className="event-details-value">{event.link}</Text>
                </div>
              ) : null}

              {event.venue ? (
                <div className="event-details-field">
                  <Text className="event-details-label">Venue:</Text>
                  <Text className="event-details-value">{event.venue}</Text>
                </div>
              ) : null}
              

              <div className="event-details-field">
                <Text className="event-details-label">Event Description:</Text>
                <Text className="event-details-value">{event.eventDescription}</Text>
              </div>
            </div>

            <div style={{ marginBottom:"30px" }}>
              <Text style={{
                  fontSize: "25px",
                  fontWeight:"bold",
                  margin:"5px"
                }}>Event Status</Text>
                <hr style={{
                  marginBottom:"15px",
                }}></hr>

              <div className="event-details-field">
                <Text className="event-details-label">Status:</Text>

                <div className="event-details-value">
                  <ObjectStatus showDefaultIcon state={event.status}>
                    {statusObject[event.status]}
                  </ObjectStatus>
                </div>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">Progress:</Text>

                <Text className="event-details-value">
                  <ProgressIndicator
                    style={{
                      width: "50%",
                    }}
                    value={event.progress}
                    displayValue={`${event.progress ? event.progress : 0}%`}
                    className="event-details-progress"
                  >
                    <div
                      className="event-details-progress-value"
                      style={{ width: `${event.progress}%` }}
                    />
                  </ProgressIndicator>
                </Text>
              </div>
            </div>

            <div style={{ marginBottom:"30px" }}>
              <Text style={{
                fontSize: "25px",
                fontWeight:"bold",
                margin:"5px"
              }}>Person Of Responsibility</Text>
              <hr style={{
                marginBottom:"15px",
              }}></hr>

              <div className="event-details-field">
                <Text className="event-details-label">Name:</Text>

                <Text className="event-details-value">{event.porName}</Text>
              </div>

              <div className="event-details-field">
                <Text className="event-details-label">E-mail:</Text>

                <Text className="event-details-value">{event.porEmail}</Text>
              </div>

              {event.institutions && (
                <div className="event-details-field">
                  <Text className="event-details-label">Institutions:</Text>

                  <Text className="event-details-value">
                    {event.institutions.join(", ")}
                  </Text>
                </div>
              )}
              
            </div>

            <div style={{ marginBottom:"30px" }}>
              <Text style={{
                  fontSize: "25px",
                  fontWeight:"bold",
                  margin:"5px"
                }}>Checkpoints</Text>
                <hr style={{
                  marginBottom:"15px",
                }}></hr>
              <Timeline layout="Horizontal">
                {event.checkpoint.length === 0 ? (<Text>Set Checkpoints through the edit option!</Text>) : null}
                {event.checkpoint.map((checkpoint, index) => (
                  <TimelineItem
                    icon="calendar"
                    subtitleText={checkpoint.date}
                    titleText={checkpoint.title}
                  >
                  {checkpoint.status === true ? (
                    <ObjectStatus state="Success">
                      Completed
                    </ObjectStatus>
                  ) : (
                    <ObjectStatus state="Error">
                      Not Completed
                    </ObjectStatus>
                  )}
                  </TimelineItem>
                ))}
                  
              </Timeline>
            </div>
          </div>
          <FlexBox data-layout-span="XL4 L4 M4 S12" justifyContent={FlexBoxJustifyContent.Center} alignItems={FlexBoxAlignItems.Center}>
            <Button design="Emphasized" style={{ width: "120px", margin: "20px"}} onClick={handleEdit}>
              Update Event
            </Button>

            <Button
              style={{
                  width: "120px",
                  borderColor: "#bb0000",
                  backgroundColor: "#bb0000",
                  color: "white",
                }}
                design="Emphasized"
                onClick={handleSubmit}
            >
              Delete Event
            </Button>
          </FlexBox>
        </Grid>
      )}
    </div>
  );
};

export default EventDetails;
