import Navbar from "../components/Navbar";
import MarketingFooterSlim from "../components/MarketingFooterSlim";
import MarketingTopbar from "../components/MarketingTopbar";import { Link } from "react-router-dom";
import { appRegisterUrl } from "../lib/links";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } } };
const cardIn = {
  hidden: { opacity: 0, y: 12, scale: 0.98, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" } },
};
const sectionView = { once: true, amount: 0.25 };

const proBullets = [
  { t: "Empresas ilimitadas", d: "Separe operações. Nada de misturar caixa." },
  { t: "Relatórios mensais", d: "Feche o mês em 10s e aja com números." },
  { t: "Metas do mês", d: "Objetivo + progresso + foco no que importa." },
  { t: "Exportar CSV", d: "Leve seus dados quando quiser." },
  { t: "Histórico completo", d: "Tudo registrado, nada perdido." },
  { t: "Suporte prioritário", d: "Responde mais rápido e resolve." },
];

export default function HomePro() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO PRO */}
        <section className="max-w-6xl mx-auto px-5 pt-16 pb-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 text-xs text-text">
                <span className="h-2 w-2 rounded-full bg-brand2" />
                BossFlow Pro
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
                O PRO é pra quem quer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2">
                  crescer com clareza
                </span>
                .
              </motion.h1>

              <motion.p variants={fadeUp} className="text-muted text-base sm:text-lg mt-4 leading-relaxed max-w-xl">
                Multi-empresa, relatórios, metas e export CSV — no mesmo padrão premium do painel.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={appRegisterUrl()}
                  className="inline-flex justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-brand2 text-bg font-semibold active:scale-[0.98] transition"
                >
                  Ativar PRO (começar)
                </a>
                <Link
                  to="/precos"
                  className="inline-flex justify-center px-5 py-3 rounded-xl border border-stroke bg-panel/50 hover:bg-panel/70 transition font-semibold active:scale-[0.98]"
                >
                  Ver preços
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6 text-sm text-muted">
                <span className="px-3 py-1 rounded-full border border-stroke bg-panel/35">✅ Sem fidelidade</span>
                <span className="px-3 py-1 rounded-full border border-stroke bg-panel/35">✅ Cancelar quando quiser</span>
                <span className="px-3 py-1 rounded-full border border-stroke bg-panel/35">✅ Setup rápido</span>
              </motion.div>
            </motion.div>

            {/* PRO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="rounded-xl2 border border-brand/50 bg-panel/50 shadow-glow p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-50 pointer-events-none">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand2/20 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Plano Pro</div>
                  <span className="text-xs px-2 py-1 rounded-lg border border-brand/40 bg-brand/10 text-text">
                    Recomendado
                  </span>
                </div>

                <div className="mt-4 flex items-end gap-2">
                  <div className="text-4xl font-extrabold">R$ 29</div>
                  <div className="text-sm text-muted pb-1">/mês</div>
                </div>
                <div className="text-xs text-muted mt-2">Anual economiza 2 meses.</div>

                <div className="mt-5 space-y-2 text-sm">
                  {["Empresas ilimitadas", "Relatórios", "Metas", "Export CSV", "Suporte prioritário"].map((t) => (
                    <div key={t} className="text-muted">
                      ✅ <span className="text-text">{t}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={appRegisterUrl()}
                  className="mt-6 inline-flex w-full justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-brand2 text-bg font-semibold active:scale-[0.98] transition"
                >
                  Ativar Pro agora
                </a>

                <div className="mt-3 text-xs text-muted text-center">Cancelamento 1 clique • Sem fidelidade</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENEFÍCIOS PRO */}
        <motion.section
          className="max-w-6xl mx-auto px-5 py-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={sectionView}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold tracking-tight">O que muda no Pro</h2>
            <p className="text-muted mt-2">É aqui que o BossFlow vira “painel de dono” de verdade.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {proBullets.map((b) => (
              <motion.div
                key={b.t}
                variants={cardIn}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-xl2 border border-stroke bg-panel/45 p-5 shadow-glow"
              >
                <div className="font-semibold">{b.t}</div>
                <p className="text-sm text-muted mt-2 leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* COMPARAÇÃO */}
        <motion.section
          className="max-w-6xl mx-auto px-5 py-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={sectionView}
        >
          <motion.div variants={fadeUp} className="rounded-xl2 border border-stroke bg-panel/45 p-6 shadow-glow">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-bold">Comparação: Free vs Pro</div>
                <div className="text-sm text-muted mt-1">O Pro destrava o que dá escala.</div>
              </div>
              <Link to="/precos" className="text-sm px-3 py-2 rounded-xl border border-stroke bg-card/35 hover:bg-card/55 transition">
                Ver preços →
              </Link>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted">
                    <th className="py-3 pr-4">Recurso</th>
                    <th className="py-3 pr-4">Free</th>
                    <th className="py-3 pr-4">Pro</th>
                  </tr>
                </thead>
                <tbody className="text-text">
                  <Row label="Empresas" free="1" pro="Ilimitadas" />
                  <Row label="Histórico" free="Limitado" pro="Completo" />
                  <Row label="Relatórios" free="Básico" pro="Completo (mensal)" />
                  <Row label="Metas do mês" free="—" pro="✅" />
                  <Row label="Exportar CSV" free="—" pro="✅" />
                  <Row label="Suporte" free="Padrão" pro="Prioritário" />
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-5 pb-16">
          <div className="rounded-xl2 border border-brand/40 bg-panel/45 shadow-glow p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-55 pointer-events-none">
              <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand2/20 blur-3xl" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">Ativa o Pro e fecha o mês com clareza</h3>
                <p className="text-muted mt-3 leading-relaxed">
                  Multi-empresa, relatórios, metas e export. Sem fidelidade. Cancelamento 1 clique.
                </p>
                <div className="flex flex-wrap gap-2 mt-5 text-sm text-muted">
                  <span className="px-3 py-1 rounded-full border border-stroke bg-card/35">✅ Sem fidelidade</span>
                  <span className="px-3 py-1 rounded-full border border-stroke bg-card/35">✅ Cancelar quando quiser</span>
                  <span className="px-3 py-1 rounded-full border border-stroke bg-card/35">✅ Setup rápido</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={appRegisterUrl()}
                  className="inline-flex justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-brand2 text-bg font-semibold active:scale-[0.98] transition"
                >
                  Ativar Pro agora
                </a>
                <Link
                  to="/"
                  className="inline-flex justify-center px-5 py-3 rounded-xl border border-stroke bg-card/35 hover:bg-card/55 transition font-semibold active:scale-[0.98]"
                >
                  Voltar pra Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingTopbar />
    </div>
  );
}

function Row({ label, free, pro }: { label: string; free: string; pro: string }) {
  return (
    <tr className="border-t border-stroke">
      <td className="py-3 pr-4 text-muted">{label}</td>
      <td className="py-3 pr-4">{free}</td>
      <td className="py-3 pr-4 font-semibold">{pro}</td>
    </tr>
  );
}
