import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Oerlikon from "./assets/Oerlikon.jpg";
import Icon from "./assets/Icon.jpg";

import Home from "./assets/pages/Home.jsx";
import Carosserie from "./assets/pages/Carosserie.jsx";
import Aufbereitung from "./assets/pages/Aufbereitung.jsx";
import './assets/Styles/Home.css';
import './assets/Styles/App.css';
import Instagram from "./assets/Instagram.jpg";
import Linkedin from "./assets/Linkedin-logo.png";

function App() {

    /**
     * Gördülési effektus a lap tetejére
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
                        <marquee><span className="logo-text">
                            CARROSSERIE <span className="örlike">ÖRLIKE</span> TL AG
                        </span></marquee>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/home" className="nav-link active">Home</Link>
                    <Link to="/carosserie" className="nav-link">Carrosserie</Link>
                    <Link to="/aufbereitung" className="nav-link">Aufbereitung</Link>
                </div>
            </nav>

            {/* Oldalsó gombok és Vissza a tetejére gomb */}
            <div className="sidebar-icons">
                <a href="tel:+41443119412" className="sidebar-icon-btn" title="Anrufen">
                    📞
                </a>
                <a href="mailto:info@oerlike.ch" className="sidebar-icon-btn" title="E-Mail senden">
                    ✉️
                </a>
            </div>


            <button className="scroll-to-top" onClick={scrollToTop} title="Nach oben scrollen">
                ▲
            </button>

            {/* Hauptinhalt & Routing */}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/carosserie" element={<Carosserie />} />
                    <Route path="/aufbereitung" element={<Aufbereitung />} />
                </Routes>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <section className="footer-col">
                            <h3>Carrosserie Örlike TL AG</h3>
                            <p>Duje Antonina / Michael Nufer</p>
                            <p>Fabrikstrasse 17</p>
                            <p>8102 Oberengstringen</p>
                        </section>

                        <section className="footer-col">
                            <h3>Kontakt</h3>
                            <p>Tel: 044 311 94 12</p>
                            <p>Fax: 044 311 94 22</p>
                            <p>E-Mail: info@oerlike.ch</p>
                        </section>

                        <section className="footer-col opening-hours">
                            <h3>Öffnungszeiten</h3>
                            <p>Mo – Do: 07.30 – 12.00 Uhr | 13.00 – 17.30 Uhr</p>
                            <p>Fr: 07.30 – 12.00 Uhr | 13.00 – 16.30 Uhr</p>
                        </section>
                    </div>

                    <hr className="footer-divider my-8 border-neutral-700" />

                    <div className="footer-bottom">
                        <p>
                            Copyright &copy; {new Date().getFullYear()} oerlike.ch |{" "}
                            <Link to="/impressum" className="hover:underline">Impressum</Link> |{" "}
                            <Link to="/wiki" className="hover:underline">Wiki</Link>
                        </p>
                        <section className="social-media">
                            <span>&#128073;</span>
                            <span>Folge jetzt unseren Social Media Kanälen:</span>
                            <span>&#128072;</span>
                            <a href="https://www.instagram.com/carrosserie_oerlike/" target="_blank" >Instagram:
                                <img src={Instagram} alt="Instagram" className="instagram-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/peter-ledergerber-689902b8/?isSelfProfile=false" target="_blank" >Linkedin:
                                <img src={Linkedin} alt="Instagram" className="linkedin-icon" />
                            </a>

                        </section>
                        <p>SEO & Webdesign by marketingmaster.ch with love</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;