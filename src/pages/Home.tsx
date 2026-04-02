// PATH: src/pages/Home.tsx
import MarketingTopbar from "../components/MarketingTopbar";
import MarketingFooterSlim from "../components/MarketingFooterSlim";
import PanelStrip from "../components/PanelStrip";

import { Link } from "react-router-dom";
import { appRegisterUrl } from "../lib/links";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const sectionView = { once: true, amount: 0.25 };

const steps = [
  { n: "01", t: "Crie sua empresa",  d: "Organize por negócio e pare de misturar caixa." },
  { n: "02", t: "Lance o básico",    d: "Entradas, saídas e transferências sem planilha." },
  { n: "03", t: "Feche o mês",       d: "Dashboard + relatórios pra decidir com clareza." },
];

const benefits = [
  { t: "Estagiário de IA",  d: "Analisa notas fiscais, cria lançamentos por texto e responde perguntas sobre seu financeiro.",  accent: "#c084fc", badge: "novo" },
  { t: "Multi-empresa",     d: "Separe negócios e operações sem misturar caixa.",       accent: "#6d5ef6" },
  { t: "Metas do mês",      d: "Objetivo + progresso direto no painel.",                accent: "#22c55e" },
  { t: "Relatórios",        d: "Fechamento mensal pronto pra decisão.",                 accent: "#6d5ef6" },
  { t: "Export CSV",        d: "Seus dados são seus. Exporta quando quiser.",           accent: "#22d3ee" },
  { t: "Histórico",         d: "Veja padrões e evolua mês após mês.",                  accent: "#6d5ef6" },
];

const vContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const vFadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const vSoft = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Step previews ────────────────────────────────────────────────────────────

function StepPreview01() {
  return (
    <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#0a0a12] p-3 pointer-events-none select-none">
      <div className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-2">Nova Empresa</div>
      <div className="space-y-1.5">
        <div className="h-7 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center px-2.5">
          <span className="text-[10px] text-white/35">VN Marketing</span>
          <span className="ml-auto h-3 w-px bg-[#6d5ef6] animate-pulse" />
        </div>
        <div className="h-7 rounded-lg bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0] flex items-center justify-center shadow-[0_0_12px_rgba(109,94,246,0.3)]">
          <span className="text-[10px] text-white font-bold">Criar empresa →</span>
        </div>
      </div>
    </div>
  );
}

function StepPreview02() {
  return (
    <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#0a0a12] p-3 pointer-events-none select-none">
      <div className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-2">Novo Lançamento</div>
      <div className="space-y-1.5">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-7 rounded-lg bg-[#22c55e]/15 border border-[#22c55e]/25 flex items-center justify-center">
            <span className="text-[9px] text-[#22c55e] font-bold">↑ Entrada</span>
          </div>
          <div className="h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
            <span className="text-[9px] text-white/35">↓ Saída</span>
          </div>
        </div>
        <div className="h-7 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center px-2.5">
          <span className="text-[10px] text-[#22c55e]/80 font-semibold">R$ 4.500,00</span>
        </div>
        <div className="flex items-center gap-1.5 text-[8px] text-white/25">
          <span className="px-1.5 py-0.5 rounded bg-white/[0.05]">Receita</span>
          <span className="px-1.5 py-0.5 rounded bg-white/[0.05]">Banco</span>
        </div>
      </div>
    </div>
  );
}

function StepPreview03() {
  const bars = [40, 65, 30, 80, 55, 45, 70, 85];
  return (
    <div className="mt-5 rounded-xl border border-white/[0.06] bg-[#0a0a12] p-3 pointer-events-none select-none">
      <div className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-2">Dashboard</div>
      <div className="grid grid-cols-3 gap-1 mb-1.5">
        {[
          { label: "Faturamento", val: "28,4k", color: "#22c55e" },
          { label: "Despesas",    val: "11,2k", color: "#ef4444" },
          { label: "Lucro",       val: "17,2k", color: "#22c55e" },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-lg bg-[#0f0f1a] border border-white/[0.05] p-1.5">
            <div className="text-[7px] text-white/30 uppercase tracking-widest leading-tight">{label}</div>
            <div className="text-[10px] font-extrabold mt-0.5" style={{ color }}>{val}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-[#0f0f1a] border border-white/[0.05] p-2">
        <div className="flex items-end gap-0.5 h-8">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i % 3 === 1 ? "#ef444455" : "#22c55e55" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.2 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.2 });
  const glowX = useTransform(smx, (v) => `${v}px`);
  const glowY = useTransform(smy, (v) => `${v}px`);
  const blob1Y = useTransform(scrollYProgress, [0, 0.22], [0, 70]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.22], [0, 95]);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="min-h-screen flex flex-col" ref={rootRef}>
      <MarketingTopbar active="home" />

      <main className="flex-1">
        <div className="relative overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#09090f] via-[#0d0d1a] to-[#09090f]" />
            <motion.div style={{ y: blob1Y }} className="absolute -top-40 -right-48 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
            <motion.div style={{ y: blob2Y }} className="absolute -top-56 -left-48 h-[380px] w-[380px] rounded-full bg-brand2/8 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage: "radial-gradient(55% 50% at 50% 20%, black 55%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(55% 50% at 50% 20%, black 55%, transparent 100%)",
              }}
            />
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(220px 220px at var(--x) var(--y), rgba(109,94,246,0.07), transparent 60%)",
                // @ts-expect-error — CSS custom properties não tipadas no React.CSSProperties
                "--x": glowX,
                // @ts-expect-error — CSS custom properties não tipadas no React.CSSProperties
                "--y": glowY,
              }}
            />
          </div>

          {/* HERO */}
          <motion.section className="max-w-6xl mx-auto px-5 pt-16 pb-10" variants={vContainer} initial="hidden" animate="show">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div variants={vFadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-brand/25 bg-brand/[0.08] text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 anim-pulse" />
                  +2.300 empresas organizadas &nbsp;·&nbsp; Novo: Estagiário de IA 🤖
                </motion.div>

                <motion.h1 variants={vFadeUp} className="text-4xl md:text-[3.4rem] font-extrabold tracking-tight text-white mt-5 leading-[1.05]">
                  Feche o mês sabendo onde está{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand2 to-brand">cada real.</span>
                </motion.h1>

                <motion.p variants={vFadeUp} className="text-white/60 text-lg mt-5 leading-relaxed max-w-lg">
                  BossFlow transforma entradas, saídas e metas num painel que você entende em segundos. Sem planilha, sem chute no fechamento.
                </motion.p>

                <motion.div variants={vFadeUp} className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a
                    href={appRegisterUrl()}
                    className="group relative overflow-hidden inline-flex justify-center items-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0] text-white font-extrabold hover:opacity-95 transition active:scale-[0.98] shadow-[0_0_28px_rgba(109,94,246,0.40)]"
                  >
                    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] opacity-0 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:opacity-100 group-hover:left-[120%] transition-all duration-[1100ms]" />
                    <span className="relative">Começar de graça</span>
                  </a>
                  <Link to="/precos" className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl border border-white/10 bg-[#0f0f1a] text-white/80 font-semibold hover:bg-[#141428] hover:border-white/15 transition active:scale-[0.98]">
                    Ver planos →
                  </Link>
                </motion.div>

                <motion.div variants={vFadeUp} className="mt-5 flex items-center gap-1.5 flex-wrap text-sm text-white/40">
                  <span>Sem cartão</span><span className="text-white/15">·</span>
                  <span>Setup em 2 min</span><span className="text-white/15">·</span>
                  <span>Cancela quando quiser</span>
                </motion.div>
              </div>

              <AppMockPreview />
            </div>
          </motion.section>

          {/* BENEFÍCIOS */}
          <motion.section className="max-w-6xl mx-auto px-5 pb-10" variants={vContainer} initial="hidden" whileInView="show" viewport={sectionView}>
            <motion.div variants={vFadeUp} className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand2/60 mb-3">Recursos</div>
                <h2 className="text-2xl font-extrabold text-white">O que você controla</h2>
                <p className="text-white/50 mt-2">Tudo que importa no mesmo lugar, sem ruído.</p>
              </div>
              <Link to="/precos" className="text-sm px-4 py-2 rounded-xl border border-white/10 bg-[#0f0f1a] text-white/70 hover:bg-[#141428] hover:text-white transition">Ver planos →</Link>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
              {benefits.map((b) => (
                <motion.div key={b.t} variants={vSoft}
                  className={`rounded-2xl border p-6 hover:bg-[#121220] transition ${b.badge ? "border-purple-500/20 bg-[#0f0f1a] shadow-[0_0_32px_rgba(192,132,252,0.06)]" : "border-white/[0.06] bg-[#0f0f1a]"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: b.accent, boxShadow: `0 0 6px ${b.accent}80` }} />
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{b.t}</div>
                    {b.badge && (
                      <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/25 text-purple-300 uppercase tracking-wide">
                        {b.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{b.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* COMO FUNCIONA */}
          <motion.section className="max-w-6xl mx-auto px-5 py-12" variants={vContainer} initial="hidden" whileInView="show" viewport={sectionView}>
            <motion.div variants={vFadeUp} className="text-center max-w-2xl mx-auto">
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand/60 mb-3">Processo</div>
              <h2 className="text-2xl font-extrabold text-white">Como funciona</h2>
              <p className="text-white/50 mt-2">3 passos. Você já tá no controle.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                { step: steps[0], Preview: StepPreview01 },
                { step: steps[1], Preview: StepPreview02 },
                { step: steps[2], Preview: StepPreview03 },
              ].map(({ step, Preview }) => (
                <motion.div key={step.n} variants={vSoft} className="rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:bg-[#121220] hover:border-white/10 transition">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 font-mono">{step.n}</div>
                  <div className="font-extrabold mt-3 text-white">{step.t}</div>
                  <p className="text-sm text-white/55 mt-2 leading-relaxed">{step.d}</p>
                  <Preview />
                </motion.div>
              ))}
            </div>
            <motion.div variants={vFadeUp} className="mt-10 text-center">
              <Link to="/precos" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 bg-[#0f0f1a] text-white/80 font-semibold hover:bg-[#141428] hover:text-white transition">Ver planos →</Link>
            </motion.div>
          </motion.section>

          {/* PAINEL FINANCEIRO */}
          <motion.section className="max-w-6xl mx-auto px-5 pb-12" variants={vContainer} initial="hidden" whileInView="show" viewport={sectionView}>
            <motion.div variants={vFadeUp} className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0f0f1a]">
              <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-brand/8 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand2/6 blur-3xl pointer-events-none" />
              <div className="relative p-7 md:p-9">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] text-xs text-emerald-400/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 anim-pulse" />Operação em dia
                    </div>
                    <div className="mt-4 flex items-baseline gap-3">
                      <h2 className="text-white font-extrabold text-2xl md:text-3xl">Feito para operar com clareza</h2>
                      <span className="hidden md:inline text-white/30 text-sm">sem planilha, sem confusão.</span>
                    </div>
                    <p className="text-white/50 mt-2 max-w-2xl leading-relaxed">Um painel que mostra o que importa: caixa, resultado e direção. Menos ruído, mais decisão.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-[#141428]">Setup ~ 2 min</span>
                    <span className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-[#141428]">Sem fidelidade</span>
                  </div>
                </div>
                <div className="mt-7 border-t border-white/[0.06]" />
                <div className="grid sm:grid-cols-3 gap-4 mt-7">
                  <FinancialCard label="FATURAMENTO"   value="R$ 28,4k" delta="+12% vs mês anterior" level={0.72} positive />
                  <FinancialCard label="DESPESAS"      value="R$ 11,2k" delta="-3% vs mês anterior"  level={0.38} positive={false} />
                  <FinancialCard label="LUCRO LÍQUIDO" value="R$ 17,2k" delta="Margem: 60%"           level={0.84} positive badge="Margem: 60%" />
                </div>
                <div className="mt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/35">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    Dados ilustrativos — o foco aqui é a experiência e o fluxo do painel.
                  </div>
                  <Link to="/precos" className="hover:text-white/70 transition">Ver como o Pro destrava tudo →</Link>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ESTAGIÁRIO IA */}
          <motion.section className="max-w-6xl mx-auto px-5 pb-6" variants={vContainer} initial="hidden" whileInView="show" viewport={sectionView}>
            <motion.div variants={vFadeUp} className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0f0f1a]">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-purple-500/12 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
              <div className="relative p-7 md:p-9">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/25 bg-purple-500/[0.08] text-xs text-purple-300 mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 anim-pulse" />
                      Starter+ · Inteligência artificial
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      Seu Estagiário de IA<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand2">que entende seu negócio.</span>
                    </h2>
                    <p className="text-white/55 mt-3 leading-relaxed max-w-lg">
                      Manda foto de nota fiscal, ele cria o lançamento. Digita "gastei 150 no mercado", ele registra. Pergunta "quanto eu lucrei esse mês?" — ele responde com os seus dados.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Análise de notas fiscais", "Lançamento por texto", "Perguntas financeiras", "Criação de tarefas"].map(t => (
                        <span key={t} className="px-3 py-1.5 rounded-xl border border-purple-500/15 bg-purple-500/[0.06] text-xs text-purple-300/80">{t}</span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a href={`${(typeof window !== 'undefined' ? window.location.origin : 'https://app.bossflow.pro')}/register`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-brand text-white font-semibold text-sm hover:opacity-95 transition active:scale-[0.98] shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                        Testar grátis →
                      </a>
                    </div>
                  </div>

                  {/* Chat mock */}
                  <div className="w-full md:w-72 shrink-0 rounded-2xl border border-white/[0.06] bg-[#09090f] p-4 pointer-events-none select-none">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                      <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/25 flex items-center justify-center text-sm">🤖</div>
                      <span className="text-xs font-semibold text-white/70">Estagiário IA</span>
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="space-y-3">
                      {/* User msg */}
                      <div className="flex justify-end">
                        <div className="bg-brand/20 border border-brand/25 rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] text-white/80 max-w-[80%]">
                          quanto lucrei esse mês?
                        </div>
                      </div>
                      {/* AI msg */}
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-lg bg-purple-500/15 flex items-center justify-center text-[10px] shrink-0 mt-0.5">🤖</div>
                        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-white/70 flex-1">
                          Você faturou <span className="text-emerald-400 font-bold">R$28,4k</span> e teve <span className="text-red-400 font-bold">R$11,2k</span> em despesas. Lucro líquido de <span className="text-emerald-400 font-bold">R$17,2k</span> — margem de 60%. 🎯
                        </div>
                      </div>
                      {/* User msg 2 */}
                      <div className="flex justify-end">
                        <div className="bg-brand/20 border border-brand/25 rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] text-white/80 max-w-[80%]">
                          gastei 85 no mercado hoje
                        </div>
                      </div>
                      {/* AI msg 2 */}
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-lg bg-purple-500/15 flex items-center justify-center text-[10px] shrink-0 mt-0.5">🤖</div>
                        <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-white/70 flex-1">
                          Registrei! Despesa de <span className="text-red-400 font-bold">R$85,00</span> — categoria Alimentação. Confirma? ✓
                        </div>
                      </div>
                    </div>
                    {/* Input mock */}
                    <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.06] bg-white/[0.03]">
                      <span className="text-[11px] text-white/25 flex-1">Pergunte algo ou mande uma nota...</span>
                      <div className="w-5 h-5 rounded-lg bg-brand/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-brand2">
                          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <div className="relative mt-2">
            <div className="absolute inset-0 -z-10 bg-[#09090f]" />
            <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 -z-10" style={{ background: "linear-gradient(to bottom, rgba(9,9,15,0), rgba(9,9,15,1))" }} />
            <PanelStrip />
            <MarketingFooterSlim />
          </div>
        </div>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   AppMockPreview — fiel ao dashboard real
   Topbar com logo real · Sidebar icon-only · Cards + Chart
──────────────────────────────────────────────────────────────────────────── */
function AppMockPreview() {
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const sX = useSpring(rX, { stiffness: 140, damping: 18, mass: 0.2 });
  const sY = useSpring(rY, { stiffness: 140, damping: 18, mass: 0.2 });
  const rotateX = useTransform(sY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sX, [-0.5, 0.5], [-9, 9]);
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rX.set((e.clientX - r.left) / r.width - 0.5);
    rY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { rX.set(0); rY.set(0); };

  const chartBars = [38, 62, 28, 75, 52, 43, 68, 82, 48, 88, 58, 72, 92, 60];

  // Sidebar icon paths
  const navIcons = [
    { d: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z", active: true },
    { d: "M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" },
    { d: "M20 12V22H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" },
    { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
    { d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" },
    { d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" },
    { d: "M12 20V10M18 20V4M6 20v-6" },
    { d: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" },
  ];

  return (
    <motion.div variants={vFadeUp}>
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/20 to-[#22c55e]/10 blur-3xl opacity-60" />
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand/8 to-transparent blur-lg" />

        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08]"
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col bg-[#09090f] select-none" style={{ height: 440 }}>

            {/* ── Topbar — igual ao real ─────────────────────────────── */}
            <div className="h-9 shrink-0 bg-[#070710] border-b border-white/[0.06] flex items-center px-3 gap-2">
              {/* Logo real */}
              <img
                src="/brand/bossflow-logo.png"
                alt="BossFlow"
                className="h-[14px] w-auto shrink-0"
                draggable={false}
              />

              {/* Empresa switcher */}
              <div className="ml-1.5 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.05]">
                <div className="h-3.5 w-3.5 rounded bg-[#6d5ef6]/20 border border-[#6d5ef6]/15 flex items-center justify-center shrink-0">
                  <span className="text-[5px] text-[#a78bfa] font-black leading-none">VN</span>
                </div>
                <span className="text-[9.5px] text-white/60 font-semibold leading-none">Vinicius MKT</span>
                <span className="text-white/20 text-[8px] leading-none">▾</span>
              </div>

              <div className="flex-1" />

              {/* Bell */}
              <div className="flex items-center justify-center w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white/22">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                </svg>
              </div>

              {/* Avatar + name */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#6d5ef6]/45 border border-[#6d5ef6]/25 flex items-center justify-center shrink-0">
                  <span className="text-[6px] text-white font-bold leading-none">V</span>
                </div>
                <span className="text-[9.5px] text-white/40 leading-none">Vinicius</span>
                <span className="text-white/15 text-[8px] leading-none">▾</span>
              </div>
            </div>

            {/* ── Body ────────────────────────────────────────────────── */}
            <div className="flex flex-1 min-h-0">

              {/* Sidebar icon-only */}
              <div className="w-[42px] shrink-0 bg-[#070710] border-r border-white/[0.05] flex flex-col items-center py-2 gap-0.5">
                {navIcons.map((icon, i) => (
                  <div key={i} className={`flex items-center justify-center w-7 h-7 rounded-lg ${icon.active ? "bg-white/[0.08]" : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                      className={`w-[11px] h-[11px] ${icon.active ? "text-white/70" : "text-white/18"}`}>
                      <path d={icon.d} />
                    </svg>
                  </div>
                ))}

                {/* Bottom */}
                <div className="mt-auto flex flex-col items-center gap-1 pb-1">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[11px] h-[11px] text-white/15">
                      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#6d5ef6]/40 border border-[#6d5ef6]/20 flex items-center justify-center">
                    <span className="text-[5.5px] text-white font-bold leading-none">VN</span>
                  </div>
                </div>
              </div>

              {/* Main */}
              <div className="flex-1 flex flex-col overflow-hidden min-w-0 bg-[#09090f]">

                {/* Dashboard title row */}
                <div className="px-4 pt-3 pb-2 flex items-start justify-between gap-2 shrink-0">
                  <div>
                    <div className="text-[14px] font-bold text-white leading-tight">Dashboard</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[8.5px] text-white/35">Vinicius MKT · Março De 2026</span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0] shadow-[0_0_12px_rgba(109,94,246,0.3)] shrink-0">
                    <span className="text-[9px] text-white font-bold whitespace-nowrap">+ Novo lançamento</span>
                  </div>
                </div>

                {/* Status */}
                <div className="px-4 pb-2 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.07] text-[8px] text-emerald-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Tudo em dia — sem alertas no momento
                  </div>
                </div>

                {/* Stat cards */}
                <div className="px-4 grid grid-cols-3 gap-2 shrink-0">
                  {[
                    { label: "FATURAMENTO",   value: "R$ 28,4k", color: "#22c55e", bg: "rgba(34,197,94,0.10)",  bdr: "rgba(34,197,94,0.18)",  icon: "↗", sub: null },
                    { label: "DESPESAS",      value: "R$ 11,2k", color: "#ef4444", bg: "rgba(239,68,68,0.10)",  bdr: "rgba(239,68,68,0.18)",  icon: "↘", sub: null },
                    { label: "LUCRO LÍQUIDO", value: "R$ 17,2k", color: "#22c55e", bg: "rgba(34,197,94,0.10)",  bdr: "rgba(34,197,94,0.18)",  icon: "↗", sub: "Margem: 60%" },
                  ].map(({ label, value, color, bg, bdr, icon, sub }) => (
                    <div key={label} className="rounded-xl bg-[#0f0f1a] border border-white/[0.05] p-2.5 relative overflow-hidden">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <div className="text-[6.5px] text-white/30 uppercase tracking-widest font-bold leading-tight pr-1">{label}</div>
                        <div className="h-5 w-5 rounded-lg flex items-center justify-center text-[10px] shrink-0" style={{ backgroundColor: bg, border: `1px solid ${bdr}`, color }}>
                          {icon}
                        </div>
                      </div>
                      <div className="text-[14px] font-extrabold leading-none" style={{ color }}>{value}</div>
                      {sub && <div className="text-[6.5px] text-white/25 mt-0.5">{sub}</div>}
                    </div>
                  ))}
                </div>

                {/* Chart + Performance */}
                <div className="px-4 pt-2 pb-3 grid grid-cols-5 gap-2 flex-1 min-h-0">
                  <div className="col-span-3 rounded-xl bg-[#0f0f1a] border border-white/[0.05] p-3 flex flex-col min-h-0">
                    <div className="flex items-start justify-between mb-1.5 shrink-0">
                      <div>
                        <div className="text-[9px] font-bold text-white">Fluxo de caixa</div>
                        <div className="text-[7px] text-white/30">Últimos 14 dias</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5 text-[7px] text-[#22c55e]"><span className="h-1 w-1 rounded-full bg-[#22c55e]" />Entrada</span>
                        <span className="flex items-center gap-0.5 text-[7px] text-[#ef4444]"><span className="h-1 w-1 rounded-full bg-[#ef4444]" />Saída</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-end gap-0.5 min-h-0">
                      {chartBars.map((h, i) => (
                        <div key={i} className="flex-1 h-full flex flex-col justify-end">
                          <div className="w-full rounded-sm" style={{ height: `${h}%`, backgroundColor: i % 3 === 1 ? "#ef444455" : "#22c55e55" }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-2 rounded-xl bg-[#0f0f1a] border border-white/[0.05] p-3 flex flex-col">
                    <div className="text-[9px] font-bold text-white">Performance</div>
                    <div className="text-[7px] text-white/30 mb-1.5">vs mês anterior</div>
                    <div className="flex-1">
                      {[
                        { label: "Receita",  val: "28.4k", color: "#22c55e" },
                        { label: "Despesas", val: "11.2k", color: "#ef4444" },
                        { label: "Clientes", val: "47",    color: "#a3a3a3" },
                        { label: "Vendas",   val: "83",    color: "#a3a3a3" },
                      ].map(({ label, val, color }) => (
                        <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                          <span className="text-[7.5px] text-white/45">{label}</span>
                          <span className="text-[7.5px] font-bold" style={{ color }}>{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-1.5 border-t border-white/[0.04]">
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        <span className="text-[7px] text-white/25">Margem líquida: 60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/[0.06]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── FinancialCard ──────────────────────────────────────────────────────── */
function FinancialCard({ label, value, delta, level, positive, badge }: {
  label: string; value: string; delta: string; level: number; positive: boolean; badge?: string;
}) {
  const color   = positive ? "#22c55e" : "#ef4444";
  const iconBg  = positive ? "rgba(34,197,94,0.09)"  : "rgba(239,68,68,0.09)";
  const iconBor = positive ? "rgba(34,197,94,0.18)"  : "rgba(239,68,68,0.18)";

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:bg-[#121220] transition relative overflow-hidden">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{label}</div>
        <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0 text-sm" style={{ backgroundColor: iconBg, border: `1px solid ${iconBor}`, color }}>
          {positive ? "↗" : "↘"}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-extrabold" style={{ color }}>{value}</div>
      <div className="text-xs text-white/35 mt-1.5">{delta}</div>
      <div className="mt-5">
        <div className="h-1.5 rounded-full bg-white/[0.07] overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${Math.round(level * 100)}%`, backgroundColor: color, boxShadow: `0 0 8px ${color}60`, transition: "width 0.7s ease" }} />
        </div>
        {badge && (
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/40">
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: color }} />{badge}
          </div>
        )}
      </div>
    </div>
  );
}
