import React, {useEffect, useRef, useState} from "react";
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
import Anfrage from "./assets/pages/Anfrage.jsx";
import Wiki from "./assets/pages/Wiki.jsx";
import emailjs from '@emailjs/browser';
import Datenschutzerklärung from './assets/pages/Datenschutzerklärung.jsx';
import PrivacyPolicy from "./assets/pages/PrivacyModal.jsx";

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
import {useNavigate} from "react-router-dom";
import PrivacyModal from "./assets/pages/PrivacyModal.jsx";



const translations = {
    de: {
        navHome: "Home",
        navCarrosserie: "Carrosserie",
        navAufbereitung: "Autoaufbereitung",
        navAufbereitungTitle:"Aufbereitung",
        navKontakt: "Kontakt",
        navLackierei: "Autolackiererei",
        navAnfrage: "Anfrage",

        navLackierereititle:"Lackierei",
        navDatenschutzerklärung: "Datenschutzerklärung",
        navPrivacyPolicy: "Datenschutzerklärung öffnen",
        wikiText:"Wiki",

        navAutolackieren: "Auto lackieren",
        newsletterTitle: " Unser Newsletter abonnieren",
        navKontakt2:"Kontakt aufnehmen",
        newsletterDesc: "Abonnieren Sie unseren Newsletter für aktuelle Angebote und News.",
        newsletterEmailPlaceholder: "Ihre E-Mail-Adresse",
        newsletterSubmit: "Abonnieren",
        newsletterSuccess: "Vielen Dank für Ihre Anmeldung!",
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
        navAufbereitungTitle:"Processing",
        navDatenschutzerklärung: "Privacy Policy",
        navAnfrage: "Inquiry",
        wikiText:"Wiki",

        navKontakt2: "make contact",
        navKontakt: "Contact",
        navSpenglerei: "Sheet Metal Work",
        navFahrzeugaufbereitung: "Vehicle detailing",
        navAutopflege: "Car Care",
        navSpengler: "Spengler",
        modalTitle: "Get in touch with us now",
        navLackierei: "Auto Body and Paint Shop",
        navAutolackieren: "Car painting",
        navLackierereititle:"paint shop",
        newsletterTitle: "Subscribe to our Newsletter",
        newsletterDesc: "Subscribe to our newsletter for the latest offers and news.",
        newsletterEmailPlaceholder: "Your email address",
        newsletterSubmit: "Subscribe",
        newsletterSuccess: "Thank you for subscribing!",
        navPrivacyPolicy:"Privacy Policy",
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
        navAufbereitung: "Preparazione auto",
        navAufbereitungTitle:"Trattamento",
        navKontakt: "Contatti",
        navDatenschutzerklärung:"Informativa sulla privacy",
        navPrivacyPolicy:"Informativa sulla privacy",
        wikiText:"Wiki",
        navAnfrage: "Richiesta",
        navKontakt2:"make contact",
        navLackierei: "Carrozzeria (verniciatura auto)",
        navAutolackieren: "Verniciare l'auto",
        navLackierereititle:"Reparto verniciatura",
        newsletterTitle: "Iscriviti alla nostro Newsletter",
        newsletterDesc: "Iscriviti alla nostra newsletter per ricevere le ultime offerte e novità.",
        newsletterEmailPlaceholder: "Il tuo indirizzo e-mail",
        newsletterSubmit: "Iscriviti",
        newsletterSuccess: "Grazie per l'iscrizione!",

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
        metaDesc: "Servizi professionali di carrozzeria, verniciatura, lattoneria e preparazione auto a Oberengstringen / Zurigo.",

    },
    fr: {
        navHome: "Accueil",
        navCarrosserie: "Carrosserie",
        navAufbereitung: "Préparation automobile",
        navAufbereitungTitle:"Traitement",
        navKontakt: "Contact",
        navGalerie: "Galerie",
        wikiText: "Wiki",
        navAnfrage: "Demande",
        navLackierei: "Atelier de peinture automobile",
        navDatenschutzerklärung:"Déclaration de protection des données",
        navPrivacyPolicy:"Déclaration de protection des données",
        navLackierereititle:"atelier de peinture",
        navAutolackieren: "Peindre une voiture",
        navKontakt2:"Prendre contact",
        navFahrzeugaufbereitung: "Préparation esthétique de véhicules",
        navAutopflege: "Entretien automobile",
        newsletterTitle: "S'abonner à notre Newsletter",
        newsletterDesc: "Abonnez-vous à notre newsletter pour recevoir nos dernières offres et actualités.",
        newsletterEmailPlaceholder: "Votre adresse e-mail",
        newsletterSubmit: "S'abonner",
        newsletterSuccess: "Merci für votre inscription!",
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
    const [handleNewsletterSubmit,setHandleNewsletterSubmit] = useState();
    const[newsletterSubmitted, setNewsletterSubmitted] = useState();
    const[newsletterEmail, setNewsletterEmail] = useState();
    const form =useRef();


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    const sendEmail = () => {
        event.preventDefault();


        const SERVICE_ID = 'service_yt8puti';
        const TEMPLATE_ID = 'template_gkm0jlr';
        const PUBLIC_KEY = 'WKjI65zfLNEREiVHf';

        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
            .then((result) => {
                alert('E-Mail erfolgreich gesendet!');
                console.log("E-Mail sent with Request: " + result);
                setFormData({name: '', email: '', phone: '', message: '', newsletter: false});

                // Weiterleitung nach erfolgreichem Senden
                navigate('/anfrage');
            })
            .catch((error) => {
                console.error('EmailJS Error:', error.text);
                setStatus('error');
                alert('Fehler beim Senden: ' + error.text);
            });
    }

    const navigate=useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        alert("Du hat erfolgreich die Anfrage gesendet!");
        navigate('/anfrage');
    }



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
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
                        <span className="nav-link">{t.navLackierereititle} ▾</span>
                        <div className="dropdown-content">
                            <Link to="/lackiererei">{t.navLackierei}</Link>
                            <Link to="/lackieren">{t.navAutolackieren}</Link>
                        </div>
                    </div>

                    {/* Dropdown für Aufbereitung */}
                    <div className="dropdown">
                        <span className="nav-link">{t.navAufbereitungTitle} ▾</span>
                        <div className="dropdown-content">
                            <Link to="/aufbereitung">{t.navAufbereitung}</Link>
                            <Link to="/autopflege">{t.navAutopflege}</Link>
                            <Link to="/fahrzeugaufbereitung">{t.navFahrzeugaufbereitung}</Link>
                        </div>
                    </div>


                    <div className="dropdown">
                        <span className="nav-link">{t.navKontakt} ▾</span>
                        <div className="dropdown-content">
                    <Link to="/galerie" className="nav-link">{t.navGalerie}</Link>
                    <Link to="/kontakt" className="nav-link">{t.navKontakt}</Link>
                        </div>
                    </div>


                    <Link to="/anfrage" className="nav-link">{t.navAnfrage}</Link>

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
                    <Route path="/anfrage" element={<Anfrage lang={language} />} />
                    <Route path="/lackieren" element={<Autolackieren lang={language} />} />
                    <Route path="/autopflege" element={<Autopflege lang={language} />} />
                    <Route path="/fahrzeugaufbereitung" element={<Fahrzeugaufbereitung lang={language} />} />
                    <Route path="/datenschutzerklärung" element={<Datenschutzerklärung lang={language} />} />
                    <Route path="/privacymodal" element={<PrivacyModal lang={language} />} />
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
                            <p className="highlight"><a href="mailto:info@oerlike.ch">E-Mail: info@oerlike.ch</a></p>
                        </section>

                        <section className="footer-col opening-hours">
                            <h3>{t.hoursTitle}</h3>
                            <p>{t.hoursWeek}</p>
                            <p>{t.hoursFri}</p>
                        </section>
                        <section className="footer-col newsletter-section">
                            <h3>{t.newsletterTitle}</h3>
                            <p>{t.newsletterDesc}</p>
                            {newsletterSubmitted ? (
                                <p className="newsletter-success">{t.newsletterSuccess}</p>
                            ) : (
                                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder={t.newsletterEmailPlaceholder}
                                        value={newsletterEmail}
                                        onChange={(e) => setNewsletterEmail(e.target.value)}
                                        required
                                        tabIndex="3"

                                        className="newsletter-input"
                                    />
                                    <button  onClick={handleSubmit} type="submit" className="newsletter-btn">
                                        {t.newsletterSubmit}
                                    </button>

                                    <div className="newsletter-checkbox-wrapper">
                                        <input
                                            type="checkbox"
                                            id="newsletter"
                                            name="newsletter"
                                            value="ja"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="newsletter">
                                            Ich möchte den Newsletter der Carrosserie Örlike jetzt abonnieren
                                        </label>
                                    </div>
                                </form>
                            )}
                        </section>
                    </div>

                    <hr className="footer-divider my-8 border-neutral-700" />

                    <div className="footer-bottom">
                        <p className="copyright-text">
                            Copyright &copy; {new Date().getFullYear()} oerlike.ch |{" "}
                            <Link to="/impressum" className="hover">Impressum</Link> |{" "}
                            <Link to="/wiki" className="hover">{t.wikiText}</Link> |{""}
                            <Link to="/datenschutzerklärung" className="hover">{t.navDatenschutzerklärung}</Link>|{""}
                            <Link to="/privacymodal" className="hover">{t.navPrivacyPolicy}</Link>

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