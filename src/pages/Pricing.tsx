// PATH: src/pages/Pricing.tsx
import MarketingFAQ from "../components/MarketingFAQ";
import MarketingFooterSlim from "../components/MarketingFooterSlim";
import MarketingTopbar from "../components/MarketingTopbar";
import PanelStrip from "../components/PanelStrip";
import { Link } from "react-router-dom";
import { appRegisterUrl } from "../lib/links";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* ─── A/B Price ─────────────────────────────────────────────────────────── */
function usePriceAB() {
  const [price, setPrice] = useState<29 | 39>(29);
  useEffect(() => {
    const stored = localStorage.getItem("bf_price_variant");
    if (stored === "29" || stored === "39") {
      setPrice(Number(stored) as 29 | 39);
    } else {
      const v: 29 | 39 = Math.random() < 0.5 ? 29 : 39;
      localStorage.setItem("bf_price_variant", String(v));
      setPrice(v);
    }
  }, []);
  return price;
}

/* ─── Motion presets ────────────────────────────────────────────────────── */
const vContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const vFadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const vSoft = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const sectionView = { once: true, amount: 0.2 };

/* ─── Types ─────────────────────────────────────────────────────────────── */
type Plan = {
  key: string;
  title: string;
  subtitle: string;
  priceMonthly: number;
  highlight?: boolean;
  features: { text: string; available: boolean }[];
  cta: string;
  href: string;
  tag?: string;
};

/* ─── Compare rows ──────────────────────────────────────────────────────── */
const compareRows = [
  { label: "Empresas",      cols: ["1", "Até 3", "Ilimitadas", "Ilimitadas"] },
  { label: "Contas/Caixas", cols: ["2", "5", "Ilimitadas", "Ilimitadas"] },
  { label: "Relatórios",    cols: ["—", "—", "Mensais", "Auditoria"] },
  { label: "Metas do mês",  cols: ["—", "—", "✓", "✓"] },
  { label: "Export CSV",    cols: ["—", "Básico", "✓", "✓ Avançado"] },
  { label: "Suporte",       cols: ["Padrão", "Padrão", "Prioritário", "VIP"] },
  { label: "Onboarding",    cols: ["—", "—", "—", "Assistido"] },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Pricing() {
  const proAB = usePriceAB();

  const plans: Plan[] = useMemo(() => [
    {
      key: "free",
      title: "Gratuito",
      subtitle: "Para quem está começando.",
      priceMonthly: 0,
      features: [
        { text: "1 empresa", available: true },
        { text: "2 contas/caixas", available: true },
        { text: "Dashboard do mês", available: true },
        { text: "Categorias", available: true },
        { text: "Fluxo de caixa básico", available: true },
        { text: "Relatórios mensais", available: false },
        { text: "Metas do mês", available: false },
        { text: "Export CSV", available: false },
      ],
      cta: "Começar grátis",
      href: appRegisterUrl(),
    },
    {
      key: "essencial",
      title: "Essencial",
      subtitle: "Para quem já tem uma operação rodando.",
      priceMonthly: 19,
      features: [
        { text: "Até 3 empresas", available: true },
        { text: "5 contas/caixas", available: true },
        { text: "Dashboard + Financeiro", available: true },
        { text: "Histórico ampliado", available: true },
        { text: "Export básico", available: true },
        { text: "Relatórios mensais", available: false },
        { text: "Metas do mês", available: false },
        { text: "Suporte prioritário", available: false },
      ],
      cta: "Começar no Essencial",
      href: appRegisterUrl(),
    },
    {
      key: "pro",
      title: "Pro",
      subtitle: "Visão clara e decisão rápida.",
      priceMonthly: proAB,
      highlight: true,
      tag: "Mais vendido",
      features: [
        { text: "Empresas ilimitadas", available: true },
        { text: "Contas ilimitadas", available: true },
        { text: "Relatórios mensais", available: true },
        { text: "Metas do mês", available: true },
        { text: "Export CSV completo", available: true },
        { text: "Histórico completo", available: true },
        { text: "Suporte prioritário", available: true },
        { text: "Onboarding assistido", available: false },
      ],
      cta: "Ativar BossFlow Pro",
      href: appRegisterUrl(),
    },
    {
      key: "scale",
      title: "Scale",
      subtitle: "Para quem já é monstro da escala.",
      priceMonthly: 149,
      features: [
        { text: "Tudo do Pro", available: true },
        { text: "Onboarding assistido", available: true },
        { text: "Suporte VIP", available: true },
        { text: "Permissões (em breve)", available: true },
        { text: "Auditoria (em breve)", available: true },
        { text: "Integrações sob demanda", available: true },
        { text: "SLA garantido", available: true },
        { text: "Acesso antecipado", available: true },
      ],
      cta: "Falar com o time",
      href: "/suporte",
    },
  ], [proAB]);

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingTopbar active="precos" />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-[#06163a] to-[#050a18]" />
            <div className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full bg-brand/18 blur-3xl" />
            <div className="absolute -top-48 -left-40 h-[520px] w-[520px] rounded-full bg-brand2/16 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage: "radial-gradient(60% 55% at 50% 25%, black 60%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(60% 55% at 50% 25%, black 60%, transparent 100%)",
              }}
            />
          </div>

          <motion.section
            className="max-w-6xl mx-auto px-5 pt-16 pb-10 text-center"
            variants={vContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={vFadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-brand2" />
              Planos simples • Sem fidelidade • Cancela quando quiser
            </motion.div>

            <motion.h1
              variants={vFadeUp}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-5 leading-[1.05]"
            >
              O plano certo para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand2 to-brand">
                cada operação
              </span>
            </motion.h1>

            <motion.p
              variants={vFadeUp}
              className="text-white/70 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
            >
              Comece de graça e suba de plano quando fizer sentido. Todos os planos têm a experiência premium do BossFlow.
            </motion.p>

            <motion.div
              variants={vFadeUp}
              className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-white/70"
            >
              {["✅ Sem fidelidade", "✅ Cancelar quando quiser", "✅ Setup em 2 minutos", "✅ Sem cartão no gratuito"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{t}</span>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Cards ─────────────────────────────────────────────────── */}
          <motion.section
            className="max-w-6xl mx-auto px-5 pb-16"
            variants={vContainer}
            initial="hidden"
            whileInView="show"
            viewport={sectionView}
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 items-end">
              {plans.map((p) => (
                <PlanCard key={p.key} plan={p} />
              ))}
            </div>

            <motion.p variants={vFadeUp} className="text-xs text-white/40 mt-5 text-center">
              * O preço do Pro pode variar em teste A/B (R$ 29 ou R$ 39 /mês).
            </motion.p>
          </motion.section>
        </div>

        {/* ── Tabela comparativa ───────────────────────────────────────── */}
        <motion.section
          className="max-w-6xl mx-auto px-5 py-12"
          variants={vContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionView}
        >
          <motion.div variants={vFadeUp}>
            <h2 className="text-2xl font-extrabold text-white">Comparação completa</h2>
            <p className="text-white/60 mt-2">O Pro é o sweet spot para a maioria das operações.</p>
          </motion.div>

          <motion.div
            variants={vSoft}
            className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-5 text-left text-white/50 font-medium">Recurso</th>
                    {["Gratuito", "Essencial", "Pro ✦", "Scale"].map((h, i) => (
                      <th
                        key={h}
                        className={[
                          "py-4 px-4 text-left font-semibold",
                          i === 2
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-brand2 to-brand"
                            : "text-white/70",
                        ].join(" ")}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={[
                        "border-t border-white/10 hover:bg-white/5 transition",
                        i % 2 !== 0 ? "bg-white/[0.02]" : "",
                      ].join(" ")}
                    >
                      <td className="py-3.5 px-5 text-white/50">{row.label}</td>
                      {row.cols.map((c, ci) => (
                        <td
                          key={ci}
                          className={[
                            "py-3.5 px-4",
                            c === "—" ? "text-white/25" : ci === 2 ? "text-white font-medium" : "text-white/70",
                          ].join(" ")}
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-white/40">Todos os planos incluem atualizações automáticas sem custo extra.</p>
              <Link to="/pro" className="text-xs text-white/60 hover:text-white transition">
                Ver Home PRO →
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Trust ────────────────────────────────────────────────────── */}
        <motion.section
          className="max-w-6xl mx-auto px-5 pb-12"
          variants={vContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionView}
        >
          <motion.div variants={vFadeUp} className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "🔓", title: "Sem fidelidade", desc: "Cancele quando quiser, sem multa e sem burocracia." },
              { icon: "⚡", title: "Setup em 2 min", desc: "Crie sua empresa, lance e já veja o painel funcionando." },
              { icon: "📦", title: "Seus dados são seus", desc: "Exporte tudo a qualquer momento em CSV." },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-extrabold text-white">{item.title}</div>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── CTA final ────────────────────────────────────────────────── */}
        <motion.section
          className="max-w-6xl mx-auto px-5 pb-20"
          variants={vContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionView}
        >
          <motion.div
            variants={vFadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center"
          >
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand2/20 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Comece agora, grátis
              </div>

              <h3 className="text-3xl font-extrabold text-white">
                Comece grátis e suba quando fizer sentido.
              </h3>
              <p className="text-white/60 mt-3 max-w-xl mx-auto leading-relaxed">
                Sem cartão, sem fidelidade. Você entra, testa e decide. O Pro desbloqueia tudo com um upgrade simples.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={appRegisterUrl()}
                  className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl bg-white text-[#06163a] font-extrabold hover:opacity-95 transition"
                >
                  Criar conta grátis
                </a>
                <Link
                  to="/"
                  className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                >
                  Voltar pra Home
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <MarketingFAQ />

        <div className="relative mt-2">
          <div className="absolute inset-0 -z-10 bg-[#050a18]" />
          <div
            className="pointer-events-none absolute inset-x-0 -top-10 h-10 -z-10"
            style={{ background: "linear-gradient(to bottom, rgba(5,10,24,0), rgba(5,10,24,1))" }}
          />
          <PanelStrip />
          <MarketingFooterSlim />
        </div>

      </main>
    </div>
  );
}

/* ─── Plan Card ─────────────────────────────────────────────────────────── */
function PlanCard({ plan }: { plan: Plan }) {
  const isFree = plan.priceMonthly === 0;
  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <motion.div
      variants={vSoft}
      className={[
        "relative rounded-2xl border overflow-hidden flex flex-col",
        plan.highlight
          ? "border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
          : "border-white/10",
        "bg-white/5 backdrop-blur-md",
        plan.highlight ? "lg:-translate-y-3" : "",
      ].join(" ")}
    >
      {plan.tag && (
        <div className="w-full bg-gradient-to-r from-brand2 to-brand text-[#06163a] font-extrabold text-xs py-2.5 text-center tracking-wide">
          {plan.tag}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xl font-extrabold text-white">{plan.title}</div>
        <div className="text-sm text-white/60 mt-1.5 leading-relaxed">{plan.subtitle}</div>

        <div className="mt-6 flex items-end gap-1.5">
          <div className="text-4xl font-extrabold text-white">
            {isFree ? "R$ 0" : `R$ ${fmt(plan.priceMonthly).replace(",00", "")}`}
          </div>
          <div className="text-sm text-white/50 pb-1">/mês</div>
        </div>
        {!isFree && (
          <div className="text-xs text-white/40 mt-1">
            R$ {fmt(plan.priceMonthly * 12)}/ano se pago anualmente
          </div>
        )}

        <div className="my-5 border-t border-white/10" />

        <div className="space-y-2.5 text-sm flex-1">
          {plan.features.map((f) => (
            <div key={f.text} className="flex items-center gap-2.5">
              <span
                className={[
                  "inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] shrink-0",
                  f.available
                    ? "bg-white/10 border border-white/10 text-white"
                    : "bg-white/5 border border-white/5 text-white/20",
                ].join(" ")}
              >
                {f.available ? "✓" : "—"}
              </span>
              <span className={f.available ? "text-white/80" : "text-white/30"}>{f.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <a
            href={plan.href}
            className={[
              "inline-flex w-full justify-center px-5 py-3 rounded-xl font-semibold transition text-sm",
              plan.highlight
                ? "bg-white text-[#06163a] hover:opacity-95"
                : "bg-white/10 border border-white/10 hover:bg-white/15 text-white",
            ].join(" ")}
          >
            {plan.cta}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
