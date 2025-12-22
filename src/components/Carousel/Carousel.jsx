import { useState } from 'react';
import './Carousel.css';

/**
 * Composant Carousel pour afficher les images d'une propriété
 * @param {Array} pictures - Tableau des URLs des images à afficher
 * @returns {JSX.Element} Composant Carousel
 */
function Carousel({ pictures }) {
    // État pour suivre l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    // Nombre total d'images
    const totalPictures = pictures.length;

    // Fonction pour aller à l'image précédente
    const goToPrevious = () => {
        // Si on est à la première image, aller à la dernière
        const newIndex = currentIndex === 0 ? totalPictures - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Fonction pour aller à l'image suivante
    const goToNext = () => {
        // Si on est à la dernière image, revenir à la première
        const newIndex = currentIndex === totalPictures - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Si aucune image ou une seule image, on n'affiche pas les flèches ni la numérotation
    if (!pictures || pictures.length <= 1) {
        return (
            <div className="carousel">
                {pictures && pictures.length === 1 && (
                    <div className="carousel-slide">
                        <img
                            src={pictures[0]}
                            alt="Vue du logement"
                            className="carousel-image"
                        />
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="carousel">
            {/* Flèche gauche */}
            <button
                className="carousel-arrow carousel-arrow-left"
                onClick={goToPrevious}
                aria-label="Image précédente"
            >
                <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>
            </button>

            {/* Image actuelle */}
            <div className="carousel-slide">
                <img
                    src={pictures[currentIndex]}
                    alt={`Vue du logement ${currentIndex + 1}`}
                    className="carousel-image"
                />

                {/* Numérotation des slides */}
                <div className="carousel-counter">
                    {currentIndex + 1}/{totalPictures}
                </div>
            </div>

            {/* Flèche droite */}
            <button
                className="carousel-arrow carousel-arrow-right"
                onClick={goToNext}
                aria-label="Image suivante"
            >
                <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.960022 72.2169L8.04002 79.2969L47.64 39.6969L8.04002 0.0969238L0.960022 7.17692L33.48 39.6969L0.960022 72.2169Z" fill="white"/>
                </svg>
            </button>
        </div>
    );
}

export default Carousel;