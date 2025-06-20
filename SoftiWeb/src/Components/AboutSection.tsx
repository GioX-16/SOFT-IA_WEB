import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import aboutImage from "../assets/img/Presentacion Landing.png"; 

const tags = [
    "Developers",
    "Soft. Architect",
    "ux/ui Designer",
    "Consulting",
    "Analist",
];

const AboutUs: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="about"
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "4rem 2rem",
                background: "linear-gradient(to right, #1A1B1C, #4498C2)",
                fontFamily: "'Play', sans-serif",
                color: "#fff",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "2rem",
                    marginTop: "10rem",
                }}
            >
                ¿Quienes Somos?
            </h2>

            {/* Parte central */}
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5rem",
                }}
            >
                {/* 📸 Imagen principal única */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{
                        
                        maxWidth: "600px",
                        borderRadius: "20px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={aboutImage}
                        alt="About Soft-IA"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "10px",
                        }}
                    />
                </motion.div>

                {/* 📃 Texto descriptivo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        flex: 1,
                        textAlign: isMobile ? "center" : "left",
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                        maxWidth: "500px",
                    }}
                >
                    <p>
                        Somos una miniempresa de desarrollo de software enfocada en crear
                        soluciones digitales eficientes, funcionales y centradas en las
                        necesidades reales de nuestros clientes. Combinamos talento, visión
                        estratégica y tecnología para transformar ideas en productos de alto
                        impacto. Nuestro equipo trabaja con compromiso, innovación y enfoque
                        colaborativo para garantizar resultados que marquen la diferencia.
                    </p>
                </motion.div>
            </div>

            {/* 🔖 Tags */}
            <div
                style={{
                    marginTop: "7rem",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, auto)",
                    gap: "2rem",
                    justifyContent: "center",
                }}
            >
                {tags.map((tag) => (
                    <motion.div
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{
                            padding: "0.7rem 1rem",
                            border: "2px solid #ffffff66",
                            borderRadius: "18px",
                            textAlign: "center",
                            fontWeight: 600,
                            cursor: "pointer",
                            color: "#fff",
                            transition: "background 0.3s",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#4498C2")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                        }
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
