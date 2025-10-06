export default function ExperienceSlide() {
  const challenges = [
    'Managing creative egos and client expectations',
    'Platform algorithm changes',
    '24/7 nature of social media',
    'Tight deadlines with high stakes'
  ]
  const satisfaction = [
    'Seeing campaigns go viral',
    'Building brand communities',
    'Creative problem solving',
    'Tangible ROI results'
  ]
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-sky-500 mr-4" />
          <h2 className="text-3xl font-bold">The PM Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-sky-300"><i data-feather="alert-octagon" className="mr-2" />Challenges</h3>
            <ul className="space-y-3 text-sm md:text-base">
              {challenges.map(c => (
                <li key={c} className="flex items-start"><i data-feather="chevron-right" className="text-sky-400 mr-2 mt-1" /><span>{c}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-300"><i data-feather="heart" className="mr-2" />Satisfaction</h3>
            <ul className="space-y-3 text-sm md:text-base">
              {satisfaction.map(s => (
                <li key={s} className="flex items-start"><i data-feather="chevron-right" className="text-blue-400 mr-2 mt-1" /><span>{s}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm md:text-base">
          <p className="text-lg">"The thrill of launching a successful campaign outweighs all challenges."</p>
        </div>
      </div>
    </section>
  )
}
