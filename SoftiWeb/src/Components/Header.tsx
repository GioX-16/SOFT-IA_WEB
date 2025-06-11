import { Link } from "react-router-dom";
import logo from '../assets/Logos/Logo SOFT.png';

// Variables editables para personalización
const HEADER_BG = 'rgba(161, 161, 161, 0.3)'; // Fondo transparente
const HEADER_BORDER = '#6EE7B7';
const NAV_LINK_COLOR = '#F1F5F9';
const NAV_LINK_HOVER = '#60A5FA';
const LOGO_TEXT_COLOR = '#60A5FA';
const LOGO_TEXT_SHADOW = '#0EA5E9';
const BUTTON_BG = '#38BDF8';
const BUTTON_BG_HOVER = '#0EA5E9';
const BUTTON_SHADOW = '#0EA5E9';
const GAP_NAV = '1.1rem'; // Menor separación
const HEADER_HEIGHT = '72px';
const LOGO_SIZE = '44px';
const FONT_FAMILY = 'Play, sans-serif';

const navLinks = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/servicios", label: "Services" },
    { to: "/team", label: "Team" },
    { to: "/about", label: "About Us" },
    { to: "/testimonios", label: "Testimonials" },
];

export default function Header() {
    return (
        <header
            style={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                background: HEADER_BG,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                backdropFilter: 'blur(12px)',
                borderBottom: `2px solid ${HEADER_BORDER}`,
                fontFamily: FONT_FAMILY,
            }}
        >
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: HEADER_HEIGHT,
                    padding: '0 2rem',
                }}
            >
                {/* Navegación izquierda */}
                <nav style={{ flex: 1 }}>
                    <ul
                        style={{
                            display: 'flex',
                            gap: GAP_NAV,
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        {navLinks.slice(0, 3).map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    style={{
                                        textDecoration: 'none',
                                        color: NAV_LINK_COLOR,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => (e.currentTarget.style.color = NAV_LINK_HOVER)}
                                    onMouseOut={e => (e.currentTarget.style.color = NAV_LINK_COLOR)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Logo central */}
                <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img
                        src={logo}
                        alt="Logo Soft-IA"
                        style={{ height: '200px', width: '200px', objectFit: 'contain' }}
                    />
                    
                </div>

                {/* Navegación derecha + botón */}
                <nav style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: GAP_NAV }}>
                    <ul
                        style={{
                            display: 'flex',
                            gap: GAP_NAV,
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        {navLinks.slice(3).map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    style={{
                                        textDecoration: 'none',
                                        color: NAV_LINK_COLOR,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        letterSpacing: '0.5px',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => (e.currentTarget.style.color = NAV_LINK_HOVER)}
                                    onMouseOut={e => (e.currentTarget.style.color = NAV_LINK_COLOR)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/contacto"
                                style={{
                                    display: 'inline-block',
                                    background: BUTTON_BG,
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    borderRadius: '1.5rem',
                                    padding: '0.5rem 1.5rem',
                                    textDecoration: 'none',
                                    boxShadow: `0 2px 8px 0 ${BUTTON_SHADOW}`,
                                    transition: 'background 0.2s, color 0.2s',
                                }}
                                onMouseOver={e => (e.currentTarget.style.background = BUTTON_BG_HOVER)}
                                onMouseOut={e => (e.currentTarget.style.background = BUTTON_BG)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 

