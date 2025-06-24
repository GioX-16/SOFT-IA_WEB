import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ContactSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            value: "contact@soft-ia.com",
            link: "mailto:contact@soft-ia.com"
        },
        {
            icon: "📱",
            title: "WhatsApp",
            value: "+57 300 123 4567",
            link: "https://wa.me/573001234567"
        },
        {
            icon: "📍",
            title: "Ubicación",
            value: "Bogotá, Colombia",
            link: "#"
        }
    ];

    const socialLinks = [
        { name: "Instagram", icon: "📸", url: "https://instagram.com/soft-ia" },
        { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/company/soft-ia" },
        { name: "GitHub", icon: "🐙", url: "https://github.com/soft-ia" },
        { name: "Twitter", icon: "🐦", url: "https://twitter.com/soft-ia" }
    ];

    return (
        <section
            id="contact"
            style={{
                padding: "4rem 2rem",
                background: "linear-gradient(to right, #031527, #020507)",
                fontFamily: "'Play', sans-serif",
                color: "#fff",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#E9ECF0"
                }}
            >
                Contáctanos
            </motion.h2>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                    textAlign: "center",
                    fontSize: "1.1rem",
                    color: "#B8C5D1",
                    marginBottom: "3rem",
                    maxWidth: "600px",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                ¿Tienes un proyecto en mente? ¡Conversemos sobre cómo podemos ayudarte!
            </motion.p>

            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "3rem",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                {/* Información de contacto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                        color: "#E9ECF0"
                    }}>
                        Información de Contacto
                    </h3>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                target={info.link.startsWith('http') ? "_blank" : "_self"}
                                rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "1rem",
                                    background: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "15px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    textDecoration: "none",
                                    color: "#fff",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <span style={{ fontSize: "2rem" }}>{info.icon}</span>
                                <div>
                                    <div style={{
                                        fontWeight: "bold",
                                        color: "#E9ECF0",
                                        marginBottom: "0.25rem"
                                    }}>
                                        {info.title}
                                    </div>
                                    <div style={{ color: "#B8C5D1" }}>
                                        {info.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Redes sociales */}
                    <div style={{ marginTop: "2rem" }}>
                        <h4 style={{
                            fontSize: "1.3rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: "#E9ECF0"
                        }}>
                            Síguenos
                        </h4>
                        <div style={{
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap"
                        }}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.75rem 1rem",
                                        background: "#4498C2",
                                        borderRadius: "25px",
                                        textDecoration: "none",
                                        color: "#fff",
                                        fontWeight: "600",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <span style={{ fontSize: "1.2rem" }}>{social.icon}</span>
                                    {social.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Formulario de contacto */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                        color: "#E9ECF0"
                    }}>
                        Envíanos un Mensaje
                    </h3>
                    
                    <form style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    }}>
                        <div>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    outline: "none"
                                }}
                            />
                        </div>
                        
                        <div>
                            <input
                                type="email"
                                placeholder="Tu email"
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    outline: "none"
                                }}
                            />
                        </div>
                        
                        <div>
                            <textarea
                                placeholder="Tu mensaje"
                                rows={5}
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    outline: "none",
                                    resize: "vertical",
                                    fontFamily: "'Play', sans-serif"
                                }}
                            />
                        </div>
                        
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: "1rem 2rem",
                                background: "linear-gradient(45deg, #4498C2, #336178)",
                                border: "none",
                                borderRadius: "25px",
                                color: "#fff",
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}
                        >
                            Enviar Mensaje
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection; 