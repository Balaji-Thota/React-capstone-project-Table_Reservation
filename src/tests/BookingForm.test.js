import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';


describe('BookingForm Validation', () => {
    test('Vérifie que les attributs de validation HTML5 sont présents', () => {
        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/Date de réservation/i);
        const guestsInput = screen.getByLabelText(/Nombre de convives/i);

        expect(dateInput).toBeRequired();
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('Affiche un message d\'erreur pour une date passée', () => {
        render(<BookingForm submitForm={() => { }} />);
        const dateInput = screen.getByLabelText(/Date de réservation/i);

        // Simuler une date en 1990
        fireEvent.change(dateInput, { target: { value: '1990-01-01' } });
        fireEvent.blur(dateInput);

        const error = screen.getByText(/Vous ne pouvez pas réserver dans le passé/i);
        expect(error).toBeInTheDocument();
    });
});
