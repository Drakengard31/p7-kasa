import { Link } from 'react-router-dom';
import './Card.css';

function Card({ id, title, cover }) {
    return (
        <Link to={`/properties/${id}`} className="card-link">
            <article className="card">
                <img
                    src={cover} //URL de l'image passée via la prop cover
                    alt={title} //texte alternatif pour l'accessibilité utilisant le titre
                    className="card-image" //classe CSS pour le style de l'image
                />
                <div className="card-overlay"> {/* Overlay semi-transparent qui contient le titre */}
                    <h2 className="card-title">{title}</h2>  {/* Titre de la propriété */}
                </div>
            </article>
        </Link>
    );
}

export default Card;