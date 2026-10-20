import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../Styles/Datenschutzerklärung.css';
// 'motion/react' ab Version 12+

export default function PrivacyModal({lang}) {
    const [isOpen, setIsOpen] = useState(false);

    return (

        /**
         * Datenschutzerklärung Div mit Box
         */
        <div style={{ padding: '20px', fontFamily: 'sans-serif', color:'red' }}>
            {/* Trigger-Button */}
            <button
                onClick={() => setIsOpen(true)}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                Datenschutzerklärung   jetzt  sofort  öffnen
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Abgedunkelter Hintergrund (Backdrop) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: '#000',
                                zIndex: 999
                            }}
                        />

                        {/* Inhalts-Box (Modal) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            style={{
                                position: 'fixed',
                                top: '15%',
                                left: '50%',
                                transform: 'translateX(-50%)', // Wird von Motion automatisch optimiert
                                width: '90%',
                                maxWidth: '600px',
                                maxHeight: '70vh',
                                overflowY: 'auto',
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '12px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                zIndex: 1000
                            }}
                        >
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

                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    marginTop: '20px',
                                    padding: '10px 15px',
                                    backgroundColor: '#0070f3',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'

                                }}
                            >
                                Schließen
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
