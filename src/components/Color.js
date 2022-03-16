import Option from './Options';
import {useSelector} from 'react-redux';
import { useRef } from 'react';
import {store} from '../index';

const Color = () => {
    const colorState = useSelector(state => state.color);
    const colors = [
        {id: 0, color: '#fff', price: 0, text: 'Snow'},
        {id: 1, color: '#FF7A00', price: 100, text: 'Volcano'},
        {id: 2, color: '#6BE4FF', price: 100, text: 'Sky'},
    ]
    const parent = useRef();

    store.subscribe(() => {
        
    })

    return (
        <div>
            <h2>Select color:</h2>
            <div className="options-container" ref={parent}>
           {
               colors.map((color) => (
                <Option 
                key = {color.id}
                id={color.id}
                optionClass={colorState.id === color.id ? ('active') : ('deactive')} 
                type={"color"} 
                color={color.color} 
                price={color.price} 
                text={color.text}/>
            ))
           }
            </div>
        </div>
    );
}

export default Color;