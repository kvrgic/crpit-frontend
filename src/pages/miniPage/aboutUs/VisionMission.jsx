import React from 'react'

const VisionMission = () => {
  return (
    <div>
        <section className="py-12 px-6 md:px-24 bg-white">
        <div className="grid md:grid-cols-2 gap-6">
    
        {/* M I S I J A */}
        <div className="bg-white p-8 shadow-sm">
            <p className="text-sm text-primary border-l-4 pl-2 border-primary mb-1">Naša</p>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Misija</h3>
            <p className="text-primary font-medium italic">Misija našeg udruženja je rad na podsticanju i razvijanju svijesti o značaju razvoja tehničke kulture, tehnologije, inovativnosti i inovatorstva, informacionih tehnologija i tehnike općenito, s ciljem podizanja nivoa tehničke kulture, promocije inovativnog poduzetništva i jačanja privrede.</p>
        </div>

        {/* V I Z I J A */}
        <div className="bg-primary p-8 text-white">
            <p className="text-sm border-l-4 pl-2 border-white mb-1">Naša</p>
            <h3 className="text-4xl font-bold mb-4">Vizija</h3>
            <p className="italic font-medium">Naša vizija je tehnološki i informacijski razvijeno inkluzivno društvo sa izgrađenim kontekstom za inovativno poduzetništvo.</p>
        </div>

        </div>
        </section>

    </div>
  )
}

export default VisionMission