import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { appLoginUrl, appRegisterUrl } from "../lib/links";
import { AnimatePresence, motion } from "framer-motion";
import MarketingTopbar from "../components/MarketingTopbar";

const navItemBase =
  "relative px-2 py-2 text-sm text-muted hover:text-text transition select-none";

const pill =
  "inline-flex items-center justify-center px-4 py-2 rounded-xl border border-stroke bg-panel/50 hover:bg-panel/70 transition text-sm active:scale-[0.98]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const items = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/precos", label: "Preços" },
      { to: "/privacidade", label: "Privacidade" },
    ],
    []
  );

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      <MarketingTopbar />

      <div className="backdrop-blur border-b border-stroke bg-bg/50">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand to-brand2 shadow-glow" />
            <div className="leading-tight">
              <div className="font-semibold">BossFlow</div>
              <div className="text-xs text-muted -mt-0.5">Painel do dono</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) =>
                  [navItemBase, isActive ? "text-text" : ""].join(" ")
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {it.label}

                    <AnimatePresence>
                      {(isActive || isHoverableActive(it.to, location.pathname)) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-brand to-brand2"
                          initial={{ opacity: 0, scaleX: 0.6 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0.6 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        />
                      )}
                    </AnimatePresence>

                    {isActive ? (
                      <span className="absolute -inset-x-2 -inset-y-1 rounded-xl bg-brand/10 blur-xl -z-10" />
                    ) : null}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href={appLoginUrl()} className={pill}>
              Entrar
            </a>
            <a
              href={appRegisterUrl()}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-brand to-brand2 text-bg font-semibold hover:opacity-95 transition active:scale-[0.98]"
            >
              Criar conta grátis
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-stroke bg-panel/45 hover:bg-panel/60 transition active:scale-[0.98]"
            aria-label="Abrir menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={[
                  "h-0.5 w-5 bg-text rounded-full transition",
                  open ? "translate-y-2 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 w-5 bg-text rounded-full transition",
                  open ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 w-5 bg-text rounded-full transition",
                  open ? "-translate-y-2 -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden border-b border-stroke bg-bg/70 backdrop-blur"
          >
            <div className="max-w-6xl mx-auto px-5 py-4">
              <div className="flex flex-col gap-2">
                {items.map((it) => (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    className={[
                      "px-3 py-3 rounded-xl border border-stroke bg-panel/40 hover:bg-panel/60 transition",
                      isActive(it.to) ? "text-text" : "text-muted",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{it.label}</span>
                      {isActive(it.to) ? (
                        <span className="text-xs px-2 py-1 rounded-full bg-brand/20 border border-brand/40">
                          ativo
                        </span>
                      ) : null}
                    </div>
                  </Link>
                ))}

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <a href={appLoginUrl()} className={pill}>
                    Entrar
                  </a>
                  <a
                    href={appRegisterUrl()}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-brand to-brand2 text-bg font-semibold hover:opacity-95 transition active:scale-[0.98]"
                  >
                    Grátis
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function isHoverableActive(itemTo: string, pathname: string) {
  if (itemTo === "/") return pathname === "/";
  return pathname.startsWith(itemTo);
}
