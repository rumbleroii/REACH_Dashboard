import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressIndicator, ObjectStatus } from '@ui5/webcomponents-react';
import fetchEventData from './fetchEventData';

const EventDetails = ({ events }) => {
    const { eventId } = useParams(); // Get the eventId from the URL using useParams hook
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true); // Add the loading state and set it to true initially

    useEffect(() => {
        // Call the function to fetch event data based on the eventId
        const getEventData = async () => {
          try {
            const eventData = await fetchEventData(eventId); // Pass the eventId to the fetchEventData function
            setEvent(eventData);
            setLoading(false); // Update the loading state to false once the data is fetched
          } catch (error) {
            console.error('Error fetching event data:', error);
            setLoading(false); // Update the loading state to false in case of an error
          }
        };
      
    getEventData();
}, [eventId]); // Make sure to add eventId as a dependency of the useEffect hook

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h2>{event.eventName}</h2>
      <p><strong>Event ID:</strong> {event.eventId}</p>
      <p><strong>Deadline:</strong> {event.deadline}</p>
      <p><strong>Status:</strong> {event.status}</p>
      <p><strong>Category:</strong> {event.pillar}</p>
      <p><strong>Progress:</strong> {event.progress}%</p>
      {/* Add other event details here */}
    </div>
  );
};

export default EventDetails;
