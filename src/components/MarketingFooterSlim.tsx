import { Link } from "react-router-dom";

export default function MarketingFooterSlim() {
  return (
    <footer className="relative">
      {/* Soleira (dupla) + scanline sutil */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="relative">
          <div className="h-px bg-white/10" />
          <div className="h-px bg-white/5" />

          <div
            className="absolute inset-x-0 -top-[14px] h-[28px] opacity-60 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
              animation: "bossflowScan 6.5s ease-in-out infinite",
              filter: "blur(0.2px)",
            }}
          />
        </div>
      </div>

      {/* Base do footer (uniforme / painel) */}
      <div className="max-w-6xl mx-auto px-5 pt-7 pb-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/brand/bossflow-logo.png"
                alt="BossFlow"
                className="h-7 md:h-8 w-auto"
                draggable={false}
              />
            </div>

            <p className="text-white/60 mt-4 leading-relaxed max-w-md">
              BossFlow é um painel financeiro pra quem precisa clareza, controle e decisão — sem planilhas.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/55">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Sistema operacional
            </div>
          </div>

          {/* Produto */}
          <div>
            <div className="text-white/80 font-extrabold text-xs uppercase tracking-widest">
              Produto
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <Link className="block hover:text-white transition" to="/">Home</Link>
              <Link className="block hover:text-white transition" to="/precos">Preços</Link>
              <Link className="block hover:text-white transition" to="/suporte">Suporte</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-white/80 font-extrabold text-xs uppercase tracking-widest">
              Legal
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <Link className="block hover:text-white transition" to="/privacidade">Privacidade</Link>
              <Link className="block hover:text-white transition" to="/termos">Termos</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/45">
          <div>© {new Date().getFullYear()} BossFlow · Todos os direitos reservados</div>
          <div className="flex items-center gap-3">
            <a href="mailto:suporte@bossflow.com" className="hover:text-white transition">
              suporte@bossflow.com
            </a>
            <span className="text-white/20">•</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bossflowScan {
          0%   { transform: translateX(-50%); opacity: 0.15; }
          50%  { transform: translateX(50%); opacity: 0.35; }
          100% { transform: translateX(-50%); opacity: 0.15; }
        }
      `}</style>
    </footer>
  );
}
