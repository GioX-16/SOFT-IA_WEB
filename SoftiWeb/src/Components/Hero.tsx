// Hero.tsx
import { motion } from "framer-motion";
import logo from "../assets/Logos/Logo SOFT.png";
import React from "react";

const VIDEO_BG = true;
const VIDEO_SRC = "/src/assets/Videos/Back_BG_Soft.mp4";
const IMAGE_BG = "/src/assets/Backgrounds/StockCake-Coding Team Collaborates_1749771264.jpg";

const OVERLAY_COLOR = "rgba(0, 0, 0, 0.6)";
const TEXT_COLOR = "#FFFFFF";
const HIGHLIGHT_COLOR = "#38BDF8";
const BUTTON_BG = "#38BDF8";
const BUTTON_BG_HOVER = "#1F2E36";
const BUTTON_TEXT_COLOR = "#FFFFFF";
const FONT_FAMILY = "'Play', sans-serif";

const Hero: React.FC = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                fontFamily: FONT_FAMILY,
            }}
        >
            {/* 🎥 Fondo */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -2,
                }}
            >
                {VIDEO_BG ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        src={VIDEO_SRC}
                    />
                ) : (
                    <img
                        src={IMAGE_BG}
                        alt="Hero Background"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                )}
            </div>

            {/* Overlay oscuro */}
            <div
                style={{
                    backgroundColor: OVERLAY_COLOR,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />

            {/* Contenido */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "0 3vw",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.2rem",
                        maxWidth: "600px",
                    }}
                >
                    <img
                        src={logo}
                        alt="SOFT - IA Logo"
                        style={{
                            width: "clamp(200px, 30vw, 400px)",
                            objectFit: "contain",
                        }}
                    />

                    <h1 style={{
                        color: TEXT_COLOR,
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: "bold",
                        lineHeight: 1.2,
                    }}>
                        Agencia De{" "}
                        <span style={{ color: HIGHLIGHT_COLOR }}>
                            Desarrollo y Diseño
                        </span>
                    </h1>

                    <p style={{
                        color: TEXT_COLOR,
                        fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                        lineHeight: 1.4,
                    }}>
                        Desde Nicaragua, diseñamos y desarrollamos soluciones digitales con un equipo que combina visión, tecnología y experiencia.
                    </p>

                    <a
                        href="#servicios"
                        style={{
                            background: BUTTON_BG,
                            color: BUTTON_TEXT_COLOR,
                            padding: "0.75rem 2rem",
                            borderRadius: "9999px",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            width: "fit-content",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = BUTTON_BG_HOVER)
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = BUTTON_BG)
                        }
                    >
                        Conocer Más
                    </a>
                </motion.div>
            </div>

            Si en el futuro agregas navegación aquí, puedes usar este bloque como referencia:
            <nav
                style={{
                    display: "flex", // Para alinear los elementos de navegación en fila
                    gap: "2rem",      // Espacio entre los elementos de navegación (modifica aquí)
                    padding: "1rem 2rem", // Espaciado interno del nav (modifica aquí)
                    fontSize: "1.2rem",   // Tamaño de fuente de los links (modifica aquí)
                    // Otros estilos que quieras modificar
                }}
            >
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Servicios</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
            </nav>
        </section>
    );
};

export default Hero;
