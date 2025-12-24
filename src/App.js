import React from 'react';

import './App.css';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Salade from './assets/images/salade.jpg'
import Salade2 from './assets/images/salade2.jpg'

function App() {
  // Fonction de soumission simulée
  const submitData = (formData) => {
    console.log("Données envoyées :", formData);
    alert("Réservation confirmée !");
    return true;
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* La section Hero possède l'ID 'home' */}
      <div id="home">
        <Hero />
      </div>

      <main>
        {/* --- SECTION 1 : LES SPÉCIALITÉS --- */}
        <section id="specials" className="specials-section">
          <div className="section-title">
            <h2>The Chef's Specialties</h2>
            <button className="btn-secondary">View Menu</button>
          </div>

          <div className="specials-grid">
            <article className="dish-card">
              <div className="dish-image salad"></div>
              <div className="dish-content">
                <div className="dish-header">
                  <h3>Greek Salad</h3>
                  <span className="price">$12.99</span>
                </div>
                <p>Fresh tomatoes, cucumbers, Kalamata olives, and our famous creamy feta cheese.</p>
                <button className="order-btn">Order</button>
              </div>
            </article>

            <article className="dish-card">
              <div className="dish-image bruschetta"></div>
              <div className="dish-content">
                <div className="dish-header">
                  <h3>Bruschetta</h3>
                  <span className="price">$7.99</span>
                </div>
                <p>Grilled bread rubbed with garlic, topped with seasoned tomatoes and fresh basil.</p>
                <button className="order-btn">Order</button>
              </div>
            </article>
          </div>
        </section>

        {/* --- SECTION 2 : À PROPOS --- */}
        <section id="about" className="about-section">
          <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Located in the heart of Chicago, 
              Little Lemon is a family-run brasserie offering modern Mediterranean cuisine. 
              We focus on fresh ingredients and recipes passed down through generations.
            </p>
          </div>
          <div className="about-images">
            <div className="img-stack top"></div>
            <div className="img-stack bottom"></div>
          </div>
        </section>

        {/* --- SECTION 3 : RÉSERVATION --- */}
        <section className="hero" id="booking">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Book your table for an unforgettable dining experience.</p>
        </section>
        {/* The core form of the application */}
        <BookingForm submitForm={submitData} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
