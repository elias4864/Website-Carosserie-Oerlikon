import React, { useState , useRef} from 'react';
import '../Styles/Anfrage.css';
import { useNavigate, } from "react-router-dom";
import Team from '../Team.jpg';
import emailjs from "@emailjs/browser";

import ReCAPTCHA from 'react-google-recaptcha'










export default function Anfrage({lang}) {


    const recaptcha = useRef()

    const form = useRef();




    const sendEmail = (e) => {
        e.preventDefault();


        const SERVICE_ID = 'service_05kut4r';
        const TEMPLATE_ID = 'template_uvpgvhs';
        const PUBLIC_KEY = 'C7aRFYCHpA8Vde996';

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                alert('E-Mail erfolgreich gesendet!');
                console.log("E-Mail sent with Request: " + result);
                setFormData({name: '', email: '', phone: '', message: '', newsletter: false});

                // Weiterleitung nach erfolgreichem Senden
                navigate('/anfrage');
            })
            .catch((error) => {
                console.error('EmailJS Error:', error.text);
                setStatus('error');
                alert('Fehler beim Senden: ' + error.text);
            });
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        newsletter: false,
        privacyPolicy: false
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim() || formData.name.trim().length < 5) {
            newErrors.name = 'Bitte geben Sie einen gültigen Namen ein.';
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Bitte geben Sie zuerst Ihre Telefonnummer ein.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Bitte tragen Sie Ihre Nachricht ein.';
        }

        if (!formData.privacyPolicy) {
            newErrors.privacyPolicy = 'Sie müssen den Datenschutzrichtlinien  zuerst zustimmen.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Bitte füllen Sie alle notwendigen  Pflichtfelder korrekt aus.");
            return;
        }

        setStatus('loading');

        try {
            // Simulation oder echter API-Call (z.B. EmailJS)
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setStatus('success');
            alert("Nachricht erfolgreich abgeschickt!");

            // Formular zurücksetzen
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                newsletter: false,
                privacyPolicy: false
            });
            setErrors({});

            // Nach Erfolg navigieren
            navigate('/anfrage');

        } catch (error) {
            setStatus('error');
            console.error(error);
            alert("Fehler beim Senden. Bitte versuchen Sie es später erneut.");
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Kontakt mit der Carrosserie Örlike aufnehmen</h2>

            <div className="text-sm text-gray-600 mb-6 flex flex-col gap-2">
                <span><b>Unser Team unterstützt Sie gerne bei Fragen:</b></span>
                <img className="team-img rounded-md shadow-sm w-full h-auto object-cover" src={Team} alt="Team Carrosserie Örlike" />
            </div>

            {status === 'success' && (
                <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich an unser Team gesendet.
                </div>
            )}

            {status === 'error' && (
                <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es später noch einmal.
                </div>
            )}

            <form  ref={form}  onSubmit={sendEmail} className="anfrage-box">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name: *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Elias"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-Mail-Adresse: *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="name@beispiel.ch"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefonnummer: *
                    </label>
                    <input
                        type="tel"
                        id="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+41 79 123 45 67"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Nachricht: *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Wie können wir Ihnen heute behilflich sein?"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="newsletter" className="font-medium text-gray-700 cursor-pointer select-none">
                            Ich möchte den Newsletter der Carrosserie Örlike abonnieren
                        </label>
                    </div>
                </div>

                {/* Datenschutz Checkbox */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            name="privacyPolicy"
                            checked={formData.privacyPolicy}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="privacyPolicy" className="font-medium text-gray-700 cursor-pointer select-none">
                            Ich stimme den Datenschutzrichtlinien der Carrosserie Örlike zu *
                        </label>
                        {errors.privacyPolicy && <p className="text-red-500 text-xs mt-1">{errors.privacyPolicy}</p>}
                    </div>
                </div>

                <ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.VITE_SITE_KEY} />


                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="submit-btn w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                    {status === 'loading' ? 'Wird gesendet...' : 'Anfrage absenden ➡'}
                </button>



            </form>
        </div>
    );
}