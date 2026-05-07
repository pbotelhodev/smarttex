import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ArrowUpRight, Code2, AlertOctagon } from "lucide-react";

import Loader from "../components/Loader";

const ProjectView = () => {
  const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  //Recebe o Slug
  const { slug } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({
    id: "---",
    projectName: "Aguardando Banco de Dados",
    category: "---",
    description: "...",
    tech: [],
    href: "",
    imageUrl: "",
    slug: "...",
  });

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseURL}/api/projects`);
        const project = response.data.find((p) => p.slug === slug);
        setProject(project);

      } catch (error) {
        console.error("Erro ao carregar o projeto: ", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 1. Criamos a referência e o estado da escala
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // 2. O React calcula a matemática exata de encolhimento
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        // Pega a largura real da sua div na tela e divide por 1440 (monitor PC)
        const containerWidth = containerRef.current.offsetWidth;
        setScale(containerWidth / 1440);
      }
    };

    updateScale(); // Roda na hora que abre
    window.addEventListener("resize", updateScale); // Atualiza se redimensionar a tela
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Normalizador de dados para a Stack Tecnológica (Defesa contra retornos inconsistentes do DB)
  const formatTechStack = (techData) => {
    if (!techData) return [];
    if (Array.isArray(techData)) return techData;
    if (typeof techData === "string")
      return techData.split(",").map((t) => t.trim());
    return [];
  };

  // FALLBACK: PROJETO NÃO ENCONTRADO (404)
  if (!project) {
    return (
      <div className="min-h-dvh bg-[#0F1115] font-grotesk flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#0A0C10] border border-red-500/20 p-8 text-center shadow-2xl">
          <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center text-red-500 mx-auto mb-5">
            <AlertOctagon size={24} />
          </div>
          <span className="font-mono text-[10px] text-red-500 uppercase tracking-[0.3em] mb-2 block">
            Error_404
          </span>
          <h1 className="text-2xl font-bold text-white mb-3">
            Entidade Não Encontrada.
          </h1>
          <p className="text-xs text-slate-400 font-mono mb-8 leading-relaxed">
            O slug solicitado não corresponde a nenhum registro ativo no banco
            de dados.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white font-mono text-[10px] uppercase tracking-widest hover:text-[#BFA473] transition-colors border border-white/10 px-6 py-3 cursor-pointer"
          >
            <ChevronLeft size={14} /> Retornar ao Index
          </a>
        </div>
      </div>
    );
  }

  const techStack = formatTechStack(project.tech);

  return (
    <div className="min-h-dvh bg-[#0F1115] text-slate-300 font-grotesk flex flex-col selection:bg-indigo-500/30 overflow-x-hidden">
      {/* NAVIGATION BAR PRINCIPAL */}
      <nav className="w-full border-b border-white/5 bg-[#0F1115]/90 backdrop-blur-md py-4 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.2em] group"
          >
            <ChevronLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="hidden xs:inline">Voltar ao Index</span>
            <span className="xs:hidden">Voltar</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 border border-white/5 bg-white/5 rounded-sm">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest whitespace-nowrap">
                Status: Deployed
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* PROJECT VIEW CONTAINER */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 relative">
        {/* Background Radial */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
          {/* =========================================
              LEFT COLUMN: BLOCO DE INFORMAÇÕES
          ========================================= */}
          <div className="lg:col-span-4 xl:col-span-5 flex flex-col gap-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <header>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[9px] text-[#BFA473] uppercase tracking-[0.3em] font-bold border border-[#BFA473]/30 px-2 py-1 bg-[#BFA473]/10">
                  {project.category}
                </span>
                <span className="font-mono text-[9px] text-slate-600 uppercase tracking-widest">
                  SYS_ID: {project.id}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-5 leading-tight">
                {project.projectName}.
              </h1>

              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-md">
                {project.description}
              </p>
            </header>

            {/* Tech Stack */}
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 mb-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                <Code2 size={14} />
                <span>Stack Tecnológico</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="font-mono text-[10px] text-slate-300 bg-[#0A0C10] border border-white/5 px-3 py-1.5 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-[#0A0C10] border border-white/10 p-5">
              <div className="flex flex-col w-full sm:w-auto overflow-hidden">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">
                  Ambiente de Produção Livre
                </span>
                <span className="text-sm font-bold text-white truncate max-w-full">
                  Abrir sistema em tela cheia
                </span>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-slate-200 text-black px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group active:scale-[0.98] shrink-0"
              >
                Acessar Tela Cheia
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>

            {/* Metadados Extras Simulados */}
          </div>

          {/* =========================================
              RIGHT COLUMN: BLOCO DE INTERAÇÃO (IFRAME)
          ========================================= */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-150">
            <div className="w-full bg-[#0A0C10] border border-white/10 p-2 sm:p-3 relative group flex flex-col">
              {/* Fake Browser Header */}
              <div className="flex items-center bg-[#050505] border border-white/5 rounded-t-md px-4 py-2 mb-2">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 bg-[#0A0C10] border border-white/5 rounded-sm px-3 py-1 text-[10px] font-mono text-slate-500 truncate text-center">
                  {project.href}
                </div>
              </div>

              <div
                ref={containerRef}
                className="relative w-full aspect-video overflow-hidden border border-white/5 bg-[#0F1115] rounded-b-sm"
              >
                <iframe
                  src={project.href}
                  title={`Preview interativo do projeto`}
                  className="absolute top-0 left-0 border-none origin-top-left"
                  style={{
                    width: "1440px",
                    height: "810px",
                    transform: `scale(${scale})`, // Aplica o cálculo exato do React
                  }}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {isLoading && (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};;

export default ProjectView;
