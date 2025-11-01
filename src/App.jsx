import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import Navbar from "./components/Navbar";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar onQuoteClick={() => setOpenModal(true)} onToggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero onQuoteClick={() => setOpenModal(true)} />
      <Services />
      <CaseStudies />
      <Clients />
      <Team />
      <Footer />
      <QuoteModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
