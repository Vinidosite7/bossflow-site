import MarketingTopbar from "../components/MarketingTopbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

/* ─── Motion presets (mesmo padrão do site) ────────────────────────────── */
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

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingTopbar active="suporte" />

      <main className="flex-1">
        <div className="relative overflow-hidden">

          {/* ── Fundo — igual ao Pricing ──────────────────────────────── */}
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

          {/* ── Hero ──────────────────────────────────────────────────── */}
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
              <span className="h-1.5 w-1.5 rounded-full bg-brand2 anim-pulse" />
              Central de ajuda
            </motion.div>

            <motion.h1
              variants={vFadeUp}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-5 leading-[1.05]"
            >
              Suporte{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand2 to-brand">
                BossFlow
              </span>
            </motion.h1>

            <motion.p
              variants={vFadeUp}
              className="text-white/60 text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed"
            >
              Contatos e políticas — tudo num só lugar.
            </motion.p>
          </motion.section>

          {/* ── Cards de contato ──────────────────────────────────────── */}
          <motion.section
            className="max-w-6xl mx-auto px-5 pb-16"
            variants={vContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-5">

              {/* Email */}
              <motion.a
                variants={vSoft}
                href="mailto:suporte@bossflow.com"
                className="group rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:bg-[#121220] hover:border-brand/20 transition flex flex-col gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-brand/[0.10] border border-brand/20 flex items-center justify-center text-lg">
                  ✉️
                </div>
                <div>
                  <div className="font-extrabold text-white">E-mail</div>
                  <p className="text-sm text-white/55 mt-1 leading-relaxed">
                    suporte@bossflow.com
                  </p>
                </div>
                <span className="mt-auto text-xs text-brand2/70 group-hover:text-brand2 transition">
                  Enviar e-mail →
                </span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                variants={vSoft}
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:bg-[#121220] hover:border-brand/20 transition flex flex-col gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-brand/[0.10] border border-brand/20 flex items-center justify-center text-lg">
                  💬
                </div>
                <div>
                  <div className="font-extrabold text-white">WhatsApp</div>
                  <p className="text-sm text-white/55 mt-1 leading-relaxed">
                    Fale com o time de suporte direto pelo WhatsApp.
                  </p>
                </div>
                <span className="mt-auto text-xs text-brand2/70 group-hover:text-brand2 transition">
                  Abrir conversa →
                </span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                variants={vSoft}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 hover:bg-[#121220] hover:border-brand/20 transition flex flex-col gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-brand/[0.10] border border-brand/20 flex items-center justify-center text-lg">
                  📷
                </div>
                <div>
                  <div className="font-extrabold text-white">Instagram</div>
                  <p className="text-sm text-white/55 mt-1 leading-relaxed">
                    Nos acompanhe e mande uma mensagem por lá.
                  </p>
                </div>
                <span className="mt-auto text-xs text-brand2/70 group-hover:text-brand2 transition">
                  Seguir →
                </span>
              </motion.a>
            </div>

            {/* ── Políticas ─────────────────────────────────────────── */}
            <motion.div
              variants={vSoft}
              className="mt-5 rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-6 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="flex-1">
                <div className="font-extrabold text-white">Políticas e termos</div>
                <p className="text-sm text-white/55 mt-1">
                  Leia nossos termos antes de usar a plataforma.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/privacidade"
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-white/[0.06] bg-[#141428] text-sm text-white/70 hover:text-white hover:bg-[#1a1a30] transition"
                >
                  Política de privacidade
                </Link>
                <Link
                  to="/termos"
                  className="inline-flex items-center px-4 py-2 rounded-xl border border-white/[0.06] bg-[#141428] text-sm text-white/70 hover:text-white hover:bg-[#1a1a30] transition"
                >
                  Termos de uso
                </Link>
              </div>
            </motion.div>

            {/* ── CTA login ─────────────────────────────────────────── */}
            <motion.div
              variants={vFadeUp}
              className="mt-5 relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f0f1a] p-8 text-center"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-brand2/15 blur-3xl pointer-events-none" />

              <div className="relative">
                <p className="text-white/60 text-sm">
                  Já tem uma conta?
                </p>
                <a
                  href="/auth"
                  className="mt-4 inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0] text-white font-extrabold text-sm hover:opacity-95 transition active:scale-[0.98] shadow-[0_0_24px_rgba(109,94,246,0.35)]"
                >
                  Acessar minha conta
                </a>
              </div>
            </motion.div>

          </motion.section>
        </div>
      </main>

      {/* ── Footer slim ───────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] bg-[#09090f]">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <div>© {new Date().getFullYear()} BossFlow · Todos os direitos reservados</div>
          <div className="flex gap-4">
            <Link to="/privacidade" className="hover:text-white/70 transition">Privacidade</Link>
            <Link to="/termos" className="hover:text-white/70 transition">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
