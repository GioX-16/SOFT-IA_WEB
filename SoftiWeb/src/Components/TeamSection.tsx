import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { useIsMobile } from "../hooks/useIsMobile";
import { teamMembers } from "../data/team";

const TeamSection: React.FC = () => {
  const isMobile = useIsMobile();

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0.2, 0.3, 1] },
    },
  };

  const cardVariants = (i: number): Variants => ({
    hidden: { y: 60, opacity: 0, scale: 0.85, rotate: -4 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  });

  return (
    <section
      id="team"
      style={{
        padding: isMobile ? "4rem 1rem" : "5rem 2rem",
        background: "linear-gradient(to right, #031527, #020507)",
        position: "relative",
        fontFamily: "'Play', sans-serif",
        overflow: "hidden",
      }}
    >
      <img
        src="/src/assets/Backgrounds/Vector Team.png"
        alt="Team Word Background"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "95%" : "80%",
          opacity: 10,
          zIndex: 0,
        }}
      />

      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          color: "#FFFFFF",
          fontWeight: "bold",
          marginBottom: "1rem",
          zIndex: 1,
          position: "relative",
          letterSpacing: "2px",
          textShadow: "0 4px 24px #4498C2AA",
        }}
      >
        TEAM WORK
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
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
            key={member.name}
            variants={cardVariants(index)}
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #4498C2AA" }}
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
              }}
              whileHover={{ opacity: 0 }}
            />
            <motion.img
              src={member.imageHover}
              alt={`${member.name} Hover`}
              style={{
                width: "calc(100% - 2rem)",
                height: "240px",
                objectFit: "cover",
                borderRadius: "15px",
                position: "absolute",
                top: "1rem",
                left: "1rem",
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
            />
            <h3 style={{ color: "#fff", marginTop: "1rem" }}>{member.name}</h3>
            <h2 style={{ color: "#4593C9", fontSize: "1.1rem" }}>{member.title}</h2>
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#4498C2")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            >
              HOJA DE VIDA
            </a>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={member.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaTiktok size={24} />
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
