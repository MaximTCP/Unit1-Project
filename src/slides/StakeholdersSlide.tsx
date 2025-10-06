export default function StakeholdersSlide() {
  const items = [
    { label: 'Clients', svg: <><circle cx="7" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="17" cy="12" r="1.6" /></> },
    { label: 'Creatives', svg: <path d="M12 5 L19 19 H5 Z" /> },
    { label: 'Finance', svg: <><path d="M7 17 V11" /><path d="M12 17 V8" /><path d="M17 17 V13" /></> },
    { label: 'Leadership', svg: <path d="M6 14 L12 8 L18 14" /> }
  ]
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-cyan-400 mr-4" />
          <h2 className="text-3xl font-bold">Key Stakeholders</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {items.map(i => (
            <div key={i.label} className="relative group">
              <div className="w-24 h-24 rounded-full bg-gray-800/70 backdrop-blur flex items-center justify-center border-2 border-cyan-400 group-hover:border-blue-400 transition-all">
                <svg className="w-10 h-10 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{i.svg}</svg>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {i.label}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800/60 backdrop-blur p-6 rounded-lg mt-4 border border-gray-700/40">
          <p className="text-center text-sm md:text-base">"The PM is the conductor ensuring all stakeholders play in harmony for campaign success."</p>
        </div>
      </div>
    </section>
  )
}
