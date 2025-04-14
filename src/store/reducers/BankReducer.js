const initialValue = {
    value: 0
}

export const BankReducer = (state = initialValue , {type , payload}) => {
    switch (type) {
        case "deposit": 
            return { value: state.value + payload }
        case "checkBalance": 
            return { value: state.value }
        case "withdraw":
            return {value : state.value - payload}
        default:
            return state
    }
}