export default function BackgroundSlide() {
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-cyan-500 mr-4" />
          <h2 className="text-3xl font-bold">Becoming a PM</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Education Path</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center"><i data-feather="book" className="mr-2 w-5 h-5" /> Marketing or Business Degrees</li>
              <li className="flex items-center"><i data-feather="award" className="mr-2 w-5 h-5" /> PMP or CAPM Certifications</li>
              <li className="flex items-center"><i data-feather="monitor" className="mr-2 w-5 h-5" /> Social Media Marketing Courses</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">Experience Needed</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-center"><i data-feather="users" className="mr-2 w-5 h-5" /> 3-5 years in digital marketing</li>
              <li className="flex items-center"><i data-feather="trending-up" className="mr-2 w-5 h-5" /> Proven campaign leadership</li>
              <li className="flex items-center"><i data-feather="tool" className="mr-2 w-5 h-5" /> Platform expertise (Meta, TikTok, etc.)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-gray-800/60 backdrop-blur rounded-lg p-6 border border-gray-700/50">
          <div className="flex items-start">
            <i data-feather="info" className="text-yellow-400 mr-4 mt-1" />
            <p className="text-sm md:text-base">"At NextEast Media, we value hands-on experience with influencer campaigns and viral content strategies as much as formal education."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
