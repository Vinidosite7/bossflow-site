import { Link } from "react-router-dom";

export default function PanelEndcap() {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-10">
      <div className="relative">
        {/* glow de fundo (bem sutil) */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-brand2/12 to-brand/12 blur-2xl" />

        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
          {/* borda interna (painel) */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 opacity-50" />

          {/* highlight topo */}
          <div className="pointer-events-none absolute -top-24 left-0 right-0 h-40 bg-white/10 blur-2xl opacity-40" />

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-brand2" />
                  Encerrar o mês com clareza
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                  Seu financeiro com cara de painel — do jeito certo.
                </h3>

                <p className="text-white/70 mt-3 leading-relaxed">
                  Menos planilha, menos bagunça. Mais controle, metas e relatórios.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/precos"
                  className="inline-flex justify-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                >
                  Ver planos
                </Link>
                <Link
                  to="/suporte"
                  className="inline-flex justify-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                >
                  Suporte
                </Link>
              </div>
            </div>
          </div>

          {/* TRANSIÇÃO PAINEL → FOOTER */}
          {/* 1) fade suave pra baixo */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.00), rgba(5,10,24,0.85))",
            }}
          />

          {/* 2) “soleira interna” (dupla) colada no rodapé */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            <div className="h-px bg-white/10" />
            <div className="h-px bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
