import React from 'react';

// Tipado de props para TestimonialCard
interface TestimonialCardProps {
    nombre: string;
    cargo: string;
    testimonio: string;
    estrellas: number;
    logo: string;
    empresa: string;
    gradient: string;
    logoBg: string;
}

// Estilos en línea para la sección y las cards
const styles = {
    section: {
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top left, #1a2236 60%, #0d101a 100%)',
        padding: '60px 0',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '2px',
        marginBottom: '40px',
        textAlign: 'center' as const,
    },
    content: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        width: '100%',
        maxWidth: '1400px',
    },
    phones: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        minWidth: '220px',
    },
    phoneImg1: {
        width: '140px',
        transform: 'rotate(-10deg) translateY(30px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4)',
        borderRadius: '24px',
        zIndex: 2,
    },
    phoneImg2: {
        width: '170px',
        transform: 'rotate(7deg) translateY(-30px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4)',
        borderRadius: '24px',
        zIndex: 1,
        marginLeft: '-40px',
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        flex: 1,
    },
    card: {
        borderRadius: '18px',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
        padding: '32px 28px',
        minWidth: '340px',
        maxWidth: '480px',
        transition: 'transform 0.25s, box-shadow 0.25s',
        cursor: 'pointer',
        color: '#222',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '18px',
    },
    cardHover: {
        transform: 'translateY(-8px) scale(1.03)',
        boxShadow: '0 8px 32px 0 rgba(130, 88, 255, 0.18)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
    },
    avatar: {
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        objectFit: 'cover' as const,
        border: '3px solid #fff',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
    },
    role: {
        fontSize: '1rem',
        color: '#444',
        fontWeight: 500,
        margin: 0,
    },
    text: {
        fontSize: '1.08rem',
        color: '#222',
        margin: 0,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    stars: {
        fontSize: '1.4rem',
        letterSpacing: '2px',
    },
    company: {
        color: '#fff',
        fontWeight: 700,
        borderRadius: '16px',
        padding: '8px 22px',
        fontSize: '1rem',
        marginLeft: '12px',
        minWidth: '90px',
        textAlign: 'center' as const,
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
    },
    // Responsive
    '@media (maxWidth: 900px)': {
        content: {
            flexDirection: 'column' as const,
            alignItems: 'center',
        },
        cards: {
            gridTemplateColumns: '1fr',
        },
        phones: {
            flexDirection: 'row' as const,
            gap: '10px',
            marginBottom: '30px',
        },
    },
};

// Importa las imágenes de los móviles usando import.meta.url (Vite)
const phone1 = new URL("../assets/img/Testimonials/Mobil1.png", import.meta.url).href;
const phone2 = new URL("../assets/img/Testimonials/Mobil2.png", import.meta.url).href;

// Importa los avatares/logos de las cards usando import.meta.url (Vite)
const cardG1 = new URL("../assets/img/Testimonials/Juan.png", import.meta.url).href;
const cardK1 = new URL("../assets/img/Testimonials/yo.jpg", import.meta.url).href;
const cardA1 = new URL("../assets/img/Testimonials/Camilo.jpeg", import.meta.url).href;
const cardW1 = new URL("../assets/img/Testimonials/wil.jpg", import.meta.url).href;

// Componente reutilizable para cada testimonial
function TestimonialCard({ nombre, cargo, testimonio, estrellas, logo, empresa, gradient, logoBg }: TestimonialCardProps) {
    const [hover, setHover] = React.useState(false);
    return (
        <div
            style={{ ...styles.card, background: gradient, ...(hover ? styles.cardHover : {}) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
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
                        <span key={i} style={{ color: i < estrellas ? "#8B2CF5" : "#222" }}>★</span>
                    ))}
                </div>
                <div style={{ ...styles.company, background: logoBg }}>{empresa}</div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" style={styles.section}>
            <h2 style={styles.title}>TESTIMONIALS</h2>
            <div style={styles.content}>
                {/* Móviles flotando a la izquierda */}
                <div style={styles.phones}>
                    <img src={phone1} alt="Movil 1" style={styles.phoneImg1} />
                    <img src={phone2} alt="Movil 2" style={styles.phoneImg2} />
                </div>
                {/* Cards de testimonios */}
                <div style={styles.cards}>
                    <TestimonialCard
                        nombre="Juan Tijerino"
                        cargo="Senior UX/UI Designer"
                        testimonio="¡Increíble experiencia! El equipo fue súper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visión en un producto funcional y visualmente hermoso."
                        estrellas={5}
                        logo={cardG1}
                        empresa="Gnomo"
                        gradient="linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)" // Cambia aquí el gradiente
                        logoBg="#A259FF" // Cambia aquí el color de fondo del logo
                    />
                    <TestimonialCard
                        nombre="Daniel Gomez"
                        cargo="Ingeniero de sistemas"
                        testimonio="Trabajar con Soft-IA Team fue una de las mejores decisiones que tomé para mi proyecto. Los diseñadores tienen un gran ojo para los detalles y los desarrolladores son realmente talentosos."
                        estrellas={4}
                        logo={cardK1}
                        empresa="SOFT - IA"
                        gradient="linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)"
                        logoBg="#22223B"
                    />
                    <TestimonialCard
                        nombre="Camilo Fanjul"
                        cargo="Co-Founder  GROVETO"
                        testimonio="¡Excelente equipo! Desde el primer encuentro, me dieron mucha confianza. Fueron organizados, creativos y siempre me mantuvieron informado del avance."
                        estrellas={5}
                        logo={cardA1}
                        empresa="groveto"
                        gradient="linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)"
                        logoBg="#6C63FF"
                    />
                    <TestimonialCard
                        nombre="Wilhelm Reyes"
                        cargo="Backend Dev"
                        testimonio="¡Increíble experiencia! El equipo fue súper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visión en un producto funcional y visualmente hermoso."
                        estrellas={5}
                        logo={cardW1}
                        empresa="GIOXUS"
                        gradient="linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)"
                        logoBg="#FF4F9A"
                    />
                </div>
            </div>
            {/*
                Personaliza los gradientes y colores en los props de cada TestimonialCard.
                Modifica los estilos en Testimonials.css para el hover y disposición.
            */}
        </section>
    );
}
