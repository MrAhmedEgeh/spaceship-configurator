import drivePriceReducer from "./drivePriceReducer";
import colorPriceReducer from './colorPriceReducer';
import powerPriceReducer from './powerPriceReducer';
import packagePriceReducer from './packagePriceReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    color:  colorPriceReducer,
    power: powerPriceReducer,
    drive: drivePriceReducer,
    package: packagePriceReducer,
})

export default rootReducer;