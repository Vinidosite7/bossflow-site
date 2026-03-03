import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import RedirectToApp from "./pages/RedirectToApp";
import HomePro from "./pages/HomePro";
import Support from "./pages/Support";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precos" element={<Pricing />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/suporte" element={<Support />} />
        <Route path="/pro" element={<HomePro />} />

        {/* rotas "tipo utmfy" que mandam pro app */}
        <Route path="/login" element={<RedirectToApp to="login" />} />
        <Route path="/register" element={<RedirectToApp to="register" />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
