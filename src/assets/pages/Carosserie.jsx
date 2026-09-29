import React from 'react';
// Passe den Pfad zu deiner Home.css bei Bedarf an (z. B. '../components/Styles/Home.css')
import '../Styles/Home.css';

import Auto from '../Auto.jpg';

function CarosseriePage() {
    return (
        <div className="Background-Intro">
            <section className="carosserie-section">
                <div className="image-wrapper">
                    <img src={Auto} alt="Auto Reparatur" className="carosserie-auto" />
                </div>
            </section>

            <div className="text-box text-box-spaced">
                <h2 className="content-section">
                    CARROSSERIE ÖRLIKE: IHR FACHBETRIEB FÜR DIE REPARATUR VON KRAFTFAHRZEUGEN
                </h2>

                <p>
                    Moderne Kraftfahrzeuge sind mechanische Wunderwerke, bei denen Tausende von Teilen verbaut werden. Dass es bei so viel Technik dann und wann zu Problemen kommen kann, liegt auf der Hand. Selbst hochwertige Fahrzeuge, die für sechsstellige Beträge den Besitzer wechseln, benötigen irgendwann eine kleinere oder grössere Reparatur.
                </p>

                <p>
                    Die Carrosserie Örlike repariert für Sie Fahrzeuge aller Klassen und Fabrikate. In unserer Werkstatt in der Fabrikstrasse beseitigen wir jegliche Schäden, die durch Abnutzung, Korrosion oder Unfälle entstanden sind. Egal, ob es um umfangreiche Instandsetzungsmassnahmen oder die Beseitigung kleinerer Kratzer am Fahrzeuglack geht – auf uns können Sie zählen.
                </p>

                <h2 className="section-title">Rückstandsfreies Ausbeulen von Karrosserieblechen</h2>
                <p>
                    Das lackfreie Ausbeulen von Karrosserieblechen ist eine kostensparende, aber auch sehr anspruchsvolle Arbeitsmethode. Wenn Sie Ihren Wagen zur Reparatur in unsere Werkstatt bringen, entfernen wir unansehnliche Dellen und Beulen mit einer Präzision, die Sie begeistern wird. Mithilfe der effizienten Drücktechnik wird die Beule gewissermassen von der Blechinnenseite „herausmassiert“. Je nach Art der Beschädigung kann auch die Smart/Spot-Repairmethode eine probate Lösung sein. Kleine und mittlere Lackschäden können durch eine punktuelle Behandlung sehr gezielt repariert werden. Unsere Experten wählen die für Sie günstigste Methode, um Ihre Karosserie wieder in einen akzeptablen Zustand zu versetzen.
                </p>

                <h2 className="section-title">Fachmännische Reparaturen von Oldtimern</h2>
                <p>
                    Die Reparatur von Oldtimern ist ein Gebiet, auf dem sich nur wenige Carrosserie-Spengler gut auskennen. Dies hat eine Vielzahl von Gründen. Der wohl Wichtigste ist, dass in früheren Zeiten andere Materialien für den Fahrzeugbau verwendet wurden. Ein Cabrio aus den 60ern hat hinsichtlich der Karrosseriepflege andere Ansprüche als ein Kleinwagen, der aus den späten 2000er-Jahren stammt. Unsere Fachleute sind mit diesen Besonderheiten bestens vertraut und verfügen über eine umfangreiche Expertise bei der Reparatur von Oldtimern aller Art. Die Instandsetzung von seltenen Exemplaren ist unsere Spezialität: Hier sind unsere Spengler voll in ihrem Element. Bringen Sie Ihr Sammlerstück in unsere Werkstatt – Sie werden es nicht bereuen!
                </p>
            </div>
        </div>
    );
}

export default CarosseriePage;