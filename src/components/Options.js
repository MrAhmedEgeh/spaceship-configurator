import poly from '../assets/Polygon 1.png';
import {useDispatch} from 'react-redux';
import {selectColor, selectDrive, selectPackage, selectPower} from '../actions';

function Options({type, price, text, children, color, optionClass, id}) {
    const dispatch = useDispatch();

    return (
        type === "color" ?
        (<div className={`option ${optionClass}`} onClick={(e) =>  console.log(dispatch(selectColor(price, id)))}>
            <span style={{backgroundColor: color}} className="color"></span>
            <span className="pt">+{price}€</span>
            <span className="pt">{text}</span>
        </div>)
        :
        type === "power" || type === "drive" ?
        (<div className={`option ${optionClass}`}  onClick={() => type === 'drive' ? dispatch(selectDrive(price, id)) : type === 'power' ? dispatch(selectPower(price, id)) : ''}>
        <span className="pt">{text}</span>
        <span className="pt">+{price}€</span>
        </div>)
        :
        type === "package" ?
        (<div className={`option ${optionClass} packa`} onClick={() => dispatch(selectPackage(price, id))}>
        <div className="pt">{text}</div>
        <div className="pt">{price !== undefined ? ('+' + price + '€') : ''}</div>
        <div className='children'>
            {
                children.map((child, i) => <div className="packages" key={i}><img src={poly} alt="triangle" /> {child}</div>)
            }
        </div>
        </div>)
        :
        ''
    );
}

export default Options;