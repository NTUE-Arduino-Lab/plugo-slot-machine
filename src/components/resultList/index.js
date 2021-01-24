import './style.css';

const ResultList = ({resultList}) => {
    return (
        <div className="result-list">
            <h2 style={{fontWeight: 'bold'}}>結果紀錄：</h2>
            {
                resultList.map((result, i) => {
                    let key = `${result}-${i}`;
                    return (
                        <div key={key} className="item-wrapper">
                            <h2 style={{fontSize: "4em", marginRight: "0.5em"}}>{i + 1}.</h2>
                            <h2 style={{fontSize: "4em"}}>{result}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResultList;