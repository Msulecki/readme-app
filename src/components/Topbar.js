import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
    const history = useHistory();
    const path = history.location.pathname.split('/')[1];
    const appLocation = path ? path[0].toUpperCase().concat(path.slice(1, path.length)) : '';

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
            }, 300);
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
            }, 300);
        }
    }

    return (
        <div className="topbar">
            {add && <Add slidein={slideAdd} add={add} handleAdd={handleAdd} />}
            {settingsVisible && <Settings slidein={slideSet} />}
            <button className="topbar__add">
                <img className={`${slideAdd ? 'rotate' : ''}`} onClick={handleAdd} src={AddIcon} alt="Add" />
            </button>
            <div className="topbar__logo">
                <h1>{add ? "New book" : settingsVisible ? "Settings" : appLocation}</h1>
            </div>
            <button className="topbar__settings">
                <img onClick={handleSettings} src={SettingsIcon} alt="Settings" />
            </button>
        </div>
    )
}
export default Topbar;