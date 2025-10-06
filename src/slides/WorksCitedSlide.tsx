export default function WorksCitedSlide() {
  const items = [
    'Project Management Institute. "A Guide to the Project Management Body of Knowledge (PMBOK® Guide)." 7th ed., 2021.',
    'Social Media Today. "The Complete Guide to Social Media Project Management." 2022.',
    'Forbes. "Why Every Social Media Team Needs a Project Manager." March 2023.',
    'LinkedIn Learning. "Project Management for Creative Professionals." 2022.',
    'HubSpot. "The Ultimate Guide to Social Media Management." 2023.'
  ]
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-gray-500 mr-4" />
          <h2 className="text-3xl font-bold">Works Cited</h2>
        </div>
        <div className="bg-gray-800/60 backdrop-blur rounded-lg p-6 border border-gray-700/40">
          <ol className="space-y-3 text-sm list-decimal list-inside">
            {items.map(i => <li key={i}>{i}</li>)}
          </ol>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm md:text-base">
          <p>Thank you!</p>
          <div className="flex justify-center mt-4 gap-3">
            <i data-feather="message-circle" className="w-6 h-6" />
            <i data-feather="twitter" className="w-6 h-6" />
            <i data-feather="linkedin" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
