import { motion } from "framer-motion";
import logo from "../assets/Logos/Logo SOFT.png"; 
import React from "react";

// 🎨 Variables editables
const VIDEO_BG = false; // ✅ Cambiar esto a true si se usa un video de fondo
const VIDEO_SRC = "/src/assets/Videos/Back_BG_Soft.mp4"; //   Ruta del video
const IMAGE_BG = "/src/assets/Backgrounds/softia3uni.jpg"; //  Ruta de imagen

const OVERLAY_COLOR = "rgba(0, 0, 0, 0.5)"; // Fondo translúcido azul oscuro
const TEXT_COLOR = "#FFFFFF";
const HIGHLIGHT_COLOR = "#38BDF8"; // Color azul del diseño
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
            {/* 🎥 Video o Imagen de fondo */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
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

            {/* Overlay */}
            <div
                style={{
                    backgroundColor: OVERLAY_COLOR,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                }}
            />

            {/* Contenido */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "0 3rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.1rem",
                        maxWidth: "500px",
                    }}
                >
                    <img
                        src={logo}
                        alt="SOFT - IA Logo"
                        style={{ width: "400px", objectFit: "contain" }}
                    />

                    <h1 style={{ color: TEXT_COLOR, fontSize: "2.5rem", fontWeight: "bold" }}>
                        Agencia De <span style={{ color: HIGHLIGHT_COLOR }}>Desarrollo y Diseño</span>
                    </h1>

                    <p style={{ color: TEXT_COLOR, fontSize: "1rem", lineHeight: 1 }}>
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
                            textDecoration: "none",
                            width: "fit-content",
                            transition: "background 0.3s ease",
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
        </section>
    );
};

export default Hero;
