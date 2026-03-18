import { useEffect } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

// Recebemos o onClose que o App enviou
const Alert = ({ type, message, onClose }) => {
  // O componente nasce, inicia o cronômetro. Após 3s, ele mesmo pede para o pai fechá-lo.
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Se o componente for destruído antes dos 3s, cancela o timer (evita memory leak)
    return () => clearTimeout(timer);
  }, [onClose]);

  const config = {
    success: {
      wrapper:
        "bg-[#0A0C10]/95 border-white/5 border-t-emerald-500 text-emerald-400",
      icon: <CheckCircle size={14} />,
      prefix: "SYS_OK ACCEPTED",
    },
    error: {
      wrapper: "bg-[#0A0C10]/95 border-white/5 border-t-red-500 text-red-400",
      icon: <AlertCircle size={14} />,
      prefix: "SYS_ERR REJECTED",
    },
  };

  const current = config[type] || config.error;

  return (
    <div
      className={`fixed top-6 left-0 right-0 mx-auto w-max z-100 flex items-start gap-3 p-4 border border-t-2 shadow-2xl min-w-75 animate-in slide-in-from-top-8 fade-in duration-300 backdrop-blur-md ${current.wrapper}`}
    >
      <div className="mt-0.5 shrink-0">{current.icon}</div>
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[9px] uppercase tracking-widest opacity-80">
          [{current.prefix}]
        </span>
        <span className="font-mono text-xs text-slate-300">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
