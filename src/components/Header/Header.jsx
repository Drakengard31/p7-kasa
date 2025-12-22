import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '@assets/LOGO.png'

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="Kasa" className="header-logo" />
                </Link>
                <nav className="header-nav">
                    <Link
                        to="/"
                        className={`header-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/about"
                        className={`header-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        A Propos
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header