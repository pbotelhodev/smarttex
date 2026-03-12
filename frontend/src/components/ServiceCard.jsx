const ServiceCard = ({ icon, title, desc, tags }) => (
  <div className="group bg-[#14181F] border border-white/5 p-7 hover:border-indigo-900/30 transition-all duration-300">
    <div className="text-slate-400 mb-5 group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-3 font-grotesk">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="text-xs font-mono bg-white/5 text-slate-400 px-2 py-1 rounded-sm border border-white/5"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ServiceCard;
