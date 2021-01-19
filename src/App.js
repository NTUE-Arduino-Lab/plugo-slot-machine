import {useState} from "react";
import './App.css';
import Train from "./components/train";
import Slot from "./components/slot";
import ResultList from "./components/resultList";
import Settings from "./components/settings";

import Audio_Train from './assets/audio-train.mp3'
import CopyRight from "./components/copyright";

function App() {

    const [isAnimated, setIsAnimated] = useState(false);
    const [resultList, setResultList] = useState([]);
    const [currentResult, setCurrentResult] = useState(0);
    const [settings, setSettings] = useState({
        joker: 30,
        min: 1,
        max: 50
    })

    const onStart = () => {
        setIsAnimated(true);
        setTimeout(() => {
            onEnd()
        }, 6000)
    }

    const onEnd = () => {
        let currentResult = getResult();
        setCurrentResult(currentResult);
        setIsAnimated(false);

        let newResultList = [...resultList, currentResult];
        setResultList(newResultList);
    }

    const onRestart = () => {
       setCurrentResult(0);
       setIsAnimated(null);
       setResultList([]);
    };

    const onChange = (e, type) => {
        let value = e.target.value;

        let newSettings = {
            ...settings,
            [type]: value
        }

        setSettings(newSettings)
    }

    const getResult = () => {
        // 判斷是否要鬼牌，初始機率 30%
        let isJoker = randomIntFromInterval(1, 100) <= parseInt(settings.joker);
        if (isJoker) {
            return "joker";
        }
        // 找出數字，初始 1 ~ 50
        return randomIntFromInterval(settings.min, settings.max);
    }

    return (
        <div className="App">
            <Train isAnimated={isAnimated}/>
            <Slot isAnimated={isAnimated} currentResult={currentResult}/>
            <div className="start-button" onClick={onStart}>
                按一下開始
            </div>
            <ResultList resultList={resultList}/>
            <CopyRight />
            <Settings
                joker={settings.joker}
                min={settings.min}
                max={settings.max}
                onChange={onChange}
                onRestart={onRestart}
            />
            {
                isAnimated &&
                <audio src={Audio_Train} autoPlay></audio>
            }
        </div>
    );
}

const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
