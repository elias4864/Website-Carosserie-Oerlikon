import React from 'react';

import Schrauben from '../Schrauben.jpg';
import Lackierei from '../Lackierei.jpg';
import Team from '../Team.jpg';
import Eingang from '../Eingang.webp';
import Rot from '../Rot.jpg';


import '../Styles/Home.css';

function Wiki() {
    return (
        <div className="impressum-wrapper">
            <div className="wiki"><img src={Rot} alt="Rotes Auto" className="auto" />
                <p className="wiki-text">Wiki</p>
            </div>
            <div className="grid content-container"><span className="info-text">Autoaufbereitung durch Spezialisten – in der Carrosserie Örlike</span>
                <button  className="btn-carosserie" onClick={() => window.location.href = "https://oerlike.ch/autoaufbereitung-durch-spezialisten/"}>
                    → Finde mehr heraus ←
                </button>
            </div>



        </div>
    );
}

export default Wiki;