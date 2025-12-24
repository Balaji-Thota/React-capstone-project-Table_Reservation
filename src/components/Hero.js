import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../assets/images/hero.jpg';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Section Hero */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a Mediterranean family restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button onClick={() => navigate('/reservation')} aria-label="Go to the reservation page">
                        Book a table
                    </button>
                </div>
                <div className="hero-image">
                    <img src={HeroImg} alt="Plat signature du Little Lemon" />
                </div>
            </header>

        </>
    );
};

export default Hero;
