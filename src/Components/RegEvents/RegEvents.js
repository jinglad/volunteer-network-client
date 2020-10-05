import React from 'react';
import './RegEvents.css';

const RegEvents = (props) => {
    const { img, title } = props.ev.details.registeredVolunteer;
    const { date } = props.ev.data;

    const deleteEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result > 0) {
                    alert("Your Event Has Been Deleted...!...Reload And Login For See The Change...!");
                }
            })
    }

    return (
        <div className="col-md-6 registered-event-box">
            <div className="registered-img-box">
                <img src={img} alt="" />
            </div>
            <div className="registered-event-info">
                <h4>{title}</h4>
                <h5>{date}</h5>
                <button onClick={() => deleteEvent(props.ev._id)}>Cancel</button>
            </div>
        </div>
    );
};

export default RegEvents;