export default function CoreFunctionsSlide() {
  const items = [
    { icon: 'target', title: 'Scope', desc: 'Defining campaign deliverables and KPIs', border: 'border-cyan-400', tint: 'text-cyan-300' },
    { icon: 'clock', title: 'Time', desc: 'Managing content calendars and deadlines', border: 'border-sky-400', tint: 'text-sky-300' },
    { icon: 'dollar-sign', title: 'Cost', desc: 'Budgeting for content production and ads', border: 'border-blue-400', tint: 'text-blue-300' },
    { icon: 'award', title: 'Quality', desc: 'Ensuring brand consistency and engagement', border: 'border-cyan-400', tint: 'text-cyan-300' }
  ]
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-blue-500 mr-4" />
          <h2 className="text-3xl font-bold">Core Functions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(i => (
            <div key={i.title} className={`bg-gray-800/60 backdrop-blur p-6 rounded-lg border-l-4 ${i.border} border border-gray-700/40`}>
              <h3 className="font-bold text-xl mb-3 flex items-center">
                <i data-feather={i.icon} className={`mr-2 ${i.tint}`} /> {i.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm md:text-base">
          <p>Balancing these four constraints determines campaign success</p>
        </div>
      </div>
    </section>
  )
}
