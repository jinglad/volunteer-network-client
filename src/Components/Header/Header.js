import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div>
                    <Link to="/home"><img src="https://lh3.googleusercontent.com/yyQ7uPUunje-D41U0yBOs0kdhQ9ad4R83gDFOwFngZBRwmYK-r3xtQrt8wc9Fgeh8yKAbZAIZz5Z1slnxbvAvAFkmcSF-Q0xbE5VIL6keqp9iljOMrewDVfEeZ0VfCK_dfslbx378A=w2400" alt="" className="w-50" /></Link>
                </div>
                <div className="menu mt-4">
                    <Link className="item" to="/home">Home</Link>
                    <Link className="item" to="/donation">Donation</Link>
                    <Link className="item" to="/registered-events">Events</Link>
                    <Link className="item" to="/blog">Blog</Link>
                    <Link className="item" to="/register-volunteer"><button className="register-btn btn btn-primary mx-2">Register</button></Link>
                    <Link className="item" to="/add-event"><button className="admin-btn btn btn-secondary mx-2">Admin</button></Link>
                </div>
            </div>
            <div className="text-center my-5">
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <div className="search-container">
                    <input className="search-box" type="text" placeholder="Search..." />
                    <input className="search-btn" type="button" value="Search" />
                </div>
            </div>
        </div>
    );
};

export default Header;