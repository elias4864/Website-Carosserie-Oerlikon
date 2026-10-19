
import React from 'react';
import  Fahrzeugaufbereitungbild from '../Fahzeugaufbereitung.jpg';
import '../Styles/Fahrzeugaufbereitung.css';
import autoaufbereitung from "../Autoaufberiten.jpg";

function Fahrzeugaufbereitung(){
    return (
        <div className="fahrzeug-container">
            <img src={Fahrzeugaufbereitungbild} />




            <section className="border-welcome">
                <h2 className="content-section">
                    FAHRZEUGAUFBEREITUNG VOM PROFI
                </h2>
                <p>
                    Die Fahrzeugaufbereitung ist einer der wichtigsten Arbeitsbereiche unseres Fachbetriebes. Wir sind perfekt auf die intensive Pflege Ihres Autos ausgerichtet: Unsere Mitarbeiter reinigen Ihren Wagen mit viel Hingabe und lassen keine Stelle aus. Egal, um welche Art von Fahrzeug es sich handelt – wenn Sie sich an die Carrosserie Örlike wenden, bekommen Sie Ihr Gefährt im Bestzustand zurück.
                </p>
                <h1>Aufbereitung von Firmenfahrzeugen</h1>
                <p>
                    Ob Malerbetrieb, Reinigungsservice oder Menüdienst – wer bei seinen Kunden mit einem Wagen vorfährt, dessen Aussenhaut verbeult oder stark korrodiert ist, hinterlässt keinen guten Eindruck. Wir lassen Ihren Firmenfahrzeugen eine umfassende Pflege zukommen: Unsere Mitarbeiter wenden ihre ganze Kunstfertigkeit an und bringen die Kotflügel, Scheiben und Verkleidungen Ihres Wagens wieder zum Glänzen. Selbst bei alten Autos können wir im Rahmen einer Fahrzeugaufbereitung viel bewirken. Roststellen an der Karosserie werden von uns schonend entfernt und so bearbeitet, dass man sie mit blossem Auge kaum erkennen kann.
                </p>
                <h2>Intensive Pflege von Privatwagen</h2>
                Besitzer von Privatwagen haben oftmals zu wenig Zeit, um sich um die Pflege ihrer Autos zu kümmern. Hinzu kommt, dass nur die wenigsten Laien über die Kenntnisse und handwerklichen Fähigkeiten verfügen, die für die Aufbereitung eines Fahrzeugs vonnöten sind. Überlassen Sie diese Arbeit einer Fachwerkstatt und vermeiden Sie, die Karosserie Ihres Wagens durch Ungeschicklichkeiten zu ruinieren! Eine professionelle Fahrzeugaufbereitung bei der Carrosserie Örlike versetzt Ihr Auto in einen optisch tadellosen Zustand und sorgt dafür, dass Sie sich jeden Tag an Ihrem Wagen erfreuen können.

                <h2>Instandsetzung von Unfallwagen</h2>
                <p>Ein Blechschaden ereignet sich schneller, als man denkt: Eine kleine Unaufmerksamkeit, und schon ist die Karosserie mit Kratzern oder einer unansehnlichen Delle verunstaltet. Bei grösseren Unfallschäden, etwa nach einem Auffahrunfall, ist eine Fahrzeugaufbereitung unumgänglich – zumindest dann, wenn man Wert auf einen gepflegten Auftritt legt. Die Carrosserie Örlike beseitigt Blech- und Lackschäden aller Art und kümmert sich bei Bedarf um die komplette Schadensabwicklung mit Ihrer Versicherung. Die Durchführung von Kunststoffreparaturen und das Ersetzen von Frontscheiben gehören ebenfalls zu unserem Leistungsangebot.</p>
            </section>



        </div>
    )
}

export default Fahrzeugaufbereitung;