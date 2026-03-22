import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

//Import Axios
import axios from "axios";

//import de componentes
import ProjectCard from "../components/ProjectCard";
import Loader from "../components/Loader";

const Portfolio = () => {
  //States

  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);


  //Effects
  const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseURL}/api/projects`);
        setProjects(response.data);

        console.log("RESPONSE COMPLETA:", response);
      } catch (error) {
        console.error("Erro ao carregar os projetos: ", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* NAVBAR PLACEHOLDER (Opcional, caso a page não tenha um layout wrapper) */}
      <nav className="w-full border-b border-white/5 bg-[#0F1115]/90 backdrop-blur-md py-3 shrink-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-[9px] uppercase tracking-[0.2em]"
          >
            <ChevronLeft size={12} />
            <span className="hidden xs:inline">Back to terminal</span>
            <span className="xs:hidden">Back</span>
          </Link>

          <div className="flex items-center gap-2 px-2 py-0.5 border border-white/5 bg-white/5 rounded-sm">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest whitespace-nowrap">
              Auth_Server: Online
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-10 pb-15">
        {/* HEADER DA PÁGINA */}
        <header className="mb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 block mb-4">
            / EXECUTION_LOG
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Deploys{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-500">
              Ativos.
            </span>
          </h1>
          <p className="max-w-3xl text-slate-400 text-sm md:text-base leading-relaxed">
            Projetos construídos para cenários reais, com foco em estabilidade,
            performance e continuidade operacional.
          </p>
        </header>

        <div className="relative">
          <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 2xl:-mx-10 bg-linear-to-b from-white/2 via-transparent to-white/2" />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.projectName}
                category={p.category}
                image={p.imageUrl}
                tech={p.tech}
                link={p.href}
               
              />
            ))}
          </div>
        </div>
        {isLoading && (
          <>
            <Loader />
          </>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
