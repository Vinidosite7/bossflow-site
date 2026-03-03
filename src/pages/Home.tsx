// PATH: src/pages/Home.tsx
import MarketingTopbar from "../components/MarketingTopbar";
import MarketingFooterSlim from "../components/MarketingFooterSlim";
import PanelStrip from "../components/PanelStrip";

import { Link } from "react-router-dom";
import { appRegisterUrl } from "../lib/links";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const sectionView = { once: true, amount: 0.25 };

const chips = ["Agências", "E-commerce", "Prestadores", "Restaurantes", "Autônomos", "Lojas"];

const steps = [
  { n: "01", t: "Crie sua empresa", d: "Organize por negócio e pare de misturar caixa." },
  { n: "02", t: "Lance o básico", d: "Entradas, saídas e transferências sem planilha." },
  { n: "03", t: "Feche o mês", d: "Dashboard + relatórios pra decidir com clareza." },
];

const benefits = [
  { t: "Multi-empresa", d: "Separe negócios e operações sem misturar caixa." },
  { t: "Metas do mês", d: "Objetivo + progresso direto no painel." },
  { t: "Relatórios", d: "Fechamento mensal pronto pra decisão." },
  { t: "Export CSV", d: "Seus dados são seus. Exporta quando quiser." },
  { t: "Categorias", d: "Entenda pra onde vai cada real." },
  { t: "Histórico", d: "Veja padrões e evolua mês após mês." },
];

const stats = [
  { k: "+2.300", v: "empresas organizadas" },
  { k: "+180k", v: "lançamentos/mês" },
  { k: "3 min", v: "setup médio" },
];

/** Motion presets (sem importar `Variants`) */
const vContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const vFadeUp = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const vSoft = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.2 });

  // Mouse glow background
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.2 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.2 });
  const glowX = useTransform(smx, (v) => `${v}px`);
  const glowY = useTransform(smy, (v) => `${v}px`);

  // Parallax blobs (subtil)
  const blob1Y = useTransform(scrollYProgress, [0, 0.22], [0, 70]);
  const blob2Y = useTransform(scrollYProgress, [0, 0.22], [0, 95]);
  const blob3Y = useTransform(scrollYProgress, [0, 0.22], [0, -40]);

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
      {/* Progress bar premium */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand2 to-brand"
        style={{ scaleX: progress }}
      />

      <MarketingTopbar active="home" ctaLabel="Criar conta grátis" />

      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* BG premium */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-[#06163a] to-[#050a18]" />

            {/* blobs com parallax */}
            <motion.div
              style={{ y: blob1Y }}
              className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full bg-brand/18 blur-3xl"
            />
            <motion.div
              style={{ y: blob2Y }}
              className="absolute -top-48 -left-40 h-[520px] w-[520px] rounded-full bg-brand2/16 blur-3xl"
            />
            <motion.div
              style={{ y: blob3Y }}
              className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl"
            />

            {/* grid texture */}
            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage: "radial-gradient(60% 55% at 50% 25%, black 60%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(60% 55% at 50% 25%, black 60%, transparent 100%)",
              }}
            />

            {/* mouse glow */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(240px 240px at var(--x) var(--y), rgba(255,255,255,0.08), transparent 60%)",
                // @ts-ignore
                "--x": glowX,
                // @ts-ignore
                "--y": glowY,
              }}
            />

            {/* vignette */}
            <div
              className="absolute inset-0 opacity-[0.55]"
              style={{
                background:
                  "radial-gradient(70% 55% at 50% 20%, transparent 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
              }}
            />
          </div>

          {/* HERO */}
          <motion.section
            className="max-w-6xl mx-auto px-5 pt-16 pb-10"
            variants={vContainer}
            initial="hidden"
            animate="show"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div
                  variants={vFadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70"
                >
                  <span className="h-2 w-2 rounded-full bg-brand2" />
                  Painel do dono • Multi-empresa • Relatórios
                </motion.div>

                <motion.h1
                  variants={vFadeUp}
                  className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-4 leading-[1.02]"
                >
                  Pare de{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand2 to-brand">
                    adivinhar
                  </span>{" "}
                  o caixa.
                </motion.h1>

                <motion.p
                  variants={vFadeUp}
                  className="text-white/70 text-lg mt-4 leading-relaxed max-w-xl"
                >
                  BossFlow é o financeiro com cara de painel: você olha e entende. Entradas, saídas, metas e relatórios —
                  feito pra quem empreende.
                </motion.p>

                <motion.div variants={vFadeUp} className="flex flex-col sm:flex-row gap-3 mt-7">
                  <a
                    href={appRegisterUrl()}
                    className="inline-flex justify-center px-6 py-3 rounded-xl bg-white text-[#06163a] font-semibold hover:opacity-95 transition"
                  >
                    Testar gratuitamente
                  </a>
                  <Link
                    to="/precos"
                    className="inline-flex justify-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                  >
                    Ver preços
                  </Link>
                </motion.div>

                <motion.div variants={vFadeUp} className="flex flex-wrap gap-2 mt-6 text-sm text-white/70">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">✅ Sem cartão</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">✅ Setup 2 min</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">✅ Cancelar quando quiser</span>
                </motion.div>

                <motion.div variants={vFadeUp} className="mt-8">
                  <div className="text-xs text-white/60 mb-2">Feito pra:</div>
                  <div className="flex flex-wrap gap-2">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <PreviewCard />
            </div>
          </motion.section>

          {/* BENEFÍCIOS */}
          <motion.section
            className="max-w-6xl mx-auto px-5 pb-10"
            variants={vContainer}
            initial="hidden"
            whileInView="show"
            viewport={sectionView}
          >
            <motion.div variants={vFadeUp} className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl font-extrabold text-white">O que você ganha</h2>
                <p className="text-white/60 mt-2">Tudo que importa, sem bagunça.</p>
              </div>
              <Link
                to="/precos"
                className="text-sm px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              >
                Ver planos →
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
              {benefits.map((b) => (
                <motion.div
                  key={b.t}
                  variants={vSoft}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition"
                >
                  <div className="text-white font-extrabold">{b.t}</div>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">{b.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* COMO FUNCIONA */}
          <motion.section
            className="max-w-6xl mx-auto px-5 py-12"
            variants={vContainer}
            initial="hidden"
            whileInView="show"
            viewport={sectionView}
          >
            <motion.div variants={vFadeUp} className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-extrabold text-white">Como funciona</h2>
              <p className="text-white/60 mt-2">3 passos e você já tá no controle.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {steps.map((s) => (
                <motion.div
                  key={s.n}
                  variants={vSoft}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition"
                >
                  <div className="text-xs text-white/60">{s.n}</div>
                  <div className="font-extrabold mt-1 text-white">{s.t}</div>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={vFadeUp} className="mt-10 text-center">
              <Link
                to="/precos"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
              >
                Ver planos →
              </Link>
            </motion.div>
          </motion.section>

          {/* PROVA NUMÉRICA (refinada) */}
<motion.section
  className="max-w-6xl mx-auto px-5 pb-12"
  variants={vContainer}
  initial="hidden"
  whileInView="show"
  viewport={sectionView}
>
  <motion.div
    variants={vFadeUp}
    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
  >
    {/* glow sutil */}
    <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand/12 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-brand2/12 blur-3xl" />

    {/* textura leve */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "5px 5px",
        maskImage: "radial-gradient(60% 70% at 50% 40%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(60% 70% at 50% 40%, black 55%, transparent 100%)",
      }}
    />

    <div className="relative p-7 md:p-9">
      {/* header estilo painel */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Operação em dia
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <h2 className="text-white font-extrabold text-2xl md:text-3xl">
              Feito para operar com clareza
            </h2>
            <span className="hidden md:inline text-white/45 text-sm">
              sem planilha, sem confusão.
            </span>
          </div>

          <p className="text-white/60 mt-2 max-w-2xl leading-relaxed">
            Um painel que mostra o que importa: caixa, resultado e direção. Menos ruído, mais decisão.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/55">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            Setup ~ 2 min
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
            Sem fidelidade
          </span>
        </div>
      </div>

      <div className="mt-7 border-t border-white/10" />

      {/* cards de métricas estilo dashboard */}
      <div className="grid sm:grid-cols-3 gap-4 mt-7">
        <StatCard
          k="+2.300"
          v="empresas organizadas"
          hint="multi-empresa no Pro"
          level={0.72}
        />
        <StatCard
          k="+180k"
          v="lançamentos/mês"
          hint="entrada • saída • transfer"
          level={0.58}
        />
        <StatCard
          k="3 min"
          v="setup médio"
          hint="começa em minutos"
          level={0.84}
          accent="brand2"
        />
      </div>

      {/* micro linha de confiança */}
      <div className="mt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          Dados ilustrativos — o foco aqui é a experiência e o fluxo do painel.
        </div>
        <Link
          to="/precos"
          className="hover:text-white transition text-white/60"
        >
          Ver como o Pro destrava tudo →
        </Link>
      </div>
    </div>
  </motion.div>
</motion.section>

          {/* MINI SESSÕES (completa sem ficar LP) */}
          <motion.section
            className="max-w-6xl mx-auto px-5 pb-6"
            variants={vContainer}
            initial="hidden"
            whileInView="show"
            viewport={sectionView}
          >
            <motion.div variants={vFadeUp} className="grid lg:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7">
                <div className="text-white font-extrabold text-lg">Exportar & compartilhar</div>
                <p className="text-white/70 mt-2 leading-relaxed">
                  Export CSV, feche o mês e envie para contador ou sócio sem dor de cabeça.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/70">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">CSV</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Relatórios</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Histórico</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7">
                <div className="text-white font-extrabold text-lg">Multi-empresa (Pro)</div>
                <p className="text-white/70 mt-2 leading-relaxed">
                  Troque de empresa em 1 clique e veja métricas por operação — padrão de painel profissional.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/70">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Dashboards</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Metas</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Relatórios</span>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <div className="relative mt-2">
  {/* base escura pra “encostar” e matar o vazamento do BG */}
  <div className="absolute inset-0 -z-10 bg-[#050a18]" />

  {/* fade de transição do conteúdo pro rodapé */}
  <div
    className="pointer-events-none absolute inset-x-0 -top-10 h-10 -z-10"
    style={{
      background:
        "linear-gradient(to bottom, rgba(5,10,24,0), rgba(5,10,24,1))",
    }}
  />

  <PanelStrip />
  <MarketingFooterSlim />
</div>

        </div>
      </main>
    </div>
  );
}

/* ---------------- Preview Card (3D + shine) ---------------- */

function PreviewCard() {
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const sX = useSpring(rX, { stiffness: 140, damping: 18, mass: 0.2 });
  const sY = useSpring(rY, { stiffness: 140, damping: 18, mass: 0.2 });

  const rotateX = useTransform(sY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(sX, [-0.5, 0.5], [-10, 10]);

  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rX.set(px);
    rY.set(py);
  };

  const onLeave = () => {
    setHover(false);
    rX.set(0);
    rY.set(0);
  };

  const shine = useMemo(
    () => ({
      initial: { x: "-120%", opacity: 0 },
      hover: {
        x: "120%",
        opacity: 1,
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
      },
    }),
    []
  );

  return (
    <motion.div variants={vFadeUp}>
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand2/18 to-brand/18 blur-2xl" />

        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={onLeave}
          style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.18 }}
        >
          <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl opacity-60" />
          <div className="absolute -top-28 left-0 right-0 h-44 bg-white/10 blur-2xl opacity-50" />

          <motion.div
            variants={shine}
            initial="initial"
            animate={hover ? "hover" : "initial"}
            className="pointer-events-none absolute top-0 left-0 h-full w-1/3 skew-x-[-20deg]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
            }}
          />

          <div className="px-5 py-4 flex items-center justify-between border-b border-white/10">
            <div className="font-semibold text-white">Preview do painel</div>
            <div className="text-xs text-white/60">BossFlow</div>
          </div>

          <div className="p-5 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <Kpi label="Faturamento" value="R$ 192,83" />
              <Kpi label="Despesas" value="R$ 0,00" />
              <Kpi label="Lucro" value="R$ 192,83" positive />
            </div>

            <MetricBar />

            <div className="grid grid-cols-2 gap-3">
              <MiniStat title="Fluxo 30 dias" value="Entradas × Saídas" />
              <MiniStat title="Despesas por categoria" value="Visão de %" />
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(5,10,24,0.85))",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------------- mini components ---------------- */

function Kpi({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className={["mt-1 font-extrabold", positive ? "text-emerald-300" : "text-white"].join(" ")}>
        {value}
      </div>
    </div>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/60">{title}</div>
      <div className="font-semibold mt-1 text-white">{value}</div>
    </div>
  );
}

function MetricBar() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold text-white">Lucro do mês (parcial)</div>
        <span className="text-xs px-2 py-1 rounded-lg border border-white/10 bg-white/5 text-white/60">
          Últimos 30 dias
        </span>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-extrabold text-rose-300">-R$ 2.807,17</div>
        <div className="inline-flex items-center gap-2 mt-2 text-xs px-2 py-1 rounded-lg border border-rose-300/20 bg-rose-400/10 text-rose-200">
          ↘ -100% vs. último mês
        </div>
        <p className="text-xs text-white/60 mt-2 leading-relaxed">
          Dica: mantenha despesas fixas cadastradas e revise as contas da semana.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <MetricKpi label="Faturamento" value="R$ 192,83" />
        <MetricKpi label="Despesas" value="R$ 0,00" />
        <MetricKpi label="Lucro" value="R$ 192,83" positive />
        <MetricKpi label="Tickets" value="0" />
      </div>
    </div>
  );
}

function MetricKpi({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] text-white/60">{label}</div>
      <div className={["mt-1 font-bold", positive ? "text-emerald-300" : "text-white"].join(" ")}>
        {value}
      </div>
    </div>
  );
}

function StatCard({
  k,
  v,
  hint,
  level,
  accent,
}: {
  k: string;
  v: string;
  hint: string;
  level: number; // 0..1
  accent?: "brand" | "brand2";
}) {
  const bar =
    accent === "brand2"
      ? "bg-gradient-to-r from-brand2/70 to-brand/40"
      : "bg-gradient-to-r from-brand/70 to-brand2/40";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-3xl md:text-4xl font-extrabold text-white">{k}</div>
          <div className="text-sm text-white/60 mt-1">{v}</div>
        </div>

        <div className="text-[11px] px-2 py-1 rounded-lg border border-white/10 bg-white/5 text-white/55">
          live
        </div>
      </div>

      <div className="mt-5">
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div className={`h-full ${bar}`} style={{ width: `${Math.round(level * 100)}%` }} />
        </div>
        <div className="mt-2 text-xs text-white/50">{hint}</div>
      </div>
    </div>
  );
}
