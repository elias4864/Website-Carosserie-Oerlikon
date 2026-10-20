import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Datenschutzerklärung.css';

export default function PrivacyModal({ lang }) {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [captchaError, setCaptchaError] = useState(false);
    const recaptchaRef = useRef(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        privacyPolicy: false
    });

    /**
     * Recaptcha Skript auswählen
     */
    useEffect(() => {
        const scriptId = 'recaptcha-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    // 2. reCAPTCHA neu rendern, sobald das Modal geöffnet wird
    useEffect(() => {
        if (isOpen) {
            // Ein kleiner Timeout stellt sicher, dass das DOM-Element gerendert ist
            const timer = setTimeout(() => {
                if (window.grecaptcha && recaptchaRef.current) {
                    try {
                        window.grecaptcha.render(recaptchaRef.current, {
                            sitekey: '6LfvGfgtAAAAAP45gxuDs7HhFz64bzk15bpYfisH'
                        });
                    } catch (e) {
                        // Falls es bereits gerendert wurde
                        console.log('reCAPTCHA bereits initialisiert', e);
                        alert("Das Recaptcha Zeichen funktioniert erfolgreich");
                    }
                }
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCaptchaError(false);

        // reCAPTCHA Token-Prüfung
        const recaptchaResponse = window.grecaptcha ? window.grecaptcha.getResponse() : '';

        if (!recaptchaResponse) {
            setCaptchaError(true);
            alert("Das Recaptcha Zeichen ist fehlerhaft!");
            return;
        }

        setStatus('loading');

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setStatus('success');

            if (window.grecaptcha) {
                window.grecaptcha.reset();
            }

            setTimeout(() => {
                setIsOpen(false);
                navigate('/home');
            }, 2000);
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <button
                onClick={() => setIsOpen(true)}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                Datenschutzerklärung jetzt öffnen
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: '#000',
                                zIndex: 999
                            }}
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            style={{
                                position: 'fixed',
                                top: '10%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '90%',
                                maxWidth: '600px',
                                maxHeight: '80vh',
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
                                    Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                                </p>
                            </div>

                            {/* Status Meldungen */}
                            {captchaError && (
                                <p style={{ color: 'red', marginTop: '10px' }}>
                                    ⚠️ Bitte bestätigen Sie das reCAPTCHA ("Ich bin kein Roboter").
                                </p>
                            )}

                            {status === 'success' && (
                                <p style={{ color: 'green', marginTop: '10px' }}>
                                    ✓ Bestätigt! Weiterleitung zum Home Verzeichnis...
                                </p>
                            )}

                            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                    <input
                                        type="checkbox"
                                        id="privacyPolicy"
                                        name="privacyPolicy"
                                        required
                                        checked={formData.privacyPolicy}
                                        onChange={handleChange}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <label htmlFor="privacyPolicy" style={{ cursor: 'pointer' }}>
                                        Ich stimme den Datenschutzrichtlinien zu
                                    </label>
                                </div>

                                {/* reCAPTCHA Container via ref */}
                                <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
                                    <div ref={recaptchaRef}></div>
                                </div>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        style={{
                                            padding: '10px 15px',
                                            backgroundColor: '#22c55e',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {status === 'loading' ? 'Wird geprüft...' : 'Bestätigen'}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            padding: '10px 15px',
                                            backgroundColor: '#6b7280',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Schließen
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}