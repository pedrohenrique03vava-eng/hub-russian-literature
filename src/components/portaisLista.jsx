export default function PortaisLista() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
      {/* COLUNA ESQUERDA: APRESENTAÇÃO DO PROJETO E WEBSITES DOS GRUPOS */}
      <main className="lg:col-span-2 flex flex-col gap-10 lg:border-r lg:border-[#cfa86b]/10 lg:pr-10 animate-[fadeInUp_0.9s_ease-out]">
        {/* Prólogo Geral */}
        <section className="border border-[#cfa86b]/30 p-6 bg-[#251e19] transition-all duration-300 hover:bg-[#2d251e] shadow-lg rounded-md">
          <h2 className="text-2xl font-bold tracking-tight uppercase mb-3 text-left border-b border-[#cfa86b]/15 pb-2 text-[#f5ebd6]">
            A Construção da Identidade Literária Russa
          </h2>
          <p className="text-xs uppercase tracking-widest font-bold mb-4 text-[#cfa86b]">
            Prólogo e Introdução ao Códice
          </p>
          <p className="text-xl leading-relaxed text-justify indent-8 text-[#caa085]">
            Este ambiente digital reúne as pesquisas desenvolvidas pelos grupos
            sobre os pilares da literatura russa. A produção textual do período
            reflete as profundas transformações políticas, as crises sociais e o
            debate filosófico de sua época. Os blocos abaixo dão acesso direto
            aos sites temáticos focados nos autores e nos bastidores do mercado
            editorial.
          </p>
        </section>

        {/* Grade de Crônicas e Portfólios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CRÔNICA I */}
          <a
            href="https://ak1ra37.github.io/Literatura-Russa/"
            className="group flex flex-col gap-3 focus:outline-none md:border-l md:border-[#cfa86b]/10 md:pl-10"
          >
            <span className="text-xs font-bold text-[#94816b] uppercase tracking-widest text-center group-hover:text-[#cfa86b] transition-colors duration-300">
              — Crônica I —
            </span>
            <div className="bg-[#211b15] border border-[#cfa86b]/20 h-64 w-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out group-hover:border-[#cfa86b]/60 group-hover:bg-[#2a221b] group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(207,168,107,0.1)] rounded-md">
              <h3 className="text-xl font-bold text-[#f5ebd6] uppercase tracking-wide transition-colors duration-300 group-hover:text-[#cfa86b]">
                Obras Literárias
              </h3>
              <div className="w-12 h-[1px] bg-[#cfa86b]/20 my-3 group-hover:bg-[#cfa86b]/50 transition-colors"></div>
              <p className="text-xl text-[#94816b] max-w-xs px-2 leading-relaxed group-hover:text-[#caa085] transition-colors">
                Análise bibliográfica de nomes como Dostoiévski, Tolstói, Gógol
                e Púchkin.
              </p>
              <span className="text-[10px] font-bold text-[#cfa86b] mt-5 uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                Acessar web site →
              </span>
            </div>
          </a>

          {/* CRÔNICA II */}
          <a
            href="https://enzo1ostapiuk.github.io/Site_Literatura_Russa/"
            className="group flex flex-col gap-3 focus:outline-none md:border-l md:border-[#cfa86b]/10 md:pl-10"
          >
            <span className="text-xs font-bold text-[#94816b] uppercase tracking-widest text-center group-hover:text-[#cfa86b] transition-colors duration-300">
              — Crônica II —
            </span>
            <div className="bg-[#211b15] border border-[#cfa86b]/20 h-64 w-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out group-hover:border-[#cfa86b]/60 group-hover:bg-[#2a221b] group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(207,168,107,0.1)] rounded-md">
              <h3 className="text-xl font-bold text-[#f5ebd6] uppercase tracking-wide transition-colors duration-300 group-hover:text-[#cfa86b]">
                Editoras e Imprensa
              </h3>
              <div className="w-12 h-[1px] bg-[#cfa86b]/20 my-3 group-hover:bg-[#cfa86b]/50 transition-colors"></div>
              <p className="text-xl text-[#94816b] max-w-xs px-2 leading-relaxed group-hover:text-[#caa085] transition-colors">
                O circuito de publicação na Rússia, o impacto da censura
                czarista e a circulação clandestina do Samizdat.
              </p>
              <span className="text-[10px] font-bold text-[#cfa86b] mt-5 uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                Acessar web site →
              </span>
            </div>
          </a>
          {/* CRÔNICA III */}
          <a
            href="https://pedrohenrique03vava-eng.github.io/dossie-literatura-russa/"
            className="group flex flex-col gap-3 focus:outline-none md:border-l md:border-[#cfa86b]/10 md:pl-10"
          >
            <span className="text-xs font-bold text-[#94816b] uppercase tracking-widest text-center group-hover:text-[#cfa86b] transition-colors duration-300">
              — Crônica III —
            </span>
            <div className="bg-[#211b15] border border-[#cfa86b]/20 h-64 w-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out group-hover:border-[#cfa86b]/60 group-hover:bg-[#2a221b] group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(207,168,107,0.1)] rounded-md">
              <h3 className="text-xl font-bold text-[#f5ebd6] uppercase tracking-wide transition-colors duration-300 group-hover:text-[#cfa86b]">
                Dossiê Literário
              </h3>
              <div className="w-12 h-[1px] bg-[#cfa86b]/20 my-3 group-hover:bg-[#cfa86b]/50 transition-colors"></div>
              <p className="text-xl text-[#94816b] max-w-xs px-2 leading-relaxed group-hover:text-[#caa085] transition-colors">
                Uma junção de documentos e pesquisas sobre multiplos assuntos
                com base na Literatura Russa.
              </p>
              <span className="text-[10px] font-bold text-[#cfa86b] mt-5 uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                Acessar web site →
              </span>
            </div>
          </a>

          {/* CRÔNICA IV */}
          <a
            href="https://pedrohenrique03vava-eng.github.io/entre-nevadas/"
            className="group flex flex-col gap-3 focus:outline-none md:border-l md:border-[#cfa86b]/10 md:pl-10"
          >
            <span className="text-xs font-bold text-[#94816b] uppercase tracking-widest text-center group-hover:text-[#cfa86b] transition-colors duration-300">
              — Crônica IV —
            </span>
            <div className="bg-[#211b15] border border-[#cfa86b]/20 h-64 w-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out group-hover:border-[#cfa86b]/60 group-hover:bg-[#2a221b] group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(207,168,107,0.1)] rounded-md">
              <h3 className="text-xl font-bold text-[#f5ebd6] uppercase tracking-wide transition-colors duration-300 group-hover:text-[#cfa86b]">
                Autores menos conhecidos
              </h3>
              <div className="w-12 h-[1px] bg-[#cfa86b]/20 my-3 group-hover:bg-[#cfa86b]/50 transition-colors"></div>
              <p className="text-xl text-[#94816b] max-w-xs px-2 leading-relaxed group-hover:text-[#caa085] transition-colors">
                Conheça outros dois autores marcantes para esse periodo
                literário.
              </p>
              <span className="text-[10px] font-bold text-[#cfa86b] mt-5 uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                Acessar web site →
              </span>
            </div>
          </a>
        </div>
      </main>

      {/* COLUNAS DA DIREITA: REVOLUÇÕES E MOVIMENTOS */}
      <aside className="flex flex-col gap-8 animate-[fadeInUp_1.1s_ease-out]">
        {/* MOVIMENTOS LITERÁRIOS */}
        <div className="flex flex-col gap-2 pb-5 border-b border-[#cfa86b]/10 group">
          <span className="rounded-md border border-[#cfa86b]/30 text-[#cfa86b] text-xs font-bold uppercase px-3 py-1 tracking-widest self-center bg-[#cfa86b]/5 transition-colors duration-300 group-hover:bg-[#cfa86b]/10">
            Movimentos
          </span>
          <p className="text-[11px] text-[#94816b] font-bold text-center mt-1 uppercase tracking-wider">
            Evolução Estética
          </p>

          <div className="bg-[#251e19] text-[#e3dac9] text-xs p-4 my-2 border-l-2 border-[#cfa86b] text-justify font-serif italic leading-relaxed shadow-md">
            "Não há assunto tão velho que não possa ser dito algo de novo sobre
            ele."
            <span className="block text-right text-[10px] font-bold tracking-wider mt-1 uppercase not-italic text-[#94816b]">
              — Fiódor Dostoiévski - DOSTOIÉVSKI, Fiódor. Crime e castigo.
              Tradução de Paulo Bezerra. 7. ed. São Paulo: Editora 34, 2016.
            </span>
          </div>

          <p className="text-xl text-[#caa085] leading-relaxed text-justify indent-4">
            Estudo focado na evolução das correntes estéticas, mapeando as
            principais características que diferenciam o Romantismo inicial do
            Realismo social russo.
          </p>
          <a
            href="https://link-do-grupo-movimentos.com"
            className="text-xs font-bold text-[#cfa86b] hover:text-[#e4be82] transition-colors mt-2 text-center block uppercase tracking-wider underline underline-offset-4 decoration-[#cfa86b]/30"
          >
            [ Revelar Movimentos ]
          </a>
        </div>

        {/* CONTEXTO HISTÓRICO */}
        <div className="flex flex-col gap-2 pb-5 border-b border-[#cfa86b]/10 group">
          <span className="rounded-md border border-[#cfa86b]/30 text-[#cfa86b] text-xs font-bold uppercase px-3 py-1 tracking-widest self-center bg-[#cfa86b]/5 transition-colors duration-300 group-hover:bg-[#cfa86b]/10">
            Contexto Histórico
          </span>
          <p className="text-xl text-[#caa085] leading-relaxed text-justify indent-4 mt-2">
            Análise do cenário político da Rússia czarista, as tensões
            camponesas e as estruturas burocráticas que serviram de plano de
            fundo para as narrativas da época.
          </p>
          <a
            href="https://pedrohenrique03vava-eng.github.io/entre-nevadas/"
            className="text-xs font-bold text-[#cfa86b] hover:text-[#e4be82] transition-colors mt-2 text-center block uppercase tracking-wider underline underline-offset-4 decoration-[#cfa86b]/30"
          >
            [ Abrir Linha do Tempo ]
          </a>
        </div>
      </aside>
    </div>
  );
}
