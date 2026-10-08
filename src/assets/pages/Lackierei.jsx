import React from "react";
import Rot from "../Rot.jpg";
import "../Styles/Lackiererei.css";
import Lackiererei from "../Lackiererei.jpg";

function Lackierei() {
    return (
        <div className="Background-Intro">
                {/* Full-Width Bild-Wrapper */}
                    <div className="image-wrapper">
                        <img src={Lackiererei} alt="Autoaufbereitung" className="lackiererei " />
                        </div>
            <div className="text-box text-box-spaced">
                <h2 className="section-title">
                    CARROSSERIE ÖRLIKE: DIE AUTOLACKIEREREI IHRES VERTRAUENS</h2>
               <p>Wie der Kauf eines Autos ist auch die Fahrzeugreparatur Vertrauenssache. Dies gilt vor allem dann, wenn es um Reparaturen an der Aussenhaut Ihres Wagens geht. Bei der Wahl einer Autolackiererei sollte man tunlichst keine Kompromisse machen, da man sonst damit rechnen muss, dass das Erscheinungsbild des Wagens teilweise oder sogar vollständig ruiniert wird.

                   In der Carrosserie Örlike kümmern sich ausgewiesene Experten um den Lack Ihres Fahrzeugs. Die Mitarbeiter unserer Autolackiererei sind im Umgang mit Schäden, die durch Unfälle oder Korrosion entstanden sind, geübt und wissen instinktiv, welche die beste Lösung zur Beseitigung des Problems ist. Jede Massnahme wird zuvor mit dem Kunden abgestimmt, damit es später nicht zu unschönen Diskussionen über die Höhe der Rechnung kommt.</p>
                <h2 className="section-title">ZUVERLÄSSIGER ANSPRECHPARTNER BEI PARKBEULEN</h2>
                <p>Parkschäden am eben noch makellosen Autolack sind nicht nur höchst ärgerlich – sie erfordern auch die Durchführung von Reparaturarbeiten, für die manche Werkstätten vier bis fünf Tage brauchen. Wenn Ihr Auto bei einem missglückten Parkmanöver eine unansehnliche Beule davongetragen hat, ist es eine gute Idee, unsere Fachwerkstatt zu kontaktieren: Wir kümmern uns sofort um den Schaden und beulen die betroffene Stelle wieder aus. Beim Lackieren verwenden wir einen 100-prozentig passenden Farbton, der anhand einer ausgeklügelten Mischformel ermittelt wird. Schon nach kurzer Zeit erhalten Sie Ihren Wagen im Bestzustand zurück.</p>
                <h2 className="section-title">FACHGERECHTE KOMPLETTLACKIERUNGEN VON FAHRZEUGEN ALLER MARKEN
                </h2>
                <p>Möchten Sie Ihrem Fahrzeug einen völlig neuen Look verleihen? Kein Problem: In unserer Autolackiererei verfügen wir über alle Ausrüstungsgegenstände, um diese Aufgabe zu Ihrer Zufriedenheit zu bewältigen. Unser Spritzwerk wird laufend modernisiert und ist mit der neuesten Technik ausgestattet. Egal, ob es sich um einen Kleinwagen oder einen Laster handelt: Wir lackieren Ihr Auto fachgerecht und machen es zu einem echten Unikat. Wenn Sie mehrere Fahrzeuge lackieren lassen möchten, stehen wir Ihnen ebenfalls gerne zur Verfügung. Unsere Autolackiererei ist für Sie unter der Rufnummer <p><span className="highlight">044 311 94 12</span></p>  sowie per Kontaktformular oder per E-Mail ( <span className="highlight">info@oerlike.ch</span> ) erreichbar.</p>

            </div>

        </div>





    );
}

export default Lackierei;