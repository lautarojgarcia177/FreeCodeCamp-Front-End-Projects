import './display.css';

export function Display(props: any) {
    return <div id="display-container">
        <p>{props.formula}</p>
        <p>{props.result}</p>
    </div>
}
