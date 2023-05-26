export interface UserState {
    tokens: string,
    id: string,
}

const initialState = {
    tokens: "",
    id: "",
}

export const reducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return {
                tokens: action.payload, id: state.id
            }
        }
        case "ADD_ID": {
            return {
                id: action.payload, tokens: state.tokens
            }
        }
        default:
            return state
    }
}