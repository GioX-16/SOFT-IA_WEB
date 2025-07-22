import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
        },
        {
            title: "Plataforma Repher",
            description: "Web Completa para la Plataforma de Repher, Diseño y Desarrollo.",
            image: "/src/assets/img/Portfolio_img/amaya_Projects.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/repher"
        },
        {
            title: "Plataforma Repher",
            description: "Web Completa para la Plataforma de Repher, Diseño y Desarrollo.",
            image: "/src/assets/img/Portfolio_img/amaya_Projects.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/repher"
        },
        {
            title: "Plataforma Repher",
            description: "Web Completa para la Plataforma de Repher, Diseño y Desarrollo.",
            image: "/src/assets/img/Portfolio_img/amaya_Projects.png",
            technologies: ["Figma", "Adobe XD", "React Native", "Framer"],
            link: "https://ejemplo.com/repher"
        }
    ];

    const hoverGradient = "linear-gradient(140deg, #1F2E36, #4593C9)";

    // Variantes para animaciones
    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.4, 0.2, 0.3, 1] } },
    };
    const cardVariants = (i: number): Variants => ({
        hidden: { opacity: 0, y: 60, scale: 0.85, rotate: -6 },
        visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.7, delay: i * 0.13, type: "spring", stiffness: 60, damping: 12 } },
    });


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
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    textAlign: "center",
                    fontSize: "2.2rem",
                    fontWeight: "bold",
                    marginBottom: "3rem",
                    color: "#E9ECF0",
                    letterSpacing: "2px",
                    textShadow: "0 4px 24px #4593C9AA"
                }}
            >
                Nuestros Proyectos
            </motion.h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "3rem",
                    maxWidth: "1000px",
                    margin: "0 auto"
                }}
            >
                <AnimatePresence>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants(index)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.06, rotate: 2, boxShadow: "0 8px 32px #4593C9AA" }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                            background: hoveredCard === index ? hoverGradient : "rgba(255, 255, 255, 0.1)",
                            borderRadius: "16px",
                            padding: 0,
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            boxShadow:
                                hoveredCard === index
                                    ? "0 6px 24px rgba(0, 0, 0, 0.4)"
                                    : "0 2px 12px 0 rgba(68,152,194,0.10)",
                            transition: "all 0.4s cubic-bezier(.4,2,.3,1)"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "150px",
                                background: "linear-gradient(45deg,rgb(226, 226, 226),rgb(235, 235, 235))",
                                borderTopLeftRadius: "16px",
                                borderTopRightRadius: "16px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    display: "block",
                                    margin: "auto"
                                }}
                            />
                        </div>
                        <div
                            style={{
                                background: hoveredCard === index ? "transparent" : "#E9ECF0",
                                borderBottomLeftRadius: "16px",
                                borderBottomRightRadius: "16px",
                                padding: "1rem 0.8rem 0.8rem 0.8rem",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                minHeight: "140px",
                                transition: "background 0.4s ease"
                            }}
                        >
                            <div>
                                <h3
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        marginBottom: "0.4rem",
                                        color: hoveredCard === index ? "#fff" : "#222",
                                        transition: "color 0.4s"
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    style={{
                                        color: hoveredCard === index ? "#ddd" : "#444",
                                        marginBottom: "0.7rem",
                                        lineHeight: "1.4",
                                        transition: "color 0.4s"
                                    }}
                                >
                                    {project.description}
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "0.4rem",
                                        marginBottom: "0.7rem"
                                    }}
                                >
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            style={{
                                                background: hoveredCard === index ? "#0B0B0B" : "#4498C2",
                                                color: "#fff",
                                                padding: "0.18rem 0.6rem",
                                                borderRadius: "12px",
                                                fontSize: "0.7rem",
                                                fontWeight: "600",
                                                transition: "background 0.4s"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-block",
                                        marginTop: "0.3rem",
                                        padding: "0.5rem 1.1rem",
                                        borderRadius: "8px",
                                        background: hoveredCard === index ? "#fff" : "#4593C9", 
                                        color: hoveredCard === index ? "#000" : "#fff",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        textAlign: "center",
                                        transition: "all 0.4s ease"
                                    }}
                                >
                                    Ver Proyecto.
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PortfolioSection;
