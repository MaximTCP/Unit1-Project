export default function FacilitatingFunctionsSlide() {
  const items = [
    { title: 'HR', desc: 'Team coordination', svg: <><circle cx="10" cy="12" r="2" /><circle cx="15" cy="12" r="2" /></> , tint:'text-cyan-300'},
    { title: 'Communication', desc: 'Client updates', svg: <><rect x="5" y="6.5" width="14" height="9" rx="2" /><path d="M9 15.5 L9 19 L12 16" /></>, tint:'text-blue-300'},
    { title: 'Risk', desc: 'Crisis management', svg: <path d="M12 5 L20 19 H4 Z" />, tint:'text-sky-300'},
    { title: 'Procurement', desc: 'Vendor selection', svg: <><rect x="6" y="9" width="12" height="9" rx="2" /><path d="M9 9 Q12 6 15 9" /></>, tint:'text-cyan-300'}
  ]
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-cyan-500 mr-4" />
          <h2 className="text-3xl font-bold">Facilitating Functions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {items.map(i => (
            <div key={i.title} className="bg-gray-800/60 backdrop-blur p-4 rounded-lg text-center border border-gray-700/40">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center">
                <svg className={`w-8 h-8 ${i.tint}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{i.svg}</svg>
              </div>
              <h3 className="font-bold">{i.title}</h3>
              <p className="text-sm text-gray-400">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800/60 backdrop-blur p-6 rounded-lg border border-gray-700/40">
          <p className="text-center text-sm md:text-base">"Great PMs excel in these supporting functions to enable core campaign success."</p>
        </div>
      </div>
    </section>
  )
}
