import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// 'motion/react' ab Version 12+

export default function PrivacyModal({lang}) {
    const [isOpen, setIsOpen] = useState(false);

    return (

        /**
         * Datenschutzerklärung Div mit Box
         */
        <div style={{ padding: '20px', fontFamily: 'sans-serif', color:'red' }}>
            {/* Trigger-Button */}
            <button
                onClick={() => setIsOpen(true)}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                Datenschutzerklärung   jetzt  sofort  öffnen
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Abgedunkelter Hintergrund (Backdrop) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: '#000',
                                zIndex: 999
                            }}
                        />

                        {/* Inhalts-Box (Modal) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                            style={{
                                position: 'fixed',
                                top: '15%',
                                left: '50%',
                                transform: 'translateX(-50%)', // Wird von Motion automatisch optimiert
                                width: '90%',
                                maxWidth: '600px',
                                maxHeight: '70vh',
                                overflowY: 'auto',
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '12px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                zIndex: 1000
                            }}
                        >
                            <h2>Datenschutzerklärung</h2>
                            <p><strong>1. Datenschutz auf einen Blick</strong></p>
                            <p>Hier folgt der standardisierte Text Ihrer Datenschutzerklärung...</p>

                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    marginTop: '20px',
                                    padding: '10px 15px',
                                    backgroundColor: '#0070f3',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'

                                }}
                            >
                                Schließen
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
