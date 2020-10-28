import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VolunteerContext } from '../../App';

const Event = (props) => {
    // console.log(props.event);
    const { img, title, key } = props.event;
    const [registeredVolunteer, setRegisteredVolunteer] = useContext(VolunteerContext);

    const handleAddVolunteer = () => {
        setRegisteredVolunteer(props.event);
    }

    return (
        <div className="col-md-3 mb-4">
            <Link to="/register-volunteer" onClick={handleAddVolunteer}>
                <div className="img-box">
                    <img src={img} alt="" className="w-100" />
                </div>
            </Link>
            <div>
                <Link to="/register-volunteer">
                    <h5 className="event-title">{title}</h5>
                </Link>
            </div>
        </div>

    );
};

export default Event;