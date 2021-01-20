import './style.css';

const ResultList = ({resultList}) => {
    return (
        <div className="result-list">
            <h2 style={{fontWeight: 'bold'}}>結果紀錄：</h2>
            {
                resultList.map(result => {
                    return (
                        <h2 key={result} style={{fontSize: "4em"}}>{result}</h2>
                    )
                })
            }
        </div>
    )
}

export default ResultList;