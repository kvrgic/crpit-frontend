import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const OurGoals = () => {
  const [expanded, setExpanded] = useState(false);

  const goals = [
    "Saradnja sa odgojno-obrazovnim udruženjima, obrazovnim ustanovama i institucijama, privrednim organizacijama i institucijama, međunarodnim organizacijama i drugim vladinim, nevladinim i društvenim činiocima radi unapređivanja opće politike razvoja, promocije i unapređenje inovatorstva, tehnike, tehničke kulture, ekologije, naučno-tehničkog stvaralaštva i informacionih tehnologija.",
    "Podsticanje, promocija, ukazivanje i razvijanje značaja inovatorstva, tehnike, tehnologije, tehničke kulture, ekologije i informacionih tehnologija na razvoj privrede.",
    "Razvijanje interesovanja mladih za nauku i tehnologiju, stvaranje općih uvjeta za bavljenje djelatnošću u cilju sticanja naučno-tehničkog znanja i vještina.",
    "Zalaganje za neformalno obrazovanje mladih i odraslih iz oblasti tehnike, ekologije, inovatorstva, tehnologije, informacionih tehnologija i naučno-tehničkih oblasti.",
    "Neposredno i sa drugim subjektima, neformalno obrazovanje, stručno osposobljavanje i usavršavanje nastavnika i profesora stručnih profila, odraslih i mladih.",
    "Otkrivanje i rad sa nadarenom i talentiranom djecom i omladinom za informacione tehnologije, inovatorstvo, naučno-tehničko stvaralaštvo i stvaranje uvjeta za njihov dalji razvoj i profesionalno usavršavanje i orijentaciju.",
    "Radno i stručno osposobljavanje za oblasti informacionih tehnologija, inovatorstva, tehnike, tehnologije i tehničke kulture.",
    "Organiziranje naučnih skupova, konferencija, stručnih seminara, smotri, takmičenja, savjetovanja, simpozija, sajmova, festivala iz područja inovatorstva, tehnike, tehnologije, ekologije, informacionih tehnologija, tehničke kulture.",
    "Pomoć i podrška pri organiziranju izdavačke, istraživačke i druge djelatnosti.",
    "Razvijanje, podsticanje, briga, edukacija i podizanje svijesti o značaju zaštite i očuvanja životne sredine.",
    "Ostvarivanje međunarodne saradnje sa međunarodnim organizacijama i organima iz drugih zemalja koji se bave istom ili sličnom oblasti djelovanja.",
    "Rad na razvijanju i organiziranje sportsko-tehničkih takmičenja.",
    "Stvaranja podsticajnog okruženja za razvoj društvenog poduzetništva.",
    "Zalaganje na razvijanju, unapređenje i usavršavanje digitalnih kompetencija i STEM vještina i kompetencija kod odraslih i mladih, edukacija u oblasti tehničkih nauka, tehnologije i inžinjerstva.",
    "Razvijanje, promocija i unapređenje inženjerstva i tehničkih nauka, kao što su: robotika, elektronika, automatika, elektrotehnika, mašinstva, elektrotehnike, arhitektura, saobraćaj i druge.",
    "Organizuje izdavačku djelatnost naučne i stručne literature, časopisa, zbornika i druge izdavačke djelatnosti u printanoj i elektronskoj formi.",
  ];

  const visibleGoals = expanded ? goals : goals.slice(0, 2);

  return (
    <section className="mx-auto md:px-24 px-6 py-10 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-orange-500 w-8 h-8" />
        <h2 className="text-4xl font-bold">Ciljevi i djelatnost</h2>
      </div>

      <ul className="list-disc pl-5 space-y-3 leading-relaxed">
        {visibleGoals.map((goal, idx) => (
          <li key={idx} className="italic">{goal}</li>
        ))}
      </ul>

      <div className="text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center text-orange-600 hover:underline text-sm font-medium"
        >
          {expanded ? (
            <>
              Sakrij <ChevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              Pročitaj više <ChevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default OurGoals;
