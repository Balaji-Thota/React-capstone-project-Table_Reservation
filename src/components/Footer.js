import React from 'react';


const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <b>Little Lemon</b>
                </div>

                <nav className="footer-nav">
                    <ul>
                        <li><a href="/">Welcome</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                    </ul>
                </nav>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>123 Taste Avenue, Chicago</p>
                    <p>+33 1 23 45 67 89</p>
                    <p>contact@littlelemon.com</p>
                </div>

                <div className="footer-social">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


