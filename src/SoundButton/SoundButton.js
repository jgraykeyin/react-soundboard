import React from 'react';
import useSound from 'use-sound';
import fart1Sfx from '../audio/fart1.mp3';
import fart2Sfx from '../audio/fart2.mp3';
import fart3Sfx from '../audio/fart3.mp3';
import fart4Sfx from '../audio/fart4.mp3';
import fart5Sfx from '../audio/fart5.mp3';
import fart6Sfx from '../audio/fart6.mp3';
import buttonIcon from '../images/Icon.png';
import arrowIcon from '../images/Arrow.png';
import './SoundButton.css'


function SoundButton() {

    // I'm so sorry I'm using the word fart so much
    const fartLibrary = [fart1Sfx, fart2Sfx, fart3Sfx, fart4Sfx, fart5Sfx, fart6Sfx];

    // This will change the speed/pitch of the sound
    const [playbackRate, setPlaybackRate] = React.useState(0.75);

    // This will be used to change which sound effect we'll use
    const [soundToPlay, setSoundToPlay] = React.useState(fartLibrary[0])


    // Play the sound effect
    const [playSnd] = useSound(
        soundToPlay,
        { 
            playbackRate,
            volume: 0.25,
            interrupt: true
        },
    );

    const handleClick = () => {
        // Min and max values for the pitch of the audio file
        const min = 0.5;
        const max = 2.1;

        // Set a random pitch value
        let randomPitchNum = Math.random() * (max - min) + min;
        let randomPitch = randomPitchNum.toFixed(2);

        // Create a variable to let us randomly select an audio file
        let soundIndex = Math.floor(Math.random() * 6)
        
        // Set the pitch, select the audio clip and play it
        setPlaybackRate(randomPitch);
        setSoundToPlay(fartLibrary[soundIndex]);
        playSnd();
    }

    return (
        <div className="Button-area">
            <button onClick={handleClick}>
                <img className="Button-icon" src={buttonIcon} alt="Fart Icon"></img>
            </button>
            <img className="Arrow-icon" src={arrowIcon} alt='Arrow up Icon'></img>
            <h2 className="Warning-text">Do not press!</h2>
        </div>
    );
}

export default SoundButton;