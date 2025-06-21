import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/Logos/Logo SOFT.png";

const HEADER_HEIGHT = "72px";
const HEADER_BG = "transparent";
const COLOR_NAV_LINK = "#F1F5F9";
const COLOR_NAV_HOVER = "#38BDF8";
const BUTTON_BG = "#38BDF8";
const BUTTON_BG_HOVER = "#1F2E36";
const BUTTON_TEXT = "#FFFFFF";
const MOBILE_MENU_BG = "#1F2E36"; //  Color personalizado al abrir menú móvil
const FONT_FAMILY = "'Play', sans-serif";

const navLinksLeft = [
    { to: "portfolio", label: "PROYECTOS" },
    { to: "services", label: "SERVICIOS" },
    { to: "team", label: "EQUIPO" },
];

const navLinksRight = [
    { to: "about", label: "NOSOTROS" },
    { to: "testimonials", label: "TESTIMONIOS" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <motion.header
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1000,
                background: HEADER_BG,
                backdropFilter: "none",
                fontFamily: FONT_FAMILY,
                height: HEADER_HEIGHT,
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 0.4rem",
                    position: "relative",
                }}
            >
                {/* Logo a la izquierda solo en móvil */}
                {isMobile && (
                    <div style={{ flexShrink: 0 }}>
                        <img
                            src={logo}
                            alt="Logo SOFT-IA"
                            style={{ width: "140px", objectFit: "contain", cursor: "pointer" }}
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        />
                    </div>
                )}

                {/* Nav izquierda - solo desktop */}
                {!isMobile && (
                    <ul style={{ display: "flex", gap: "5rem", listStyle: "none", margin: 0, padding: 0 }}>
                        {navLinksLeft.map((link) => (
                            <li key={link.to}>
                                <a
                                    href={`#${link.to}`}
                                    style={{
                                        color: COLOR_NAV_LINK,
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById(link.to);
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = COLOR_NAV_HOVER)}
                                    onMouseLeave={e => (e.currentTarget.style.color = COLOR_NAV_LINK)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Logo al centro solo en desktop */}
                {!isMobile && (
                    <div style={{ 
                        position: "absolute", 
                        left: "50%", 
                        top: "50%", 
                        transform: "translate(-50%, -50%)",
                        flexShrink: 0 
                    }}>
                        <img
                            src={logo}
                            alt="Logo SOFT-IA"
                            style={{ width: "200px", objectFit: "contain" }}
                        />
                    </div>
                )}

                {/* Nav derecha - solo desktop */}
                {!isMobile && (
                    <ul style={{ display: "flex", gap: "5rem", listStyle: "none", margin: 0, padding: 0 }}>
                        {navLinksRight.map((link) => (
                            <li key={link.to}>
                                <a
                                    href={`#${link.to}`}
                                    style={{
                                        color: COLOR_NAV_LINK,
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        const section = document.getElementById(link.to);
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = COLOR_NAV_HOVER)}
                                    onMouseLeave={e => (e.currentTarget.style.color = COLOR_NAV_LINK)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                style={{
                                    background: BUTTON_BG,
                                    color: BUTTON_TEXT,
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    borderRadius: "9999px",
                                    padding: "0.5rem 1.25rem",
                                    textDecoration: "none",
                                    transition: "background 0.2s ease",
                                    cursor: "pointer",
                                }}
                                onClick={e => {
                                    e.preventDefault();
                                    const section = document.getElementById('contact');
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = BUTTON_BG_HOVER)}
                                onMouseLeave={e => (e.currentTarget.style.background = BUTTON_BG)}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                )}

                {/* Hamburguesa solo en móvil */}
                {isMobile && (
                    <div
                        onClick={toggleMenu}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            padding: "10px",
                        }}
                    >
                        {[1, 2, 3].map((_, i) => (
                            <div
                                key={i}
                                style={{ width: "25px", height: "3px", background: COLOR_NAV_LINK }}
                            ></div>
                        ))}
                    </div>
                )}
            </div>

            {/* Menú desplegable en móvil */}
            {isMobile && isMenuOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: MOBILE_MENU_BG,
                        color: COLOR_NAV_LINK,
                        padding: "1rem 2rem",
                    }}
                >
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[...navLinksLeft, ...navLinksRight].map((link) => (
                            <li key={link.to}>
                                <a
                                    href={`#${link.to}`}
                                    style={{
                                        color: COLOR_NAV_LINK,
                                        textDecoration: "none",
                                        fontSize: "1.2rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                    }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setIsMenuOpen(false);
                                        const section = document.getElementById(link.to);
                                        if (section) {
                                            section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                style={{
                                    background: BUTTON_BG,
                                    color: BUTTON_TEXT,
                                    fontWeight: 600,
                                    fontSize: "1.1rem",
                                    borderRadius: "9999px",
                                    padding: "0.5rem 1.25rem",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    marginTop: "0.5rem",
                                    cursor: "pointer",
                                }}
                                onClick={e => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    const section = document.getElementById('contact');
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
}
