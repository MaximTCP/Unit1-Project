export default function TitleSlide() {
  return (
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
  )
}
