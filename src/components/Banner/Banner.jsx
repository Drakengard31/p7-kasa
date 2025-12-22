import './Banner.css'  // Importe le fichier CSS spécifique au composant Banner

function Banner({ image, title }) {  // Définit le composant avec 2 props : image et title
    return (
        <div className="banner">  {/* la banner */}
            <img
                src={image} // Utilise la prop image au lieu d'un chemin en dur
                alt="Bannière Kasa"
                className="banner-image"
            />
            {title && <h1>{title}</h1>} {/* Affiche le titre s'il existe */}
        </div>
    )
}

export default Banner  // Exporte le composant pour pouvoir l'utiliser ailleurs