import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://hidden-ravine-72599.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const { key } = events;
    return (
        <div className="container">
            <div className="row">
                {
                    events.map((event) => <Event key={key} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;