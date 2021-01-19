import logo from '../../assets/nobg_gdlab_logo.png';
import './style.css';

const CopyRight = () => {
    return (
        <div className="copyright">
            由
            <div style={{
                background: `url(${logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                width: '8em',
                height: '2em',
                marginLeft: '0.5em',
                marginRight: '0.5em'
            }}/>
            支持
        </div>
    )
}

export default CopyRight;