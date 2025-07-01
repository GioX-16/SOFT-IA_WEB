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
            title: "App Banco Lafise",
            description: "Este Diseño fue Para una Prueba de Reclutamiento Para Banco LAFISE.",
            image: "/src/assets/img/Portfolio_img/App_lafise_Practice.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "https://ejemplo.com/lafise"
        },
        {
            title: "Plataforma Groveto",
            description: "Plataforma para el Reclutamiento de Talentos",
            image: "/src/assets/img/Portfolio_img/groveto.png",
            technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
            link: "https://ejemplo.com/groveto"
        },
        {
            title: "Gnomo Studio",
            description: "Desarrollo Web Multi pagina y Responsive",
            image: "/src/assets/img/Portfolio_img/GNOMO_HERO.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/gnomo"
        },
        {
            title: "Diseño de Marca SOFT-IA",
            description: "Diseño, Prototipo de la Web SOFT-IA",
            image: "/src/assets/img/Portfolio_img/MARCA_SOFTIA.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/softia"
        },
        {
            title: "Eccomerce GX STORE",
            description: "Eccomerce o web de comercio basica",
            image: "/src/assets/img/Portfolio_img/Eccomerce.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/gxstore"
        },
        {
            title: "Plataforma Repher",
            description: "Web Completa para la Plataforma de Repher, Diseño y Desarrollo.",
            image: "/src/assets/img/Portfolio_img/amaya_Projects.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/repher"
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
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "3rem",
                    color: "#E9ECF0"
                }}
            >
                Nuestros Proyectos
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1.2rem",
                    maxWidth: "1000px",
                    margin: "0 auto"
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.12 }}
                        viewport={{ once: true }}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "16px",
                            padding: 0,
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            boxShadow: "0 2px 12px 0 rgba(68,152,194,0.10)",
                            transition: "background 0.4s, box-shadow 0.4s, color 0.4s"
                        }}
                        whileHover={{
                            background: "#1e293b",
                            color: "#fff",
                            boxShadow: "0 4px 24px 0 #1e293b"
                        }}
                    >
                        <div style={{
                            width: "100%",
                            height: "150px",
                            background: "linear-gradient(45deg,rgb(226, 226, 226),rgb(235, 235, 235))",
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden"
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    display: "block",
                                    margin: "auto",
                                    borderRadius: "0px"
                                }}
                            />
                        </div>
                        <div style={{
                            background: "#F7FAFC",
                            borderBottomLeftRadius: "16px",
                            borderBottomRightRadius: "16px",
                            padding: "1rem 0.8rem 0.8rem 0.8rem",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: "140px",
                            transition: "background 0.4s, color 0.4s"
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    marginBottom: "0.4rem",
                                    color: "#222",
                                    transition: "color 0.4s"
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    color: "#444",
                                    marginBottom: "0.7rem",
                                    lineHeight: "1.4",
                                    transition: "color 0.4s"
                                }}>
                                    {project.description}
                                </p>
                                <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.4rem",
                                    marginBottom: "0.7rem"
                                }}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            style={{
                                                background: "#4498C2",
                                                color: "#fff",
                                                padding: "0.18rem 0.6rem",
                                                borderRadius: "12px",
                                                fontSize: "0.7rem",
                                                fontWeight: "600"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-start"
                            }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-block",
                                        marginTop: "0.3rem",
                                        padding: "0.5rem 1.1rem",
                                        borderRadius: "8px",
                                        background: "#5CA6E8",
                                        color: "#fff",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        textAlign: "center",
                                        transition: "background 0.5s ease"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(90deg, #0B0B0B 0%, #4498C2 100%)"}
                                >
                                    Ver Proyecto.
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection; 