export default function PanelStrip() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-10 pb-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md">
        {/* glow suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-brand2/10 opacity-50" />

        <div className="relative px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-sm text-white/70">
            <span className="font-semibold text-white">BossFlow</span>{" "}
            é um painel financeiro feito para fechar o mês com clareza.
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-white/50">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Sistema operacional
          </div>
        </div>
      </div>
    </section>
  );
}
