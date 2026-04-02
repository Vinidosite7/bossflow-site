// PATH: src/pages/Pricing.tsx
import MarketingFAQ from "../components/MarketingFAQ";
import MarketingFooterSlim from "../components/MarketingFooterSlim";
import MarketingTopbar from "../components/MarketingTopbar";
import PanelStrip from "../components/PanelStrip";
import { Link } from "react-router-dom";
import { appRegisterUrl } from "../lib/links";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
type FeatureTagType = "novo" | "limite";

type Feature = {
  text: string;
  available: boolean;
  tag?: FeatureTagType;
};

type Plan = {
  key: string;
  title: string;
  subtitle: string;
  priceMonthly: number | null;
  highlight?: boolean;
  tag?: string;
  features: Feature[];
  cta: string;
  href: string;
  comingSoon?: boolean;
};

/* ─── Plans data ─────────────────────────────────────────────────────────── */
const plans: Plan[] = [
  {
    key: "basico",
    title: "Básico",
    subtitle: "Para quem está começando.",
    priceMonthly: 0,
    features: [
      { text: "1 empresa",                    available: true  },
      { text: "2 contas/caixas",              available: true  },
      { text: "Até 50 clientes",              available: true  },
      { text: "Até 20 tarefas ativas",        available: true  },
      { text: "Histórico: últimos 30 dias",   available: true,  tag: "limite" },
      { text: "Dashboard do mês",             available: true  },
      { text: "Fatura até R$20k/mês",         available: true,  tag: "limite" },
      { text: "Agendamento de contas",        available: false },
      { text: "Estagiário de IA",             available: false },
      { text: "Export CSV",                   available: false },
    ],
    cta: "Começar grátis",
    href: appRegisterUrl(),
  },
  {
    key: "starter",
    title: "Starter",
    subtitle: "Para quem já tem uma operação rodando.",
    priceMonthly: 39.90,
    features: [
      { text: "Até 3 empresas",               available: true  },
      { text: "5 contas/caixas",              available: true  },
      { text: "Clientes ilimitados",          available: true  },
      { text: "Tarefas ilimitadas",           available: true  },
      { text: "Histórico completo",           available: true  },
      { text: "Agendamento de contas",        available: true  },
      { text: "Compartilhar empresa",         available: true  },
      { text: "Estagiário de IA",             available: true,  tag: "novo" },
      { text: "Export básico",                available: true  },
      { text: "Relatórios mensais",           available: false },
    ],
    cta: "Assinar Starter",
    href: appRegisterUrl(),
  },
  {
    key: "pro",
    title: "Pro",
    subtitle: "Visão clara e decisão rápida.",
    priceMonthly: 69.90,
    highlight: true,
    tag: "Mais popular",
    features: [
      { text: "Empresas ilimitadas",          available: true },
      { text: "Contas ilimitadas",            available: true },
      { text: "Relatórios mensais",           available: true },
      { text: "Metas do mês",                available: true },
      { text: "Export CSV completo",          available: true },
      { text: "Histórico completo",          available: true },
      { text: "Estagiário de IA",            available: true },
      { text: "Notificações inteligentes",    available: true, tag: "novo" },
      { text: "Suporte prioritário",          available: true },
      { text: "Onboarding assistido",        available: true },
    ],
    cta: "Ativar BossFlow Pro",
    href: appRegisterUrl(),
  },
  {
    key: "scale",
    title: "Scale",
    subtitle: "Para quem já é monstro da escala.",
    priceMonthly: null,
    comingSoon: true,
    features: [
      { text: "Tudo do Pro",                  available: true },
      { text: "Onboarding dedicado",          available: true },
      { text: "Suporte VIP",                 available: true },
      { text: "Permissões avançadas",         available: true },
      { text: "Auditoria completa",          available: true },
      { text: "Integrações sob demanda",     available: true },
      { text: "SLA garantido",               available: true },
      { text: "Acesso antecipado",           available: true },
    ],
    cta: "Em breve",
    href: "#",
  },
];

/* ─── Compare rows ──────────────────────────────────────────────────────── */
const compareRows = [
  { label: "Empresas",            cols: ["1",          "Até 3",     "Ilimitadas",  "Ilimitadas"]  },
  { label: "Contas/Caixas",       cols: ["2",          "5",         "Ilimitadas",  "Ilimitadas"]  },
  { label: "Clientes",            cols: ["Até 50",     "Ilimitado", "Ilimitado",   "Ilimitado"]   },
  { label: "Tarefas ativas",      cols: ["Até 20",     "Ilimitado", "Ilimitado",   "Ilimitado"]   },
  { label: "Histórico",           cols: ["30 dias",    "Completo",  "Completo",    "Completo"]    },
  { label: "Fatura máx/mês",      cols: ["R$20k",      "Ilimitado", "Ilimitado",   "Ilimitado"]   },
  { label: "Agendamento",         cols: ["—",          "✓",         "✓",           "✓"]           },
  { label: "Compartilhar emp.",   cols: ["—",          "✓",         "✓",           "✓"]           },
  { label: "Estagiário de IA",    cols: ["—",          "✓",         "✓",           "✓"]           },
  { label: "Relatórios",          cols: ["—",          "—",         "Mensais",     "Auditoria"]   },
  { label: "Metas do mês",        cols: ["—",          "—",         "✓",           "✓"]           },
  { label: "Export CSV",          cols: ["—",          "Básico",    "Completo",    "Avançado"]    },
  { label: "Suporte",             cols: ["Padrão",     "Padrão",    "Prioritário", "VIP"]         },
  { label: "Onboarding",          cols: ["—",          "—",         "Assistido",   "Dedicado"]    },
  { label: "Auditoria completa",  cols: ["—",          "—",         "—",           "✓"]           },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Pricing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingTopbar active="precos" />

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#09090f] via-[#0d0d1a] to-[#09090f]" />
            <div className="absolute -top-32 -right-40 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute -top-48 -left-40 h-[380px] w-[380px] rounded-full bg-brand2/8 blur-3xl" />
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-brand/25 bg-brand/[0.08] text-xs text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 anim-pulse" />
              Planos simples · Sem fidelidade · Cancela quando quiser
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
              className="text-white/60 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
            >
              Comece de graça e suba de plano quando fizer sentido. Todos os planos têm a experiência premium do BossFlow.
            </motion.p>

            <motion.div
              variants={vFadeUp}
              className="mt-6 flex flex-wrap justify-center gap-2"
            >
              {["Sem fidelidade", "Cancela quando quiser", "Setup em 2 minutos", "Sem cartão no gratuito"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-[#141428] text-xs text-white/50">{t}</span>
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
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 items-stretch">
              {plans.map((p) => (
                <PlanCard key={p.key} plan={p} />
              ))}
            </div>
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
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand/60 mb-3">Comparativo</div>
            <h2 className="text-2xl font-extrabold text-white">Comparação completa</h2>
            <p className="text-white/60 mt-2">O Pro é o sweet spot para a maioria das operações.</p>
          </motion.div>

          <motion.div
            variants={vSoft}
            className="mt-6 rounded-2xl border border-white/[0.06] bg-[#0f0f1a] overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-5 text-left text-white/40 font-medium text-xs uppercase tracking-widest">Recurso</th>
                    {["Básico", "Starter", "Pro ✦", "Scale"].map((h, i) => (
                      <th
                        key={h}
                        className={[
                          "py-4 px-4 text-left font-semibold",
                          i === 2 ? "text-brand2" : "text-white/70",
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
                        "border-t border-white/[0.06] hover:bg-[#121220] transition",
                        i % 2 !== 0 ? "bg-[#0a0a12]" : "",
                      ].join(" ")}
                    >
                      <td className="py-3.5 px-5 text-white/50">{row.label}</td>
                      {row.cols.map((c, ci) => (
                        <td
                          key={ci}
                          className={[
                            "py-3.5 px-4",
                            c === "—"
                              ? "text-white/20"
                              : ci === 2
                                ? "text-brand2 font-medium"
                                : ci === 3
                                  ? "text-white/40"
                                  : "text-white/70",
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
              { icon: "🔓", title: "Sem fidelidade",     desc: "Cancele quando quiser, sem multa e sem burocracia."         },
              { icon: "⚡", title: "Setup em 2 min",     desc: "Crie sua empresa, lance e já veja o painel funcionando."    },
              { icon: "📦", title: "Seus dados são seus", desc: "Exporte tudo a qualquer momento em CSV."                   },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:bg-[#121220] transition"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-extrabold text-white">{item.title}</div>
                <p className="text-sm text-white/60 mt-2 leading-relaxed">{item.desc}</p>
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
            className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0f0f1a] p-10 text-center"
          >
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand2/20 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-brand/20 bg-brand/[0.07] text-xs text-brand2/90 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand2 anim-pulse" />
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
                  className="group relative overflow-hidden inline-flex justify-center items-center px-7 py-3.5 rounded-xl
                             bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0]
                             text-white font-extrabold
                             hover:opacity-95 transition active:scale-[0.98]
                             shadow-[0_0_28px_rgba(109,94,246,0.40)]"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] opacity-0
                                   bg-gradient-to-r from-transparent via-white/25 to-transparent
                                   group-hover:opacity-100 group-hover:left-[120%] transition-all duration-[1100ms]" />
                  <span className="relative">Criar conta grátis</span>
                </a>
                <Link
                  to="/"
                  className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl border border-white/10 bg-[#0f0f1a] text-white/80 font-semibold hover:bg-[#141428] hover:border-white/15 transition active:scale-[0.98]"
                >
                  Voltar pra Home
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <MarketingFAQ />

        <div className="relative mt-2">
          <div className="absolute inset-0 -z-10 bg-[#09090f]" />
          <div
            className="pointer-events-none absolute inset-x-0 -top-10 h-10 -z-10"
            style={{ background: "linear-gradient(to bottom, rgba(9,9,15,0), rgba(9,9,15,1))" }}
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

  /* ── Scale "Em breve" card ─────────────────────────────────────────── */
  if (plan.comingSoon) {
    return (
      <motion.div
        variants={vSoft}
        className="relative rounded-2xl border border-white/[0.06] bg-[#0f0f1a] overflow-hidden flex flex-col"
      >
        <div className="blur-[3px] pointer-events-none select-none opacity-40 p-6 flex flex-col gap-3">
          <div className="text-xl font-extrabold text-white">Scale</div>
          <div className="text-sm text-white/50">Para quem já é monstro da escala.</div>
          <div className="mt-2 flex items-end gap-1.5">
            <div className="text-4xl font-extrabold text-white">R$ 149</div>
            <div className="text-sm text-white/40 pb-1">/mês</div>
          </div>
          <div className="border-t border-white/10 my-2" />
          <div className="space-y-2.5">
            {plan.features.slice(0, 7).map((f) => (
              <div key={f.text} className="flex items-center gap-2.5 text-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 border border-white/10 text-[11px] text-white shrink-0">✓</span>
                <span className="text-white/70">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#09090f]/50 backdrop-blur-[1px]">
          <div className="h-14 w-14 rounded-2xl bg-white/[0.06] border border-white/[0.09] flex items-center justify-center">
            <svg className="h-6 w-6 text-white/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-white font-extrabold text-xl">Scale</div>
            <div className="text-white/40 text-sm mt-1">Em breve</div>
          </div>
          <div className="px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04] text-xs text-white/35">
            Em desenvolvimento
          </div>
        </div>
      </motion.div>
    );
  }

  /* ── Regular card ──────────────────────────────────────────────────── */
  const borderClass = plan.highlight
    ? "border-brand/30 shadow-[0_0_40px_rgba(109,94,246,0.12)]"
    : "border-white/[0.06]";

  const tagBg = "bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0]";
  const priceColor = plan.highlight ? "text-brand2" : "text-white";

  const ctaClass = plan.highlight
    ? "bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0] text-white hover:opacity-95 shadow-[0_0_20px_rgba(109,94,246,0.35)] active:scale-[0.98]"
    : "bg-[#141428] border border-white/[0.06] hover:bg-[#1a1a30] text-white/80 active:scale-[0.98]";

  const checkClass = plan.highlight
    ? "bg-brand/12 border border-brand/25 text-brand2"
    : "bg-white/10 border border-white/10 text-white";

  return (
    <motion.div
      variants={vSoft}
      className={[
        "relative rounded-2xl border overflow-hidden flex flex-col bg-[#0f0f1a]",
        borderClass,
      ].join(" ")}
    >
      {plan.tag && (
        <div className={`w-full ${tagBg} text-white font-extrabold text-xs py-2.5 text-center tracking-wide`}>
          {plan.tag}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xl font-extrabold text-white">{plan.title}</div>
        <div className="text-sm text-white/55 mt-1.5 leading-relaxed">{plan.subtitle}</div>

        <div className="mt-6 flex items-end gap-1.5">
          <div className={`text-4xl font-extrabold ${priceColor}`}>
            {isFree ? "R$ 0" : `R$ ${fmt(plan.priceMonthly!).replace(",00", "")}`}
          </div>
          <div className="text-sm text-white/45 pb-1">/mês</div>
        </div>
        {!isFree && plan.priceMonthly && (
          <div className="text-xs text-white/35 mt-1">
            R$ {fmt(plan.priceMonthly * 12)}/ano no anual
          </div>
        )}

        <div className="my-5 border-t border-white/[0.07]" />

        <div className="space-y-2.5 text-sm flex-1">
          {plan.features.map((f) => (
            <div key={f.text} className="flex items-center gap-2.5">
              <span
                className={[
                  "inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] shrink-0",
                  f.available
                    ? checkClass
                    : "bg-white/[0.04] border border-white/[0.05] text-white/20",
                ].join(" ")}
              >
                {f.available ? "✓" : "—"}
              </span>
              <span className={f.available ? "text-white/80" : "text-white/25 line-through decoration-white/10"}>
                {f.text}
              </span>
              {f.tag && <FeatureBadge tag={f.tag} />}
            </div>
          ))}
        </div>

        <div className="mt-7">
          <a
            href={plan.href}
            className={[
              "inline-flex w-full justify-center px-5 py-3 rounded-xl font-semibold transition text-sm",
              ctaClass,
            ].join(" ")}
          >
            {plan.cta}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Feature badge ──────────────────────────────────────────────────────── */
function FeatureBadge({ tag }: { tag: FeatureTagType }) {
  if (tag === "novo") {
    return (
      <span className="ml-auto shrink-0 px-1.5 py-0.5 rounded-md bg-brand/20 border border-brand/30 text-[9px] font-bold text-brand2 uppercase tracking-wide">
        novo
      </span>
    );
  }
  if (tag === "limite") {
    return (
      <span className="ml-auto shrink-0 px-1.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/25 text-[9px] font-bold text-amber-400 uppercase tracking-wide">
        limite
      </span>
    );
  }
  return null;
}
