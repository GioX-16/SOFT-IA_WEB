import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";
import { projects } from "../data/projects";

const PortfolioSection: React.FC = () => {
  const isMobile = useIsMobile();

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.4, 0.2, 0.3, 1] },
    },
  };

  const cardVariants = (i: number): Variants => ({
    hidden: { opacity: 0, y: 60, scale: 0.85, rotate: -6 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.13,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
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
        justifyContent: "center",
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
          textShadow: "0 4px 24px #4593C9AA",
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
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.06,
              rotate: 2,
              boxShadow: "0 8px 32px #4593C9AA",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 2px 12px 0 rgba(68,152,194,0.10)",
              transition: "all 0.4s cubic-bezier(.4,2,.3,1)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "150px",
                background: "linear-gradient(45deg, rgb(226, 226, 226), rgb(235, 235, 235))",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
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
                  margin: "auto",
                }}
              />
            </div>
            <div
              style={{
                background: "#E9ECF0",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                padding: "1rem 0.8rem 0.8rem 0.8rem",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "140px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "0.4rem",
                    color: "#222",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "#444",
                    marginBottom: "0.7rem",
                    lineHeight: "1.4",
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "0.7rem",
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: "#4498C2",
                        color: "#fff",
                        padding: "0.18rem 0.6rem",
                        borderRadius: "12px",
                        fontSize: "0.7rem",
                        fontWeight: "600",
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
                    background: "#4593C9",
                    color: "#fff",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    textAlign: "center",
                  }}
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
