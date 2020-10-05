import React from 'react';
import './AddEvent.css';
import Admin from './Admin';

const AddEvent = () => {
    const handleAddEvent = () => {
        const event = {};
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
    }
    return (
        <div className="container">
            <Admin></Admin>
            <div className="add-event-form">
                <h2 className="mb-4">Add Event</h2>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Event Title" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="date" placeholder="Event Date" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Description" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="file" />
                    </div>
                    <div>
                        <input onClick={handleAddEvent} className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;