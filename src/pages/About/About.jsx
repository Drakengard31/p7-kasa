import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import './About.css';
import aboutBanner from '@assets/Mask Group2.png';

export default function About() {
    // Contenu des sections
    const aboutSections = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction,que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    return (
        <div className="about">
            {/* Bannière */}
            <Banner
                image={aboutBanner}
                title="" // Pas de titre sur la bannière de la page À propos
            />

            {/* Sections pliables */}
            <div className="about-collapses">
                {aboutSections.map((section, index) => (
                    <Collapse
                        key={index}
                        title={section.title}
                        content={section.content}
                    />
                ))}
            </div>
        </div>
    );
}