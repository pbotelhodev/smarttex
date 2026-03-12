import { ArrowRight } from "lucide-react";

const ProjectCard = ({ title, category, image, tech, link }) => (
  <div className="group relative overflow-hidden border border-white/10 bg-[#14181F]">
    <div className="absolute inset-0 bg-linear-to-t from-[#0A0C10] via-transparent to-transparent opacity-90 z-10" />
    <img
      src={image}
      alt={title}
      className="w-full h-72 md:h-80 object-cover opacity-60 group-hover:opacity-90 transition-opacity grayscale-30 hover:grayscale-0 duration-300"
    />
    <div className="absolute bottom-0 left-0 p-7 z-20 w-full">
      <div className="flex justify-between items-end" onClick={() => window.open(link, "_blank")}>
        <div>
          <span className="font-mono text-indigo-300 text-xs uppercase mb-2 block">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-grotesk">
            {title}
          </h3>
          <p className="font-mono text-xs text-indigo-300 border-l-2 border-slate-500 pl-2 mt-2">
            {Array.isArray(tech) ? tech.join(" • ") : tech}
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
          <div className="bg-white text-black p-2">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
 export default ProjectCard;