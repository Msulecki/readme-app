import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Topbar from './Topbar';
import Main from './Main';
import '../styles/Content.scss';

function Content() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [addVisible, setAddVisible] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 100)
    }, [isLoaded]);

    console.log('content.js render');

    return (
        <div className={`content ${isLoaded ? 'slidein' : ''}`}>
            <Topbar setAddVisible={setAddVisible} setSettingsVisible={setSettingsVisible} />
            {!(addVisible || settingsVisible) &&
                <>
                    <Main />
                    <Nav />
                </>}
        </div>
    )
}
export default Content;