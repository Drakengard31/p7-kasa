import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="not-found-link">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default NotFound;