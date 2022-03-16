import Option from './Options';
import {useSelector} from 'react-redux';

function Power() {
    const powerState = useSelector(state => state.power);
    const powers = [
        {id: 0, text: '100 MW', price: 0},
        {id: 1, text: '150 MW', price: 200},
        {id: 2, text: '200 MW', price: 500},
    ];
    return (
        <div className="power">
            <h2>Select power:</h2>
            <div className="options-container">
            {
                powers.map(pw => (
                    <Option 
                    key={pw.id}
                    id={pw.id}
                    optionClass={pw.id === powerState.id ? "active" : ''} 
                    type={"power"} 
                    price={pw.price} 
                    text={pw.text}/>
                ))
            }

            </div>
        </div>
    );
}

export default Power;