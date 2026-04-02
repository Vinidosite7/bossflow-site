import { appRegisterUrl } from "../lib/links";
import { motion } from "framer-motion";

export default function PanelStrip() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-10 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1a]"
      >
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand2/10 blur-3xl pointer-events-none" />

        <div className="relative px-7 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/40 font-medium">Sistema operacional · Sem fidelidade</span>
            </div>
            <p className="text-white font-extrabold text-lg leading-tight">
              Comece grátis agora.{" "}
              <span className="text-white/40 font-normal text-base">Setup em 2 minutos.</span>
            </p>
          </div>

          <a
            href={appRegisterUrl()}
            className="group relative overflow-hidden inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-xl
                       bg-gradient-to-r from-[#6d5ef6] to-[#5a4de0]
                       text-white font-extrabold text-sm whitespace-nowrap
                       hover:opacity-95 transition active:scale-[0.98]
                       shadow-[0_0_24px_rgba(109,94,246,0.35)]"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] opacity-0
                             bg-gradient-to-r from-transparent via-white/25 to-transparent
                             group-hover:opacity-100 group-hover:left-[120%] transition-all duration-[1100ms]" />
            <span className="relative">Criar conta grátis →</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
