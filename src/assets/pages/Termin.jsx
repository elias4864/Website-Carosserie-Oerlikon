import React from "react";
import Team from "../Team.jpg";
import { motion } from "motion/react";
import Calendar from "react-calendar";
import emailjs from '@emailjs/browser';

import 'react-calendar/dist/Calendar.css'; // Wichtig: Das CSS gehört zu react-calendar

function Termin({ lang }) {
    const handleDateChange = (date) => {
        console.log("Ausgewähltes Datum:", date);

        alert(`Sie haben folgendes Datum ausgewählt: ${date.toLocaleDateString()}`);
    };

    return (
        <main className="hero-image-wrapper">
            {/* Bild-Hero über die volle Breite */}
            <img src={Team} alt="Team Carrosserie Örlike" className="hero-fullwidth-img" />

            <section className="hero-content">
                <h1>Termin mit der Carrosserie vereinbaren</h1>
                <p className="hero-subtitle">
                    Vereinbaren Sie jetzt einen Termin bei der Carrosserie Örlike TL AG:
                </p>

                {/* Kalender-Bereich mit weisser Box für bessere Lesbarkeit */}
                <div style={{ margin: "30px auto", maxWidth: "350px", background: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", color: "#333" }}>
                    <h2 style={{ fontSize: "18px", marginBottom: "15px", textAlign: "center" }}>Wählen Sie bitte ein Datum aus</h2>
                    <Calendar onChange={handleDateChange} />
                </div>

                <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                    <a href="tel:+41443119412" style={{ textDecoration: 'none' }}>
                        <motion.div
                            animate={{ y: [0, -30, 0] }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                bounce: 0.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "#007bff",
                                borderRadius: "50%",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontSize: "24px",
                                cursor: "pointer"
                            }}
                        >
                            <span>📞</span>
                        </motion.div>
                    </a>
                </div>

                <div className="contact-details">
                    <p>
                        Telefonnummer:{" "}
                        <a href="tel:+41443119412" className="highlight">
                            +41 44 311 94 12
                        </a>
                    </p>
                    <p>
                        E-Mail:{" "}
                        <a href="mailto:info@oerlike.ch" className="highlight">
                            info@oerlike.ch
                        </a>


                        <a href="https://oerlike.ch/" className="highlight">info@oerlike.ch</a>


                    </p>
                </div>
            </section>
        </main>
    );
}

export default Termin;