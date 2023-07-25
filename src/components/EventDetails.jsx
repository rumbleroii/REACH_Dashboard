import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressIndicator, ObjectStatus } from '@ui5/webcomponents-react';
// Import the CSS file for your custom styles
import './EventDetails.css';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Update this dummyData object with your desired fields
  const dummyData = {
    eventId: '1a2b3c4d',
    eventName: 'Dummy Event',
    status: 'Success',
    progress: 60,
    pillar: 'Research',
    startDate: '2023-07-19',
    deadline: '2023-12-31',
    // Add other fields as needed...
  };

  useEffect(() => {
    const getEventData = async () => {
      try {
        // Simulate API call and set dummy data
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setEvent(dummyData);
        setLoading(false);
        setError(null);
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

  if (!event) {
    return <div>Event not found</div>;
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
          <h2 className="event-details-header">Event Details</h2>
          <div className="event-details-field">
            <div className="event-details-label">Event ID:</div>
            <div className="event-details-value">{event.eventId}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Deadline:</div>
            <div className="event-details-value">{event.deadline}</div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Status:</div>
            <div className="event-details-value">
              <span className={`event-details-status`}>{event.status}</span>
            </div>
          </div>
          <div className="event-details-field">
            <div className="event-details-label">Category:</div>
            <div className="event-details-value">{event.pillar}</div>
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
        </>
      )}
    </div>
  );
};

export default EventDetails;
