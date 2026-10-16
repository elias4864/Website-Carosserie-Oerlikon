import Spengler from "../Spengler.jpg";
import React from "react";
import '../Styles/Home.css';

function Spenglerarbeiten({lang} ) {


    return (
        <div className="spengler-container">
            <img src={Spengler} alt="Spenglerei" className="spenglerei-img" />
            <section className="border-welcome">
                <h2 className="content-section">
                    SPENGLER GESUCHT? Carrosserie ÖRLIKE NIMMT SICH IHRES WAGENS AN!

                </h2>
                <p>
                    Ein Spengler führt alle handwerklichen Arbeiten aus, die mit Blech zu tun haben. Da die Karrosserien von Kraftfahrzeugen auch heute noch überwiegend aus Stahl und anderen Metallen bestehen, sind Spengler aus dem Automobilbau nicht wegzudenken: Sie entfernen hässliche Beulen, kümmern sich um die Beseitigung von Lackschäden in Dellen und befreien Karrosserien von Rostflecken.

                    Wenn Sie die Dienste einer Spenglerei benötigen, sind Sie bei Carrosserie Örlike am richtigen Ort. Wir reparieren Ihr Fahrzeug mit der ganzen Kompetenz einer markenunabhängigen Werkstatt und garantieren die Einhaltung sämtlicher Herstellerstandards. Sie erreichen uns per Telefon ( <a   href="+41443119412"  onClick={() => window.location.href = "tel:+41443119412"} className="call-btn">044 311 94 12 </a>), via E-Mail ( <a href="mailto:info@oerlike.ch"  className="highlight">info@oerlike.ch</a>) sowie über unser Kontaktformular.
                </p>

                <h2>
                    Erstklassiger Werkstattservice</h2>

                <p>Als Fachbetrieb für Spengler-Arbeiten sind wir bestrebt, unseren Werkstattservice stetig zu verbessern. Besonderen Wert legen wir auf die Kundenberatung – ein Punkt, der in vielen Spenglereien zu kurz kommt. Bei Carrosserie Örlike dürfen Sie mit einer umfassenden Beratung rechnen, die alle Aspekte einschliesst, welche bei der Bearbeitung Ihrer Karrosserie von Bedeutung sind. Unsere freundlichen Mitarbeiter nehmen sich Zeit für Sie und beantworten Ihnen alle Fragen, die sich um die Reparatur Ihres Wagens sowie um die Übernahme der Kosten drehen.</p>

                <h2>Grosses Spektrum an Werkstattleistungen

                </h2>
                <p>Die Carrosserie Örlike zeichnet sich durch ein vielfältiges Leistungsangebot aus, das neben der Durchführung von Karrosseriearbeiten auch die Umsetzung von Speziallackierungen, das Schweissen von Kunststoffverkleidungen und die detailgetreue Restauration von Oldtimern beinhaltet. Des Weiteren kümmern wir uns um den fachgerechten Austausch von beschädigten Frontscheiben und übernehmen bei Bedarf die komplette Schadensabwicklung mit Ihrer Versicherung.</p>
                <h2>Hohe Qualitätsstandards

                </h2>
                <p>Unsere Spenglerei in Oberengstringen ist Mitglied des Schweizerischen Carrosserieverbandes Carrosserie Suisse und verfügt über eine entsprechende Zertifizierung. Sie haben daher die Garantie, dass Ihr Fahrzeug von qualifizierten Fachkräften repariert wird. Ihre Sicherheit kommt bei uns an erster Stelle: Wir verwenden ausschliesslich Original-Ersatzteile. Machen Sie bei der Reparatur Ihres Wagens keine Kompromisse und wenden Sie sich an einen zertifizierten Spengler wie Carrosserie Örlike – die Resultate werden Sie überzeugen!</p>

            </section>



        </div>








    );
}

export default Spenglerarbeiten;
