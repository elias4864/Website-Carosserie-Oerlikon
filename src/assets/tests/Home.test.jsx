import { render, screen } from '@testing-library/react';
import Home from '../pages/Home.jsx';


// Mocks für die Bild-Imports, um Ladefehler während des Tests zu vermeiden
jest.mock('../Schrauben.jpg', () => 'schrauben-stub.jpg');
jest.mock('../Lackierei.jpg', () => 'lackierei-stub.jpg');
jest.mock('../Team.jpg', () => 'team-stub.jpg');
jest.mock('../Eingang.webp', () => 'eingang-stub.webp');
jest.mock('../Styles/Home.css', () => ({}));

describe('HomePage Komponente', () => {
    test('rendert die Hauptüberschriften korrekt', () => {
        render(<Home />);

        // Prüft, ob der Firmenname im Hero-Bereich gerendert wird
        const mainHeading = screen.getByRole('heading', { level: 1 });
        expect(mainHeading).toHaveTextContent('Carrosserie Örlike TL AG');

        // Prüft die Willkommens-Überschrift (H2)
        const welcomeHeading = screen.getByRole('heading', { level: 2 });
        expect(welcomeHeading).toHaveTextContent(/Herzlich Willkommen bei Carrosserie/i);
    });

    test('rendert alle drei Dienstleistungs-Karten', () => {
        render(<Home />);

        // Prüft die Unterüberschriften (H3) der Angebote
        expect(screen.getByRole('heading', { name: 'Carrosserie Spenglerei' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Lackiererei' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Team' })).toBeInTheDocument();
    });

    test('rendert die Bilder mit den passenden Alt-Texten', () => {
        render(<Home />);

        const spenglereiImg = screen.getByAltText('Carrosserie Spenglerei');
        const lackiereiImg = screen.getByAltText('Lackiererei');
        const teamImg = screen.getByAltText('Team');

        expect(spenglereiImg).toBeInTheDocument();
        expect(lackiereiImg).toBeInTheDocument();
        expect(teamImg).toBeInTheDocument();
    });
});