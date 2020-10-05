import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    return (
        <div className="row mt-5">
            <div>
                <Link to="/home"><img src="https://lh3.googleusercontent.com/yyQ7uPUunje-D41U0yBOs0kdhQ9ad4R83gDFOwFngZBRwmYK-r3xtQrt8wc9Fgeh8yKAbZAIZz5Z1slnxbvAvAFkmcSF-Q0xbE5VIL6keqp9iljOMrewDVfEeZ0VfCK_dfslbx378A=w2400" alt="" className="w-50" /></Link>
            </div>
            <div className="mt-4 pt-4 ml-auto">
                <Link className="admin-item" to="/add-event">Add Event</Link>
                <Link className="admin-item" to="/volunteer-list">Volunteer List</Link>
            </div>
        </div>
    );
};

export default Admin;