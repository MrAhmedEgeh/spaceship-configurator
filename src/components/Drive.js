import Option from './Options';
import {useSelector} from 'react-redux';

function Drive() {
    const driveState = useSelector(state => state.drive);
    const drives = [
        {id: 0, text: 'NO', price: 0},
        {id: 1, text: 'YES', price: 1000},
    ];

    return (
        <div className="drive">
            <h2>Warp drive:</h2>
            <div className="options-container">
            {
                drives.map(drive => (
                    <Option 
                    key={drive.id}
                    id={drive.id}
                    optionClass={driveState.id === drive.id ? 'active' : ''} 
                    type={"drive"} 
                    price={drive.price} 
                    text={drive.text}/>
                ))
            }
            </div>
        </div>
    );
}

export default Drive;