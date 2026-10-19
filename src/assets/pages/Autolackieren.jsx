import React from "react";
import Lackieren from "../Autolackieren.jpg";
import "../Styles/Autolackieren.css";

function Autolackieren() {
    return (
            <main className="galerie-container">
                <img src={Lackieren} alt="Autolackieren" className="lackieren"/>

                <section className="border-welcome">
                    <h2 className="content-section">
                        AUTO LACKIEREN LASSEN? AM BESTEN BEI Carrosserie ÖRLIKE!
                    </h2>
                    <p>
                        Das Auto lackieren ist eine Arbeit, die eine Menge Know-how und Erfahrung erfordert. Selbst kleinste Fehler können bei dieser Tätigkeit verheerende Folgen haben. Zudem lauern hier auch gesundheitliche Gefahren, die man nicht unterschätzen sollte: Wer beim Auto lackieren auf das Tragen einer Atemmaske und einer Schutzbrille verzichtet, riskiert eine dauerhafte Schädigung der Atemwege.
                    </p>
                    <p>
                        Ein solches Szenario können Sie vermeiden, wenn Sie sich an einen spezialisierten Fachbetrieb wie Carrosserie Örlike wenden. In unserem Betrieb lackieren wir seit vielen Jahren Kraftfahrzeuge aller Typen – vom Oldtimer bis zum Lieferwagen. Egal, ob es um die Beseitigung eines kleinen Lackschadens oder eine Speziallackierung für einen PS-starken Sportwagen geht: Auf unsere Kompetenz können Sie vertrauen.
                    </p>

                    <h2 className="content-section">Zertifizierte Qualität</h2>

                    <p>
                        Unsere Autospenglerei in Oberengstringen ist nach den Richtlinien des Schweizerischen Carrosserieverbandes (Carrosserie Suisse) zertifiziert. Im Carrosserie Suisse sind etwa 700 Unternehmen organisiert; 85 Prozent davon sind Klein- und Mittelbetriebe wie Carrosserie Örlike. Das Carrosserie Suisse-Zertifikat wird nur an Firmen vergeben, die die strengen Qualitätsrichtlinien des Verbandes erfüllen.
                    </p>

                    <p>
                        Wenn Sie bei uns Ihr Auto lackieren lassen, können Sie daher sicher sein, dass Ihr Fahrzeug in den besten Händen ist. Unser Betrieb steht seit vielen Jahren für hochwertige Spenglerarbeiten und geniesst in der regionalen Autobranche einen ausgezeichneten Ruf. In unserer Foto-Galerie können Sie sich einen Eindruck von der Qualität unserer Arbeit machen. Weitere Informationen erhalten Sie telefonisch unter{" "}
                        <span className="highlight">
                            <a href="tel:+41443119412" title="Bitte sofort anrufen!" className="call-btn">
                                📞 +41443119412
                            </a>
                        </span>{" "}
                        sowie per Kontaktformular oder per E-Mail ✉️{" "}
                        <span className="highlight">
                            <a href="mailto:info@oerlike.ch" className="highlight">
                                info@oerlike.ch
                            </a>
                        </span>.
                    </p>
                </section>
            </main>

    );
}

export default Autolackieren;