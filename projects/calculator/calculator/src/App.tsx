import React from 'react';
import {Display} from './components/Display';
import {ButtonsContainer} from './components/ButtonsContainer/ButtonsContainer';

const pageContainer = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const containerDivStyles = {
    height: '800px',
    width: '600px',
    display: 'grid',
    gridTemplateRows: '100px 300px',
    border: '4px solid red'
}

function App() {
    return (
        <div style={pageContainer}>
            <div style={containerDivStyles}>
                <Display/>
                <ButtonsContainer/>
            </div>
        </div>
    );
}

export default App;
