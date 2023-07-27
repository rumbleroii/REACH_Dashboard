import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Timeline, TimelineItem } from "@ui5/webcomponents-react";
import { Icon } from "@ui5/webcomponents-react";
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

// Import the CSS file for your custom styles

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

  // Use the useNavigate hook to get the navigation function

  const navigate = useNavigate();

  useEffect(() => {
    const getEventData = async () => {
      try {
        // Simulate API call and set dummy data

        await axios

          .get(`http://localhost:4000/${eventId}`)
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
    // Replace 'editPath' with the actual path to the edit page, passing the event ID as a parameter

    const editPath = `/edit/${eventId}`;
    navigate(editPath);
  };

  const handleSubmit = async () => {
    await axios
      .delete(`http://localhost:4000/delete/${eventId}`)
      .then((res) => {
        console.log("POSTED");
      })
      .catch((res) => {
        console.log(res);
      });

    setEvent(null);
  };

  return (
    <div className="event-details-container">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="event-details-error">{error}</div>
      ) : !event ? (
        <div>Event not found</div>
      ) : (
        <>
          <div className="ed">
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
              <Text className="event-details-label">Start Time:</Text>

              <Text className="event-details-value">{event.startTime}</Text>
            </div>

            <div className="event-details-field">
              <Text className="event-details-label">End Date:</Text>

              <Text className="event-details-value">{event.endDate}</Text>
            </div>

            <div className="event-details-field">
              <Text className="event-details-label">End Time:</Text>

              <Text className="event-details-value">{event.endTime}</Text>
            </div>

            <div className="event-details-field">
              <Text className="event-details-label">Event Description:</Text>

              <Text className="event-details-value">
                {event.eventDescription}
              </Text>
            </div>
          </div>

          <div className="status-por">
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
                  displayValue={`${event.progress}%`}
                  className="event-details-progress"
                >
                  <div
                    className="event-details-progress-value"
                    style={{ width: `${event.progress}%` }}
                  />
                </ProgressIndicator>
              </Text>
            </div>

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
          {/* Timeline */}
          <div className="checkpoints">
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

          <div
            className="buttons-container"
            style={{
              position: "relative",

              bottom: "20px",

              left: "82%",

              transform: "translateX(-50%)",

              display: "inherit",

              margin: "40px",

              gap: "30px",
            }}
          >
            <div
              style={{
                justifyContent: "center",

                alignItems: "center",
                // marginLeft: "100px",
              }}
            >
              <Button
                style={{ width: "120px", margin: "20px", marginBottom: "0px" }}
                onClick={handleEdit}
              >
                Edit
              </Button>

              <Button
                style={{
                  width: "120px",
                  borderColor: "#bb0000",
                  backgroundColor: "#bb0000",
                  margin: "20px",
                  marginBottom: "0px",
                  color: "white",
                }}
                design="Emphasized"
                onClick={handleSubmit}
              >
                Delete Event
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventDetails;
