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
            {/* Fondo */}
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
                    height: "calc(100vh - 80px)",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%"
                }}>
                    {/* Columna izquierda */}
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
                        <div style={contactBoxStyle}>
                            <FaMapMarkerAlt size={38} color="#00FF47" style={{ marginBottom: 10 }} />
                            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>Managua<br />Nicaragua</div>
                        </div>
                        <a href="https://wa.me/50588888888" target="_blank" rel="noopener noreferrer" style={contactBoxStyle}>
                            <FaWhatsapp size={38} color="#00FF47" style={{ marginBottom: 10 }} />
                            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>
                                Escribenos A<br />Nuestro<br />Whatsapp
                            </div>
                        </a>
                    </div>

                    {/* Columna derecha */}
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
                            padding: "1.5rem",
                            width: "100%",
                            maxWidth: 600,
                            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)"
                        }}>
                            <h2 style={{
                                fontSize: "2rem",
                                fontWeight: 900,
                                letterSpacing: 1,
                                textTransform: "uppercase",
                                textAlign: "left",
                                marginBottom: "1rem"
                            }}>
                                CONTACTANOS
                            </h2>
                            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                    <input type="text" placeholder="Firs Name" style={inputStyleCompact} />
                                    <input type="text" placeholder="Phone" style={inputStyleCompact} />
                                    <input type="text" placeholder="Company" style={inputStyleCompact} />
                                    <input type="email" placeholder="Email" style={inputStyleCompact} />
                                </div>
                                <textarea placeholder="Message" rows={5} style={{ ...inputStyleCompact, resize: "vertical", gridColumn: "1/3" }} />
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <button type="submit" style={buttonStyle}>
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
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 2vw",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(0,0,0,0.13)",
                fontSize: 14
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <img src="/src/assets/Logos/logoBYN.png" alt="SOFT-IA Logo" style={{ height: 28 }} />
                    <span style={{ fontWeight: 700, letterSpacing: 2 }}>SOFT - IA</span>
                </div>
                <div style={{ color: "#ccc", fontSize: 13, flex: 1, textAlign: "center" }}>
                    © 2025 Soft-ia | All Rights Reserved
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                    <a href="#" style={iconLinkStyleCompact}><FaFacebookF /></a>
                    <a href="#" style={iconLinkStyleCompact}><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/geovanny-sandino-137691273/" style={iconLinkStyleCompact}><FaLinkedinIn /></a>
                    <a href="#" style={iconLinkStyleCompact}><FaTelegramPlane /></a>
                    <a href="https://www.instagram.com/sandi.giox/" style={iconLinkStyleCompact}><FaInstagram /></a>
                </div>
            </footer>

            {/* Estilos responsivos */}
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

                @media (max-width: 768px) {
                    #contact h2 {
                        font-size: 1.5rem !important;
                        text-align: center !important;
                    }

                    #contact form {
                        padding: 0.5rem !important;
                    }

                    footer {
                        flex-direction: column !important;
                        text-align: center !important;
                    }

                    footer div:nth-child(2) {
                        order: 3;
                        margin-top: 1rem;
                    }

                    footer div:last-child {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

// Reutilizables
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
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)"
};

const buttonStyle: React.CSSProperties = {
    background: "#fff",
    color: "#222",
    fontWeight: 700,
    border: "none",
    borderRadius: 10,
    padding: "0.6rem 1.5rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)"
};

const contactBoxStyle: React.CSSProperties = {
    background: "rgba(0,0,0,0.32)",
    borderRadius: 16,
    padding: "1.2rem 1rem",
    width: "100%",
    maxWidth: 250,
    textAlign: "center",
    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
    textDecoration: "none",
    transition: "background 0.2s",
    display: "block"
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
