import {ACButton} from "./ACButton";
import {DivisionButton} from "./DivisionButton";
import {MultiplyButton} from "./MultiplyButton";
import {SubstractionButton} from "./SubstractionButton";
import {AdditionButton} from "./AdditionButton";
import {EqualButton} from "./EqualButton";
import {PointButton} from "./PointButton";
import {NumberButton} from "./NumberButton";
import './ButtonsContainer.css';

export function ButtonsContainer(props: any) {
    return <div id="container">
        <div id="ac">
            <ACButton onACPress={props.onACPress}/>
        </div>
        <div id="division">
            <DivisionButton onDivisionPress={props.onDivisionPress} />
        </div>
        <div id="multiplication">
            <MultiplyButton onMultiplicationPress={props.onMultiplicationPress}/>
        </div>
        <div id="substraction">
            <SubstractionButton onSubstractionPress={props.onSubstractionPress}/>
        </div>
        <div id="addition">
            <AdditionButton onAdditionPress={props.onAdditionPress}/>
        </div>
        <div id="equal">
            <EqualButton onEqualsPress={props.onEqualsPress} />
        </div>
        <div id="point">
            <PointButton onPointPress={props.onPointPress} />
        </div>
        <div id="1">
            <NumberButton onNumberPress={props.onNumberPress} number={1}/>
        </div>
        <div id="2">
            <NumberButton onNumberPress={props.onNumberPress} number={2}/>
        </div>
        <div id="3">
            <NumberButton onNumberPress={props.onNumberPress} number={3}/>
        </div>
        <div id="4">
            <NumberButton onNumberPress={props.onNumberPress} number={4}/>
        </div>
        <div id="5">
            <NumberButton onNumberPress={props.onNumberPress} number={5}/>
        </div>
        <div id="6">
            <NumberButton onNumberPress={props.onNumberPress} number={6}/>
        </div>
        <div id="7">
            <NumberButton onNumberPress={props.onNumberPress} number={7}/>
        </div>
        <div id="8">
            <NumberButton onNumberPress={props.onNumberPress} number={8}/>
        </div>
        <div id="9">
            <NumberButton onNumberPress={props.onNumberPress} number={9}/>
        </div>
        <div id="zero">
            <NumberButton onNumberPress={props.onNumberPress} number={0}/>
        </div>
    </div>
}
