export default function RoleSlide() {
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-cyan-400 mr-4" />
          <h2 className="text-3xl font-bold">The Project Manager Role</h2>
        </div>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start"><i data-feather="check-circle" className="text-green-400 mr-3 mt-1" /><span>Orchestrates social media campaigns from concept to completion</span></li>
          <li className="flex items-start"><i data-feather="check-circle" className="text-green-400 mr-3 mt-1" /><span>Aligns creative vision with business objectives</span></li>
          <li className="flex items-start"><i data-feather="check-circle" className="text-green-400 mr-3 mt-1" /><span>Manages timelines, budgets, and team coordination</span></li>
          <li className="flex items-start"><i data-feather="check-circle" className="text-green-400 mr-3 mt-1" /><span>Acts as bridge between clients, creatives, and executives</span></li>
        </ul>
      </div>
    </section>
  )
}
