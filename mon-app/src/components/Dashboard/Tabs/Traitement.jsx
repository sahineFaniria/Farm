import React from 'react';
import { Button } from '../../ui/button';
import 'chart.js/auto'; // Optional: Register all default Chart.js scales
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const events = [
  { title: 'Meeting', start: new Date() },
  { title: 'Vente de canard', date: '2024-05-11' },
  { title: 'Vaccin de boeuf', date: '2024-05-2' },
  { title: 'Vaccin de Dindes', date: '2024-05-15' },
  { title: 'Vaccin de Mouton', date: ' 2024-05-23 11:30' },

];

const renderEventContent = (eventInfo) => {
  return (
    <div className="event-content  bg-[#605DFF] px-4 py-1 rounded text-white">
        <span className="event-title">{eventInfo.event.title}</span>
        <br />
        <b>{eventInfo.timeText}</b>
    </div>
  );
};

const Traitement = () => {
  return (
    <div className="px-5 py-2">
      <Button className=" text-white mt-5 mb-5" variant="rafane" size="sm" >Ajouter+</Button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
      {/* You can optionally keep the commented-out Line chart code here */}
    </div>
  );
};

export default Traitement;