import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import aboutImage from "../assets/img/Presentacion Landing.png"; 
import Header from "./Header";

const tags = [
    "Desarrolladores",
    "Arquitecto Web3",
    "Diseñadores UX/UI",
    "Consultas",
    "Analistas",
    "Control de Calidad",
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
                background: "linear-gradient(to right, #031527, #020507)",
                fontFamily: "'Play', sans-serif",
                color: "#fff",
            }}
        >
            {isMobile && <Header />}
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "1.8rem",
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
                    initial={{ opacity: 0, x: -100, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
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
                    marginTop: "3rem",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(6, auto)",
                    gap: "2rem",
                    justifyContent: "center",
                }}
            >
                {tags.map((tag, idx) => (
                    <motion.div
                        key={tag}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.12, ease: "easeOut" }}
                        viewport={{ once: true }}
                        style={{
                            padding: "0.7rem 1rem",
                            border: "1px solid #E9ECF0",
                            borderRadius: "18px",
                            textAlign: "center",
                            fontWeight: 600,
                            cursor: "pointer",
                            color: "#E9ECF0",
                            transition: "background 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#256fa1";
                            e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "Transparent";
                            e.currentTarget.style.color = "#E9ECF0";
                        }}
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
