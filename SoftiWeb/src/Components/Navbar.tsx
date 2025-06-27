import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { label: "Inicio", to: "top" },
    { label: "Proyectos", to: "portfolio" },
    { label: "Servicios", to: "services" },
    { label: "Nosotros", to: "about" },
    { label: "Equipo", to: "team" },
    { label: "Testimonios", to: "testimonials" },
    { label: "Contactanos", to: "contact", isButton: true },
];

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    if (!showNavbar) return null;

    return (
        <>
            {/* Navbar Desktop */}
            {isDesktop && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: "0.5rem",
                        left: "30%",
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
            )}

            {/* Navbar Móvil */}
            {!isDesktop && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: "1rem",
                        right: "1rem",
                        zIndex: 999,
                    }}
                >
                    {/* Botón hamburguesa */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            background: "linear-gradient(to left, #4498C2 0%, #336178 100%)",
                            border: "none",
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "3px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <div style={{
                                width: "20px",
                                height: "2px",
                                background: "#fff",
                                transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                                transition: "transform 0.3s ease"
                            }} />
                            <div style={{
                                width: "20px",
                                height: "2px",
                                background: "#fff",
                                opacity: isMenuOpen ? 0 : 1,
                                transition: "opacity 0.3s ease"
                            }} />
                            <div style={{
                                width: "20px",
                                height: "2px",
                                background: "#fff",
                                transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                                transition: "transform 0.3s ease"
                            }} />
                        </div>
                    </motion.button>

                    {/* Menú desplegable */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: "absolute",
                                top: "60px",
                                right: "0",
                                background: "linear-gradient(to left, #4498C2 0%, #336178 100%)",
                                borderRadius: "15px",
                                padding: "1rem",
                                minWidth: "200px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.to}
                                    href={item.to === "top" ? "#" : `#${item.to}`}
                                    style={{
                                        display: "block",
                                        color: "#ffffff",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        marginBottom: "0.5rem",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                        background: item.isButton ? "#1F2E36" : "transparent",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setIsMenuOpen(false);
                                        if (item.to === "top") {
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        } else {
                                            const section = document.getElementById(item.to);
                                            if (section) {
                                                section.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = item.isButton ? "#E9ECF0" : "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.color = item.isButton ? "#1F2E36" : "#ffffff";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = item.isButton ? "#1F2E36" : "transparent";
                                        e.currentTarget.style.color = "#ffffff";
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </motion.nav>
            )}
        </>
    );
};

export default Navbar;
