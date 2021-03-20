import React from 'react';
import useSound from 'use-sound';
import fart1Sfx from '../audio/fart1.mp3';
import fart2Sfx from '../audio/fart2.mp3';
import fart3Sfx from '../audio/fart3.mp3';
import buttonIcon from '../images/Icon.png';
import arrowIcon from '../images/Arrow.png';
import './SoundButton.css'


function SoundButton() {

    // I'm so sorry I'm using the word fart so much
    const fartLibrary = [fart1Sfx, fart2Sfx, fart3Sfx];

    const [playSnd] = useSound(
        fartLibrary[Math.floor(Math.random() * 3)],
        { volume: 0.25 },
    );

    return (
        <div className="Button-area">
            <button onClick={playSnd}>
                <img className="Button-icon" src={buttonIcon} alt="Fart Icon"></img>
            </button>
            <img className="Arrow-icon" src={arrowIcon} alt='Arrow up Icon'></img>
            <h2 className="Warning-text">Do not press!</h2>
        </div>
    );
}

export default SoundButton;