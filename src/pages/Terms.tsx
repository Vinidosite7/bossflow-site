import Navbar from "../components/Navbar";
import MarketingTopbar from "../components/MarketingTopbar";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-5 py-14">
        <h1 className="text-3xl font-extrabold">Termos de Uso</h1>
        <p className="text-muted mt-4">
          Texto provisório. Depois a gente coloca o jurídico certinho (LGPD, cobranças, cancelamento, etc).
        </p>
      </main>
      <MarketingTopbar />
    </div>
  );
}
