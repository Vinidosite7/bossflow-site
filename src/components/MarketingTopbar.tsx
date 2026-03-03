import { Link, useLocation } from "react-router-dom";
import { appRegisterUrl } from "../lib/links";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Active = "home" | "precos" | "suporte";

type Props = {
  active?: Active;
};

export default function MarketingTopbar({ active }: Props) {
  const location = useLocation();
  const a: Active = active ?? inferActive(location.pathname);

  // Scroll progress (hairline)
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.2 });

  // Header “fica mais sólido” com scroll
  const bgOpacity = useTransform(scrollYProgress, [0, 0.06], [0.65, 0.9]);

  const ctaLabel =
    a === "precos" ? "Começar agora" : a === "suporte" ? "Abrir chamado" : "Criar conta grátis";

  // Mobile menu
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false); // fecha ao trocar rota
  }, [location.pathname]);

  const navItems = useMemo(
    () => [
      { to: "/", label: "Home", key: "home" as const },
      { to: "/precos", label: "Preços", key: "precos" as const },
      { to: "/suporte", label: "Suporte", key: "suporte" as const },
    ],
    []
  );

  return (
    <>
      {/* Hairline progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand2 to-brand"
        style={{ scaleX: progress }}
      />

      <motion.header
        className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl"
        style={{
          backgroundColor: `rgba(5,10,24, ${bgOpacity.get()})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/brand/bossflow-logo.png"
              alt="BossFlow"
              className="h-7 md:h-8 w-auto select-none"
              draggable={false}
            />
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((it) => (
              <NavItem key={it.key} to={it.to} label={it.label} active={a === it.key} />
            ))}
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-3">
            <a
              href="/auth"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-white/10 bg-white/5
                         text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              Entrar
            </a>

            {/* CTA com shine sutil */}
            <a
              href={appRegisterUrl()}
              className="group relative overflow-hidden inline-flex items-center justify-center px-5 py-2.5 rounded-xl
                         bg-gradient-to-r from-brand2 to-brand
                         text-[#06163a] font-extrabold text-sm
                         hover:opacity-95 transition"
            >
              {/* shine */}
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] opacity-0
                           bg-gradient-to-r from-transparent via-white/35 to-transparent
                           group-hover:opacity-100 group-hover:left-[120%] transition-all duration-[1100ms]"
              />
              <span className="relative">{ctaLabel}</span>
            </a>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl
                         border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <span className="text-white/80 text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu (animado) */}
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden overflow-hidden border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1">
            {navItems.map((it) => (
              <Link
                key={it.key}
                to={it.to}
                className={[
                  "px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm transition",
                  a === it.key ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/10",
                ].join(" ")}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}

/* ---------------- Nav Item ---------------- */

function NavItem({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={[
        "relative px-4 py-2 rounded-lg transition select-none",
        active
          ? "text-white bg-white/10"
          : "text-white/70 hover:text-white hover:bg-white/5",
      ].join(" ")}
    >
      {label}

      {/* Indicador tipo painel */}
      {active && (
        <>
          {/* hairline */}
          <span className="absolute inset-x-3 -bottom-[9px] h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          {/* glow sutil */}
          <span className="absolute inset-0 rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
        </>
      )}
    </Link>
  );
}

/* ---------------- Helpers ---------------- */

function inferActive(pathname: string): Active {
  if (pathname.startsWith("/precos")) return "precos";
  if (pathname.startsWith("/suporte")) return "suporte";
  return "home";
}
