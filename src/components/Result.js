import {useSelector} from 'react-redux';

function Result() {
    const colorState = useSelector(state => state.color);
    const driveState = useSelector(state => state.drive);
    const powerState = useSelector(state => state.power);
    const packageState = useSelector(state => state.package);

    const attribute = [
        {name: 'Base price:', value: 1000}, 
        {name: 'Color:', value: colorState.value}, 
        {name: 'Power:', value: powerState.value}, 
        {name: 'Warp drive:', value: driveState.value}, 
        {name: 'Option package:', value: packageState.value}, 
    ];
    console.log(colorState)
    return (
        <div className="result">
            <div className="top">
             {
                 attribute.map((att, index) => (
                     (
                      <span className='attributes' key={index}>{att.name} <span className="pd_lf">{att.name !== 'Base price:' ? `+${att.value}` : att.value}€</span></span>
                     )
                     
                 ))
             }
            </div>
            <div className="top total">
                <span>Total<span>{1000 + colorState.value + driveState.value + powerState.value + packageState.value}€</span></span>
            </div>
        </div>
    );
}

export default Result;