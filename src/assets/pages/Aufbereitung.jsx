import React from 'react';
import  autoaufbereitung from '../Autoaufberiten.jpg';
import '../Styles/Aufbereitung.css';
import '../Styles/Home.css';



function AufbereitungPage() {
    return (
        <div className="aufbereitung-container">
            {/* Das Bild-Tag wurde korrekt geschlossen und mit alt-Text ergänzt */}
            <img src={autoaufbereitung} alt="Autoaufbereitung" className="töpfer" />

            <section className="border-welcome">
                <h2 >
                    PROFESSIONELLE AUTOAUFBEREITUNG ZU PREISWERTEN KONDITIONEN
                </h2>
                <p>
                    Die Autoaufbereitung ist eine Wissenschaft für sich. Wer glaubt, dass dazu lediglich ein Eimer Wasser mit etwas Spülmittel und ein Waschschwamm benötigt werden, irrt gewaltig: Nicht umsonst gibt es spezialisierte Dienstleister, die witterungs- oder unfallbedingte Schäden auf professionelle Art und Weise beseitigen.
                </p>
                <p>
                    Einen Fachbetrieb mit der Autoaufbereitung zu betrauen, erweist sich in der Regel als eine gute Entscheidung – unter der Voraussetzung, dass in der fraglichen Werkstatt erfahrene Profis tätig sind. Bei der Carrosserie Örlike ist dies der Fall: Unsere Mitarbeiter verfügen über eine hohe Fachkompetenz, die sie in jahrelanger praktischer Arbeit erworben haben. Die Resultate sprechen für sich: In unserer Galerie können Sie einige der von uns aufbereiteten Fahrzeuge bewundern.
                </p>



                <h3 className="section-title">Ihre Experten rund ums Auto</h3>
                <p>
                    Kraftfahrzeuge sind unsere Welt. Wenn es mit Ihrem Wagen ein Problem gibt, zögern Sie nicht, uns zu kontaktieren: Im Rahmen einer professionellen Autoaufbereitung beseitigen wir jegliche Mängel an der Karosserie sowie an allen Metall- und Kunststoffverkleidungen. Kleine und grosse Beulen werden von uns auf schonende Weise entfernt. Zu unseren Spezialgebieten zählen ausserdem die Durchführung von Rostreparaturen sowie das Austauschen von Frontscheiben.
                </p>
                <p>
                    Ein weiterer Vorteil für Sie: Im Vorfeld der Fahrzeugaufbereitung kümmern sich unsere Mitarbeiter um die komplette Schadensabwicklung mit Ihrer Versicherung. Auf diese Weise schonen Sie Ihre Nerven und ersparen sich die zeitraubende Korrespondenz mit dem Versicherer. Anstatt sich mit dem Ausfüllen von Formularen zu beschäftigen, lehnen Sie sich entspannt zurück und warten, bis Sie einen Termin zur Abholung Ihres Wagens erhalten.
                </p>



                <h3 className="section-title">Günstige Preise trotz hoher Qualität</h3>
                <p>
                    Eine Autoaufbereitung kann gehörig ins Geld gehen, wenn man sich nicht gründlich über die Preise und Konditionen des jeweiligen Anbieters informiert. Begehen Sie nicht den Fehler, sich an den erstbesten Dienstleister zu wenden! Wenn Sie Pech haben, erhalten Sie eine Abschlussrechnung, die Ihnen die Sprache verschlägt. In solchen Fällen lassen viele Anbieter nicht mit sich diskutieren, sodass man letztlich keine andere Wahl hat, als die geforderte Summe zu zahlen.
                </p>
                <p>
                    Bei der Carrosserie Örlike wissen Sie von Anfang an, woran Sie sind. Anstatt Sie über die Preisgestaltung im Unklaren zu lassen, informieren wir Sie umfassend über alle geplanten Arbeitsschritte und die daraus resultierenden Kosten. Unsere Dienste sind günstiger, als Sie denken – gerne lassen wir Ihnen eine telefonische oder schriftliche Beratung zukommen. Kontaktieren Sie uns bitte unter der Rufnummer 044 311 94 12, per Kontaktformular oder via E-Mail (info@oerlike.ch).
                </p>
            </section>
        </div>
    );
}

export default AufbereitungPage;