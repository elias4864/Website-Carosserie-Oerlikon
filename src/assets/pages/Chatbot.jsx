import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Chatbot.css';
import Leo from '../Leo.jpg';
import Chatbotbild from '../Chatbot.jpg';

/** AIChatbotWissen Text */
const botKnowledge = {
    de: {
        welcome: "Hallo! Willkommen bei Carrosserie Örlike TL AG. Wie können wir Ihnen helfen?",
        options: [
            { label: "📞 Kontakt & Adresse", reply: "Sie finden uns an der Fabrikstrasse 17, 8102 Oberengstringen. Rufen Sie uns gerne an unter 044 311 94 12!" },
            { label: "🕒 Öffnungszeiten", reply: "Unsere Öffnungszeiten:\nMo–Do: 07:30–12:00 & 13:00–17:30\nFr: 07:30–12:00 & 13:00–16:30" },
            { label: "🚗 Leistungen", reply: "Wir bieten Carrosseriearbeiten, Autolackierung, Spenglerei und Fahrzeugaufbereitung an." },
            { label: "📝 Unverbindliche Anfrage", reply: "Nutzen Sie unser Anfrage-Formular auf der Website oder schreiben Sie uns direkt per WhatsApp / E-Mail (info@oerlike.ch)." },
            { label: "👥 Team", reply: "Unser Carosserieteam besteht aus Duje Antonina, Peter Ledergerber und Michael Nufer." }
        ],
        fallback: "Vielen Dank für Ihre Nachricht! Für eine genaue Auskunft erreichen Sie uns direkt per Telefon (044 311 94 12) oder E-Mail (info@oerlike.ch).",
        placeholder: "Ihre Nachricht...",
        send: "Senden",
        optionsToggle: "Optionen / Häufige Fragen"
    },
    en: {
        welcome: "Hello! Welcome to Carrosserie Örlike TL AG. How can we help you?",
        options: [
            { label: "📞 Contact & Address", reply: "You can find us at Fabrikstrasse 17, 8102 Oberengstringen. Call us at +41 44 311 94 12!" },
            { label: "🕒 Opening Hours", reply: "Opening Hours:\nMon–Thu: 07:30–12:00 & 13:00–17:30\nFri: 07:30–12:00 & 13:00–16:30" },
            { label: "🚗 Our Services", reply: "We offer body repair, car painting, sheet metal work, and vehicle detailing." },
            { label: "📝 Inquiry", reply: "Use our online inquiry form or reach out via WhatsApp / Email (info@oerlike.ch)." },
            { label: "👥 Team", reply: "Our bodywork team consists of Duje Antonina, Peter Ledergerber, and Michael Nufer." }
        ],
        fallback: "Thank you for your message! For direct assistance, please call us at +41 44 311 94 12 or email info@oerlike.ch.",
        placeholder: "Type a message...",
        send: "Send",
        optionsToggle: "Options / FAQ"
    },
    it: {
        welcome: "Ciao! Benvenuti a Carrozzeria Örlike TL AG. Come possiamo aiutarvi?",
        options: [
            { label: "📞 Contatto & Indirizzo", reply: "Ci trovate in Fabrikstrasse 17, 8102 Oberengstringen. Chiamateci al 044 311 94 12!" },
            { label: "🕒 Orari di apertura", reply: "Orari:\nLun–Gio: 07:30–12:00 & 13:00–17:30\nVen: 07:30–12:00 & 13:00–16:30" },
            { label: "🚗 Servizi", reply: "Offriamo riparazioni di carrozzeria, verniciatura, lattoneria e preparazione auto." },
            { label: "📝 Richiesta", reply: "Compilate il nostro modulo di richiesta online o scriveteci su WhatsApp / E-Mail (info@oerlike.ch)." },
            { label: "👥 Team", reply: "Il nostro team di carrozzeria è composto da Duje Antonina, Peter Ledergerber e Michael Nufer." }
        ],
        fallback: "Grazie per il messaggio! Per informazioni rapide, chiamateci al 044 311 94 12 o scriveteci a info@oerlike.ch.",
        placeholder: "Scrivi un messaggio...",
        send: "Invia",
        optionsToggle: "Opzioni / Domande frequenti"
    },
    fr: {
        welcome: "Bonjour! Bienvenue à la Carrosserie Örlike TL AG. Comment pouvons-nous vous aider?",
        options: [
            { label: "📞 Contact & Adresse", reply: "Nous sommes situés Fabrikstrasse 17, 8102 Oberengstringen. Appelez-nous au 044 311 94 12!" },
            { label: "🕒 Heures d'ouverture", reply: "Heures d'ouverture:\nLun–Jeu: 07h30–12h00 & 13h00–17h30\nVen: 07h30–12h00 & 13h00–16h30" },
            { label: "🚗 Nos Services", reply: "Nous proposons la réparation de carrosserie, la peinture automobile, la zinguerie et la préparation de véhicules." },
            { label: "📝 Demande", reply: "Utilisez notre formulaire de demande en ligne ou contactez-nous via WhatsApp / E-mail (info@oerlike.ch)." },
            { label: "👥 Team", reply: "Notre équipe se compose de Duje Antonina, Peter Ledergerber et Michael Nufer." }
        ],
        fallback: "Merci pour votre message! Pour une assistance rapide, appelez-nous au 044 311 94 12 ou par E-mail à info@oerlike.ch.",
        placeholder: "Votre message...",
        send: "Envoyer",
        optionsToggle: "Options / Questions fréquentes"
    }
};

export default function Chatbot({ lang = "de" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const text = botKnowledge[lang] || botKnowledge.de;

    const [messages, setMessages] = useState([
        { sender: 'bot', text: text.welcome }
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    useEffect(() => {
        setMessages([{ sender: 'bot', text: text.welcome }]);
    }, [lang, text.welcome]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen, isOptionsOpen, isLoading]);

    const handleOptionClick = (option) => {
        setMessages(prev => [
            ...prev,
            { sender: 'user', text: option.label },
            { sender: 'bot', text: option.reply }
        ]);
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");

        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setIsLoading(true);

        const systemContext = `Du bist der freundliche KI-Assistent der Carrosserie Örlike TL AG in Oberengstringen (Fabrikstrasse 17, Tel: 044 311 94 12, E-Mail: info@oerlike.ch).
Das Carrosserie-Team besteht aus Duje Antonina, Peter Ledergerber und Michael Nufer.
Dienstleistungen: Carrosseriearbeiten, Autolackierung, Spenglerei und Fahrzeugaufbereitung.
Antworte kurz (1-3 Sätze) auf Deutsch.`;

        try {
            const response = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'qwen2.5',
                    prompt: `${systemContext}\n\nFrage des Nutzers: ${userMsg}`,
                    stream: false
                })
            });

            if (!response.ok) {
                console.error(`HTTP Fehler Status: ${response.status}`);
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            const botReply = data.response?.trim() || text.fallback;

            setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
        } catch (error) {
            console.error("Direkter Frontend-Aufruf an Ollama fehlgeschlagen:", error);
            setMessages(prev => [...prev, { sender: 'bot', text: text.fallback }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-wrapper">
            <button
                className="chatbot-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Bitte Chatbot Leo jetzt öffnen"
            >
                {isOpen ? '✖' : <img src={Chatbotbild} alt="Chatbot Öffnen" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />}
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="header-title-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img
                                src={Leo}
                                alt="Carrosserie Örlike Logo"
                                className="chatbot-header-logo"
                                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                            <h2>Carrosserie Örlike KI Assistant</h2>
                        </div>
                        <button onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-bubble-row ${msg.sender}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                {msg.sender === 'bot' && (
                                    <img
                                        src={Leo}
                                        alt="Bot Avatar"
                                        style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover', marginTop: '4px' }}
                                    />
                                )}
                                <div className={`chat-bubble ${msg.sender}`}>
                                    {msg.text.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="chat-bubble-row bot" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={Leo} alt="Bot Avatar" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                                <div className="chat-bubble bot"><i>Schreibt...</i></div>
                            </div>
                        )}

                        <div className="chatbot-options-container" style={{ marginTop: '10px' }}>
                            <button
                                className="options-toggle-btn"
                                onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                                type="button"
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justify: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px 12px',
                                    background: '#f4f4f4',
                                    border: '1px solid #ddd',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '13px'
                                }}
                            >
                                <span>{text.optionsToggle}</span>
                                <span>{isOptionsOpen ? '▲' : '▼'}</span>
                            </button>

                            {isOptionsOpen && (
                                <div className="chatbot-quick-options" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                                    {text.options.map((opt, idx) => (
                                        <button key={idx} onClick={() => handleOptionClick(opt)} className="quick-btn">
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div ref={chatEndRef} />
                    </div>

                    <form onSubmit={handleSend} className="chatbot-input-area">
                        <input
                            type="text"
                            placeholder={text.placeholder}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button className="btn-send" type="submit" disabled={isLoading}>{text.send}</button>
                    </form>
                </div>
            )}
        </div>
    );
}