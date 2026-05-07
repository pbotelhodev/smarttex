import React, { useState } from "react";
import {
  X,
  Zap,
  ArrowRight,
  RefreshCw,
  Plus,
  CheckCircle2,
  Clock,
  DollarSign,
  AlertTriangle,
  Layers3,
  Github,
  ExternalLink,
  FileText,
  Target,
  ShieldCheck, // Adicionado aqui
} from "lucide-react";

const Pipeline = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [newRequest, setNewRequest] = useState("");

  const [projects, setProjects] = useState([
    {
      id: "SMTX-26-001",
      customer: "Teodoro & Jacobina",
      service: "Ecosistema de Locação High-End",
      status: "desenvolvimento",
      contractValue: "R$ 15.000,00",
      recurrentValue: "R$ 450,00/mês",
      signedDate: "10/02/2026",
      deliveryDate: "15/05/2026",
      techStack: "React + Node",
      daysInStage: 4,
      nextStep: "Integrar API de Fechaduras Digitais",
      links: {
        repo: "https://github.com",
        staging: "https://staging.tij.com",
        doc: "#",
      },
      requests: [
        {
          id: 1,
          text: "Trocar galeria por seção de locação",
          status: "pendente",
          date: "20/03",
        },
      ],
    },
    {
      id: "SMTX-26-002",
      customer: "Memora Tech",
      service: "SaaS Education v2",
      status: "negociacao",
      contractValue: "R$ 45.000,00",
      recurrentValue: "R$ 1.200,00/mês",
      signedDate: "Pendente",
      deliveryDate: "20/08/2026",
      techStack: "Next.js + AWS",
      daysInStage: 12,
      nextStep: "Validar orçamento do módulo financeiro",
      links: { repo: "#", staging: "#", doc: "#" },
      requests: [],
    },
    {
      id: "SMTX-26-003",
      customer: "Clínica Vet-Saúde",
      service: "ERP Customizado",
      status: "homologacao",
      contractValue: "R$ 12.800,00",
      recurrentValue: "R$ 300,00/mês",
      signedDate: "05/03/2026",
      deliveryDate: "10/06/2026",
      techStack: "React Native",
      daysInStage: 2,
      nextStep: "Treinamento com a equipe recepção",
      links: {
        repo: "https://github.com",
        staging: "https://test.vet.com",
        doc: "#",
      },
      requests: [
        {
          id: 3,
          text: "Configurar API de agendamento",
          status: "pendente",
          date: "22/03",
        },
      ],
    },
    {
      id: "SMTX-26-004",
      customer: "Indústria Alpha",
      service: "Dashboard de Produção IoT",
      status: "contrato",
      contractValue: "R$ 32.000,00",
      recurrentValue: "R$ 800,00/mês",
      signedDate: "Aguardando",
      deliveryDate: "30/09/2026",
      techStack: "Arduino + Python",
      daysInStage: 8,
      nextStep: "Coletar assinatura do CEO",
      links: { repo: "#", staging: "#", doc: "#" },
      requests: [],
    },
    {
      id: "SMTX-26-005",
      customer: "Gastro-Delivery",
      service: "App Mobile de Entregas",
      status: "producao",
      contractValue: "R$ 18.500,00",
      recurrentValue: "R$ 550,00/mês",
      signedDate: "15/12/2025",
      deliveryDate: "Finalizado",
      techStack: "Expo + Firebase",
      daysInStage: 45,
      nextStep: "Monitoramento de Uptime mensal",
      links: {
        repo: "https://github.com",
        staging: "https://app.gastro.com",
        doc: "#",
      },
      requests: [],
    },
    {
      id: "SMTX-26-006",
      customer: "Condomínio Solaris",
      service: "Portal do Morador",
      status: "desenvolvimento",
      contractValue: "R$ 9.000,00",
      recurrentValue: "R$ 200,00/mês",
      signedDate: "01/03/2026",
      deliveryDate: "01/07/2026",
      techStack: "PHP + Laravel",
      daysInStage: 15,
      nextStep: "Migrar banco de dados legado",
      links: { repo: "https://github.com", staging: "#", doc: "#" },
      requests: [
        {
          id: 4,
          text: "Exportar lista de moradores (CSV)",
          status: "pendente",
          date: "21/03",
        },
      ],
    },
  ]);

  const statusMap = {
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

  const toggleRequestStatus = (projectId, requestId) => {
    const updated = projects.map((p) => {
      if (p.id === projectId) {
        const updatedRequests = p.requests.map((r) =>
          r.id === requestId
            ? {
                ...r,
                status: r.status === "pendente" ? "concluido" : "pendente",
              }
            : r,
        );
        const newProj = { ...p, requests: updatedRequests };
        if (selectedProject?.id === projectId) setSelectedProject(newProj);
        return newProj;
      }
      return p;
    });
    setProjects(updated);
  };

  const handleAddRequest = () => {
    if (!newRequest.trim()) return;
    const updated = projects.map((p) => {
      if (p.id === selectedProject.id) {
        const nr = {
          id: Date.now(),
          text: newRequest,
          status: "pendente",
          date: "Hoje",
        };
        const newProj = { ...p, requests: [nr, ...p.requests] };
        setSelectedProject(newProj);
        return newProj;
      }
      return p;
    });
    setProjects(updated);
    setNewRequest("");
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#0A0C10] font-grotesk">
      <header className="p-6 border-b border-white/5 bg-[#050505] flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-xl font-bold text-white flex items-center gap-2 uppercase tracking-tight leading-none">
            <Zap className="text-[#BFA473]" size={18} fill="#BFA473" />{" "}
            Pipeline_OS
          </h1>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em] mt-1.5 leading-none">
            Status de Operação Real-Time
          </p>
        </div>
      </header>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {projects.map((prj) => {
          const status = statusMap[prj.status];
          const isStagnated = prj.daysInStage > 10;

          return (
            <div
              key={prj.id}
              onClick={() => setSelectedProject(prj)}
              className="bg-black border border-white/5 hover:border-[#BFA473]/30 transition-all cursor-pointer group flex flex-col relative"
            >
              <div className={`h-[2px] w-full ${status.bar} opacity-60`} />

              <div className="p-5 flex-1">
                <div className="flex justify-between items-center mb-5 pb-4 border-b border-white/[0.03]">
                  <span className="text-[9px] font-mono text-slate-700 uppercase">
                    {prj.id}
                  </span>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[8px] font-mono flex items-center gap-1 ${isStagnated ? "text-red-500" : "text-slate-600"}`}
                    >
                      <Clock size={10} /> {prj.daysInStage}D_ESTÁGIO
                    </span>
                    <div
                      className={`px-2 py-0.5 text-[8px] font-bold uppercase font-mono border border-current ${status.color} ${status.bg}`}
                    >
                      {status.label}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-2 bg-[#0A0C10] border border-white/5 group-hover:border-[#BFA473]/20 transition-colors ${status.color}`}
                  >
                    <Layers3 size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-white font-bold text-lg leading-tight truncate group-hover:text-[#BFA473]">
                      {prj.customer}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter truncate">
                      {prj.service}
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-3 bg-[#0A0C10]/50 border-l-2 border-[#BFA473]/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={10} className="text-[#BFA473]" />
                    <span className="text-[8px] font-mono text-slate-600 uppercase font-black">
                      Next_Action
                    </span>
                  </div>
                  <p className="text-[10px] text-white font-mono leading-tight">
                    {prj.nextStep}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.03] font-mono bg-[#0A0C10]/50 p-3 -mx-5 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-slate-700 uppercase mb-1 leading-none">
                      Setup
                    </span>
                    <span className="text-xs text-emerald-500 font-bold leading-none">
                      {prj.contractValue}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-slate-700 uppercase mb-1 leading-none">
                      Deadline
                    </span>
                    <span className="text-xs text-white font-bold leading-none">
                      {prj.deliveryDate}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-[#050505] border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github
                    size={12}
                    className={
                      prj.links.repo !== "#"
                        ? "text-slate-400"
                        : "text-slate-800"
                    }
                  />
                  <ExternalLink
                    size={12}
                    className={
                      prj.links.staging !== "#"
                        ? "text-slate-400"
                        : "text-slate-800"
                    }
                  />
                  <FileText
                    size={12}
                    className={
                      prj.links.doc !== "#"
                        ? "text-slate-400"
                        : "text-slate-800"
                    }
                  />
                </div>
                {/* Aqui era o erro: ShieldCheck precisava ser importado */}
                <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500">
                  <ShieldCheck size={12} />
                  <span>{prj.techStack}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#050505] border border-white/10 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#000000]">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 bg-[#BFA473]" />
                <h2 className="text-lg font-bold text-white uppercase tracking-tight font-grotesk">
                  Configuração de OS
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-600 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 space-y-8 overflow-y-auto">
              <div>
                <span className="text-[10px] font-mono text-[#BFA473] font-bold uppercase tracking-[0.2em]">
                  Entidade
                </span>
                <p className="text-3xl font-bold text-white leading-none mt-1">
                  {selectedProject.customer}
                </p>
                <div className="mt-4">
                  <label className="text-[9px] font-mono text-slate-700 uppercase mb-2 block">
                    Editar Próximo Passo
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedProject.nextStep}
                    className="w-full bg-black border border-white/5 p-2 text-xs font-mono text-[#BFA473] focus:outline-none focus:border-[#BFA473]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/5 font-mono">
                <div>
                  <span className="text-[9px] text-slate-700 uppercase block mb-1">
                    Setup
                  </span>
                  <p className="text-emerald-500 font-bold text-sm">
                    {selectedProject.contractValue}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] text-slate-700 uppercase block mb-1">
                    Mensal
                  </span>
                  <p className="text-white text-sm">
                    {selectedProject.recurrentValue}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] text-slate-700 uppercase block mb-1">
                    Assinatura
                  </span>
                  <p className="text-slate-500 text-[10px]">
                    {selectedProject.signedDate}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] text-slate-700 uppercase block mb-1">
                    Entrega
                  </span>
                  <p className="text-blue-400 font-bold text-[10px]">
                    {selectedProject.deliveryDate}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block font-bold">
                  Solicitações Ativas
                </label>
                <div className="flex gap-1 bg-black border border-white/5 p-1">
                  <input
                    type="text"
                    value={newRequest}
                    onChange={(e) => setNewRequest(e.target.value)}
                    placeholder="Nova pendência..."
                    className="flex-1 bg-transparent p-2 text-xs font-mono text-white focus:outline-none"
                  />
                  <button
                    onClick={handleAddRequest}
                    className="bg-white text-black px-4 py-2 font-mono text-[10px] font-black uppercase hover:bg-[#BFA473] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <div className="space-y-1">
                  {selectedProject.requests.map((req) => (
                    <div
                      key={req.id}
                      className="flex items-center justify-between p-3 bg-black/40 border border-white/5 group"
                    >
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            toggleRequestStatus(selectedProject.id, req.id)
                          }
                          className={`w-5 h-5 border flex items-center justify-center transition-all ${req.status === "concluido" ? "bg-emerald-500 border-emerald-500 text-black" : "border-white/20"}`}
                        >
                          <CheckCircle2 size={12} strokeWidth={3} />
                        </button>
                        <span
                          className={`text-xs font-mono ${req.status === "concluido" ? "text-slate-600 line-through" : "text-slate-300"}`}
                        >
                          {req.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#000000] border-t border-white/5 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 text-[10px] font-mono uppercase text-slate-600 hover:text-white transition-colors"
              >
                Sair
              </button>
              <button className="bg-white text-black px-8 py-3 text-[10px] font-mono font-black uppercase tracking-[0.2em] flex items-center gap-2 active:scale-[0.98] transition-all hover:bg-[#BFA473]">
                <RefreshCw size={12} /> Sincronizar OS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pipeline;
