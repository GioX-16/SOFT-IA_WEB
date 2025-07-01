import React from 'react';
import { motion } from 'framer-motion';

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

const phone1 = new URL("../assets/img/Testimonials/Mobil1.png", import.meta.url).href;
const phone2 = new URL("../assets/img/Testimonials/Mobil2.png", import.meta.url).href;

const cardG1 = new URL("../assets/img/Testimonials/Juan.png", import.meta.url).href;
const cardK1 = new URL("../assets/img/Testimonials/yo.jpg", import.meta.url).href;
const cardA1 = new URL("../assets/img/Testimonials/Camilo.jpeg", import.meta.url).href;
const cardW1 = new URL("../assets/img/Testimonials/wil.jpg", import.meta.url).href;

const logoGnomo = new URL("../assets/img/Testimonials/bg_logs/BG_LOG.png", import.meta.url).href;
const logoSoftia = new URL("../assets/img/Testimonials/bg_logs/BG_LOG1.png", import.meta.url).href;
const logoGroveto = new URL("../assets/img/Testimonials/bg_logs/BG_LOG2.png", import.meta.url).href;
const logoGioxus = new URL("../assets/img/Testimonials/bg_logs/BG_LOG3.png", import.meta.url).href;

function TestimonialCard({ nombre, cargo, testimonio, estrellas, logo, empresa, brandImg, index = 0 }: TestimonialCardProps) {
    const [hover, setHover] = React.useState(false);

    return (
        <motion.div
            style={{
                ...styles.card,
                ...(hover ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15, type: 'spring', stiffness: 60 }}
        >
            <div style={styles.blurOverlay} />
            <div style={styles.header}>
                <img style={styles.avatar} src={logo} alt={empresa} />
                <div>
                    <h3 style={{ margin: 0 }}>{nombre}</h3>
                    <p style={styles.role}>{cargo}</p>
                </div>
            </div>
            <p style={styles.text}>{testimonio}</p>
            <div style={styles.footer}>
                <div style={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} style={{ color: i < estrellas ? "#4498C2" : hover ? "#E9ECF0" : "#222" }}>★</span>
                    ))}
                </div>
                <img src={brandImg} alt={`${empresa} logo`} style={styles.brandImg} />
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" style={styles.section}>
            <link href="https://fonts.googleapis.com/css2?family=Play:wght@700;900&display=swap" rel="stylesheet" />
            <h2 style={styles.title}>TESTIMONIALS</h2>
            <div style={styles.content}>
                <div style={styles.phones}>
                    <motion.img src={phone1} alt="Movil 1" style={styles.phoneImg1}
                        initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 60 }} />
                    <motion.img src={phone2} alt="Movil 2" style={styles.phoneImg2}
                        initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, type: 'spring', stiffness: 60 }} />
                </div>
                <div style={styles.cards}>
                    <TestimonialCard nombre="Juan Tijerino" cargo="Senior UX/UI Designer" testimonio="¡Increíble experiencia! El equipo fue súper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visión en un producto funcional y visualmente hermoso." estrellas={5} logo={cardG1} empresa="Gnomo" brandImg={logoGnomo} index={0} />
                    <TestimonialCard nombre="Daniel Gomez" cargo="Ingeniero de sistemas" testimonio="Trabajar con Soft-IA Team fue una de las mejores decisiones que tomé para mi proyecto. Los diseñadores tienen un gran ojo para los detalles y los desarrolladores son realmente talentosos." estrellas={5} logo={cardK1} empresa="SOFT - IA" brandImg={logoSoftia} index={1} />
                    <TestimonialCard nombre="Camilo Fanjul" cargo="Co-Founder GROVETO" testimonio="¡Excelente equipo! Desde el primer encuentro, me dieron mucha confianza. Fueron organizados, creativos y siempre me mantuvieron informado del avance." estrellas={5} logo={cardA1} empresa="Groveto" brandImg={logoGroveto} index={2} />
                    <TestimonialCard nombre="Wilhelm Reyes" cargo="Backend Dev" testimonio="¡Increíble experiencia! El equipo fue súper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visión en un producto funcional y visualmente hermoso." estrellas={5} logo={cardW1} empresa="GIOXUS" brandImg={logoGioxus} index={3} />
                </div>
            </div>
        </section>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    section: {
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #031527, #020507)',
        padding: '60px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '1.8rem',
        fontWeight: 900,
        letterSpacing: '1px',
        marginBottom: '36px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Play, sans-serif',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '10px',
        width: '100%',
        maxWidth: '1200px',
    },
    phones: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
        minWidth: '180px',
    },
    phoneImg1: {
        width: '110px',
        transform: 'rotate(-10deg)',
        borderRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        zIndex: 2,
    },
    phoneImg2: {
        width: '130px',
        transform: 'rotate(7deg) translateY(-30px)',
        borderRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        zIndex: 1,
        marginLeft: '-30px',
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px 60px', // Espaciado entre columnas y filas
        width: '100%',
        maxWidth: '900px',
    },
    card: {
        background: '#fff',
        borderRadius: '16px',
        padding: '20px',
        width: '100%',
        maxWidth: '440px',
        minHeight: '180px',
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer',
        color: '#222',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        position: 'relative',
        border: '1px solid #e6e6e6',
        overflow: 'hidden',
    },
    cardHover: {
        background: 'linear-gradient(135deg, #1F2E36, #449BC7)',
        transform: 'translateY(-6px) scale(1.02)',
        color: '#fff',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        border: '1px solid transparent',
    },
    blurOverlay: {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(14px)',
        zIndex: 0,
        borderRadius: 'inherit',
        pointerEvents: 'none',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        zIndex: 1,
    },
    avatar: {
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
    },
    role: {
        fontSize: '0.95rem',
        color: '#444',
        fontWeight: 500,
        margin: 0,
    },
    text: {
        fontSize: '0.98rem',
        margin: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        zIndex: 1,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1,
    },
    stars: {
        fontSize: '1.5rem',
        letterSpacing: '2px',
    },
    brandImg: {
        width: '54px',
        height: '28px',
        objectFit: 'contain',
        backgroundColor: '#fff',
        borderRadius: '7px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    },
};
