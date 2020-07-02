const numberReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // return state + 1
            return state + action.val
            case 'DECREMENT':
                // return state -1
                return state - action.val
                default:
    }
}
export default numberReducer;