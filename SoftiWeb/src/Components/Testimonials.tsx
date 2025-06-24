import React from 'react';

// Tipado de props para TestimonialCard
interface TestimonialCardProps {
    nombre: string;
    cargo: string;
    testimonio: string;
    estrellas: number;
    logo: string;
    empresa: string;
    brandImg: string; // imagen de la marca (obligatoria)
}

// Importa las imágenes de los móviles usando import.meta.url (Vite)
const phone1 = new URL("../assets/img/Testimonials/Mobil1.png", import.meta.url).href;
const phone2 = new URL("../assets/img/Testimonials/Mobil2.png", import.meta.url).href;

// Importa los avatares/logos de las cards usando import.meta.url (Vite)
const cardG1 = new URL("../assets/img/Testimonials/Juan.png", import.meta.url).href;
const cardK1 = new URL("../assets/img/Testimonials/yo.jpg", import.meta.url).href;
const cardA1 = new URL("../assets/img/Testimonials/Camilo.jpeg", import.meta.url).href;
const cardW1 = new URL("../assets/img/Testimonials/wil.jpg", import.meta.url).href;

// Ejemplo de logos de marcas (puedes cambiarlos por los que quieras)
const logoGnomo = new URL("../assets/img/Testimonials/bg_logs/BG_LOG.png", import.meta.url).href;
const logoSoftia = new URL("../assets/img/Testimonials/bg_logs/BG_LOG1.png", import.meta.url).href;
const logoGroveto = new URL("../assets/img/Testimonials/bg_logs/BG_LOG2.png", import.meta.url).href;
const logoGioxus = new URL("../assets/img/Testimonials/bg_logs/BG_LOG3.png", import.meta.url).href;

// Componente reutilizable para cada testimonial
function TestimonialCard({ nombre, cargo, testimonio, estrellas, logo, empresa, brandImg }: TestimonialCardProps) {
    const [hover, setHover] = React.useState(false);
    return (
        <div
            style={{ ...styles.card, ...(hover ? styles.cardHover : {}) }}
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
                {/* Imagen de la marca SIEMPRE */}
                <img src={brandImg} alt={empresa + ' logo'} style={styles.brandImg} />
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" style={styles.section}>
            {/* Fuente Play de Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Play:wght@700;900&display=swap" rel="stylesheet" />
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
                        brandImg={logoGnomo}
                    />
                    <TestimonialCard
                        nombre="Daniel Gomez"
                        cargo="Ingeniero de sistemas"
                        testimonio="Trabajar con Soft-IA Team fue una de las mejores decisiones que tomé para mi proyecto. Los diseñadores tienen un gran ojo para los detalles y los desarrolladores son realmente talentosos."
                        estrellas={5}
                        logo={cardK1}
                        empresa="SOFT - IA"
                        brandImg={logoSoftia}
                    />
                    <TestimonialCard
                        nombre="Camilo Fanjul"
                        cargo="Co-Founder  GROVETO"
                        testimonio="¡Excelente equipo! Desde el primer encuentro, me dieron mucha confianza. Fueron organizados, creativos y siempre me mantuvieron informado del avance."
                        estrellas={5}
                        logo={cardA1}
                        empresa="groveto"
                        brandImg={logoGroveto}
                    />
                    <TestimonialCard
                        nombre="Wilhelm Reyes"
                        cargo="Backend Dev"
                        testimonio="¡Increíble experiencia! El equipo fue súper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visión en un producto funcional y visualmente hermoso."
                        estrellas={5}
                        logo={cardW1}
                        empresa="GIOXUS"
                        brandImg={logoGioxus}
                    />
                </div>
            </div>
        </section>
    );
}

// --- ESTILOS EN LÍNEA (al final del archivo) ---
const styles = {
    section: {
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #031527, #020507)',
        padding: '60px 0',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '2.2rem',
        fontWeight: 900,
        letterSpacing: '2px',
        marginBottom: '36px',
        textAlign: 'center' as const,
        textShadow: '0 2px 8px rgba(0,0,0,0.18)',
        textTransform: 'uppercase' as const,
        fontFamily: 'Play, sans-serif',
    },
    content: {
        display: 'flex',
        flexDirection: 'row' as const,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '32px',
        width: '100%',
        maxWidth: '1200px',
    },
    phones: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '20px',
        minWidth: '180px',
        marginTop: '0',
    },
    phoneImg1: {
        width: '110px',
        transform: 'rotate(-10deg) translateY(0px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4)',
        borderRadius: '18px',
        zIndex: 2,
    },
    phoneImg2: {
        width: '130px',
        transform: 'rotate(7deg) translateY(-30px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.4)',
        borderRadius: '18px',
        zIndex: 1,
        marginLeft: '-30px',
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '64px',
        width: '100%',
        maxWidth: '1100px',
        justifyItems: 'center' as const,
        alignItems: 'stretch' as const,
    },
    card: {
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
        padding: '22px 32px',
        width: '97%',
        minWidth: '380px',
        maxWidth: '600px',
        minHeight: '140px',
        maxHeight: '180px',
        transition: 'transform 0.18s, box-shadow 0.18s',
        cursor: 'pointer',
        color: '#222',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',
        position: 'relative' as const,
        border: '1.5px solid #e6e6e6',
        justifySelf: 'center' as const,
    },
    cardHover: {
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: '0 8px 32px 0 rgba(130, 88, 255, 0.13)',
        border: '1.5px solid #bdbdbd',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    avatar: {
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        objectFit: 'cover' as const,
        border: '2px solid #fff',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.10)',
    },
    role: {
        fontSize: '0.95rem',
        color: '#444',
        fontWeight: 500,
        margin: 0,
    },
    text: {
        fontSize: '0.98rem',
        color: '#222',
        margin: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical' as const,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '8px',
    },
    stars: {
        fontSize: '1.1rem',
        letterSpacing: '2px',
    },
    brandImg: {
        width: '54px',
        height: '28px',
        objectFit: 'contain' as const,
        background: 'transparent',
        borderRadius: '7px',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)',
        backgroundColor: '#fff',
        display: 'block',
        marginLeft: 'auto',
        marginRight: '0',
    },
    // Responsive
    '@media (max-width: 900px)': {
        section: {
            padding: '32px 0',
        },
        title: {
            fontSize: '1.3rem',
            marginBottom: '18px',
        },
        content: {
            flexDirection: 'column' as const,
            alignItems: 'center',
            gap: '18px',
            maxWidth: '100vw',
        },
        phones: {
            flexDirection: 'row' as const,
            gap: '10px',
            marginBottom: '18px',
            minWidth: '0',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        phoneImg1: {
            width: '70px',
            borderRadius: '10px',
        },
        phoneImg2: {
            width: '80px',
            borderRadius: '10px',
            marginLeft: '-10px',
        },
        cards: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'unset',
            maxWidth: '98vw',
            gap: '24px',
        },
        card: {
            minWidth: '0',
            maxWidth: '98vw',
            width: '98vw',
            padding: '12px 8px',
            minHeight: '120px',
            maxHeight: 'none',
        },
        avatar: {
            width: '28px',
            height: '28px',
        },
        brandImg: {
            width: '38px',
            height: '18px',
        },
        stars: {
            fontSize: '0.9rem',
        },
    },
};
