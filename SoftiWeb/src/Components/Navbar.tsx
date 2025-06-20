import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Team", to: "/team" },
    { label: "Services", to: "/services" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Contact Us", to: "/contacto", isButton: true },
];

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const aboutTop = aboutSection.getBoundingClientRect().top;
                setShowNavbar(aboutTop <= 0);
            }
        };

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!showNavbar || !isDesktop) return null;

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: "fixed",
                top: "2rem",
                left: "30%",
                transform: "translateX(-50%)",
                zIndex: 999,
                padding: "0.5rem 1.5rem",
                borderRadius: "2rem",
                display: "flex",
                gap: "2.5rem",
                background: "linear-gradient(to left, #4498C2 0%, #C3D4DD 100%)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {NAV_ITEMS.map((item) =>
                item.isButton ? (
                    <Link
                        key={item.to}
                        to={item.to}
                        style={{
                            backgroundColor: "#1F2E36",
                            color: "#fff",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "1.5rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#1F2E36")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#38BDF8")
                        }
                    >
                        {item.label}
                    </Link>
                ) : (
                    <Link
                        key={item.to}
                        to={item.to}
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: "1rem",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#1F2E36")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                    >
                        {item.label}
                    </Link>
                )
            )}
        </motion.nav>
    );
};

export default Navbar;
