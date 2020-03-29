import React, { useState, useEffect } from 'react';
import newMessagesIcon from '../assets/icons/settings/newMessages.svg';
import newContentIcon from '../assets/icons/settings/newContent.svg';
import nightModeIcon from '../assets/icons/settings/nightMode.svg';
import highContrastIcon from '../assets/icons/settings/highContrast.svg';
import customBgColorIcon from '../assets/icons/settings/customBgColor.svg';
import '../styles/Settings.scss';

function Settings(props) {

    const { slidein } = props;

    const storedSettings = JSON.parse(localStorage.getItem('ReadmeAppSettings'));

    const [showMessages, setShowMessages] = useState(storedSettings ? storedSettings.showMessages : false);
    const [showNewContent, setShowNewContent] = useState(storedSettings ? storedSettings.showNewContent : false);
    const [nightMode, setNightMode] = useState(storedSettings ? storedSettings.nightMode : true);
    const [highContrast, setHightContrast] = useState(storedSettings ? storedSettings.highContrast : false);
    const [customBackground, setCustomBackground] = useState(storedSettings ? storedSettings.customBackground : false);
    const [agreementData, setAgreementData] = useState(storedSettings ? storedSettings.agreementData : false);
    const [agreementInfo, setAgreementInfo] = useState(storedSettings ? storedSettings.agreementInfo : false);
    const [agreementTerms, setAgreementTerms] = useState(storedSettings ? storedSettings.agreementTerms : false);

    const [color, setColor] = useState(storedSettings ? storedSettings.color : [0, 0, 0]);
    const [hue, setHue] = useState(storedSettings ? storedSettings.color[0] : 0);
    const [saturation, setSaturation] = useState(storedSettings ? storedSettings.color[1] : 0);
    const [lightness, setLightness] = useState(storedSettings ? storedSettings.color[2] : 0);

    const sliderStyle = {
        backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
    }


    let settings = {
        showMessages,
        showNewContent,
        nightMode,
        highContrast,
        customBackground,
        agreementData,
        agreementInfo,
        agreementTerms,
        color
    }

    const handleSettingsReset = () => {
        if (window.confirm("Reset all settings?")) {
            setShowMessages(false);
            setShowNewContent(false);
            setNightMode(false);
            setHightContrast(false);
            setCustomBackground(false);
            setAgreementData(false);
            setAgreementInfo(false);
            setAgreementTerms(false);
            setHue(0);
            setSaturation(0);
            setLightness(0);
            setColor([0, 0, 0]);
        }
    }

    const handleSlider = e => {
        if (customBackground) {
            switch (e.target.name) {
                case "hue":
                    setHue(e.target.value);
                    break;
                case "saturation":
                    setSaturation(e.target.value);
                    break;
                case "lightness":
                    setLightness(e.target.value);
                    break;
                default:
                    setHue(0);
                    setSaturation(0);
                    setLightness(0);
            }
        }
    }

    const handleSaveColor = () => {
        setColor([hue, saturation, lightness]);
    }

    useEffect(() => {
        localStorage.setItem('ReadmeAppSettings', JSON.stringify(settings));
    }, [settings]);

    return (
        <article className={`settings ${slidein ? 'slide-card' : ''}`}>
            <ul className="settings__list">
                <h3>Notifications</h3>
                <li className="settings__list-item">
                    <img src={newMessagesIcon} alt="Show app messages" />
                    <div className="settings__name">Show app messages</div>
                    <div className="settings__toggle">
                        <label>
                            <input type="checkbox" checked={settings.showMessages} onChange={() => setShowMessages(!showMessages)} />
                            <div className="settings__toggle-mark"></div>
                            <div className="settings__toggle-bg"></div>
                        </label>
                    </div>
                </li>
                <li className="settings__list-item">
                    <img src={newContentIcon} alt="New content alert" />
                    <div className="settings__name">New content alert</div>
                    <div className="settings__toggle">
                        <label>
                            <input type="checkbox" checked={settings.showNewContent} onChange={() => setShowNewContent(!showNewContent)} />
                            <div className="settings__toggle-mark"></div>
                            <div className="settings__toggle-bg"></div>
                        </label>
                    </div>
                </li>
            </ul>
            <ul className="settings__list">
                <h3>Apperance</h3>
                <li className="settings__list-item">
                    <img src={nightModeIcon} alt="Night mode" />
                    <div className="settings__name">Night mode</div>
                    <div className="settings__toggle">
                        <label>
                            <input type="checkbox" checked={settings.nightMode} onChange={() => setNightMode(!nightMode)} />
                            <div className="settings__toggle-mark"></div>
                            <div className="settings__toggle-bg"></div>
                        </label>
                    </div>
                </li>
                <li className="settings__list-item">
                    <img src={highContrastIcon} alt="High contrast" />
                    <div className="settings__name">High contrast</div>
                    <div className="settings__toggle">
                        <label>
                            <input type="checkbox" checked={settings.highContrast} onChange={() => setHightContrast(!highContrast)} />
                            <div className="settings__toggle-mark"></div>
                            <div className="settings__toggle-bg"></div>
                        </label>
                    </div>
                </li>
                <li className="settings__list-item">
                    <img src={customBgColorIcon} alt="Custom background color" />
                    <div className="settings__name">Custom background color</div>
                    <div className="settings__toggle">
                        <label>
                            <input type="checkbox" checked={settings.customBackground} onChange={() => setCustomBackground(!customBackground)} />
                            <div className="settings__toggle-mark"></div>
                            <div className="settings__toggle-bg"></div>
                        </label>
                    </div>
                </li>
                <div className={`settings__slider ${!customBackground ? 'disabled' : ''}`}>
                    <h4>Set background color</h4>
                    <div className="settings__slider-wrap">
                        <h5>H</h5>
                        <input type="range" style={sliderStyle} name="hue" max={360} value={hue}
                            onChange={handleSlider}
                            onKeyUp={handleSaveColor}
                            onTouchEnd={handleSaveColor}
                            onMouseUp={handleSaveColor} />
                        <h5 className="settings__slider-values">{hue}</h5>
                    </div>
                    <div className="settings__slider-wrap">
                        <h5>S</h5>
                        <input type="range" style={sliderStyle} name="saturation" max={100} value={saturation}
                            onChange={handleSlider}
                            onKeyUp={handleSaveColor}
                            onTouchEnd={handleSaveColor}
                            onMouseUp={handleSaveColor} />
                        <h5 className="settings__slider-values">{saturation}</h5>
                    </div>
                    <div className="settings__slider-wrap">
                        <h5>L</h5>
                        <input type="range" style={sliderStyle} name="lightness" max={100} value={lightness}
                            onChange={handleSlider}
                            onKeyUp={handleSaveColor}
                            onTouchEnd={handleSaveColor}
                            onMouseUp={handleSaveColor} />
                        <h5 className="settings__slider-values">{lightness}</h5>
                    </div>

                </div>
            </ul>
            <div className="settings__list">
                <h3>Agreements</h3>
                <div className="settings__list-agreement">
                    <label>
                        <input type="checkbox" checked={settings.agreementData} onChange={() => setAgreementData(!agreementData)} className="agreements" />
                    </label>
                    Send anonymous data that will help us improove this app.
                </div>
                <div className="settings__list-agreement">
                    <label>
                        <input type="checkbox" checked={settings.agreementInfo} onChange={() => setAgreementInfo(!agreementInfo)} className="agreements" />
                    </label>
                    Recieve info about our latest work.
                </div>
                <div className="settings__list-agreement">
                    <label>
                        <input type="checkbox" checked={settings.agreementTerms} onChange={() => setAgreementTerms(!agreementTerms)} className="agreements" />
                    </label>
                    Agree to <span className="terms">terms and conditions.</span>
                </div>
            </div>
            <div className="settings__list">
                <button className="settings__list-reset" onClick={handleSettingsReset}>Reset all settings</button>
            </div>
        </article>
    );
}
export default Settings;