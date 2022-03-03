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
            <ACButton/>
        </div>
        <div id="division">
            <DivisionButton/>
        </div>
        <div id="multiplication">
            <MultiplyButton/>
        </div>
        <div id="substraction">
            <SubstractionButton/>
        </div>
        <div id="addition">
            <AdditionButton/>
        </div>
        <div id="equal">
            <EqualButton/>
        </div>
        <div id="point">
            <PointButton/>
        </div>
        <div id="1">
            <NumberButton number={1}/>
        </div>
        <div id="2">
            <NumberButton number={2}/>
        </div>
        <div id="3">
            <NumberButton number={3}/>
        </div>
        <div id="4">
            <NumberButton number={4}/>
        </div>
        <div id="5">
            <NumberButton number={5}/>
        </div>
        <div id="6">
            <NumberButton number={6}/>
        </div>
        <div id="7">
            <NumberButton number={7}/>
        </div>
        <div id="8">
            <NumberButton number={8}/>
        </div>
        <div id="9">
            <NumberButton number={9}/>
        </div>
        <div id="zero">
            <NumberButton number={0}/>
        </div>
    </div>
}
