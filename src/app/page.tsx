export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">NEXYS</div>
          <div className="flex gap-8">
            <a href="#servicos" className="nav-link">
              Serviços
            </a>
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <button className="btn-primary">Contate-nos</button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transformando o <span className="gradient-text">futuro</span>{' '}
              através da tecnologia
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Desenvolvemos soluções tecnológicas inovadoras para impulsionar
              seu negócio ao próximo nível.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary flex items-center gap-2">
                Começar agora
              </button>
              <button
                className="px-6 py-3 border border-gray-700 rounded-full 
                text-white hover:bg-white/5 transition-colors"
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="flex-1 relative"></div>
        </div>
      </section>

      <section id="servicos" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nossas <span className="gradient-text">Soluções</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Desenvolvimento Web',
                desc: 'Criamos websites e aplicações web modernas e responsivas',
              },
              {
                title: 'Aplicativos Mobile',
                desc: 'Desenvolvimento de apps nativos e multiplataforma',
              },
              {
                title: 'Consultoria Tech',
                desc: 'Orientação especializada para sua transformação digital',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-black/20 p-8 rounded-2xl hover:bg-black/30 
                transition-colors border border-gray-800"
              >
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
