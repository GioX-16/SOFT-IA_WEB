import React from "react";

const TeamSection: React.FC = () => {
    return (
        <section
            id="team"
            style={{
                minHeight: "60vh",
                padding: "4rem 2rem",
                background: "linear-gradient(to right, #232526, #414345)",
                color: "#fff",
                fontFamily: "'Play', sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>Nuestro Equipo</h2>
            <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
                Aquí puedes presentar a los miembros de tu equipo, sus roles y una breve descripción.
            </p>
        </section>
    );
};

export default TeamSection; 