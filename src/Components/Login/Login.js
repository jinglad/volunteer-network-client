import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn } from './loginManager';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


initializeLoginFramework();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: ''
    })

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    return (
        <div className="container">
            <div className="text-center">
                <Link to="/home"><img src="https://lh3.googleusercontent.com/yyQ7uPUunje-D41U0yBOs0kdhQ9ad4R83gDFOwFngZBRwmYK-r3xtQrt8wc9Fgeh8yKAbZAIZz5Z1slnxbvAvAFkmcSF-Q0xbE5VIL6keqp9iljOMrewDVfEeZ0VfCK_dfslbx378A=w2400" alt="" className="w-50" /></Link>
            </div>
            <div className="text-center login-box">
                <div className="mt-5">
                    <h3>Login With</h3>
                    <button onClick={googleSignIn} className="google-sign-in-btn"> <FontAwesomeIcon className="google-icon" icon={faGoogle} /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;