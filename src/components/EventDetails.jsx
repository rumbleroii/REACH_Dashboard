import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressIndicator, ObjectStatus, Button, MessageBox, Text} from '@ui5/webcomponents-react';

import axios from 'axios';

// Import the CSS file for your custom styles
import './EventDetails.css';

const EventDetails = () => {
  const { eventId } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    const getEventData = async () => {
      try {
        // Simulate API call and set dummy data
        await axios.get(`http://localhost:4000/${eventId}`)
        .then((res) => {
          setEvent(res.data.data[0]);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err);
        })

      } catch (error) {
        console.error('Error fetching event data:', error);
        setLoading(false);
        setError('Event not found');
      }
    };

    getEventData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if(!event) {
    return (
      <>
        <MessageBox
          onAfterOpen={function ka(){}}
          onBeforeClose={function ka(){}}
          onBeforeOpen={function ka(){}}
          onClose={function ka(){
            setEvent("Event Not Found");
          }}
          open
          type="Submit"
        >
          Event Deleted!
        </MessageBox>
      </>
    )
  }
  
  if(event === "Event Not Found") {
    return (
      <Text style = {{ display:"flex", justifyContent: "center", fontSize: "20px", margin: "20px" }}>Event Deleted</Text>
    )
  }

  const handleSubmit = async () => {
    await axios.delete(`http://localhost:4000/delete/${eventId}`)
    .then((res) => {
      console.log("POSTED");
    })
    .catch((res) => {
      console.log(res);
    })

    setEvent(null);;
  }


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
          <p className="event-details-header">Event Details</p>
          <div className="event-details-field">
            <div className="event-details-label">Event Title:</div>
            <div className="event-details-value">{event.eventName}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Event ID:</div>
            <div className="event-details-value">{event.id}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Status:</div>
            <div className="event-details-value">
              <span className={`event-details-status`}>{event.status}</span>
            </div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Category:</div>
            <div className="event-details-value">{event.eventType}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Progress:</div>
            <div className="event-details-value">
              <ProgressIndicator
                value={event.progress / 100}
                displayValue={`${event.progress}%`}
                className="event-details-progress"
              >
                <div
                  className="event-details-progress-value"
                  style={{ width: `${event.progress}%` }}
                />
              </ProgressIndicator>
            </div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Start Date:</div>
            <div className="event-details-value">{event.startDate}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Start Time:</div>
            <div className="event-details-value">{event.startTime}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">End Date:</div>
            <div className="event-details-value">{event.endDate}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">End Time:</div>
            <div className="event-details-value">{event.endTime}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Event Description:</div>
            <div className="event-details-value">{event.eventDescription}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">POR Name:</div>
            <div className="event-details-value">{event.porName}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">POR E-mail ID:</div>
            <div className="event-details-value">{event.porEmail}</div>
          </div>
          {event.institutions && (
            <div className="event-details-field">
              <div className="event-details-label">Institutions:</div>
              <div className="event-details-value">
                {event.institutions.join(', ')}
              </div>
            </div>
          )}
          <Button style={{ width:"120px", margin:"30px"}} design="Emphasized" onClick={handleSubmit}>Delete Event</Button>
        </>
      )}
    </div>
  );
};

export default EventDetails;
