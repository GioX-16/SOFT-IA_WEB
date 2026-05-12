import { motion } from "framer-motion";
import logo from "../assets/Logos/Logo SOFT.png";
import { useIsMobile } from "../hooks/useIsMobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "Play, sans-serif",
        display: "flex",
        flexDirection: "column",
        background: isMobile
          ? "linear-gradient(to right, #031527, #020507)"
          : undefined,
      }}
    >
      {isMobile ? (
        <div
          style={{
            width: "100%",
            height: "400px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/src/assets/Backgrounds/HERO2.png"
            alt="Hero Background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
        </div>
      ) : (
        <>
          <img
            src="/src/assets/Backgrounds/HERO2.png"
            alt="Hero Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -2,
            }}
          />
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
        </>
      )}

      <div
        style={{
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: isMobile ? "center" : "flex-start",
          padding: isMobile ? "1rem 1.5rem" : "15rem 5vw 2rem 5vw",
          maxWidth: "1200px",
          margin: isMobile ? "0 auto" : "0",
          marginTop: isMobile ? "-2.5rem" : "0",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
            maxWidth: "600px",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <img
            src={logo}
            alt="SOFT - IA Logo"
            style={{
              width: "clamp(200px, 30vw, 300px)",
              objectFit: "contain",
            }}
          />

          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            Agencia De{" "}
            <span style={{ color: "#38BDF8" }}>
              Desarrollo y Dise\u00F1o
            </span>
          </h1>

          <p
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              lineHeight: 1.5,
            }}
          >
            Desde Nicaragua, dise\u00F1amos y desarrollamos soluciones digitales con
            un equipo que combina visi\u00F3n, tecnolog\u00EDa y experiencia.
          </p>

          <a
            href="#servicios"
            style={{
              background: "#38BDF8",
              color: "#FFFFFF",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: "bold",
              fontSize: "1rem",
              width: "fit-content",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#1F2E36")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#38BDF8")
            }
          >
            Conocer M\u00E1s
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
