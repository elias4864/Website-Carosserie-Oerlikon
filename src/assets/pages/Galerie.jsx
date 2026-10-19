import React from "react";
import Carosserie from "../Carosserie.jpg";
import Weisses from "../Weisses Auto.jpg";
import Rotvorne from "../Rot2.jpg";
import Blau from "../Blauauto.jpg";
import Blauhinten from "../Blau.jpg";
import Weiss from "../Weiss.jpg";
import Grau from "../Grau.jpg";
import Hellblau from "../Hellblau.jpg";
import Rotesauto  from "../Rotesauto.jpg";
import Rot   from "../Rotes.jpg";
import "../Styles/Galerie.css";
import Kaputt2  from "../Kaputt2.jpg";
import Kaputt from "../Kaputtesauto.jpg";
function Galeriepage({ lang }) {
    const images = [
        { src: Rotvorne, alt: "Carosserie" },
        { src: Weisses, alt: "Weisses" },
        { src: Carosserie, alt: "Carosserieauto" },
        { src: Blau, alt: "Blauauto" },
        { src: Blauhinten, alt: "Blaues" },
        { src: Weiss, alt: "Weisses Auto" },
        { src: Grau, alt: "Graues Auto" },
        {src: Hellblau, alt:"Hellblaues Auto"},
        { src: Blauhinten, alt:"Blauhinten" },
        {src:Rotesauto, alt:"Rotesauto" },
        { src: Blauhinten, alt:"Blau"},
        { src: Rot, alt: "Rot"},
        { src: Blauhinten, alt:"Blauhinten" },
        {src:Kaputt, alt: "Kaputt" },
        {src:Kaputt2, alt: "Kaputt" },

    ];

    return (
        <div className="galerie-container">
            {images.map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    className="fade-in-element"
                    style={{ animationDelay: `${index * 0.2}s` }} // Stufenweiser Effekt
                />
            ))}
        </div>
    );
}

export default Galeriepage;