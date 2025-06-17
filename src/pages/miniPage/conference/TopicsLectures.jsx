import React from 'react';

const events = [
  {
    type: 'Predavanje',
    title: 'AI ili aj',
    speaker: 'MA Jelena Kalinić',
    img: '/Presenters/Jelena.png',
    color: 'from-blue-100 to-blue-50'
  },
  {
    type: 'Panel diskusija',
    title: 'Digitalne transformacije u obrazovanju i poduzetništvu',
    speaker: 'MODERATOR: prof.dr. Hazim Bašić,',
    img: '/Presenters/panel1.jpg',
    color: 'from-green-100 to-green-50'
  },
  {
    type: 'Predavanje',
    title: 'Mladi u svijetu društvenih mreža',
    speaker: 'prof.dr. Kasim Tatić',
    img: '/Presenters/Kasim.png',
    color: 'from-indigo-100 to-indigo-50'
  },
  {
    type: 'Predavanje',
    title: 'Digitalne transformacije sa fokusom na Big Data, vještačku inteligenciju i robotiku',
    speaker: 'prof.dr. Lejla Banjanović-Mehmedović',
    img: '/Presenters/Lejla.png',
    color: 'from-purple-100 to-purple-50'
  },
  {
    type: 'Panel disukusija',
    title: 'Inovativne primjene novih tehnologija u obrazovanju, nauci i poduzetništvu',
    speaker: 'MODERATOR: Dado Durić dipl.ing.',
    img: '/Presenters/panel2.jpg',
    color: 'from-pink-100 to-pink-50'
  }
];

const EventCard = ({ event }) => (
  <div
    className={`flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-xl p-4 md:p-5 space-y-4 md:space-y-0 md:space-x-4 transition-transform hover:scale-[1.01]`}>
    <div className="w-32 h-32 rounded-full overflow-hidden border-1 border-white shadow-md flex-shrink-0">
      <img
      src={event.img}
      alt={event.title}
      className="w-full h-full object-cover object-top rounded-full border-4 border-white shadow-md"/>
    </div>
    
    <div className="flex flex-col text-center md:text-left">
      <span
      className={`text-sm font-semibold uppercase ${
        event.type.toLowerCase().includes('panel') ? 'text-green-800' : 'text-blue-800'
      }`}>
      {event.type}
      </span>
      <h3 className="text-xl font-bold text-primary mt-1">{event.title}</h3>
      <p className="text-sm text-gray-800 mt-2">{event.speaker}</p>
    </div>
  </div>
);

const TopicsLectures = () => {
  return (
    <div className="w-full py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-primary text-center">Teme i predavanja</h2>
      <div className="space-y-6">
        {events.map((event, idx) => (
          <EventCard event={event} key={idx} />
        ))}
      </div>
    </div>
  );
};


export default TopicsLectures;
