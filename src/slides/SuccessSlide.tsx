export default function SuccessSlide() {
  return (
    <section className="slide p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-3 h-12 bg-blue-500 mr-4" />
          <h2 className="text-3xl font-bold">Keys to Success</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-lg border border-gray-700/40">
            <i data-feather="zap" className="w-8 h-8 text-cyan-300 mb-4" />
            <h3 className="font-bold mb-2">Adaptability</h3>
            <p className="text-sm text-gray-300">Thrives in fast-paced digital landscape</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-lg border border-gray-700/40">
            <i data-feather="message-square" className="w-8 h-8 text-sky-300 mb-4" />
            <h3 className="font-bold mb-2">Communication</h3>
            <p className="text-sm text-gray-300">Bridges creative and business teams</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur p-6 rounded-lg border border-gray-700/40">
            <i data-feather="bar-chart-2" className="w-8 h-8 text-blue-300 mb-4" />
            <h3 className="font-bold mb-2">Analytical</h3>
            <p className="text-sm text-gray-300">Data-driven campaign optimization</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-6 rounded-lg border border-blue-600/30">
          <h3 className="font-bold text-xl mb-2">Compensation</h3>
          <p className="text-lg">$65k - $95k + performance bonuses</p>
          <p className="text-sm text-cyan-200 mt-2">Based on agency size and campaign scope</p>
        </div>
      </div>
    </section>
  )
}
