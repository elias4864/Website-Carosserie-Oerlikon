import React from "react";
import Spenglerei  from "../Spenglerei.jpg";
import  '../Styles/Spenglerarbeiten.css';


function Spenglerarbeiten({lang} ) {
    return (
        <div className="Background-Intro">
            {/* Full-Width Bild-Wrapper */}
            <div className="image-wrapper">
                <img src={Spenglerei} alt="Spenglerei" className="spenglerei-img" />
            </div>

            {/* Textbereich unterhalb des Bildes */}
            <div className="text-box text-box-spaced">
                <h2 className="section-title">
                    PROFESSIONELLE SPENGLERARBEITEN UND KAROSSERIEREPARATUR
                </h2>
                <p>
                    Ein Unfall oder ein Unwetterschaden hinterlässt oft unschöne Spuren an der Karosserie. In unserer Fachwerkstatt führen wir sämtliche Spenglerarbeiten präzise, fachgerecht und nach höchsten Herstellervorgaben aus. Von der kleinen Parkbeule bis hin zum komplexen Unfallschaden bringen wir die Struktur Ihres Fahrzeugs wieder in Form.
                </p>

                <h2 className="section-title">
                    DRÜCKTECHNIK UND BEULENREPARATUR OHNE LACKIEREN
                </h2>
                <p>
                    Nicht jeder Schaden erfordert eine aufwendige Neulackierung. Mit moderner Drück- und Ausbeultechnik entfernen wir Hagelschäden und Parkdellen schonend und kosteneffizient, ohne den Original Lack Ihres Autos zu beschädigen. Das spart Zeit und schont Ihr Budget.
                </p>

                <h2 className="section-title">
                    IHRE ANSPRECHPARTNER FÜR SPENGLERARBEITEN
                </h2>
                <p>
                    Haben Sie Fragen zu unseren Spenglerarbeiten oder möchten Sie einen Kostenvoranschlag einholen? Wir beraten Sie gerne persönlich.
                </p>
                <p>
                    Sie erreichen uns unter der Rufnummer{" "}
                    <span className="highlight">   <a   href="+41443119412"  onClick={() => window.location.href = "tel:+41443119412"}  title=" Bitte sofort anrufen!" className="call-btn">+41443119412</a></span>

                    sowie per E-Mail (
                    <span className="highlight">
                        <a href="mailto:info@oerlike.ch" className="highlight">info@oerlike.ch</a>
                    </span>
                    ) oder direkt über unser Kontaktformular.
                </p>
            </div>
        </div>
    );
}

export default Spenglerarbeiten;