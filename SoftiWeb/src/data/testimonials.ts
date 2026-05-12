import type { Testimonial } from "../types";

const cardG1 = new URL("../assets/img/Testimonials/Juan.png", import.meta.url).href;
const cardK1 = new URL("../assets/img/Testimonials/yo.jpg", import.meta.url).href;
const cardA1 = new URL("../assets/img/Testimonials/Camilo.jpeg", import.meta.url).href;
const cardW1 = new URL("../assets/img/Testimonials/wil.jpg", import.meta.url).href;

const logoGnomo = new URL("../assets/img/Testimonials/bg_logs/BG_LOG.png", import.meta.url).href;
const logoSoftia = new URL("../assets/img/Testimonials/bg_logs/BG_LOG1.png", import.meta.url).href;
const logoGroveto = new URL("../assets/img/Testimonials/bg_logs/BG_LOG2.png", import.meta.url).href;
const logoGioxus = new URL("../assets/img/Testimonials/bg_logs/BG_LOG3.png", import.meta.url).href;

export const phone1 = new URL("../assets/img/Testimonials/Mobil1.png", import.meta.url).href;
export const phone2 = new URL("../assets/img/Testimonials/Mobil2.png", import.meta.url).href;

export const testimonials: Testimonial[] = [
  {
    nombre: "Juan Tijerino",
    cargo: "Senior UX/UI Designer",
    testimonio:
      "\u00A1Incre\u00EDble experiencia! El equipo fue s\u00FAper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visi\u00F3n en un producto funcional y visualmente hermoso.",
    estrellas: 5,
    logo: cardG1,
    empresa: "Gnomo",
    brandImg: logoGnomo,
  },
  {
    nombre: "Daniel Gomez",
    cargo: "Ingeniero de sistemas",
    testimonio:
      "Trabajar con Soft-IA Team fue una de las mejores decisiones que tom\u00E9 para mi proyecto. Los dise\u00F1adores tienen un gran ojo para los detalles y los desarrolladores son realmente talentosos.",
    estrellas: 5,
    logo: cardK1,
    empresa: "SOFT - IA",
    brandImg: logoSoftia,
  },
  {
    nombre: "Camilo Fanjul",
    cargo: "Co-Founder GROVETO",
    testimonio:
      "\u00A1Excelente equipo! Desde el primer encuentro, me dieron mucha confianza. Fueron organizados, creativos y siempre me mantuvieron informado del avance.",
    estrellas: 5,
    logo: cardA1,
    empresa: "Groveto",
    brandImg: logoGroveto,
  },
  {
    nombre: "Wilhelm Reyes",
    cargo: "Backend Dev",
    testimonio:
      "\u00A1Incre\u00EDble experiencia! El equipo fue s\u00FAper profesional y siempre estuvo dispuesto a escuchar mis ideas. Supieron traducir mi visi\u00F3n en un producto funcional y visualmente hermoso.",
    estrellas: 5,
    logo: cardW1,
    empresa: "GIOXUS",
    brandImg: logoGioxus,
  },
];
