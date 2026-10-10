import { render, screen } from '@testing-library/react';
import '../pages/Carosserie.jsx';
import '@testing-library/jest-dom';

import Carosserie from "../pages/Carosserie.jsx";

// Mocks für Assets und CSS-Imports zur Vermeidung von Ladefehlern im Test runner
jest.mock('../Auto.jpg', () => 'auto-stub.jpg');
jest.mock('../Styles/Carosserie.css', () => ({}));
jest.mock('../Styles/App.css', () => ({}));

describe('CarosseriePage Komponente', () => {
    test('rendert das Bild mit dem korrekten Alt-Text', () => {
        render(<Carosserie />);

        const autoImage = screen.getByAltText('Auto Reparatur');
        expect(autoImage).toBeInTheDocument();
        expect(autoImage).toHaveClass('carosserie-auto');
    });

    test('rendert alle Haupt- und Unterüberschriften korrekt', () => {
        render(<Carosserie />);

        // Hauptüberschrift (H2)
        const mainTitle = screen.getByRole('heading', {
            level: 2,
            name: /CARROSSERIE ÖRLIKE: IHR FACHBETRIEB FÜR DIE REPARATUR VON KRAFTFAHRZEUGEN/i
        });
        expect(mainTitle).toBeInTheDocument();

        // Abschnitts-Überschriften
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: /Rückstandsfreies Ausbeulen von Karrosserieblechen/i
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('heading', {
                level: 2,
                name: /Fachmännische Reparaturen von Oldtimern/i
            })
        ).toBeInTheDocument();
    });

    test('enthält die wesentlichen Inhaltstexte', () => {
        render(<Carosserie/>);

        // Testet Abschnitte aus den Absätzen
        expect(
            screen.getByText(/Die Carrosserie Örlike repariert für Sie Fahrzeuge aller Klassen/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Das lackfreie Ausbeulen von Karrosserieblechen ist eine kostensparende/i)
        ).toBeInTheDocument();

        expect(screen.getByText(/Die Reparatur von Oldtimern ist ein Gebiet, auf dem sich nur wenige Carrosserie-Spengler gut auskennen. Dies hat eine Vielzahl von Gründen. Der wohl Wichtigste ist, dass in früheren Zeiten andere Materialien für den Fahrzeugbau verwendet wurden. Ein Cabrio aus den 60ern hat hinsichtlich der Karrosseriepflege andere Ansprüche als ein Kleinwagen, der aus den späten 2000er-Jahren stammt. Unsere Fachleute sind mit diesen Besonderheiten bestens vertraut und verfügen über eine umfangreiche Expertise bei der Reparatur von Oldtimern aller Art. Die Instandsetzung von seltenen Exemplaren ist unsere Spezialität: Hier sind unsere Spengler voll in ihrem Element. Bringen Sie Ihr Sammlerstück in unsere Werkstatt – Sie werden es nicht bereuen/i)).toBeInTheDocument();

        expect(
            screen.getByText(/Die Reparatur von Oldtimern ist ein Gebiet/i)
        ).toBeInTheDocument();
    });
});