import React from "react";
import { Cpu } from "lucide-react";

const Loader = () => {
  return (
    /* Fundo translúcido que bloqueia cliques durante a requisição */
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200">
      <div className=" border-white/10 px-8 py-6 shadow-2xl flex flex-col items-center gap-4 min-w-55">
        {/* Anéis giratórios estilo tech/terminal */}
        <div className="relative w-15 h-15 flex items-center justify-center">
          {/* Anel externo (Dourado/Bege do seu layout) */}
          <div className="absolute inset-0 rounded-full border-2 border-white/5 border-t-blue-800 animate-spin"/>

          {/* Anel interno (Indigo) girando ao contrário */}
          <div className="absolute inset-1.5 rounded-full border-2 border-white/5 border-t-indigo-300 animate-[spin_1.5s_reverse_infinite]"></div>

          {/* Ícone central fixo */}
          <Cpu size={17} className="text-slate-500" />
        </div>

        {/* Textos de Status */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-[12px] text-slate-500 uppercase tracking-[0.2em] animate-pulse">
            Processando
          </span>
          <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            Aguardando resposta do servidor...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
