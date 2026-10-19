import React from "react";
import "../Styles/Autopflege.css";
import Autopflegebild from "../Autopflege.jpg";

function Autopflege() {
    return (
        <div className="Background-Intro">
            {/* Bild-Hero über die volle Breite */}
            <div className="hero-image-wrapper">
                <img src={Autopflegebild} alt="Autopflege" className="hero-fullwidth-img" />
            </div>

            <div className="autopflege-container">
                <section className="border-welcome">
                    <h2 className="content-section">
                        AUTOPFLEGE VOM SPEZIALISTEN
                    </h2>

                    <p>
                        Mit Autos ist es wie mit dem menschlichen Körper: Ohne regelmässige Pflege verschlechtert sich der Zustand von Woche zu Woche. Spätestens nach ein paar Jahren ist der Punkt erreicht, an dem nichts mehr geht. Lassen Sie es nicht so weit kommen und wenden Sie sich an einen Fachbetrieb wie die Carrosserie Örlike: Als ausgewiesene Spezialisten für die Autopflege kümmern wir uns um jeden Quadratzentimeter Ihres Wagens und sorgen dafür, dass Ihr Gefährt in neuem Glanz erstrahlt.
                    </p>

                    <h2>Fachgerechte Beseitigung von Beulen</h2>
                    <p>
                        Sichtbare Beulen sind wie hässliche Narben, die das Antlitz Ihres Wagens verunstalten. Anders als echte Narben können Beulen jedoch entfernt werden. Dazu ist nicht immer der Einsatz von schwerem Gerät vonnöten: Kleine Beulen lassen sich oftmals mittels Drücktechnik beseitigen. Diese Methode ist nicht nur sehr effizient, sondern auch kostensparend. Wenn Ihr Fahrzeug eine oder mehrere unansehnliche Dellen aufweist, bringen Sie es in unsere Spenglerei – im Rahmen einer Autopflege entfernen wir kleine und grosse Beulen, sodass die Aussenhaut Ihres Wagens wieder glatt und unverbraucht wirkt.
                    </p>

                    <h2>Lackversiegelungen der Oberklasse</h2>
                    <p>
                        Der Autolack ist das ganze Jahr hindurch zahlreichen Strapazen ausgesetzt. Im Winter machen Schnee, Graupel und Streusalz der Lackierung zu schaffen. Im Sommer können Hitze, Blütenpollen und Insekten die Aussenhaut Ihres Fahrzeugs angreifen. Eine Autopflege bei Örlike schützt den Lack Ihres Wagens vor äusserlichen Einflüssen: Wir polieren Ihr Fahrzeug fachgerecht und führen anschliessend eine Versiegelung durch, bei der der Lack mit einer schützenden Pflegeschicht überzogen wird. Hierdurch kann aggressiver Schmutz nicht mehr haften bleiben, und die Gefahr von Kratzern verringert sich.
                    </p>

                    <h2>Eine gute Investition für Autoverkäufer</h2>
                    <p>
                        Planen Sie, Ihren Wagen zu verkaufen? Auch in diesem Fall ist die Carrosserie Örlike der richtige Ansprechpartner. Eine Autopflege in unserem Fachbetrieb hat einen stark verjüngenden Effekt und sorgt auf diese Weise für eine deutliche Wertsteigerung. Anstatt sich am Durchschnittspreis für das jeweilige Modell zu orientieren, setzen Sie den Preis einfach ein- bis zweitausend Franken höher an. Die Interessenten kommen ganz von alleine: Gepflegte Autos sind auf dem Markt sehr gefragt und erzielen weit höhere Verkaufspreise als Fahrzeuge, denen man ihr Alter ansieht.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Autopflege;