import MarketingTopbar from "../components/MarketingTopbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingTopbar active="suporte" />

      <main className="flex-1">
        {/* Fundo uniforme com o resto do site */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-[#06163a] to-[#050a18]" />
            <div className="absolute -top-40 -right-52 h-[560px] w-[560px] rounded-full bg-brand/18 blur-3xl" />
            <div className="absolute -top-56 -left-52 h-[560px] w-[560px] rounded-full bg-brand2/16 blur-3xl" />
            <div className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <section className="max-w-6xl mx-auto px-5 pt-10 pb-16">
            {/* título pequeno só pra contextualizar (pode apagar se quiser) */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-brand2" />
                Central de ajuda
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
                Suporte BossFlow
              </h1>
              <p className="text-white/70 mt-3">
                Contatos e políticas — tudo num só lugar.
              </p>
            </motion.div>

            {/* Card estilo Xtracky */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/25 backdrop-blur-md">
                {/* pontilhado */}
                <div
                  className="absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />

                {/* glow suave pra casar com o tema */}
                <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-brand2/10 blur-3xl" />
                <div className="absolute -top-24 -right-44 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

                <div className="relative p-10 md:p-12">
                  <div className="grid md:grid-cols-3 gap-10">
                    {/* coluna logo */}
                    <div>
                      <div className="flex items-center gap-3">
                        <img
                          src="/brand/bossflow-logo.png"
                          alt="BossFlow"
                          className="h-7 md:h-8 w-auto"
                          draggable={false}
                        />
                      </div>

                      <p className="text-white/70 mt-4 leading-relaxed max-w-sm">
                        Uma ferramenta de controle financeiro com cara de painel
                        para você organizar e escalar o seu negócio.
                      </p>

                      {/* social (deixa simples e clean) */}
                      <div className="mt-6">
                        <a
                          className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                          href="https://instagram.com"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Instagram"
                          title="Instagram"
                        >
                          <span className="text-white/80 text-sm">◎</span>
                        </a>
                      </div>
                    </div>

                    {/* políticas */}
                    <div>
                      <div className="text-white font-extrabold text-lg">Políticas e termos</div>
                      <div className="mt-4 space-y-3 text-white/70">
                        <Link className="block hover:text-white transition" to="/privacidade">
                          Políticas de privacidade
                        </Link>
                        <Link className="block hover:text-white transition" to="/termos">
                          Termos de uso
                        </Link>
                      </div>
                    </div>

                    {/* contato */}
                    <div>
                      <div className="text-white font-extrabold text-lg">Fale conosco</div>
                      <div className="mt-4 space-y-3 text-white/70">
                        <a
                          className="block hover:text-white transition"
                          href="mailto:suporte@bossflow.com"
                        >
                          suporte@bossflow.com
                        </a>

                        <a
                          className="block hover:text-white transition"
                          href="https://wa.me/5500000000000"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Suporte WhatsApp
                        </a>

                        <a
                          className="block hover:text-white transition"
                          href="/auth"
                        >
                          Acessar conta
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* linha */}
                  <div className="mt-10 border-t border-white/10" />

                  {/* bottom bar */}
                  <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-white/50 text-sm">
                    <div>© {new Date().getFullYear()} • BossFlow • Todos os direitos reservados</div>
                    <div>
                      Desenvolvido por{" "}
                      <span className="text-white/70 font-semibold">BossFlow</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* espaçador pra respirar em telas grandes */}
              <div className="h-10" />
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}
