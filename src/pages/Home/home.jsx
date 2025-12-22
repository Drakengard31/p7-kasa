import { useState, useEffect } from 'react'; // Hooks React
import Banner from '../../components/Banner/Banner'; // Correction du chemin d'import
import Card from '@components/Card/Card.jsx'; // Composant carte de propriété
import './home.css'; // Styles CSS spécifiques
import homeBanner from '@assets/Mask Group.png'; // Image de la bannière
import propertiesData from '../../data/properties.json'; // Données des propriétés

// 2. Définition du composant Home
function Home() {
    // 3. États du composant
    const [properties, setProperties] = useState([]); // Stocke les propriétés
    const [loading, setLoading] = useState(true); // Gère l'état de chargement
    const [error, setError] = useState(null); // Gère les erreurs

    // 4. Effet pour le chargement des données
    useEffect(() => {
        try {
            // Simulation d'un chargement asynchrone
            setTimeout(() => {
                setProperties(propertiesData);
                setLoading(false);
            }, 1000); // Délai de 1s pour simuler une API
        } catch (err) {
            setError(`Erreur: ${err.message}`);
            setLoading(false);
        }
    }, []); // Tableau de dépendances vide = exécuté une fois

    // 5. Rendu du composant
    return (
        <div className="home">
                {/* 8. Bannière */}
                <Banner
                    image={homeBanner}
                    title="Chez vous, partout et ailleurs"
                />

                {/* 9. Section des propriétés */}
                {loading ? (
                    <div className="loader">Chargement...</div>
                ) : error ? (
                    <div className="error">{error}</div>
                ) : (
                    <section className="cards-container">
                        {properties.map((property) => (
                            <Card
                                key={property.id} // Clé unique obligatoire
                                id={property.id}
                                title={property.title}
                                cover={property.cover}
                            />
                        ))}
                    </section>
                )}
        </div>
    );
}

// 11. Export du composant
export default Home;