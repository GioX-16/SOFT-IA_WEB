import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutUs from "../Components/AboutSection";
import Header from "../Components/Header";
import TeamSection from "../Components/TeamSection";
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
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {showHeader && <Header />}
            {showNavbar && <Navbar />}
            <Hero />
            <AboutUs />
            <TeamSection />
        </>
    );
}