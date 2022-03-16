function powerPriceReducer(state = {value: 200, id: 1}, action) {
    switch(action.type){
        case "select power":
            const newState = { ...state, value: action.price, id: action.id }
            return newState
        default:
            return state

    }
}

export default powerPriceReducer;