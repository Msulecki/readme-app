import React, { useState } from 'react';
import Modal from './Modal';
import logo from '../assets/logo.svg';
import '../styles/Login.scss';

function Login(props) {

    const { setIsLogged } = props;
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [slide, setSlide] = useState(false);
    const [resetTransition, setResetTransition] = useState(false);

    const handleTransition = time => {
        return time === 0 ?
            setResetTransition(!resetTransition) // add transition time and begin transition
            : setTimeout(() => {
                setResetTransition(!resetTransition)
            }, time);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setSlide(true)
        setTimeout(() => {
            setIsLogged(true);
        }, 300);
    }

    const handleLogin = () => {
        setLogin(true);
        handleTransition(500); // remove transition time after transition in over
    }

    const handleBack = () => {
        handleTransition(0); // add transition time and begin transition
        setLogin(false);
    }

    return (
        <div className={`login ${slide ? 'slide' : ''}`}>
            {register && <Modal setRegister={setRegister} />}
            <header>
                <img src={logo} alt="Random read" />
                <h1>Welcome</h1>
            </header>

            <div className={`login__holder ${login ? 'slide' : ''} ${resetTransition ? 'static' : ''}`}>
                <div className="login__group">
                    <button
                        tabIndex={`${login ? -1 : 1}`}
                        onClick={handleLogin}
                        className="btn btn--login">
                        Login
                    </button>
                    <button
                        tabIndex={`${login ? -1 : 1}`}
                        onClick={() => setRegister(true)}
                        className="btn btn--register">
                        Register
                    </button>
                </div>

                <div className="login__group">
                    <div className="login__form-wrapper">
                        <form className="login__form" onSubmit={handleFormSubmit}>
                            <input
                                required
                                tabIndex={`${login ? 1 : -1}`}
                                type="text"
                                placeholder="Login..." />
                            <input
                                required
                                tabIndex={`${login ? 1 : -1}`}
                                type="password"
                                placeholder="Password..." />
                            <input
                                tabIndex={`${login ? 1 : -1}`}
                                type="submit"
                                value="Login" />
                        </form>
                        <button
                            onClick={handleBack}
                            tabIndex={`${login ? 1 : -1}`}
                            className='btn btn--back'>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;