import './App.css';

function App() {
    return (
        <div>
            <h1>25 + 5 Clock</h1>
            <div>
                <p id="break-label">Break Length</p>
                <button id="break-decrement"><i className="large material-icons">arrow_downward</i></button>
                <p id="break-length">5</p>
                <button id="break-increment"><i className="large material-icons">arrow_upward</i></button>
            </div>
            <div>
                <p id="session-label">Session Length</p>
                <button id="session-decrement"><i className="large material-icons">arrow_downward</i></button>
                <p id="session-length">25</p>
                <button id="session-INCREMENT"><i className="large material-icons">arrow_upward</i></button>
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
