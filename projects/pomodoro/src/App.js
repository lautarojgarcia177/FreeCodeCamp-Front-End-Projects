import './App.css';
import React, {useState} from 'react';

function App() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);

    function onSessionIncrement() {
        setSessionLength(sessionLength + 1);
    }

    function onSessionDecrement() {
        if (sessionLength > 0) {
            setSessionLength(sessionLength - 1);
        }
    }
    function onBreakIncrement() {
        setBreakLength(breakLength + 1);
    }

    function onBreakDecrement() {
        if (breakLength > 0) {
            setBreakLength(breakLength - 1);
        }
    }

    return (
        <div id="container">
            <h1>25 + 5 Clock</h1>
            <div id="container__lengths">
                <div>
                    <h5 style={{textAlign: 'center'}} id="break-label">Break Length</h5>
                    <div className="container__length">
                        <button className="btn__increment_decrement" id="break-decrement"><i
                            onClick={onBreakIncrement} className="small material-icons">arrow_downward</i></button>
                        <p id="break-length">{breakLength}</p>
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
                        <p id="session-length">{sessionLength}</p>
                        <button className="btn__increment_decrement" id="session-increment"
                                onClick={onSessionIncrement}><i className="small material-icons">arrow_upward</i>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p id="timer-label">Session</p>
                <p id="time-left"></p>
            </div>
            <div>
                <span id="start_stop">Start</span>
                <span id="pause">Pause</span>
                <span id="reset">Reset</span>
            </div>
        </div>
    );
}

export default App;
