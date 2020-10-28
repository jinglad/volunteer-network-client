import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import RegEvents from '../RegEvents/RegEvents';
import './RegisteredEvent.css';

const RegisteredEvent = () => {
    const [events, setEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://hidden-ravine-72599.herokuapp.com/registeredEvents?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
    }, []);

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
            <div className="row mt-5">
                {
                    events.map(ev => <RegEvents ev={ev}></RegEvents>)
                }
            </div>
        </div>
    );
};

export default RegisteredEvent;