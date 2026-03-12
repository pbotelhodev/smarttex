const StatItem = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center group">
    {Icon && (
      <div className="mb-4 p-3 md:p-3.5 lg:p-3.5 2xl:p-4 bg-white/5 border border-white/10 rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)] group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
        <Icon
          size={16}
          className="text-slate-300 group-hover:text-white transition-colors duration-300 md:hidden"
        />
        <Icon
          size={18}
          className="hidden md:block text-slate-300 group-hover:text-white transition-colors duration-300"
        />
      </div>
    )}

    <span className="text-[10px] md:text-xs lg:text-xs 2xl:text-[13px] text-slate-100 uppercase tracking-[0.22em] font-mono">
      {title}
    </span>

    {desc && (
      <span className="mt-1 text-[11px] md:text-xs lg:text-xs 2xl:text-sm text-slate-500 leading-relaxed max-w-[20rem] md:max-w-[18rem] lg:max-w-[16rem] 2xl:max-w-[18rem]">
        {desc}
      </span>
    )}

    <div className="mt-4 h-px w-10 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
  </div>
);

export default StatItem;