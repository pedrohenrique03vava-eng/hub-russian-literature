export default function LayoutBase({ children }) {
  return (
    <div className="w-full min-h-screen bg-[#1c1814] p-6 sm:p-10 font-serif antialiased text-[#e3dac9] selection:bg-[#cfa86b] selection:text-[#1c1814]">
      {/* =========================================================================
          CABEÇALHO: CRÔNICA OU CÓDICE LITERÁRIO
         ========================================================================= */}
      <header className="mb-10 select-none animate-[fadeIn_0.8s_ease-out]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end pb-4 text-center md:text-left gap-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#f5ebd6] uppercase">
              Clarim Diário - ETEC{" "}
              <span className="text-[#cfa86b] hover:text-[#e4be82] transition-colors duration-300">
                Literatura Russa
              </span>
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] mt-2 text-[#94816b] font-bold">
              Compilado de projetos e estudos realizados por alunos do ensino
              médio.
            </p>
          </div>

          <div className="text-center md:text-right flex flex-col md:flex-row items-center md:items-end gap-6 max-w-xl">
            <span className="text-[11px] text-[#94816b] uppercase tracking-wide font-medium leading-tight max-w-xs border-t border-b border-[#cfa86b]/20 py-2">
              Arquivo digital interdisciplinar. Selecione um dos tomos abaixo
              para acessar os portfólios.
            </span>
            <span className="rounded-md text-sm font-bold text-[#cfa86b] border border-[#cfa86b]/40 px-4 py-1 whitespace-nowrap tracking-widest bg-[#2d251e]">
              TOMO I • VOL. I
            </span>
          </div>
        </div>

        <div className="border-t-4 border-[#cfa86b]/50 w-full my-1"></div>
        <div className="border-t border-[#cfa86b]/20 w-full"></div>
      </header>

      {children}
    </div>
  );
}
