import React, { useContext } from 'react';
import './RegisterVolunteer.css';
import { UserContext, VolunteerContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterVolunteer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [registeredVolunteer, setRegisteredVolunteer] = useContext(VolunteerContext);

    const onSubmit = data => {
        const volunteerDetails = { ...loggedInUser, details: { registeredVolunteer }, data: data, registrationTime: new Date() };
        fetch('https://hidden-ravine-72599.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Registration is Successfull...!');
                }
            })
    };

    return (
        <div className="container">
            <div className="text-center">
                <Link to="/home"><img src="https://lh3.googleusercontent.com/yyQ7uPUunje-D41U0yBOs0kdhQ9ad4R83gDFOwFngZBRwmYK-r3xtQrt8wc9Fgeh8yKAbZAIZz5Z1slnxbvAvAFkmcSF-Q0xbE5VIL6keqp9iljOMrewDVfEeZ0VfCK_dfslbx378A=w2400" alt="" className="w-50" /></Link>
            </div>
            <div className="registration-form">
                <h3 className="mb-4">Register as a Volunteer</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input className="form-control" name="name" type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                    </div>
                    <div className="form-group">
                        <input name="date" ref={register({ required: true })} className="form-control" type="date" placeholder="Date" />
                    </div>
                    <div className="form-group">
                        <input name="description" ref={register({ required: true })} className="form-control" placeholder="Description"></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="event_title" type="text" defaultValue={registeredVolunteer.title}
                            ref={register({ required: true })} placeholder="Organize books at the library." />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary btn-block" type="submit" value="Registration" />
                    </div>
                    <div className="form-group">
                        <Link to="/registered-events" className="text-decoration-none"><button className="btn btn-success btn-block">Check Your Events</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterVolunteer;