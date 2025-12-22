import './Footer.css'
import logoWhite from '@images/D_Footer.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logoWhite} alt="Kasa" className="footer-logo" />
                <p className="footer-text"></p>
            </div>
        </footer>
    )
}

export default Footer