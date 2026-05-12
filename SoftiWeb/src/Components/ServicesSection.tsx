import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";
import { services } from "../data/services";

const ServicesSection: React.FC = () => {
  const isMobile = useIsMobile();

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0.2, 0.3, 1] },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.2, ease: [0.4, 0.2, 0.3, 1] },
    },
  };

  const cardVariants = (i: number): Variants => ({
    hidden: { opacity: 0, rotateY: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.12,
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  });

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
          marginBottom: "1rem",
          color: "#E9ECF0",
          letterSpacing: "2px",
          textShadow: "0 4px 24px #4498C2AA",
        }}
      >
        Nuestros Servicios
      </motion.h2>

      <motion.p
        variants={subtitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#B8C5D1",
          marginBottom: "3rem",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Ofrecemos soluciones tecnol\u00F3gicas integrales para transformar tu negocio
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
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 32px #4498C2AA",
              filter: "brightness(1.08)",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(.4,2,.3,1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#E9ECF0",
                textAlign: "center",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#B8C5D1",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              {service.description}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {service.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#E9ECF0",
                    fontSize: "0.9rem",
                  }}
                >
                  <span
                    style={{
                      color: "#4498C2",
                      fontSize: "1.2rem",
                    }}
                  >
                    \u2713
                  </span>
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
