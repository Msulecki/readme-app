import React from 'react';
import '../styles/Loader.scss';

function Loader() {
    return (
        <div className="loader">
            Loading...
            <div className="loader__element"></div>
            <div className="loader__element"></div>
            <div className="loader__element"></div>
            <div className="loader__element"></div>
        </div>
    )
}
export default Loader;