import React, { useState } from "react";
import {
  LayoutDashboard,
  Inbox,
  Kanban,
  Users,
  FileText,
  Headset,
  FolderGit2,
  Wallet,
  UserCog,
  Server,
  Activity,
  LogOut,
  Bell,
  Terminal,
  ShieldCheck,
  Settings,
} from "lucide-react";

import Dashboard from "../layouts/Dashboard";

const AdminDashboard = () => {
  // Estado que controla a aba selecionada
  const [activeTab, setActiveTab] = useState("dashboard");

  // Estrutura de navegação agrupada logicamente
  const menuGroups = [
    {
      title: "Core_System",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "inbox", label: "Caixa de Entrada", icon: Inbox },
      ],
    },
    {
      title: "CRM_&_Sales",
      items: [
        { id: "pipeline", label: "Pipeline", icon: Kanban },
        { id: "clientes", label: "Clientes", icon: Users },
        { id: "contratos", label: "Contratos", icon: FileText },
      ],
    },
    {
      title: "Operations",
      items: [
        { id: "fila", label: "Fila de Atendimento", icon: Headset },
        { id: "portfolio", label: "Portfólio", icon: FolderGit2 },
      ],
    },
    {
      title: "Management",
      items: [
        { id: "financeiro", label: "Financeiro", icon: Wallet },
        { id: "usuarios", label: "Usuários", icon: UserCog },
      ],
    },
    {
      title: "System_&_Logs",
      items: [
        { id: "infra", label: "Infraestrutura", icon: Server },
        { id: "logs", label: "Logs de Sistema", icon: Activity },
        { id: "settings", label: "Configurações", icon: Settings}
      ],
    },
  ];

  // Função auxiliar para encontrar o título ativo para o header
  const getActiveLabel = () => {
    for (const group of menuGroups) {
      const found = group.items.find((item) => item.id === activeTab);
      if (found) return found.label;
    }
    return "Dashboard";
  };

  return (
    <div className="flex h-[100dvh] bg-[#0F1115] text-slate-300 font-grotesk overflow-hidden selection:bg-[#BFA473]/30">
      {/* SIDEBAR (Esquerda) */}
      <aside className="w-64 bg-[#0A0C10] border-r border-white/5 flex flex-col shrink-0 hidden md:flex z-20">
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-white/5 shrink-0">
          <img
            src="https://i.ibb.co/NkY7qzm/Logo-Smarttex-Sem-Fundo-White.png"
            alt="Smarttex"
            className="h-5 object-contain"
          />
        </div>

        {/* Nav Links (Com scroll independente) */}
        <div className="flex-1 py-6 px-3 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={groupIndex > 0 ? "mt-6" : ""}>
              <div className="px-3 mb-3">
                <span className="font-mono text-[9px] text-slate-600 uppercase tracking-widest font-bold">
                  {group.title}
                </span>
              </div>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-all border border-transparent cursor-pointer ${
                        isActive
                          ? "bg-[#BFA473]/10 text-[#BFA473] border-[#BFA473]/30"
                          : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                      }`}
                    >
                      <item.icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* User / Logout Area */}
        <div className="p-4 border-t border-white/5 shrink-0">
          <div className="bg-[#050505] border border-white/5 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-xs">
                AD
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-none">
                  Admin
                </span>
                <span className="font-mono text-[9px] text-emerald-500 mt-1">
                  Sessão Ativa
                </span>
              </div>
            </div>
            <button className="text-slate-500 hover:text-red-400 transition-colors cursor-pointer">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO (Direita) */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0F1115] relative">
        {/* Background Subtle Noise/Light */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

        {/* HEADER TOP */}
        <header className="h-16 border-b border-white/5 bg-[#0F1115]/80 backdrop-blur-md flex items-center px-6 justify-between shrink-0 relative z-10">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <button className="md:hidden text-slate-400 hover:text-white cursor-pointer">
              <LayoutDashboard size={20} />
            </button>

            <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={12} className="text-[#BFA473]" />
              <span>Smarttex_OS</span>
              <span className="text-slate-700">/</span>
              <span className="text-white">{getActiveLabel()}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-[#0F1115]"></span>
            </button>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500">
              <ShieldCheck size={12} />
              <span>Node_SECURE</span>
            </div>
          </div>
        </header>

        {/* CONTEÚDO DINÂMICO (Área limpa para receber os teus componentes) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 relative z-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
          <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
            {
              activeTab === "dashboard" ? <Dashboard/> : null
            }
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
