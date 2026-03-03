import { useEffect } from "react";
import { appLoginUrl, appRegisterUrl } from "../lib/links";

export default function RedirectToApp({ to }: { to: "login" | "register" }) {
  useEffect(() => {
    const url = to === "login" ? appLoginUrl() : appRegisterUrl();
    window.location.href = url;
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-xl2 border border-stroke bg-panel/60 shadow-glow p-6 text-center">
        <div className="text-lg font-semibold">Redirecionando…</div>
        <p className="text-sm text-muted mt-2">
          Você já vai cair direto no BossFlow.
        </p>
      </div>
    </div>
  );
}
