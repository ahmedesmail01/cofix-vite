import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Servises from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <main className="flex w-full relative overflow-hidden flex-col gap-10 lg:gap-[140px] row-start-2 items-center ">
      <div className="blue_circle hidden lg:block absolute top-[800px] -left-[300px] -z-10" />
      <div className="blue_circle hidden lg:block absolute top-[1800px] -right-[300px] -z-10" />
      <div className="blue_circle hidden lg:block absolute top-[3000px] -left-[300px] -z-10" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Servises />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
