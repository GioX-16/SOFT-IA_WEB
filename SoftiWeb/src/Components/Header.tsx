import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logos/Logo SOFT.png";

// 🎨 Variables editables
const HEADER_HEIGHT = "72px"; 
const HEADER_BG = "rgba(255, 255, 255, 0.05)";
const HEADER_BORDER = "#ffffff";

const COLOR_NAV_LINK = "#F1F5F9";
const COLOR_NAV_HOVER = "#4498C2";

const BUTTON_BG = "#4498C2";
const BUTTON_BG_HOVER = "#1F2E36";
const BUTTON_TEXT = "#FFFFFF";

const LOGO_WIDTH = "200px";
const NAV_GAP = "7rem";
const FONT_FAMILY = "'Play', sans-serif";

const navLinksLeft = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/servicios", label: "Services" },
    { to: "/team", label: "Team" },
];

const navLinksRight = [
    { to: "/about", label: "About Us" },
    { to: "/testimonios", label: "Testimonials" },
];

export default function Header() {
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
                backdropFilter: "blur(12px)",
                borderBottom: `2px solid ${HEADER_BORDER}`,
                fontFamily: FONT_FAMILY,
                boxShadow: "0 2px 16px rgba(0, 0, 0, 0.1)",
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
                    padding: "0 2rem",
                }}
            >
                {/* Nav izquierda */}
                <nav>
                    <ul
                        style={{
                            display: "flex",
                            gap: NAV_GAP,
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            alignItems: "center",
                        }}
                    >
                        {navLinksLeft.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    style={{
                                        color: COLOR_NAV_LINK,
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: "1.2rem",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = COLOR_NAV_HOVER)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = COLOR_NAV_LINK)
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logo central */}
                <div style={{ flexShrink: 0 }}>
                    <img
                        src={logo}
                        alt="Logo SOFT-IA"
                        style={{ width: LOGO_WIDTH, objectFit: "contain" }}
                    />
                </div>

                {/* Nav derecha + botón */}
                <nav>
                    <ul
                        style={{
                            display: "flex",
                            gap: NAV_GAP,
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            alignItems: "center",
                        }}
                    >
                        {navLinksRight.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    style={{
                                        color: COLOR_NAV_LINK,
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        fontSize: "1.2rem",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = COLOR_NAV_HOVER)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = COLOR_NAV_LINK)
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/contacto"
                                style={{
                                    background: BUTTON_BG,
                                    color: BUTTON_TEXT,
                                    fontWeight: 600,
                                    fontSize: "1.2rem",
                                    borderRadius: "9999px",
                                    padding: "0.5rem 1.5rem",
                                    textDecoration: "none",
                                    boxShadow: `0 2px 8px 0 ${BUTTON_BG}`,
                                    transition: "background 0.2s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = BUTTON_BG_HOVER)
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = BUTTON_BG)
                                }
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}
