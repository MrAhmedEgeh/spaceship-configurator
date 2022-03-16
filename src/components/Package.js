import Option from './Options';
import {useSelector} from 'react-redux';

function Package() {
    const packageState = useSelector(state => state.package);
    const packages = [
        {id: 0, name: 'Basic', children: ['Air conditioning', 'Cloth seats', 'Fm radio'], price: 0},
        {id: 1, name: 'Sport', children: ['Air conditioning', 'Cloth seats', 'Fm radio', 'Personal tech support'], price: 100},
        {id: 2, name: 'Lux', children: ['Air conditioning', 'Cloth seats', 'Fm radio', 'Chrome weels', 'Window tint', 'Subwoofer'], price: 500},
    ]
    return (
        <div className="packages">
            <h2>Select option package:</h2>
            <div className="options-container">
            {
                packages.map(pack => (
                    <Option 
                      type="package"
                      key={pack.id}
                      id={pack.id}
                      optionClass={pack.id === packageState.id ? "active" : ''} 
                      text={pack.name}
                      children={pack.children}
                      price={pack.price}
                    />
                ))
            }
            </div>
        </div>
    );
}

export default Package;