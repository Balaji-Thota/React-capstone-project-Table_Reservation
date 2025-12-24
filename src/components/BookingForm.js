import React, { useState, useEffect } from 'react';

const BookingForm = ({ submitForm }) => {
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Anniversaire');
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);

    // Validation en temps réel pour traiter les cas limites
    useEffect(() => {
        if (isTouched) validateForm();
    }, [date, guests]);

    const validateForm = () => {
        let newErrors = {};
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Cas limite : Date dans le passé
        if (!date) {
            newErrors.date = "La date est obligatoire.";
        } else if (selectedDate < today) {
            newErrors.date = "Vous ne pouvez pas réserver dans le passé.";
        }

        // Cas limite : Nombre de convives (exigence : 1 à 10)
        if (guests < 1) newErrors.guests = "Il faut au moins 1 personne.";
        if (guests > 10) newErrors.guests = "Maximum 10 personnes par réservation en ligne.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTouched(true);
        if (validateForm()) {
            submitForm({ date, guests, occasion });
            alert("Réservation réussie !");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form" aria-label="Booking form">
            <h3>Booking details</h3>
            {/* Accessibility: Use labels linked by htmlFor */}
            <div className="field">
                <label htmlFor="res-date">Reservation date</label>
                <input
                    type="date"
                    id="res-date"
                    required
                    aria-required="true"
                    aria-invalid={errors.date ? "true" : "false"}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onBlur={() => setIsTouched(true)}
                />
                {errors.date && <span className="error" role="alert">{errors.date}</span>}
            </div>

            <div className="field">
                <label htmlFor="guests">Number of guests (1-10)</label>
                <input
                    type="number"
                    id="guests"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    aria-label="Nombre de personnes"
                />
                {errors.guests && <span className="error" role="alert">{errors.guests}</span>}
            </div>

            <div className="field">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Business Dinner</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={isTouched && Object.keys(errors).length > 0}
                aria-label="Confirm reservation"
            >
                Book now
            </button>
        </form>
    );
};

export default BookingForm;
