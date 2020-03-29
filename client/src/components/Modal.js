import React from 'react';
import '../styles/Modal.scss';

function Modal(props) {
    const { setRegister } = props;
    return (
        <div className="modal">
            <div className="modal__info">
                <h2>Demo mode</h2>
                <p>This site is in demo mode. There is no need for registration. Just click login button and provide any login and password.</p>
            </div>
            <button
                onClick={() => setRegister(false)}
                class='btn btn--modal'>Ok</button>
        </div>
    )
}
export default Modal;