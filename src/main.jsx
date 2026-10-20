import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';
import './index.css';
import { HelmetProvider} from 'react-helmet-async';
import {CookiesProvider} from "react-cookie";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CookiesProvider>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
        </CookiesProvider>
    </React.StrictMode>
);