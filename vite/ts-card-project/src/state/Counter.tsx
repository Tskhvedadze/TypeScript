import { useReducer } from 'react'

const enum ActionTypes {
    INCREMENT,
    DECREMENT,
    RESET,
}

type UpdateAction = {
    type: ActionTypes.INCREMENT | ActionTypes.DECREMENT
    payload: number
}

type ResetAction = {
    type: ActionTypes.RESET
}

type CounterState = {
    count: number
}

type CounterAction = UpdateAction | ResetAction

const initState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { count: state.count + action.payload }

        case ActionTypes.DECREMENT:
            return { count: state.count - action.payload }

        case ActionTypes.RESET:
            return initState

        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <>
            <h1>Count : {state.count}</h1>
            <button
                onClick={() =>
                    dispatch({ type: ActionTypes.INCREMENT, payload: 10 })
                }
            >
                Increment 10
            </button>
            <button
                onClick={() =>
                    dispatch({ type: ActionTypes.DECREMENT, payload: 10 })
                }
            >
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: ActionTypes.RESET })}>
                Reset
            </button>
        </>
    )
}
