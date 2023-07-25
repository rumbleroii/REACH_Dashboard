const fetchEventData = async (eventId) => {
    try {
      const response = await fetch(`/api/events/${eventId}`); // Replace '/api/events/' with the actual API endpoint to fetch event data by eventId
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const eventData = await response.json();
      return eventData;
    } catch (error) {
      console.error('Error fetching event data:', error);
      throw error;
    }
  };
  
  export default fetchEventData;
  