import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/Logos/Logo SOFT.png";
import { useIsMobile } from "../hooks/useIsMobile";
import type { NavItem } from "../types";

const navLinksLeft: NavItem[] = [
  { to: "portfolio", label: "PROYECTOS" },
  { to: "services", label: "SERVICIOS" },
  { to: "team", label: "EQUIPO" },
];

const navLinksRight: NavItem[] = [
  { to: "about", label: "NOSOTROS" },
  { to: "testimonials", label: "TESTIMONIOS" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        background: "transparent",
        fontFamily: "'Play', sans-serif",
        height: "72px",
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
        {isMobile && (
          <div style={{ flexShrink: 0 }}>
            <img
              src={logo}
              alt="Logo SOFT-IA"
              style={{ width: "140px", objectFit: "contain", cursor: "pointer" }}
              onClick={() => scrollTo("top")}
            />
          </div>
        )}

        {!isMobile && (
          <ul style={{ display: "flex", gap: "5rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinksLeft.map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  style={{
                    color: "#F1F5F9",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.to);
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              flexShrink: 0,
            }}
          >
            <img
              src={logo}
              alt="Logo SOFT-IA"
              style={{ width: "200px", objectFit: "contain" }}
            />
          </div>
        )}

        {!isMobile && (
          <ul style={{ display: "flex", gap: "5rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinksRight.map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  style={{
                    color: "#F1F5F9",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.to);
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                style={{
                  background: "#38BDF8",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.25rem",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1F2E36")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#38BDF8")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        )}

        {isMobile && (
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                style={{ width: "25px", height: "3px", background: "#F1F5F9" }}
              />
            ))}
          </div>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#1F2E36",
            color: "#F1F5F9",
            padding: "1rem 2rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  style={{
                    color: "#F1F5F9",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    scrollTo(link.to);
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
                  background: "#38BDF8",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.25rem",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  scrollTo("contact");
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
