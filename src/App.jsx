import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {Navigate} from "react-router-dom";

import Oerlikon from "./assets/Oerlikon.jpg";
import Icon from "./assets/Icon.jpg";

import Home from "./assets/pages/Home.jsx";
import Carosserie from "./assets/pages/Carosserie.jsx";
import Aufbereitung from "./assets/pages/Aufbereitung.jsx";
import Spenglerarbeiten from "./assets/pages/Spenglerarbeiten.jsx";
import './assets/Styles/Home.css';
import './assets/Styles/App.css';
import Instagram from "./assets/Instagram.jpg";
import Linkedin from "./assets/Linkedin-logo.png";
import Facebook from "./assets/Facebook.png";
import Impressum from "./assets/pages/Impressum.jsx";
import Wiki from "./assets/pages/Wiki.jsx";
import  Kontakt from "./assets/pages/Kontakt.jsx";
import Lackierei from "./assets/pages/Lackierei.jsx";



/**
 * Content-Translations for all languages (Language-Dropdown)
 * @type {{de: {navHome: string, navCarrosserie: string, navAufbereitung: string, modalTitle: string, phoneLabel: string, callBtn: string, closeBtn: string, contactTitle: string, hoursTitle: string, hoursWeek: string, hoursFri: string, socialText: string}, en: {navHome: string, navCarrosserie: string, navAufbereitung: string, modalTitle: string, phoneLabel: string, callBtn: string, closeBtn: string, contactTitle: string, hoursTitle: string, hoursWeek: string, hoursFri: string, socialText: string}, it: {navHome: string, navCarrosserie: string, navAufbereitung: string, modalTitle: string, phoneLabel: string, callBtn: string, closeBtn: string, contactTitle: string, hoursTitle: string, hoursWeek: string, hoursFri: string, socialText: string}, fr: {navHome: string, navCarrosserie: string, navAufbereitung: string, modalTitle: string, phoneLabel: string, callBtn: string, closeBtn: string, contactTitle: string, hoursTitle: string, hoursWeek: string, hoursFri: string, socialText: string}}}
 */

const translations = {
    de: {
        navHome: "Home",
        navCarrosserie: "Carrosserie",
        navAufbereitung: "Aufbereitung",
        navKontakt: "Kontakt",
        navLackierei:"Lackiererei",
        navSpenglerei:"Spenglerei",
        modalTitle: "Nehmen Sie jetzt Kontakt mit uns auf",
        phoneLabel: "Telefon:",
        callBtn: "Jetzt anrufen",
        closeBtn: "Schliessen",
        contactTitle: "Kontakt",
        hoursTitle: "Öffnungszeiten",
        hoursWeek: "Mo – Do: 07.30 – 12.00 Uhr | 13.00 – 17.30 Uhr",
        hoursFri: "Fr: 07.30 – 12.00 Uhr | 13.00 – 16.30 Uhr",
        socialText: "Folgen Sie uns jetzt auf unseren Social Media Kanälen:",
        companyTitle: "Carrosserie Örlike TL AG",
        companyOwners: "Duje Antonina / Michael Nufer",
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen"
    },
    en: {
        navHome: "Home",
        navCarrosserie: "body Shop",
        navAufbereitung: "Car Detailing",
        navKontakt: "Contact",
        navSpenglerei:"Sheet Metal Work",

        modalTitle: "Get in touch with us now",
        navLackiererei:"paint shop",
        phoneLabel: "Phone:",
        callBtn: "Call now",
        closeBtn: "Close",
        contactTitle: "Contact",
        hoursTitle: "Opening Hours",
        hoursWeek: "Mon – Thu: 07.30 – 12.00 | 13.00 – 17.30",
        hoursFri: "Fri: 07.30 – 12.00 | 13.00 – 16.30",
        socialText: "Follow us now on our social media channels:",
        companyTitle: "Carrosserie Örlike TL AG",
        companyOwners: "Duje Antonina / Michael Nufer",
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen"
    },
    it: {
        navHome: "Home",
        navCarrosserie: "Carrozzeria",
        navAufbereitung: "Preparazione",
        navKontakt: "Contatti",
        navLackiererei:"Reparto verniciatura",
        navSpenglerei:"Lattoneria",

        modalTitle: "Mettetevi in contatto con noi ora",
        phoneLabel: "Telefono:",
        callBtn: "Chiama ora",
        closeBtn: "Chiudi",
        contactTitle: "Contatto",
        hoursTitle: "Orari di apertura",
        hoursWeek: "Lun – Gio: 07.30 – 12.00 | 13.00 – 17.30",
        hoursFri: "Ven: 07.30 – 12.00 | 13.00 – 16.30",
        socialText: "Seguiteci ora sui nostri canali social:",
        companyTitle: "Carrozzeria Örlike TL AG",
        companyOwners: "Duje Antonina / Michael Nufer",
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen"
    },
    fr: {
        navHome: "Accueil",
        navCarrosserie: "Carrosserie",
        navAufbereitung: "Préparation",
        navKontakt: "Contact",
        navLackiererei:"Atelier de peinture",
        navSpenglerei:"Zinguerie",
        modalTitle: "Contactez-nous dès maintenant",
        phoneLabel: "Téléphone:",
        callBtn: "Appeler maintenant",
        closeBtn: "Fermer",
        contactTitle: "Contact",
        hoursTitle: "Heures d'ouverture",
        hoursWeek: "Lun – Jeu: 07h30 – 12h00 | 13h00 – 17h30",
        hoursFri: "Ven: 07h30 – 12h00 | 13h00 – 16h30",
        socialText: "Suivez-nous dès maintenant sur nos réseaux sociaux:",
        companyTitle: "Carrosserie Örlike TL AG",
        companyOwners: "Duje Antonina / Michael Nufer",
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen"
    }
};
function App() {

    /**
     * Language States(Hook) Default on German
     */
    const [language, setLanguage] = useState("de");

    // Telefon-Popup State
    const [showPhoneModal, setShowPhoneModal] = useState(false);


    /**
     * Loading Languages(Hook)-Handler (Set) wehen changing Dropwond on Language
     * @param e
     */
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    /**
     * Load Translations text for all languages of Language-Dropwown
     */

    const t = translations[language];



    /**
     * Scroll-To-Top Funktion
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="app-container">
            {/* Navigationsleiste */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/home" className="logo-link">
                        <marquee>
                            <span className="logo-text">
                                CARROSSERIE <span className="örlike">ÖRLIKE</span> TL AG
                            </span>
                        </marquee>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/home" className="nav-link active">{t.navHome}</Link>
                    <Link to="/reparatur" className="nav-link">{t.navCarrosserie}</Link>
                    <Link to="/spenglerarbeiten" className="nav-link active">{t.navSpenglerei}</Link>
                    <Link to="/aufbereitung" className="nav-link">{t.navAufbereitung}</Link>
                    <Link to="/kontakt" className={"nav-link"}>{t.navKontakt}</Link>
                    <Link to="/lackiererei" className={"nav-link"}>{t.navLackierei}</Link>


                    {/* Sprachauswahl Dropdown */}
                    <div className="language-selector">
                        <select
                            value={language}
                            onChange={handleLanguageChange}
                            className="lang-dropdown"
                        >
                            <option value="de">🇩🇪 DE</option>
                            <option value="en">🇬🇧 EN</option>
                            <option value="it">🇮🇹 IT</option>
                            <option value="fr">🇫🇷 FR</option>
                        </select>
                    </div>
                </div>
            </nav>

            {/* Sidebar-Buttons (Telefon & E-Mail) */}
            <div className="sidebar-icons">
                <button
                    type="button"
                    onClick={() => setShowPhoneModal(true)}
                    className="sidebar-icon-btn"
                    title="Telefonnummer anzeigen"
                    aria-label="Telefonnummer anzeigen"
                >
                    <span role="img" aria-label="Telefon">📞</span>
                </button>
                <a
                    href="mailto:info@oerlike.ch"
                    className="sidebar-icon-btn"
                    title="E-Mail senden"
                    aria-label="E-Mail senden"
                >
                    <span role="img" aria-label="E-Mail">✉️</span>
                </a>
            </div>

            {/* Pop-up Modal für Telefonnummer */}
            {showPhoneModal && (
                <div
                    className="phone-modal-overlay"
                    onClick={() => setShowPhoneModal(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="phone-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2 id="modal-title">Nehmen Sie  jetzt Kontakt mit uns auf </h2>
                        <span>&#128073;</span> <p>Telefon: <strong>044 311 94 12</strong></p> <span>&#128072;</span>
                        <a href="+41443119412" onClick={() => window.location.href = "tel:+41443119412"} className="call-btn">
                            {t.callBtn}
                        </a>
                        <button
                            type="button"
                            className="close-btn"
                            onClick={() => setShowPhoneModal(false)}
                        >
                            Schliessen
                        </button>
                    </div>
                </div>
            )}

            {/* Scroll-To-Top Button */}
            <button className="scroll-to-top" onClick={scrollToTop} title="Nach oben scrollen">
                ▲
            </button>

            {/* Hauptinhalt & Routing */}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home  lang={language}/>} />
                    <Route path="/home" element={<Home  lang={language}/>} />
                    <Route path="/reparatur" element={<Carosserie lang={language} />} />
                    <Route path="/spenglerarbeiten" element={<Spenglerarbeiten lang={language}/>} />
                    <Route path="/impressum" element={<Impressum lang={language}/>} />
                    <Route path="/wiki" element={<Wiki />} />
                    <Route path="/kontakt" element={<Kontakt lang={language} />}/>
                    <Route path="/lackiererei" element={<Lackierei lang={language}/>}/>
                    <Route path="/aufbereitung" element={<Aufbereitung lang={language} />} />
                </Routes>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <section className="footer-col">
                            <h3>{t.companyTitle}</h3>
                            <p>{t.companyOwners}</p>
                            <p>{t.companyAddress}</p>
                        </section>

                        <section className="footer-col">
                            <h3>{t.contactTitle}</h3>
                            <p>Tel: 044 311 94 12</p>
                            <p>Fax: 044 311 94 22</p>
                            <p>E-Mail: info@oerlike.ch</p>
                        </section>

                        <section className="footer-col opening-hours">
                            <h3>{t.hoursTitle}</h3>
                            <p>{t.hoursWeek}</p>
                            <p>{t.hoursFri}</p>
                        </section>
                    </div>

                    <hr className="footer-divider my-8 border-neutral-700" />

                    <div className="footer-bottom">
                        <p className="copyright-text">
                            Copyright &copy; {new Date().getFullYear()} oerlike.ch |{" "}
                            <Link to="/impressum" className="hover">Impressum</Link> |{" "}
                            <Link to="/wiki" className="hover">Wiki</Link>
                        </p>

                        <section className="social-media">
                            <span>&#128073;</span>
                            <p className="social-heading">
                                <span>{t.socialText}</span>
                            </p>
                            <span>&#128072;</span>

                            <div className="social-links">
                                <a href="https://www.instagram.com/carrosserie_oerlike/" target="_blank" rel="noreferrer">
                                    Instagram:
                                    <img src={Instagram} alt="Instagram" className="instagram-icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/peter-ledergerber-689902b8/?isSelfProfile=false" target="_blank" rel="noreferrer">
                                    LinkedIn:
                                    <img src={Linkedin} alt="LinkedIn" className="linkedin-icon" />
                                </a>
                                <a href="https://www.facebook.com/p/Carrossiere-%C3%96rlike-TL-AG-100054582723779/" target="_blank" rel="noreferrer">
                                    Facebook:
                                    <img src={Facebook} alt="Facebook" className="facebook-icon" />
                                </a>
                            </div>
                        </section>

                        <p className="seo-text">SEO & Webdesign by <a  href="https://marketingmaster.ch" className="marketingmaster">marketingmaster.ch</a> with love</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;