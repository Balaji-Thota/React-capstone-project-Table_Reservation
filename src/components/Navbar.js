import React from 'react';


const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="nav-logo">
                <b>Little Lemon</b>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Welcome</a></li>
                <li><a href="#booking" className="nav-cta">Book</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
