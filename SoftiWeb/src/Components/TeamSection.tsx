import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "WILHELM REYES",
        title: "Ingeniero de Sistemas",
        cvLink: "https://drive.google.com/your-link-wilhelm",
        imageDefault: "/src/assets/img/Cards/TeamCards/CardW1.png",
        imageHover: "/src/assets/img/Cards/TeamCards/CardW2.png",
        socials: {
            instagram: "#",
            tiktok: "#",
            linkedin: "#",
        },
    },
    {
        name: "GEOVANNY SANDINO",
        title: "Ingeniero de Sistemas",
        cvLink: "https://drive.google.com/your-link-geovanny",
        imageDefault: "/src/assets/img/Cards/TeamCards/CardG1.png",
        imageHover: "/src/assets/img/Cards/TeamCards/CardG2.png",
        socials: {
            instagram: "#",
            tiktok: "#",
            linkedin: "#",
        },
    },
    {
        name: "AGUSTIN AMAYA",
        title: "Ingeniero de Sistemas",
        cvLink: "https://drive.google.com/your-link-agustin",
        imageDefault: "/src/assets/img/Cards/TeamCards/CardA1.png",
        imageHover: "/src/assets/img/Cards/TeamCards/CardA2.png",
        socials: {
            instagram: "#",
            tiktok: "#",
            linkedin: "#",
        },
    },
    {
        name: "KENNETH TELLER",
        title: "Ingeniero de Sistemas",
        cvLink: "https://drive.google.com/your-link-kenneth",
        imageDefault: "/src/assets/img/Cards/TeamCards/CardK1.png",
        imageHover: "/src/assets/img/Cards/TeamCards/Cardk2.png",
        socials: {
            instagram: "#",
            tiktok: "#",
            linkedin: "#",
        },
    },
];

const TeamSection: React.FC = () => {
    return (
        <section
            style={{
                padding: "5rem 2rem",
                background: "linear-gradient(to right, #1A1B1C, #4498C2)", // 🎨 Gradiente editable
                position: "relative",
                fontFamily: "'Play', sans-serif",
                overflow: "hidden",
            }}
        >
            {/* 🖼 Imagen PNG superpuesta con opacidad */}
            <img
                src="/src/assets/Backgrounds/Vector Team.png"
                alt="Team Word Background"
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    opacity: 0.1, // 👁 Opacidad editable
                    zIndex: 0,
                }}
            />

            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2.2rem",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    zIndex: 1,
                    position: "relative",
                }}
            >
                TEAM WORK
            </h2>

            {/* 🧑‍🤝‍🧑 Cards del equipo */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 300px))",
                    gap: "2rem",
                    marginTop: "4rem",
                    zIndex: 1,
                    position: "relative",
                    justifyContent: "center",
                }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            padding: "1rem",
                            borderRadius: "20px",
                            textAlign: "center",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                            position: "relative",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(5px)",
                        }}
                    >
                        <motion.img
                            src={member.imageDefault}
                            alt={member.name}
                            style={{
                                width: "100%",
                                height: "240px",
                                objectFit: "cover",
                                borderRadius: "15px",
                                transition: "all 0.5s ease-in-out",
                            }}
                            whileHover={{ opacity: 0 }}
                        />
                        <motion.img
                            src={member.imageHover}
                            alt={`${member.name} Hover`}
                            style={{
                                width: "100%",
                                height: "240px",
                                objectFit: "cover",
                                borderRadius: "15px",
                                position: "absolute",
                                top: "1rem",
                                left: "1rem",
                                right: "1rem",
                                transition: "all 0.5s ease-in-out",
                                opacity: 0,
                            }}
                            whileHover={{ opacity: 1 }}
                        />
                        <h3 style={{ color: "#fff", marginTop: "1rem" }}>{member.name}</h3>
                        <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{member.title}</p>
                        <a
                            href={member.cvLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                padding: "0.5rem 1.5rem",
                                borderRadius: "9999px",
                                background: "#FFFFFF",
                                color: "#0F172A",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "background 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#4498C2")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
                        >
                            HOJA DE VIDA
                        </a>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                                <FaInstagram size={24} />
                            </a>
                            <a href={member.socials.tiktok} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                                <FaTiktok size={24} />
                            </a>
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
