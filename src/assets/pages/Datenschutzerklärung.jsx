import React from 'react';
import '../Styles/Datenschutzerklärung.css';

const PrivacyPolicy = ({lang}) => {
    return (
        <div className="privacy-policy">
            <h1>Datenschutzerklärung</h1>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist die Carrosserie Örlike TL AG.</p>

            <h2>1. Verantwortliche Stelle</h2>
            <p>
                <strong>Carrosserie Örlike TL AG</strong><br />
                Rütistrasse 22<br />
                8105 Oberengstringen<br />
                Schweiz<br /><br />
                <strong>Vertreten durch:</strong> Duje Antonina, Michael Nufer, Peter Ledergerber<br />
                <strong>E-Mail:</strong> info@carrosserie-oerlike.ch<br />
                <strong>Telefon:</strong> +41 44 750 02 80
            </p>

            <h2>2. Erfassung und Verarbeitung personenbezogener Daten</h2>
            <p>
                Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen (z. B. Reparatur- und Carrosserieanfragen) erforderlich ist.
            </p>

            <h2>3. Kontaktaufnahme (Kontaktformular & E-Mail)</h2>
            <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h2>4. Eingebundene Dienste (Google Maps / Street View)</h2>
            <p>
                Zur visuellen Darstellung unseres Standorts und zur Orientierung nutzen wir eingebundene Kartendienste von Google Maps / Street View. Dabei kann Ihre IP-Adresse an Server von Google übermittelt werden.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>
                Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
        </div>
    );
};

export default PrivacyPolicy;