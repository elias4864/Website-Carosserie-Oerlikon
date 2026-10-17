import React from 'react';

import Schrauben from '../Schrauben.jpg';
import Lackierei from '../Lackierei.jpg';
import Team from '../Team.jpg';
import Eingang from '../Eingang.webp';
import Rot from '../Rot.jpg';
import '../Styles/Wiki.css';
import '../Styles/Home.css';

function Wiki() {
    return (
        <div className="impressum-wrapper" style={{ width: '100%' }}>
            <div className="wiki">
                <img src={Rot} alt="Rotes Auto" className="auto" />
                <h1 className="wiki-text">Wiki</h1>
            </div>

            <div className="grid content-container" style={{ width: '100%', maxWidth: '100%' }}>
                {/* Erste Box */}
                <div className="column">
                    <span className="info-text">Autoaufbereitung durch Spezialisten – in der Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/autoaufbereitung-durch-spezialisten/"}>
                        Finde mehr heraus
                    </button>
                </div>

                {/* Zweite Box */}
                <div className="column">
                    <span className="info-text">Carrosserie Örlike: Ihr zuverlässiger Partner rund ums Fahrzeug</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/ihr-zuverlaessiger-partner-rund-ums-fahrzeug/"}>
                        Finde mehr heraus
                    </button>
                </div>

                {/* Dritte Box */}
                <div className="column">
                    <span className="info-text">Fahrzeugaufbereitung durch Profis: Willkommen in der Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/fahrzeugaufbereitung-durch-profis/"}>
                        Finde mehr heraus
                    </button>
                </div>


                <div className="column">
                    <span className="info-text">Ihre Autogarage in Oberenstringen – Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/ihre-autogarage-in-oberenstringen/"}>
                        Finde mehr heraus
                    </button>
                </div>



                <div className="column">
                    <span className="info-text">Carrosserie Örlike: Autolackiererei mit hohem Qualitätsanspruch</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/autolackiererei-mit-hohem-qualitaetsanspruch/"}>
                        Finde mehr heraus
                    </button>
                </div>


                <div className="column">
                    <span className="info-text">Autoreparatur durch Spezialisten – in der Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/autoreparatur-durch-spezialisten/"}>
                        Finde mehr heraus
                    </button>
                </div>










                <div className="column">
                    <span className="info-text">Ihre Lackiererei in Zürich: Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/ihre-lackiererei-in-zuerich/"}>
                        Finde mehr heraus
                    </button>
                </div>


                <div className="column">
                    <span className="info-text">Die Spenglerei in Ihrer Nähe: Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/die-spenglerei-in-ihrer-naehe/"}>
                        Finde mehr heraus
                    </button>
                </div>



                <div className="column">
                    <span className="info-text">Ihr Spritzwerk in Oberengstringen: Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/ihr-spritzwerk-in-oberengstringen/"}>
                        Finde mehr heraus
                    </button>
                </div>


                <div className="column">
                    <span className="info-text">Scheibenersatz vom Fachspezialisten: Willkommen in der Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/scheibenersatz-vom-fachspezialisten/"}>
                        Finde mehr heraus
                    </button>
                </div>








            </div>
        </div>
    );
}

export default Wiki;