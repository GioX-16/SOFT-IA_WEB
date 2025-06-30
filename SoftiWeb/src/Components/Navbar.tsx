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

        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && hash !== "top") {
                setShowNavbar(true);
            } else {
                handleScroll();
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    if (!showNavbar) return null;

    return (
        <>
            {/* Navbar Desktop */}
            {isDesktop && (
                <div style={{
                    position: "fixed",
                    top: "1.2rem",
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                    width: "100%",
                    maxWidth: "1200px",
                    zIndex: 9999,
                }}>
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: "relative",
                            padding: "0.35rem 1.5rem",
                            borderRadius: "2.5rem",
                            display: "flex",
                            gap: "1.5rem",
                            background: "rgba(52, 152, 202, 0.55)",
                            boxShadow: "0 2px 16px 0 rgba(44, 62, 80, 0.10)",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(8px)",
                            border: "1.5px solid rgba(255,255,255,0.25)",
                            width: "100%",
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
                                        fontWeight: 500,
                                        fontSize: "1rem",
                                        letterSpacing: "0.02em",
                                        transition: "color 0.25s cubic-bezier(.4,0,.2,1)",
                                        cursor: "pointer",
                                        padding: "0.3rem 0.7rem",
                                        borderRadius: "1rem",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                        window.location.hash = "#top";
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#E9ECF0")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
                                >
                                    {item.label}
                                </a>
                            ) : item.isButton ? (
                                <a
                                    key={item.to}
                                    href={`#${item.to}`}
                                    style={{
                                        background: "linear-gradient(90deg, #1F2E36 60%, #336178 100%)",
                                        color: "#fff",
                                        padding: "0.45rem 1.5rem",
                                        borderRadius: "1.5rem",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        fontSize: "1.05rem",
                                        boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)",
                                        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                                        cursor: "pointer",
                                        border: "1.5px solid rgba(255,255,255,0.18)",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById(item.to);
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                            window.location.hash = `#${item.to}`;
                                        }
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = "#E9ECF0";
                                        e.currentTarget.style.color = "#1F2E36";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "linear-gradient(90deg, #1F2E36 60%, #336178 100%)";
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
                                        fontWeight: 500,
                                        fontSize: "1rem",
                                        letterSpacing: "0.02em",
                                        transition: "color 0.25s cubic-bezier(.4,0,.2,1)",
                                        cursor: "pointer",
                                        padding: "0.3rem 0.7rem",
                                        borderRadius: "1rem",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById(item.to);
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                            window.location.hash = `#${item.to}`;
                                        }
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#E9ECF0")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                    </motion.nav>
                </div>
            )}

            {/* Navbar Móvil */}
            {!isDesktop && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: "1.2rem",
                        right: "1.2rem",
                        zIndex: 999,
                    }}
                >
                    {/* Botón hamburguesa */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            background: "rgba(52, 152, 202, 0.55)",
                            border: "1.5px solid rgba(255,255,255,0.25)",
                            borderRadius: "50%",
                            width: "44px",
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)",
                            backdropFilter: "blur(8px)",
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
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
                                transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
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
                                transform: isMenuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
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
                                top: "54px",
                                right: "0",
                                background: "rgba(52, 152, 202, 0.95)",
                                borderRadius: "15px",
                                padding: "0.7rem 0.7rem 0.5rem 0.7rem",
                                minWidth: "170px",
                                boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)",
                                border: "1.5px solid rgba(255,255,255,0.18)",
                                backdropFilter: "blur(8px)",
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
                                        fontWeight: item.isButton ? 700 : 500,
                                        fontSize: "0.98rem",
                                        padding: item.isButton ? "0.7rem 1rem" : "0.5rem 1rem",
                                        borderRadius: "8px",
                                        marginBottom: "0.3rem",
                                        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                                        cursor: "pointer",
                                        background: item.isButton ? "#1F2E36" : "transparent",
                                        border: item.isButton ? "1.5px solid rgba(255,255,255,0.18)" : "none",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setIsMenuOpen(false);
                                        if (item.to === "top") {
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                            window.location.hash = "#top";
                                        } else {
                                            const section = document.getElementById(item.to);
                                            if (section) {
                                                section.scrollIntoView({ behavior: 'smooth' });
                                                window.location.hash = `#${item.to}`;
                                            }
                                        }
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = item.isButton ? "#E9ECF0" : "rgba(255, 255, 255, 0.13)";
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
