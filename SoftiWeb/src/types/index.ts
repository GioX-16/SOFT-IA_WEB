export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export interface TeamMember {
  name: string;
  title: string;
  cvLink: string;
  imageDefault: string;
  imageHover: string;
  socials: {
    instagram: string;
    tiktok: string;
    linkedin: string;
  };
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  nombre: string;
  cargo: string;
  testimonio: string;
  estrellas: number;
  logo: string;
  empresa: string;
  brandImg: string;
}

export interface NavItem {
  label: string;
  to: string;
  isButton?: boolean;
}
