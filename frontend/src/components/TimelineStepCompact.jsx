import React from "react";

const TimelineStepCompact = ({
  layout = "vertical",
  step,
  title,
  desc,
  icon,
  time,
}) => {
  const isVertical = layout === "vertical";

  return (
    <div className={isVertical ? "relative pl-12" : "relative pt-12"}>
      {/* node */}
      <div
        className={
          isVertical
            ? "absolute left-2 top-2"
            : "absolute left-1/2 top-5 -translate-x-1/2"
        }
      >
        <div className="h-9 w-9 rounded-full border border-white/10 bg-[#0F1115] grid place-items-center text-indigo-300 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          {icon}
        </div>
      </div>

      {/* connector (vertical) */}
      {isVertical && (
        <div className="absolute left-4 top-11 bottom-0 w-px bg-white/10" />
      )}

      {/* card */}
      <div className="bg-[#0F1115] border border-white/5 p-5 hover:border-white/10 transition-colors">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            Etapa {step}
          </span>
          <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            {time}
          </span>
        </div>

        <h3 className="text-base font-bold text-white font-grotesk mb-1">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default TimelineStepCompact;
