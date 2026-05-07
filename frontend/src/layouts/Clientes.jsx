import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  X,
  Building2,
  DollarSign,
  CreditCard,
  Calendar,
  RefreshCw,
  Briefcase,
  ArrowRight,
  TrendingUp,
  Inbox,
  Layers3
} from "lucide-react";

const Clientes = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const [clients, setClients] = useState([
    {
      id: "CLI-001",
      companyName: "Teodoro & Jacobina LTDA",
      tradeName: "Condomínio de Flats",
      cnpj: "12.345.678/0001-90",
      category: "Real Estate",
      ltv: "R$ 8.500,00",
      mrr: "R$ 100,00",
      status: "ativo",
      poc: "Blaude",
      phone: "5511999999999",
      email: "diretoria@tij.com",
      brandColor: "#BFA473",
      billingDay: "10",
      projects: [
        {
          id: "SMTX-26-001",
          name: "Ecosistema de Locação High-End",
          status: "desenvolvimento",
          value: "R$ 15.000,00",
          deadline: "15/05/2026",
        },
      ],
    },
    {
      id: "CLI-002",
      companyName: "Memora EdTech S.A.",
      tradeName: "Memora Tech",
      cnpj: "98.765.432/0001-10",
      category: "Software/SaaS",
      ltv: "R$ 45.000,00",
      mrr: "R$ 1.200,00",
      status: "ativo",
      poc: "Mariana Costa",
      phone: "5511988888888",
      email: "m.costa@memora.io",
      brandColor: "#6366f1",
      billingDay: "05",
      projects: [
        {
          id: "SMTX-26-002",
          name: "SaaS Education v2",
          status: "negociacao",
          value: "R$ 45.000,00",
          deadline: "20/08/2026",
        },
      ],
    },
    {
      id: "CLI-003",
      companyName: "Vet-Saúde Medicina Animal",
      tradeName: "Clínica Vet-Saúde",
      cnpj: "44.555.666/0001-00",
      category: "Healthcare",
      ltv: "R$ 12.800,00",
      mrr: "R$ 300,00",
      status: "pendente",
      poc: "Dr. Roberto Alves",
      phone: "5511977777777",
      email: "financeiro@vetsaude.com",
      brandColor: "#10b981",
      billingDay: "25",
      projects: [
        {
          id: "SMTX-26-003",
          name: "ERP Customizado",
          status: "homologacao",
          value: "R$ 12.800,00",
          deadline: "10/06/2026",
        },
      ],
    },
    {
      id: "CLI-004",
      companyName: "Indústria Alpha Gear",
      tradeName: "Alpha Gear IoT",
      cnpj: "11.222.333/0001-44",
      category: "Industrial",
      ltv: "R$ 32.000,00",
      mrr: "R$ 800,00",
      status: "ativo",
      poc: "Eng. Ricardo",
      phone: "5511966666666",
      email: "suporte@alphagear.com",
      brandColor: "#f59e0b",
      billingDay: "15",
      projects: [
        {
          id: "SMTX-26-004",
          name: "Dashboard de Produção IoT",
          status: "contrato",
          value: "R$ 32.000,00",
          deadline: "30/09/2026",
        },
      ],
    },
  ]);
  const statusMap = {
    ativo: {
      label: "Ativo",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      bar: "bg-emerald-400",
    },
    pendente: {
      label: "Pendente",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      bar: "bg-amber-400",
    },
    inadimplente: {
      label: "Bloqueado",
      color: "text-red-400",
      bg: "bg-red-400/10",
      bar: "bg-red-400",
    },
  };
  const projectStatusMap = {
    negociacao: {
      label: "Negociação",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      bar: "bg-blue-400",
    },
    contrato: {
      label: "Contrato",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      bar: "bg-purple-400",
    },
    desenvolvimento: {
      label: "Dev",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      bar: "bg-amber-400",
    },
    homologacao: {
      label: "Testes",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      bar: "bg-indigo-400",
    },
    producao: {
      label: "Live",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      bar: "bg-emerald-400",
    },
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#0A0C10] font-grotesk">
      {/* HEADER */}
      <header className="p-4 md:p-6 border-b border-white/5 bg-[#050505] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0 relative z-10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2 uppercase tracking-tight">
            <Users className="text-[#BFA473]" size={18} /> Central_Clientes
          </h1>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em] mt-1.5 leading-none">
            Database de Entidades Smarttex
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative group flex-1 md:flex-none">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#BFA473] transition-colors"
              size={14}
            />
            <input
              type="text"
              placeholder="Buscar CNPJ ou Empresa..."
              className="bg-black border border-white/5 pl-9 pr-4 py-2.5 text-[10px] font-mono text-white focus:outline-none focus:border-[#BFA473]/50 transition-all w-full md:w-64"
            />
          </div>
          <button className="bg-white text-black p-2.5 hover:bg-[#BFA473] transition-colors active:scale-[0.98] shrink-0">
            <Plus size={16} strokeWidth={3} />
          </button>
        </div>
      </header>

      {/* GRID DE CARDS REDESENHADO: 100% Flexível e à prova de cortes */}
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
        {clients.map((client) => {
          const status = statusMap[client.status];
          return (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client)}
              /* h-full garante que todos os cards na mesma linha tenham a mesma altura sem cortar */
              className="bg-black border border-white/5 hover:border-[#BFA473]/40 transition-all cursor-pointer group flex flex-col h-full shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)]"
            >
              {/* Barra de Topo */}
              <div
                className={`h-0.5 w-full ${status.bar} opacity-60 shrink-0`}
              />

              {/* Corpo Principal do Card (flex-1 empurra o financeiro para baixo) */}
              <div className="p-6 flex-1 flex flex-col">
                {/* ID e Status */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                    {client.id}
                  </span>
                  <div
                    className={`px-2 py-1 text-[9px] font-bold uppercase font-mono border border-current ${status.color} ${status.bg}`}
                  >
                    {status.label}
                  </div>
                </div>

                {/* Identidade */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="p-3 bg-[#0A0C10] border border-white/5 transition-colors group-hover:border-current text-slate-600 shrink-0"
                    style={{ color: client.brandColor }}
                  >
                    <Building2 size={20} />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg leading-none truncate font-grotesk group-hover:text-[#BFA473] transition-colors uppercase mb-1.5">
                      {client.tradeName}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono uppercase tracking-tighter truncate leading-none mb-2">
                      {client.companyName}
                    </p>
                    <p className="text-[10px] text-slate-700 font-mono uppercase tracking-widest truncate">
                      {client.cnpj}
                    </p>
                  </div>
                </div>

                {/* Bloco Financeiro Seguro (Sempre visível no fundo da área principal) */}
                <div className="mt-auto pt-5 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-600 font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <TrendingUp size={12} className="text-emerald-500" />{" "}
                      LTV_Total
                    </span>
                    <span className="text-sm text-white font-mono font-bold">
                      {client.ltv}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-600 font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Inbox size={12} className="text-[#BFA473]" /> MRR_Atual
                    </span>
                    <span className="text-sm text-[#BFA473] font-mono font-bold">
                      {client.mrr}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rodapé Base */}
              <div className="px-6 py-4 bg-[#050505] border-t border-white/5 flex items-center justify-between text-slate-600 group-hover:text-white transition-colors shrink-0">
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-slate-700" />
                  <span className="text-[10px] font-mono uppercase tracking-widest truncate">
                    {client.category}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-700 group-hover:text-[#BFA473] transition-colors"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL INTACTO */}
      {selectedClient && (
        <div className="fixed inset-0 z-999 flex items-end md:items-center justify-center bg-black/95 backdrop-blur-md md:p-4 animate-in fade-in duration-200">
          <div className="bg-[#050505] border-t md:border border-white/10 w-full max-w-3xl h-[90vh] md:h-auto md:max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom md:slide-in-from-bottom-0 md:zoom-in-95 duration-300">
            <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-black shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-6 bg-[#BFA473]"
                  style={{ backgroundColor: selectedClient.brandColor }}
                />
                <h2 className="text-base md:text-lg font-bold text-white uppercase tracking-tight font-grotesk">
                  Ficha Cadastral_Entidade
                </h2>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="text-slate-600 hover:text-white transition-colors p-2 md:p-0"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 md:p-8 space-y-8 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block font-bold border-b border-white/5 pb-2">
                    Identificação Legal
                  </label>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-slate-700 uppercase block mb-1">
                        Razão Social
                      </span>
                      <input
                        type="text"
                        defaultValue={selectedClient.companyName}
                        className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none focus:border-[#BFA473]"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-700 uppercase block mb-1">
                        Nome Fantasia
                      </span>
                      <input
                        type="text"
                        defaultValue={selectedClient.tradeName}
                        className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none focus:border-[#BFA473]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] text-slate-700 uppercase block mb-1">
                          CNPJ
                        </span>
                        <input
                          type="text"
                          defaultValue={selectedClient.cnpj}
                          className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none focus:border-[#BFA473]"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-700 uppercase block mb-1">
                          Categoria
                        </span>
                        <input
                          type="text"
                          defaultValue={selectedClient.category}
                          className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none focus:border-[#BFA473]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block font-bold border-b border-white/5 pb-2">
                    Configurações Financeiras
                  </label>
                  <div className="bg-[#0A0C10] p-4 md:p-5 border border-white/5 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] text-slate-700 uppercase block mb-1">
                          LTV Acumulado
                        </span>
                        <div className="flex items-center gap-2 text-emerald-500 font-mono font-bold bg-black p-2 border border-white/5">
                          <DollarSign size={14} /> {selectedClient.ltv}
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-700 uppercase block mb-1">
                          Fatura Mensal (MRR)
                        </span>
                        <div className="flex items-center gap-2 text-[#BFA473] font-mono font-bold bg-black p-2 border border-white/5">
                          <CreditCard size={14} /> {selectedClient.mrr}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] text-slate-700 uppercase block mb-1">
                          Dia de Vencimento
                        </span>
                        <div className="flex items-center gap-2 text-white font-mono text-xs bg-black p-2 border border-white/5">
                          <Calendar size={14} /> Todo dia{" "}
                          {selectedClient.billingDay}
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-700 uppercase block mb-1">
                          Status de Conta
                        </span>
                        <select
                          className="w-full bg-black border border-white/10 text-xs font-mono text-white p-2.5 focus:outline-none"
                          defaultValue={selectedClient.status.toUpperCase()}
                        >
                          <option value="ATIVO">ATIVO</option>
                          <option value="PENDENTE">PENDENTE</option>
                          <option value="INADIMPLENTE">BLOQUEADO</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 md:pt-8 border-t border-white/5">
                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block font-bold border-b border-white/5 pb-2">
                    Ponto Focal
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] text-slate-700 uppercase block mb-1">
                        Responsável
                      </span>
                      <input
                        type="text"
                        defaultValue={selectedClient.poc}
                        className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none focus:border-[#BFA473]"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-700 uppercase block mb-1">
                        WhatsApp
                      </span>
                      <input
                        type="text"
                        defaultValue={selectedClient.phone}
                        className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none focus:border-[#BFA473]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block font-bold border-b border-white/5 pb-2">
                    Identidade Visual
                  </label>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 border border-white/10 shrink-0"
                      style={{ backgroundColor: selectedClient.brandColor }}
                    />
                    <div className="flex-1">
                      <span className="text-[9px] text-slate-700 uppercase block mb-1">
                        Hexadecimal da Marca
                      </span>
                      <input
                        type="text"
                        defaultValue={selectedClient.brandColor}
                        className="w-full bg-black border border-white/5 p-3 text-xs font-mono text-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 md:pt-8 border-t border-white/5">
              <label className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block font-bold border-b border-white/5 pb-2 mb-4">
                Operações & Projetos Vinculados
              </label>

              <div className="space-y-2">
                {selectedClient.projects &&
                selectedClient.projects.length > 0 ? (
                  selectedClient.projects.map((proj) => {
                    const pStatus = projectStatusMap[proj.status];
                    return (
                      <div
                        key={proj.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#0A0C10] border border-white/5 p-4 hover:border-[#BFA473]/30 transition-colors group gap-4 sm:gap-0"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-black border border-white/5 text-slate-600 shrink-0">
                            <Layers3 size={14} />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                              {proj.id}
                            </span>
                            <p className="text-xs font-bold text-white uppercase mt-0.5 group-hover:text-[#BFA473] transition-colors">
                              {proj.name}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 border-t border-white/5 sm:border-t-0 pt-3 sm:pt-0">
                          <div className="text-left sm:text-right">
                            <span className="text-[8px] font-mono text-slate-600 uppercase block">
                              Deadline
                            </span>
                            <span className="text-[10px] font-mono text-white">
                              {proj.deadline}
                            </span>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="text-[8px] font-mono text-slate-600 uppercase block">
                              Setup_OS
                            </span>
                            <span className="text-[10px] font-mono text-emerald-500 font-bold">
                              {proj.value}
                            </span>
                          </div>
                          <div
                            className={`px-2 py-1 text-[8px] font-bold uppercase font-mono border border-current shrink-0 ${pStatus.color} ${pStatus.bg}`}
                          >
                            {pStatus.label}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-6 bg-[#0A0C10] border border-white/5 text-center flex flex-col items-center justify-center gap-2">
                    <Layers3 size={20} className="text-slate-700" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Nenhuma operação ativa para esta entidade
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-black border-t border-white/5 flex flex-col sm:flex-row justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedClient(null)}
                className="w-full sm:w-auto px-6 py-3 text-[10px] font-mono uppercase text-slate-400 hover:text-white transition-colors border border-white/5 sm:border-transparent"
              >
                Descartar
              </button>
              <button className="w-full sm:w-auto bg-white text-black px-8 py-3 text-[10px] font-mono font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#BFA473] transition-all active:scale-[0.98]">
                <RefreshCw size={12} /> Sincronizar Banco
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientes;
