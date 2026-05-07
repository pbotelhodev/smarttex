import React, { useState } from "react";
import {
  Search,
  Inbox,
  Filter,
  Clock,
  Send,
  Archive,
  Kanban,
  Mail,
  ChevronLeft,
  CornerDownRight,
} from "lucide-react";

const InboxMail = () => {
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(1);
  // Novo estado para controlar a navegação no mobile
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Carlos Eduardo",
      email: "carlos@empresa.com",
      source: "Formulário Smarttex",
      preview: "Gostaria de um orçamento para um SaaS...",
      fullMessage:
        "Olá equipa da Smarttex,\n\nEstou à procura de uma parceira tecnológica para desenvolver um SaaS focado na gestão de clínicas veterinárias...",
      time: "há 2 horas",
      unread: true,
    },
    {
      id: 2,
      name: "Mariana Costa",
      email: "mariana.c@startup.io",
      source: "Landing Page TiJ",
      preview: "Problemas com a integração da API do WhatsApp.",
      fullMessage:
        "Boa tarde,\n\nTestei a integração que fizeram no projeto TeodoroiJacobina...",
      time: "há 5 horas",
      unread: true,
    },
    {
      id: 3,
      name: "Roberto Alves",
      email: "roberto@ind.com.br",
      source: "Contato Direto",
      preview: "Necessidade de auditoria em sistema legado.",
      fullMessage:
        "Prezados,\n\nTemos um ERP interno construído em PHP há mais de 8 anos...",
      time: "ontem",
      unread: false,
    },
  ]);

  const [replyText, setReplyText] = useState("");

  const filteredMessages = messages.filter((msg) =>
    filter === "all" ? true : msg.unread,
  );

  const selectedMessage = messages.find((msg) => msg.id === selectedId);

  const handleSelectMessage = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, unread: false } : msg)),
    );
    setSelectedId(id);
    setShowMobileDetail(true); // No mobile, pula para o detalhe
  };

  return (
    <div className="flex w-full h-full min-h-[500px] animate-in fade-in zoom-in-95 duration-500 bg-[#0A0C10] relative">
      {/* COLUNA 1: A LISTA - Escondida no mobile se o detalhe estiver aberto */}
      <div
        className={`
        ${showMobileDetail ? "hidden" : "flex"} 
        md:flex w-full md:w-1/4 flex-col border-r border-white/5 overflow-hidden
      `}
      >
        <div className="p-4 border-b border-white/5 bg-[#050505] shrink-0">
          <h2 className="font-bold text-white font-grotesk flex items-center gap-2 mb-4">
            <Inbox size={18} /> Caixa de Entrada
          </h2>

          <div className="flex bg-[#0F1115] border border-white/5 p-1">
            <button
              onClick={() => setFilter("all")}
              className={`flex-1 py-1.5 font-mono text-[9px] uppercase tracking-widest transition-colors ${
                filter === "all"
                  ? "bg-white/5 text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`flex-1 py-1.5 font-mono text-[9px] uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 ${
                filter === "unread"
                  ? "bg-white/5 text-[#BFA473]"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Não Lidas
              {messages.filter((m) => m.unread).length > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA473]"></span>
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10">
          <div className="divide-y divide-white/5">
            {filteredMessages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => handleSelectMessage(msg.id)}
                className={`w-full text-left p-4 transition-colors relative ${
                  selectedId === msg.id
                    ? "bg-white/5 border-l-2 border-l-[#BFA473]"
                    : "hover:bg-white/5 border-l-2 border-l-transparent"
                }`}
              >
                {msg.unread && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#BFA473]"></div>
                )}
                <span
                  className={`font-bold font-grotesk text-sm block truncate mb-1 ${msg.unread ? "text-white" : "text-slate-300"}`}
                >
                  {msg.name}
                </span>
                <p className="text-xs text-slate-400 truncate mb-2 font-light">
                  {msg.preview}
                </p>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-600 uppercase tracking-widest">
                  <Clock size={10} /> {msg.time}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COLUNA 2: LEITURA - Escondida no mobile se a lista estiver aberta */}
      <div
        className={`
        ${!showMobileDetail ? "hidden" : "flex"} 
        md:flex w-full md:w-3/4 flex-col overflow-hidden bg-[#0A0C10]
      `}
      >
        {selectedMessage ? (
          <>
            <div className="p-4 md:p-6 border-b border-white/5 bg-[#050505] shrink-0">
              <div className="flex flex-col gap-4">
                {/* Botão de Voltar - Visível apenas no Mobile */}
                <button
                  onClick={() => setShowMobileDetail(false)}
                  className="md:hidden flex items-center gap-2 text-[#BFA473] font-mono text-[10px] uppercase"
                >
                  <ChevronLeft size={16} /> Voltar para lista
                </button>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h1 className="text-xl md:text-2xl font-bold text-white font-grotesk">
                      {selectedMessage.name}
                    </h1>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase">
                      <Mail size={12} className="text-[#BFA473]" />{" "}
                      {selectedMessage.email}
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-slate-600 uppercase tracking-widest flex items-center gap-1">
                    <Clock size={12} /> {selectedMessage.time}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10">
              <p className="text-slate-300 leading-relaxed font-light whitespace-pre-wrap text-sm md:text-base max-w-3xl">
                {selectedMessage.fullMessage}
              </p>
            </div>

            {/* Rodapé de Resposta - Adaptado para telas pequenas */}
            <div className="p-4 md:p-6 border-t border-white/5 bg-[#050505] shrink-0">
              <div className="bg-[#0F1115] border border-white/10 p-3 mb-4">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5 text-[#BFA473]">
                  <CornerDownRight size={14} />
                  <span className="font-mono text-[9px] uppercase font-bold">
                    Resposta Rápida
                  </span>
                </div>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Escreva aqui..."
                  className="w-full bg-transparent border-none text-white text-sm focus:outline-none resize-none min-h-[80px] font-mono"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <button className="bg-white text-black px-6 py-2.5 font-mono text-[10px] font-bold uppercase flex items-center justify-center gap-2">
                  <Send size={14} /> Enviar
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#1A1C20] border border-white/10 text-white px-4 py-2.5 font-mono text-[10px] uppercase flex items-center justify-center gap-2">
                    <Kanban size={14} className="text-indigo-400" /> Pipeline
                  </button>
                  <button className="flex-1 bg-[#1A1C20] border border-white/10 text-white px-4 py-2.5 font-mono text-[10px] uppercase flex items-center justify-center gap-2">
                    <Archive size={14} className="text-red-400" /> Arquivar
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-600 font-mono text-[10px] uppercase tracking-widest">
            Selecione uma mensagem
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxMail;
