

import Schrauben from '../Schrauben.jpg';
import Lackierei from '../Lackierei.jpg';
import Team from '../Team.jpg';
import '../Styles/Home.css';
import '../Styles/App.css';
import React, {useState,useEffect} from "react";
import Eingang from '../Eingang.webp';




function HomePage() {

    const [showCookieBanner, setShowCookieBanner] = useState(false);
    /**
     * Wischeffekt der Bilder mit UseEffect
     */


    /**
     * Cookies für DSGVO
     */
    useEffect(() => {
        // Prüfen, ob bereits eine Cookie-Entscheidung im LocalStorage gespeichert ist
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowCookieBanner(true);
        }

        // IntersectionObserver für Feature Cards
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

        const handleAcceptCookie = () => {
            localStorage.setItem('Cookie Status:', 'accepted');
            alert("Cookie wurde akzeptiert!");
            setShowCookieBanner(false);
console.log("Cookie wurde akzeptiert!");
        const handleRejectCookie = () => {
            localStorage.setItem('Cookie Status:', 'declined');
            setShowCookieBanner(false);
            alert("Cookie wurde abgelehnt!");
console.log("Cookie wurde abgelehnt!");
}



    return (

        <main className="Background-Intro">

            <div className="carosserie"><h1>Carrosserie Örlike TL AG</h1>



                <p>Ihr Spezialist für sämtliche Carrosserie und Lackierarbeiten rund ums Fahrzeug</p>
            </div>
            <section className="border-welcome">
                <h2 >Herzlich Willkommen bei Carrosserie <span className="highlight-red">Örlike</span> TL AG</h2>

                <p className="subtitle ">Wir sind Ihr Spezialist für sämtliche Carrosserie und Lackierarbeiten rund ums
                    Fahrzeug.</p>

                <p>In unserem Zürcher Carrosserie Spritzwerk tätigen wir sowohl Reparaturlackierungen nach einem Unfall
                    als auch Speziallackierungen.</p>

                <p>Informieren Sie sich auf unserer Webseite über unsere Dienstleistungen und kontaktieren Sie uns bei
                    Fragen.</p>

                <p className="closing">Wir freuen uns auf Sie!</p>
            </section>

            <section className="services-section">
                <div className="feature-card text-left">
                    <div className="image-wrapper">
                        <img src={Schrauben} alt="Carrosserie Spenglerei"/>
                    </div>
                    <div className="text-box">
                        <h3>Carrosserie Spenglerei</h3>
                        <p>
                            In unserer hauseigenen Carrosseriewerkstatt nahe Zürich nehmen wir
                            gründliche Unfallreparaturen für Autos aller Marken vor.
                        </p>
                    </div>
                </div>

                <div className="feature-card text-right">
                    <div className="image-wrapper">
                        <img src={Lackierei} alt="Lackiererei"/>
                    </div>
                    <div className="text-box">
                        <h3>Lackiererei</h3>
                        <p className="text-grey">
                            Kommen Sie zu unserem Zürcher Carrosserie Spritzwerk, wir nehmen
                            professionelle Reparaturlackierungen für Sie vor.
                        </p>
                    </div>
                </div>

                <div className="feature-card text-left">
                    <div className="image-wrapper">
                        <img src={Team} alt="Team"/>
                    </div>
                    <div className="text-box">
                        <h3>Team</h3>
                        <p>
                            Unser hochqualifiziertes Team sorgt für beste Resultate und höchste Kundenzufriedenheit.
                        </p>
                    </div>
                </div>


                <div   style={{ position: 'relative', width: '100%', height: '100%', minHeight: '60vh' }}>
                    <iframe
                        title="Eingang Carosserie Örlike 360 Grad Street View"
                        src="https://www.google.com/maps/embed?pb=!4v1791664335517!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFp5b0hOMWdF!2m2!1d47.40639798492404!2d8.462671190889116!3f190.4257737481725!4f-10.380033892848473!5f0.7820865974627469"
                        style={{
                            border: 0,
                            width: '100%',
                            height: '100%',
                            display: 'block'
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>

                    {/* Overlay unten zentriert über dem iframe */}
                    <p
                        style={{
                            position: 'absolute',
                            bottom: '12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            margin: 0,
                            padding: '4px 12px',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            color: '#ffffff',
                            fontSize: '14px',
                            borderRadius: '4px',
                            zIndex: 10
                        }}
                    >
                        Powered by <strong><a   href="https://marketingmaster.ch" className="marketingmaster">marketingmaster.ch</a></strong>
                    </p>
                </div>


            </section>

            <section className="border-welcome">
                <p>Seit 40 Jahren ist die Carrosserie Örlike TL AG als Aktiengesellschaft in Zürich ansässig.

                    In dieser Zeit haben wir uns in der Umgebung einen ausgezeichneten Ruf erarbeitet und begeistern
                    tagtäglich unsere Kunden.

                    Zu unserem Kerngebiet zählen die Spenglerei, die Lackiererei wie auch das Aufbereiten von Fahrzeugen, beispielsweise nach einem Unfall.

                    Als zertifizierter Reparaturbetrieb nach Carrosserie Suisse-Standards erledigen unsere Mitarbeiter die Aufgaben an Ihrem Fahrzeug zuverlässig, qualitativ und mit hohem Fachwissen.

                    Informieren Sie sich auf unserer Webseite über unsere Dienstleistungen, kontaktieren Sie uns bei Fragen oder kommen Sie direkt bei uns vorbei.

                    Wir freuen uns auf Sie!

                </p>
            </section>


            {showCookieBanner && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    maxWidth: '600px',
                    backgroundColor: '#1e1e1e',
                    color: '#ffffff',
                    padding: '18px 24px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
                        Wir nutzen expliziet Cookies, um die Funktionsfähigkeit meiner Webseite zu gewährleisten und die Nutzung unserer Dienste zu analysieren. Weitere Informationen finden Sie in unserer Datenschutzerklärung(DSG).
                     </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            onClick={handleRejectCookie}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#0626d3',
                                border: '1px solid #666666',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#ffffff',

                            }}
                        >
                            Ablehnen
                        </button>
                        <button
                            onClick={handleAcceptCookie}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#d9534f', // Oder deine Akzentfarbe (z. B. Rot)
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}
                        >
                            Akzeptieren
                        </button>
                    </div>
                </div>
            )}

        </main>

    );
}  };
export default HomePage;
