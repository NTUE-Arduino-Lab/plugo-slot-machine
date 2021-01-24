import './style.css';
import {useEffect, useState} from "react";

let intervalId;

function Slot({isAnimated, currentResult}) {

    // todo
    // expected
    // 1. final number
    // 2. is animating

    const [slot1, setSlot1] = useState(1);
    const [slot2, setSlot2] = useState(2);
    const [slot3, setSlot3] = useState(3);

    useEffect(() => {
        if(isAnimated) {
            goRandom()
        } else {
            formatCurrentResult()
        }
    }, [isAnimated])

    const goRandom = () => {
        intervalId = window.setInterval(() => {
            setSlot1(randomIntFromInterval(1, 9))
            setSlot2(randomIntFromInterval(1, 9))
            setSlot3(randomIntFromInterval(1, 9))
        }, 100)
    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const formatCurrentResult = () => {
        window.clearInterval(intervalId);
        if(!currentResult) {
            setSlot1(0);
            setSlot2(0);
            setSlot3(0);
        } else if(currentResult === "joker") {
            setSlot1(9);
            setSlot2(9);
            setSlot3(9);
        } else if (currentResult.toString().length === 2) {
            setSlot1(0);
            setSlot2(currentResult.toString().charAt(0));
            setSlot3(currentResult.toString().charAt(1));
        } else if (currentResult.toString().length === 1) {
            setSlot1(0);
            setSlot2(0);
            setSlot3(currentResult.toString().charAt(0));
        } else {
            setSlot1(currentResult.toString().charAt(0));
            setSlot2(currentResult.toString().charAt(1));
            setSlot3(currentResult.toString().charAt(2));
        }
    }

    return (
        <div className="Slot-container">
            <div className="slot">
                <h1>{slot1}</h1>
            </div>
            <div className="slot">
                <h1>{slot2}</h1>
            </div>
            <div className="slot">
                <h1>{slot3}</h1>
            </div>
        </div>
    );
}

export default Slot;
