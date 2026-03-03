import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  id: string;
  q: string;
  a: string;
  icon: React.ReactNode;
  popular?: boolean;
};

export default function MarketingFAQ() {
  const items: Item[] = useMemo(
    () => [
      {
        id: "faq-cartao",
        q: "Preciso de cartão para testar?",
        a: "Você pode criar conta e explorar o produto sem cartão. Se decidir assinar um plano, você escolhe a forma de pagamento na etapa final.",
        icon: <IconCard />,
        popular: true,
      },
      {
        id: "faq-cancelar",
        q: "Posso cancelar quando quiser?",
        a: "Sim. Sem fidelidade. Você cancela quando quiser e continua com acesso até o fim do período já pago.",
        icon: <IconShield />,
        popular: true,
      },
      {
        id: "faq-pro",
        q: "O que muda no BossFlow Pro?",
        a: "O Pro destrava multi-empresa, relatórios avançados e exportação CSV — perfeito pra quem quer operar com padrão de painel profissional.",
        icon: <IconCrown />,
        popular: true,
      },
      {
        id: "faq-limites",
        q: "Tem limite de lançamentos / transações?",
        a: "Depende do plano. A ideia é você escolher um plano que acompanhe seu volume sem travar sua operação.",
        icon: <IconGauge />,
      },
      {
        id: "faq-exportar",
        q: "Consigo exportar meus dados?",
        a: "Sim. Exportação CSV para você usar em planilhas, contabilidade ou auditoria. Seus dados são seus.",
        icon: <IconDownload />,
        popular: true,
      },
      {
        id: "faq-seguranca",
        q: "Meus dados ficam seguros?",
        a: "Sim. O BossFlow usa autenticação e separação por usuário/empresa. Cada empresa fica isolada.",
        icon: <IconLock />,
      },
      {
        id: "faq-suporte",
        q: "Como funciona o suporte?",
        a: "Você tem suporte via página de suporte do site e e-mail. Para casos urgentes, pode existir canal rápido conforme o plano.",
        icon: <IconHeadset />,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mounted = useRef(false); // ← controla primeiro render

  // Deep link via hash
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash?.replace("#", "");
      if (!hash) return;
      const idx = items.findIndex((x) => x.id === hash);
      if (idx >= 0) {
        setActive(idx);
        requestAnimationFrame(() => {
          const el = rowRefs.current[idx];
          el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [items]);

  // Micro-scroll ao trocar active — ignora o primeiro render
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const el = rowRefs.current[active];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.top < 80 || rect.bottom > vh - 80) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [active]);

  const cur = items[active];

  function setHashSilently(id: string) {
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState({}, "", url.toString());
  }

  return (
    <section id="faq" className="max-w-6xl mx-auto px-5 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
        {/* glows */}
        <div className="absolute -top-44 -right-44 h-[520px] w-[520px] rounded-full bg-brand/12 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-brand2/12 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
            maskImage: "radial-gradient(60% 70% at 50% 40%, black 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(60% 70% at 50% 40%, black 55%, transparent 100%)",
          }}
        />

        <div className="relative p-7 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-brand2" />
                FAQ • dúvidas rápidas
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                Perguntas frequentes
              </h3>

              <p className="text-white/60 mt-2 max-w-2xl leading-relaxed">
                Clique nas perguntas — a resposta aparece no painel (sem a página "pular").
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/60">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  {items.length} perguntas
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  Sem cartão
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                  Sem fidelidade
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/10" />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Lista */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="max-h-[420px] lg:max-h-[520px] overflow-auto p-3 space-y-2">
                  {items.map((it, idx) => {
                    const selected = idx === active;
                    return (
                      <button
                        key={it.id}
                        ref={(n) => (rowRefs.current[idx] = n)}
                        onClick={() => {
                          setActive(idx);
                          setHashSilently(it.id);
                        }}
                        className={[
                          "w-full h-14 px-4 rounded-xl border flex items-center justify-between gap-3 text-left transition",
                          selected
                            ? "border-white/20 bg-white/10"
                            : "border-white/10 bg-black/20 hover:bg-white/5",
                        ].join(" ")}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={[
                              "h-9 w-9 shrink-0 rounded-lg border border-white/10 flex items-center justify-center",
                              selected ? "bg-white/10 text-white" : "bg-black/20 text-white/70",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            {it.icon}
                          </div>
                          <div className="min-w-0 flex items-center gap-2">
                            <div className="text-sm text-white font-semibold truncate">{it.q}</div>
                            {it.popular && (
                              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand2" />
                                Mais visto
                              </span>
                            )}
                          </div>
                        </div>
                        <div
                          className={[
                            "h-8 w-8 rounded-lg border border-white/10 flex items-center justify-center shrink-0 transition",
                            selected ? "bg-white/10 text-white" : "bg-black/20 text-white/70",
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          →
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-3 text-xs text-white/50">
                Dica: você pode linkar direto para uma resposta usando{" "}
                <span className="text-white/70">#faq-exportar</span>,{" "}
                <span className="text-white/70">#faq-pro</span>, etc.
              </div>
            </div>

            {/* Painel de resposta */}
            <div className="lg:col-span-5">
              <div className="hidden lg:block">
                <AnswerPanel item={cur} />
              </div>
              <div className="block lg:hidden mt-4">
                <AnswerPanelMobile item={cur} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnswerPanel({ item }: { item: Item }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md h-full overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center text-white/80">
            {item.icon}
          </div>
          <div className="min-w-0">
            <div className="text-white font-extrabold truncate">{item.q}</div>
            <div className="text-xs text-white/50">Resposta</div>
          </div>
          {item.popular && (
            <div className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand2" />
              Mais visto
            </div>
          )}
        </div>

        <div className="mt-4 h-px bg-white/10" />

        <div className="mt-4 min-h-[140px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-white/70 leading-relaxed"
            >
              {item.a}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-3 text-xs text-white/50">
          Dica: veja os planos e volte aqui se pintar outra dúvida.
        </div>
      </div>
    </div>
  );
}

function AnswerPanelMobile({ item }: { item: Item }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg border border-white/10 bg-black/20 flex items-center justify-center text-white/80">
            {item.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-white font-bold text-sm truncate">{item.q}</div>
          </div>
          {item.popular && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand2" />
              Mais visto
            </span>
          )}
        </div>
        <div className="mt-3 text-sm text-white/70 leading-relaxed">{item.a}</div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}

function IconCard() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M3.5 8.5h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.5 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M12 3l8 4v6c0 5-3.4 8.7-8 8.7S4 18 4 13V7l8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCrown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M5 18h14l1-10-4 3-4-6-4 6-4-3 1 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 21h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconGauge() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M20 13a8 8 0 1 0-16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 13l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 11h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
      <path d="M4 12a8 8 0 0 1 16 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 14h3v6H6a2 2 0 0 1-2-2v-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 14h-3v6h1a2 2 0 0 0 2-2v-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 20c1.8 0 3-.6 3-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
