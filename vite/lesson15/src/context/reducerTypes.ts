export const enum REDUCER_ACTION_TYPES {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

export type StateTypes = {
    count: number
    text: string
}

export type ReducerAction = {
    type: REDUCER_ACTION_TYPES
    payload?: string
}
