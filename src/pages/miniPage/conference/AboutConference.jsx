import React, { useState } from 'react'
import coverImg from '../../../assets/images/7.jpg'
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const AboutConference = () => {
  const [expanded, setExpanded] = useState(false);

  const aboutC = [
    "Konferencija „INN&TECH“ – konferencija o značaju razvoja tehnike, tehnologije, inovatorstva, inovativnosti i IT tehnologija, je naučno-stručni skup kojim se želi promovisati značaj razvoja ovih oblasti za društvo, društvenu zajednicu, privredni i ekonomski razvoj, a naročito, razvijanje svijesti kod mladih o značaju obrazovanja za tehnička i IT zanimanja.",
    "Globalno tržište je turbulentno, zahtjevi od proizvoda dosta visoki, nivoi tehnike, tehnologije i organizacije praćeni novom proizvodnom filozofijom, profilirali su uslove koje kadrovi moraju ispunjavati. U proizvodno orijentiranom tržištu, da bi se obezbijedila konkurentna proizvodnja neophodno je kvalitetno obrazovanje u svim sferama ljudske djelatnosti.",
    "Suočeni sa odlaskom mladih visokoobrazovanih kadrova iz BiH, rapidno smanjen broj upisanih studenata, nedostatak laboratorija na fakultetima i praktičnih vještina kroz nastavu, sve manja povezanost visokoobrazovnih ustanova sa privrednim subjektima stavljaju sve nivoe vlasti pred ozbiljne izazove.",
    "Iz toga razloga, INN&TECH konferencijom želi se potaknuti Univerziteti, privredne komore, privredne subjekte, udruženja klastera, institute i sve druga, da sinergijskim djelovanjem trasiraju optimalan put ka konkurentnom privrednom sektoru i kvalitetnom  obrazovanju.",
    "Kadrovi moraju biti inovativni, kreativni u sektorima industrije koji baštine tradiciju u BiH, kao što su metalska, elektroindustrija, drvoprerađivačka, farmaceutska…",
    "Posebnu pažnju država bi trebala usmjeriti na informacione tehnologije bez kojih danas ne može funkcionirati niti jedan privredni i neprivredni sistem. Uz to IT pružaju jako kvalitetno i jeftino zapošljavanje u globalnom okruženju. Inovatora imamo, inovacija takođe, ali nema podrške za realizaciju i finalizaciju ideje. Jako su malo zainteresirani kako vlasnici finansijskog kapitala, tako i država u cjelini. Inovatori se ne rađaju, oni se njeguju i školuju od osnovnog obrazovanja. Zadatak svih nas je da pronađemo najinovativniji put.",
  ];

const visibleAbout = expanded ? aboutC : aboutC.slice(0, 2);
  return (
  <>
    {/* Hero sekcija */}
    <div className="relative h-[35vh] bg-cover bg-center text-white text-center m-0 p-0" style={{ backgroundImage: `url(${coverImg})` }}>
      <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-5xl font-bold uppercase text-blue-400 tracking-[0.2em]">O KONFERENCIJI</h1>
        </div>
      </div>

    {/* Tekstualni sadržaj ispod slike */}
    <section className="mx-auto md:px-24 px-6 py-10 space-y-6">
      <ul className="list-disc pl-5 space-y-3 leading-relaxed">
        {visibleAbout.map((about, idx) => (
          <li key={idx} className="italic text-primary text-lg md:text-xl">{about}</li>
        ))}
      </ul>

      <div className="text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center text-orange-600 hover:underline text-sm font-medium">
          
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

      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-orange-500 w-8 h-8" />
        <h2 className="text-4xl font-bold text-primary">Cilj konferencije</h2>
      </div>

      <ul className="list-disc pl-5 space-y-3 leading-relaxed">
        <li className="italic text-primary text-lg md:text-xl">
          Cilj konferencije je razvijanje i podizanje opće svijesti o značaju tehnike, tehnologije, tehničke kulture, inovativnosti, inovatorstva i IT tehnologija za društveni interes. Cilj je i da se izvrši sinergija obrazovnog, privrednog i naučnog sektora, a sve u cilju konkurentnog i ekonomski stabilnog društva. Konačan cilj su mladi, učenici srednjih i osnovnih škola, te studenti, da se razvije njihovo interesovanje  prema tim oblastima.
        </li>
      </ul>
    </section>    
  </>
);
}

export default AboutConference