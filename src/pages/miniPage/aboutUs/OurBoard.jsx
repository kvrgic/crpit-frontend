import React from 'react'
import salkoImg from '../../../assets/OurBoard/Salko.png';
import sadatImg from '../../../assets/OurBoard/Sadat.png';
import hazimImg from '../../../assets/OurBoard/Hazim.png';
import aleksandraImg from '../../../assets/OurBoard/Aleksandra.png';
import adisImg from '../../../assets/OurBoard/Adis.png';
import dadoImg from '../../../assets/OurBoard/Dado.png';
import aidaImg from '../../../assets/OurBoard/Aida.png';

{/** Naš tim */}
        const members = [
            {
                name: "Prof.dr. Hazim Bašić",
                title: "Član Upravnog odbora",
                image: hazimImg,
            },
            {
                name: "Prof.dr. Aleksandra Nikolić",
                title: "Član Upravnog odbora",
                image: aleksandraImg,
            },
            {
                name: "Prof.dr. Adis Muminović",
                title: "Član Upravnog odbora",
                image: adisImg,
            },
            {
            name: "MA Aida Kvrgić",
            title: "Sekretar i član Upravnog odbora",
            image: aidaImg,
            },
            {
                name: "Dado Durić, dip.ing.maš.",
                title: "Član Upravnog odbora",
                image: dadoImg,
            },
        ];

const OurBoard = () => {
  return (
    <div>
        <section className="py-12 px-6 md:px-24 bg-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Naš tim</h2>

        {/* Prvi red: 2 člana */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Član 1 */}
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow">
            <img
            src={salkoImg}
            alt="prof. Salko Križevac"
            className="w-60 h-60 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-bold">MA Salko Križevac</h3>
            <p className="text-primary text-sm">Predsjednik udruženja</p>
        </div>
        {/* Član 2 */}
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow">
            <img
            src={sadatImg}
            alt="mr. Anida Osmanović"
            className="w-60 h-60 object-cover object-top rounded-full mb-4"
            />
            <h3 className="text-lg font-bold">mr Sadat Kovačević</h3>
            <p className="text-primary text-sm">Predsjednik skupštine</p>
        </div>
        </div>

        {/* Drugi red: 5 članova */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow">
                <img
                src={member.image}
                alt={member.name}
                className="w-45 h-45 object-cover object-top rounded-full mb-3"
                />
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm text-center">{member.title}</p>
            </div>
        ))}
        </div>
        </section>
    </div>
)}

export default OurBoard