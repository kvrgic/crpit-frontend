import React from 'react'

const AboutUs = () => {
  return (

    <div>
        <section className="px-6 md:px-24 bg-white">
        <div className="grid md:grid-cols-2 gap-10">
            {/* Lijeva strana – tekst */}
            <div className="space-y-4 text-primary text-justify">
                <p>U savremeno društvu, u vremenu tehnologija, osnova razvijenog društva je razvijen i unaprijeđen privredni sektor, posebno realni i industrijska proizvodnja. Za uspješnu i razvijenu privredu naročito je bitan tehničko-tehnološki razvoj, a izuzetan značaj tome doprinosi inovativni pristup poduzetništvu i privredi. Uz sve to, neizostavna je IT industrija koja je budućnos razvoja. Svako društvo, pa i naše, teži da ima inovativnu tehnološki razvijenu privredu. Taj zadatak je dugoročan, i na tome se radi intenzivno i kontinurano kroz osmišljene programe, od osnovnog i srednjeg obrazovanja, pa do fakulteta i  drugih obrazovnih institucija.</p>
                <p>Udruženje <span className="font-semibold italic">CENTAR ZA RAZVOJ I PROMOCIJU INOVATORSTVA, TEHNIKE I INFORMACIONIH TEHNOLOGIJA–CRPIT</span> je odgojno-obrazovno udruženje koje se bavi razvojem, promocijom, obrazovanjem, afirmacijom i unapređenjem inovatorstva, tehnike, tehnologije, tehničke kulture, ekologije, naučno-tehničkog stvaralaštva i informacionih tehnologija.</p>
            </div>

            {/* Desna strana – aktivnosti */}
            <div className="space-y-4 text-primary self-start">
                <p>Kroz mnoge aktivnosti udruženja, radimo na promociji značaja razvoja tehnike, tehnologije, tehničke kulture, inovatorstva, inovativnosti, informacionih tehnologija, a neke od njih su:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Naučno-stručna konferencija „INN&TECH“</strong> konferencija o značaju razvoja tehnike, tehnologije, inovatorstva, inovativnosti, IT tehnologija.
                    </li>
                    <li>
                        <strong>Web portal <a href="/" className="text-sky-600 underline">crpit.ba</a></strong> za promociju značaja razvoja tehnike, tehnologije, inovatorstva, inovativnosti, IT tehnologija.
                    </li>
                    <li>
                        <strong>Časopis INN&TECH</strong> koji promoviše ove oblasti, i izdaje se u printanom i e-izdanju
                    </li>
                </ul>
            </div>

        </div>
        </section>
    </div>
  )
}

export default AboutUs