export const formReducer = (state:Object, action:formReducerAction) => {
    console.log("In Form Reducer", {state, action})
    if (action.type === 'reset') {
        return action.value
    }
    if (action.type === 'merge') {
        return Object.assign({}, state, action.value)
    }
    return Object.assign({}, state, {
        [action.type]: action.value
    })
}

interface formReducerAction {
    value: any,
    type: string
}