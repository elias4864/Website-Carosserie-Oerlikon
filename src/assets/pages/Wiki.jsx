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
                <p className="wiki-text">Wiki</p>
            </div>

            <div className="grid content-container" style={{ width: '100%', maxWidth: '100%' }}>
                {/* Erste Box */}
                <div className="first-column">
                    <span className="info-text">Autoaufbereitung durch Spezialisten – in der Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/autoaufbereitung-durch-spezialisten/"}>
                        Finde mehr heraus
                    </button>
                </div>

                {/* Zweite Box */}
                <div className="second-column">
                    <span className="info-text">Carrosserie Örlike: Ihr zuverlässiger Partner rund ums Fahrzeug</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/ihr-zuverlaessiger-partner-rund-ums-fahrzeug/"}>
                        Finde mehr heraus
                    </button>
                </div>

                {/* Dritte Box */}
                <div className="third-column">
                    <span className="info-text">Fahrzeugaufbereitung durch Profis: Willkommen in der Carrosserie Örlike</span>
                    <button className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/fahrzeugaufbereitung-durch-profis/"}>
                        Finde mehr heraus
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Wiki;