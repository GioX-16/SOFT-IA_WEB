import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutUs from "../Components/AboutSection";
import Header from "../Components/Header";
import TeamSection from "../Components/TeamSection";
import Testimonials from "../Components/Testimonials";
import PortfolioSection from "../Components/PortfolioSection";
import ServicesSection from "../Components/ServicesSection";
import ContactSection from "../Components/ContactSection";
import { useEffect, useState } from "react";

export default function Landing() {
  const [showHeader, setShowHeader] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setShowHeader(false);
          setShowNavbar(true);
        } else {
          setShowHeader(true);
          setShowNavbar(false);
        }
      }
    };
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== "top") {
        setShowHeader(false);
        setShowNavbar(true);
      } else {
        handleScroll();
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {showHeader && <Header />}
      {showNavbar && <Navbar />}
      <Hero />
      <AboutUs />
      <PortfolioSection />
      <ServicesSection />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
