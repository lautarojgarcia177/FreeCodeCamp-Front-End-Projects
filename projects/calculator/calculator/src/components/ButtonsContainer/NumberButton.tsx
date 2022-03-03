import './button.css';
import './number-button.css';

export function NumberButton(props: any) {
    return <button className="number-button"> {props.number} </button>
}
