import React, { useState } from 'react';
import '../Styles/Anfrage.css';
import {useNavigate} from "react-router-dom";
export default function Anfrage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        message: '',
        newsletter: false,
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        navigate('/anfrage');


        const navigate = useNavigate();

        try {
            // Hier API-Aufruf einfügen (z.B. fetch('/api/contact', ...))
            await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulation
            setStatus('success');
            alert("Nachricht erfolgreich abgeschickt");
            setFormData({ name: '', email: '', message: '', newsletter: false ,phone: ''}); // Formular zurücksetzen
        } catch (error) {
            setStatus('error');
            console.log(error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Kontakt mit der Carosserie Örlike aufnehmen</h2>

            {status === 'success' && (
                <div className="text-box" role="alert">
                    Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                </div>
            )}

            {status === 'error' && (
                <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es später noch einmal.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Elias"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-Mail-Adresse:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="name@beispiel.ch"
                    />
                </div>


                <div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Nachricht
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        title="Thema"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Wie können wir Ihnen heute  behilflich  sein ?"
                    />
                </div>

                <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefonnummer:
                    </label>
                    <input
                        type="tel"
                        id="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+41 79 123 45 67"
                    />
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

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="submit-btn"
                >
                    {status === 'loading' ? 'Wird gesendet...' : 'Anfrage absenden'}
                </button>
            </form>
        </div>
    );
}