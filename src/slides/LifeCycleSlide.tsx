export default function LifeCycleSlide() {
  const phases = [
    { n: 1, title: 'Initiating', desc: 'Client brief → Creative kickoff', color: 'bg-cyan-500' },
    { n: 2, title: 'Planning', desc: 'Content calendar → Budget approval', color: 'bg-cyan-600' },
    { n: 3, title: 'Executing', desc: 'Content creation → Platform deployment', color: 'bg-blue-500' },
    { n: 4, title: 'Monitoring', desc: 'Analytics review → Optimization', color: 'bg-blue-600' },
    { n: 5, title: 'Closing', desc: 'Performance report → Retrospective', color: 'bg-sky-500' }
  ]
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-sky-500 mr-4" />
          <h2 className="text-3xl font-bold">Project Life Cycle</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-sky-500" />
          <div className="space-y-8 pl-0 md:pl-16">
            {phases.map(p => (
              <div className="flex items-start" key={p.n}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${p.color} flex items-center justify-center mr-4 mt-1`}>
                  <span className="text-white font-bold text-sm">{p.n}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
