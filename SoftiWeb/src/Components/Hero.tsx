// Hero.tsx
import { motion } from "framer-motion";
import logo from "../assets/Logos/Logo SOFT.png";
import React, { useEffect, useState } from "react";

// 🎥 Configuración
const VIDEO_BG = true;
const VIDEO_SRC = "/src/assets/Videos/Background_Final.mp4";
const IMAGE_BG = "/src/assets/Backgrounds/StockCake-Coding Team Collaborates_1749771264.jpg";

// 🎨 Variables de estilo
const OVERLAY_COLOR = "rgba(0, 0, 0, 0.6)";
const TEXT_COLOR = "#FFFFFF";
const HIGHLIGHT_COLOR = "#38BDF8";
const BUTTON_BG = "#38BDF8";
const BUTTON_BG_HOVER = "#1F2E36";
const BUTTON_TEXT_COLOR = "#FFFFFF";
const FONT_FAMILY = "'Play', sans-serif";

const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
/*     const [videoLoaded, setVideoLoaded] = useState(false); */

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            style={{
                position: "relative",
                width: "100vw",
                minHeight: "100vh",
                overflow: "hidden",
                fontFamily: FONT_FAMILY,
                display: "flex",
                flexDirection: "column",
                background: isMobile
                    ? "linear-gradient(to right, #1A1B1C, #4498C2)"
                    : undefined,
            }}
        >
            {/* VIDEO O IMAGEN COMO BLOQUE EN MÓVIL */}
            {isMobile && (
                <div
                    style={{
                        width: "100%",
                        height: "400px",
                        overflow: "hidden",
                        position: "relative",
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
                        <>
                            <img
                                src={IMAGE_BG}
                                alt="Hero Background"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: OVERLAY_COLOR,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 1,
                                }}
                            />
                        </>
                    )}
                </div>
            )}

            {/* VIDEO COMO FONDO EN ESCRITORIO */}
            {!isMobile && (
                <>
                    {VIDEO_BG ? (
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
                            <div
                                style={{
                                    backgroundColor: OVERLAY_COLOR,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                    ) : (
                        <>
                            <img
                                src={IMAGE_BG}
                                alt="Hero Background"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    zIndex: -2,
                                }}
                            />
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
                        </>
                    )}
                </>
            )}

            {/* CONTENIDO PRINCIPAL */}
            <div
                style={{
                    zIndex: 2,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "center" : "flex-start",
                    alignItems: isMobile ? "center" : "flex-start",
                    padding: isMobile ? "1rem 1.5rem" : "15rem 5vw 2rem 5vw",
                    maxWidth: "1200px",
                    margin: isMobile ? "0 auto" : "0",
                    marginTop: isMobile ? "-2.5rem" : "0",
                    textAlign: isMobile ? "center" : "left",
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
                        maxWidth: "600px",
                        alignItems: isMobile ? "center" : "flex-start",
                    }}
                >
                    <img
                        src={logo}
                        alt="SOFT - IA Logo"
                        style={{
                            width: "clamp(150px, 30vw, 300px)",
                            objectFit: "contain",
                        }}
                    />

                    <h1
                        style={{
                            color: TEXT_COLOR,
                            fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
                            fontWeight: "bold",
                            lineHeight: 1.2,
                        }}
                    >
                        Agencia De{" "}
                        <span style={{ color: HIGHLIGHT_COLOR }}>
                            Desarrollo y Diseño
                        </span>
                    </h1>

                    <p
                        style={{
                            color: TEXT_COLOR,
                            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                            lineHeight: 1.5,
                        }}
                    >
                        Desde Nicaragua, diseñamos y desarrollamos soluciones digitales con
                        un equipo que combina visión, tecnología y experiencia.
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
        </section>
    );
};

export default Hero;
