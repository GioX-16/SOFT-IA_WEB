import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ServicesSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const services = [
        {
            icon: "💻",
            title: "Desarrollo Web",
            description: "Sitios web modernos y responsivos con las últimas tecnologías",
            features: ["React/Next.js", "TypeScript", "SEO Optimizado", "Performance"]
        },
        {
            icon: "📱",
            title: "Desarrollo Móvil",
            description: "Aplicaciones móviles nativas y multiplataforma",
            features: ["React Native", "Flutter", "iOS/Android", "App Store"]
        },
        {
            icon: "🎨",
            title: "Diseño UX/UI",
            description: "Interfaces intuitivas y experiencias de usuario excepcionales",
            features: ["Figma", "Prototipado", "User Research", "Design Systems"]
        },
        {
            icon: "🔗",
            title: "Web3 & Blockchain",
            description: "Soluciones descentralizadas y aplicaciones blockchain",
            features: ["Smart Contracts", "DeFi", "NFTs", "DApps"]
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            description: "Infraestructura escalable y despliegue automatizado",
            features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"]
        },
        {
            icon: "🤖",
            title: "Inteligencia Artificial",
            description: "Soluciones inteligentes con machine learning y IA",
            features: ["Machine Learning", "Chatbots", "Data Analysis", "Automation"]
        }
    ];

    return (
        <section
            id="services"
            style={{
                padding: "4rem 2rem",
                background: "linear-gradient(to right,  #031527, #020507)",
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
                Nuestros Servicios
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
                Ofrecemos soluciones tecnológicas integrales para transformar tu negocio
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem",
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "20px",
                            padding: "2rem",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <div style={{
                            fontSize: "3rem",
                            marginBottom: "1rem",
                            textAlign: "center"
                        }}>
                            {service.icon}
                        </div>
                        
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            color: "#E9ECF0",
                            textAlign: "center"
                        }}>
                            {service.title}
                        </h3>
                        
                        <p style={{
                            color: "#B8C5D1",
                            marginBottom: "1.5rem",
                            lineHeight: "1.6",
                            textAlign: "center"
                        }}>
                            {service.description}
                        </p>
                        
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem"
                        }}>
                            {service.features.map((feature, featureIndex) => (
                                <div
                                    key={featureIndex}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        color: "#E9ECF0",
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    <span style={{
                                        color: "#4498C2",
                                        fontSize: "1.2rem"
                                    }}>✓</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection; 