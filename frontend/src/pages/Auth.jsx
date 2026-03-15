import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Lock,
  Mail,
  User,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Eye,
  EyeOff,
  ChevronLeft,
  Cpu,
} from "lucide-react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {

    alert(data.email + " - " + data.password + (data.fullName ? " - " + data.fullName : ""));

  };

  return (
    <div className="min-h-dvh bg-[#0F1115] text-slate-300 font-grotesk flex flex-col selection:bg-indigo-500/30 overflow-hidden">
      {/* NAVIGATION - SLIM VERSION */}
      <nav className="w-full border-b border-white/5 bg-[#0F1115]/90 backdrop-blur-md py-3 shrink-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-[9px] uppercase tracking-[0.2em]"
          >
            <ChevronLeft size={12} />
            <span className="hidden xs:inline">Back to terminal</span>
            <span className="xs:hidden">Back</span>
          </a>

          <div className="flex items-center gap-2 px-2 py-0.5 border border-white/5 bg-white/5 rounded-sm">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest whitespace-nowrap">
              Auth_Server: Online
            </span>
          </div>
        </div>
      </nav>

      {/* ÁREA CENTRAL - COMPACTA E RESPONSIVA */}
      <main className="flex-1 flex items-center justify-center p-5 relative overflow-y-auto">
        {/* Background Estilo Bunker */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none" />

        {/* CARD DE AUTENTICAÇÃO */}
        <div className="w-full max-w-md lg:max-w-100 bg-[#0A0C10] border border-white/10 relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
          {/* Top Accent Line */}
          <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#BFA473]/40 to-transparent" />

          <div className="p-5 sm:p-8 md:p-8">
            {/* Header Reduzido */}
            <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-indigo-900/10 border border-indigo-500/20 flex items-center justify-center text-[#BFA473] mb-3 sm:mb-4">
                {isLogin ? (
                  <Lock size={18} strokeWidth={1.5} />
                ) : (
                  <User size={18} strokeWidth={1.5} />
                )}
              </div>

              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-[0.4em] mb-1 block">
                {isLogin ? "System_Access" : "Account_Provisioning"}
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tighter">
                {isLogin ? "Área do Cliente." : "Novo Cadastro."}
              </h1>
            </div>

            <form
              className="space-y-3.5 sm:space-y-2.5"
              onSubmit={handleSubmit(handleLogin)}
            >
              {/* Nome (Cadastro) */}
              {!isLogin && (
                <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold ml-1">
                    Nome Completo
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-600 group-focus-within:text-[#BFA473] transition-colors">
                      <User size={14} />
                    </div>
                    <input
                      {...register("fullName")}
                      type="text"
                      placeholder="Identificação"
                      className="w-full bg-[#050505] border border-white/5 text-white text-xs px-10 py-2.5 sm:py-3 focus:outline-none focus:border-[#BFA473]/30 focus:bg-[#0F1115] transition-all placeholder:text-slate-800 font-mono"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold ml-1">
                  E-mail de Acesso
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-600 group-focus-within:text-[#BFA473] transition-colors">
                    <Mail size={14} />
                  </div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-[#050505] border border-white/5 text-white text-xs px-10 py-2.5 sm:py-3 focus:outline-none focus:border-[#BFA473]/30 focus:bg-[#0F1115] transition-all placeholder:text-slate-800 font-mono"
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                    Senha
                  </label>
                  {isLogin && (
                    <a
                      href="#"
                      className="font-mono text-[7px] text-indigo-400 hover:text-indigo-300 uppercase tracking-wider transition-colors"
                    >
                      Esqueci?
                    </a>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-600 group-focus-within:text-[#BFA473] transition-colors">
                    <Lock size={14} />
                  </div>
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-[#050505] border border-white/5 text-white text-xs px-10 py-2.5 sm:py-3 focus:outline-none focus:border-[#BFA473]/30 focus:bg-[#0F1115] transition-all placeholder:text-slate-800 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-700 hover:text-slate-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              {/* Ação */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-slate-200 text-black px-6 py-3 sm:py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  {isLogin ? "Acessar" : "Registrar"}
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>

              {/* Toggle */}
              <p className="text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                {isLogin ? "Não tem conta?" : "Já registrado?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-white hover:text-[#BFA473] transition-colors underline underline-offset-4 font-mono"
                >
                  {isLogin ? "Registrar" : "Login"}
                </button>
              </p>
            </form>
          </div>

          {/* Card Footer Log */}
          <div className="bg-[#050505] py-2.5 px-6 sm:px-8 border-t border-white/5 flex items-center justify-between font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={10} className="text-emerald-500/30" />
              <span className="text-[7px] text-slate-700 uppercase tracking-tighter whitespace-nowrap">
                Session_AES256
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu size={10} className="text-slate-800" />
              <span className="text-[7px] text-slate-700 uppercase tracking-tighter">
                Smarttex Desenvolvimento de Software
              </span>
            </div>
          </div>
        </div>

        {/* Branding Inferior (Agora em fluxo relativo em telas minúsculas para não sobrepor) */}
      </main>
    </div>
  );
};

export default App;
