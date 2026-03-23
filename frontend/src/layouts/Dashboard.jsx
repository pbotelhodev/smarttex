import React from "react";
import {
  DollarSign,
  FolderGit2,
  Activity,
  Ticket,
  AlertTriangle,
  Server,
  Plus,
  ArrowUpRight,
  CalendarClock,
} from "lucide-react";

const Dashboard = () => {
  // Mock de dados para o gráfico de faturamento (Últimos 6 meses)
  const revenueData = [
    { month: "Out", received: 85, default: 15 }, // Valores em % para altura da barra
    { month: "Nov", received: 90, default: 10 },
    { month: "Dez", received: 75, default: 25 },
    { month: "Jan", received: 95, default: 5 },
    { month: "Fev", received: 88, default: 12 },
    { month: "Mar", received: 100, default: 0 },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      {/* 1. AÇÕES RÁPIDAS (Atalhos) */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-white hover:bg-slate-200 text-black px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 active:scale-[0.98]">
          <Plus size={14} /> Novo Cliente
        </button>
        <button className="bg-[#1A1C20] border border-white/10 hover:border-[#BFA473]/50 hover:bg-[#BFA473]/10 text-white px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 active:scale-[0.98]">
          <Plus size={14} className="text-[#BFA473]" /> Novo Contrato
        </button>
        <button className="bg-[#1A1C20] border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 active:scale-[0.98]">
          <Plus size={14} className="text-indigo-400" /> Novo Projeto
        </button>
      </div>

      {/* 2. CARDS SUPERIORES (Métricas Principais) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* MRR */}
        <div className="bg-[#0A0C10] border border-white/5 p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <DollarSign size={56} />
          </div>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1.5 block">
            Receita Mensal (MRR)
          </span>
          <div className="text-2xl font-bold text-white font-grotesk mb-1">
            R$ 14.500,00
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
            <ArrowUpRight size={10} /> +12% vs Mês Anterior
          </div>
        </div>

        {/* Projetos em Andamento */}
        <div className="bg-[#0A0C10] border border-white/5 p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <FolderGit2 size={56} />
          </div>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1.5 block">
            Projetos em Andamento
          </span>
          <div className="text-2xl font-bold text-white font-grotesk mb-1">
            05
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-indigo-400">
            <Activity size={10} /> 2 na fase de Build
          </div>
        </div>

        {/* Tickets Abertos */}
        <div className="bg-[#0A0C10] border border-white/5 p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Ticket size={56} />
          </div>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1.5 block">
            Tickets Abertos
          </span>
          <div className="text-2xl font-bold text-white font-grotesk mb-1">
            12
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-red-400">
            <AlertTriangle size={10} /> 3 Aguardando Resposta Urgente
          </div>
        </div>

        {/* Status da Infraestrutura */}
        <div className="bg-[#0A0C10] border border-white/5 p-5 relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Server size={56} />
          </div>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1.5 block">
            Status da Infraestrutura
          </span>
          <div className="text-2xl font-bold text-emerald-400 font-grotesk mb-1 flex items-center gap-3">
            99.9%
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-500">
            Todos os nós operacionais
          </div>
        </div>
      </div>

      {/* 3. SEÇÃO PRINCIPAL (Gráficos e Listas) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* GRÁFICO DE FATURAMENTO (Esquerda - Ocupa 2 colunas) */}
        <div className="xl:col-span-2 bg-[#0A0C10] border border-white/5 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-bold text-white font-grotesk text-lg">
                Faturamento vs. Inadimplência
              </h3>
              <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                Últimos 6 meses (Projeção Analítica)
              </p>
            </div>
            <div className="flex gap-4 font-mono text-[9px] uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#BFA473]"></div>{" "}
                <span className="text-slate-400">Recebido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-500/50"></div>{" "}
                <span className="text-slate-400">Inadimplente</span>
              </div>
            </div>
          </div>

          {/* Gráfico CSS Puro (Estilo Equalizador/Terminal) */}
          <div className="flex-1 min-h-[200px] flex items-end justify-between gap-2 pt-4 border-b border-white/5 pb-2 relative">
            {/* Linhas de grade de fundo */}
            <div className="absolute w-full top-0 border-t border-white/[0.02] border-dashed"></div>
            <div className="absolute w-full top-1/2 border-t border-white/[0.02] border-dashed"></div>

            {revenueData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 w-full z-10 group"
              >
                {/* Barras */}
                <div className="w-full max-w-[40px] h-[160px] flex flex-col justify-end bg-white/[0.02] relative hover:bg-white/[0.04] transition-colors cursor-crosshair">
                  {/* Barra Inadimplência */}
                  {data.default > 0 && (
                    <div
                      className="w-full bg-red-500/50 border-t border-red-500 transition-all duration-700"
                      style={{ height: `${data.default}%` }}
                    ></div>
                  )}
                  {/* Barra Recebido */}
                  <div
                    className="w-full bg-[#BFA473]/80 border-t border-[#BFA473] transition-all duration-700"
                    style={{ height: `${data.received}%` }}
                  ></div>

                  {/* Tooltip Hover (Puro CSS) */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 px-2 py-1 font-mono text-[9px] text-white pointer-events-none whitespace-nowrap z-20 shadow-xl">
                    Rec: {data.received}% | Inad: {data.default}%
                  </div>
                </div>
                {/* Label Mês */}
                <span className="font-mono text-[9px] text-slate-500 uppercase">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LISTAS DE ATENÇÃO (Direita - Ocupa 1 coluna) */}
        <div className="flex flex-col gap-6">
          {/* Alertas Críticos */}
          <div className="bg-[#0A0C10] border border-white/5 flex-1">
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-2">
              <AlertTriangle size={14} className="text-red-400" />
              <h3 className="font-bold text-white font-grotesk text-sm">
                Alertas Críticos
              </h3>
            </div>
            <div className="divide-y divide-white/5">
              <div className="p-4 hover:bg-white/[0.02] transition-colors">
                <p className="text-xs font-bold text-[#BFA473] mb-1">
                  Contrato TiJ próximo do vencimento
                </p>
                <p className="font-mono text-[9px] text-slate-500">
                  Expira em 10 dias. Necessário renegociação de hosting.
                </p>
              </div>
              <div className="p-4 hover:bg-white/[0.02] transition-colors">
                <p className="text-xs font-bold text-red-400 mb-1">
                  Ticket #442: Queda de API
                </p>
                <p className="font-mono text-[9px] text-slate-500">
                  Cliente Memora - Aguardando resposta há 4 horas.
                </p>
              </div>
              <div className="p-4 hover:bg-white/[0.02] transition-colors">
                <p className="text-xs font-bold text-orange-400 mb-1">
                  Pico de CPU detectado
                </p>
                <p className="font-mono text-[9px] text-slate-500">
                  Node_01_MTL atingiu 92% de uso às 14:32.
                </p>
              </div>
            </div>
          </div>

          {/* Entregas Próximas */}
          <div className="bg-[#0A0C10] border border-white/5 flex-1">
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-2">
              <CalendarClock size={14} className="text-indigo-400" />
              <h3 className="font-bold text-white font-grotesk text-sm">
                Entregas (Próx. 7 dias)
              </h3>
            </div>
            <div className="divide-y divide-white/5">
              <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div>
                  <p className="text-xs font-bold text-slate-200 mb-1">
                    Deploy Memora v2.0
                  </p>
                  <p className="font-mono text-[9px] text-slate-500">
                    Pipeline: Produção
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-red-400 font-bold border border-red-500/20 bg-red-500/10 px-2 py-0.5">
                    2 Dias
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div>
                  <p className="text-xs font-bold text-slate-200 mb-1">
                    Revisão UI/UX Vestibule
                  </p>
                  <p className="font-mono text-[9px] text-slate-500">
                    Pipeline: Design QA
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-[#BFA473] font-bold border border-[#BFA473]/30 bg-[#BFA473]/10 px-2 py-0.5">
                    5 Dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
