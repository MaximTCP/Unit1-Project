export default function ReflectionSlide() {
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 mr-4" />
          <h2 className="text-3xl font-bold">Reflection</h2>
        </div>
        <div className="bg-gray-800/60 backdrop-blur rounded-lg p-8 mb-8 border border-gray-700/40">
          <p className="text-lg mb-6">Project management in social media requires a unique blend of:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/60 p-4 rounded-lg text-center">
              <i data-feather="cpu" className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
              <h3 className="font-bold">Technical Skills</h3>
              <p className="text-sm text-gray-400">Platform expertise, analytics</p>
            </div>
            <div className="bg-gray-900/60 p-4 rounded-lg text-center">
              <i data-feather="users" className="w-8 h-8 mx-auto mb-3 text-blue-300" />
              <h3 className="font-bold">People Skills</h3>
              <p className="text-sm text-gray-400">Stakeholder management</p>
            </div>
            <div className="bg-gray-900/60 p-4 rounded-lg text-center">
              <i data-feather="zap" className="w-8 h-8 mx-auto mb-3 text-sky-300" />
              <h3 className="font-bold">Adaptability</h3>
              <p className="text-sm text-gray-400">Trend responsiveness</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl mb-4">At NextEast Media, we believe:</p>
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">"Great PMs don't just manage projects—they create digital experiences."</p>
        </div>
      </div>
    </section>
  )
}
