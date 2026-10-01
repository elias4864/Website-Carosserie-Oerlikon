import Eingang from "../Eingang.webp";
import Team from "../Teams.jpg";
import '../Styles/Kontakt.css';
import Michael from "../Michael.jpg";
import Peter from "../Peter.jpg";
function Kontakt(){

    const teamMembers = [
        {
            name: "Duje Antonina",
            role: "Carrosseriespengler",
            subtitle: "Geschäftsführer und Inhaber",
            image: Team
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
    return(

    <div className="Background-Intro">
        <img className="team-bild" src={Team} alt="Teambild" />

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