import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

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
import ReactGA from 'react-ga4';

ReactGA.initialize('G-M16XMEHY78');

import Kontakt from "./assets/pages/Kontakt.jsx";
import Lackierei from "./assets/pages/Lackierei.jsx";
import Spengler from "./assets/pages/Spengler.jsx";
import Whatsapp from "./assets/Whatsapp.png";
import { Helmet } from "react-helmet-async";
import Galerie from "./assets/pages/Galerie.jsx";
import Autolackieren from "./assets/pages/Autolackieren.jsx";
import Autopflege from "./assets/pages/Autopflege.jsx";
import Fahrzeugaufbereitung from "./assets/pages/Fahrzeugaufbereitung.jsx";

const translations = {
    de: {
        navHome: "Home",
        navCarrosserie: "Carrosserie",
        navAufbereitung: "Aufbereitung",
        navKontakt: "Kontakt",
        navLackierei: "Lackiererei",
        navAutolackieren: "Auto lackieren",
        navSpenglerei: "Spenglerei",
        navGalerie: "Galerie",
        navSpengler: "Spengler",
        navAutopflege: "Autopflege",
        navFahrzeugaufbereitung: "Fahrzeugaufbereitung",
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
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen",
        metaTitle: "Carrosserie Örlike TL AG | Carrosserie, Lackiererei & Spenglerei in Oberengstringen",
        metaDesc: "Professionelle Carrosseriearbeiten, Unfallinstandsetzung, Lackiererei, Spenglerei und Fahrzeugaufbereitung in Oberengstringen / Zürich.",
    },
    en: {
        navHome: "Home",
        navCarrosserie: "Body Shop",
        navAufbereitung: "Car Detailing",
        navKontakt: "Contact",
        navSpenglerei: "Sheet Metal Work",
        navFahrzeugaufbereitung: "Vehicle detailing",
        navAutopflege: "Car Care",
        navSpengler: "Spengler",
        modalTitle: "Get in touch with us now",
        navLackiererei: "Paint shop",
        navAutolackieren: "Car painting",
        navGalerie: "Gallery",
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
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen",
        metaTitle: "Carrosserie Örlike TL AG | Body & Paint Shop Oberengstringen",
        metaDesc: "Professional body shop, paint shop, sheet metal work, and car detailing in Oberengstringen, Zurich."
    },
    it: {
        navHome: "Home",
        navCarrosserie: "Carrozzeria",
        navAufbereitung: "Preparazione",
        navKontakt: "Contatti",
        navLackiererei: "Verniciatura",
        navAutolackieren: "Verniciare l'auto",
        navAutopflege: "Cura dell'auto",
        navSpenglerei: "Lattoneria",
        navSpengler: "Lattoniere",
        navGalerie: "Galleria",
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
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen",
        metaTitle: "Carrozzeria Örlike TL AG | Carrozzeria e Verniciatura Oberengstringen",
        metaDesc: "Servizi professionali di carrozzeria, verniciatura, lattoneria e preparazione auto a Oberengstringen / Zurigo."
    },
    fr: {
        navHome: "Accueil",
        navCarrosserie: "Carrosserie",
        navAufbereitung: "Préparation",
        navKontakt: "Contact",
        navGalerie: "Galerie",
        navLackiererei: "Atelier de peinture",
        navAutolackieren: "Peindre une voiture",
        navFahrzeugaufbereitung: "Préparation esthétique de véhicules",
        navAutopflege: "Entretien automobile",
        navSpenglerei: "Zinguerie",
        navSpengler: "Spengler",
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
        companyAddress: "Fabrikstrasse 17, 8102 Oberengstringen",
        metaTitle: "Carrosserie Örlike TL AG | Carrosserie & Peinture à Oberengstringen",
        metaDesc: "Services professionnels de carrosserie, peinture, zinguerie et préparation automobile à Oberengstringen / Zurich."
    }
};

function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }, [location]);

    return null;
}

function App() {
    const [language, setLanguage] = useState("de");
    const [showPhoneModal, setShowPhoneModal] = useState(false);

    useEffect(() => {
        const isLocalhost = Boolean(
            window.location.hostname === 'localhost' ||
            window.location.hostname === '[::1]' ||
            window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
        );

        if (window.location.protocol === "http:" && !isLocalhost) {
            window.location.href = window.location.href.replace("http://", "https://");
        }
    }, []);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const t = translations[language];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Carrosserie Örlike TL AG",
        "image": "https://oerlike.ch/assets/Icon.jpg",
        "@id": "https://oerlike.ch",
        "url": "https://oerlike.ch",
        "telephone": "+41443119412",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Fabrikstrasse 17",
            "addressLocality": "Oberengstringen",
            "postalCode": "8102",
            "addressCountry": "CH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.412,
            "longitude": 8.468
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "07:30",
                "closes": "17:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday"],
                "opens": "07:30",
                "closes": "16:30"
            }
        ],
        "priceRange": "$$"
    };

    return (
        <>
            <AnalyticsTracker />
            <Helmet>
                <html lang={language} />
                <title>{t.metaTitle}</title>
                <meta name="description" content={t.metaDesc} />
                <link rel="canonical" href="https://oerlike.ch" />

                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

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

                    {/* Dropdown für Carrosserie & Spenglerei */}
                    <div className="dropdown">
                        <span className="nav-link">{t.navCarrosserie} ▾</span>
                        <div className="dropdown-content">
                            <Link to="/reparatur">{t.navCarrosserie}</Link>
                            <Link to="/spenglerarbeiten">{t.navSpenglerei}</Link>
                            <Link to="/spengler">{t.navSpengler}</Link>
                        </div>
                    </div>

                    {/* Dropdown für Lackierung */}
                    <div className="dropdown">
                        <span className="nav-link">{t.navLackierei} ▾</span>
                        <div className="dropdown-content">
                            <Link to="/lackiererei">{t.navLackierei}</Link>
                            <Link to="/lackieren">{t.navAutolackieren}</Link>
                        </div>
                    </div>

                    {/* Dropdown für Aufbereitung */}
                    <div className="dropdown">
                        <span className="nav-link">{t.navAufbereitung} ▾</span>
                        <div className="dropdown-content">
                            <Link to="/aufbereitung">{t.navAufbereitung}</Link>
                            <Link to="/autopflege">{t.navAutopflege}</Link>
                            <Link to="/fahrzeugaufbereitung">{t.navFahrzeugaufbereitung}</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className="nav-link">{t.navKontakt}▾</span>
                        <div  className="dropdown-content>">


                    <Link to="/galerie" className="nav-link">{t.navGalerie}</Link>
                    <Link to="/kontakt" className="nav-link">{t.navKontakt}</Link>
                      </div>
                    </div>

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
                        <h2 id="modal-title">Nehmen Sie jetzt Kontakt mit uns auf</h2>
                        <span>👉</span> <p>Telefon: <strong>044 311 94 12</strong></p> <span>👈</span>
                        <a href="tel:+41443119412" className="call-btn">
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

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home lang={language} />} />
                    <Route path="/home" element={<Home lang={language} />} />
                    <Route path="/reparatur" element={<Carosserie lang={language} />} />
                    <Route path="/spenglerarbeiten" element={<Spenglerarbeiten lang={language} />} />
                    <Route path="/impressum" element={<Impressum lang={language} />} />
                    <Route path="/spengler" element={<Spengler lang={language} />} />
                    <Route path="/wiki" element={<Wiki />} />
                    <Route path="/kontakt" element={<Kontakt lang={language} />} />
                    <Route path="/lackiererei" element={<Lackierei lang={language} />} />
                    <Route path="/aufbereitung" element={<Aufbereitung lang={language} />} />
                    <Route path="/galerie" element={<Galerie lang={language} />} />
                    <Route path="/lackieren" element={<Autolackieren lang={language} />} />
                    <Route path="/autopflege" element={<Autopflege lang={language} />} />
                    <Route path="/fahrzeugaufbereitung" element={<Fahrzeugaufbereitung lang={language} />} />
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
                            <p className="social-heading">
                                <span>{t.socialText}</span>
                            </p>

                            <div className="social-links">
                                <span>👉</span>
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
                                <a href="https://api.whatsapp.com/send/?phone=41765250078&text=Hallo+ID+Carrosserie+Swiss+%EF%BF%BD+Ich+m%C3%B6chte+eine+unverbindliche+Offerte+oder+einen+Termin+anfragen.+Es+geht+um+Carrosserie-+oder+Lackarbeiten+%28Park-+oder+Unfallschaden%29.+Gerne+sende+ich+Fotos+und+Fahrzeugdaten.+Vielen+Dank%21&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                                    Whatsapp:
                                    <img src={Whatsapp} alt="Whatsapp" className="whatsapp-icon" />
                                </a>
                                <span>👈</span>
                            </div>
                        </section>

                        <p className="seo-text">SEO & Webdesign by <a href="https://marketingmaster.ch" className="marketingmaster">marketingmaster.ch</a> with love</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;