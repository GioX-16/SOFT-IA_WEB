import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={{
            backgroundColor: '#ffffff',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        color: '#333'
                    }}>
                        SoftiWeb
                    </Link>
                </div>
                <nav>
                    <ul style={{
                        display: 'flex',
                        listStyle: 'none',
                        gap: '2rem',
                        margin: 0,
                        padding: 0
                    }}>
                        <li>
                            <Link to="/" style={{
                                textDecoration: 'none',
                                color: '#333'
                            }}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/servicios" style={{
                                textDecoration: 'none',
                                color: '#333'
                            }}>Servicios</Link>
                        </li>
                        <li>
                            <Link to="/contacto" style={{
                                textDecoration: 'none',
                                color: '#333'
                            }}>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

