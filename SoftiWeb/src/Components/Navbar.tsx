import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { label: "Inicio", to: "top" },
    { label: "Proyectos", to: "portfolio" },
    { label: "Equipo", to: "team" },
    { label: "Servicios", to: "services" },
    { label: "Testimonios", to: "testimonials" },
    { label: "Contactanos", to: "contact", isButton: true },
];

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const aboutTop = aboutSection.getBoundingClientRect().top;
                setShowNavbar(aboutTop <= 0);
            }
        };

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!showNavbar || !isDesktop) return null;

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: "fixed",
                top: "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 999,
                padding: "0.5rem 1.5rem",
                borderRadius: "2rem",
                display: "flex",
                gap: "2.5rem",
                background: "linear-gradient(to left, #4498C2 0%, #336178 100%)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {NAV_ITEMS.map((item) =>
                item.to === "top" ? (
                    <a
                        key={item.to}
                        href="#"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: "1rem",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                        }}
                        onClick={e => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#1F2E36")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
                    >
                        {item.label}
                    </a>
                ) : item.isButton ? (
                    <a
                        key={item.to}
                        href={`#${item.to}`}
                        style={{
                            backgroundColor: "#1F2E36",
                            color: "#fff",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "1.5rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                        }}
                        onClick={e => {
                            e.preventDefault();
                            const section = document.getElementById(item.to);
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = "#E9ECF0";
                            e.currentTarget.style.color = "#1F2E36";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = "#1F2E36";
                            e.currentTarget.style.color = "#fff";
                        }}
                    >
                        {item.label}
                    </a>
                ) : (
                    <a
                        key={item.to}
                        href={`#${item.to}`}
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: "1rem",
                            transition: "color 0.3s ease",
                            cursor: "pointer",
                        }}
                        onClick={e => {
                            e.preventDefault();
                            const section = document.getElementById(item.to);
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#1F2E36")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
                    >
                        {item.label}
                    </a>
                )
            )}
        </motion.nav>
    );
};

export default Navbar;
