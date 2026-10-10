import Eingang from "../Eingang.webp";
import BackgroundTeam from "../Backgroundteam.jpg";
import '../Styles/Kontakt.css';
import Michael from "../Michael.jpg";
import Peter from "../Peter.jpg";
import '../Styles/App.css';
import { useState ,useEffect} from "react";


const teamMembers = [
    {
        name: "Duje Antonina",
        role: "Carrosseriespengler",
        subtitle: "Geschäftsführer und Inhaber",
        image: BackgroundTeam
    },
    {
        name: "Peter Ledergerber",
        role: "Administration",
        subtitle: "",
        image: Peter
    },
    {
        name: "Michael Nufer",
        role: "Carrosserielackierer",
        subtitle: "Geschäftsführer und Inhaber",
        image:Michael
    }
];

const hero =[
    BackgroundTeam,
    Michael,
    Peter
]
function Kontakt(){




    // 2. State für den aktuell aktiven Bild-Index
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Alle 5 Sekunden wechseln um Bild interaktiv
     */

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % hero.length);
        }, 5000);

        return () => clearInterval(interval); // Aufräumen beim Unmount
    }, []);


    return(

        <div className="Background-Intro">
            {/* Dynamisches Banner-Bild basierend auf currentIndex */}
            <img
                className="team-bild"
                src={hero[currentIndex]}
                alt={`Team ${currentIndex + 1}`}
            />

            {/* Dynamisch generierte Indikator-Punkte */}
            <div className="carousel-dots">
                {hero.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            {/* 3-Spalten Grid */}
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="kontakt-card" key={index}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="kontakt-image"
                        />
                        <h2 className="team-member-name">{member.name}</h2>
                        <p className="kontakt-text role">{member.role}</p>
                        {member.subtitle && (
                            <p className="kontakt-text subtitle">{member.subtitle}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>

)


}




export default Kontakt;