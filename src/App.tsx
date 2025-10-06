import { useEffect } from 'react'
import feather from 'feather-icons'
import Lightning from './components/Lightning'

export default function App() {
  useEffect(() => {
    feather.replace()
  }, [])

  return (
    <div className="min-h-screen w-screen overflow-x-hidden gradient-bg text-gray-100 relative">
      <div className="fixed inset-0 -z-10">
        <Lightning hue={230} xOffset={0} speed={1} intensity={0.8} size={1.2} />
      </div>

      <main className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll relative">
        <section className="slide flex flex-col justify-center items-center p-8 text-center min-h-screen">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
              NextEast Media
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Project Management in Social Media</h2>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-xl mb-2">Presented by <span className="text-indigo-300">Maxim Sevcenco</span></p>
              <p className="text-lg text-gray-300">Unit 1 Project | Ms. Triantis | Class Period: 2nd</p>
            </div>
            <div className="mt-12 animate-bounce">
              <i data-feather="arrow-down" className="w-12 h-12 text-pink-300" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
