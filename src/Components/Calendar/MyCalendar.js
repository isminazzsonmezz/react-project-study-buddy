import React, { useState, useEffect  } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // tıklama eventlerini destekler
import { v4 as uuidv4 } from "uuid";

function MyCalendar() {
  const [events, setEvents] = useState([
    {id: "1", title: 'My Birthday ', date: '2025-06-14' },
    {id: "2", title: 'Meeting ', date: '2025-04-28' }
  ]);

  // for Id.. 
  // const eventId = () => String(new Date().getTime());

  useEffect(() => {
    async function fetchHolidays() {
      try {
        const response = await fetch('https://date.nager.at/api/v3/PublicHolidays/2025/TR');
        const data = await response.json();

        // API'den gelen veriyi FullCalendar formatına dönüştürüyoruz.
        const holidays = data.map(holiday => ({
          title: `${holiday.localName}`,
          date: holiday.date,
          color: 'green'  // Tatiller yeşil olacak.
        }));

        setEvents(events=> [...events, ...holidays]);
      } catch (error) {
        console.error("Tatilleri çekerken hata oluştu:", error);
      }
    }

    fetchHolidays();
  }, []);

  const handleDateClick = (info) => {
    const title = prompt("Add event:");
    if (title) {
      setEvents([...events, {id: uuidv4(), title, date: info.dateStr}]);
    }
  };
    // this function is to delete event
    const handleDeleteEventClick = (info) => {
      const confirmed = window.confirm(`Delete the event? "${info.event.title}"`);
      if (confirmed) {
        // remove event
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== info.event.id)
        );
      }
    };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Event Calendar 📅</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // interaction plugin ekledik
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleDeleteEventClick}
        events={events}
      />
    </div>
  );
}

export default MyCalendar;
