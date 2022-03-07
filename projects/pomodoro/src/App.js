import './App.css';
import React, {useState, useEffect} from 'react';

let timerInterval;
const audioAlarm = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav');

function App() {
    // TimerValue is in milliseconds
    const defaultTimerValue = 1500000;
    const [breakLength, setBreakLength] = useState(300000);
    const [sessionLength, setSessionLength] = useState(defaultTimerValue);
    const [isRunning, setIsRunning] = useState(false);
    const [timerValue, setTimerValue] = useState(defaultTimerValue);
    const [isSessionTime, setIsSessionTime] = useState(true);

    useEffect(() => {
        setTimerValue(sessionLength);
    }, [sessionLength]);

    function startInterval(timeLeft) {
        timerInterval = setInterval(() => {
            if (timeLeft >= 1000) {
                timeLeft -= 1000;
            } else {
                if (isSessionTime) {
                    // start break
                    timeLeft = breakLength;
                } else {
                    // start session
                    timeLeft = sessionLength;
                }
            }
            setTimerValue(timeLeft);
        }, 1000);
    }

    useEffect(() => {
        clearInterval(timerInterval);
        if (isRunning) {
            let timeLeft = timerValue;
            startInterval(timeLeft);
        }
    }, [isRunning]);

    useEffect(() => {
        if (timerValue === sessionLength || timerValue === breakLength) {
            clearInterval(timerInterval);
            if (isRunning) {
                audioAlarm.play();
                if (isSessionTime) {
                    // start break
                    setIsSessionTime(false);
                    startInterval(breakLength);
                } else {
                    // start session
                    setIsSessionTime(true);
                    startInterval(sessionLength);
                }
            }
        }
    }, [timerValue]);

    // Increment session by one minute
    function onSessionIncrement() {
        if (!isRunning) {
            setSessionLength(sessionLength + 60000);
            onReset();
        }
    }

    function onSessionDecrement() {
        if (!isRunning) {
            if (sessionLength > 60000) {
                setSessionLength(sessionLength - 60000);
                onReset();
            }
        }
    }

    function onBreakIncrement() {
        if (!isRunning) {
            if (breakLength <= 3540000) {
                setBreakLength(breakLength + 60000);
            }
        }
    }

    function onBreakDecrement() {
        if (!isRunning) {
            if (breakLength > 60000) {
                setBreakLength(breakLength - 60000);
            }
        }
    }

    function onStart() {
        setIsRunning(true);
    }

    function onPause() {
        setIsRunning(false);
    }

    function onReset() {
        onPause();
        setTimerValue(sessionLength);
    }

    function formatTimerValue() {
        let minutes = String(Math.floor((timerValue / 60000)));
        if (minutes.length === 1) minutes = `0${minutes}`;
        let seconds = String((timerValue % 60000) / 1000);
        if (seconds.length === 1) seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    function convertMillisecondsToMinutes(value) {
        return (value / 60000);
    }

    const StartBtn = <button id="start_stop" className="btn__playback_controls"
                             onClick={onStart}><i className="small material-icons">play_arrow</i>
    </button>;

    const StopBtn = <button id="pause" className="btn__playback_controls"
                            onClick={onPause}><i className="small material-icons">pause</i>
    </button>;

    return (
        <div id="container">
            <h1>25 + 5 Clock</h1>
            <div id="container__lengths">
                <div>
                    <h5 style={{textAlign: 'center'}} id="break-label">Break Length</h5>
                    <div className="container__length">
                        <button className="btn__increment_decrement" id="break-decrement"><i
                            onClick={onBreakDecrement} className="small material-icons">arrow_downward</i></button>
                        <p id="break-length">{convertMillisecondsToMinutes(breakLength)}</p>
                        <button className="btn__increment_decrement" id="break-increment"><i
                            onClick={onBreakIncrement} className="small material-icons">arrow_upward</i></button>
                    </div>
                </div>
                <div>
                    <h5 style={{textAlign: 'center'}} id="session-label">Session Length</h5>
                    <div className="container__length">
                        <button className="btn__increment_decrement" id="session-decrement"
                                onClick={onSessionDecrement}><i className="small material-icons">arrow_downward</i>
                        </button>
                        <p id="session-length">{convertMillisecondsToMinutes(sessionLength)}</p>
                        <button className="btn__increment_decrement" id="session-increment"
                                onClick={onSessionIncrement}><i className="small material-icons">arrow_upward</i>
                        </button>
                    </div>
                </div>
            </div>
            <div id="container__timer">
                <h4 id="timer-label">{isSessionTime ? 'Session' : 'Break'}</h4>
                <p id="time-left">{formatTimerValue()}</p>
            </div>
            <div>
                {!isRunning ? StartBtn : StopBtn}
                <button id="reset" className="btn__playback_controls"
                        onClick={onReset}><i className="small material-icons">stop</i>
                </button>
            </div>
        </div>
    );
}

export default App;
