import './style.css';

const Settings = ({joker, min, max, onRestart, onChange}) => {
    return (
        <div className="settings">
            <div className="wrapper">
                <div className="reset-button" onClick={onRestart}>
                    重新開始
                </div>
            </div>
            <div className="wrapper">
                Joker 機率：
                <input
                    type="range" min={1} max={100} value={joker}
                    onChange={e => onChange(e, 'joker')}
                    style={{background: "orange", borderRadius: "10px", marginRight: '1em'}}
                />
                ({joker}%）
            </div>
            <div className="wrapper">
                最小值：
                <input
                    value={min}
                    onChange={e => onChange(e, 'min')}
                    style={{paddingLeft: "1em"}}
                />
            </div>
            <div className="wrapper">
                最大值：
                <input
                    value={max}
                    onChange={e => onChange(e, 'max')}
                    style={{paddingLeft: "1em"}}
                />
            </div>
        </div>
    )
}

export default Settings;