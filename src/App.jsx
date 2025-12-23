import { Routes, Route } from 'react-router-dom'
import Layout from '@components/Layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Property from './pages/Property/Property.jsx'
import About from './pages/About/About.jsx'
import NotFound from './notFound/NotFound.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}> {/* Layout contient Header/footer */}
                <Route index element={<Home />} /> {/* Page d'accueil (/) */}
                <Route path="properties/*" element={<Property />} /> {/* Route qui englobe toutes les sous-routes de Property */}
                <Route path="about" element={<About />} /> {/* Page à propos (/about) */}
            </Route>

            {/*NotFound */}
            <Route path="images/*" element={<NotFound />} /> {/* Capture /images et tous ses sous-chemins */}

            <Route path="*" element={<NotFound />} /> {/* Route 404 pour toutes les autres URL non définies */}
        </Routes>
    )
}

export default App