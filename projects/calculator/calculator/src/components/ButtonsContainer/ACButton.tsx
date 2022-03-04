import './button.css';

export function ACButton(props: any) {
    return <button onClick={props.onACPress} style={{
        backgroundColor: 'darkred'
    }}> AC </button>
}
