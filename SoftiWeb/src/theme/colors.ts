export const colors = {
  primary: "#38BDF8",
  primaryDark: "#4498C2",
  secondary: "#1F2E36",
  dark: "#031527",
  darkest: "#020507",
  light: "#E9ECF0",
  white: "#FFFFFF",
  muted: "#B8C5D1",
  textDark: "#222",
  textMedium: "#444",
  textLight: "#ddd",
  overlay: "rgba(0, 0, 0, 0.6)",
  glass: "rgba(255, 255, 255, 0.1)",
  glassBorder: "rgba(255, 255, 255, 0.2)",
  glassDark: "rgba(0, 0, 0, 0.32)",
  green: "#00FF47",
} as const;

export const gradients = {
  bgDark: "linear-gradient(to right, #031527, #020507)",
  buttonPrimary: "linear-gradient(90deg, #1F2E36 60%, #336178 100%)",
  cardHover: "linear-gradient(140deg, #1F2E36, #4593C9)",
  cardHoverTestimonial: "linear-gradient(135deg, #1F2E36, #449BC7)",
  cardPlaceholder: "linear-gradient(45deg, rgb(226, 226, 226), rgb(235, 235, 235))",
} as const;

export const shadows = {
  textGlow: "0 4px 24px #4593C9AA",
  cardGlow: "0 8px 32px #4498C2AA",
  card: "0 2px 12px 0 rgba(68,152,194,0.10)",
  cardHover: "0 6px 24px rgba(0, 0, 0, 0.4)",
  soft: "0 2px 8px 0 rgba(44, 62, 80, 0.10)",
  strong: "0 8px 20px rgba(0,0,0,0.2)",
  phone: "0 8px 32px rgba(0,0,0,0.4)",
} as const;

export const fonts = {
  body: "'Play', sans-serif",
} as const;
