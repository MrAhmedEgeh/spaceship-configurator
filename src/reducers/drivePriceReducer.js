function drivePriceReducer(state = {value: 0, id: 0}, action) {
    switch(action.type){
        case "select drive":
            const newState = { ...state, value: action.price, id: action.id }
            return newState
        default:
            return state

    }
}

export default drivePriceReducer;