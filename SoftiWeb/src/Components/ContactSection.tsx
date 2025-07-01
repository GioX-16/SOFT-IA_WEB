import { FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaGithub, FaLinkedinIn, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const ContactSection: React.FC = () => {
    return (
        <section
            id="contact"
            style={{
                position: "relative",
                padding: "0",
                minHeight: "100vh",
                width: "100%",
                overflow: "hidden",
                fontFamily: "'Play', sans-serif",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            {/* Capa de fondo con opacidad */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('../src/assets/Backgrounds/Contact_Section.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.5,
                    zIndex: 0
                }}
            />
            {/* Contenido principal */}
            <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: "0",
                    height: "calc(100vh - 80px)",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%"
                }}>
                    {/* Columna Izquierda: Info de contacto */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                        borderRight: "2px solid rgba(255,255,255,0.15)",
                        padding: "0 1rem",
                        height: "100%"
                    }}>
                        <div style={{
                            background: "rgba(0,0,0,0.32)",
                            borderRadius: 16,
                            padding: "1.2rem 1rem 1rem 1rem",
                            width: "100%",
                            maxWidth: 250,
                            textAlign: "center",
                            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)"
                        }}>
                            <FaMapMarkerAlt size={38} color="#00FF47" style={{ marginBottom: 10 }} />
                            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 2, lineHeight: 1.1 }}>Managua<br/>Nicaragua</div>
                        </div>
                        <a
                            href="https://wa.me/50588888888" // Cambia el número por el real
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: "rgba(0,0,0,0.32)",
                                borderRadius: 16,
                                padding: "1.2rem 1rem 1rem 1rem",
                                width: "100%",
                                maxWidth: 250,
                                textAlign: "center",
                                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
                                textDecoration: "none",
                                transition: "background 0.2s, box-shadow 0.2s",
                                display: "block"
                            }}
                            onMouseOver={e => (e.currentTarget.style.background = 'rgba(0,255,71,0.13)')}
                            onMouseOut={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.32)')}
                        >
                            <FaWhatsapp size={38} color="#00FF47" style={{ marginBottom: 10 }} />
                            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 2, lineHeight: 1.1 }}>
                                Escribenos A<br/>Nuestro<br/>Whatsapp
                            </div>
                        </a>
                    </div>
                    {/* Columna Derecha: Formulario */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 1rem",
                        height: "100%"
                    }}>
                        <div style={{
                            background: "rgba(0,0,0,0.32)",
                            borderRadius: 16,
                            padding: "1.2rem 1.2rem 1rem 1.2rem",
                            width: "100%",
                            maxWidth: 600,
                            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)"
                        }}>
                            <h2 style={{
                                fontSize: "2rem",
                                fontWeight: 900,
                                letterSpacing: 1,
                                textTransform: "uppercase",
                                textAlign: "right",
                                marginBottom: "0.5rem",
                                width: "100%"
                            }}>
                                CONTACTANOS
                            </h2>
                            <form style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.8rem"
                            }}>
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "1rem"
                                }}>
                                    <input type="text" placeholder="Firs Name" style={inputStyleCompact} />
                                    <input type="text" placeholder="Phone" style={inputStyleCompact} />
                                    <input type="text" placeholder="Company" style={inputStyleCompact} />
                                    <input type="email" placeholder="Email" style={inputStyleCompact} />
                                </div>
                                <textarea placeholder="Message" rows={4} style={{ ...inputStyleCompact, resize: "vertical", minHeight: 70, gridColumn: "1/3" }} />
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button type="submit" style={{
                                        background: "#fff",
                                        color: "#222",
                                        fontWeight: 700,
                                        border: "none",
                                        borderRadius: 10,
                                        padding: "0.6rem 1.5rem",
                                        fontSize: "1.2rem",
                                        cursor: "pointer",
                                        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)"
                                    }}>
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.7rem 2vw 0.7rem 2vw",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(0,0,0,0.13)",
                fontSize: 15
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <img src="/src/assets/Logos/logoBYN.png" alt="SOFT-IA Logo" style={{ height: 28, marginRight: 7 }} />
                    <span style={{ fontWeight: 700, letterSpacing: 2 }}>SOFT - IA</span>
                </div>
                <div style={{ color: "#ccc", fontSize: 13 }}>
                    © 2025 All Rights Reserved
                </div>
                <div style={{ color: "#ccc", fontSize: 13 }}>
                    © 2025 Soft-ia
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                    <a href="#" style={iconLinkStyleCompact}><FaFacebookF /></a>
                    <a href="#" style={iconLinkStyleCompact}><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/geovanny-sandino-137691273/" style={iconLinkStyleCompact}><FaLinkedinIn /></a>
                    <a href="#" style={iconLinkStyleCompact}><FaTelegramPlane /></a>
                    <a href="https://www.instagram.com/sandi.giox/" style={iconLinkStyleCompact}><FaInstagram /></a>
                </div>
            </footer>
            {/* Responsive styles */}
            <style>{`
                html, body { overflow-x: hidden; }
                @media (max-width: 900px) {
                    #contact > div > div {
                        grid-template-columns: 1fr !important;
                        height: auto !important;
                    }
                    #contact > div > div > div:first-child {
                        border-right: none !important;
                        border-bottom: 2px solid rgba(255,255,255,0.12) !important;
                        padding-bottom: 1.2rem !important;
                        margin-bottom: 1.2rem !important;
                    }
                }
                @media (max-width: 600px) {
                    #contact h2 {
                        font-size: 1.2rem !important;
                    }
                    #contact form {
                        padding: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

const inputStyleCompact: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    background: "#fff",
    border: "none",
    borderRadius: 8,
    color: "#222",
    fontSize: "0.98rem",
    fontWeight: 500,
    outline: "none",
    marginBottom: 0,
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)"
};

const iconLinkStyleCompact: React.CSSProperties = {
    color: "#fff",
    fontSize: 18,
    background: "rgba(255,255,255,0.08)",
    borderRadius: "50%",
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
    textDecoration: "none"
};

export default ContactSection; 