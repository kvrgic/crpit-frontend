import React from 'react';

const agenda = [
  { time: "8.00 - 9.30", title: "Dolazak i registracija učesnika konferencije i sajma" },
  { time: "7.00 - 9.00", title: "Postavka izložbe Trećeg sajma inovacija i inovativnosti" },
  { time: "9.30 - 10.00", title: "Izjave za medije" },
  {
    time: "9.30 - 10.00",
    title: "OTVARANJE KONFERENCIJE",
    description: 
    `- Himna Bosne i Hercegovine
    Obraćanje: 
    - Predstavnik organizatora
    - prof.dr. Jasna Duraković, ministrica u Federalnom ministarstvu obrazovanja i nauke
    - prof.dr. Adna Mesihović, ministrica u Ministarstvu za nauku, visoko obrazovanje i mlade Kantona Sarajevo
    - Naida Hota-Muminović, ministrica u Ministarstvu za odgoj i obrazovanje Kantona Sarajevo
    `
  },
  {
    time: "10.00 - 10:20",
    title: "PREDAVANJE",
    description: 
    `Tema: AI ili aj
    Predavač: MA Jelena Kalinić
    `
  },
  {
    time: "10.20 - 11.00",
    title: "PANEL DISKUSIJA",
    description:
    `Digitalne transformacije u obrazovanju i poduzetništvu
    MODERATOR: prof.dr. Hazim Bašić
    `
  },
  {
    time: "11.00 - 11.500",
    title: 
    `PAUZA
    Obilazak Sajma inovacija i inovativnosti
    `,
    type: "pause"
  },
  {
    time: "11.50 - 12.15",
    title: "PREDAVANJE",
    description: 
    `Tema: Mladi u svijetu društvenih mreža
    Predavač: prof.dr. Kasim Tatić
    `
  },
  {
    time: "12.15 - 12.40",
    title: "PREDAVANJE",
    description: 
    `Tema: Digitalne transformacije sa fokusom na Big Data, vještačku inteligenciju i robotiku
    Predavač: prof.dr. Lejla Banjanović-Mehmedović
    `
  },
  {
    time: "12.40 - 13.30",
    title: "PANEL DISKUSIJA",
    description:
    `Inovativna primjena novih tehnologija u obrazovanju, nauci i poduzetništvu
    MODERATOR: Dado Durić, dipl.ing.mašinstva
    `
  },
  {
    time: "13.30 - 13.40",
    title: "Dodjela nagrada za učesnike konferencije"
  },
  {
    time: "13.40 - 13.50",
    title: "Dodjela priznanja učesnicima Sajma inovacija i inovativnosti"
  },
  {
    time: "13.50",
    title: "Zatvaranje konferencije"
  },
  {
    time: "14.00",
    title: "RUČAK",
    type: "pause"
  }
];
const Agenda = () => {
   return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold mb-12 text-primary text-center">
        Agenda
      </h1>
      
      <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-primary text-white text-lg">
              <th className="w-1/4 p-4 text-center">Vrijeme</th>
              <th className="w-3/4 p-4 text-center">Aktivnost</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((item, index) => (

              <tr key={index} className={`border-t border-gray-200 ${item.type === 'pause' ? 'bg-primary text-white font-semibold text-center' : ''}`}>
                
                <td className={`p-5 ${item.type === 'pause' ? 'bg-primary text-white' : 'bg-[#f2f6fb] text-primary'} font-semibold text-base align-top`}>
                  {item.time}
                </td>
                
                <td className={`p-5 whitespace-pre-line text-base ${item.type === 'pause' ? 'text-white' : 'text-gray-800'}`}>
                  <span className={`block font-bold uppercase text-lg ${item.type === 'pause' ? 'text-white' :'text-primary'}`}>
                    {item.title}
                  </span>
                  {item.description && (
                    <span className="block mt-2 text-gray-700 leading-relaxed">
                      {item.description}
                    </span>
                  )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default Agenda