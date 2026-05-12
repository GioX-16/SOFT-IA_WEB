import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "0",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        fontFamily: "'Play', sans-serif",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/src/assets/Backgrounds/Contact_Section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            height: "calc(100vh - 80px)",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "2rem",
              borderRight: "2px solid rgba(255,255,255,0.15)",
              padding: "1rem",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.32)",
                borderRadius: 16,
                padding: "1.2rem 1rem",
                width: "100%",
                maxWidth: 250,
                textAlign: "center",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
              }}
            >
              <FaMapMarkerAlt size={38} color="#00FF47" style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>
                Managua
                <br />
                Nicaragua
              </div>
            </div>
            <a
              href="https://wa.me/50588888888"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(0,0,0,0.32)",
                borderRadius: 16,
                padding: "1.2rem 1rem",
                width: "100%",
                maxWidth: 250,
                textAlign: "center",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
                textDecoration: "none",
                display: "block",
                color: "#fff",
              }}
            >
              <FaWhatsapp size={38} color="#00FF47" style={{ marginBottom: 10 }} />
              <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>
                Escribenos A
                <br />
                Nuestro
                <br />
                Whatsapp
              </div>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: "1rem",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.32)",
                borderRadius: 16,
                padding: "3rem",
                width: "100%",
                maxWidth: 600,
                boxShadow: "0 2px 16px 0 rgba(175, 169, 169, 0.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  textAlign: "right",
                  marginBottom: "1.5rem",
                }}
              >
                CONTACTANOS
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2.5rem",
                  }}
                >
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" style={buttonStyle}>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem 2vw",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(0,0,0,0.13)",
          fontSize: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="/src/assets/Logos/logoBYN.png"
            alt="SOFT-IA Logo"
            style={{ height: 28 }}
          />
          <span style={{ fontWeight: 700, letterSpacing: 2 }}>SOFT - IA</span>
        </div>
        <div style={{ color: "#ccc", fontSize: 13, flex: 1, textAlign: "center" }}>
          \u00A9 2025 Soft-ia | All Rights Reserved
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#" style={iconLinkStyle}>
            <FaFacebookF />
          </a>
          <a href="#" style={iconLinkStyle}>
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/geovanny-sandino-137691273/"
            style={iconLinkStyle}
          >
            <FaLinkedinIn />
          </a>
          <a href="#" style={iconLinkStyle}>
            <FaTelegramPlane />
          </a>
          <a href="https://www.instagram.com/sandi.giox/" style={iconLinkStyle}>
            <FaInstagram />
          </a>
        </div>
      </footer>

      <style>{`
        html, body { overflow-x: hidden; }
        @media (max-width: 900px) {
          #contact > div > div {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          #contact > div > div > div:first-child {
            border-right: none !important;
            border-bottom: 2px solid rgba(255,255,255,0.12) !important;
            padding-bottom: 1.2rem !important;
            margin-bottom: 1.2rem !important;
          }
        }
        @media (max-width: 768px) {
          #contact h2 { font-size: 1.5rem !important; text-align: center !important; }
          #contact form { padding: 0.5rem !important; }
          footer { flex-direction: column !important; text-align: center !important; }
          footer div:nth-child(2) { order: 3; margin-top: 1rem; }
          footer div:last-child { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 0.9rem",
  background: "#fff",
  border: "none",
  borderRadius: 8,
  color: "#222",
  fontSize: "0.98rem",
  fontWeight: 500,
  outline: "none",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)",
};

const buttonStyle: React.CSSProperties = {
  background: "#fff",
  color: "#222",
  fontWeight: 700,
  border: "none",
  borderRadius: 10,
  padding: "0.6rem 1.5rem",
  fontSize: "1.1rem",
  cursor: "pointer",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.08)",
};

const iconLinkStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: 18,
  background: "rgba(255,255,255,0.08)",
  borderRadius: "50%",
  width: 28,
  height: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};

export default ContactSection;
