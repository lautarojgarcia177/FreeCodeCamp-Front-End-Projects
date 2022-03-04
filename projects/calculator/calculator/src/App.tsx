import React, {useState} from 'react';
import {Display} from './components/Display';
import {ButtonsContainer} from './components/ButtonsContainer/ButtonsContainer';

const pageContainer = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkslateblue'
}

const containerDivStyles = {
    height: '400px',
    width: '400px',
    display: 'grid',
    gridTemplateRows: '100px 300px',
    border: '4mm ridge yellow'
}

function App() {
    const [formula, setFormula] = useState('');
    const [result, setResult] = useState(null);

    function onNumberPress(numberPressed: number): void {
        setFormula(formula + numberPressed);
    }

    function onDivisionPress(): void {
        setFormula(formula + ' ' + '/');
    }

    function onMultiplicationPress(): void {
        setFormula(formula + ' ' + '*');
    }

    function onSubstractionPress(): void {
        setFormula(formula + ' ' + '-');
    }

    function onAdditionPress(): void {
        setFormula(formula + ' ' + '+');
    }

    function onEqualsPress(): void {
        const _result = eval(formula);
        console.log(_result);
        setResult(_result);
    }

    function onPointPress(): void {
        setFormula(formula + '.');
    }

    function onACPress(): void {
        setFormula('');
        setResult(null);
    }

    return (
        <div style={pageContainer}>
            <div style={containerDivStyles}>
                <Display formula={formula} result={result} />
                <ButtonsContainer onACPress={onACPress} onMultiplicationPress={onMultiplicationPress}
                                  onSubstractionPress={onSubstractionPress} onAdditionPress={onAdditionPress}
                                  onEqualsPress={onEqualsPress} onPointPress={onPointPress}
                                  onDivisionPress={onDivisionPress} onNumberPress={onNumberPress}/>
            </div>
        </div>
    );
}

export default App;
