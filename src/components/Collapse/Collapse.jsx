import { useState } from 'react';
import './Collapse.css';

/**
 * Composant Collapse - Crée un élément pliable/dépliable
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.title - Le titre affiché dans la barre du Collapse
 * @param {string|React.ReactNode|Array} props.content - Le contenu à afficher (texte, composant React ou tableau pour liste)
 * @param {boolean} [props.isList] - Indique si le contenu doit être affiché comme une liste
 * @param {string} [props.className] - Classes CSS additionnelles (optionnel)
 */
function Collapse({ title, content, isList = false, className = '' }) {
    // État pour suivre si le collapse est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état ouvert/fermé
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour rendre le contenu selon son type
    const renderContent = () => {
        // Si c'est une liste (tableau)
        if (isList && Array.isArray(content)) {
            return (
                <ul className="collapse-list">
                    {content.map((item, index) => (
                        <li key={index} className="collapse-list-item">{item}</li>
                    ))}
                </ul>
            );
        }
        // Si c'est du texte ou un autre composant React
        return content;
    };

    return (
        <div className={`collapse ${className}`}>
            {/* Barre de titre avec flèche */}
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2 className="collapse-title">{title}</h2>
                <div className={`collapse-arrow ${isOpen ? 'open' : ''}`} />
            </div>

            {/* Contenu du collapse avec animation */}
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <div className="collapse-text">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Collapse;