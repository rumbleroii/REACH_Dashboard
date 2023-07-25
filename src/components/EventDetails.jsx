import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressIndicator, ObjectStatus } from '@ui5/webcomponents-react';
import fetchEventData from './fetchEventData';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const eventData = await fetchEventData(eventId);
        setEvent(eventData);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching event data:', error);
        setLoading(false);
        setError('Event not found');
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
    return <div>Event not found</div>;
  }

  return (
    <>
      <h2>{event.eventName}</h2>
      <p><strong>Event ID:</strong> {event.eventId}</p>
      <p><strong>Deadline:</strong> {event.deadline}</p>
      <p><strong>Status:</strong> {event.status}</p>
      <p><strong>Category:</strong> {event.pillar}</p>
      <p><strong>Progress:</strong> {event.progress}%</p>
      
    </>
  );
};

export default EventDetails;
