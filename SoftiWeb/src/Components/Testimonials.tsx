import { motion } from "framer-motion";
import { testimonials, phone1, phone2 } from "../data/testimonials";

interface TestimonialCardProps {
  nombre: string;
  cargo: string;
  testimonio: string;
  estrellas: number;
  logo: string;
  empresa: string;
  brandImg: string;
  index?: number;
}

function TestimonialCard({
  nombre,
  cargo,
  testimonio,
  estrellas,
  logo,
  empresa,
  brandImg,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        width: "100%",
        maxWidth: "440px",
        minHeight: "180px",
        cursor: "pointer",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
        position: "relative",
        border: "1px solid #e6e6e6",
        overflow: "hidden",
      }}
      whileHover={{
        background:
          "linear-gradient(135deg, #1F2E36, #449BC7)",
        y: -6,
        scale: 1.02,
        color: "#fff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.15,
        type: "spring",
        stiffness: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 1,
        }}
      >
        <img
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
          }}
          src={logo}
          alt={empresa}
        />
        <div>
          <h3 style={{ margin: 0 }}>{nombre}</h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#444",
              fontWeight: 500,
              margin: 0,
            }}
          >
            {cargo}
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "0.98rem",
          margin: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          zIndex: 1,
        }}
      >
        {testimonio}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "1.5rem", letterSpacing: "2px" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: i < estrellas ? "#4498C2" : "#222" }}>
              \u2605
            </span>
          ))}
        </div>
        <img
          src={brandImg}
          alt={`${empresa} logo`}
          style={{
            width: "54px",
            height: "28px",
            objectFit: "contain",
            backgroundColor: "#fff",
            borderRadius: "7px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to right, #031527, #020507)",
        padding: "60px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "1.8rem",
          fontWeight: 900,
          letterSpacing: "1px",
          marginBottom: "36px",
          textAlign: "center",
          textTransform: "uppercase",
          fontFamily: "Play, sans-serif",
        }}
      >
        TESTIMONIALS
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px",
            minWidth: "180px",
          }}
        >
          <motion.img
            src={phone1}
            alt="Movil 1"
            style={{
              width: "110px",
              transform: "rotate(-10deg)",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              zIndex: 2,
            }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              type: "spring",
              stiffness: 60,
            }}
          />
          <motion.img
            src={phone2}
            alt="Movil 2"
            style={{
              width: "130px",
              transform: "rotate(7deg) translateY(-30px)",
              borderRadius: "18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              zIndex: 1,
              marginLeft: "-30px",
            }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              type: "spring",
              stiffness: 60,
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px 60px",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.empresa}
              nombre={t.nombre}
              cargo={t.cargo}
              testimonio={t.testimonio}
              estrellas={t.estrellas}
              logo={t.logo}
              empresa={t.empresa}
              brandImg={t.brandImg}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
