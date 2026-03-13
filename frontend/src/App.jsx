import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Code2,
  Cpu,
  ShieldCheck,
  Zap,
  Server,
  LayoutTemplate,
  Database,
  ArrowRight,
  CheckCircle2,
  Menu,
  MessageSquare,
  X,
  Lock,
  Mail,
  Phone,
  MapPin,
  Globe,
  HardDrive,
  CloudLightning,
  FileText,
  Rocket,
  GitMerge,
  Layers,
  Container,
  CodeXml,
} from "lucide-react";

//import images
import Memora from "./assets/memora.png";
import TiJ from "./assets/tij.png";
import Vestibule from "./assets/vestibule.png";

import ProjectCard from "./components/ProjectCard";
import TimelineStepCompact from "./components/TimelineStepCompact";
import InputGroup from "./components/InputGroup";
import ContactItem from "./components/ContactItem";
import ServiceCard from "./components/ServiceCard";
import StackListItem from "./components/StackListItem";
import StatItem from "./components/StatItem";

const App = () => {
  const projects = [
    {
      title: "Memora",
      category: "SaaS",
      image: Memora,
      tech: ["React", "Tailwind", "Social Media"],
      href: "https://www.appmemora.com.br",
    },
    {
      title: "TeodoroiJacobina",
      category: "Landing Page",
      image: TiJ,
      tech: ["React", "Tailwind", "Whatsapp API"],
      href: "https://teodoroijacobina.vercel.app",
    },
    {
      title: "Vestibule",
      category: "EdTech",
      image: Vestibule,
      tech: ["React", "LocalStorage", "Auth"],
      href: "https://vestibule-plataform.vercel.app",
    },
  ];

  // --- ESTADOS ---
  const [showIntro, setShowIntro] = useState(true);
  const [isReturn, setIsReturn] = useState(false);
  const [visitorName, setVisitorName] = useState(() => {
    const name = localStorage.getItem("visitorName") || "";
    
    if (name) {
      setShowIntro(false);
      setIsReturn(true);
    }
    return name;
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const inputRef = useRef(null);

  const { register, handleSubmit, reset } = useForm();

  // -- FUNÇÕES ---

  const handleContact = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        reset();
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  };

  // --- EFEITOS ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showIntro && inputRef.current) inputRef.current.focus();
  }, [showIntro]);

  // --- HANDLERS ---
  const handleEnterSite = (e) => {
    e.preventDefault();
    if (visitorName.trim().length > 0) {
      setShowIntro(false);
      window.scrollTo(0, 0);
      localStorage.setItem("visitorName", visitorName.trim());
    }
  };

  // =================================================================
  // 1. TELA DE INTRO
  // =================================================================
  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-[#050505] z-100 flex flex-col items-center justify-center px-4 sm:px-6 transition-opacity duration-700">
        <div className="w-full max-w-90 sm:max-w-100 flex flex-col items-center animate-fade-up">
          <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase mb-2">
            BEM-VINDO À
          </span>
          <img
            src="https://i.ibb.co/NkY7qzm/Logo-Smarttex-Sem-Fundo-White.png"
            alt="Logo-Smarttex-Sem-Fundo-White"
            className="py-4 h-20 sm:h-24 mb-8 object-contain"
          />
          <form onSubmit={handleEnterSite} className="w-full flex flex-col">
            <label className="font-mono text-2.5 text-slate-400 uppercase tracking-widest text-left pl-1 mb-2">
              COMO PODEMOS TE CHAMAR?
            </label>
            <div className="relative w-full mb-8">
              <input
                ref={inputRef}
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 px-0 text-lg sm:text-xl text-white font-sans focus:border-white focus:outline-none transition-all placeholder:text-slate-800 rounded-none"
                placeholder="Ex: Pedro Silva"
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-[#1A1A1A] hover:bg-[#333] text-white font-mono text-[11px] font-semibold py-4 uppercase tracking-[0.2em] transition-all duration-300 rounded-xs ${
                !visitorName ? "opacity-70 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={!visitorName}
            >
              CONTINUAR
            </button>
            <button
              type="button"
              onClick={() => setShowIntro(false)}
              className="text-slate-700 font-mono font-semibold text-[10px] mt-4 uppercase tracking-widest transition-opacity duration-300"
            >
              Pular
            </button>
          </form>
          <p className="mt-5 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
            Tecnologia que transforma negócios.
          </p>
        </div>
      </div>
    );
  }

  // =================================================================
  // 2. SITE PRINCIPAL
  // =================================================================
  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 animate-in fade-in duration-1000">
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0F1115]/90 border-white/5 backdrop-blur-md py-2 md:py-3 lg:py-3 2xl:py-4"
            : "bg-transparent border-transparent py-3 md:py-5 lg:py-5 2xl:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 flex justify-between items-center">
          <div className="h-8 overflow-hidden flex items-center">
            <img
              src="https://i.ibb.co/NkY7qzm/Logo-Smarttex-Sem-Fundo-White.png"
              alt="Logo-Smarttex-Sem-Fundo-White"
              className="h-7 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-7 font-mono text-[12px] lg:text-[13px]">
            <a href="#stack" className="hover:text-slate-400 transition-colors">
              /stack
            </a>
            <a
              href="#solucoes"
              className="hover:text-slate-400 transition-colors"
            >
              /solucoes
            </a>
            <a
              href="#metodo"
              className="hover:text-slate-400 transition-colors"
            >
              /metodo
            </a>
            <a href="#infra" className="hover:text-slate-400 transition-colors">
              /infra
            </a>
            <a
              href="#projetos"
              className="hover:text-slate-400 transition-colors"
            >
              /projetos
            </a>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <a
              href="#login"
              className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
            >
              <Lock size={14} /> Área do Cliente
            </a>
            <button className="bg-white text-black px-4 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors border border-white">
              Iniciar Projeto
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU (corrigido: antes não existia) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0F1115]/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-col gap-3 font-mono text-[12px]">
                <a
                  href="#stack"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" font-mono py-2 text-slate-300 hover:text-white transition-colors"
                >
                  /stack
                </a>
                <a
                  href="#solucoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" font-mono py-2 text-slate-300 hover:text-white transition-colors"
                >
                  /solucoes
                </a>
                <a
                  href="#metodo"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" font-mono py-2 text-slate-300 hover:text-white transition-colors"
                >
                  /metodo
                </a>
                <a
                  href="#infra"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" font-mono py-2 text-slate-300 hover:text-white transition-colors"
                >
                  /infra
                </a>
                <a
                  href="#projetos"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" font-mono py-2 text-slate-300 hover:text-white transition-colors"
                >
                  /projetos
                </a>

                <div className=" font-mono h-px bg-white/10 my-2" />

                <a
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Lock size={14} /> Área do Cliente
                </a>

                <button className="mt-2 bg-white text-black px-4 py-3 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors border border-white">
                  Iniciar Projeto
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-16 md:pt-20 lg:pt-22 2xl:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-pillars opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 md:h-130 lg:h-140 2xl:h-155 bg-linear-radial from-slate-800/10 to-transparent pointer-events-none" />

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded-sm mb-5 md:mb-7 lg:mb-8 2xl:mb-9">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="font-mono text-[10px] md:text-xs text-slate-300 tracking-wider uppercase">
              {isReturn ? `Bem vindo de volta, ` : "Olá "}
              <span className="text-white font-bold">
                {visitorName.toUpperCase() || "VISITANTE"}.
              </span>{" "}
              VAMOS CONSTRUIR ALGO {isReturn ? 'Novo' : null} JUNTOS?
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[86px] font-extrabold text-white tracking-tighter leading-[1.08] md:leading-[1.06] lg:leading-[1.05] 2xl:leading-[1.03] mb-4 md:mb-5 lg:mb-6 font-grotesk">
            Ideias ganham forma em <br className="hidden md:block" />
            <span className="text-indigo-300">Sistemas.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg 2xl:text-xl text-slate-400 max-w-md sm:max-w-xl md:max-w-2xl 2xl:max-w-3xl mx-auto mb-7 md:mb-8 lg:mb-9 leading-relaxed font-light font-mono">
            Software bem construído não é custo. É estrutura para crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center">
            <button className="w-full sm:w-auto bg-slate-100 hover:bg-slate-300 text-black px-6 sm:px-7 md:px-8 py-3.5 md:py-3.5 font-mono text-[11px] sm:text-[12px] md:text-sm font-bold uppercase tracking-widest transition-all border border-transparent">
              Iniciar Projeto
            </button>

            <button
              onClick={() => {
                location.hash = "#projetos";
              }}
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3.5 md:py-3.5 font-mono text-[11px] sm:text-[12px] md:text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
            >
              Casos reais
              <CodeXml
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="mt-12 md:mt-16 lg:mt-16 2xl:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-8 border-t border-white/10 pt-7 md:pt-8 lg:pt-9 max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto">
            <StatItem
              icon={GitMerge}
              title="PROCESSO DIGITAL"
              desc="Etapas, decisões e entregas registradas em um único ambiente."
            />
            <StatItem
              icon={Code2}
              title="ENGENHARIA PRÓPRIA"
              desc="Desenvolvimento sob medida com foco em qualidade e consistência."
            />
            <StatItem
              icon={Layers}
              title="PRODUTOS ATIVOS"
              desc="Plataformas SaaS em operação contínua e evolução constante."
            />
            <StatItem
              icon={ShieldCheck}
              title="SEGURANÇA APLICADA"
              desc="Controle de acesso, backups e boas práticas desde o início."
            />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO: ARSENAL TECNOLÓGICO --- */}
      <section
        id="stack"
        className="py-16 md:py-20 lg:py-22 2xl:py-24 bg-[#08090D] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div className="text-center mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <span className="font-mono text-sm text-slate-500 uppercase tracking-widest">
                / TECH_STACK
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 font-grotesk tracking-tight">
              Arsenal <span className="text-indigo-300">Tecnológico.</span>
            </h2>

            <p className="text-slate-400 mb-7 leading-relaxed text-sm max-w-2xl mx-auto">
              Cada tecnologia é escolhida para garantir estabilidade hoje e
              evolução previsível amanhã.
            </p>

            <div className="flex flex-wrap justify-center gap-5 md:gap-6 border-t border-white/5 pt-6">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-slate-500" />
                <span>Código limpo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-slate-500" />
                <span>Arquitetura modular</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-slate-500" />
                <span>Segurança desde o início</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#0F1115] p-6 md:p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-indigo-900/10 rounded-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                  <LayoutTemplate size={22} />
                </div>
                <span className="font-mono text-[10px] text-slate-600 uppercase">
                  Client
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 font-grotesk">
                Frontend
              </h3>
              <ul className="space-y-3">
                <StackListItem label="React / Vite" desc="SPA rápida." />
                <StackListItem label="Tailwind" desc="UI consistente." />
                <StackListItem label="JavaScript" desc="Entrega ágil." />
              </ul>
            </div>

            <div className="bg-[#0F1115] p-6 md:p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-indigo-900/10 rounded-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                  <Server size={22} />
                </div>
                <span className="font-mono text-[10px] text-slate-600 uppercase">
                  Server
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 font-grotesk">
                Backend
              </h3>
              <ul className="space-y-3">
                <StackListItem label="Node.js" desc="Escala e velocidade." />
                <StackListItem
                  label="Express"
                  desc="APIs simples e robustas."
                />
                <StackListItem label="Prisma" desc="ORM com PostgreSQL." />
              </ul>
            </div>

            <div className="bg-[#0F1115] p-6 md:p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-indigo-900/10 rounded-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                  <Database size={22} />
                </div>
                <span className="font-mono text-[10px] text-slate-600 uppercase">
                  Data
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 font-grotesk">
                Dados
              </h3>
              <ul className="space-y-3">
                <StackListItem label="PostgreSQL" desc="Base confiável." />
                <StackListItem label="Supabase" desc="Auth e realtime." />
                <StackListItem
                  label="Cloudflare R2"
                  desc="Storage de arquivos."
                />
              </ul>
            </div>

            <div className="bg-[#0F1115] p-6 md:p-7 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-indigo-900/10 rounded-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                  <Container size={22} />
                </div>
                <span className="font-mono text-[10px] text-slate-600 uppercase">
                  Infra
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 font-grotesk">
                DevOps
              </h3>
              <ul className="space-y-3">
                <StackListItem
                  label="Infra Gerenciada"
                  desc="Setup, deploy e monitoramento."
                />
                <StackListItem label="AWS" desc="Infra escalável." />
                <StackListItem label="CI/CD" desc="Deploy automatizado." />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section
        id="solucoes"
        className="py-16 md:py-20 lg:py-22 2xl:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10"
      >
        <div className="mb-10 md:mb-12">
          <span className="font-mono text-slate-500 text-sm tracking-wider uppercase mb-2 block">
            / CAPABILITY_LIST
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-grotesk tracking-tight">
            Soluções de <span className="text-indigo-300">Engenharia.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <ServiceCard
            icon={<LayoutTemplate size={28} />}
            title="Sistemas Sob Medida"
            desc="Desenvolvimento de plataformas, dashboards administrativos e sistemas internos (ERP/CRM) personalizados para sua operação."
            tags={["React", "Node.js", "PostgreSQL"]}
          />

          <ServiceCard
            icon={<Server size={28} />}
            title="SaaS"
            desc="Construção de produtos SaaS escaláveis, com arquitetura preparada para crescimento contínuo e monetização."
            tags={["Multi-tenant", "Auth", "Billing"]}
          />

          <ServiceCard
            icon={<Zap size={28} />}
            title="Plataformas Smarttex"
            desc="Desenvolvimento e licenciamento de soluções proprietárias da Smarttex para cenários recorrentes."
            tags={["Product", "License", "Scale"]}
          />

          <ServiceCard
            icon={<Cpu size={28} />}
            title="APIs & Integrações"
            desc="Integração entre sistemas, ERPs, e-commerce e CRMs, automatizando fluxos e reduzindo retrabalho operacional."
            tags={["REST", "Webhooks", "GraphQL"]}
          />

          <ServiceCard
            icon={<Database size={28} />}
            title="Infraestrutura & Deploy"
            desc="Ambientes preparados para produção com deploy automatizado, banco de dados confiável e operação contínua."
            tags={["AWS", "Docker", "CI/CD"]}
          />

          <ServiceCard
            icon={<ShieldCheck size={28} />}
            title="Auditoria & Evolução"
            desc="Diagnóstico técnico, refatoração e aplicação de boas práticas para estabilizar e modernizar sistemas existentes."
            tags={["Audit", "Security", "Refactor"]}
          />
        </div>
      </section>

      {/* --- MÉTODO (TIMELINE COMPACTA) --- */}
      <section
        id="metodo"
        className="py-16 md:py-20 bg-[#0A0C10] border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                / PROCESS_PIPELINE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-grotesk tracking-tight">
              Como <span className="text-indigo-300">Trabalhamos</span>
            </h2>

            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Do briefing ao deploy, com checkpoints claros e escopo controlado.
            </p>
          </div>

          {/* MOBILE (vertical) */}
          <div className="lg:hidden relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-6">
              <TimelineStepCompact
                layout="vertical"
                step="01"
                title="Briefing"
                desc="Objetivo, contexto e restrições."
                icon={<MessageSquare size={16} />}
                time="1–2 dias"
              />
              <TimelineStepCompact
                layout="vertical"
                step="02"
                title="Escopo"
                desc="MVP, critérios de aceite e cronograma."
                icon={<FileText size={16} />}
                time="3–5 dias"
              />
              <TimelineStepCompact
                layout="vertical"
                step="03"
                title="Build"
                desc="Implementação com checkpoints."
                icon={<Code2 size={16} />}
                time="variável"
              />
              <TimelineStepCompact
                layout="vertical"
                step="04"
                title="QA"
                desc="Testes, ajustes e validação."
                icon={<ShieldCheck size={16} />}
                time="1–2 sem"
              />
              <TimelineStepCompact
                layout="vertical"
                step="05"
                title="Deploy"
                desc="Publicação e sustentação."
                icon={<Rocket size={16} />}
                time="contínuo"
              />
            </div>
          </div>

          {/* DESKTOP (horizontal) */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-px bg-white/10" />

              <div className="grid grid-cols-5 gap-5">
                <TimelineStepCompact
                  layout="horizontal"
                  step="01"
                  title="Briefing"
                  desc="Objetivo e contexto."
                  icon={<MessageSquare size={16} />}
                  time="1–2 dias"
                />
                <TimelineStepCompact
                  layout="horizontal"
                  step="02"
                  title="Escopo"
                  desc="MVP e aceite."
                  icon={<FileText size={16} />}
                  time="3–5 dias"
                />
                <TimelineStepCompact
                  layout="horizontal"
                  step="03"
                  title="Build"
                  desc="Checkpoints."
                  icon={<Code2 size={16} />}
                  time="variável"
                />
                <TimelineStepCompact
                  layout="horizontal"
                  step="04"
                  title="QA"
                  desc="Testes e ajustes."
                  icon={<ShieldCheck size={16} />}
                  time="1–2 sem"
                />
                <TimelineStepCompact
                  layout="horizontal"
                  step="05"
                  title="Deploy"
                  desc="Produção."
                  icon={<Rocket size={16} />}
                  time="contínuo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFRAESTRUTURA --- */}
      <section
        id="infra"
        className="py-16 md:py-20 lg:py-22 2xl:py-24 relative overflow-hidden bg-[#0F1115] border-y border-white/5"
      >
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-900/5 -skew-x-12 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 relative z-10">
          <div className="text-center mb-10 md:mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                / INFRA_LAYER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-grotesk tracking-tight">
              Infraestrutura{" "}
              <span className="text-indigo-300">Gerenciada.</span>
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Operação técnica contínua para manter seu sistema estável, seguro
              e preparado para crescer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-[#14181F] border border-white/10 p-6 md:p-7 relative overflow-hidden group hover:border-slate-500/30 transition-colors flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <CloudLightning size={92} />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-3">
                  <Globe size={22} className="text-slate-400" /> Infraestrutura
                  Gerenciada
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Infraestrutura em nuvem com monitoramento e ajustes conforme a
                  demanda do sistema.
                </p>
              </div>

              <div className="font-mono text-lg text-white pt-5 border-t border-white/5">
                Sob consulta{" "}
                <span className="text-xs text-slate-500">/mês</span>
              </div>
            </div>

            <div className="bg-[#14181F] border border-white/10 p-6 md:p-7 relative overflow-hidden group hover:border-slate-500/30 transition-colors flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database size={92} />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-3">
                  <HardDrive size={22} className="text-slate-400" /> Database
                  Cluster
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Banco de dados com alta disponibilidade, rotinas de backup e
                  monitoramento contínuo.
                </p>
              </div>

              <div className="font-mono text-lg text-white pt-5 border-t border-white/5">
                Sob consulta{" "}
                <span className="text-xs text-slate-500">/mês</span>
              </div>
            </div>

            <div className="bg-[#14181F] border border-white/10 p-6 md:p-7 relative overflow-hidden group hover:border-slate-500/30 transition-colors flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GitMerge size={92} />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-3">
                  <Code2 size={22} className="text-slate-400" /> Ambiente CI/CD
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Pipeline de deploy automatizado com ambientes organizados para
                  testes e produção.
                </p>
              </div>

              <div className="font-mono text-lg text-white pt-5 border-t border-white/5">
                Sob consulta{" "}
                <span className="text-xs text-slate-500">/mês</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROJETOS */}
      <section
        id="projetos"
        className="relative py-16 md:py-20 lg:py-22 2xl:py-24 bg-[#0A0C10] border-t border-white/5 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-white/3 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14 lg:mb-16">
            <div>
              <span className="font-mono text-slate-500 text-sm tracking-wider uppercase mb-2 block">
                / EXECUTION_LOG
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-grotesk tracking-tight leading-tight">
                Sistemas em <span className="text-indigo-300">Operação.</span>
              </h2>

              <p className="text-slate-400 mt-4 max-w-2xl leading-relaxed">
                Projetos construídos para cenários reais, com foco em
                estabilidade, performance e continuidade operacional.
              </p>
            </div>

            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-white transition-colors"
            >
              Ver portfólio completo <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 2xl:-mx-10 bg-linear-to-b from-white/2 via-transparent to-white/2" />

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  category={p.category}
                  image={p.image}
                  tech={p.tech}
                  link={p.href}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 md:hidden">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-white transition-colors"
            >
              Ver portfólio completo <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer className="bg-black border-t border-white/10 pt-12 md:pt-14 lg:pt-16 2xl:pt-18">
        {/* CONTACT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div className="text-center mb-8 md:mb-10 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight font-grotesk">
              Vamos <span className="text-indigo-300">Conversar?</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-sm lg:text-base max-w-2xl mx-auto">
              Entre em contato para discutir o seu {""}
              <span className="text-white font-bold border-b border-white/30">
                projeto
              </span>
              .
            </p>

            <p className="text-slate-500 text-xs sm:text-sm md:text-xs lg:text-sm mt-2 font-mono">
              Respondemos em até 24 horas úteis.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-7 md:gap-8 lg:gap-10 pb-10 md:pb-12 lg:pb-12">
            <div className="md:col-span-4 space-y-6 md:space-y-7">
              <div>
                <h3 className="text-base md:text-base lg:text-lg font-bold text-white mb-3 font-grotesk">
                  Informações de Contato
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Estamos sempre aberto a discutir novos projetos, ideias
                  criativas ou oportunidades de fazer parte da sua visão.
                </p>
              </div>

              <div className="space-y-4 md:space-y-5">
                <ContactItem
                  icon={<Mail size={18} />}
                  label="Email"
                  value="smarttexdev@gmail.com"
                  sub="Envie uma mensagem detalhando seu projeto e necessidades"
                />
                <ContactItem
                  icon={<Phone size={18} />}
                  label="Telefone"
                  value="+55 (38) 99733-4556"
                  sub="WhatsApp disponível para mensagens e chamadas"
                />
                <ContactItem
                  icon={<MapPin size={18} />}
                  label="Localização"
                  value="Montes Claros - MG, Brasil"
                  sub="Atendimento Remoto Global"
                />
              </div>
            </div>

            <div className="md:col-span-8">
              <form
                onSubmit={handleSubmit(handleContact)}
                className="space-y-3 md:space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <InputGroup
                    label="Nome Completo *"
                    placeholder="Seu nome"
                    defaultValue={visitorName}
                    {...register("name", { required: true })}
                  />
                  <InputGroup
                    label="Email *"
                    placeholder="seu@email.com"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <InputGroup
                    label="Telefone"
                    placeholder="(99) 99999-9999"
                    {...register("phone", { required: true })}
                  />
                  <InputGroup
                    label="Empresa"
                    placeholder="Nome da empresa"
                    {...register("company", { required: true })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
                    Orçamento Estimado
                  </label>
                  <select
                    className="input-bunker px-3 py-2.5 text-sm appearance-none rounded-none cursor-pointer"
                    {...register("budget", { required: true })}
                  >
                    <option>Selecione uma faixa</option>
                    <option>R$ Até 1k</option>
                    <option>R$ 1k - R$ 5k</option>
                    <option>R$ 5k - R$ 10k</option>
                    <option>R$ 10k - R$ 30k</option>
                    <option>R$ 30k - R$ 50k</option>
                    <option>+ R$ 50k</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">
                    Mensagem *
                  </label>
                  <textarea
                    className="input-bunker px-3 py-2.5 h-24 md:h-28 text-sm resize-none rounded-none"
                    placeholder="Conte sobre seu projeto, objetivos e prazos..."
                    {...register("message", { required: true })}
                  ></textarea>
                </div>

                <button className="w-full bg-white hover:bg-slate-200 text-black font-bold uppercase py-2.5 tracking-[0.2em] text-xs transition-colors mt-2">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* RODAPÉ (ponta a ponta, tudo na MESMA LINHA) */}
        <div className="border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 2xl:px-10">
          <div className="max-w-7xl mx-auto">
            {/* ✅ em telas menores: scroll horizontal (não quebra pra baixo) */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-12 gap-8 text-sm min-w-275">
                {/* Brand (4/12) */}
                <div className="col-span-4">
                  <img
                    src="https://i.ibb.co/NkY7qzm/Logo-Smarttex-Sem-Fundo-White.png"
                    alt="Logo-Smarttex-Sem-Fundo-White"
                    className="h-7 mb-3 object-contain"
                  />
                  <p className="text-slate-500 leading-relaxed max-w-sm">
                    Desenvolvimento web profissional para transformar suas
                    ideias em sistemas poderosos e escaláveis.
                  </p>
                </div>

                {/* Links Rápidos (2/12) */}
                <div className="col-span-2">
                  <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider font-grotesk whitespace-nowrap">
                    Links Rápidos
                  </h4>
                  <ul className="space-y-3 text-slate-500">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Início
                      </a>
                    </li>
                    <li>
                      <a
                        href="#solucoes"
                        className="hover:text-white transition-colors"
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projetos"
                        className="hover:text-white transition-colors"
                      >
                        Portfólio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contato"
                        className="hover:text-white transition-colors"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Plataforma (2/12) */}
                <div className="col-span-2">
                  <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider font-grotesk whitespace-nowrap">
                    Plataforma
                  </h4>
                  <ul className="space-y-3 text-slate-500">
                    <li>
                      <a
                        href="#login"
                        className="hover:text-white transition-colors"
                      >
                        Área do Cliente
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Abrir Solicitação
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Contratos &amp; Assinaturas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Acompanhar Entregas
                      </a>
                    </li>

                    {/* ✅ Admin camuflado */}
                    <li>
                      <a
                        href="#admin"
                        aria-label="Admin"
                        className="text-slate-900/20 hover:text-slate-400 transition-colors select-none"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Recursos (2/12) */}
                <div className="col-span-2">
                  <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider font-grotesk whitespace-nowrap">
                    Recursos
                  </h4>
                  <ul className="space-y-3 text-slate-500">
                    <li>
                      <a
                        href="#metodo"
                        className="hover:text-white transition-colors"
                      >
                        Nosso Método
                      </a>
                    </li>
                    <li>
                      <a
                        href="#infra"
                        className="hover:text-white transition-colors"
                      >
                        Infraestrutura
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Status da Plataforma
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contato (2/12) — agora não cai pra baixo */}
                <div className="col-span-2">
                  <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider font-grotesk whitespace-nowrap">
                    Contato
                  </h4>
                  <ul className="space-y-3 text-slate-500">
                    <li className="whitespace-nowrap">smarttexdev@gmail.com</li>
                    <li>
                      <a
                        href="https://wa.me/5538997334556"
                        className="hover:text-white transition-colors"
                      >
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/pbotelhodev"
                        className="hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 mt-10 pt-7 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono gap-3">
              <p>© 2026 Smarttex. Todos os direitos reservados.</p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Termos
                </a>
                <span className="text-white/10">•</span>
                <a href="#" className="hover:text-slate-300 transition-colors">
                  Privacidade
                </a>
                <span className="text-white/10">•</span>
                <p className="text-slate-600">
                  Desenvolvido com tecnologia de ponta
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
