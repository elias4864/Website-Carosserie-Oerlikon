

import Schrauben from '../Schrauben.jpg';
import Lackierei from '../Lackierei.jpg';
import Team from '../Team.jpg';
import '../Styles/Home.css';
import {useState,useEffect} from "react";
import Eingang from '../Eingang.webp';




function HomePage() {


    /**
     * Wischeffekt der Bilder mit UseEffect
     */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.2}
        );

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);


    return (

        <div className="Background-Intro">

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



            </section>

            <section className="border-welcome">
                <p>Seit 40 Jahren ist die Carrosserie Örlike TL AG als Aktiengesellschaft in Zürich ansässig.

                    In dieser Zeit haben wir uns in der Umgebung einen ausgezeichneten Ruf erarbeitet und begeistern tagtäglich unsere Kunden.

                    Zu unserem Kerngebiet zählen die Spenglerei, die Lackiererei wie auch das Aufbereiten von Fahrzeugen, beispielsweise nach einem Unfall.

                    Als zertifizierter Reparaturbetrieb nach Carrosserie Suisse-Standards erledigen unsere Mitarbeiter die Aufgaben an Ihrem Fahrzeug zuverlässig, qualitativ und mit hohem Fachwissen.

                    Informieren Sie sich auf unserer Webseite über unsere Dienstleistungen, kontaktieren Sie uns bei Fragen oder kommen Sie direkt bei uns vorbei.

                    Wir freuen uns auf Sie!

                </p>
            </section>

        </div>

    );
}

export default HomePage;
