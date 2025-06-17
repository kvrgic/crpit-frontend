import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ end, label, suffix = '+' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="bg-gray-50 p-6 rounded-xl shadow text-center">
      <h3 className="text-4xl font-bold text-primary">
        {inView ? <CountUp end={end} duration={3} /> : '0'}{suffix}
      </h3>
      <p className="text-gray-600 mt-2 text-sm">{label}</p>
    </div>
  );
};

const AnimatedCounters = () => {
  const stats = [
    { end: 8, label: 'Održanih naučno-stručnih konferencija' },
    { end: 3, label: 'Sajma inovativnosti i tehnike' },
    { end: 2000, label: 'Učesnika iz sektora obrazovanja i privrede' },
    { end: 150, label: 'Izloženih inovacija i projekata' },
    { end: 40, label: 'Organizacija partnera i institucija' },
    { end: 50, label: 'Predavača sa međunarodnim iskustvom' },
    { end: 25, label: 'Radionica i panel diskusija' },
    { end: 20000, label: 'Online pregleda i interakcija', suffix: '+' },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-10">Brze činjenice</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounters;
