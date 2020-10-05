import React, { useEffect, useState } from 'react';
import Admin from './Admin';
import './VolunteerList.css';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);
    console.log(volunteers);

    const deleteVolunteer = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result > 0) {
                    alert("The Volunteer Registration Has Been Deleted...!...Reload And Login For See The Change...!");
                }
            })
    }


    return (
        <div className="container">
            <Admin></Admin>
            <div className="mt-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">Volunteer List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteers.map(volunteer =>
                                <tr className="border">
                                    <td>{volunteer.data.name}</td>
                                    <td>{volunteer.data.email}</td>
                                    <td>{volunteer.data.date}</td>
                                    <td>{volunteer.data.event_title}</td>
                                    <td className="text-white delete-btn"><span onClick={() => deleteVolunteer(volunteer._id)} className="bg-danger p-2">Delete</span></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default VolunteerList;