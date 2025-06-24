import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const projects = [
        {
            title: "E-commerce Platform",
            description: "Plataforma completa de comercio electrónico con React y Node.js",
            image: "/src/assets/img/ECCOMERCE.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"]
        },
        {
            title: "Web3 Application",
            description: "Aplicación descentralizada con integración blockchain",
            image: "/src/assets/img/WEB3.png",
            technologies: ["Solidity", "Web3.js", "React", "Ethereum"]
        },
        {
            title: "UX/UI Design System",
            description: "Sistema de diseño completo para aplicaciones móviles y web",
            image: "/src/assets/img/UX.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"]
        }
    ];

    return (
        <section
            id="portfolio"
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
                    marginBottom: "3rem",
                    color: "#E9ECF0"
                }}
            >
                Nuestros Proyectos
            </motion.h2>

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
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "20px",
                            padding: "1.5rem",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        <div style={{
                            width: "100%",
                            height: "200px",
                            background: "linear-gradient(45deg, #4498C2, #336178)",
                            borderRadius: "15px",
                            marginBottom: "1rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "3rem"
                        }}>
                            🚀
                        </div>
                        
                        <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginBottom: "0.5rem",
                            color: "#E9ECF0"
                        }}>
                            {project.title}
                        </h3>
                        
                        <p style={{
                            color: "#B8C5D1",
                            marginBottom: "1rem",
                            lineHeight: "1.6"
                        }}>
                            {project.description}
                        </p>
                        
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem"
                        }}>
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    style={{
                                        background: "#4498C2",
                                        color: "#fff",
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "15px",
                                        fontSize: "0.8rem",
                                        fontWeight: "600"
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default PortfolioSection; 