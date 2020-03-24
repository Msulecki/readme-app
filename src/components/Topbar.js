import React, { useState } from 'react';
import Add from '../pages/Add';
import Settings from '../pages/Settings';
import '../styles/Topbar.scss';
import AddIcon from '../assets/icons/add.svg';
import SettingsIcon from '../assets/icons/settings.svg';

function Topbar(props) {
    const [add, setAdd] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [slideSet, setSlideSet] = useState(false);
    const [slideAdd, setSlideAdd] = useState(false);

    const handleAdd = () => {
        if (!add) {
            setAdd(true);
            setTimeout(() => {
                setSlideAdd(true);
                props.setAddVisible(true);
                settingsVisible && handleSettings();
            })
        } else {
            setSlideAdd(false);
            props.setAddVisible(false);
            setTimeout(() => {
                setAdd(false);
            }, 300)
        }

    }
    const handleSettings = () => {
        if (!settingsVisible) {
            setSettingsVisible(true);
            setTimeout(() => {
                setSlideSet(true);
                props.setSettingsVisible(true);
                add && handleAdd();
            })
        } else {
            setSlideSet(false);
            props.setSettingsVisible(false);
            setTimeout(() => {
                setSettingsVisible(false);
            }, 300)
        }
    }

    console.log('topbar.js render');

    return (
        <div className="topbar">
            {add && <Add slidein={slideAdd} handleAdd={handleAdd} />}
            {settingsVisible && <Settings slidein={slideSet} />}
            <button className="topbar__add">
                <img onClick={handleAdd} src={AddIcon} alt="Add" />
            </button>
            <div className="topbar__logo">
                <h1>ReadmeApp</h1>
            </div>
            <button className="topbar__settings">
                <img onClick={handleSettings} src={SettingsIcon} alt="Settings" />
            </button>
        </div>
    )
}
export default Topbar;